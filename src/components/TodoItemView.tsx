import * as React from "react";
import { TodoItem } from "./model/TodoItem";
import { Guid } from "guid-typescript";
import { TodoItemsContext, TodoItemsDispatchAction, TodoItemsActionType } from "./context/TodoItemsContext";
import { ITodoItemsContext } from "./context/ITodoItemsContext";
import { IStateAndDispatcher } from "./context/GenericContext";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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

    const styles = {
        root: {
          color: "green",
          background: "magenta",
          textDecoration: "line-through"
        }
      };

    const useStyles = makeStyles((theme: Theme) =>
      createStyles({
        textDone: {
          textDecoration: "line-through",
        },
        textNotDone: {
        }
      }),
      );

    const classes = useStyles();

    const labelId = `checkbox-list-label-${Item.id}`;
    return (

        <ListItem
        key={Item.id.toString()}
        role={undefined}
        dense
        button
        >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={Item.done}
            tabIndex={-1}
            disableRipple
            onClick={() => onDoneChange(Item.id)}
          />
        </ListItemIcon>
        <ListItemText id={labelId} className={Item.done ? classes.textDone : classes.textNotDone } primary={Item.title} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="comments" onClick={() => deleteItem(Item.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
};

export default TodoItemView;