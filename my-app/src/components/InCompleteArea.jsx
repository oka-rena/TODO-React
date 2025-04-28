import { arrayHelper } from "../helpers/processToArray";

export const IncompleteArea = ({ todos, setIncompleteTodos, setCompleteTodos }) => {
    const { addToArray, deleteFromArray } = arrayHelper();

    const handleCompleteTodo = (index) => {
        addToArray(setCompleteTodos, todos[index]);
        deleteFromArray(setIncompleteTodos, index);
    };

    const handleDeleteTodo = (index) => {
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
                                <button onClick={() => handleCompleteTodo(index)}>完了</button>
                                <button onClick={() => handleDeleteTodo(index)}>削除</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}