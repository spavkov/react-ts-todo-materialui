import React from "react";
import { TodoItem } from "../model/TodoItem";
import { ITodoItemsContext } from "./ITodoItemsContext";
import { IStateAndDispatcher, IGenericContextProps } from "./GenericContext";
import { Guid } from "guid-typescript";

enum TodoItemsActionType {
    Add,
    Delete,
    ToggleDone
}

export class TodoItemsDispatchAction {
    constructor(public type: TodoItemsActionType, public payload: TodoItem | Guid | null) {
    }
}

const todoItemsContext : ITodoItemsContext = {
    Items: [
      new TodoItem("item1", true),
      new TodoItem("item2"),
    ],
    IsBusy: false,
  };

const todoItemsReducer :(state: ITodoItemsContext, action: TodoItemsDispatchAction) => ITodoItemsContext
= (state: ITodoItemsContext, action: TodoItemsDispatchAction): ITodoItemsContext => {
    switch (action.type) {
        case TodoItemsActionType.Add: {
            if (action.payload as TodoItem != null) {
                state.Items.push(action.payload as TodoItem);
            } else {
                throw new Error("null payload in TodoItemsDispatchAction -> add");
            }
            return {
                Items: state.Items,
                IsBusy: state.IsBusy};
        }
        case TodoItemsActionType.Delete: {
            if (action.payload as Guid != null) {
                const items: TodoItem[] = state.Items.filter(item => item.id !== action.payload as Guid);
                return {
                    Items: items,
                    IsBusy : state.IsBusy
                };
            } else {
                throw new Error("null payload in TodoItemsDispatchAction -> delete");
            }
        }

        case TodoItemsActionType.ToggleDone: {
            if (action.payload as Guid != null) {
                for (let item of state.Items) {
                    if (item.id === (action.payload as Guid)) {
                        item.done = !item.done;
                    }
                }
                return {
                    Items: state.Items,
                    IsBusy : state.IsBusy
                };
            } else {
                throw new Error("null payload in TodoItemsDispatchAction -> delete");
            }
        }
    }
  };

const TodoItemsContext : React.Context<IStateAndDispatcher<ITodoItemsContext, TodoItemsDispatchAction>>
= React.createContext<IStateAndDispatcher<ITodoItemsContext, TodoItemsDispatchAction>>(
    {State : {
        Items: [],
        IsBusy: false
    }, Dispatcher : null});

function TodoItemsContextProvider(props : IGenericContextProps): JSX.Element {
    const [state, dispatch] = React.useReducer(todoItemsReducer, todoItemsContext);
    return (<TodoItemsContext.Provider value={{State: state, Dispatcher: dispatch}}>
            {props.children}
    </TodoItemsContext.Provider>);
}

export { TodoItemsActionType, TodoItemsContextProvider, TodoItemsContext};
