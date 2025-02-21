function testResults(event) {
  // process the form submission
  console.log("Form submitted");
  // document object represents the whole HTML document rendered in the browser
  var form = document.forms["myForm"];
  // get the value of the input field with name="email"
  var email = form["email"].value;
  var password = form["password"].value;
  var subscribe = form["subscribe"].value;
  var decision = form["decision"].value;

  console.log("Email: " + email);
  console.log("Password: " + password);
  console.log("Subscribe: " + subscribe);
  console.log("Decision: " + decision);

  // create a div element with id="result"
  var div = document.createElement("div");
  div.setAttribute("id", "result");

  console.log(div);

  // append the div element to the body of the document
  document.body.appendChild(div);

  // find newly created div element with id="result"
  // accessing DOM elements, getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll
  // var result = document.getElementById("result");
  // var result = document.querySelector("#result");
  var result = document.getElementsByTagName("div")[6];

  // Change html using innerHTML property
  result.innerHTML = `
    <h2>Form Data</h2>
    <p>Email: ${email}</p>
  `;

  // update css properties
  result.style.backgroundColor = "black";
  result.style.padding = "10px";
  result.style.color = "white";
  result.style.fontSize = "1.5rem";
  result.style.marginTop = "20px";
  result.style.borderRadius = "5px";
  result.style.fontFamily = "Arial";

  // set attributes on an element
  result.setAttribute("class", "container");

  // add more classes to the element
  result.classList.add("bg-primary", "text-white");

  // send the form data to the server using AJAX to replace need for action attribute

  // prevent the default form submission to current page/reload
  event.preventDefault();
}
