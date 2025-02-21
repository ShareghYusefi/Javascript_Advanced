// What is JQuery?
// JQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler.

// The document need to be ready before we can manipulate it with jQuery code

$(document).ready(
  // Anonymous function: no name, no parameters and used only once in the code
  function () {
    console.log("Document is ready");

    // Use jQuery to access the document elements
    // JQuery syntax: $("selector").action()

    // select the form element with id="myForm" and listen for the submit event and trigger an anonymous function
    $("form[name='myForm']").on("submit", function (event) {
      console.log("Form submitted");

      // get our email using .val() function
      var email = $("#exampleInputEmail1").val();
      console.log(email);

      // add a div element with id="result" to the body of the document
      $("body").append('<div id="result"></div>');

      // update h2 element with new text
      $("#data-heading").text("Form Submited with JQuery");

      // update exampleCheck1 with value of purple pill
      // use attr to set checked attribute of a radio button
      $("#flexRadioDefault2").val("purple pill").attr("checked", true);
      $("label[for='flexRadioDefault2']").text("Purple Pill");

      // get the div element with id="result" and set the innerHTML
      // add class of container to result
      // add more classes to class list
      $("#result")
        .html(
          `
            <p>Email: ${email}</p>
          `
        )
        .addClass("container")
        .addClass("bg-primary")
        .addClass("text-white")
        .attr("data-test", "test");
      // prevent the default form submission to current page/reload
      event.preventDefault();
    });
  }
); // true, then run the function defined inside the ready method
