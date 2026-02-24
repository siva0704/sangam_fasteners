import urllib.request
import json
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

companies = {
    "BHEL": "Bharat_Heavy_Electricals_Limited",
    "NLC": "NLC_India_Limited",
    "Ashok_Leyland": "Ashok_Leyland",
    "BEML": "BEML",
    "TATA": "Tata_Group",
    "NTPC": "NTPC_Limited",
    "Goa_Shipyard": "Goa_Shipyard",
    "KSRTC": "Karnataka_State_Road_Transport_Corporation",
    "APSRTC": "Andhra_Pradesh_State_Road_Transport_Corporation",
    "LandT": "Larsen_%26_Toubro",
    "IFB": "IFB_Industries",
    "Whirlpool": "Whirlpool_Corporation",
    "Vestel": "Vestel",
    "Samsung": "Samsung",
    "Haier": "Haier",
    "Godrej": "Godrej_Group",
    "LG": "LG_Corporation"
}

output_dir = "public/SFL_Clients_HQ"
os.makedirs(output_dir, exist_ok=True)

for name, title in companies.items():
    url = f"https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles={title}&format=json&pithumbsize=800"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            page = list(pages.values())[0]
            if 'thumbnail' in page:
                image_url = page['thumbnail']['source']
                ext = image_url.split('.')[-1]
                if len(ext) > 4:
                    ext = "png" # fallback
                save_path = os.path.join(output_dir, f"{name.lower()}.{ext}")
                
                # download image
                img_req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(img_req) as img_resp:
                    with open(save_path, 'wb') as f:
                        f.write(img_resp.read())
                print(f"Downloaded {name} to {save_path}")
            else:
                print(f"No thumbnail found for {name}")
    except Exception as e:
        print(f"Failed to fetch {name}: {e}")
