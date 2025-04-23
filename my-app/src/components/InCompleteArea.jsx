import { deleteFromArray } from "../helpers/DeleteFromArray";
import { addToArray } from "../helpers/AddToArray";

export const InCompleteArea = ({ todos, setIncompleteTodos, setCompleteTodos }) => {

    const handleCompleteButton = (index) => {
        addToArray(setCompleteTodos, todos[index]);
        deleteFromArray(setIncompleteTodos, index);
    };

    const handleDeleteButton = (index) => {
        deleteFromArray(setIncompleteTodos, index);
    };

    return(
        <>
            <div className="incomplete-area">
                <p className="title">未完了のTODO</p>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button onClick={() => handleCompleteButton(index)}>完了</button>
                                <button onClick={() => handleDeleteButton(index)}>削除</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}