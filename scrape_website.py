import os
import sys
import re
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

sys.stdout.reconfigure(encoding='utf-8')

BASE_URL = "https://metropharmamachines.com/"
OUTPUT_DIR = os.path.join("tempdata", "website_scraped")
HTML_DIR = os.path.join(OUTPUT_DIR, "html")
MARKDOWN_DIR = os.path.join(OUTPUT_DIR, "markdown")
ASSETS_DIR = os.path.join(OUTPUT_DIR, "assets")
DATA_DIR = os.path.join(OUTPUT_DIR, "data")

for d in [OUTPUT_DIR, HTML_DIR, MARKDOWN_DIR, ASSETS_DIR, DATA_DIR]:
    os.makedirs(d, exist_ok=True)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

known_pages = [
    "index.html",
    "about.html",
    "contact.html",
    "solution.html",
    "spares.html",
    "vibrosifter.html"
]

session = requests.Session()
session.headers.update(HEADERS)

def download_file(url, local_path):
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    if os.path.exists(local_path) and os.path.getsize(local_path) > 0:
        print(f"Already downloaded: {local_path}")
        return True
    try:
        r = session.get(url, stream=True, timeout=30)
        if r.status_code == 200:
            with open(local_path, 'wb') as f:
                for chunk in r.iter_content(chunk_size=65536):
                    if chunk:
                        f.write(chunk)
            print(f"Downloaded: {url} -> {local_path} ({os.path.getsize(local_path)} bytes)")
            return True
        else:
            print(f"Failed ({r.status_code}): {url}")
            return False
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def html_to_markdown(soup, page_name):
    # Extract clean text sections
    lines = []
    title = soup.title.string.strip() if soup.title and soup.title.string else page_name
    lines.append(f"# {title}\n")
    lines.append(f"*Source URL: {urljoin(BASE_URL, page_name)}*\n")
    
    # Remove script and style elements
    for s in soup(['script', 'style', 'noscript']):
        s.extract()
        
    body = soup.body if soup.body else soup
    
    for elem in body.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'table', 'blockquote', 'div']):
        name = elem.name
        # avoid duplicate printing from nested containers
        if name == 'div':
            continue
        text = elem.get_text(separator=' ', strip=True)
        if not text:
            continue
        
        if name.startswith('h'):
            level = int(name[1])
            lines.append(f"\n{'#' * level} {text}\n")
        elif name == 'p':
            lines.append(f"{text}\n")
        elif name in ['ul', 'ol']:
            for li in elem.find_all('li', recursive=False):
                li_text = li.get_text(strip=True)
                if li_text:
                    lines.append(f"- {li_text}")
            lines.append("")
        elif name == 'table':
            rows = elem.find_all('tr')
            for tr in rows:
                cols = [td.get_text(strip=True) for td in tr.find_all(['td', 'th'])]
                if cols:
                    lines.append("| " + " | ".join(cols) + " |")
            lines.append("")
            
    return "\n".join(lines)

