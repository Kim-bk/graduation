# Graduation Ceremony · Nguyễn Thị Tường Vy

A fully responsive, single-page graduation invitation website.
Built with plain **HTML + CSS + JavaScript** — no build tools, no dependencies.

## Preview locally

Just open `index.html` in any browser. That's it.

For the background music toggle, add a file named `music.mp3` inside the
`assets/` folder (see `assets/README.md`).

## Project structure

```
new-graduation/
├── index.html      # page structure + inline SVG icons
├── style.css       # all styling (responsive, mobile-first)
├── script.js       # music toggle + smooth scroll
├── assets/
│   └── music.mp3   # (optional) your background track
└── README.md
```

---

## Publish for free with GitHub Pages

Follow these steps to make the site live on the internet.

### 1. Create a GitHub account
Sign up at <https://github.com> if you don't have one.

### 2. Create a new repository
1. Click the **+** icon (top-right) → **New repository**.
2. Name it, e.g. `graduation-invite`.
3. Set it to **Public**.
4. Click **Create repository**.

### 3. Upload your files
Easiest way (no command line):
1. On the empty repo page, click **uploading an existing file**.
2. Drag in `index.html`, `style.css`, `script.js`, and the `assets` folder.
3. Click **Commit changes**.

Prefer the command line? From the project folder:

```bash
git init
git add .
git commit -m "Graduation invitation site"
git branch -M main
git remote add origin https://github.com/<your-username>/graduation-invite.git
git push -u origin main
```

### 4. Turn on GitHub Pages
1. In the repo, go to **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`.
4. Click **Save**.

### 5. Visit your live site
After ~1 minute, refresh the Pages settings — your URL appears at the top:

```
https://<your-username>.github.io/graduation-invite/
```

Share that link — it works on phones, tablets, and desktops.

---

## Alternative one-click hosts

- **Netlify**: <https://app.netlify.com/drop> — drag the whole folder onto the page.
- **Vercel**: <https://vercel.com/new> — import the GitHub repo and deploy.

## Customizing

| What to change            | Where                                        |
|---------------------------|----------------------------------------------|
| Name, date, time, venue   | `index.html` (text between the tags)         |
| Colors / fonts            | `:root` variables at the top of `style.css`  |
| Google Maps directions    | `href` of the `.btn-directions` link         |
| Background music          | `assets/music.mp3`                           |
