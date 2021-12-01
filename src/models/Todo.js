import { v4 as uuidv4} from 'uuid'

export class Todo {
    constructor(label, todoTime) {
        this.id = uuidv4();
        this.label = label;
        this.complete = false;
        this.editMode = false;
        this.workingTime = 0
        this.working = false;
        this.todoTimePredictedTime = todoTime
    }
}