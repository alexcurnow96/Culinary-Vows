document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".custom-carousel .item");
    
    items.forEach(item => {
      item.addEventListener("click", function () {
        items.forEach(i => i. classList.remove("active"));
        this.classList.toggle("active");
      });
    });
  });

 
// Your array
const myArray = [];
//add email
function storevalues(){
myArray[0]=document.getElementById('nameInput').value;
myArray[1]=document.getElementById("Starters").value;
myArray[2]=document.getElementById("Mains").value;
myArray[3]=document.getElementById("Sweet").value;
console.log(myArray);
let Choices = JSON.stringify(myArray);
sessionStorage.setItem('myArray', Choices);
};


const arrayContentsDiv = document.getElementById("arrayContents");
    let retrievedString = sessionStorage.getItem('myArray');
    let retrievedArray = JSON.parse(retrievedString);
    //arrayContentsDiv.innerHTML = retrievedArray;

    console.log(retrievedArray); // Output: [1, 2, 3, 4, 5]

    

    // Create a string to hold the HTML
    let htmlString = "<ul>";

    // Loop through the array and add each item as a list item
    retrievedArray.forEach(item => {
        htmlString += `<li>${item}</li>`;
     });

    // Close the unordered list tag
    htmlString += "</ul>";

    // Set the innerHTML of the div to the HTML string
    arrayContentsDiv.innerHTML = htmlString;