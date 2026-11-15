
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("Thank you, " + name + "! Your demo form is working.");

  form.reset();
});
