import { useState } from "react";
import { ITodoState } from "../../App";

export function useHandleValue() {
  const localdata = localStorage.getItem("myTodo");

  const [todolist, setTodolist] = useState<ITodoState[]>(
    JSON.parse(localdata as string) || []
  );

  const handleCreatetodo = ({
    title,
    content,
  }: {
    title: string;
    content: string;
  }) => {
    const id = todolist.length + 1;
    const checked = false;
    setTodolist([...todolist, { id, title, content, checked }]);
    const stringData = JSON.stringify(todolist);
    return localStorage.setItem("myTodo", stringData);
  };

  const handleChecked = (id: number) => {
    let mapped = todolist.map((todo) => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo };
    });
    return setTodolist(mapped);
  };

  const handleSaveTodo = ({
    id,
    title,
    content,
  }: {
    id: number;
    title: string;
    content: string;
  }) => {
    let mapped = todolist.map((todo) => {
      return todo.id === id
        ? { ...todo, title: title, content: content }
        : { ...todo };
    });
    return setTodolist(mapped);
  };

  const handleDelete = (id: number) => {
    const index = todolist.findIndex((todo) => todo.id === id);
    let mapped = todolist.filter((todo, i) => {
      return index !== i;
    });

    setTodolist(mapped);
  };

  return {
    todolist,
    handleChecked,
    handleSaveTodo,
    handleDelete,
    handleCreatetodo,
  };
}
