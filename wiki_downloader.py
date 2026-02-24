import urllib.request
import json
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

# Exact Wikipedia File names for the 17 unique companies
files = {
    "bhel": "File:Bharat_Heavy_Electricals_Logo.svg",
    "nlc": "File:NLC_India_Limited_logo.png",
    "ashok_leyland": "File:Ashok_Leyland_logo.svg",
    "beml": "File:Bharat_Earth_Movers_logo.svg",
    "tata": "File:Tata_logo.svg",
    "ntpc": "File:NTPC_Logo.svg",
    "goa_shipyard": "File:Goa_Shipyard_logo.png",
    "ksrtc": "File:KSRTC_Logo.svg",
    "apsrtc": "File:APSRTC_Logo.svg",
    "landt": "File:L&T.svg",
    "ifb": "File:IFB_logo.svg",
    "whirlpool": "File:Whirlpool_Corporation_logo.svg",
    "vestel": "File:Vestel_logo.svg",
    "samsung": "File:Samsung_Logo.svg",
    "haier": "File:Haier_logo.svg",
    "godrej": "File:Godrej_Logo.svg",
    "lg": "File:LG_logo_(2015).svg"
}

output_dir = "public/SFL_Clients_Clean"
os.makedirs(output_dir, exist_ok=True)

base_api = "https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles="
commons_api = "https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&format=json&titles="

for name, filename in files.items():
    # Try wikipedia first
    encoded_title = urllib.parse.quote(filename)
    url = base_api + encoded_title
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            page = list(pages.values())[0]
            
            image_url = None
            if 'imageinfo' in page:
                image_url = page['imageinfo'][0]['url']
            else:
                # Try wikimedia commons
                commons_url = commons_api + encoded_title
                creq = urllib.request.Request(commons_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(creq) as cresp:
                    cdata = json.loads(cresp.read().decode())
                    cpages = cdata['query']['pages']
                    cpage = list(cpages.values())[0]
                    if 'imageinfo' in cpage:
                        image_url = cpage['imageinfo'][0]['url']
            
            if image_url:
                ext = image_url.split('.')[-1].lower()
                save_path = os.path.join(output_dir, f"{name}.{ext}")
                
                img_req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(img_req) as img_resp:
                    with open(save_path, 'wb') as f:
                        f.write(img_resp.read())
                print(f"✅ Downloaded {name} -> {ext}")
            else:
                print(f"❌ Failed to find image url for {name}")
                
    except Exception as e:
        print(f"⚠️ Error fetching {name}: {e}")
