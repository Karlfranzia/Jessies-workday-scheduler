



$(function () {
  var currentDay = document.querySelector("#currentDay");
  var currentHour = dayjs().hour();
  setInterval(() => {
    currentTime = dayjs().format('MMM D, YYYY @ hh:mm:ss a')
    currentDay.textContent = currentTime
  }, 1000)

  
  for (var i = 9; i < 18; i++) {
  // calculate hour for each block
  var hour;
  //adds am or pm depending on hour
  if (i < 12) {
   hour = i + "AM";
  } else if (i === 12) {
    hour = i + "PM";
  } else {
    hour = (i - 12) + "PM";
  }
  var hourId = "hour-" + i;
  // Create a row to hold content
  var row = $("<div>").addClass("row time-block").attr("id", hourId);

  // make the container for text area and button
  var hourDiv = $("<div>")
    .addClass("col-2 col-md-1 hour d-flex align-items-center text-center py-3")
    .text(hour)
    .appendTo(row);

  // make the text area
  var textArea = $("<textArea>")
    .addClass("col-8 col-md-10 ") 
    .val(localStorage.getItem(hourId))
    .appendTo(row);

  // make the save button
  var saveBtn = $("<button>")
    .addClass("btn save col-2 col-md-1")
    .html("<i>Save</i>")
    .appendTo(row);

  // adds a class after checking current time vs time of block
  if (currentHour > i) {
    row.addClass("past");
  } else if (currentHour < i) {
    row.addClass("future");
  } else {
    row.addClass("present");
  }

  
  $(".content").append(row);

  // saves to local storage
  
  saveBtn.on("click", function() {
    var hourId = $(this)
      .parent()
      .attr("id");
    var event = $("#" + hourId + " textarea").val();
    localStorage.setItem(hourId, event);
  });

}});
