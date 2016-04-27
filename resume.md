---
layout: page
title: Resume
permalink: /resume/
---


{% for resume in site.resume %}
  <div class="col-lg-3 col-md-6 text-center">
    <div class="">
      <h3><a href="{{ resume.url }}">{{ resume.title }}</a></h3>
      <p class="text-muted">{{ resume.content }}</p>
    </div>
  </div>
{% endfor %}