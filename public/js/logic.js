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
  $('#add-burger-btn').on('click', function () {
    console.log("success!")
    addBurger();
  });



});