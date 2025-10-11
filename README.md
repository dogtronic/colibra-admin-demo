# Colibra Admin Panel

Panel administracyjny dla aplikacji medytacyjnej Colibra - **frontend prototype**.

## 📋 O projekcie

Kompletny frontend prototyp panelu administracyjnego. Zawiera wszystkie widoki UI/UX, formularze i tabele.

⚠️ **Nie zawiera backendu** - wymaga implementacji API i bazy danych.

## 🗂️ Struktura

```
colibra-admin-panel/
├── index.html              # Strona logowania
├── forgot-password.html    # Reset hasła
├── css/style.css          # Style
├── js/modal.js            # JavaScript
└── pages/                 # Wszystkie strony panelu
    ├── dashboard.html
    ├── songs.html, programs.html, categories.html
    ├── goals.html, narrators.html, keywords.html
    ├── users.html, welcome-texts.html
    └── ... (formularze i szczegóły)
```

## 🚀 Jak uruchomić

### Lokalnie w przeglądarce:

```bash
open index.html
```

### Z lokalnym serwerem (zalecane):

```bash
# Python
python -m http.server 8000

# Lub Node.js
npx http-server -p 8000

# Otwórz: http://localhost:8000
```

### 🔐 Demo logowania:

- Wpisz **dowolny email i hasło**
- Kliknij "Zaloguj się"
- Zostaniesz przekierowany do dashboardu

⚠️ **To symulacja** - każde dane zadziałają, brak weryfikacji.

## 🌐 GitHub Pages

1. Wgraj pliki na GitHub
2. Settings → Pages → wybierz branch (main) i folder (root)
3. Link: `https://twoja-nazwa.github.io/colibra-admin-panel/`

## ✅ Co działa (Frontend)

- ✅ Nawigacja między stronami
- ✅ Sortowanie tabel (kliknij nagłówek)
- ✅ Wszystkie formularze z polami
- ✅ Modal zmiany hasła
- ✅ Responsywny layout
- ✅ Przyciski akcji (Podgląd, Edytuj, Usuń)

## ❌ Co wymaga implementacji (Backend)

- ❌ Prawdziwe logowanie/autentykacja
- ❌ Zapisywanie danych do bazy
- ❌ CRUD operations (Create, Read, Update, Delete)
- ❌ Upload plików (audio, obrazy)
- ❌ Filtrowanie i wyszukiwanie
- ❌ Paginacja

## 🗄️ Moduły systemu

System składa się z następujących sekcji:

1. **Utwory (Songs)** - zarządzanie nagraniami medytacyjnymi
2. **Programy (Programs)** - zbiory utworów (płatne/darmowe)
3. **Kategorie (Categories)** - kategorie programów
4. **Typy utworów (Song Types)** - typy nagrań
5. **Słowa kluczowe (Keywords)** - tagi do wyszukiwania
6. **Teksty powitalne (Welcome Texts)** - teksty na ekranie głównym
7. **Cele (Goals)** - wyzwania dla użytkowników (7 dni medytacji, etc.)
8. **Narratorzy (Narrators)** - lektorzy nagrań
9. **Użytkownicy (Users)** - lista użytkowników aplikacji

## 💻 Stack technologiczny

**Frontend:**

- HTML5
- CSS3 (Flexbox, Grid)
- Vanilla JavaScript
- SVG Icons

**Brak zależności** - wszystko native, bez frameworków.

## 📧 Kontakt

W razie pytań dotyczących UI/UX lub struktury projektu, skontaktuj się z właścicielem repozytorium.

---

**Wersja:** 1.0.0  
**Data:** 2025-10-11  
**Status:** Frontend prototype - gotowy do implementacji backendu
