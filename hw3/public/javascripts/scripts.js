// Author: Jordan Ho
/*
	External Citation:
	Date: 9 September 2019
	Problem: Did not know how to get the dropdown menu to change on click  
	Resource: Students Dylan P and Patrick
	Solution: Changed the variables to the id's of the div's instead of using the class names
*/
// Changes the month when clicked in the dropdown menu 
$(document).ready(function(){
  $("#dropContent a").click(function(){
    $("#month").text($(this).text());
    $.post("/orders", function(json){
      $("#cherryID").text(json.data[0].toppings + " " + json.data[0].quantity)
      $("#plainID").text(json.data[1].toppings + " " + json.data[1].quantity)
      $("#chocolateID").text(json.data[2].toppings + " " + json.data[2].quantity)
    });
  	});
  });
/*
  External Citation:
	Date: 8 September 2019
	Problem: Did not know how to get values by id
	Resource: https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp
	Solution: Used the document.getElementById method
*/
function process_order() {
// Loads characters in textarea into a variable in order to search for the word "vegan"
  var str = document.getElementById("instruction_text_box").value ; 
  var n = str.search("vegan");
  if(n != -1){
  	// Alerts user that their order contains the word vegan
  	alert("Warning! Cheesecake contains dairy");
  }
  else{
    // Gets value from quantity dropdown
    var quant = document.getElementById("dropQuantity").value;
    // Gets selected radio button value 
    var toppingList = document.forms[0];
    var top = "none";
    for(index=0; index<toppingList.length; index++){
      if(toppingList[index].checked){
        top = toppingList[index].value;
      }
    }
    // Changes p1 to output order information 
    document.getElementById("p1").innerHTML = "Thank you! Your order has been placed! Quantity: " +quant+ ", Topping: " +top+ ", Instructions: " + str;     $("#cakePicture, #dropQuantity, #div1, #div2, #div3, #p2, #instruction_text_box, #orderButton").remove(); 

  }
}