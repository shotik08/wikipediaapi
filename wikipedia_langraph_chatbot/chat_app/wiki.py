import re
import requests
from urllib.parse import quote

from config import WIKI_LANG


def _wiki_search_title(query: str, lang: str = WIKI_LANG, timeout: float = 8.0) -> str | None:
    """
    Use MediaWiki 'search' to find the best matching page title for a query.
    Returns the top title or None if not found.
    """
    base = f"https://{lang}.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "list": "search",
        "srsearch": query,
        "srlimit": 1,
        "format": "json",
    }
    r = requests.get(base, params=params, timeout=timeout)
    r.raise_for_status()
    data = r.json()
    hits = data.get("query", {}).get("search", [])
    if hits:
        return hits[0].get("title")
    return None


def _wiki_summary_by_title(title: str, lang: str = WIKI_LANG, timeout: float = 8.0) -> dict | None:
    """
    Fetch summary via REST summary endpoint for a specific page title.
    Returns a dict with keys: title, extract, url (or None if not found).
    """
    base = f"https://{lang}.wikipedia.org/api/rest_v1/page/summary/{quote(title.replace(' ', '_'))}"
    r = requests.get(base, headers={"accept": "application/json"}, timeout=timeout)
    if r.status_code == 404:
        return None
    r.raise_for_status()
    data = r.json()
    return {
        "title": data.get("title") or title,
        "extract": data.get("extract") or "",
        "url": (data.get("content_urls", {}) or {}).get("desktop", {}).get("page")
               or data.get("canonical")
               or f"https://{lang}.wikipedia.org/wiki/{quote(title.replace(' ', '_'))}",
    }


def fetch_wikipedia_summary(query: str, lang: str = WIKI_LANG) -> str:
    """
    High-level convenience: given a user's interest (query),
    search Wikipedia and return a short markdown-formatted summary with a source link.
    """
    query = query.strip()
    if not query:
        return "Please provide a topic to look up on Wikipedia."

    try:
        title = query
        summary = _wiki_summary_by_title(title, lang=lang)
        if not summary:
            title = _wiki_search_title(query, lang=lang)
            if not title:
                return f"I couldn't find a Wikipedia page for “{query}”."
            summary = _wiki_summary_by_title(title, lang=lang)

        if not summary or not summary.get("extract"):
            return f"I couldn't retrieve a summary for “{query}” on Wikipedia."

        extract = summary["extract"].strip()
        extract = re.sub(r"\s+", " ", extract)
        if len(extract) > 800:
            extract = extract[:800].rsplit(" ", 1)[0] + "…"

        return f"**{summary['title']}**\n{extract}\nSource: {summary['url']}"
    except requests.RequestException as e:
        return f"Wikipedia request failed: {e}"


def maybe_handle_wikipedia_command(user_input: str, lang: str = WIKI_LANG) -> str | None:
    """
    If the user explicitly asks for a Wikipedia lookup, handle it here and
    return a ready-to-print answer. Supported forms:
      - 'wiki <topic>'
      - 'wikipedia <topic>'
      - '<topic> (wiki)'
    Otherwise return None.
    """
    s = user_input.strip()
    low = s.lower()

    if low.startswith("wiki "):
        topic = s[5:].strip()
        return fetch_wikipedia_summary(topic, lang=lang)
    if low.startswith("wikipedia "):
        topic = s[10:].strip()
        return fetch_wikipedia_summary(topic, lang=lang)
    if low.endswith("(wiki)"):
        topic = s[:-6].strip()
        return fetch_wikipedia_summary(topic, lang=lang)

    return None
