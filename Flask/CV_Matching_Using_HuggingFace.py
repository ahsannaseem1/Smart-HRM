from transformers import AutoTokenizer, AutoModel
import torch
import torch.nn.functional as F
from sklearn.metrics.pairwise import cosine_similarity

def mean_pooling(model_output, attention_mask):
    token_embeddings = model_output[0]
    input_mask_expanded = attention_mask.unsqueeze(-1).expand(token_embeddings.size()).float()
    return torch.sum(token_embeddings * input_mask_expanded, 1) / torch.clamp(input_mask_expanded.sum(1), min=1e-9)

def rank_applicants(job_description, applicants):
    # Load pre-trained model
    tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/all-mpnet-base-v2')
    model = AutoModel.from_pretrained('sentence-transformers/all-mpnet-base-v2')

    # Tokenize job description
    encoded_job_description = tokenizer(job_description, padding=True, truncation=True, return_tensors='pt')

    # Compute token embeddings for job description
    with torch.no_grad():
        job_description_output = model(**encoded_job_description)

    # Perform pooling for job description
    job_description_embedding = mean_pooling(job_description_output, encoded_job_description['attention_mask'])
    job_description_embedding = F.normalize(job_description_embedding, p=2, dim=1)

    # Tokenize and compute embeddings for resumes
    resume_texts = [applicant.get("resume", "") for applicant in applicants]
    encoded_resumes = tokenizer(resume_texts, padding=True, truncation=True, return_tensors='pt')

    with torch.no_grad():
        resumes_output = model(**encoded_resumes)

    # Perform pooling for resumes
    resume_embeddings = mean_pooling(resumes_output, encoded_resumes['attention_mask'])
    resume_embeddings = F.normalize(resume_embeddings, p=2, dim=1)

    # Calculate cosine similarity between job description and resumes
    cosine_similarities = cosine_similarity(job_description_embedding, resume_embeddings)
    ranking = list(enumerate(cosine_similarities.flatten(), start=1))
    ranking.sort(key=lambda x: x[1], reverse=True)

    # Assign rankings to each applicant
    for i, (resume_index, similarity) in enumerate(ranking, start=1):
        applicants[resume_index - 1]["ranking"] = i

    # Sort the applicants based on ranking
    sorted_applicants = sorted(applicants, key=lambda x: x.get("ranking", float('inf')))

    # Return the top 10 ranked applicants
    top_10_applicants = sorted_applicants[:10]

    return top_10_applicants

