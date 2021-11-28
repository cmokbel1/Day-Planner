// DEFINE FUNCTION FOR TIMER //
function timer (){
  //INTERVAL LOOP FOR UPDATED TIMER //
  setInterval(() => {
    //SETTING INNER HTML FOR CURRENT DAY SECTION TO A MOMENT.JS FUNCTION //
    document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
  }, 1000);
}
// CALLING THE TIMER //
timer();
// IDENTIFY BUTTON CLASS TO CLICK //
$(".saveBtn").on("click", function () {
   // DEFINE ID PREFIX VIA THE HYPHEN SPLIT //
    var id = $(this).attr("id").split('-')[0]
    // DEFINE THE TEXT AREA BY APPENDING THE ID WITH POST HYPHENATED TEXT [INCLUDE HYPHEN]//
    var textarea = $("#" + id + "-text")
    // SET THE PLAN OR TASK TO THE VALUE OF THE TEXT AREA //
    var plan = textarea.val()
    // CONSOLE LOG ID AND PLAN/TASK FOR VERIFICATION //
    console.log(id,plan)
    // LOCALLY STORE THE ID AND CORRESPONDING PLAN/TASK //
    localStorage.setItem(id, plan)
    // LOG LOCAL STORAGE FOR VERIFICATION //
   console.log(localStorage)
   // APPEND TEXT AREA WITH TEXT AREA VALUE //
  textarea.innerHTML = `${plan}`
});


// CHANGE COLOR OF TIME SLOTS ACCORDING TO CONDITIONALS //

function changeColor() {
  console.log('ping')

  $(".container .row").each(function() {
    let currentHour = 12;
    console.log(currentHour)
    var text = $(this).children()
    hour = $(this).attr('data-time');
    if (hour == currentHour) {
      $(text[1]).addClass("present")
    } else if (hour< currentHour) {
      $(text[1]).addClass("past")
    } else {
      $(text[1]).addClass("future")
    }
  })
}

changeColor()













































// // ARRAY FOR SAVED TASKS //
// let scheduledTasks = [];
// let userInput
// // LISTENER FOR SAVE BUTTON //
// document.getElementById('scheduler').addEventListener('click', event => {
//   // PREVENT INPUT DEFAULT //
//   event.preventDefault();
//   // CONSOLE LOG CHECK FOR EVENT SUCCESS //
//   console.log(event)
//   // IF CONDITION TO CHECK IF THE EVENT IS A BUTTON //
//   if (event.target.tagName === 'BUTTON') {
//     // ASSIGN USER INPUT TO THE SPECIFIC ATTRIBUTE WITHIN THE DATA STRUCTURE //
//     userInput = event.target.getAttribute('data-input')
//     // LOG THAT INPUT TO VERIFY INTEGRITY //
//     console.log(userInput)
//     // PUSH INPUT VALUE TO SCHEDULED TASK ARRAY FOR STORAGE //
//     scheduledTasks.push(document.getElementById(userInput).value);
//     // LOG SCHEDULED TASKS TO VERIFY PUSH //
//     console.log(scheduledTasks)
//     // DISAPPEAR THE SAVE BUTTON //
//     document.getElementsByClassName('save-delete').style = 'none'
//     // FINDING FORM IN DOCUMENT //
//     let text = document.querySelector('input')
//     // DEFINING THE PARENT NODE OF LINE 32 //
//     let parent = text.parentNode
//       // EDITTING PARENT NODE'S COLUMN WITH USER INPUT VALUE //
//     parent.innerHTML = `<span style="width: 65%; text-align: center; font-weight: bold;">${document.getElementById(userInput).value}</span>`

//   };

//   // STORE ARRAY INTO LOCAL STORAGE UNDER KEY: TASKS //
//   localStorage.setItem('tasks', JSON.stringify(scheduledTasks));

//})


