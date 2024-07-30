function openWindow(id) {
    document.getElementById(id).style.display = 'block';
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



// let currentDraggable = null;

// document.querySelectorAll('.window').forEach(windowElem => {
//     windowElem.addEventListener('mousedown', (e) => {
//         if (e.target.tagName === 'BUTTON') return; // Ignore the close button
//         currentDraggable = windowElem;
//         const rect = windowElem.getBoundingClientRect();
//         const offsetX = e.clientX - rect.left;
//         const offsetY = e.clientY - rect.top;

//         function onMouseMove(e) {
//             currentDraggable.style.left = `${e.clientX - offsetX}px`;
//             currentDraggable.style.top = `${e.clientY - offsetY}px`;
//         }

//         function onMouseUp() {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//             currentDraggable = null;
//         }

//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', onMouseUp);
//     });
// });


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

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    const date = now.toLocaleDateString();
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

setInterval(updateTime, 1000);
updateTime();

// document.querySelectorAll('.window').forEach(windowElem => {
//     windowElem.addEventListener('mousedown', (e) => {
//         if (e.target.classList.contains('window-resize')) {
//             let startX = e.clientX;
//             let startY = e.clientY;
//             let startWidth = parseInt(document.defaultView.getComputedStyle(windowElem).width, 10);
//             let startHeight = parseInt(document.defaultView.getComputedStyle(windowElem).height, 10);

//             function doDrag(e) {
//                 windowElem.style.width = startWidth + e.clientX - startX + 'px';
//                 windowElem.style.height = startHeight + e.clientY - startY + 'px';
//             }

//             function stopDrag() {
//                 document.removeEventListener('mousemove', doDrag, false);
//                 document.removeEventListener('mouseup', stopDrag, false);
//             }

//             document.addEventListener('mousemove', doDrag, false);
//             document.addEventListener('mouseup', stopDrag, false);
//         } else if (e.target.tagName !== 'BUTTON') {
//             let offsetX = e.clientX - windowElem.getBoundingClientRect().left;
//             let offsetY = e.clientY - windowElem.getBoundingClientRect().top;

//             function onMouseMove(e) {
//                 windowElem.style.left = `${e.clientX - offsetX}px`;
//                 windowElem.style.top = `${e.clientY - offsetY}px`;
//             }

//             function onMouseUp() {
//                 document.removeEventListener('mousemove', onMouseMove);
//                 document.removeEventListener('mouseup', onMouseUp);
//             }

//             document.addEventListener('mousemove', onMouseMove);
//             document.addEventListener('mouseup', onMouseUp);
//         }
//     });
// });
