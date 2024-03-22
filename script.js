let name1 = document.getElementById("Name");
let price = document.getElementById("Price");
let company = document.getElementById("Company");
let addProduct = document.getElementById("Add-Product");
let tbody = document.getElementById("tbody");
let form1 = document.getElementById("form1");
let Search1 = document.getElementById("Search1");
let Search2 = document.getElementById("Search2");

//make product
function makeProduct(value) {
    let tr = document.createElement("tr");

    tr.innerHTML = `<tr>

    <td>${value[0]}</td>
    <td>${value[1]}</td>
    <td>${value[2]}</td>
    <td class="hidden sm:table-cell"></td>
    <td class="sm:table-cell cursor-pointer" onclick="removeListItem(this)">remove</td>

    </tr>`;

    tbody.appendChild(tr);
}

//add product to the list
addProduct.addEventListener("click", (event) => {
    event.preventDefault();

    //add items in list
    if (name1.value && price.value && company.value) {
        makeProduct([name1.value, price.value, company.value, addProduct.value]);
    } else {
        name1.focus();
        alert("You should fillup all")
    }

    //clear input fild
    name1.value = "";
    price.value = "";
    company.value = "";
});

//remove list item
function removeListItem(element) {

    let tr = element.parentElement;

    tbody.removeChild(tr);

}

//srarch list items for search 1
Search1.addEventListener("change", (event) => {

    for (let index = 0; index < tbody.children.length; index++) {

        if (Search1.value.toUpperCase() === tbody.children[index].cells[0].outerText.toUpperCase() || Search1.value.toUpperCase() === tbody.children[index].cells[1].outerText.toUpperCase() || Search1.value.toUpperCase() === tbody.children[index].cells[2].outerText.toUpperCase()) {

            tbody.children[index].style.backgroundColor = "rgba(0,0,0,0.4)";

        } else {

            tbody.children[index].style.backgroundColor = "rgba(0,0,0,0)";

        }


    }

});
//srarch list items for search 2
Search2.addEventListener("change", (event) => {

    for (let index = 0; index < tbody.children.length; index++) {

        if (Search2.value.toUpperCase() === tbody.children[index].cells[0].outerText.toUpperCase() || Search2.value.toUpperCase() === tbody.children[index].cells[1].outerText.toUpperCase() || Search2.value.toUpperCase() === tbody.children[index].cells[2].outerText.toUpperCase()) {

            tbody.children[index].style.backgroundColor = "rgba(0,0,0,0.4)";

        } else {

            tbody.children[index].style.backgroundColor = "rgba(0,0,0,0)";

        }


    }

});