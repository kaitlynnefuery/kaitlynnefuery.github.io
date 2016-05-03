---
layout: default
title: Resume
permalink: /resume/
image:
alt: 
header: Resume
---


{% for resume in site.resume %}
  <div class="">
    <div class="">
      <h1 class="page-header">{{ resume.title }}</h1>
      <p class="">{{ resume.content }}</p>
    </div>
  </div>
{% endfor %}