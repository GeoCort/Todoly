import Project from "./project.js";
import Todo from "./todo.js"
import ProjectBook from "./projectbook.js"
let main = document.getElementById("project-content")
// main content elements
let mainTitle = document.getElementById("project-title")
let subTitle = document.getElementById("subtitle")
let listContainer = document.getElementById("listItems")
let sideBar = document.getElementById("sidebar");
let defaultProject= new Project("Untitled","The default project for the Todoly app")
let todo1 = new Todo("eat some food")
let todo2 = new Todo("Exercise at the Gym")
let todo3 = new Todo("Have a productive day at work")
let todo4 = new Todo("Talk to three people today")
defaultProject.add(todo1);
defaultProject.add(todo2);
defaultProject.add(todo3);
defaultProject.add(todo4);
let mainBook = new ProjectBook(defaultProject);
mainBook.renderSelectedBook(mainTitle,subTitle,listItems);
// mainBook.renderSideBar(sideBar);
mainBook.createNewProject("GYM")
mainBook.renderSideBar(sideBar);