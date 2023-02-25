# pip install PyPDF2
# pip install textract
# pip install flask

# ===== Import required libraries ======
import codecs
import PyPDF2
import textract
import re
import string
import pandas as pd
import smtplib

import matplotlib.pyplot as plt

from flask import Flask, request, jsonify

terms = {'Preffered Skills': ['black belt', 'capability analysis', 'control charts', 'doe', 'dmaic', 'fishbone',
                              'gage r&r', 'green belt', 'ishikawa', 'iso', 'kaizen', 'kpi', 'lean', 'metrics',
                              'pdsa', 'performance improvement', 'process improvement', 'quality',
                              'quality circles', 'quality tools', 'root cause', 'six sigma',
                              'stability analysis', 'statistical analysis', 'tqm', 'html'],
        'Technical Skills': ['automation', 'java', 'python', 'c++', 'javascript', 'php', 'ruby', 'web development',
                            'html', 'css', 'angularjs', 'react', 'vue.js', 'django', 'django rest framework', 'swift',
                            'kotlin', 'react native', 'numpy', 'pandas', 'scikit-learn', 'tensorFlow', 'keras',
                            'aws', 'azure', 'google cloud', 'android', 'ios', 'flutter', 'tableu', 'git', 'github',
                            'mongodb', 'express.js', 'nodejs',
                            'analytics', 'api', 'aws', 'big data', 'busines intelligence', 'clustering', 'code',
                            'coding', 'data', 'database', 'data mining', 'data science', 'deep learning', 'hadoop',
                            'hypothesis test', 'iot', 'internet', 'machine learning', 'modeling', 'nosql', 'nlp',
                            'predictive', 'programming', 'python', 'r', 'sql', 'tableau', 'text mining',
                            'visualuzation'],
        'Non-Technical Skills': ['leadership', 'teamwork', 'problem solving', 'abc analysis', 'apics', 'customer', 'customs', 'delivery', 'distribution',
                                'eoq', 'epq', 'fleet', 'forecast', 'inventory', 'logistic', 'materials', 'outsourcing', 'procurement',
                                'reorder point', 'rout', 'safety stock', 'scheduling', 'shipping', 'stock', 'suppliers',
                                'third party logistics', 'transport', 'transportation', 'traffic', 'supply chain',
                                'vendor', 'warehouse', 'wip', 'work in progress', 'leadership', 'management', 'planning', 'health',
                                'hospital', 'human factors', 'medical', 'reporting system', 'communication']
        }


app = Flask(__name__)


@app.route('/scan', methods=['GET', 'POST'])
def scanResume():

  # ===== PDF Opening, Reading and Text Extraction =====
  def decrypt(filepath):
    with open(filepath, "rb") as f:
          b64PDF = codecs.encode(f.read(), 'base64')
          Sb64PDF = b64PDF.decode('utf-8')
          bretdata = str(Sb64PDF).encode('utf-8')
          bPDFout = codecs.decode(bretdata, 'base64')
          datafile = open(filepath, 'wb')
          datafile.write(bPDFout)
          datafile.close()
    print("DECRYPTED")
    return (filepath)
    # print(filepath)
    return filepath

  pdfFileObj = open(decrypt(request.args['pdf_file']), 'rb')
  # print(request.args['pdf_file'])
  # Open pdf file
  # if request.method=="POST":
  #   # pdfFileObj = open(decrypt(request.form.get('pdf')),'rb')
  #   print(decrypt(request.form.get('pdf')))
  # else:
  #   # pdfFileObj=open(decrypt(request.args.get('pdf')),'rb')
  #   print(request.args)

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
      count += 1
      text += pageObj.extract_text()

  # ===== Text Cleaning =====

#   Convert all strings to lowercase
  text = text.lower()

