var LoaderModule = function () {

  var $loader = document.getElementById('loader-overlay');
  var $spinner = document.getElementById('spinner');

  var initLoader = function initLoader() {

  var loaderTL = new TimelineMax({delay:1})
    .to($spinner, .25, { autoAlpha:0, ease: Circ.easeOut})
    .to($loader, 1, { yPercent:-100, force3D: true, ease: Circ.easeOut});


  };

  return {
    initLoader: initLoader
  };
}();

var app = (function() {

  var $nav = document.querySelector('nav');
  var $slideshow = document.querySelector('#slideshow');
  var $modalFull = document.querySelector('#modal-full');
  var $modalFull1 = document.querySelector('#modal-full-1');
  var $modalFull2 = document.querySelector('#modal-full-2');

  function init() {

    UIkit.navbar($nav, {});
    UIkit.slideshow($slideshow, {});
    UIkit.modal($modalFull, {});
    UIkit.modal($modalFull1, {});
    UIkit.modal($modalFull2, {});
  }

  return {
    init: init
  }

})();

window.addEventListener('load', function() {


  console.log('LoaderModule.initLoader()');
  LoaderModule.initLoader();
  console.log('app.init();');
  app.init();




});
