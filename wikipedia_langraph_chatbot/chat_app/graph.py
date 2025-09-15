from typing import Annotated
from typing_extensions import TypedDict

from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.checkpoint.memory import InMemorySaver
from langchain_core.messages import SystemMessage

from .config import SYSTEM_PROMPT, get_llm

# ----- State definition -----
class State(TypedDict):
    messages: Annotated[list, add_messages]

# ----- Build graph -----
graph_builder = StateGraph(State)

llm = get_llm()


def ensure_system_message(state: State):
    """
    If there is no system message yet, prepend one using SYSTEM_PROMPT.
    """
    has_system = any(
        (getattr(m, "type", None) == "system")
        or (isinstance(m, dict) and m.get("role") == "system")
        for m in state["messages"]
    )
    if not has_system:
        return {"messages": [SystemMessage(content=SYSTEM_PROMPT)]}
    return {}


def chatbot(state: State):
    """
    Invoke the LLM over the message history in the state.
    """
    response = llm.invoke(state["messages"])
    return {"messages": [response]}


graph_builder.add_node("ensure_system_message", ensure_system_message)
graph_builder.add_node("chatbot", chatbot)
graph_builder.add_edge(START, "ensure_system_message")
graph_builder.add_edge("ensure_system_message", "chatbot")
graph_builder.add_edge("chatbot", END)

# ----- Compile graph with in-memory checkpointing -----
memory = InMemorySaver()
graph = graph_builder.compile(checkpointer=memory)
