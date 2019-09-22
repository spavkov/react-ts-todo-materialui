import * as React from "react";
import TodoListView from "../components/TodoListView";
import AddTodoItem from "../components/AddTodoItemView";

const TodosPage: React.FunctionComponent = () => {

    return (
        <div>
            <TodoListView />
            <AddTodoItem />
        </div>
    );
};

export default TodosPage;
