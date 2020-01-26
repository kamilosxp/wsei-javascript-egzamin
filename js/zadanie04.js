// 1 
function getTagsOfElements(elements) {
    let array = [];
 
    for (i = 0; i < elements.length; i++) {
        array.push(elements[i].tagName);
    }
 
    return array;
}
 
console.log(getTagsOfElements(document.querySelectorAll(".sample_class")));
 
// 2
function getClassesOfElement(element) {
    let array = [];
 
    array.push(element.className);
 
    return array;
}
 
console.log(getClassesOfElement(document.querySelector("#sample_id")));

// 3
function getInnerTextsOfElements(elements) {
	let array = [];
 
	for (let i = 0; i < elements.length; i++) {
	    array.push(elements[i].innerText);
	}
 
	return array;
}
 
console.log(getInnerTextsOfElements(document.querySelector('.sample_class_2').getElementsByTagName("li")));
 
// 4
function getAddressesOfElements(elements) {
	let array = [];
 
	for (let i = 0; i < elements.length; i++) {
	    arr.push(elements[i].getAttribute("href"));
	}
 
	return array;
}
 
console.log(getAddressesOfElements(document.getElementsByTagName('a')));
 
// 5
function findTags(elements) {
    let array = [];
 
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].tagName);
    }
 
    return array;
}
console.log(findTags(document.querySelector(".sample_class_3").children));