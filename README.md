# Lesson Shelf

A tiny tutoring site: a home page of subjects, and a lesson page per subject
with a video player and a clickable lesson list.

## Files

- `index.html` — home page (renders subject cards automatically)
- `subject.html` — one template that displays any subject's lessons
- `data.js` — **the only file you need to edit** to add/remove/reorder videos or subjects
- `style.css` — all the visual styling

## Adding or removing a video

Open `data.js`. Find the subject, and add or delete an entry like:

```js
{
  title: "Adding Fractions",
  youtubeId: "dQw4w9WgXcQ",
  notes: "A short description shown under the video."
}
```

To get `youtubeId`: upload your video to YouTube as **Unlisted**, then copy
the part of the URL after `watch?v=`.

Reorder lessons by moving entries up/down in the array — the numbering
updates automatically.

## Adding a new subject

Copy a whole subject block in `data.js`, give it a new `slug` (used in the
URL, no spaces), a `name`, and pick an `accent` (`amber`, `teal`, `plum`, or
`brick`). It'll show up on the home page automatically.

## Testing locally

Just double-click `index.html` to open it in a browser. No server or install
needed — it's a static site.

## Deploying for free with GitHub Pages

1. Create a free GitHub account if you don't have one.
2. Create a new repository (e.g. `lesson-shelf`).
3. Upload these 4 files to it (drag-and-drop works on github.com, or use
   `git push` if you're comfortable with git).
4. In the repo, go to **Settings → Pages**.
5. Under "Branch", pick `main` and `/ (root)`, then Save.
6. Wait a minute, then your site is live at:
   `https://yourusername.github.io/lesson-shelf/`

Every time you edit `data.js` and push the change, the live site updates
within a minute or two — no re-deploying needed.
