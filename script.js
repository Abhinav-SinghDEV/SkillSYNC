const roadmaps = {

"web development":[
"Learn HTML",
"Learn CSS",
"Learn JavaScript",
"Learn Git & GitHub",
"Learn React",
"Learn Backend (Node.js)",
"Learn Databases",
"Build Full Stack Projects"
],

"web dev":[
"Learn HTML",
"Learn CSS",
"Learn JavaScript",
"Learn Git & GitHub",
"Learn React",
"Learn Backend (Node.js)",
"Learn Databases",
"Build Full Stack Projects"
],

"machine learning":[
"Learn Linear Algebra & Statistics",
"Learn Python",
"Learn NumPy & Pandas",
"Data Preprocessing",
"ML Algorithms",
"Model Evaluation",
"ML Projects",
"Deploy Models"
],

"ml":[
"Learn Linear Algebra & Statistics",
"Learn Python",
"Learn NumPy & Pandas",
"Data Preprocessing",
"ML Algorithms",
"Model Evaluation",
"ML Projects",
"Deploy Models"
],

"dsa":[
"Time Complexity",
"Arrays",
"Strings",
"Linked Lists",
"Stacks & Queues",
"Trees",
"Graphs",
"Dynamic Programming"
],

"deep learning":[
"Python Basics",
"Neural Networks",
"TensorFlow / PyTorch",
"CNN",
"RNN",
"DL Projects"
],

"cyber security":[
"Networking Basics",
"Linux",
"Python",
"Cryptography",
"Ethical Hacking",
"Penetration Testing"
]

};

function generateRoadmap(){

let skill = document.getElementById("skillInput").value.toLowerCase();

let output = document.getElementById("roadmap");

if(roadmaps[skill]){

let result = "<h3>Roadmap for " + skill.toUpperCase() + "</h3>";

result += "<ol>";

roadmaps[skill].forEach(step=>{
result += "<li>" + step + "</li>";
});

result += "</ol>";

output.innerHTML = result;

}

else{

output.innerHTML = "<p>⚠️ Roadmap not available for this skill.</p>";

}

}
