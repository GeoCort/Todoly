export default class Project{
    constructor(name){
        this.name= name;
        this.collection = [];
    }
    add(todo){
        this.collection.push(todo);
    }
}