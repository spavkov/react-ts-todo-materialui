import React, {useState, useContext} from "react";
import { TodoItemsContext, TodoItemsDispatchAction, TodoItemsActionType} from "./context/TodoItemsContext";
import { TodoItem } from "./model/TodoItem";
import { ITodoItemsContext } from "./context/ITodoItemsContext";
import { IStateAndDispatcher } from "./context/GenericContext";

const AddTodoItem : React.FunctionComponent = () => {

    const [title, setTitle] = useState("");
    const context : IStateAndDispatcher<ITodoItemsContext, TodoItemsDispatchAction> = useContext(TodoItemsContext);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (context.Dispatcher) {
            context.Dispatcher(new TodoItemsDispatchAction(TodoItemsActionType.Add, new TodoItem(title, false)));
        }
        setTitle("");
    };

    const handleChange = (event: any) => {
        setTitle(event.target.value);
    };

    return (
        <form className="js-form" onSubmit={handleSubmit}>
            <input type="text" aria-label="Enter a new todo item"
            placeholder="E.g. Buy milk on a way home" className="js-todo-input" value={title} onChange={handleChange} />
        </form>
    );
};

export default AddTodoItem;

