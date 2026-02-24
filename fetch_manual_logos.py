import os
import urllib.request
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

# Hand-picked direct links for the missing/low-quality logos
missing = {
    "Goa_Shipyard.png": "https://upload.wikimedia.org/wikipedia/en/8/87/Goa_Shipyard_logo.png",
    "KSRTC.png": "https://upload.wikimedia.org/wikipedia/commons/5/52/KSRTC_Logo.png",
    "APSRTC.png": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/APSRTC_Logo.svg/1200px-APSRTC_Logo.svg.png",
    "LandT.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/L%26T.svg/1200px-L%26T.svg.png",
    "IFB.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IFB_Appliances_Logo.svg/1200px-IFB_Appliances_Logo.svg.png",
    "Godrej.png": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Godrej_Logo.svg/1200px-Godrej_Logo.svg.png",
    "BEML.png": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Bharat_Earth_Movers_logo.svg/1200px-Bharat_Earth_Movers_logo.svg.png"
}

output_dir = "public/SFL_Clients_Clean"

for name, url in missing.items():
    save_path = os.path.join(output_dir, name)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(save_path, 'wb') as f:
                f.write(response.read())
        print(f"✅ Downloaded {name}")
    except Exception as e:
        print(f"❌ Failed {name}: {e}")
