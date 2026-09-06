# A. M. Jamadar — Tribute & Biography Site

A bilingual (English/Marathi) tribute website documenting the life and career of
Shri A. M. Jamadar, built from a family photo album, original prints, and
newspaper clippings.

## Running it locally

```bash
npm install
npm run serve
```

Then open the URL it prints (usually `http://localhost:8080`).

To just build the static site (output goes to `_site/`):

```bash
npm run build
```

## Adding or editing a photo

1. Add the original photo file to `images/` (this folder is the permanent,
   untouched archive — never delete anything from it).
2. Copy it into the right category folder under `src/images/<category>/`,
   with a short, descriptive, hyphenated filename (see the other files there
   for examples).
3. Add an entry for it in `src/_data/images.json` — copy an existing entry as
   a template and fill in: `id`, `file` (the path you used in step 2,
   relative to `src/images/`), `category`, `captionEn`/`captionMr`,
   `peopleEn`/`peopleMr` (optional), `altEn`/`altMr`, `dateApprox`,
   `sourceNote`. Leave `widths`, `width`, `height`, and `fullUrl` for a
   developer to fill in (see below) — they're computed automatically.
4. Run `npm run build` once. The site's build step (`.eleventy.js`)
   automatically generates resized WebP/JPEG versions of every image listed
   in `images.json`.

Note: `widths`/`width`/`height`/`fullUrl` in `images.json` are precomputed
values (not calculated live by the templates) so that image URLs are known
ahead of time. If you add a new photo, ask a developer to run the manifest
script again to fill these in for the new entry — the site's rendering
templates will error clearly on a missing field rather than showing a broken
image.

## Editing text

Every page is a plain Markdown file under `src/en/` (English) or `src/mr/`
(Marathi) — e.g. `src/en/biography.md`. Open the file, edit the text between
the `---` front matter block and the end of the file, save, and rebuild.

Each English page has a matching Marathi page with the same filename. When
you change something factual on one, update the other too.

## Site-wide settings

`src/_data/site.json` holds the site title, tagline, and base URL. When you
move from the free `*.netlify.app` subdomain to a real domain, change the
`url` field there — every canonical link, sitemap entry, and social-preview
image URL is generated from that one value.

## Contact form & Tributes wall

The site has two Netlify Forms: **Contact** (`src/en/contact.md` / `src/mr/contact.md`)
and **Tributes** (`src/en/tributes.md` / `src/mr/tributes.md`). Both are plain
HTML forms with `data-netlify="true"` — Netlify detects and collects them
automatically at deploy time, no backend code needed.

**One-time setup still pending:** in the Netlify dashboard, go to
**Site settings → Forms → Form notifications** and add an email address (or
addresses) to be notified on every submission. Until this is set, submissions
still arrive in the Forms dashboard, just without an email alert.

**Approving a tribute for the public wall:**

1. Check the Netlify dashboard (Site → Forms → "tribute") for new submissions.
2. Decide together (you, Nihal, Shaan) whether to publish it.
3. Add an entry to `src/_data/tributes.json`:
   ```json
   { "name": "...", "relationship": "...", "message": "...", "dateApproved": "YYYY-MM-DD" }
   ```
4. Commit and push — the tribute appears on `/tributes/` (both languages) on
   the next deploy.

There's no login-protected admin panel by design — this keeps the site fully
static with no extra accounts or services to maintain. If the volume of
submissions grows enough to justify a self-service approval page, that's a
larger follow-up project (would need Netlify Identity + Functions).

## Design notes

- Deliberately does not state a birth date, death date, or native-village
  name anywhere — none of that was documented in the surviving photo album.
  If the family confirms these facts later, search the `.md` files for
  `TODO` comments marking where they belong.
- The `national-award-zail-singh-*` framed photos (two separately framed
  copies in the album) show the exact same ceremony as the canonical loose
  print — only the canonical one should be used as a standalone photo; the
  framed copies are shown together in the full gallery for completeness.
