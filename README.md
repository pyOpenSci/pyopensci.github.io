# pyopensci.github.io
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-55-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![Deploy Hugo site to Pages](https://github.com/pyOpenSci/pyopensci.github.io/actions/workflows/deploy-gh-pages.yml/badge.svg)](https://github.com/pyOpenSci/pyopensci.github.io/actions/workflows/deploy-gh-pages.yml)
[![DOI](https://zenodo.org/badge/174412809.svg)](https://zenodo.org/doi/10.5281/zenodo.10594115)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ddb85e67-0925-455a-a616-5bece97a65b2/deploy-status)](https://app.netlify.com/projects/pyos-website/deploys)


This repo contains the source code for the [pyOpenSci.org](https://pyopensci.org) website. Contributions are welcome. Thank you [**pyOpenSci contributors**](#contributors-✨)!!

## Get started

Please explore [the site](https://pyopensci.org). If you find a typo, bug or issue, please [open a GitHub issue](https://github.com/pyOpenSci/pyopensci.github.io/issues).

## Next Steps

If you are interested in contributing to pyOpenSci, check out our [**CONTRIBUTING guide**](./CONTRIBUTING.md) for an overview of the types of contributions that we welcome. and our DEVELOPMENT.md for instructions on how to set up the website locally and make changes.

For organization-wide guidelines, see
[**pyOpenSci's organization-wide contributing guide**](https://www.pyopensci.org/handbook/CONTRIBUTING.html).

## Installation and development

This site is built with [Hugo](https://gohugo.io). Source lives at the repository
root (`content/`, `data/`, `themes/clean-hugo/`).

### Prerequisites

- **[Hugo Extended](https://gohugo.io/installation/)** `0.139.4` (matches Netlify and CI)
- **[Node.js](https://nodejs.org/)** `24` (Active LTS) and npm (PostCSS / autoprefixer for the theme CSS pipeline). An `.nvmrc` is in the repo root — run `nvm use` if you use nvm.

### Run the site locally

1. Fork and clone this repository.
2. From the repo root, install Node dependencies:

   ```bash
   npm ci
   ```

3. Start the Hugo development server:

   ```bash
   hugo server --disableFastRender
   ```

   Use `--disableFastRender` while editing layouts or CSS so changes rebuild in real time as you work on the site locally.

4. Open [http://localhost:1313/](http://localhost:1313/) in your browser.

Test your changes locally before opening a pull request. CI runs the same Hugo
build as Netlify (see `.github/workflows/build-site.yml`).

### Production build (optional)

```bash
npm ci
hugo --gc --minify
```

Output is written to `public/`. Do not commit `public/`, `resources/`, or
`.hugo_build.lock` — they are gitignored.

### Future-dated blog posts

`buildFuture = true` is set in `hugo.toml`, so posts with a future `date` in front
matter are included in local builds and production deploys without extra flags.

### Project layout (Hugo)

| Path | Purpose |
|------|---------|
| `content/` | Pages, blog posts (`content/blog/`), events (`content/events/`) |
| `data/` | YAML data (`packages.yml`, `contributors.yml`, etc.) |
| `themes/clean-hugo/` | Site theme (layouts, SCSS, shortcodes) |
| `static/` | Images, favicons, Netlify `_redirects` |
| `hugo.toml` | Site config, navigation, theme parameters |

For CSS architecture, SCSS partials, and Netlify build details, see
[DEVELOPMENT.md](./DEVELOPMENT.md). For contributor workflows and the docs
book layout, see [CONTRIBUTING.md](./CONTRIBUTING.md).

### Images and WebP

We try to keep image file sizes as small as practical. To convert PNG images to WebP:

**macOS:**

```bash
brew install webp
```

**Linux:**

```bash
sudo apt-get install webp
```

Convert every PNG in a directory:

```bash
for file in *.png; do cwebp "$file" -o "${file%.*}.webp"; done
```

Or convert a single image:

```bash
cwebp input-image.png -o output-image.webp
```

Example figure markup that supports both WebP and PNG (backwards-compatible with older browsers):

```html
<figure>
<picture>
  <source srcset="/images/image-name.webp" type="image/webp">
  <img src="/images/image-name.png" alt="Alt text here" />
</picture>
</figure>
```

Store site images under `static/images/` (published as `/images/...`).

## How to update blog post `last_updated` field

We have a bash script that updates the `last_modified` field in YAML for blog posts
that already include a `last_modified:` key in front matter:

```bash
chmod +x scripts/date-updated.sh
./scripts/date-updated.sh
```

The script scans `content/blog/` for posts that include a `last_modified:` key
in front matter.

## How to update contributor names

Update a contributor's name on the [Our Community](https://www.pyopensci.org/our-community/) page in [`data/contributors.yml`](data/contributors.yml).

**Important:** Do not update contributor names in [`data/packages.yml`](data/packages.yml). Changes there can be overwritten by automated workflows.

`contributors.yml` is the source of truth for people metadata; names are gathered
from contributor files using each person's GitHub username.

## Monitoring Automated Tasks

There are a few automated CI tasks in this repository to keep the website data up to date. In order for us to have visibility into when these jobs fail, we have automated a Slack bot to send a message to the `#pyos-maintainers-infrastructure` channel on Slack using the [rtCamp/action-slack-notify](https://github.com/rtCamp/action-slack-notify) GitHub Action step. This action can be used within any repository in the PyOpenSci GitHub organization (as `SLACK_NOTIFICATIONS_BOT_TOKEN` is an org-wide secret) via:

```yml
      - name: Slack Notification
        uses: rtCamp/action-slack-notify@v2
        if: failure()
        env:
          SLACK_CHANNEL: pyos-maintainers-infrastructure
          SLACK_COLOR: '#db540b'
          SLACK_LINK_NAMES: true
          SLACKIFY_MARKDOWN: true
          SLACK_MESSAGE: "Notification from GitHub Actions"
          SLACK_TOKEN: ${{ secrets.SLACK_NOTIFICATIONS_BOT_TOKEN }}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://anitagraser.com"><img src="https://avatars0.githubusercontent.com/u/590385?v=4?s=100" width="100px;" alt="Anita Graser"/><br /><sub><b>Anita Graser</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aanitagraser" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://cosmicbboy.github.io/"><img src="https://avatars0.githubusercontent.com/u/2816689?v=4?s=100" width="100px;" alt="Niels Bantilan"/><br /><sub><b>Niels Bantilan</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3AcosmicBboy" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/xmnlab"><img src="https://avatars2.githubusercontent.com/u/5209757?v=4?s=100" width="100px;" alt="Ivan Ogasawara"/><br /><sub><b>Ivan Ogasawara</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Axmnlab" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/githubbers"><img src="https://avatars2.githubusercontent.com/u/11934090?v=4?s=100" width="100px;" alt="David Nicholson"/><br /><sub><b>David Nicholson</b></sub></a><br /><a href="#blog-NickleDave" title="Blogposts">📝</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.earthdatascience.org"><img src="https://avatars0.githubusercontent.com/u/4017492?v=4?s=100" width="100px;" alt="Jenny Palomino"/><br /><sub><b>Jenny Palomino</b></sub></a><br /><a href="#ideas-jlpalomino" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ajlpalomino" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=jlpalomino" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://batalex.github.io"><img src="https://avatars.githubusercontent.com/u/11004857?v=4?s=100" width="100px;" alt="Alex Batisse"/><br /><sub><b>Alex Batisse</b></sub></a><br /><a href="#ideas-Batalex" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3ABatalex" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/semidan-robaina/"><img src="https://avatars.githubusercontent.com/u/21340147?v=4?s=100" width="100px;" alt="Semidán Robaina, Ph.D."/><br /><sub><b>Semidán Robaina, Ph.D.</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=Robaina" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bbulpett"><img src="https://avatars.githubusercontent.com/u/6424805?v=4?s=100" width="100px;" alt="Barnabas Bulpett (He/Him)"/><br /><sub><b>Barnabas Bulpett (He/Him)</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Abbulpett" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=bbulpett" title="Code">💻</a> <a href="#design-bbulpett" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/juanis2112"><img src="https://avatars.githubusercontent.com/u/18587879?v=4?s=100" width="100px;" alt="Juanita Gomez"/><br /><sub><b>Juanita Gomez</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=juanis2112" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ajuanis2112" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.sckaiser.com"><img src="https://avatars.githubusercontent.com/u/6486256?v=4?s=100" width="100px;" alt="Sarah Kaiser"/><br /><sub><b>Sarah Kaiser</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=crazy4pi314" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Acrazy4pi314" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.hamma.dev"><img src="https://avatars.githubusercontent.com/u/17051931?v=4?s=100" width="100px;" alt="C.A.M. Gerlach"/><br /><sub><b>C.A.M. Gerlach</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=CAM-Gerlach" title="Code">💻</a> <a href="#design-CAM-Gerlach" title="Design">🎨</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3ACAM-Gerlach" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jonny.bio"><img src="https://avatars.githubusercontent.com/u/4750391?v=4?s=100" width="100px;" alt="Nhat (Jonny) Tran"/><br /><sub><b>Nhat (Jonny) Tran</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3AJonnyTran" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=JonnyTran" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/teddygroves"><img src="https://avatars.githubusercontent.com/u/17163471?v=4?s=100" width="100px;" alt="Teddy Groves"/><br /><sub><b>Teddy Groves</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=teddygroves" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ateddygroves" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/msarahan"><img src="https://avatars.githubusercontent.com/u/38393?v=4?s=100" width="100px;" alt="Mike Sarahan"/><br /><sub><b>Mike Sarahan</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=msarahan" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Amsarahan" title="Reviewed Pull Requests">👀</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://thomasjpfan.com"><img src="https://avatars.githubusercontent.com/u/5402633?v=4?s=100" width="100px;" alt="Thomas J. Fan"/><br /><sub><b>Thomas J. Fan</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=thomasjpfan" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Athomasjpfan" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://szhorvat.net/"><img src="https://avatars.githubusercontent.com/u/1212871?v=4?s=100" width="100px;" alt="Szabolcs Horvát"/><br /><sub><b>Szabolcs Horvát</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=szhorvat" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aszhorvat" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jon-e.net"><img src="https://avatars.githubusercontent.com/u/12961499?v=4?s=100" width="100px;" alt="Jonny Saunders"/><br /><sub><b>Jonny Saunders</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=sneakers-the-rat" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Asneakers-the-rat" title="Reviewed Pull Requests">👀</a> <a href="#blog-sneakers-the-rat" title="Blogposts">📝</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/klmcadams"><img src="https://avatars.githubusercontent.com/u/58492561?v=4?s=100" width="100px;" alt="Kerry McAdams"/><br /><sub><b>Kerry McAdams</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=klmcadams" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aklmcadams" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://rickynilsson.github.io"><img src="https://avatars.githubusercontent.com/u/12720117?v=4?s=100" width="100px;" alt="Ricky Nilsson"/><br /><sub><b>Ricky Nilsson</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=rickynilsson" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Arickynilsson" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://hachyderm.io/web/@willingc"><img src="https://avatars.githubusercontent.com/u/2680980?v=4?s=100" width="100px;" alt="Carol Willing"/><br /><sub><b>Carol Willing</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=willingc" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Awillingc" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://eliotwrobson.github.io/"><img src="https://avatars.githubusercontent.com/u/1345068?v=4?s=100" width="100px;" alt="Eliot Robson"/><br /><sub><b>Eliot Robson</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=eliotwrobson" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aeliotwrobson" title="Reviewed Pull Requests">👀</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/pllim/"><img src="https://avatars.githubusercontent.com/u/2090236?v=4?s=100" width="100px;" alt="P. L. Lim"/><br /><sub><b>P. L. Lim</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=pllim" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Apllim" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://nesbitt.io"><img src="https://avatars.githubusercontent.com/u/1060?v=4?s=100" width="100px;" alt="Andrew Nesbitt"/><br /><sub><b>Andrew Nesbitt</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=andrew" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aandrew" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kierisi"><img src="https://avatars.githubusercontent.com/u/23085445?v=4?s=100" width="100px;" alt="Jesse Mostipak"/><br /><sub><b>Jesse Mostipak</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=kierisi" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Akierisi" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://flpm.dev"><img src="https://avatars.githubusercontent.com/u/17676929?v=4?s=100" width="100px;" alt="Felipe Moreno"/><br /><sub><b>Felipe Moreno</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=flpm" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aflpm" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/sn3hay"><img src="https://avatars.githubusercontent.com/u/156010030?v=4?s=100" width="100px;" alt="Sneha Yadav"/><br /><sub><b>Sneha Yadav</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=sn3hay" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Asn3hay" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BradonZhang"><img src="https://avatars.githubusercontent.com/u/10603251?v=4?s=100" width="100px;" alt="Emily Zhang"/><br /><sub><b>Emily Zhang</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=BradonZhang" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3ABradonZhang" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ffy00.github.io/"><img src="https://avatars.githubusercontent.com/u/11718923?v=4?s=100" width="100px;" alt="Filipe Laíns"/><br /><sub><b>Filipe Laíns</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=FFY00" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3AFFY00" title="Reviewed Pull Requests">👀</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/steven-silvester-90318721/"><img src="https://avatars.githubusercontent.com/u/2096628?v=4?s=100" width="100px;" alt="Steven Silvester"/><br /><sub><b>Steven Silvester</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ablink1073" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.stsci.edu/"><img src="https://avatars.githubusercontent.com/u/503615?v=4?s=100" width="100px;" alt="Megan Sosey"/><br /><sub><b>Megan Sosey</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Asosey" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://paddyroddy.github.io"><img src="https://avatars.githubusercontent.com/u/15052188?v=4?s=100" width="100px;" alt="Patrick J. Roddy"/><br /><sub><b>Patrick J. Roddy</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=paddyroddy" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Apaddyroddy" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://g4brielvs.me"><img src="https://avatars.githubusercontent.com/u/4053416?v=4?s=100" width="100px;" alt="Gabriel Stefanini Vicente"/><br /><sub><b>Gabriel Stefanini Vicente</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=g4brielvs" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ag4brielvs" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SeanAverS"><img src="https://avatars.githubusercontent.com/u/110581427?v=4?s=100" width="100px;" alt="SeanAverS"/><br /><sub><b>SeanAverS</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=SeanAverS" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3ASeanAverS" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ayhanxian"><img src="https://avatars.githubusercontent.com/u/20816603?v=4?s=100" width="100px;" alt="Han"/><br /><sub><b>Han</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=ayhanxian" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aayhanxian" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jonkiparsky"><img src="https://avatars.githubusercontent.com/u/5283553?v=4?s=100" width="100px;" alt="Jon Kiparsky"/><br /><sub><b>Jon Kiparsky</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/issues?q=author%3Ajonkiparsky" title="Bug reports">🐛</a> <a href="#ideas-jonkiparsky" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tracykteal"><img src="https://avatars.githubusercontent.com/u/889238?v=4?s=100" width="100px;" alt="Tracy Teal"/><br /><sub><b>Tracy Teal</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Atracykteal" title="Reviewed Pull Requests">👀</a> <a href="#ideas-tracykteal" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/InessaPawson"><img src="https://avatars.githubusercontent.com/u/43481325?v=4?s=100" width="100px;" alt="Inessa Pawson"/><br /><sub><b>Inessa Pawson</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=InessaPawson" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3AInessaPawson" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sethmlarson.dev"><img src="https://avatars.githubusercontent.com/u/18519037?v=4?s=100" width="100px;" alt="Seth Michael Larson"/><br /><sub><b>Seth Michael Larson</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Asethmlarson" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://erikwhiting.com"><img src="https://avatars.githubusercontent.com/u/47164199?v=4?s=100" width="100px;" alt="Erik Whiting"/><br /><sub><b>Erik Whiting</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aerik-whiting" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hugovk"><img src="https://avatars.githubusercontent.com/u/1324225?v=4?s=100" width="100px;" alt="Hugo van Kemenade"/><br /><sub><b>Hugo van Kemenade</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=hugovk" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ahugovk" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rmj3197"><img src="https://avatars.githubusercontent.com/u/54344732?v=4?s=100" width="100px;" alt="Raktim Mukhopadhyay"/><br /><sub><b>Raktim Mukhopadhyay</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=rmj3197" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Armj3197" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://space.mit.edu/home/guenther/"><img src="https://avatars.githubusercontent.com/u/498688?v=4?s=100" width="100px;" alt="Hans Moritz Günther"/><br /><sub><b>Hans Moritz Günther</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=hamogu" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ahamogu" title="Reviewed Pull Requests">👀</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tkoyama010"><img src="https://avatars.githubusercontent.com/u/7513610?v=4?s=100" width="100px;" alt="Tetsuo Koyama"/><br /><sub><b>Tetsuo Koyama</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Atkoyama010" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/breanna-powell-wa/"><img src="https://avatars.githubusercontent.com/u/85724630?v=4?s=100" width="100px;" alt="Breanna Powell"/><br /><sub><b>Breanna Powell</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=brepowell" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Abrepowell" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://mandymoore.tech"><img src="https://avatars.githubusercontent.com/u/2262962?v=4?s=100" width="100px;" alt="Mandy Moore"/><br /><sub><b>Mandy Moore</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=therubyrep" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Atherubyrep" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=therubyrep" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TimothyEDawson"><img src="https://avatars.githubusercontent.com/u/142453358?v=4?s=100" width="100px;" alt="Tim Dawson"/><br /><sub><b>Tim Dawson</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=TimothyEDawson" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3ATimothyEDawson" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/elliesch"><img src="https://avatars.githubusercontent.com/u/12628861?v=4?s=100" width="100px;" alt="Ellie Abrahams"/><br /><sub><b>Ellie Abrahams</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aelliesch" title="Reviewed Pull Requests">👀</a> <a href="#blog-elliesch" title="Blogposts">📝</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jedbrown.org"><img src="https://avatars.githubusercontent.com/u/3303?v=4?s=100" width="100px;" alt="Jed Brown"/><br /><sub><b>Jed Brown</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ajedbrown" title="Reviewed Pull Requests">👀</a> <a href="#blog-jedbrown" title="Blogposts">📝</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/crhea93"><img src="https://avatars.githubusercontent.com/u/34322936?v=4?s=100" width="100px;" alt="Carter Lee Rhea"/><br /><sub><b>Carter Lee Rhea</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Acrhea93" title="Reviewed Pull Requests">👀</a> <a href="#blog-crhea93" title="Blogposts">📝</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://vecko.me"><img src="https://avatars.githubusercontent.com/u/36369090?v=4?s=100" width="100px;" alt="Nick Hodgskin"/><br /><sub><b>Nick Hodgskin</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=VeckoTheGecko" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/issues?q=author%3AVeckoTheGecko" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yuvipanda"><img src="https://avatars.githubusercontent.com/u/30430?v=4?s=100" width="100px;" alt="Yuvi"/><br /><sub><b>Yuvi</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Ayuvipanda" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ocefpaf.github.io/python4oceanographers"><img src="https://avatars.githubusercontent.com/u/950575?v=4?s=100" width="100px;" alt="Filipe"/><br /><sub><b>Filipe</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aocefpaf" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/slobentanzer"><img src="https://avatars.githubusercontent.com/u/13223629?v=4?s=100" width="100px;" alt="Sebastian Lobentanzer"/><br /><sub><b>Sebastian Lobentanzer</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Aslobentanzer" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/bwhitt7"><img src="https://avatars.githubusercontent.com/u/103079612?v=4?s=100" width="100px;" alt="Britney Whittington"/><br /><sub><b>Britney Whittington</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=bwhitt7" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://romaincaneill.fr"><img src="https://avatars.githubusercontent.com/u/18579092?v=4?s=100" width="100px;" alt="Romain Caneill"/><br /><sub><b>Romain Caneill</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=rcaneill" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
