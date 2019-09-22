import React, { useContext } from "react";
import { TodoItemsDispatchAction, TodoItemsContext } from "./context/TodoItemsContext";
import { ITodoItemsContext } from "./context/ITodoItemsContext";
import TodoItemView from "./TodoItemView";
import { IStateAndDispatcher } from "./context/GenericContext";
import List from "@material-ui/core/List";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const TodoListView: React.FunctionComponent = () => {

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
      }
    })
  );

    const context : IStateAndDispatcher<ITodoItemsContext, TodoItemsDispatchAction> | null = useContext(TodoItemsContext);
    const classes = useStyles();
    return (

            <List className={classes.root}>
            {
                context != null && context.State.Items != null && context.State.Items.length > 0 ?
                context.State.Items.map((item, index) => <TodoItemView key={index} Index={index} Item={item} ItemId={item.id} /> )
                : <div>You should add some TODO's here...</div>
            }
            </List>
        );
};

export default TodoListView;