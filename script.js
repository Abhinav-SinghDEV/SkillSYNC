let skills = [];

function addSkill(){

let skillInput = document.getElementById("skillInput");

let skill = skillInput.value;

if(skill === ""){
alert("Enter a skill");
return;
}

skills.push(skill);

displaySkills();

skillInput.value = "";

}

function displaySkills(){

let list = document.getElementById("skillList");

list.innerHTML = "";

skills.forEach((skill,index)=>{

let li = document.createElement("li");

li.innerHTML = skill +
" <button onclick='removeSkill("+index+")'>Remove</button>";

list.appendChild(li);

});

}

function removeSkill(index){

skills.splice(index,1);

displaySkills();

}