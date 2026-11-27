# Sky Forge Solutions Website

Responsive static website for Sky Forge Solutions.

## Features
- Responsive HTML/CSS/JavaScript
- Sky Forge Solutions branding and logo
- Learning tracks for Linux, Python, Git/SDLC, Cloud, DevOps and project work
- Career support section
- FAQ section
- WhatsApp, phone and email contact actions
- Test Yourself section: a track-finder quiz and a tech-check quiz (run in the browser, nothing stored)
- For Colleges section with proposal buttons, brochure download and an enquiry form that opens WhatsApp or email
- B.Tech Projects: a Projects section on the homepage with one card per branch, linking to `projects.html` (branch tabs, search, WhatsApp enquiry per project). Edit the project list in `projects-data.js`.
- Application page at `apply.html`, embedding the Sky Forge Solutions Jotform application request form.
- No backend or database required
- No fixed course-duration claims on the website

## Local preview
Open `index.html` in a browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment
The site can be deployed to Cloudflare Pages from the GitHub repository. No build command is required because this is a static HTML/CSS/JavaScript site.


## Conversion and SEO refresh
- Homepage now presents clearer calls to action and dedicated paths for students, colleges, trainers and project teams.
- Responsive audience cards and improved mobile navigation accessibility.
- Updated canonical and social metadata to the primary `https://skyforgesolutions.org` domain.
- Added `robots.txt` and `sitemap.xml`; the application form is excluded from indexing.

Before launch, confirm `skyforgesolutions.org` is configured as the primary domain in Cloudflare Pages. Configure Jotform email notifications and verify the submission destination in the Jotform account.
