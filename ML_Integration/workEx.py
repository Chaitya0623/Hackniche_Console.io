# ===== Import required libraries ======
import PyPDF2
import textract
import re
import string
import pandas as pd
import matplotlib.pyplot as plt

from pymongo import MongoClient
from gridfs  import GridFSBucket

months = {
    'jan': 1,
    'january': 1,
    'feb': 2,
    'february': 2,
    'present': 2,
    'mar': 3,
    'march': 3,
    'apr': 4,
    'april': 4,
    'may': 5,
    'jun': 6,
    'june': 6,
    'jul': 7,
    'july': 7,
    'aug': 8,
    'august': 8,
    'sep': 9,
    'september': 9,
    'oct': 10,
    'october': 10,
    'nov': 11,
    'november': 11,
    'dec': 12,
    'december': 12
}

def wEResume(resume, we):  
  # ===== PDF Opening, Reading and Text Extraction =====

  # Open pdf file
  pdfFileObj = open(resume,'rb')

  # Read file
  pdfReader = PyPDF2.PdfReader(pdfFileObj)

  # Get total number of pages
  num_pages = len(pdfReader.pages)

  # Initialize a count for the number of pages
  count = 0

  # Initialize a text empty etring variable
  text = ""

  # Extract text from every page on the file
  while count < num_pages:
      pageObj = pdfReader.pages[count]
      count +=1
      text += pageObj.extract_text()

  # ===== Text Cleaning =====

#   Convert all strings to lowercase
  text = text.lower()

#   Remove numbers
  text = re.sub(r'\d+','',text)

  # Remove punctuation
  text = text.translate(str.maketrans('','',string.punctuation))

  # Month Value Addition
#   for word in months.keys():
#     if word in text:
#         print(word)
  splitted=text.split()
  mainInd=0
  endInd=len(splitted)
  for word2 in splitted:
    if(word2=="work"):
        mainInd=splitted.index(word2)
    elif(word2 in ["certificates","honors","awards","skill","education","summary","profile"]):
        endInd=splitted.index(word2)
  for x in range(mainInd,endInd):
    str1=""
    str2=""
    if splitted[x] in months.keys():
        str1=splitted[x]
        for i in range(x+1,len(splitted)):
            if splitted[i] in months.keys():
                str2=splitted[i]
                if months[str2]-months[str1]<0:
                    we = we + (12+months[str2]-months[str1])
                else:
                    we = we + (months[str2]-months[str1])
                break
  return we


res = {"Console.io":['Chaitya_Resume.pdf','Jigar_Resume.pdf','Kreena_Resume.pdf','Mann_Resume.pdf'],
       "DeBuglars":['Vatsal_Resume.pdf','Medha_Resume.pdf','Sahil_Resume.pdf','Meet_Resume.pdf'],
       "Code In Node":['Meghesh_resume.pdf','Yash_Resume.pdf','Shantanu_Resume.pdf'],
       "AJAX":['Tejas_Resume.pdf','Nishant_Resume.pdf'],
       "Cyntinal":['Yash1_Resume.pdf','Ayush_Resume.pdf','Atharva_Resume.pdf','Dhruvil_Resume.pdf'],
       "Hugs for Bugs":['Mihir_Resume.pdf','Vivek_Resume.pdf']
      }
teamscore = {}
for i,j in res.items():
    we=0
    for x in j:
        we=wEResume(x,we)
    teamscore[i]=we/len(j)
print(teamscore)
import operator
sorted_teamscore = dict( sorted(teamscore.items(), key=operator.itemgetter(1),reverse=True))
print(sorted_teamscore)