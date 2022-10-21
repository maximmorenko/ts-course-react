interface NewTodoFormProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleClick: () => void
}

// rafce - снипет

const NewTodoForm = ({ value, onChange, handleClick }: NewTodoFormProps) => {
    return (
        <>
            <input 
                type='text'
                placeholder='new todo'
                value={value}
                onChange={onChange}
            />
            <button onClick={handleClick}>add todo</button>
        </>
    )
}

export default NewTodoForm
