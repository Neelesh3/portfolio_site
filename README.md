
# Neelesh Agashe — Portfolio (Ready-to-deploy)

This package contains a responsive portfolio website (HTML/CSS/JS), three SVG thumbnails, and your resume PDF.

## Included files
- `index.html`
- `styles.css`
- `script.js`
- `thumbs/` (SVG thumbnails)
- `Neelesh_Agashe_resume_.pdf` (if present)
- `README.md` (this file)

## Quick local test
1. Unzip the project folder.
2. Open `index.html` in your browser.

## Deploy to GitHub Pages (simple steps)
1. Create a new GitHub repository (e.g., `portfolio`).
2. `git init`
3. `git add .`
4. `git commit -m "Initial portfolio upload"`
5. `git branch -M main`
6. `git remote add origin https://github.com/<your-username>/<portfolio>.git`
7. `git push -u origin main`

Enable GitHub Pages:
1. Go to your repository on GitHub -> Settings -> Pages.
2. Under "Build and deployment", choose "Deploy from a branch".
3. Select the `main` branch and root (`/`) folder.
4. Save — your site will be available at `https://<your-username>.github.io/<portfolio>/` within a few minutes.

If you use a custom domain, configure DNS accordingly.

## Notes & next steps
- To update project links/screenshots, edit `index.html` and `script.js` (projectData).
- The CV "Open CV" button opens the included PDF in a new tab. If you host the PDF elsewhere, update the href.
- For a contact form that actually sends emails, integrate EmailJS, Formspree, Netlify Forms, or a backend endpoint.

If you'd like, I can:
- Push these files to a new GitHub repo for you (you'd need to provide a repo name and grant access via a personal access token).
- Replace SVG thumbnails with real screenshots you upload.
- Update the "Live" links to real deployments if you provide URLs.

Enjoy!
