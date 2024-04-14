// YouTube new layout cure
const timerId = setInterval(() => {
  const testingElement = document.querySelector("#columns > #primary");
  if (testingElement === null) return;

  document.querySelector("#columns").style = "flex-direction: row-reverse"; 
  document.querySelector("#primary").style = "min-width: auto; width: 20vw;";
  document.querySelector("#secondary").style = "flex: 1 1 auto; width: 80vw;";
  // clearInterval(timerId);
}, 1000);