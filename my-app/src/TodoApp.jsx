import { useState } from 'react';
import { InputArea } from './components/InputArea';
import { InCompleteArea } from './components/InCompleteArea';
import { CompleteArea } from './components/CompleteArea';
import './styles/style.css';

export const Todo = () => {
    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);

    return(
        <>
            <InputArea setTodos={setIncompleteTodos} />
            <InCompleteArea 
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