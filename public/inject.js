// YouTube new layout cure
const timerId = setInterval(() => {
  console.log("timerId");
  const testingElement = document.querySelector("#columns > #primary");
  if (testingElement === null) return;

  document.querySelector("#columns").style = "flex-direction: row-reverse"; 
  document.querySelector("#primary").style = "min-width: auto";
  document.querySelector("#secondary").style = "flex: 1 1 auto; width: 80%;";
  // clearInterval(timerId);
}, 1000);