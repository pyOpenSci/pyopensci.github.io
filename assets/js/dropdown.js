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


// isotope filtering
// This blog has a good example of smart resizing ... https://jewelfarazi.me/create-jquery-isotope-responsive-masonry-layout/
var qsRegex;
var buttonFilter;

// init Isotope
var $grid = $('.grid-isotope').imagesLoaded( function() {
  $grid.isotope({
    itemSelector: '.element-item',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 100,
      horizontalOrder: true,
    },
    filter: function() {
      var $this = $(this);
      var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
      var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
      return searchResult && buttonResult;
    }
  });
});

$('#filters').on( 'click', 'button', function() {
  buttonFilter = $( this ).attr('data-filter');
  $grid.isotope();
});

// use value of search field to filter
var $quicksearch = $('#quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $grid.isotope();
}) );


  // change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}
