# import PdfFileWriter and PdfFileReader 
# class from PyPDF2 library
from PyPDF2 import PdfFileWriter, PdfFileReader
  
# Create a PdfFileWriter object
out = PdfFileWriter()
  
# Open encrypted PDF file with the PdfFileReader
file = PdfFileReader("1676620809430_MANN.pdf")
  
# Store correct password in a variable password.
password = "pass"

import codecs

# Check if the opened file is actually Encrypted
if file.isEncrypted:
  
    # If encrypted, decrypt it with the password
    file.decrypt(password)
  
    # Now, the file has been unlocked.
    # Iterate through every page of the file
    # and add it to our new file.
    for idx in range(file.numPages):
        
        # Get the page at index idx
        page = file.getPage(idx)
          
        # Add it to the output file
        out.addPage(page)
      
    # Open a new file "myfile_decrypted.pdf"
    with open("1676620809430_MANN.pdf", "wb") as f:
        
        # Write our decrypted PDF to this file
        out.write(f)
  
    # Print success message when Done
else:
    print("File decrypted Successfully.")
    with open("1676620809430_MANN.pdf", "rb") as f:
        b64PDF = codecs.encode(f.read(), 'base64')
        Sb64PDF=b64PDF.decode('utf-8')
        bretdata=str(Sb64PDF).encode('utf-8')
        bPDFout=codecs.decode(bretdata, 'base64')
        datafile=open('str1.pdf','wb')
        datafile.write(bPDFout)
        datafile.close()
    # If file is not encrypted, print the 
    # message
    print("File already decrypted.")