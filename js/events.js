function getIt() {
  $("p").on("click", function() {
      alert("Hey!")
  });
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  });
}

function submitIt() {
  $("form").on("submit", function() {
      alert("Your form is going to be submitted now.")
  });
}

function pressIt() {
  $("input").on("keydown", function() {
    if ($("input:first").val() === "g")
    {
    alert("You have pressed the 'G' key");
    return;
    }
  });
}

$(document).ready(function(){

// call functions here

});
