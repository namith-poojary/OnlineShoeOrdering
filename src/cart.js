import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AddTodoAction, RemoveTodoAction } from "./action/TodoAction";

import "./cart.css";

function Cart() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);

  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Add Items to Cart....!</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="enter the name"
            style={{
              width: 300,

              padding: 10,

              borderRadius: 0,

              border: "none",

              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />

          <button
            type="submit"
            style={{
              padding: 12,

              borderRadius: 0,

              color: "blue",

              fontSize: 15,

              marginLeft: 20,
            }}
          >
           ADD TO CART
          </button>
        </form>
            <br></br>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoTextr">{t.todo}</span>

                <button
                  style={{
                    padding: 12,

                    borderRadius: 0,

                    fontSize: 15,

                    marginLeft: 20,
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete from Cart
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default Cart;