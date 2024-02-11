export default class Todo{
    // Create a todo list article that has a title description, duedate and priority.
    constructor(title="",description="",dueDate="",priority=""){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.check = false; // assume the todo has not been completed
        this.index =-1; // not in a collection
    }

    
}