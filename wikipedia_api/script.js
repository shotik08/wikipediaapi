const LANGUAGE_NAMES = {
  'en': 'English Wikipedia',
  'es': 'Wikipedia en Español',
  'fr': 'Wikipédia en Français',
  'de': 'Wikipedia auf Deutsch',
  'it': 'Wikipedia in Italiano',
  'pt': 'Wikipédia em Português',
  'ru': 'Википедия на русском',
  'ja': '日本語版ウィキペディア',
  'zh': '中文维基百科',
  'ar': 'ويكيبيديا العربية',
  'hi': 'हिन्दी विकिपीडिया',
  'ko': '한국어 위키백과',
  'nl': 'Nederlandse Wikipedia',
  'sv': 'Svenska Wikipedia',
  'no': 'Norsk Wikipedia',
  'da': 'Dansk Wikipedia',
  'fi': 'Suomalainen Wikipedia',
  'pl': 'Polska Wikipedia',
  'tr': 'Türkçe Vikipedi',
  'he': 'ويكيبيديا العربية',
  'th': 'วิกิพีเดียภาษาไทย',
  'vi': 'Wikipedia tiếng Việt',
  'uk': 'Українська Вікіпедія',
  'cs': 'Česká Wikipedia',
  'hu': 'Magyar Wikipédia',
  'ro': 'Wikipedia în română',
  'bg': 'Българска Уикипедия',
  'hr': 'Hrvatska Wikipedija',
  'sr': 'Српска Википедија',
  'sk': 'Slovenská Wikipedia',
  'sl': 'Slovenska Wikipedija',
  'et': 'Eesti Wikipedia',
  'lv': 'Latvijas Vikipēdija',
  'lt': 'Lietuvos Vikipedija',
  'ka': 'ქართული ვიკიპედია'
};

const PLACEHOLDERS = {
  'en': 'Enter a topic...',
  'es': 'Ingrese un tema...',
  'fr': 'Entrez un sujet...',
  'de': 'Geben Sie ein Thema ein...',
  'it': 'Inserisci un argomento...',
  'pt': 'Digite um tópico...',
  'ru': 'Введите тему...',
  'ja': 'トピックを入力...',
  'zh': '输入主题...',
  'ar': 'أدخل موضوعاً...',
  'hi': 'विषय दर्ज करें...',
  'ko': '주제를 입력하세요...',
  'nl': 'Voer een onderwerp in...',
  'sv': 'Ange ett ämne...',
  'no': 'Skriv inn et emne...',
  'da': 'Indtast et emne...',
  'fi': 'Syötä aihe...',
  'pl': 'Wpisz temat...',
  'tr': 'Bir konu girin...',
  'he': 'הכנס נושא...',
  'th': 'ใส่หัวข้อ...',
  'vi': 'Nhập chủ đề...',
  'uk': 'Введіть тему...',
  'cs': 'Zadejte téma...',
  'hu': 'Adjon meg egy témát...',
  'ro': 'Introduceți un subiect...',
  'bg': 'Въведете тема...',
  'hr': 'Unesite temu...',
  'sr': 'Унесите тему...',
  'sk': 'Zadajte tému...',
  'sl': 'Vnesite temo...',
  'et': 'Sisestage teema...',
  'lv': 'Ievadiet tēmu...',
  'lt': 'Įveskite temą...',
  'ka': 'შეიყვანეთ თემა...'
};

