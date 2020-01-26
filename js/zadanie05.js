let container = document.querySelector("#container");
 
for (let i = 0; i < document.getElementsByTagName("button").length; i++) 
{
    document.getElementsByTagName("button")[i].addEventListener("click", function() {
        
        
        container.innerText = this.dataset.text;
    });
}