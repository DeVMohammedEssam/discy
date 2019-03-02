$(function() {
  "use strict";

  /*
     =============
     ==>sign in Page
     =============
     */

  /*search animation*/
  $(".search").click(function() {
    $(this)
      .find("input")
      .click(function(e) {
        e.stopPropagation();
      })
      .stop()
      .fadeToggle()
      .toggleClass("search-animate");
  });

  $("#searchSm").css({
    width: "0",
    display: "none"
  });
  $("#searchSm")
    .parent()
    .click(function() {
      $("#searchSm")
        .stop()
        .click(function(e) {
          e.stopPropagation();
        });
      if ($("#searchSm").width() > 0) {
        $("#searchSm").animate(
          {
            width: "0"
          },
          600,
          function() {
            $(this).slideUp(200);
          }
        );
      } else {
        $("#searchSm").slideDown(200, function() {
          $(this).animate(
            {
              width: "100%"
            },
            600
          );
        });
      }
    });

  /*Adding active class*/
  $(".navbar-dark .navbar-nav .nav-link").click(function(e) {
    $(".navbar-dark .navbar-nav .nav-link").removeClass("custom-active");
    $(this).addClass("custom-active");
  });

  /*Ending of sign in page */

  /*
     =============
     ==>Home Page
     =============
     */
  /*clearing placeholder on click*/
  var placeholderText = "";
  $(".search-box").focus(function() {
    placeholderText = $(this).attr("placeholder");
    $(this).attr("placeholder", "");
  });

  $(".search-box").blur(function() {
    $(this).attr("placeholder", placeholderText);
  });
  /*Nav menue*/
  var navOptions = $(".nav-options-container");
  $(".nav-options-btn")
    .parent()
    .click(function(e) {
      e.stopPropagation();
      navOptions.stop().slideToggle(300);
    });

  $("body")
    .not(".fa-bell,.notification-menu")
    .click(function() {
      navNotification.stop().slideUp(300);
    });
  navOptions.click(function(e) {
    e.stopPropagation();
  });

  /*notification box*/
  var navNotification = $(".notification-menu");
  $(".fa-bell").click(function(e) {
    e.stopPropagation();
    $(".bell .badge").hide();
    navNotification.stop().slideToggle(300);
  });

  $("body")
    .not(".nav-options-btn,.nav-options-container")
    .click(function() {
      navOptions.stop().slideUp(300);
    });
  navNotification.click(function(e) {
    e.stopPropagation();
  });

  /*minpulating container's maxwidth*/
  function setContainer() {
    var ul, container;
    container = $(".posts .container");
    ul = $("#getWidth");
    if ($(window).width() > 992) {
      container.css({
        height: "100%",
        maxWidth: ul.width() + 10,
        position: "fixed",
        top: "71.5158px",
        left: ul.position().left + 15
      });
      $(".side-nav").css("left", $(".navbar-brand img").position().left);
    } else if ($(window).width() < 850) {
      container.css({
        height: "100%",
        maxWidth: "90%",
        position: "fixed",
        top: "71.5158px",
        left: "5%"
      });
      $(".side-nav").css("left", $(".navbar-brand img").position().left - 170);
    } else {
      container.css({
        height: "100%",
        maxWidth: "60%",
        position: "fixed",
        top: "71.5158px",
        left: "20%"
      });
    }
  }
  setContainer();
  $(window).resize(function() {
    var ul, container;
    container = $(".posts .container");
    ul = $("#getWidth");
    if ($(window).width() > 992) {
      container.css({
        height: "100%",
        maxWidth: ul.width(),
        position: "fixed",
        top: "71.5158px",
        left: ul.position().left + 10
      });
      $(".side-nav").css("left", $(".navbar-brand img").position().left);
    } else if ($(window).width() < 850) {
      container.css({
        height: "100%",
        maxWidth: "90%",
        position: "fixed",
        top: "71.5158px",
        left: "5%"
      });
      $(".side-nav").css("left", $(".navbar-brand img").position().left - 170);
    } else {
      container.css({
        height: "100%",
        maxWidth: "60%",
        position: "fixed",
        top: "71.5158px",
        left: "20%"
      });
    }
  });

  /*container nav*/

  $(".posts ul li").click(function() {
    $(".posts ul li").removeClass("custom-active");
    $(this).addClass("custom-active");
  });

  //side-nav click
  $(" .side-nav a").click(function() {
    $(" .side-nav a").removeClass("custom-active");
    $(this).addClass("custom-active");
  });
  $(".side-nav ul li").click(function() {
    $(this)
      .siblings("a")
      .addClass("custom-active");
  });

  /*sidebar toggle*/
  $(".sidebar-toggler").click(function() {
    if (
      $(".side-nav").position().left ===
      $(".navbar-brand img").position().left - 170
    )
      $(".side-nav").css("left", $(".navbar-brand img").position().left);
    else if (
      $(".side-nav").position().left != $(".navbar-brand img").position()
    )
      $(".side-nav").css("left", $(".navbar-brand img").position().left - 170);
  });

  /*right side*/

  /*right side button*/
  $(".btn-cont").hover(
    function() {
      $(this)
        .find("span")
        .css("height", "100%");
    },
    function() {
      $(this)
        .find("span")
        .css("height", "0");
    }
  );

  /*navTab settings*/
  var allTabs = $(".nav-tabs .nav-item");
  var activeLink = $(".nav-tabs .nav-item .active");
  var initWidth = activeLink.outerWidth();
  var activeCollapse = $(" .nav-tabs .fa-caret-square-down");

  function navTabClick() {
    $(".fa-caret-square-down").click(function() {
      $(".nav-tabs .nav-item a")
        .filter(".active")
        .trigger("click");
    });
    $(".nav-tabs .nav-item a").click(function(e) {
      $(".fa-caret-square-down").toggleClass("rotate-caret");
      allTabs.toggle();
      $(this)
        .parent()
        .show();
    });

    $(".nav-tabs .nav-item a")
      .not(".active")
      .parent()
      .click(function() {
        $(".nav-tabs .nav-item a")
          .removeClass("active")
          .parent()
          .css("order", "1");
        $(this)
          .parent()
          .css("order", "-1");
      });
  }

  function navTab() {
    if ($(window).width() <= 1130) {
      navTabClick();

      allTabs.css("display", "none");
      activeLink.parent().css({
        display: "block"
      });
    } else {
      allTabs.css("display", "list-item");
      $(".fa-caret-square-down").click(function(e) {
        e.stopPropagation();
      });
    }
  }
  navTab();

  $(window).on("resize", function() {
    navTab();
  });
  $(".home-Page .right-side .post:last-of-type").css(
    "border",
    "none"
  ); /*removing last post border*/

  $(".fa-arrow-circle-left").on("click", function() {
    $(".right-side").toggleClass("right-side-toggle");
  });

  /*Ending of NavTab settings*/

  /*popUp function*/
  function popUp(elementShown, elementClicked) {
    var overlay = $(".popup-overlay");
    elementClicked.click(function() {
      overlay.stop().show();
      elementShown.stop().show();
    });
    elementShown.click(function(e) {
      e.stopPropagation();
    });

    overlay.click(function() {
      overlay.stop().hide();
      elementShown.stop().hide();
    });

    $(window).keydown(function(e) {
      if (e.keyCode === 27) {
        overlay.stop().hide();
        elementShown.stop().hide();
      }
    });
  }

  /*starting of question overlay*/
  var textarea = $("textarea");
  /*tools click*/
  $(".tools-bar button").click(function() {
    $(this)
      .find("i")
      .toggleClass("toolbar-item--active");
  });
  $("#bold").click(function() {
    textarea.toggleClass("bolden");
  });

  $("#italic").click(function() {
    textarea.toggleClass("italic");
  });

  $("#line-through").click(function() {
    textarea.toggleClass("line-through");
  });

  $("#ul").click(function() {
    $(".ul")
      .css("display", "block")
      .append('<li contenteditable="true">element</li>');
  });

  $("#ol").click(function() {
    $(".ol")
      .css("display", "block")
      .append('<li contenteditable="true">element</li>');
  });

  $("#align-left").click(function() {
    textarea.toggleClass("align-left");
    textarea.removeClass("align-center").removeClass("align-right");
  });

  $("#align-center").click(function() {
    textarea.removeClass("align-left").removeClass("align-right");
    textarea.toggleClass("align-center");
  });

  $("#align-right").click(function() {
    textarea.removeClass("align-left").removeClass("align-center");
    textarea.toggleClass("align-right");
  });

  $("#copy").click(function() {
    $(".textarea .text").select(); //note this function only works for textareas and input type text
    document.execCommand("copy");
    $(".small-alert")
      .stop(true, true)
      .animate(
        {
          opacity: "1"
        },
        250
      )
      .animate(
        {
          opacity: "0"
        },
        250
      );
  });
  var href, text;
  $("#linking").click(function() {
    textarea.find("form").show(function() {
      textarea.animate({
        scrollTop: 1000
      });
    });

    $("#link-submit").click(function() {
      $(this)
        .parent()
        .hide(function() {
          href = $(".link-cont").val();
          text = $(".link-text-cont").val();
          if (href != "http://www." && text != "" && text != " ") {
            textarea.append(
              "<a target='_blanck' href='" + href + " '> " + text + " </a> "
            );
          }
          href = "http:www.";
          text = "";
        });
    });
  });

  /* Creating a poll start*/
  var poll = $(".poll");
  $("#poll-show").click(() => {
    poll.show(() => {
      $(".ask-a-question").animate({
        scrollTop: 1000
      });
    });

    $("#append-answer").click(() => {
      var answerText = $("#answer-text").val();
      var answerAppended =
        '<div class="my-2 alert alert-info  answer alert-dismissible show fade" role="alert"><button class="close no-style" style="background: transparent" type="button" data-dismiss="alert" aria-label="Close"><span class="text-danger" aria-hidden="true">&times;</span></button>' +
        answerText +
        "</div>";
      if (answerText.replace(/\s/g, "").length) {
        /* \s to find white space chars /g to search all over the characters*/
        if ($(".poll .answer").length <= 4) {
          poll.append(answerAppended);
        } else {
          $("#answer-error").show();
        }
      } else {
        $("#answer-text").attr("placeholder", "Can not be embty!");
      }
    });
  });

  $("#close-pull").click(() => {
    poll.hide();
  });
  /* creating a poll End */

  //hiding question popup
  popUp($(".ask-a-question"), $("#ask-popup"));

  //fixing dropdown problem
  $("#category-dropdown").click(() => {
    $("#category-dropdown")
      .siblings(".dropdown-menu")
      .slideToggle();
  });

  $("#question-success").click(() => {
    $(".ask-a-question")
      .css("transition", "none")
      .slideUp();
    $("#question-success-alert").fadeIn();
    $(".popup-overlay")
      .css("transition", "none")
      .delay(1000)
      .fadeOut(800);
  });

  /*Ending of question overlay*/

  /*Ending of home page*/

  /*General window key down event*/

  $(window).keydown(function(e) {
    if (e.keyCode === 27) {
      navOptions.stop().slideUp(300);
      navNotification.stop().slideUp(300);

      /*side-nav*/
      if ($(window).width() <= 850) {
        $(".side-nav").css(
          "left",
          $(".navbar-brand img").position().left - 170
        );
      }
    }
  });

  var whenHomeText = [
      "RecentQuestions",
      "MostAnswers",
      "RecentAnswers",
      "Most Visited"
    ],
    whenProfileText = [
      "Questions",
      "Polls",
      "Answers",
      "Followed questions",
      "favourite questions"
    ];
  /* Starting of profile */
  //clicking Home side tab
  $("#home-side-nav").on("click", function() {
    //changing nav-tab
    var i = 0;
    while (i < whenHomeText.length) {
      $("#Home-nav-tab li a")
        .eq(i)
        .text(whenHomeText[i]);
      i++;
    }
    $('a[href="#favorite"]').addClass("d-none");
  });
  //clicking profile side tab
  $("#profile-side-nav").on("click", function() {
    //changing nav-tab
    var i = 0;

    while (i < whenProfileText.length) {
      $("#Home-nav-tab li a")
        .eq(i)
        .text(whenProfileText[i]);
      i++;
    }
    $('a[href="#favorite"]').removeClass("d-none");
  });
  /* Ending of profile */
});
