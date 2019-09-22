import React, { useContext } from "react";
import { TodoItemsDispatchAction, TodoItemsContext } from "./context/TodoItemsContext";
import { ITodoItemsContext } from "./context/ITodoItemsContext";
import TodoItemView from "./TodoItemView";
import { IStateAndDispatcher } from "./context/GenericContext";

const TodoListView: React.FunctionComponent = () => {

    const context : IStateAndDispatcher<ITodoItemsContext, TodoItemsDispatchAction> | null = useContext(TodoItemsContext);

    return (
        <div>
            {
            context != null && context.State.Items != null && context.State.Items.length > 0 ?
            context.State.Items.map((item, index) => <TodoItemView key={index} Index={index} Item={item} ItemId={item.id} /> ) : <div>"no items"</div>
            }
        </div>
        );
};

export default TodoListView;