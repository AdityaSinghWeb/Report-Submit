document.querySelector("form").addEventListener("submit", result);
function result(event) {
  event.preventDefault();
  let image = document.querySelector("#image").value;
  let name = document.querySelector("#name").value;
  let batch = document.querySelector("#batch").value;
  let dsa = document.querySelector("#dsa").value;
  let skill = document.querySelector("#skill").value;
  let coding = document.querySelector("#coding").value;

  let tr = document.createElement("tr");
  document.querySelector("tbody").append(tr);

  let td1 = document.createElement("td");
  let avt = document.createElement("img");
  avt.setAttribute("src", image);
  td1.append(avt);

  let td2 = document.createElement("td");
  td2.innerText = name;

  let td3 = document.createElement("td");
  td3.innerText = batch;

  let td4 = document.createElement("td");
  td4.innerText = dsa;

  let td5 = document.createElement("td");
  td5.innerText = skill;

  let td6 = document.createElement("td");
  td6.innerText = coding;

  let td7 = document.createElement("td");
  let obtainMarks = Number(dsa) + Number(skill) + Number(coding);
  let percentage = (obtainMarks / 30) * 100;
  td7.innerText = percentage.toFixed(2);

  let td8 = document.createElement("td");
  if (percentage > 46) {
    td8.innerText = "Pass";
    td8.style.backgroundColor = "green";
  } else {
    td8.innerText = "Fail";
    td8.style.backgroundColor = "red";
  }

  let td9 = document.createElement("td");
  td9.addEventListener("click", del);
  function del(event) {
    event.target.parentNode.remove();
  }
  td9.innerText = "DELETE";
  td9.style.backgroundColor = "red";
  td9.style.cursor = "pointer";

  tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
}