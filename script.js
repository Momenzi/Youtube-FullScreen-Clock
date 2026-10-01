// ==UserScript==
// @name         YouTube Fullscreen Clock
// @namespace    youtube-fullscreen-clock
// @version      1.0
// @description  Displays a clock in the top-right corner only in fullscreen.
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const clock = document.createElement('div');
    clock.id = 'youtube-fullscreen-clock';

    // Customize the clock's appearance and position here.
    Object.assign(clock.style, {
        position: 'fixed',
        top: '18px',
        right: '24px',
        zIndex: '2147483647',
        color: '#ffffff',
        background: 'rgba(0, 0, 0, 0.55)',
        padding: '8px 12px',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '24px',
        fontWeight: '600',
        fontVariantNumeric: 'tabular-nums',
        lineHeight: '1.2',
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.8)',
        pointerEvents: 'none',
        userSelect: 'none'
    });

    function updateTime() {
        const now = new Date();
        const pad = value => String(value).padStart(2, '0');

        clock.textContent = [
            pad(now.getHours()),
            pad(now.getMinutes()),
            pad(now.getSeconds())
        ].join(' : ');
    }

    function syncClock() {
        const fullscreenElement =
            document.fullscreenElement ||
            document.webkitFullscreenElement;

        // Remove the clock when fullscreen is not active.
        if (!fullscreenElement) {
            clock.remove();
            return;
        }

        // Keep the clock inside the fullscreen element.
        if (clock.parentElement !== fullscreenElement) {
            fullscreenElement.appendChild(clock);
        }

        updateTime();
    }

    document.addEventListener('fullscreenchange', syncClock);
    document.addEventListener('webkitfullscreenchange', syncClock);

    setInterval(syncClock, 1000);
    syncClock();
})();