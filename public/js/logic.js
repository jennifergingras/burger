$(document).ready(function () {
  console.log("hi there!");

  // Methods for Requests
  var API = {
    saveBurger: function (burger) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/burgers",
        data: JSON.stringify(burger)
      });
    },
  };


  // Functions
  // add burger
  function addBurger() {
    var newBurger = {
      burger_name: $('#burger-input').val().trim(),
    };
    console.log(newBurger),
      API.saveBurger(newBurger).then(function (data) {
        console.log("new burger added");
        console.log(data);
        location.assign('/');
      });
  }


  // BUTONS
  // add a burger
  $('#add-burger-btn').on('click', function () {
    addBurger();
  });


  // change a burger
  $(".change-eat-btn").on('click', function () {
    var id = $(this).data('id');
    var newEat = $(this).data('neweat');

    var newEatState = {
      devoured: newEat
    };

    $.ajax('/api/burgers/' + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function () {
        console.log("changed eat to", newEat);
        location.reload();
      }
    );
  });



});