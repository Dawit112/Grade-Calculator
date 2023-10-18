// GRADE CALC BY DAWIT

// Button Click Listener
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
  //input
  let class1 = +document.getElementById("percent1-in").value;
  let class2 = +document.getElementById("percent2-in").value;
  let class3 = +document.getElementById("percent3-in").value;
  let class4 = +document.getElementById("percent4-in").value;
  let class5 = +document.getElementById("percent5-in").value;

  // PROCESS
  let average = (class1 + class2 + class3 + class4 + class5) / 5;
  document.getElementById("output").innerHTML = average;

  // output
}
