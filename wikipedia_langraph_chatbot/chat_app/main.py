from graph import graph
from utils import _extract_content
from wiki import maybe_handle_wikipedia_command


def chat_loop(thread_id: str = "default"):
    print(f"Chat started (thread_id='{thread_id}'). Type 'exit' to quit.")
    print("Tip: type `wiki <topic>` to fetch a Wikipedia summary instantly.")
    while True:
        user_input = input("\nYou: ").strip()
        if user_input.lower() in {"exit", "quit"}:
            print("Bye!")
            break

        wiki_answer = maybe_handle_wikipedia_command(user_input)
        if wiki_answer is not None:
            print(f"Assistant: {wiki_answer}")
            continue

        result_state = graph.invoke(
            {"messages": [{"role": "user", "content": user_input}]},
            config={"configurable": {"thread_id": thread_id}},
        )
        last_msg = result_state["messages"][-1]
        print(f"Assistant: {_extract_content(last_msg)}")


if __name__ == "__main__":
    # quick demo run first
    demo = graph.invoke(
        {"messages": [{"role": "user", "content": "Summarize why the sky looks blue."}]},
        config={"configurable": {"thread_id": "demo"}},
    )
    print("One-shot:", _extract_content(demo["messages"][-1]))
    chat_loop(thread_id="cli-session")
