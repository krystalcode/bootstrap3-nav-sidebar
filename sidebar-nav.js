/*!
 * Bootstrap 3 Sidebar Nav Plugin v1.0.0
 * https://github.com/krystalcode/bootstrap3-sidebar-nav
 * Copyright (c) 2015 Dimitris Bozelos
 * Licensed under MIT (https://github.com/krystalcode/bootstrap3-sidebar-nav/blob/master/LICENSE)
 */
(function ($) {
  $(document).ready(function(){

    // Toggle visibility of the primary menu.
    $('.sidebar-nav-toggle').click(function() {
      $('body').toggleClass('sidebar-nav');
      $('body').toggleClass('sidebar-nav-hidden');
    });

  });

})(jQuery);
