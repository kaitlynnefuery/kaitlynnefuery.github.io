---
layout: default
title: Resume
permalink: /resume/
image:
alt: 
header: Resume
---


{% for resume in site.pages.resume %}
  <div class="">
    <div class="">
      <h1 style="padding-top: 1em;">{{ resume.title }}</h1>
      <p class="">{{ resume.content }}</p>
    </div>
  </div>
{% endfor %}