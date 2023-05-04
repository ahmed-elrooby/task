let container = document.createElement("div");
container.className="container";

let header = document.createElement("div");
header.className="header";

let logo = document.createElement("h4");
logo.className="logo";
let contLog = document.createTextNode("Elzero");
logo.appendChild(contLog);
header.appendChild(logo);

let nav = document.createElement("ul");
nav.className="nav";
let li1 = document.createElement("li");
let a1 = document.createElement("a");
let aCont1 = document.createTextNode("home")
nav.appendChild(li1);
li1.appendChild(a1);
a1.appendChild(aCont1);
nav.appendChild(li1);

let li2 = document.createElement("li");
let a2 = document.createElement("a");
let aCont2 = document.createTextNode("about")
nav.appendChild(li2);
li2.appendChild(a2);
a2.appendChild(aCont2);
nav.appendChild(li2);

let li3 = document.createElement("li");
let a3 = document.createElement("a");
let aCont3 = document.createTextNode("services")
nav.appendChild(li3);
li3.appendChild(a3);
a3.appendChild(aCont3);
nav.appendChild(li3);

let li4 = document.createElement("li");
let a4 = document.createElement("a");
let aCont4 = document.createTextNode("contact")
nav.appendChild(li4);
li4.appendChild(a4);
a4.appendChild(aCont4);
nav.appendChild(li4);

header.appendChild(nav);
container.appendChild(header);
// css
header.style.cssText="display:flex; justify-content:space-between; align-items: center;padding:0px 15px";
logo.style.cssText="color:green; text-align:center; font-weight:bold";
nav.style.cssText="display:flex; justify-content:center; gap:10px; list-style:none; text-transform:capitalize";
// end header 

// start content 
let content= document.createElement("div");
content.className="content";

for(let i =0; i<=14;i++){
let contDiv = document.createElement("div");
contDiv.className="contDiv";
let h3 = document.createElement("h3");
let h3Cont= document.createTextNode(`${i + 1}`);
let span = document.createElement("span");
let spanCon= document.createTextNode("product");
h3.appendChild(h3Cont);
span.appendChild(spanCon);
contDiv.appendChild(h3);
contDiv.appendChild(span);
content.appendChild(contDiv);
// css 
contDiv.style.cssText="background-color:white;;text-align: center;padding:10px";
h3.style.cssText="font-weight:bold;font-size:25px";
span.style.cssText="color:#00000085"

}
// css 
content.style.cssText="background-color:#ddd; padding:10px 10px 0px 10px;display: grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-gap:15px";
container.appendChild(content);

// start copy right 
let copy = document.createElement("div");
copy.className="copy";
let copyCon= document.createTextNode("copyright 2023");
copy.appendChild(copyCon);
container.appendChild(copy);
// css 
copy.style.cssText="height: 80px; display:flex; align-items:center;justify-content:center; background-color:green; color:white; font-weight:bold; font-size:25px;text-transform:capitalize"
document.body.appendChild(container);
document.body.style.cssText="margin:0px";