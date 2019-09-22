import * as React from "react";
import { TodoItem } from "./model/TodoItem";
import { Guid } from "guid-typescript";
import { TodoItemsContext, TodoItemsDispatchAction, TodoItemsActionType } from "./context/TodoItemsContext";
import { ITodoItemsContext } from "./context/ITodoItemsContext";
import { IStateAndDispatcher } from "./context/GenericContext";

interface ITodoItemViewProps {
    Item: TodoItem;
    Index: number;
    ItemId: Guid;
}

const TodoItemView: React.FunctionComponent<ITodoItemViewProps> = ({Item, Index, ItemId}) => {

    const context : IStateAndDispatcher<ITodoItemsContext, TodoItemsDispatchAction> | null = React.useContext(TodoItemsContext);

    const onDoneChange = (id: Guid) => {

        console.log("toggle done status of item with index : " + id);
        if (context.Dispatcher) {
            context.Dispatcher(new TodoItemsDispatchAction(TodoItemsActionType.ToggleDone, id));
        }
    };
    const deleteItem = (id: Guid) => {
        console.log("toggle done status of item with index : " + id);
        if (context.Dispatcher) {
            context.Dispatcher(new TodoItemsDispatchAction(TodoItemsActionType.Delete, id));
        }
    };

    return (
        <div>
        <input type="checkbox" defaultChecked={Item.done} onChange={() => onDoneChange(Item.id)}  />
        {Item.title}
        <button className="delete-todo js-delete-todo" onClick={() => deleteItem(Item.id)} >x</button>
        </div>
    );
};

export default TodoItemView;