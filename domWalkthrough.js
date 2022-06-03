//console.dir(document);

//console.log(document.URL);

// console.log(document.title);

// console.log(document.doctype);

// console.log(document.head);

// // console.log(document.body);

// // console.log(document.all[13]);


// //changed header by accessing the specific index for header as shown in the console, and used the text-content subfunction/property of docall to change the header
// document.all[10].textContent = "We Just Changed The Header";

//DOM can scan the tree for elements

// console.log(document.forms);

// console.log(document.links);

// console.log(document.images);


//Access the DOM with GETELEMENTSBYID

// console.log(document.getElementById('header-title'));

// // Creation of an object variable by using the document function

// let headerTitle = document.getElementById('header-title');

// //Using object variable to change that specific element ID, textContent is the same as innerText

// headerTitle.textContent = "I'm changing the header"

// headerTitle.innerText = "I Am Changing It Again"

// headerTitle.style.color = "hotpink";

///////GetElementByClassName use variable object to declare list items, also utilizing arrays to locate more specific items w/in the class////////

var items = document.getElementsByClassName("list-group-item");

console.log (items);
console.log (items[1]);

//Used object variable for class and array , textContent to change the label of item list #2
//Styling Property Attributes through the variable

items[0].textContent = "Strawberries";
items[0].style.backgroundColor = "pink";
items[0].style.fontWeight = "bold";
items[0].style.color = "red" ;


items[1].textContent = "Cherries";
items[1].style.backgroundColor = "crimson";
items[1].style.fontWeight = "bold";
items[1].style.color = "green" ;

items[2].textContent = "Oranges";
items[2].style.backgroundColor = "orange";
items[2].style.fontWeight = "bold";
items[2].style.color = "white" ;

items[3].textContent = "Bananas";
items[3].style.backgroundColor = "cyan";
items[3].style.fontWeight = "bold";
items[3].style.color = "yellow" ;

// This is a counter which loops all the way until 10.
// for (let i = 1; i <= 10; i++) {
//     console.log(i);

// }

// for (let i = 0; i <=20; i +=2) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -=2) {

//     console.log(i);

// }

// for (var i = 0; i < items.length; i++) {

//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = 'I Changed The List';
//     items[i].style.color = 'green';

// }

// 
// const myDiamonds = ['Snacky','Scary','Piggy','Pinchie','Lily','IttyBitty','Nibbles','Lanky','Kibbles'];

// for(let i = 0; i < myDiamonds.length; i++){

//     console.log(i, myDiamonds[i]);

// }

//////////////////////////////////////////////////////////////////////////////
///////////////GetElementByTagName

// var li = document.getElementsByTagName('li');

// console.log(li);
// console.log(li[1]);

// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'crimson';
// li[1].style.color = 'white';

// // 
// for(var i = 0; i < li.length; i++){

//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = 'Changed Text'; 

// }

//////////////////////////////////////////////////////////////////////////////
///////////// - Query Selector

// 
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px hotpink';
// 
var input = document.querySelector('input');
input.value = "Changed The Input Box Text";
// 
var submit = document.querySelector("input[type='submit']");
submit.value = "SEND"; 
// 
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
// 
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'coral';




