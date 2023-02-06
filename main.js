var main=document.querySelector("#main")
var inputcontainer=document.querySelector(".inputcontainer")
var inputfood=document.getElementById("inputfood")
var foodcontainer=document.getElementById("foodcontainer")
var inputbtn=document.getElementById("inputbtn")
    inputbtn=function() {
         var newFoodItemEl=document.createElement("li")
			   newFoodItemEl.className="fooditem"
			     div=document.createElement("div")
			      divBtn=document.createElement("div")
				  // divBtn.parentElement.setAttribute("onclick","remove(event)")
				  divBtn.innerHTML=`<i onClick="remove(event)" class="fa fa-xmark"></i>`				 
				 div.textContent=inputfood.value
				  foodcontainer.appendChild(newFoodItemEl)
				  newFoodItemEl.appendChild(div)
				   newFoodItemEl.appendChild(divBtn)	
                  inputfood.value=""
};

function remove(event) {
  const existingList = event.target.parentNode.parentNode;
  existingList.remove()
}
	      inputfood.addEventListener("keyup", sha)
		    function sha(event){
				if(event.key==="Enter"){
			   inputbtn()
				}
				}