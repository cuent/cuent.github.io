# Personal Website

This repository contains the source for a Jekyll-based personal website, built on top of the [al-folio](https://github.com/alshedivat/al-folio) theme and customized for this site.

## Local Development

### Prerequisites

- Ruby (recommended via `rbenv`)
- Bundler

### Install dependencies

```bash
bundle install
```

### Run locally

```bash
bundle exec jekyll serve --incremental --watch --drafts
```

Open `http://127.0.0.1:4000/` after the server starts.

### Build without serving

```bash
bundle exec jekyll build --drafts
```

## Deployment (GitHub Pages via Actions)

This repo is configured to deploy with GitHub Actions.

1. Push changes to the default branch.
2. Wait for the deploy workflow to finish in the **Actions** tab.
3. In GitHub **Settings > Pages**, ensure the publishing source is set to **GitHub Actions**.

## Basic Customization

- Site-wide settings: `_config.yml`
- Pages: `_pages/`
- Blog posts: `_posts/`
- Styles: `_sass/` and `assets/css/main.scss`
- Images and static assets: `assets/`
