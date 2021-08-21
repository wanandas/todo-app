import { useState } from "react";
import { ITodoState } from "../../App";

export function useHandleValue() {
  const [todolist, setTodolist] = useState<ITodoState[]>([
    { id: 1, title: "TitleTest1", content: "contentTest", checked: false },
    { id: 2, title: "TitleTest2", content: "contentTest", checked: false },
  ]);

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

  return { todolist, handleChecked, handleSaveTodo, handleDelete };
}
