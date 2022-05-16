// Global Declarations
// a current time function to compare key for past, present and future
const mainElement = $("#time-blocks");
// declare an on ready function
const defaultPlanner = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};
// Working hours array
const workingHour = [
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
const currentHour = moment().hour();

// Call local storage
const readFromLocalStorage = (key, defaultValue) => {
  // get from LS using key name
  const dataFromLS = localStorage.getItem(key);
  console.log("works");
  // parse data from LS
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
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
  const newDate = today.format("ddd, Do MMM, YYYY h:mmA");
  console.log(newDate);
  const dates = $(`<p></p>`);
  dates.empty().append(newDate);
  $("#header").append(newDate);

  console.log(dates);
};
const renderTimeBlocks = () => {
  const getEventForTimeBlock = (workingHour) => {
    const planner = readFromLocalStorage("planner");
    return planner ? planner[workingHour] : "";
  };
  const getClassName = (workingHour) => {
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

  workingHour.forEach(renderTimeBlock);
};

const onReady = () => {
  const plannerSearch = JSON.parse(localStorage.getItem("planner"));
  if (!plannerSearch) {
    writeToLocalStorage("planner", defaultPlanner);
  }

  renderDate();
  renderTimeBlocks();
};

const saveToLS = (event) => {
  const target = $(event.target);
  const planner = readFromLocalStorage("planner");
  if (target.is("button") || target.is("img")) {
    console.log("click");

    const key = target.attr("data-key");
    console.log(key);
    const value = $(`textarea[data-textarea-key='${key}']`).val().trim();

    planner[key] = value;
    console.log(value);

    writeToLocalStorage("planner", planner);
  }
};

mainElement.click(saveToLS);
$(document).ready(onReady);

// $(window).load(readFromLocalStorage());
// window.location.reload(renderDate(), renderTimeBlocks());

// declare render data function
// render time blocks
// store in LS on click of DIV