# Example usage
job_description = "Looking for a software engineer with experience in machine learning and natural language processing."
applicants_data =[{'id': '65d0f79b203998b62f9be924', 'name': 'muhammad abdullah', 'phoneNumber': '3101404487', 'email': 'hafizzabdullah999@gmail.com', 'password': '$2b$10$5rRTQgmlm9klRHc0wZZ0yO7GK1IWMXnUnvBarJNujOfPbu.GHZPqS', 'resume': "\n\nContact\nEducation\n+923101404487\nPhone\nhafizzabdullah999@gmail.com\nEmail\nwww.linkedin.com/in/hafiz-muhammad-\nabdullah-\nLinkedin\nMUHAMMAD ABDULLAH\nSOFTWARE ENGINEER\nI  am  a  Software  Engineering  student  at  Comsats  University  Lahore,\nThroughout my degree, I have acquired proficiency in programming,\nobject-oriented programming (OOP), data structures, algorithms, and\ndatabases. My focus has been on building a solid foundation in these\nareas.\nProjects\nComsats University Lahore Campus\nPunjab Group of Colleged\nSoftware Engineering\nICS\n2020-present\n2018-2020\nHTML/CSS\nSQL\nNoSQL\nEnglish\nUrdu\nSkills\nLanguage\nJavaScript\nReact.Js\nNode.Js\nUser Authentication In Mern\nFeatures: User Sign Up , Sign up with google (oauth 20) , JWT\n(javascript web token) storing in the user's browser , User Sign In\nusing JWT , Showing dashboard on Sign In.\nE-Commerce website in MERN\nFeatures: Product  Listing,  Product  Details,Add  to  Cart,\nDelete from Cart, Update Cart, Persistent Cart Storage using\ncookie, Remove Items from Cart, Checkout:\nLearnify app in React native and Firebase\nStudent: Registration  ,  Login  ,  view  teachers  list  ,  make\nappointment , realtime chat , change profile , reset password\nTeacher:  Registration , Login , accept/remove hiring request\n, change profile info , reset password.\nGym Management System using Linked List in C\nFeatures: Member SignUp , Login , change password , change\nname , pay fee.\nAdmin  login  ,  see  all  members  ,  search  by  name  ,  delete\nmember , check fee status.\nRestaurant Management System Database (SQL Server)\nFeatures: Database Schema , Queries , Procedures , triggers\n,Views \nhttps://github.com/MuhammadAbdullah9999\nGithub\nSmart HRM\nDescription: HR and Payroll system with CV matching with Job\ndescription using ML model.\nGit\nGitHub\nExpress.Js"}, {'id': '65d0f94d203998b62f9be925', 'name': 'muhammad abdullah', 'phoneNumber': '3101404487', 'email': 'hafizzabdullahhjk@gmail.com', 'password': '$2b$10$ndY/2iEwpDfYDmbuzvNMmeP06L3IyqNmdzy9rwp3koFyf.LGwDI66', 'resume': "\n\nContact\nEducation\n+923101404487\nPhone\nhafizzabdullah999@gmail.com\nEmail\nwww.linkedin.com/in/hafiz-muhammad-\nabdullah-\nLinkedin\nMUHAMMAD ABDULLAH\nSOFTWARE ENGINEER\nI  am  a  Software  Engineering  student  at  Comsats  University  Lahore,\nThroughout my degree, I have acquired proficiency in programming,\nobject-oriented programming (OOP), data structures, algorithms, and\ndatabases. My focus has been on building a solid foundation in these\nareas.\nProjects\nComsats University Lahore Campus\nPunjab Group of Colleged\nSoftware Engineering\nICS\n2020-present\n2018-2020\nHTML/CSS\nSQL\nNoSQL\nEnglish\nUrdu\nSkills\nLanguage\nJavaScript\nReact.Js\nNode.Js\nUser Authentication In Mern\nFeatures: User Sign Up , Sign up with google (oauth 20) , JWT\n(javascript web token) storing in the user's browser , User Sign In\nusing JWT , Showing dashboard on Sign In.\nE-Commerce website in MERN\nFeatures: Product  Listing,  Product  Details,Add  to  Cart,\nDelete from Cart, Update Cart, Persistent Cart Storage using\ncookie, Remove Items from Cart, Checkout:\nLearnify app in React native and Firebase\nStudent: Registration  ,  Login  ,  view  teachers  list  ,  make\nappointment , realtime chat , change profile , reset password\nTeacher:  Registration , Login , accept/remove hiring request\n, change profile info , reset password.\nGym Management System using Linked List in C\nFeatures: Member SignUp , Login , change password , change\nname , pay fee.\nAdmin  login  ,  see  all  members  ,  search  by  name  ,  delete\nmember , check fee status.\nRestaurant Management System Database (SQL Server)\nFeatures: Database Schema , Queries , Procedures , triggers\n,Views \nhttps://github.com/MuhammadAbdullah9999\nGithub\nSmart HRM\nDescription: HR and Payroll system with CV matching with Job\ndescription using ML model.\nGit\nGitHub\nExpress.Js"}, {'id': '65d0f9867638bbff5252bc6d', 'name': 'muhammad abdullah', 'phoneNumber': '3101404487', 'email': 'hafizzabdullahh@gmail.com', 'password': '$2b$10$s93jRf5sv5PYXtqDFZG3G..cM845UeAQED3yPy9HIKezMG.BhdSzu', 'resume': "\n\nContact\nEducation\n+923101404487\nPhone\nhafizzabdullah999@gmail.com\nEmail\nwww.linkedin.com/in/hafiz-muhammad-\nabdullah-\nLinkedin\nMUHAMMAD ABDULLAH\nSOFTWARE ENGINEER\nI  am  a  Software  Engineering  student  at  Comsats  University  Lahore,\nThroughout my degree, I have acquired proficiency in programming,\nobject-oriented programming (OOP), data structures, algorithms, and\ndatabases. My focus has been on building a solid foundation in these\nareas.\nProjects\nComsats University Lahore Campus\nPunjab Group of Colleged\nSoftware Engineering\nICS\n2020-present\n2018-2020\nHTML/CSS\nSQL\nNoSQL\nEnglish\nUrdu\nSkills\nLanguage\nJavaScript\nReact.Js\nNode.Js\nUser Authentication In Mern\nFeatures: User Sign Up , Sign up with google (oauth 20) , JWT\n(javascript web token) storing in the user's browser , User Sign In\nusing JWT , Showing dashboard on Sign In.\nE-Commerce website in MERN\nFeatures: Product  Listing,  Product  Details,Add  to  Cart,\nDelete from Cart, Update Cart, Persistent Cart Storage using\ncookie, Remove Items from Cart, Checkout:\nLearnify app in React native and Firebase\nStudent: Registration  ,  Login  ,  view  teachers  list  ,  make\nappointment , realtime chat , change profile , reset password\nTeacher:  Registration , Login , accept/remove hiring request\n, change profile info , reset password.\nGym Management System using Linked List in C\nFeatures: Member SignUp , Login , change password , change\nname , pay fee.\nAdmin  login  ,  see  all  members  ,  search  by  name  ,  delete\nmember , check fee status.\nRestaurant Management System Database (SQL Server)\nFeatures: Database Schema , Queries , Procedures , triggers\n,Views \nhttps://github.com/MuhammadAbdullah9999\nGithub\nSmart HRM\nDescription: HR and Payroll system with CV matching with Job\ndescription using ML model.\nGit\nGitHub\nExpress.Js"}]


result = rank_applicants(job_description, applicants_data)
print("Ranked Applicants:", result)
