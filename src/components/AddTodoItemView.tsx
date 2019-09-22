import React, {useState, useContext} from "react";
import { TodoItemsContext, TodoItemsDispatchAction, TodoItemsActionType} from "./context/TodoItemsContext";
import { TodoItem } from "./model/TodoItem";
import { ITodoItemsContext } from "./context/ITodoItemsContext";
import { IStateAndDispatcher } from "./context/GenericContext";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const AddTodoItem : React.FunctionComponent = () => {

    const [title, setTitle] = useState("");
    const context : IStateAndDispatcher<ITodoItemsContext, TodoItemsDispatchAction> = useContext(TodoItemsContext);

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: "flex",
        flexWrap: "wrap",
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 200,
      },
    }),
    );

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (context.Dispatcher) {
            context.Dispatcher(new TodoItemsDispatchAction(TodoItemsActionType.Add, new TodoItem(title, false)));
        }
        setTitle("");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
      };

    const classes = useStyles();
    return (
        <form className="js-form" onSubmit={handleSubmit}>
        <TextField
            id="standard-with-placeholder"
            label="Create new TODO"
            placeholder="Enter a new todo item"
            onChange={handleChange}
            className={classes.textField}
            margin="normal"
            value={title}
        />
        </form>
    );
};

export default AddTodoItem;