const ERROR_MESSAGES = {
  'en': 'Sorry, no result found. Please try a different search term.',
  'es': 'Lo siento, no se encontraron resultados. Intente con otro término.',
  'fr': 'Désolé, aucun résultat trouvé. Essayez avec un autre terme.',
  'de': 'Entschuldigung, kein Ergebnis gefunden. Versuchen Sie einen anderen Suchbegriff.',
  'it': 'Spiacente, nessun risultato trovato. Prova con un altro termine.',
  'pt': 'Desculpe, nenhum resultado encontrado. Tente outro termo.',
  'ru': 'Извините, результат не найден. Попробуйте другой поисковый запрос.',
  'ja': '申し訳ありませんが、結果が見つかりませんでした。別の検索語をお試しください。',
  'zh': '抱歉，未找到结果。请尝试其他搜索词。',
  'ar': 'عذراً، لم يتم العثور على نتيجة. جرب مصطلح بحث آخر.',
  'hi': 'क्षमा करें, कोई परिणाम नहीं मिला। कृपया अन्य खोज शब्द आज़माएं।',
  'ko': '죄송합니다. 결과를 찾을 수 없습니다. 다른 검색어를 시도해 보세요.',
  'nl': 'Sorry, geen resultaat gevonden. Probeer een andere zoekterm.',
  'sv': 'Tyvärr, inget resultat hittades. Försök med en annan sökterm.',
  'no': 'Beklager, ingen resultater funnet. Prøv et annet søkeord.',
  'da': 'Beklager, intet resultat fundet. Prøv et andet søgeord.',
  'fi': 'Pahoittelut, tulosta ei löytynyt. Kokeile toista hakusanaa.',
  'pl': 'Przepraszamy, nie znaleziono wyników. Spróbuj innego hasła.',
  'tr': 'Üzgünüz, sonuç bulunamadı. Başka bir arama terimi deneyin.',
  'he': 'מצטערים, לא נמצאה תוצאה. נסה מונח חיפוש אחר.',
  'th': 'ขออภัย ไม่พบผลลัพธ์ กรุณาลองคำค้นหาอื่น',
  'vi': 'Xin lỗi, không tìm thấy kết quả. Vui lòng thử từ khóa khác.',
  'uk': 'Вибачте, результат не знайдено. Спробуйте інший пошуковий запит.',
  'cs': 'Omlouváme se, nebyl nalezen žádný výsledek. Zkuste jiný vyhledávací výraz.',
  'hu': 'Sajnáljuk, nem található eredmény. Próbáljon meg egy másik keresőkifejezést.',
  'ro': 'Ne pare rău, nu s-a găsit niciun rezultat. Încercați un alt termen de căutare.',
  'bg': 'Съжаляваме, не е намерен резултат. Опитайте с друг термин за търсене.',
  'hr': 'Žao nam je, rezultat nije pronađen. Pokušajte s drugim pojmom pretrage.',
  'sr': 'Извињавамо се, резултат није пронађен. Покушајте са другим термином претраге.',
  'sk': 'Ľutujeme, výsledok nebol nájdený. Skúste iný vyhľadávací výraz.',
  'sl': 'Oprostite, rezultat ni bil najden. Poskusite z drugim iskalnim izrazom.',
  'et': 'Vabandage, tulemust ei leitud. Proovige teist otsingusõna.',
  'lv': 'Atvainojiet, rezultāts nav atrasts. Mēģiniet citu meklēšanas terminu.',
  'lt': 'Atsiprašome, rezultatas nerastas. Pabandykite kitą paieškos terminą.',
  'ka': 'უკაცრავად, შედეგი ვერ მოიძებნა. სცადეთ სხვა ძიების ტერმინი.'
};

let currentLanguage = 'en';
let searchCount = 0;
let isLoading = false;

// Notes functionality
let notes = [];
let editingNoteId = null;

let searchBtn, searchInput, languageSelect, resultDiv, languageInfo, currentLanguageSpan, statsDiv;
let addNoteBtn, clearNotesBtn, noteInput, saveNoteBtn, cancelNoteBtn, notesList, addNoteSection;

function initializeApp() {
 
  searchBtn = document.getElementById('searchBtn');
  searchInput = document.getElementById('searchInput');
  languageSelect = document.getElementById('languageSelect');
  resultDiv = document.getElementById('result');
  languageInfo = document.getElementById('languageInfo');
  currentLanguageSpan = document.getElementById('currentLanguage');
  statsDiv = document.getElementById('stats');
  

  addNoteBtn = document.getElementById('addNoteBtn');
  clearNotesBtn = document.getElementById('clearNotesBtn');
  noteInput = document.getElementById('noteInput');
  saveNoteBtn = document.getElementById('saveNoteBtn');
  cancelNoteBtn = document.getElementById('cancelNoteBtn');
  notesList = document.getElementById('notesList');
  addNoteSection = document.getElementById('addNoteSection');

  setupEventListeners();
  updateLanguageDisplay();
  loadUserPreferences();
  loadNotes();
  displayNotes();
}

