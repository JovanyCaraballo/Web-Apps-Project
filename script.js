/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
 
import Grid from "./Grid.js";
import Card from "./Card.js";

const firstCard = new Card(
  "Christmas-Tree-3.jpg",
  "Christmas Trees",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit doloribus, sunt alias, libero voluptate sit ducimus ea natus voluptates voluptatem harum. Quia quo totam atque fugiat dicta blanditiis repudiandae!",
  "15%",
  "$200",
  "$170"
);

const secondCard = new Card(
  "Christmas-Bells.jpg",
  "Christmas Bells",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit doloribus, sunt alias, libero voluptate sit ducimus ea natus voluptates voluptatem harum. Quia quo totam atque fugiat dicta blanditiis repudiandae!",
  "20%",
  "$50",
  "$40"
);

const thirdCard = new Card(
  "Christmas-Toys.jpg",
  "Toys",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit doloribus, sunt alias, libero voluptate sit ducimus ea natus voluptates voluptatem harum. Quia quo totam atque fugiat dicta blanditiis repudiandae!",
  "30%",
  "$30",
  "$21"
);

const dealGrid = new Grid(
  3,
  3, // maybe 3 rows
  new Array(firstCard,secondCard,thirdCard), 
  document.getElementsByClassName("dealparent")
);

// const element = document.querySelector('.dealparent')
// const style = getComputedStyle(element)

const content = `
  <div class = dealparent>
    <div class = dealcard>
      <img src=${firstCard.imageSource}></img>
      <div class = container>
        <h3><b> ${firstCard.cardTitle}</b></h3>
        <p> ${firstCard.cardDescription}</p>
        <p class = sale> ${firstCard.cardDiscount}</p>
      </div>
    </div>
    <div class = dealcard>
    <img src=${secondCard.imageSource}>
      <div class = container>
        <h3><b> ${secondCard.cardTitle}</b></h3>
        <p> ${secondCard.cardDescription}</p>
        <p class = sale> ${secondCard.cardDiscount}</p>
      </div>
    </div>
    <div class = dealcard>
    <img src=${thirdCard.imageSource}>
      <div class = container>
        <h3><b> ${thirdCard.cardTitle}</b></h3>
        <p> ${thirdCard.cardDescription}</p>
        <p class = sale> ${thirdCard.cardDiscount}</p>
      </div>
    </div>
  </div>
`;  

document.getElementById("main").innerHTML = content;

// Event Listener not necessary
// var items = document.getElementsByClassName("dealcard");
// console.log(items);
// for (var i = 0; i < items.length; i++) { 
//   var item = items[i];
//   item.addEventListener("onmouseover", func(item));
//   item.addEventListener("onmouseout", func1(item));
// }  

// function func(item)
// {  
//    item.style.transform = "scale(1.25)"
// }

// function func1(item)
// {  
//   item.style.transform = "scale(1)"
// }


//set rows
function addRow(item) { 
  //var table2 = document.getElementById(table);
  var rowCount = table.rows.length; // getting table from deals page
  var row = table.insertRow(rowCount); 
  //Column 1  
  var cell1 = row.insertCell(0);
  cell1.innerHTML = item.cardTitle; 
  //Column 2  
  var cell2 = row.insertCell(1);  
  cell2.innerHTML = item.cardOriginal;  
  //Column 3  
  var cell3 = row.insertCell(2);
  cell3.innerHTML = item.cardDiscounted; 
}  

dealGrid.cards.forEach((item) => {
  // console.log(item);
  console.log(item.cardTitle);
  console.log(item.cardOriginal);
  console.log(item.cardDiscounted);
  addRow(item);
});


