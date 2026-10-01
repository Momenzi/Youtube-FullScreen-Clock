# YouTube Fullscreen Clock

A lightweight Tampermonkey userscript that displays a live clock in the top-right corner of YouTube videos while fullscreen mode is active.

The clock shows your computer's local time in `HH : MM : SS` format and disappears when you exit fullscreen.

## Features

- Displays the clock only in fullscreen mode.
- Updates the time every second.
- Uses a 24-hour format with hours, minutes, and seconds.
- Includes a semi-transparent background for readability.
- Does not block clicks or interfere with player controls.
- Allows easy customization of size, position, and appearance.

## Requirements

- A browser with Tampermonkey installed.
- Access to YouTube at `https://www.youtube.com`.

## Installation

1. Open the Tampermonkey dashboard.
2. Create a new userscript.
3. Replace the default template with the code from this repository.
4. Save the script and make sure it is enabled.
5. Refresh YouTube.

## Usage

1. Open a YouTube video.
2. Enter fullscreen using the player's fullscreen button or the `F` key.
3. The clock appears in the top-right corner.
4. Exit fullscreen to hide the clock.

## Customization

Edit the values inside the `Object.assign(clock.style, ...)` block.

For example:

```javascript
top: '18px',
right: '24px',
fontSize: '24px',
color: '#ffffff',
background: 'rgba(0, 0, 0, 0.55)',
```

- `top`: Distance from the top edge.
- `right`: Distance from the right edge.
- `fontSize`: Clock text size.
- `color`: Clock text color.
- `background`: Background color and transparency.

## How It Works

The script checks for an active fullscreen element and places the clock inside it. It updates the displayed time every second and removes the clock when fullscreen ends.

The script uses the computer's local time and does not make external network requests.

## Scope

This script targets YouTube's player fullscreen mode, not browser fullscreen activated with `F11`.
