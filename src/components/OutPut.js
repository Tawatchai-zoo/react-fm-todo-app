import React from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const OutPut = ({ todos, sortOn, completeTodo, setSort, clearCompleted, darkTheme, deleteTodo, handleOnDragEnd }) => {
    return window.innerWidth > 800 ? (
        <>
            <div className={darkTheme ? "output" : "output white"}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="todos">
                        {(provided) => (
                            <ul className="item-container" {...provided.droppableProps} ref={provided.innerRef}>
                                <Todo todos={todos} sortOn={sortOn} completeTodo={completeTodo} deleteTodo={deleteTodo} />
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className="fn-item">
                    <div className="count-item">{todos.length > 0 ? todos.length + " items left" : todos.length}</div>

                    <div className="btn--sort-container">
                        <div className={sortOn === "all" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("all")}>
                            All
                        </div>
                        <div className={sortOn === "active" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("active")}>
                            Active
                        </div>
                        <div className={sortOn === "completed" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("completed")}>
                            Completed
                        </div>
                    </div>
                    <div className="btn--clear" onClick={clearCompleted}>
                        Clear Completed
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className={darkTheme ? "output" : "output white"}>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="todos">
                        {(provided) => (
                            <ul className="item-container" {...provided.droppableProps} ref={provided.innerRef}>
                                <Todo todos={todos} sortOn={sortOn} completeTodo={completeTodo} deleteTodo={deleteTodo} />
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className="fn-item">
                    <div className="count-item">{todos.length > 0 ? todos.length + " items left" : todos.length}</div>

                    <div className="btn--clear" onClick={clearCompleted}>
                        Clear Completed
                    </div>
                </div>
            </div>

            <div className={darkTheme ? "btn--sort-container" : "btn--sort-container white"}>
                <div className={sortOn === "all" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("all")}>
                    All
                </div>
                <div className={sortOn === "active" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("active")}>
                    Active
                </div>
                <div className={sortOn === "completed" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("completed")}>
                    Completed
                </div>
            </div>
        </>
    );

    // return window.innerWidth > 800 ? (
    //     <>
    //         <div className={darkTheme ? "output" : "output white"}>
    //             <ul className="item-container">
    //                 <Todo todos={todos} sortOn={sortOn} completeTodo={completeTodo} />
    //             </ul>
    // <div className="fn-item">
    //     <div className="count-item">{todos.length > 0 ? todos.length + " items left" : todos.length}</div>

    //     <div className="btn--sort-container">
    //         <div className={sortOn === "all" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("all")}>
    //             All
    //         </div>
    //         <div className={sortOn === "active" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("active")}>
    //             Active
    //         </div>
    //         <div className={sortOn === "completed" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("completed")}>
    //             Completed
    //         </div>
    //     </div>
    //     <div className="btn--clear" onClick={clearCompleted}>
    //         Clear Completed
    //     </div>
    // </div>
    //         </div>
    //     </>
    // ) : (
    //     <>
    //         <div className={darkTheme ? "output" : "output white"}>
    //             <ul className="item-container">
    //                 <Todo todos={todos} sortOn={sortOn} completeTodo={completeTodo} />
    //             </ul>
    //             <div className="fn-item">
    //                 <div className="count-item">{todos.length > 0 ? todos.length + " items left" : todos.length}</div>

    //                 <div className="btn--clear" onClick={clearCompleted}>
    //                     Clear Completed
    //                 </div>
    //             </div>
    //         </div>

    //         <div className={darkTheme ? "btn--sort-container" : "btn--sort-container white"}>
    //             <div className={sortOn === "all" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("all")}>
    //                 All
    //             </div>
    //             <div className={sortOn === "active" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("active")}>
    //                 Active
    //             </div>
    //             <div className={sortOn === "completed" ? "btn--sort active" : "btn--sort"} onClick={() => setSort("completed")}>
    //                 Completed
    //             </div>
    //         </div>
    //     </>
    // );
};

export default OutPut;
