// Global Declarations
// a current time function to compare key for past, present and future
const mainElement = $("#time-blocks");
let workingHoursIndex = 0;
// declare an on ready function

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

// Call local storage
const readFromLocalStorage = (key, defaultValue) => {
  const dataFromLS = JSON.parse(localStorage.getItem(key));

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

const renderTimeBlocks = () => {
  const getEventForTimeBlock = (workingHour) => {
    return "";
  };
  const getClassName = (workingHour) => {
    const currentHour = moment().hour();
    if (workingHour === currentHour) {
      return "present";
    }
    if (workingHour > currentHour) {
      return "future";
    }
    return "past";
  };

  const renderTimeBlock = (workingHour) => {
    const timeBlock = `<div class="d-flex bd-highlight my-1 ${getClassName(
      workingHour.key
    )}">
        <span class="p-2 bd-highlight times" id="timeDiv">${
          workingHour.label
        }</span>
  <div class="p-2 flex-grow-1 bd-highlight"id="eventDiv"> 
    <textarea class="form-control no-color " id="exampleFormControlTextarea1" rows="2" data-textarea-key = ${
      workingHour.key
    } > ${getEventForTimeBlock(workingHour.key)}</textarea>
    </div>
  <button class="p-2 bd-highlight save" id="save-div" type="submit" data-key = "${
    workingHour.key
  }"
  }"><img src="./assets/images/save.png" alt="click to save" data-key = "${
    workingHour.key
  }" /></button>
      </div>`;
    mainElement.append(timeBlock);
  };

  workingHours.forEach(renderTimeBlock);

  // if (workingHours[i]).key.value === " "
  // } else {
  // }
  // const events = readFromLocalStorage(workingHourskey, value);
  // console.log(events);

  console.log("working");
};

const onReady = () => {
  renderDate();
  renderTimeBlocks();
};

const saveToLS = (event) => {
  const target = $(event.target);

  if (target.is("button") || target.is("img")) {
    console.log("click");
    const key = target.attr("data-key");
    console.log(key);
    const value = $(`textarea[data-textarea-key='${key}']`).val().trim();
    console.log(value);
  }
};

mainElement.click(saveToLS);
$(document).ready(onReady);

// declare render data function
// render time blocks
// store in LS on click of DIV
