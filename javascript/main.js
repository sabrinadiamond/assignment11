$(document).ready(function(){

// function newItem() {
// 	var li = document.createElement("li");
// 	var text = document.getElementsById("newTask").value;
// 	var x = document.createTextNode(newValue);
// 	li.appendChild(x);
// 	if(newValue === ""){
// 		alert("Write here");
// 	}else{
// 		document.getElementsById("doList").appendChild(li);
// 	}
// 	document.getElementsById("newTask").value = "";

// }
var x;

function writeFunction(){
	x = $("#newTask").val();
		$("#addInput").html(" "+x);
}

$("button").click(function(){
	x = $("#newTask").val();
		// $("#addInput").html(" "+x);
	var y = $("<li>");
		y.html(" "+x);
	$("ul").append(y);
});



});