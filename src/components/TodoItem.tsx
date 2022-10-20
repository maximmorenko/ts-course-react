import React from "react";

// пример 1
// для типизации пропсов можно использовать как интерфейсы так и алиасы
// в компонент передаем типы ка кдженерик
interface TodoItemProps {
    id: string;
    title: string;
    complited: boolean;
    // некоторые компоненты могут принимать чилднеры
    children: React.ReactNode;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, complited, children }) => {
    // FC - Function Component это компонент является дженериком, по умолчанию пустой объект
    // этот обоъект - это набор пропсов

    return (
        <li>
            <input type="checkbox" checked={complited}/>
            <span>{title}</span>
            <span>&times;</span>
            {/* сюда будут добавляться переданые чилднеры */}
            {children}
        </li>
    )
}

export {TodoItem};
// при таком виде типизации у компонента есть ряд опций:
// TodoItem.defaultProps = {}
// TodoItem.contextTypes = {}
// TodoItem.displayName = ''
// TodoItem.propTypes 

// пример 2
const TodoItem2 = ({ id, title, complited }: TodoItemProps) => {
    // FC - Function Component это компонент является дженериком, по умолчанию пустой объект
    // этот обоъект - это набор пропсов

    return (
        <li>
            <input type="checkbox" checked={complited}/>
            <span>{title}</span>
            <span>&times;</span>
        </li>
    )
}

export {TodoItem2};
// при таком виде типизации у компонента нет бульше опций
