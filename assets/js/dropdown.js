//Jquery to manage drop downs and accessibility
  $(document).ready(function () {
  $(".hamburger__btn-toggle").click(function (e) {
    $(this).toggleClass("close");
    // toggle expanded to try on click
    $(this).attr('aria-expanded', function (i, attr) {
    return attr == 'true' ? 'false' : 'true'});

    e.preventDefault();
    $(".nav__links").toggleClass("vertical");
  });
  
  $(".dropdown").click(function (e) {
    // close when user clicks nav
    $(this).find(".dropdown-content").toggleClass("open");
    // Handle making sure other drop menus are "closed" when another is open
    $(this).siblings(".dropdown").find(".dropdown-content").removeClass("open");
    $(this).siblings(".dropdown").find(".dropbtn").attr("aria-expanded", "false");

    // this works but if user clicks on another drop down it should also return to closed
    // with this code it just toggles the next thing that the user clicks so both 
    // dropdowns are set to expanded:true
    $(this).find(".dropbtn").attr('aria-expanded', function (i, attr) {
    return attr == 'true' ? 'false' : 'true' });
  });

  // Close dropdown when u click outside of the nav ul
  $(document).click(function (e) {
    if (!e.target.closest("ul") && $(".dropdown-content").hasClass("open")) {
      $(".dropdown-content").removeClass("open");
    }

    
  });
});