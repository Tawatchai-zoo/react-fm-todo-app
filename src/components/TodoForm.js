import React from "react";

const TodoForm = ({onSubmit, darkTheme}) => {
    const [input, setInput] = React.useState('')

    const handleChange = e => setInput(e.target.value)
    
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input,
            completed: false
        })
        setInput('')
    }
    
    return (
        <form className={darkTheme ? "form-input" : "form-input white"} onSubmit={handleSubmit}>
            <div className="checkbox-wraper">
				<span className="check" />
				<span className="checkbox--fill-layer" />
			</div>
            
            <input
                placeholder="Add a todo"
                value={input}
                onChange={handleChange}
                name="text"
                // className="todo-input"
                className="input-item"
                placeholder="Create new todo..."
                // ref={inputRef}
            />
        </form>
    );
};

export default TodoForm;
