# pyopensci.github.io
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-43-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![pages-build-deployment](https://github.com/pyOpenSci/pyopensci.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/pyOpenSci/pyopensci.github.io/actions/workflows/pages/pages-build-deployment)
[![DOI](https://zenodo.org/badge/174412809.svg)](https://zenodo.org/doi/10.5281/zenodo.10594115)


This repo contains the source code for the [pyOpenSci.org](https://pyopensci.org) website. Contributions are welcome. Thank you [**pyOpenSci contributors**](#contributors-✨)!!

## Getting Started

Please explore [the site](https://pyopensci.org) and let us know what your think. If you find a bug or have
a suggestion for a new feature, [open an issue](https://github.com/pyOpenSci/pyopensci.github.io/issues).

## Next Steps

If you are interested in contributing to pyOpenSci, please read about
how we work in [**pyOpenSci's organization-wide contributing guide**](https://www.pyopensci.org/handbook/CONTRIBUTING.html).
This repo's [CONTRIBUTING.md](./CONTRIBUTING.md) file provides more information
about contributing to our website, our **Python Packaging Guide** and our
**Peer Review Guide**.

## Installation and Development

Have you decided to contribute? We use the [Jekyll framework](https://jekyllrb.org)
for creating this site. To set up a **development environment** and **run the site locally**, follow these steps:

1. Install ruby and bundler on your machine. See [the Jekyll docs](https://jekyllrb.com/docs/installation/) for instructions.
2. Fork and clone this repository.
3. Run `bundle install` in the root of the cloned repository directory. This will
   install the gems needed to run the site locally.
4. Run `bundle exec jekyll serve` to start the jekyll web server.
NOTE: if you want the page to automatically reload, use: `bundle exec jekyll serve --live reload.` This requires Jekyll 3.7 or higher.
5. Open your browser and navigate to `http://127.0.0.1:4000/`.

Please test your changes locally prior to submitting a pull request (PR).


### Want to build with new blog posts to be published in the future?

If you are publishing a blog post with a date that is in the future, you can build the site locally using the `--future` option to view it as follows:

`bundle exec jekyll serve --future`.

### Images and webp

We try to keep the image size of our graphics as small/compressed as possible. To enable webp on your system, you first need to install it:

For MAC:
`brew install webp`

Linux:
`sudo apt-get install imagemagick`

You can convert a directory of PNG images associated with a
blog post that you write using:

`for file in *.png; do cwebp "$file" -o "${file%.*}.webp"; done`

or a single image

`cwebp input-image.png -o output-image.webp`

Below is an example of adding a figure to a post that has both webp and .png formats to support older and newer browsers.

```html
<figure>
<picture>
  <source srcset="/images/image-name.webp" type="image/webp">
  <img src="/images/image-name.png" alt="Alt text here" />
</picture>
</figure>
```
## How to update blog post last_updated field

We have a script that will automatically update the last_updated field for all of our blog posts. To run it use:

`./scripts/date-updated.sh`

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
      <td align="center" valign="top" width="14.28%"><a href="https://jon-e.net"><img src="https://avatars.githubusercontent.com/u/12961499?v=4?s=100" width="100px;" alt="Jonny Saunders"/><br /><sub><b>Jonny Saunders</b></sub></a><br /><a href="https://github.com/pyOpenSci/pyopensci.github.io/commits?author=sneakers-the-rat" title="Code">💻</a> <a href="https://github.com/pyOpenSci/pyopensci.github.io/pulls?q=is%3Apr+reviewed-by%3Asneakers-the-rat" title="Reviewed Pull Requests">👀</a></td>
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
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
