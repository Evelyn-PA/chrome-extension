# 🚀 Leads Tracker — Chrome Extension

A lightweight Chrome extension to capture, save, and manage URLs directly from your browser. This project was built to strengthen skills in JavaScript, DOM manipulation, and Chrome Extension development.

> **This project is a clear demonstration of my ability to build a functional browser tool from end-to-end, apply a mobile-first UI, and work responsibly with Chrome APIs.**

![Screenshot of Leads Tracker](/Images\gif.gif)

**👉 [Live Demo](https://chrome-extension-zeta-six.vercel.app/)**

## ✨ Core Features

*   **One-Click Tab Saving:** Instantly save the URL of the current tab using the Chrome Tabs API.
*   **Manual Entry:** Add any URL or note via a simple input field.
*   **Clickable Links:** All saved items are rendered as clickable links that open in a new tab.
*   **Persistent Storage:** Your list is saved using `localStorage`, so it remains available even after restarting your browser.
*   **Bulk Delete:** A "Delete All" button with a confirmation step to prevent accidental data loss.


## 🧰 Tech Stack

*   **HTML5:** For semantic and accessible structure.
*   **CSS3:** Featuring Custom Properties and Grid Layout for a responsive, mobile-first design.
*   **Vanilla JavaScript (ES6+):** For all DOM manipulation, event handling, and application logic.
*   **Google Chrome APIs:** Utilizing `manifest.json` (V3) and the `chrome.tabs` API to interact with the browser.

## ⚙️ Getting Started

### Prerequisites

*   You must have Google Chrome installed on your computer.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    cd YOUR_REPOSITORY
    ```

2.  **Load the extension in Chrome:**
    *   Open your Chrome browser and navigate to `chrome://extensions`.
    *   Enable **Developer mode** using the toggle switch in the top-right corner.
    *   Click the **Load unpacked** button.
    *   Select the directory where you cloned the repository.
    *   Pin the extension to your toolbar for easy access!


## 🧠 Key Learning & Development Highlights

This project was a valuable exercise in:

*   **DOM Manipulation:** Efficiently rendering lists from an array and responding to user events without a framework.
*   **State Management:** Handling the application's state (the `leads` array) and persisting it with `localStorage`.
*   **Chrome Extension APIs:** Correctly structuring a `manifest.json` file, defining permissions, and using the `chrome.tabs` API to capture URLs securely.
*   **UX/UI Design:** Implementing a mobile-first workflow and adding small but important user experience details like `focus` states and confirmation dialogs.


## 📈 Future Improvements

I plan to continue developing this project by adding the following features:

*   **Sync Across Devices:** Migrating from `localStorage` to `chrome.storage.sync` to allow users to sync their leads across different computers.
*   **Enhanced Organization:** Adding features for tagging, categorizing, and searching saved leads.
*   **Data Portability:** Implementing import/export functionality (e.g., as a JSON or CSV file).
*   **Improved Accessibility:** Further enhancing keyboard navigation and adding ARIA labels for screen reader users.


## 🙏 Acknowledgments

*   This project was inspired by and built as a solution to the **Chrome Extension: Leads Tracker** project on [Scrimba](https://scrimba.com/), an interactive learning platform that provided the foundational knowledge for this build.

## 📬 Let’s Connect
I’m a student web developer passionate about creating impactful projects with modern technologies. If you’re looking for an enthusiastic developer ready to learn and contribute, I'd love to connect!

💻 Happy cooking (and coding)!