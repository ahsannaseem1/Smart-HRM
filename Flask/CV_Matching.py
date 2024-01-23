import spacy
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Sample job description and CVs (you should have a list of CVs)


def preprocess_text(text):
    # Remove extra line breaks and leading/trailing whitespaces
    cleaned_text = " ".join(text.split())
    return cleaned_text

def rank_applicants(job_description, applicants):
    # Preprocess the job description and applicants' resumes using spaCy
    job_description = nlp(preprocess_text(job_description))
    resumes = [nlp(preprocess_text(applicant["resume"])) for applicant in applicants]

    # Calculate TF-IDF vectors
    tfidf_vectorizer = TfidfVectorizer()
    tfidf_matrix = tfidf_vectorizer.fit_transform([job_description.text] + [resume.text for resume in resumes])

    # Calculate cosine similarity
    cosine_similarities = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:]).flatten()

    # Rank applicants based on cosine similarity
    applicant_scores = list(zip(range(1, len(cosine_similarities) + 1), cosine_similarities))
    applicant_scores.sort(key=lambda x: x[1], reverse=True)

    # Assign rankings to each applicant
    for i, score in enumerate(applicant_scores):
        applicants[score[0] - 1]["ranking"] = i + 1

    # Select the top 10 applicants
    top_10_applicants = [applicant for applicant in applicants if "ranking" in applicant][:10]

    # Return the ranked list of applicants
    return top_10_applicants

# data = rank_applicants(job_description, applicants)
# print(data)
