import { Guid } from "guid-typescript";

class TodoItem {
    public readonly id: Guid;
    constructor(public title: string, public done: boolean = false) {
        this.id = Guid.create();
    }
}

export { TodoItem };
