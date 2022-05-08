// Global Declarations
// a current time function to compare key for past, present and future
const currentTime = moment().format("H");
console.log(currentTime);

let workingHoursIndex = 0;
// declare an on ready function
const mainElement = $("#main");

// Working hours array
const workingHours = [
  {
    label: "9AM",
    key: 9,
  },
  {
    label: "10AM",
    key: 10,
  },
  {
    label: "11AM",
    key: 11,
  },
  {
    label: "12AM",
    key: 12,
  },
  {
    label: "1PM",
    key: 13,
  },
  {
    label: "2PM",
    key: 14,
  },
  {
    label: "3PM",
    key: 15,
  },
  {
    label: "4PM",
    key: 16,
  },
  {
    label: "5PM",
    key: 17,
  },
];

const readFromLocalStorage = (key, defaultValue) => {
  const dataFromLS = JSON.parse(localStorage.getItem(key));
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
  if (!dataFromLS) {
    localStorage.setItem(key, JSON.stringify([]));
  }
};

const writeToLocalStorage = (key, value) => {
  // convert value to string
  const stringifiedValue = JSON.stringify(value);

  // set stringified value to LS for key name
  localStorage.setItem(key, stringifiedValue);
};

const renderDate = () => {
  const today = moment();
  const formattedToday = today.format("ddd, Do MMM, YYYY h:mmA");
  console.log(formattedToday);

  const dates = $(`<p></p>`).text(formattedToday);
  $("#header").append(dates);
  console.log(dates);
};

const storeInLS = () => {};
const renderTimeBlocks = () => {
  $("#main").on("click", storeInLS());
  for (let i = 0; i < workingHours.length; i += 1) {
    const timeBlocks = `<section class="d-flex bd-highlight mt-1 mb-1 screen">
        <span class="p-2 bd-highlight times" id="timeDiv">${workingHours[i].label}</span>
  <div class="p-2 flex-grow-1 bd-highlight"id="eventDiv"> 
    <textarea class="form-control no-color " id="exampleFormControlTextarea1" rows="2" data-textarea-key = ${workingHours[i].key} > ${workingHours[i].key.value}</textarea>
    </div>
  <button class="p-2 bd-highlight save" id="saveDiv-${workingHours[i].key}" type="submit" data-key = ${workingHours[i].key}><img src="./assets/images/save.png" alt="click to save"></button>
      </section>`;

    console.log($("#saveDiv-10").data("key"));

    const timeOnBlock = $(timeBlocks).attr(
      "data-answer-key",
      workingHours[i].key
    );

    if (currentTime > timeOnBlock) {
      $(".d-flex bd-highlight mt-1 mb-1").addClass("past");
      console.log("if is working");
    } else if (currentTime < timeOnBlock) {
      $(".d-flex bd-highlight mt-1 mb-1").addClass("future");
    } else {
      $(".d-flex bd-highlight mt-1 mb-1").addClass("present");
    }

    //   if (workingHours[i]).key.value === " "{

    //   } else {
    //   }
    //   const events = readFromLocalStorage(workingHourskey, value);
    //   console.log(events);
    mainElement.append(timeBlocks);
    console.log("working");
  }
};

$(window).on("load", renderDate(), renderTimeBlocks());

// declare render data function
// render time blocks
// store in LS on click of DIV
