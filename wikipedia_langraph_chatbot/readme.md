# Simple Chat App (LangGraph + Gemini)

A tiny CLI chatbot split into a few files, with optional `wiki` shortcuts.

## Prereqs
- Python 3.9+ (3.11/3.12 recommended)
- A Google AI key in `GOOGLE_API_KEY`

## Setup (venv)
```bash
# from project root
python -m venv .venv
# macOS/Linux
source .venv/bin/activate
# Windows PowerShell
.\.venv\Scripts\Activate.ps1

# install dependencies
pip install -r requirements.txt

# set up .env
change .env.example to .env and put your google api key.

# starting
cd chat_app
python main.py