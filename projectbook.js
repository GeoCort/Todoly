import Project from "./project.js";
export default class ProjectBook{
    constructor(project){
        this.collection = [];
        this.collection.push(project);
        this.size = 1;
        this.selected = 0;
    }
   
    getSize(){
        return this.size;
    }
    getSelection(){
        return this.selected;
    }
    setSelection(s){
        this.selected = s;
    }
    renderSelectedBook(titleBar,subtitle, listContainer){
       titleBar.innerText = `${this.collection[this.selected].name}`
       subtitle.innerText = `${this.collection[this.selected].description}`
       this.collection[this.selected].collection.map((x)=>{
        let div = document.createElement("div")
        div.innerText = `${x.title}`
        listContainer.appendChild(div);
       })

    }

    renderSideBar(sideBar){
        this.collection.map((x)=>{
            let div = document.createElement("div");
            let p =  document.createElement("p");
            p.innerText = `${x.name}`
            div.appendChild(p)
            sideBar.appendChild(div);
        })
    }
    
    createNewProject(name){
        console.log(name)
        let proj = new Project(name);
        this.addProject(proj)   
        console.log(proj.name)
    } 
    addProject(project){
        this.collection.push(project)
        this.size++;
    }



}