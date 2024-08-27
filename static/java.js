// Keep track of the highest z-index value
let zIndexCounter = 10;

function bringToFront(windowElem) {
    // Increment the z-index counter and assign it to the window
    zIndexCounter++;
    windowElem.style.zIndex = zIndexCounter;
}

function openWindow(id) {
    const windowElem = document.getElementById(id);
    windowElem.style.display = 'block';
    bringToFront(windowElem);
}

function closeWindow(id) {
    document.getElementById(id).style.display = 'none';
}

function openFile(fileId) {
    alert(`Opening ${fileId}`);
}

function openLink(url) {
    window.open(url, '_blank');
}

function openGame(gameFile) {
    // Download the .exe file
    window.location.href = `/games/${gameFile}`;
}

// Wait for the video to finish
const video = document.getElementById('intro-video');
const videoOverlay = document.getElementById('video-overlay');
const mainContent = document.querySelector('.desktop');
const taskbar = document.querySelector('.taskbar');

video.onended = function() {
    videoOverlay.style.display = 'none'; // Hide the video overlay
    mainContent.style.display = 'block'; // Show the main content
    taskbar.style.display = 'flex'; // Show the taskbar
};

document.querySelectorAll('.window').forEach(windowElem => {
    windowElem.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('window-resize')) {
            // Resize logic
            let startX = e.clientX;
            let startY = e.clientY;
            let startWidth = parseInt(document.defaultView.getComputedStyle(windowElem).width, 10);
            let startHeight = parseInt(document.defaultView.getComputedStyle(windowElem).height, 10);

            function doDrag(e) {
                windowElem.style.width = startWidth + e.clientX - startX + 'px';
                windowElem.style.height = startHeight + e.clientY - startY + 'px';
            }

            function stopDrag() {
                document.removeEventListener('mousemove', doDrag, false);
                document.removeEventListener('mouseup', stopDrag, false);
            }

            document.addEventListener('mousemove', doDrag, false);
            document.addEventListener('mouseup', stopDrag, false);
        } else if (e.target.tagName !== 'BUTTON') {
            // Bring the window to the front when clicked
            bringToFront(windowElem);

            // Drag logic
            let offsetX = e.clientX - windowElem.getBoundingClientRect().left;
            let offsetY = e.clientY - windowElem.getBoundingClientRect().top;

            function onMouseMove(e) {
                windowElem.style.left = `${e.clientX - offsetX}px`;
                windowElem.style.top = `${e.clientY - offsetY}px`;
            }

            function onMouseUp() {
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
    });
});

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

setInterval(updateTime, 1000);
updateTime();
