// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


// Define the classes array
var classes = [];

// Get the button and class form elements
var createButton = document.getElementById("create-button");
var classForm = document.getElementById("class-form");
var closeButton = document.querySelector('.close-button');

// Open the class form when the button is clicked
createButton.addEventListener("click", function() {
  classForm.style.display = "block";
});
closeButton.addEventListener('click', function(){
  classForm.style.display = 'none';

})

// Add a new class to the classes array when the form is submitted
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  

  var title = document.querySelector("input[name='instructor']").value;
  var description = document.querySelector("input[name='classTime']").value;
  var link = document.querySelector("input[name='classDate']").value;

  var newClass = {
    title: title,
    description: description,
    link: link
  };

  classes.push(newClass);

  // Reset the form and close the pop-up
  document.querySelector("form").reset();
  classForm.style.display = "none";
});


function editClass() {
  // Code to edit the class
}

function deleteClass() {
  const classItem = this.parentNode;
  classItem.remove();
}

const editButtons = document.querySelectorAll('.edit-button');
editButtons.forEach(button => {
  button.addEventListener('click', editClass);
});

const deleteButtons = document.querySelectorAll('.delete-button');
deleteButtons.forEach(button => {
  button.addEventListener('click', deleteClass);
});



const toggleSwitch = document.querySelector('#dark-mode-toggle');
const topBar = document.querySelector('.topbar');

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitch.classList.add('dark-mode');
    topBar.classList.add('dark-mode');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleSwitch.classList.remove('dark-mode');
    topBar.classList.remove('dark-mode');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


 
 
 

 
 
 
 
  

  
