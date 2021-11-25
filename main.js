var nameofstudents=[]
function submit(){
var displayname=[]
for(var K=1;K<=4;K++){
var studentname=document.getElementById("name_of_the_student_"+K)
nameofstudents.push(studentname)
}
var length=nameofstudents.length
for(var C=0;C<length;C++){
displayname.push("<h4>NAME- "+nameofstudents[C]+"</h4>")
}
document.getElementById("display_name_with_commas").innerHTML=displayname
var remove_commas=displayname.join(" ")
document.getElementById("display_name_without_commas").innerHTML=remove_commas
}
