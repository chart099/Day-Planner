// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function doProgram() {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    $(".saveBtn").on("click", function() {
      var hourInput = $(this).parent().attr('id');
      var userInput = $(".description");
      var storeInput = JSON.parse(localStorage.getItem("hour-description")) || [];
      storeInput.push({hour: hourInput, description: userInput});
      localStorage.setItem("hour-description", JSON.stringify(storeInput));

      if (this.userInput === "") {
        localStorage.removeItem(hourInput);
        localStorage.removeItem(userInput)
      }
    })

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

   
      var currentHour = dayjs().hour();
      console.log(currentHour);
      for (let i=9; i< 18; i++ ) {
        if (i === currentHour) {
          $("#hour-" + i).addClass('present');
        } else if (i < currentHour) {
          $("#hour-" + i).addClass('past')
        } else {
          $("#hour-" + i).addClass('future')
        }
      }
    


    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  
  
  //Save Button: if there is content, save it to local storage. Either data or an empty string
  
  // use a for loop
  // if time < present time => past
  // if time = Math.floor(present time) => present
  // if time > present time => future
  
  //need to fetch from local storage so your input saves until you remove it