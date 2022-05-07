// Working hours array
// declare an on ready function
const mainElement = document.getElementById("main");

const renderDate = () => {
  const today = moment();
  const formattedToday = today.format("ddd, Do MMM, YYYY h:mmA");
  console.log(formattedToday);

  const dates = $(`<p></p>`).text(formattedToday);
  $("#header").append(dates);
  console.log(dates);
};

const renderTimeBlocks = () => {
mainElement.append = 
};

$(window).on("load", renderDate(), renderTimeBlocks());

// declare render data function
// render time blocks
// store in LS
