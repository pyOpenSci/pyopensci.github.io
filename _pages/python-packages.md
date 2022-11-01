---
layout: splash
permalink: /python-packages/
title: "pyOpenSci Open Peer Review & Accepted Packages"

---

{% include feature_row id="intro" type="center" %}


<!-- TODO: this page would be good if we had tags for the packages -  -->
## Our accepted Python open source packages

<!--TODO: This would be better as rows of 3 vs 4; also adjust font size in cards > -->
The packages below have already been through our open peer review process and 
are accepted as pyOpenSci packages.


<div class="grid">
    {% for apackage in site.data.packages %}
    <div class="cards">
    <article class="archive__item" itemscope="" itemtype="https://schema.org/CreativeWork">
        <!-- <div class="archive__item-teaser">
            <img src="" alt="">
        </div> -->
        <h3 class="card__title no_toc" itemprop="headline">
            <!-- <a href="{{ apackage.link }}" rel="permalink"> -->
            {{ apackage.package-name }}
            <!-- </a> -->
        </h3>
        <p class="page__meta contributors">
         <span><i class="fas fa-feather" aria-hidden="true"></i>
         <!-- Commas in between authors -->
         {% for aMaintainer in apackage.maintainer %}  
         {{ aMaintainer }}{% if forloop.last == false %}, {% endif %}
         {% endfor %}
         </span>
        </p>
        <span class="narrow">
        <p class="archive__item-excerpt narrow" itemprop="description">{{ apackage.description | markdownify }}
        </p>
        </span>
        <!-- This would probably be cool as a list and use light text for each ?
        In this case i wouldn't have the card be a link but maybe the hover highlights
        the content in the card? And the hover state isn't a hand to suggest 
          docs-url: 
  citation-link: -->
        <ul>
          <li>
            <a href="{{ apackage.link }}" rel="permalink"><i class="fab fa-github"></i> View Code </a>
          </li>
          {% if apackage.docs-url %}
          <li>
            <a href="{{ apackage.docs-url }}" rel="permalink"><i class="fas fa-book-open"></i> View Docs</a>
          </li>
          {% endif %}
          {% if apackage.citation-link %}
          <li>
            <a href="{{ apackage.docs-url }}" rel="permalink"><i class="fas fa-bookmark fa-fw"></i> Cite</a>
          </li>
        {% endif %}
        </ul>
    </article>
    </div>
    {% endfor %}
</div>


<br clear="both">
