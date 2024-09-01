# Flask Desktop UI

This project implements a desktop-like UI using Flask, HTML, CSS, and JavaScript. The UI includes draggable and resizable windows that can be opened and closed, mimicking a desktop environment.
https://portfoli-v9yh.onrender.com/

## Features

- **Draggable Windows:** Click and drag to move windows around.
- **Resizable Windows:** Drag the bottom-right corner to resize windows.
- **Open/Close Windows:** Click buttons to open or close windows.
- **File Operations:** Mock implementations for opening files and links, and downloading game files.
- **Dynamic Time and Date:** The current time and date are updated in the taskbar.

## File Structure

- `app.py` - Main Flask application file.
- `static/` - Directory for static files (CSS, JavaScript, images).
  - `css/` - Contains the stylesheet for the project.
  - `js/` - Contains the JavaScript for window functionalities.
  - `img/` - Contains images used in the windows.
- `templates/` - Directory for HTML templates.

## Getting Started

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/flask-desktop-ui.git
    cd flask-desktop-ui
    ```

2. **Install Dependencies:**
    ```bash
    pip install flask
    ```

3. **Run the Application:**
    ```bash
    flask run
    ```

4. **Open in Browser:**
    Navigate to `http://127.0.0.1:5000` in your web browser to see the desktop UI.

## Code Overview

### JavaScript

The JavaScript handles the functionality for making the windows draggable and resizable.

- `openWindow(id)` - Shows the specified window.
- `closeWindow(id)` - Hides the specified window.
- `makeDraggable(el)` - Makes the element draggable.
- `makeResizable(el)` - Adds resizing capability to the element.
- `updateTime()` - Updates the time and date in the taskbar every second.

### CSS

The CSS defines the styles for the desktop UI, including the windows, icons, and taskbar.

- `.desktop` - Container for the desktop environment.
- `.icon` - Styles for desktop icons.
- `.window` - Styles for the windows.
- `.window-resize` - Styles for the resize handle.
- `.taskbar` - Styles for the taskbar.

### HTML

The HTML structure includes the desktop, windows, and taskbar.

- Each window has a header, content area, and resize handle.
- Windows are initially hidden and can be displayed by calling the `openWindow(id)` function.
