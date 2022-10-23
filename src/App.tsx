import React, {useEffect, useState} from 'react';

import {TodoItem, TodoItem2} from './components/TodoItem';
import {NewTodoForm} from './components/NewTodoForm';
import './App.css';
import {Todo} from './types'


function App() {

    // то что мы указываем по умолчанию во входных параметрах юзстейта типизирует наш стейт
    // const [text, setText] = useState(''); // ожидает строку, и setText навыходе теже выдаст строку

    //const [todo, setTodo] = useState([]); // указав пустой массив по умолчанию 
    // получим never[] массив в котором никогда ничего не появится
    // поэтому нужно указать тип массива. Исполььзовать useState дженерик useState<string[]>([])
    const [todo2, setTodo2] = useState<Todo[]>([]);

    // если по умолчанию нал но в дальнейшим мы хотим хотим типизировать как вассив объектов 
    //const [] = useState<ITodo | null>(null) // в этом случае нужно будет делать еще доп. проверки на null

    // const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(event.target.value) //то значение, которое мы вводим в форму
    // }

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            title: text,
            id: new Date().toString(),
            complited: false,
        }
        setTodo2([newTodo, ...todo2]);
        // setText('');
    }

    // юзефект должен ть всегда с явным ретерном и массивом зависимостей
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json()) //json по умолчанию это any
            .then((data: Todo[]) => {setTodo2(data)}) //data тоже по умолчанию any, поэтому явно указываем тип для data
    }, [])

    return (
        <div className="App">
            <NewTodoForm 
                // value={text}
                // onChange={handleInput}
                handleClick={addTodo}
            />
            {/* ТС ругается, ждет передачи пропсов */}
            <TodoItem id='111' title='first todo' complited={false}>
                {/* обязаны передать какото чилдрен */}
                <></>
            </TodoItem>
            <TodoItem2 id='222' title='second todo' complited={false} style={{
                border: '1px solid green'
            }}>
                <></>
            </TodoItem2>
        </div>
    );
}

export default App;
