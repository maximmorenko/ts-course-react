import React from 'react';

import {TodoItem, TodoItem2} from './components/TodoItem';
import './App.css';

function App() {
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
