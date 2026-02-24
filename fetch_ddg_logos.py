import os
import urllib.request
import ssl
from duckduckgo_search import DDGS

ssl._create_default_https_context = ssl._create_unverified_context

clients = [
    "BHEL",
    "NLC India",
    "Ashok Leyland",
    "BEML",
    "TATA",
    "NTPC Limited",
    "Goa Shipyard",
    "KSRTC",
    "APSRTC",
    "Larsen & Toubro",
    "IFB Appliances",
    "Whirlpool",
    "Vestel",
    "Samsung",
    "Haier",
    "Godrej",
    "LG Electronics"
]

output_dir = "public/SFL_Clients_Clean"
os.makedirs(output_dir, exist_ok=True)

with DDGS() as ddgs:
    for i, client in enumerate(clients):
         query = f"{client} logo original transparent high resolution png"
         print(f"Searching for: {query}")
         
         # get top 3 results and pick the best one
         results = ddgs.images(query, max_results=3)
         downloaded = False
         
         for res in results:
             if downloaded: break
             image_url = res.get('image')
             if image_url:
                 try:
                     req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
                     with urllib.request.urlopen(req, timeout=10) as img_resp:
                         ext = image_url.split('.')[-1].split('?')[0].lower()
                         if ext not in ['png', 'svg', 'jpg', 'jpeg', 'webp']:
                             ext = "png"
                         
                         safe_name = client.replace(' ', '_').replace('&', 'and')
                         save_path = os.path.join(output_dir, f"{safe_name}.{ext}")
                         
                         with open(save_path, 'wb') as f:
                             f.write(img_resp.read())
                         
                         print(f"✅ Downloaded {client} from {image_url} -> {save_path}")
                         downloaded = True
                 except Exception as e:
                     print(f"⚠️ Failed {image_url}: {e}")
         
         if not downloaded:
             print(f"❌ Failed all attempts for {client}")
