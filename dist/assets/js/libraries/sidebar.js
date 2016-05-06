// Fixed Sidebar on Scroll
$(function () {
    var sidebar = $('.sidebar');
    var sidebarContent = $('.sidebar-main-content');
    var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

    $(window).scroll(function (event) {
      var y = $(this).scrollTop();
      if (y >= top) {
        sidebar.addClass('fixed');
        sidebarContent.addClass('fixed__content');
      } else {
        sidebar.removeClass('fixed');
        sidebarContent.removeClass('fixed__content');
      }
    });
});
