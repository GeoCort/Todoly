export default class ProjectBook{
    constructor(project){
        this.collection = [];
        this.collection.push(project);
        this.size = 1;
        this.selected = 0;
    }
    addProject(project){
        this.collection.push([project])
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
    renderSelectedBook(titleBar){
       titleBar.innerText = `${this.collection[this.selected].name}`
        // this.collection[this.selected].map((x)=>{
        //     let div = document.createElement("div");
        //     let p =  document.createElement("p");
        //     p.innerText = `${x.name}`
        //     div.appendChild(p)
        //     titleBar.appendChild(div);
        // })

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
}