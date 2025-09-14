def _extract_content(msg) -> str:
    """
    Normalize a LangChain/LangGraph response message into plain text.
    Supports both message objects and dict-shaped messages.
    """
    if hasattr(msg, "content"):
        return msg.content
    if isinstance(msg, dict):
        return msg.get("content", "")
    return str(msg)
