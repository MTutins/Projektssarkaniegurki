 function nolasit(){
  let rezultDiv = document.getElementById("rezultats");
  rezultDiv.textContent = "";
  let ievade = document.getElementById("nalasisana").value;
  for (i = 1; i<=ievade; i++) {
    rezultDiv.textContent +=i + " " ;
    }
}

function reizinat(){
let rezultDiv = document.getElementById("rezultats2");
rezultDiv.textContent = "";
let cipars = document.getElementById("skaitlis").value;
let risinajums = cipars * 2
rezultDiv.textContent = "Rezultāts: " + risinajums;
}

function reizini(){
let rezultDiv = document.getElementById("rezultats3");
rezultDiv.textContent = "";
let skaitlis = document.getElementById("reizini").value;
let tabula = ""
  for (let i = 1; i<= 10; i++) {
    tabula += skaitlis + " x " + i + " = " + (skaitlis * i) + "<br>";
  }
  rezultDiv.innerHTML = tabula;
}

  

