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
    if(key.which == 83){
      alert('s was pressed');
  }
});
}

$(document).ready(function(){

// call functions here

});
