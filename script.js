import Project from "./project.js";
import Todo from "./todo.js"
let main = document.getElementById("#project-content")
let defaultProject= new Project("Default")
let todo1 = new Todo("eat some food")
let todo2 = new Todo("Exercise at the Gym")
let todo3 = new Todo("Have a productive day at work")
let todo4 = new Todo("Talk to three people today")
defaultProject.add(todo1);
defaultProject.add(todo2);
defaultProject.add(todo3);
defaultProject.add(todo4);
console.log(defaultProject)
defaultProject.map((x)=>{
    let p = document.createElement("p")
})