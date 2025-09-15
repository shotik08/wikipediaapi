from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from .graph import graph
from .utils import _extract_content
from .wiki import maybe_handle_wikipedia_command


class ChatRequest(BaseModel):
    message: str
    thread_id: str | None = None


class ChatResponse(BaseModel):
    reply: str


app = FastAPI(title="Wikipedia LangGraph Chatbot")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/healthz")
def healthz():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest):
    user_input = (req.message or "").strip()
    if not user_input:
        return ChatResponse(reply="Please provide a message.")

    wiki_answer = maybe_handle_wikipedia_command(user_input)
    if wiki_answer is not None:
        return ChatResponse(reply=wiki_answer)

    result_state = graph.invoke(
        {"messages": [{"role": "user", "content": user_input}]},
        config={"configurable": {"thread_id": req.thread_id or "default"}},
    )
    last_msg = result_state["messages"][-1]
    return ChatResponse(reply=_extract_content(last_msg))


