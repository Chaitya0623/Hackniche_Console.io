# pip install PyPDF2
# pip install textract
# pip install pymongo

# ===== Import required libraries ======
import PyPDF2
import textract
import re
import string
import pandas as pd
import matplotlib.pyplot as plt

from pymongo import MongoClient
from gridfs  import GridFSBucket

terms = {'Preffered Skills':['black belt','capability analysis','control charts','doe','dmaic','fishbone',
                              'gage r&r', 'green belt','ishikawa','iso','kaizen','kpi','lean','metrics',
                              'pdsa','performance improvement','process improvement','quality',
                              'quality circles','quality tools','root cause','six sigma',
                              'stability analysis','statistical analysis','tqm','html'],      
        'Technical Skills':['automation','java','python','c++','javascript','php','ruby','web development',
                            'html','css','angularjs','react','vue.js','django','django rest framework','swift',
                            'kotlin','react native','numpy','pandas','scikit-learn','tensorFlow','keras',
                            'aws','azure','google cloud','android','ios','flutter','tableu','git','github',
                            'mongodb','express.js','nodejs', 
                            'analytics','api','aws','big data','busines intelligence','clustering','code',
                            'coding','data','database','data mining','data science','deep learning','hadoop',
                            'hypothesis test','iot','internet','machine learning','modeling','nosql','nlp',
                            'predictive','programming','python','r','sql','tableau','text mining',
                            'visualuzation'],
        'Non-Technical Skills':['leadership','teamwork','problem solving','abc analysis','apics','customer','customs','delivery','distribution',
                                'eoq','epq','fleet','forecast','inventory','logistic','materials','outsourcing','procurement',
                                'reorder point','rout','safety stock','scheduling','shipping','stock','suppliers',
                                'third party logistics','transport','transportation','traffic','supply chain',
                                'vendor','warehouse','wip','work in progress', 'leadership','management','planning','health',
                                'hospital','human factors','medical','reporting system','communication']
        }

def scanResume(resume): 

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

  # ===== Scores Calculation =====

  # Initializie score counters for each area
  preferred = 0
  technical = 0
  nontechnical = 0

  # Create an empty list where the scores will be stored
  scores = []

  # Obtain the scores for each area
  for area in terms.keys():
          
      if area == 'Preffered Skills':
          for word in terms[area]:
              if word in text:
                  preferred +=3
          scores.append(preferred)
          
      elif area == 'Technical Skills':
          for word in terms[area]:
              if word in text:
                  technical +=2
          scores.append(technical)
          
      elif area == 'Non-Technical Skills':
          for word in terms[area]:
              if word in text:
                  nontechnical +=1
          scores.append(nontechnical)

  # ===== Create a data frame with the scores summary =====

  summary = pd.DataFrame(scores,index=terms.keys(),columns=['score']).sort_values(by='score',ascending=False)
  print(summary)

  total = preferred+technical+nontechnical
  print(f'Total: {total}')


# my_db=MongoClient()
# fs=GridFSBucket(my_db)
# with open('my-copy.pdf','wb+') as file:
#     fs.download_to_stream_by_name('MANN RESUMe FINAL 2.pdf',file)
#     scanResume(file)

scanResume('Chaitya_Resume.pdf')
scanResume('Jigar_Resume.pdf')
scanResume('Kreena_Resume.pdf')
scanResume('Mann_Resume.pdf')