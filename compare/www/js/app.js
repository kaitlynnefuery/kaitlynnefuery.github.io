function changeImage() {
  var screenshot = document.forms[0].os.value + '/' +
    document.forms[0].browser.value + '/' +
    document.forms[0].screenshot.value

  document.getElementById('image').src = 'screenshots/' + screenshot;
  console.log('changed');
}

function init() {
  var browser = document.getElementsByName('browser');
  var os = document.getElementsByName('os');
  var screenshot = document.getElementById('screenshot');

  browser[0].checked = true;
  os[0].checked = true;

  _.each(os, function(el) {
    el.addEventListener("click", function(){
      changeImage();
    });
  });

  _.each(browser, function(el) {
    el.addEventListener("click", function(){
      changeImage();
    });
  });

  screenshot.addEventListener("change", function(){
    changeImage();
  });
}

init();
changeImage();