#   Remove numbers
  text = re.sub(r'\d+', '', text)

  # Remove punctuation
  text = text.translate(str.maketrans('', '', string.punctuation))

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
                  preferred += 3
          scores.append(preferred)

      elif area == 'Technical Skills':
          for word in terms[area]:
              if word in text:
                  technical += 2
          scores.append(technical)

      elif area == 'Non-Technical Skills':
          for word in terms[area]:
              if word in text:
                  nontechnical += 1
          scores.append(nontechnical)

  # ===== Create a data frame with the scores summary =====

  summary = pd.DataFrame(scores, index=terms.keys(), columns=[
                         'score']).sort_values(by='score', ascending=False)
#   print(summary)

  total = preferred+technical+nontechnical
  print(f'Total: {total}')
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
  splitted = text.split()
  # print(splitted)
  we = 0
  mainInd = 0
  endInd = len(splitted)
  for word2 in splitted:
    if (word2 == "work" and mainInd == 0):
        mainInd = splitted.index(word2)
        # print(word2)
        # print(mainInd)
    elif (word2 in ["certificates", "honors", "awards", "skill", "education", "summary", "profile", "projects"]):
        endInd = splitted.index(word2)
        # print(endInd)
  # print(mainInd,endInd)
  for x in range(mainInd, endInd):
    str1 = ""
    str2 = ""
    # print("SOMETHING"+splitted[x])
    if splitted[x] in months.keys():
        str1 = splitted[x]
        # print(str1)
        for i in range(x+1, len(splitted)):
            if splitted[i] in months.keys():
                str2 = splitted[i]
                if months[str2]-months[str1] < 0:
                    we = we + (12+months[str2]-months[str1])
                else:
                    we = we + (months[str2]-months[str1])
                break
  print(we)
  data = {
    "skills": total,
    "we": we
  }


# list of email_id to send the mail
  li = [request.args['email']]

  for dest in li:
    s = smtplib.SMTP('smtp.gmail.com', 587)
    s.starttls()
    s.login("consoleiomkcj@gmail.com", "unscriptMKCJ")
    message = "Congratulations, you have been Shortlisted for the Event"
    s.sendmail("consoleiomkcj@gmail.com", dest, message)
    s.quit()
  return jsonify(data)
# with app.test_request_context():
#   print("REQUEST",request)
# with app.test_client() as client:
#     client.get('/scan')
#     # the contexts are not popped even though the request ended
#     print("PATH",request.path)

if __name__ == '__main__':
  app.run()


# my_db=MongoClient()
# fs=GridFSBucket(my_db)
# with open('my-copy.pdf','wb+') as file:
#     fs.download_to_stream_by_name('MANN RESUMe FINAL 2.pdf',file)
#     scanResume(file)

# scanResume('Chaitya_Resume.pdf')
# scanResume('Jigar_Resume.pdf')
# scanResume('Kreena_Resume.pdf')
# scanResume('Mann_Resume.pdf')

# res = {"Console.io":['Chaitya_Resume.pdf','Jigar_Resume.pdf','Kreena_Resume.pdf','Mann_Resume.pdf'],
#        "DeBuglars":['Vatsal_Resume.pdf','Medha_Resume.pdf','Sahil_Resume.pdf','Meet_Resume.pdf'],
#        "Code In Node":['Meghesh_resume.pdf','Yash_Resume.pdf','Shantanu_Resume.pdf'],
#        "AJAX":['Tejas_Resume.pdf','Nishant_Resume.pdf'],
#        "Cyntinal":['Yash1_Resume.pdf','Ayush_Resume.pdf','Atharva_Resume.pdf','Dhruvil_Resume.pdf'],
#        "Hugs for Bugs":['Mihir_Resume.pdf','Vivek_Resume.pdf']
#       }
# teamscore = {}
# for i,j in res.items():
#     # print(i,j)
#     ts=0
#     for x in j:
#         ts=scanResume(x,ts)
#     teamscore[i]=ts/len(j)
# print(teamscore)
# import operator
# sorted_teamscore = dict( sorted(teamscore.items(), key=operator.itemgetter(1),reverse=True))
# print(sorted_teamscore)

# size = 4
# shortlisted = dict(list(sorted_teamscore.items())[0: size])
# for i in shortlisted:
#     print(i)