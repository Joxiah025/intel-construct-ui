
// sidebar
$(".wrapper__sidebar__header__hamburger").on("click", function(e) {
    e.preventDefault();
    $(".wrapper__backdrop").fadeIn("fast");
    $(".wrapper__menu").fadeIn("fast");
});

$(".wrapper__backdrop").on("click", function(e) {
    e.preventDefault();
    $(this).fadeOut("fast");
    $(".wrapper__menu").fadeOut("fast");
});

$("svg.menu_close").on("click", function(e) {
    e.preventDefault();
    $(".wrapper__backdrop").fadeOut("fast");
    $(".wrapper__menu").fadeOut("fast");
});

// search box
$(".search-box-input").on("click", function(e) {
    e.preventDefault();
    $(".input-group").hide();
    $(".wrapper__main__header__search").fadeIn("fast");
    $(".search_box").focus();    
    // e.stopPropagation();
});

$(".close-search").on("click", function(e) {
    e.preventDefault();
    $(".input-group").show();
    $(".wrapper__main__header__search").fadeOut("fast")
});

$("#notification-icon").on("click", function(e) {
    e.preventDefault();
    $(".notification__box").fadeIn("fast");
    // e.stopPropagation();
});

$("#profile-icon").on("click", function(e) {
    e.preventDefault();
    $(".profile_box").fadeIn("fast");
    // e.stopPropagation();
});

$("#bar-link").on("click", function(e) {
    e.preventDefault();
    $(".territory").fadeIn("fast");
});

$("body").on
("click",
  function(e)
  {
    if ($(e.target).closest(".notification__box").get(0) == null && e.target.id !== "notification-icon") {
        if ($(".notification__box").is(":visible")) {
            $(".notification__box").fadeOut("fast");
        }
    }
    // console.log(e.target.id);
    if ($(e.target).closest(".profile_box").get(0) == null && e.target.id !== "profile-icon") {
        if ($(".profile_box").is(":visible")) {
            $(".profile_box").fadeOut("fast");
        }
    }

    if ($(e.target).closest(".territory").get(0) == null && e.target.id !== "bar-link") {
        if ($(".territory").is(":visible")) {
            $(".territory").fadeOut("fast");
        }
    }
    if ($(e.target).closest(".wrapper__main__header__search").get(0) == null && !e.target.classList.contains("search-box-input")) {
        if ($(".wrapper__main__header__search").is(":visible")) {
            $(".input-group").show();
            $(".wrapper__main__header__search").fadeOut("fast");
        }
    }
  }
);