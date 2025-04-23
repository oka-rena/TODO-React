import { arrayHelper } from "../helpers/processToArray";

export const CompleteArea = ({ todos, setIncompleteTodos, setCompleteTodos }) => {
    const { addToArray, deleteFromArray } = arrayHelper();

    const handleBackTodo = (index) => {
        addToArray(setIncompleteTodos, todos[index]);
        deleteFromArray(setCompleteTodos, index)
    };

    return (
        <>
            <div className="complete-area">
                <p className="title">完了のTODO</p>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            <div className="list-row">
                                <p className="todo-item">{todo}</p>
                                <button onClick={() => handleBackTodo(index)}>戻す</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}