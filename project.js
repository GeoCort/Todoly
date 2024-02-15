export default class Project{
    constructor(name,description=""){
        this.name= name;
        this.description= description
        this.collection = [];
        this.position = 0; // currently selected index | default notebook
    }
    add(todo){
        this.collection.push(todo);
    }
    renderProject(sidebar){
        //Populate sidebar with all your notes
        this.collection.map((x)=>{
            let div = document.createElement("div");
            let p =  document.createElement("p");
            p.innerText = `${x.title}`
            div.appendChild(p)
            sidebar.appendChild(div);
        })

    }
}