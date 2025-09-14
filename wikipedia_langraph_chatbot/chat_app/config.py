import os
from dotenv import load_dotenv, find_dotenv
from langchain_google_genai import GoogleGenerativeAI

# Load environment variables
load_dotenv(find_dotenv(), override=True)

# ===== App settings =====
SYSTEM_PROMPT = (
    "You are a concise, accurate assistant. Prefer short answers, "
    "cite assumptions, and ask only essential follow-ups."
)

# Wikipedia language (default: English)
WIKI_LANG = os.environ.get("WIKI_LANG", "en")


def get_llm():
    """
    Construct the Google Generative AI LLM for LangChain.
    You can override the model or temperature with env vars if you want:
      - GOOGLE_GENAI_MODEL (default: 'gemini-2.0-flash')
      - LLM_TEMPERATURE (default: 0.2)
    """
    return GoogleGenerativeAI(
        model=os.environ.get("GOOGLE_GENAI_MODEL", "gemini-2.0-flash"),
        google_api_key=os.environ.get("GOOGLE_API_KEY"),
        temperature=float(os.environ.get("LLM_TEMPERATURE", "0.2")),
    )
