// YouTube new layout cure
const timerId = setInterval(() => {
  var columnOriginalStyle = "";
  var primaryOriginalStyle = "";
  var secondaryOriginalStyle = "";
  const columnsElement = document.querySelector("#columns");
  const primaryElement = document.querySelector("#columns > #primary");
  const secondaryElement = document.querySelector("#columns > #secondary");
  if (columnsElement === null || primaryElement === null || secondaryElement === null) return;

  const url = window.location.href;
  if (url.includes("watch")) {
    console.log("Injecting CSS");
    document.querySelector("#columns").style = "flex-direction: row-reverse"; 
    document.querySelector("#columns > #primary").style = "min-width: auto; width: 20vw;";
    document.querySelector("#columns > #secondary").style = "flex: 1 1 auto; width: 80vw;";
    // clearInterval(timerId);
  }else{
    console.log("Change the style back to original");
    if (columnOriginalStyle === "" || primaryOriginalStyle === "" || secondaryOriginalStyle === "") return;
    document.querySelector("#columns").style = columnOriginalStyle;
    document.querySelector("#primary").style = primaryOriginalStyle;
    document.querySelector("#secondary").style = secondaryOriginalStyle;
  }

  const columnStyle = columnsElement.getAttribute("style");
  const primaryStyle = primaryElement.getAttribute("style");
  const secondaryStyle = secondaryElement.getAttribute("style");
  if (columnStyle === "flex-direction: row-reverse;" && primaryStyle === "min-width: auto; width: 20vw;" && secondaryStyle === "flex: 1 1 auto; width: 80vw;") {
    console.log("Already injected CSS");
    return;
  }else{
    // keep the original style, for home page
    columnOriginalStyle = columnStyle;
    primaryOriginalStyle = primaryStyle;
    secondaryOriginalStyle = secondaryStyle;
  }
}, 1000);