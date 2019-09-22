import { TodoItem } from "../model/TodoItem";
export interface ITodoItemsContext {
    Items: TodoItem[];
    IsBusy: boolean;
}