function setupEventListeners() {

  searchBtn.addEventListener('click', performSearch);
  
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  languageSelect.addEventListener('change', function(e) {
    currentLanguage = e.target.value;
    updateLanguageDisplay();
    saveUserPreferences();
  });

  searchInput.addEventListener('focus', function() {
    searchInput.select();
  });

 
  addNoteBtn.addEventListener('click', showAddNoteSection);
  clearNotesBtn.addEventListener('click', clearAllNotes);
  saveNoteBtn.addEventListener('click', saveNote);
  cancelNoteBtn.addEventListener('click', hideAddNoteSection);
  

  noteInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
}

async function performSearch() {
  const query = searchInput.value.trim();
  
  if (!query) {
    showError('Please enter a topic to search for.');
    searchInput.focus();
    return;
  }

  if (isLoading) {
    return; 
  }

  try {
    setLoadingState(true);
    const result = await searchWikipedia(query);
    displayResult(result);
    searchCount++;
    updateStats();
  } catch (error) {
    console.error('Search error:', error);
    showError(getLocalizedErrorMessage());
  } finally {
    setLoadingState(false);
  }
}

async function searchWikipedia(query) {
  const url = `https://${currentLanguage}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Page not found');
    } else {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  }

  const data = await response.json();
  
  return {
    title: data.title,
    extract: processExtract(data.extract),
    fullExtract: data.extract,
    thumbnail: data.thumbnail ? data.thumbnail.source : null,
    pageUrl: data.content_urls ? data.content_urls.desktop.page : null,
    coordinates: data.coordinates,
    timestamp: data.timestamp,
    language: currentLanguage,
    languageName: LANGUAGE_NAMES[currentLanguage] || `${currentLanguage.toUpperCase()} Wikipedia`
  };
}

function processExtract(extract) {
  if (!extract) return 'No summary available.';

  const sentences = extract.match(/[^\.!?]+[\.!?]+/g) || [extract];
  
  let shortExtract = '';
  let sentenceCount = 0;
  const maxSentences = 3;
  const maxLength = 400;

  for (const sentence of sentences) {
    if (sentenceCount >= maxSentences || shortExtract.length + sentence.length > maxLength) {
      break;
    }
    shortExtract += sentence.trim() + ' ';
    sentenceCount++;
  }

  return shortExtract.trim() || extract.substring(0, 300) + '...';
}

function displayResult(result) {
  resultDiv.className = 'result success';
  
  resultDiv.innerHTML = `
    <div class="result-content">
      <h2>${result.title}</h2>
      <p>${result.extract}</p>
      <div class="result-meta">
        <div class="meta-item">
          <span>🌐</span>
          <span>${result.languageName}</span>
        </div>
        ${result.pageUrl ? `
          <div class="meta-item">
            <span>🔗</span>
            <a href="${result.pageUrl}" target="_blank" rel="noopener">Read Full Article</a>
          </div>
        ` : ''}
        ${result.timestamp ? `
          <div class="meta-item">
            <span>📅</span>
            <span>Updated: ${formatDate(result.timestamp)}</span>
          </div>
        ` : ''}
        ${result.coordinates ? `
          <div class="meta-item">
            <span>📍</span>
            <span>Location: ${result.coordinates.lat.toFixed(4)}, ${result.coordinates.lon.toFixed(4)}</span>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function showError(message) {
  resultDiv.className = 'result';
  resultDiv.innerHTML = `<div class="error">${message}</div>`;
}

function setLoadingState(loading) {
  isLoading = loading;
  
  if (loading) {
    resultDiv.className = 'result loading';
    resultDiv.innerHTML = '<p>Searching...</p>';
    searchBtn.disabled = true;
    searchBtn.textContent = 'Searching...';
  } else {
    searchBtn.disabled = false;
    searchBtn.textContent = 'Search';
  }
}

function updateLanguageDisplay() {
  const languageName = LANGUAGE_NAMES[currentLanguage] || `${currentLanguage.toUpperCase()} Wikipedia`;
  currentLanguageSpan.textContent = languageName;
  updatePlaceholder();
}

function updatePlaceholder() {
  searchInput.placeholder = PLACEHOLDERS[currentLanguage] || 'Enter a topic...';
}

function getLocalizedErrorMessage() {
  return ERROR_MESSAGES[currentLanguage] || ERROR_MESSAGES['en'];
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };
  
  return date.toLocaleDateString('en-US', options);
}

function updateStats() {
  if (searchCount > 0) {
    statsDiv.innerHTML = `Searches performed: ${searchCount}`;
  }
}


function showAddNoteSection() {
  addNoteSection.classList.add('active');
  noteInput.focus();
  editingNoteId = null;
  noteInput.value = '';
  saveNoteBtn.textContent = '💾 Save Note';
}

function hideAddNoteSection() {
  addNoteSection.classList.remove('active');
  editingNoteId = null;
  noteInput.value = '';
}

function saveNote() {
  const content = noteInput.value.trim();
  
  if (!content) {
    noteInput.focus();
    return;
  }

  if (editingNoteId !== null) {
    // Update existing note
    const noteIndex = notes.findIndex(note => note.id === editingNoteId);
    if (noteIndex !== -1) {
      notes[noteIndex].content = content;
      notes[noteIndex].updatedAt = new Date().toISOString();
    }
  } else {
    // Create new note
    const newNote = {
      id: Date.now(),
      content: content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    notes.unshift(newNote);
  }

  saveNotes();
  displayNotes();
  hideAddNoteSection();
}

function editNote(id) {
  const note = notes.find(n => n.id === id);
  if (note) {
    editingNoteId = id;
    noteInput.value = note.content;
    addNoteSection.classList.add('active');
    noteInput.focus();
    saveNoteBtn.textContent = '💾 Update Note';
  }
}

function deleteNote(id) {
  if (confirm('Are you sure you want to delete this note?')) {
    notes = notes.filter(note => note.id !== id);
    saveNotes();
    displayNotes();
  }
}

function clearAllNotes() {
  if (notes.length === 0) return;
  
  if (confirm('Are you sure you want to delete all notes? This action cannot be undone.')) {
    notes = [];
    saveNotes();
    displayNotes();
  }
}

function displayNotes() {
  if (notes.length === 0) {
    notesList.innerHTML = '<div class="no-notes">No notes yet. Click "Add Note" to create your first note!</div>';
    return;
  }

  notesList.innerHTML = notes.map(note => `
    <div class="note-item">
      <div class="note-content">${escapeHtml(note.content)}</div>
      <div class="note-meta">
        <span class="note-date">
          Created: ${formatDate(note.createdAt)}
          ${note.updatedAt !== note.createdAt ? `• Updated: ${formatDate(note.updatedAt)}` : ''}
        </span>
        <div class="note-actions">
          <button class="edit-note-btn" onclick="editNote(${note.id})" title="Edit note">✏️ Edit</button>
          <button class="delete-note-btn" onclick="deleteNote(${note.id})" title="Delete note">🗑️ Delete</button>
        </div>
      </div>
    </div>
  `).join('');
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function saveNotes() {
  try {
    localStorage.setItem('wikipedia-app-notes', JSON.stringify(notes));
  } catch (error) {
    console.error('Could not save notes:', error);
  }
}

function loadNotes() {
  try {
    const savedNotes = localStorage.getItem('wikipedia-app-notes');
    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    }
  } catch (error) {
    console.error('Could not load notes:', error);
    notes = [];
  }
}

function loadUserPreferences() {
  try {
    const savedLanguage = localStorage.getItem('wikipedia-app-language');
    const savedSearchCount = localStorage.getItem('wikipedia-app-search-count');
    
    if (savedLanguage && isValidLanguage(savedLanguage)) {
      currentLanguage = savedLanguage;
      languageSelect.value = savedLanguage;
      updateLanguageDisplay();
    }
    
    if (savedSearchCount) {
      searchCount = parseInt(savedSearchCount, 10) || 0;
      updateStats();
    }
  } catch (error) {
    console.log('Could not load user preferences:', error);
  }
}

function saveUserPreferences() {
  try {
    localStorage.setItem('wikipedia-app-language', currentLanguage);
    localStorage.setItem('wikipedia-app-search-count', searchCount.toString());
  } catch (error) {
    console.log('Could not save user preferences:', error);
  }
}

function isValidLanguage(lang) {
  const validLanguages = ['en', 'zh', 'es', 'ar', 'hi', 'pt', 'ru', 'ja', 'fr', 'de', 'ka'];
  return validLanguages.includes(lang);
}


window.editNote = editNote;
window.deleteNote = deleteNote;

document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

window.addEventListener('popstate', function(event) {
  if (event.state && event.state.query) {
    searchInput.value = event.state.query;
    performSearch();
  }
});