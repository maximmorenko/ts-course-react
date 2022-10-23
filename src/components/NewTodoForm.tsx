import {useRef} from 'react'


interface NewTodoFormProps {
    // value: string;
    // onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClick: (text: string) => void
}

// rafce - снипет

// управляемая форма
// export const NewTodoForm = ({ value, onChange, handleClick }: NewTodoFormProps) => {
//     return (
//         <>
//             <input 
//                 type='text'
//                 placeholder='new todo'
//                 value={value}
//                 onChange={onChange}
//             />
//             <button onClick={handleClick}>add todo</button>
//         </>
//     )
// }

// неуправляемая форма
// для нее исфолюзуем хук юзреф
export const NewTodoForm = ({ handleClick }: NewTodoFormProps) => {
    // мы должны передать в реф штмл елемент как дженерик или null, по умолчанию ставим null
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClick = () => {
        // в хендлере для тс нужно сделать проверку на наличие текущего значения в рефе
        if (inputRef.current) {
            handleClick(inputRef.current.value)
        }
    }

    return (
        <>
            <input 
                type='text'
                placeholder='new todo'
                ref={inputRef}
            />
            <button onClick={onClick}>add todo</button>
        </>
    )
}
