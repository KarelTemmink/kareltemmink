/*
  Prologue by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  var $window = $(window),
    $body = $('body');

  // Breakpoints.
  breakpoints({
    wide:      [ '961px',  '1880px' ],
    normal:    [ '961px',  '1620px' ],
    narrow:    [ '961px',  '1320px' ],
    narrower:  [ '737px',  '960px'  ],
    mobile:    [ null,     '736px'  ]
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // NOTE:
  // The original template used single-page scrolling (#hash links),
  // Scrolly (smooth scroll) and Scrollex (active section tracking).
  // Since we switched to separate pages (index.html, portfolio.html, etc.),
  // we intentionally do NOT run any of that code here.

  // Header (narrower + mobile).

    // Toggle.
    $(
      '<div id="headerToggle">' +
        '<a href="#header" class="toggle" aria-label="Open navigation menu" aria-controls="header" aria-expanded="false"></a>' +
      '</div>'
    )
      .appendTo($body);

    // Header.
    $('#header')
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnEscape: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'left',
        target: $body,
        visibleClass: 'header-visible'
      });


  // Keep the mobile navigation button's accessible state in sync with the panel.
  if (window.MutationObserver) {
    var navToggle = document.querySelector('#headerToggle .toggle');
    if (navToggle) {
      var syncNav = function() {
        var open = $body.hasClass('header-visible');
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
      };
      var observer = new MutationObserver(syncNav);
      observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
      syncNav();
    }
  }

})(jQuery);