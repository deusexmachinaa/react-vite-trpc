import { urlProcedure } from "trpc/trpc";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const url = urlProcedure.query(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data: Todo[] = await response.json();
  return data;
});
