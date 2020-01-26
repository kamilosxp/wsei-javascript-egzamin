let list = document.querySelector("#shopping-list");
 
document.querySelector("#button-1").addEventListener("click", function() {
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode("Chlyb"));
 
    list.appendChild(listItem);
});
 
document.querySelector("#button-2").addEventListener("click", function() {
    list.lastChild.remove();
});
 
document.querySelector("#button-3").addEventListener("click", function() {
    let listItem = document.getElementsByTagName("li")[1].cloneNode(true);
    list.appendChild(listItem);
});