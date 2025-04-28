import { useState } from 'react';
import { InputArea } from './components/InputArea';
import { IncompleteArea } from './components/IncompleteArea';
import { CompleteArea } from './components/CompleteArea';
import './styles/style.css';

export const Todo = () => {
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    return(
        <>
            <InputArea setTodos={setIncompleteTodos} />
            <IncompleteArea 
                todos={incompleteTodos} 
                setIncompleteTodos={setIncompleteTodos}  
                setCompleteTodos={setCompleteTodos}
            />
            <CompleteArea 
                todos={completeTodos} 
                setIncompleteTodos={setIncompleteTodos} 
                setCompleteTodos={setCompleteTodos}
            />
        </>
    );
}