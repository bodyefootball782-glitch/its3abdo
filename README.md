# ITS3ABDO Portfolio

A static, responsive personal portfolio. No admin panel, database, framework, or build step. Edit the files directly.

## Run it
Open `index.html` in a browser, or upload the complete `its3abdo-portfolio` folder to static hosting. Keep the folder structure intact.

## Personal links and phone
Open `index.html` and find the `social-grid` section. Replace each social card's `href` with your own profile/channel URL. The current links point to platform home pages as placeholders.

For the phone card, replace `href="tel:"` with `href="tel:+20XXXXXXXXXX"` and replace the helper text with the number you want visitors to call. Only publish a phone number you are comfortable making public.

## About text
Edit the `about-roles` section in `index.html`. The five role labels and descriptions are all plain HTML text.

## My Work button and tabs
The `MY WORK` button opens the work panel. The tabs are:
- **EDITS:** add five MP4 files named `edit-01.mp4` through `edit-05.mp4` inside `media/edits/`.
- **GRAPHIC DESIGN:** edit the Arabic service copy inside `panel-design` in `index.html`.
- **PROGRAMMING:** replace the five `href="#"` website URLs and project labels inside `panel-programming`.

## Five images on the main page
Add these images to `media/featured/`:
- `featured-01.webp`
- `featured-02.webp`
- `featured-03.webp`
- `featured-04.webp`
- `featured-05.webp`

You can use JPG or PNG instead, but then update the matching image paths in `style.css`.

## Separate desktop and mobile backgrounds
Add:
- `media/backgrounds/desktop-bg.webp` for desktop/tablet
- `media/backgrounds/mobile-bg.webp` for phones

The CSS automatically switches at 640px. You can change the filenames in the `body::before` rules in `style.css`.

## Music
Put your song at `media/music.mp3`, then set this line near the top of `script.js`:

```js
const AUDIO_FILE = "media/music.mp3";
```

Music starts after the visitor presses **ENJOY**, because browsers block autoplay before user interaction. The sound button can mute/unmute it afterward.

## Main files
- `index.html` — text, links, videos, tabs, and page structure
- `style.css` — colors, layout, backgrounds, responsive design, and animations
- `script.js` — intro, music, mobile navigation, work tabs, and gallery interactions
- `media/edits/` — five portfolio videos
- `media/featured/` — five images displayed on the main page
- `media/backgrounds/` — separate desktop and mobile backgrounds
