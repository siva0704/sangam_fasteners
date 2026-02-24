import zipfile
import xml.etree.ElementTree as ET

def extract_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            content = docx.read('word/document.xml')
            
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        tree = ET.fromstring(content)
        
        for p in tree.findall('.//w:p', ns):
            texts = p.findall('.//w:t', ns)
            text = ''.join([t.text for t in texts if t.text])
            if text.strip():
                print(text.strip())
    except Exception as e:
        print("Error:", e)

extract_text("SFL Resorcs/to set the beanch mark.docx")