def run():
    print("Starting site scrape for metropharmamachines.com...")
    all_pages_data = {}
    discovered_asset_urls = set()
    
    for page in known_pages:
        url = urljoin(BASE_URL, page)
        print(f"\nFetching page: {url}")
        r = session.get(url, timeout=20)
        if r.status_code != 200:
            print(f"Failed to fetch {url}: {r.status_code}")
            continue
            
        html_content = r.text
        html_file = os.path.join(HTML_DIR, page)
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        print(f"Saved HTML to {html_file}")
        
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Discover all assets
        for img in soup.find_all('img'):
            src = img.get('src')
            if src:
                full_asset = urljoin(url, src.strip())
                if urlparse(full_asset).netloc == 'metropharmamachines.com':
                    discovered_asset_urls.add(full_asset)
                    
        for link in soup.find_all('link'):
            href = link.get('href')
            if href:
                full_asset = urljoin(url, href.strip())
                if urlparse(full_asset).netloc == 'metropharmamachines.com':
                    discovered_asset_urls.add(full_asset)
                    
        for script in soup.find_all('script'):
            src = script.get('src')
            if src:
                full_asset = urljoin(url, src.strip())
                if urlparse(full_asset).netloc == 'metropharmamachines.com':
                    discovered_asset_urls.add(full_asset)
                    
        for a in soup.find_all('a'):
            href = a.get('href')
            if href:
                full_asset = urljoin(url, href.strip())
                if urlparse(full_asset).netloc == 'metropharmamachines.com':
                    path_lower = urlparse(full_asset).path.lower()
                    if any(path_lower.endswith(ext) for ext in ['.pdf', '.jpg', '.png', '.jpeg', '.webp', '.zip']):
                        discovered_asset_urls.add(full_asset)
                        
        # Also parse CSS background images
        for tag in soup.find_all(True):
            style = tag.get('style', '')
            if 'url(' in style:
                matches = re.findall(r'url\([\'"]?(.*?)[\'"]?\)', style)
                for m in matches:
                    full_asset = urljoin(url, m.strip())
                    if urlparse(full_asset).netloc == 'metropharmamachines.com':
                        discovered_asset_urls.add(full_asset)

        # Generate markdown
        soup_clean = BeautifulSoup(html_content, 'html.parser')
        md_text = html_to_markdown(soup_clean, page)
        md_file = os.path.join(MARKDOWN_DIR, page.replace('.html', '.md'))
        with open(md_file, 'w', encoding='utf-8') as f:
            f.write(md_text)
        print(f"Saved Markdown to {md_file}")
        
        # Collect page structured info
        title = soup.title.string.strip() if soup.title and soup.title.string else ""
        headings = [h.get_text(strip=True) for h in soup.find_all(['h1', 'h2', 'h3', 'h4'])]
        paragraphs = [p.get_text(strip=True) for p in soup.find_all('p') if p.get_text(strip=True)]
        
        all_pages_data[page] = {
            "url": url,
            "title": title,
            "headings": headings,
            "paragraphs": paragraphs,
            "html_file": html_file,
            "markdown_file": md_file
        }

    # Add known server assets from previous probes
    known_server_assets = [
        "https://metropharmamachines.com/Asset/logo/icon.png",
        "https://metropharmamachines.com/Asset/logo/img.jpg",
        "https://metropharmamachines.com/Asset/logo/img_slider.jpg",
        "https://metropharmamachines.com/Asset/logo/Machine/autocoater.png",
        "https://metropharmamachines.com/Asset/logo/Machine/Colloid_Mill.png",
        "https://metropharmamachines.com/Asset/logo/Machine/fbd.png",
        "https://metropharmamachines.com/Asset/logo/Machine/Multi_Mill.png",
        "https://metropharmamachines.com/Asset/logo/Machine/Vacuum_Vibro_Sifter.png",
        "https://metropharmamachines.com/Asset/logo/Machine/Vibro_Sifter.png",
        "https://metropharmamachines.com/Asset/logo/logo.png",
        "https://metropharmamachines.com/Asset/logo/png-photo.png",
        "https://metropharmamachines.com/Asset/logo/WhatsApp Image 2025-05-30 at 8.26.46 PM.jpeg"
    ]
    for k in known_server_assets:
        discovered_asset_urls.add(k)
        
    print(f"\nTotal assets to download: {len(discovered_asset_urls)}")
    downloaded_assets = []
    for asset_url in sorted(discovered_asset_urls):
        rel_path = urlparse(asset_url).path.lstrip('/')
        local_dest = os.path.join(ASSETS_DIR, rel_path)
        success = download_file(asset_url, local_dest)
        if success:
            downloaded_assets.append({
                "url": asset_url,
                "local_path": local_dest,
                "size_bytes": os.path.getsize(local_dest)
            })

    # Save summary data
    with open(os.path.join(DATA_DIR, "pages_data.json"), 'w', encoding='utf-8') as f:
        json.dump(all_pages_data, f, indent=2, ensure_ascii=False)
        
    with open(os.path.join(DATA_DIR, "assets_manifest.json"), 'w', encoding='utf-8') as f:
        json.dump(downloaded_assets, f, indent=2, ensure_ascii=False)
        
    print("\nScrape completed successfully!")

if __name__ == "__main__":
    run()
