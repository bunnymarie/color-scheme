$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("p#one").click(function() {
    $("p").removeClass();
    $("p#one").addClass("one");
  });
  $("p#two").click(function() {
    $("p").removeClass();
    $("p#two").addClass("two");
  });
  $("p#three").click(function() {
    $("p").removeClass();
    $("p#three").addClass("three");
  });
});
