studentArray=[];

//function submit

function submit() {

var displayStudent=[];

for(var i=1; i<=4; i++ ){

    var name=document.getElementById("name_of_the_student_" +i ).value;
  studentArray.push(name);
}


var lengthArray=studentArray.length;

for(var j=0; j<lengthArray; j++){

displayStudent.push("<h4> name-"+ studentArray[j]+ "</h4>" );

} 



document.getElementById("display_name_with_commas").innerHTML=displayStudent;

var removeComma=displayStudent.join(" ");

document.getElementById("display_name_without_commas").innerHTML=removeComma;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";



}



function sorting() {

studentArray.sort();
var displayStudentsort=[];

var lengthArray1=studentArray.length;

for (var index = 0; index < lengthArray1; index++) {
    
displayStudentsort.push("<h4> name-"+ studentArray[index]+ "</h4>")







    
}




var removeCommas1 =displayStudentsort.join(" ")

document.getElementById("display_name_without_commas").innerHTML=removeCommas1;




}