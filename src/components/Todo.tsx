import axios from "axios";
import React, { useEffect, useState } from "react";

type TodoItem = {
  id: number;
  title: string;
  comment: boolean;
};

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const getTodolist = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

      // console.log("Todo List:", res.data);

      setTodoList(res.data);
      return res.data;
    } catch (err) {
      new Error("Failed to get todo list");
    }
  };

  useEffect(() => {
    getTodolist();
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
