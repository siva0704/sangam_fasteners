from docx import Document

doc = Document("SFL Resorcs/to set the beanch mark.docx")
for para in doc.paragraphs:
    if para.text.strip():
        print(para.text.strip())
