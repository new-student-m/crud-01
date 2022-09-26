// CRUD
//  level 1 js - php - angular - react ...

// c >> create (take data in system)

// r >> retive (dispaly show data)

// u >> update

// d >> delete

// s >> search

//global varibale

var nameInput = document.getElementById("ProductName");
var categoryInput = document.getElementById("ProductCategory");
var priceInput = document.getElementById("ProductPrice");
var descriptionInput = document.getElementById("ProductDescription");
var tbody = document.getElementById("tbody");
var updateBtn = document.getElementById("updateBtn");
var createBtn = document.getElementById("createBtn");

var productsList = []; // datatabase
// create function
function createProduct() {
  var product = {
    pName: nameInput.value,
    pCategory: categoryInput.value,
    pPrice: priceInput.value,
    pDescription: descriptionInput.value,
  };

  productsList.push(product);
  console.log(productsList);
  console.log(product);
  showData();
}

//global counter and tRows 
var counter = 0;
var tRows = "";
//Showing Data function
function showData() {
  for (; counter < productsList.length; ) {
    tRows += `<tr>
        <td>${counter}</td>
        <td>${productsList[counter].pName}</td>
        <td>${productsList[counter].pCategory}</td>
        <td>${productsList[counter].pPrice}</td>
        <td>${productsList[counter].pDescription}</td>
        <td>
            <a class="btn btn-outline-warning" onclick="update(${counter})">
                <i class="fa-solid fa-pen"></i>
            </a>
        </td>
        <td>
            <button class="btn btn-outline-danger" onclick="del(${counter})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </td>
    </tr>`;

    counter++;
  }
  tbody.innerHTML = tRows;
}

//delete function

function del(index) {
  productsList.splice(index, 1);
//clear tRows
  tRows = "";

  for (var i = 0; i < productsList.length; i++) {
    tRows += `<tr>
        <td>${i}</td>
        <td>${productsList[i].pName}</td>
        <td>${productsList[i].pCategory}</td>
        <td>${productsList[i].pPrice}</td>
        <td>${productsList[i].pDescription}</td>
        <td>
            <a class="btn btn-outline-warning" onclick="update(${i})" >
                <i class="fa-solid fa-pen"></i>
            </a>
        </td>
        <td>
            <button class="btn btn-outline-danger" onclick="del(${i})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </td>
    </tr>`;
  }
  tbody.innerHTML = tRows;
  counter--;
}
//variable that save current index that we want to update
var updateIndex = 0;
// update function
function update(index) {
  nameInput.value = productsList[index].pName;
  categoryInput.value = productsList[index].pCategory;
  priceInput.value = productsList[index].pPrice;
  descriptionInput.value = productsList[index].pDescription;
  updateBtn.style.display = "inline-block";
  createBtn.style.display = "none";
  updateIndex = index;
  console.log("hello");
}
//update button function 
function updateBtnFun(index) {
  productsList[index].pName = nameInput.value;
  productsList[index].pCategory = categoryInput.value;
  productsList[index].pPrice = priceInput.value;
  productsList[index].pDescription = descriptionInput.value;
//clear tRows
  tRows = "";

  for (var i = 0; i < productsList.length; i++) {
    tRows += `<tr>
            <td>${i}</td>
            <td>${productsList[i].pName}</td>
            <td>${productsList[i].pCategory}</td>
            <td>${productsList[i].pPrice}</td>
            <td>${productsList[i].pDescription}</td>
            <td>
                <a class="btn btn-outline-warning" onclick="update(${i})" >
                    <i class="fa-solid fa-pen"></i>
                </a>
            </td>
            <td>
                <button class="btn btn-outline-danger" onclick="del(${i})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>`;
  }

  tbody.innerHTML = tRows;
  clr();
  updateBtn.style.display = "none";
  createBtn.style.display = "inline-block";
}

updateBtn.addEventListener("click", function () {
  updateBtnFun(updateIndex);
});

function clr() {
  nameInput.value = "";
  categoryInput.value = "";
  priceInput.value = "";
  descriptionInput.value = "";
}
