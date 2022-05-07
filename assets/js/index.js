// Working hours array
const workingHours = [
    {
        label: "9AM",
        key:  9
    },
     {
        label: "10AM",
        key: 10
    },
     {
        label:"11AM",
        key: 11
    },
    {
        label: "12AM",
        key: 12
    },
     {
        label: "1PM",
        key: 13
    }, 
    {
        label:"2PM",
        key: 14

    },
    {
        label: "3PM", 
        key:15
    },
    {
        label:"4PM",
        key:16
    }, 
    {
        label: "5PM",
        key:17
    }

     
]
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
const timeblocks = 

$(window).on("load", renderDate(), renderTimeBlocks());

// declare render data function
// render time blocks
// store in LS
