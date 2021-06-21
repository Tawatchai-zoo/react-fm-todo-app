import React from "react";
import iconCheck from "../images/icon-check.svg";
import iconCross from "../images/icon-cross.svg";
import { Draggable } from "react-beautiful-dnd";

const Todo = ({ todos, completeTodo, sortOn, deleteTodo }) => {
    let sorted = [];
    if (sortOn === "all") sorted = [...todos];
    else if (sortOn === "active") sorted = [...todos].filter((todo) => !todo.completed);
    else if (sortOn === "completed") sorted = [...todos].filter((todo) => todo.completed);

    return sorted.length > 0
        ? sorted.map((todo, index) => (
              <Draggable key={todo.id} draggableId={"" + todo.id} index={index}>
                  {(provided) => (
                      <li className="item" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <input
                              id={todo.id}
                              className="input-checkbox"
                              type="checkbox"
                              defaultChecked={todo.completed}
                              onChange={() => completeTodo(todo.id)}
                          />
                          <div className="checkbox-wraper">
                              <span className="check">
                                  <img src={iconCheck} alt="" />
                              </span>
                              <span className="checkbox--fill-layer" />
                          </div>
                          <label htmlFor={todo.id}> {todo.text} </label>
                          <img className="btn--cross" src={iconCross} alt="" onClick={() => deleteTodo(todo.id)} />
                      </li>
                  )}
              </Draggable>
          ))
        : null;
};

export default Todo;
