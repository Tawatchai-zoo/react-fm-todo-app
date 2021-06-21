import React from "react";
import TodoForm from "./TodoForm";
import Header from "./Header";
import OutPut from "./OutPut";

import desktopDark from "../images/bg-desktop-dark.jpg";
import desktopLight from "../images/bg-desktop-light.jpg";
import mobileDark from "../images/bg-mobile-dark.jpg";
import mobileLight from "../images/bg-mobile-light.jpg";

// import iconCheck from "../images/icon-check.svg";
// import iconCross from "../images/icon-cross.svg";

const bgImg = {
    desktop: {
        dark: desktopDark,
        light: desktopLight,
    },
    mobile: {
        dark: mobileDark,
        light: mobileLight,
    },
};

const TodoList = () => {
    const [todos, setTodos] = React.useState([]);
    const [sortOn, setSortOn] = React.useState("all");
    const [darkTheme, setDarkTheme] = React.useState(true);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) return;
        const newTodo = [todo, ...todos];
        setTodos(newTodo);
    };

    const completeTodo = (id) => {
        const updateTodo = todos.map((todo) => {
            if (todo.id === id) todo.completed = !todo.completed;
            return todo;
        });
        setTodos(updateTodo);
    };

    const clearCompleted = () => {
        const updateTodo = todos.filter((todo) => !todo.completed);
        setTodos(updateTodo);
    };

    const deleteTodo = (id) => {
        const updateTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updateTodos);
    };

    const setSort = (sort) => setSortOn(sort);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
        // if (sortOn !== "all") return;
        const todosAfterDrop = [...todos];
        const [itemDraged] = todosAfterDrop.splice(result.source.index, 1);
        todosAfterDrop.splice(result.destination.index, 0, itemDraged);

        setTodos(todosAfterDrop);
    };

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    React.useEffect(() => {
        const viewPortMode = window.innerWidth > 1000 ? "desktop" : "mobile";
        const [color, bgColor] = darkTheme ? ["dark", "hsl(235, 21%, 11%)"] : ["light", "hsl(236, 33%, 92%)"];
        document.body.style.backgroundImage = `url(${bgImg[viewPortMode][color]})`;
        document.body.style.backgroundColor = bgColor;
    }, [darkTheme]);

    React.useEffect(() => {
        if (localStorage.getItem("localTodo")) {
            const localTodo = JSON.parse(localStorage.getItem("localTodo"));
            setTodos(localTodo);
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem("localTodo", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="container">
            <Header darkTheme={darkTheme} toggleTheme={toggleTheme} />

            <TodoForm onSubmit={addTodo} darkTheme={darkTheme} />

            <OutPut
                todos={todos}
                sortOn={sortOn}
                completeTodo={completeTodo}
                clearCompleted={clearCompleted}
                setSort={setSort}
                deleteTodo={deleteTodo}
                handleOnDragEnd={handleOnDragEnd}
                darkTheme={darkTheme}
            />
        </div>
    );
};

export default TodoList;
