// jQuery to manage drop downs and accessibility
$(document).ready(function() {
  $(".hamburger__btn-toggle").click(function(e) {
      $(this).toggleClass("close");
      // Toggle expanded to try on click
      $(this).attr('aria-expanded', function(i, attr) {
          return attr == 'true' ? 'false' : 'true'
      });

      e.preventDefault();
      $(".nav__links").toggleClass("vertical");
  });

  $(".dropdown").click(function(e) {
      // Close when user clicks nav
      $(this).find(".dropdown-content").toggleClass("open");
      // Handle making sure other drop menus are "closed" when another is open
      $(this).siblings(".dropdown").find(".dropdown-content").removeClass("open");
      $(this).siblings(".dropdown").find(".dropbtn").attr("aria-expanded", "false");
      $(this).find(".dropbtn").attr('aria-expanded', function(i, attr) {
          return attr == 'true' ? 'false' : 'true'
      });
  });

  // Close dropdown when you click outside of the nav ul
  $(document).click(function(e) {
      if (!e.target.closest("ul") && $(".dropdown-content").hasClass("open")) {
          $(".dropdown-content").removeClass("open");
      }
  });
});



// Isotope filtering
// This blog has a good example of smart resizing ... https://jewelfarazi.me/create-jquery-isotope-responsive-masonry-layout/
var qsRegex;
var buttonFilter;

var containerWidth = $('.grid-isotope').width();
var columns = 3; // Number of columns you want
var columnWidth = containerWidth / columns;


// Init Isotope
var $grid = $('.grid-isotope').imagesLoaded(function() {
    $grid.isotope({
        itemSelector: '.element-item',
        layoutMode: 'masonry',
        masonry: {
            columnWidth: columnWidth,
            horizontalOrder: true,
        },
        filter: function() {
            var $this = $(this);
            var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
            var buttonResult = buttonFilter ? $this.is(buttonFilter) : true;
            return searchResult && buttonResult;
        }
    });
});

// Filter on button click
$('#filters').on('click', 'button', function() {
    buttonFilter = $(this).attr('data-filter');
    $grid.isotope();
});

// Use value of search field to filter
var $quicksearch = $('#quicksearch').keyup(debounce(function() {
    qsRegex = new RegExp($quicksearch.val(), 'gi');
    $grid.isotope();
}));

// Change is-checked class on buttons
$('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

// Debounce so filtering doesn't happen every millisecond
function debounce(fn, threshold) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
        clearTimeout(timeout);
        var args = arguments;
        var _this = this;

        function delayed() {
            fn.apply(_this, args);
        }
        timeout = setTimeout(delayed, threshold);
    };
}
