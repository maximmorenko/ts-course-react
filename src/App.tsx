import React, {useState} from 'react';

import {TodoItem, TodoItem2} from './components/TodoItem';
import './App.css';


type ITodo = {
    title: string;
    id: string;
    complited: boolean;
}

function App() {

    // то что мы указываем по умолчанию во входных параметрах юзстейта типизирует наш стейт
    const [text, setText] = useState(''); // ожидает строку, и setText навыходе теже выдаст строку

    const [todo, setTodo] = useState([]); // указав пустой массив по умолчанию 
    // получим never[] массив в котором никогда ничего не появится
    // поэтому нужно указать тип массива. Исполььзовать useState дженерик useState<string[]>([])
    const [todo2, setTodo2] = useState<string[]>([]);

    // если по умолчанию нал но в дальнейшим мы хотим хотим типизировать как вассив объектов 
    const [] = useState<ITodo | null>(null) // в этом случае нужно будет делать еще доп. проверки на null

    return (
        <div className="App">
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
