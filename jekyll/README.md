# Legacy Jekyll site (pyOpenSci)

This directory holds the **Jekyll + Minimal Mistakes** site that previously
lived at the repository root.

## Local preview

```bash
cd jekyll
bundle install
bundle exec jekyll serve
```

Open the URL Jekyll prints (usually `http://127.0.0.1:4000`).

## Configuration

* **`_config.yml`** — Jekyll and theme settings.
* **`Gemfile`** — Ruby dependencies (run Bundler from this directory).

GitHub Actions on **`main`** still build and deploy this site until Hugo
cutover. Paths in workflows use `working-directory: jekyll`.
