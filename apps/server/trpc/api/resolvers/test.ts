import { testProcedure } from "trpc";

export const test = testProcedure.query(() => ({ test: "Hello" as const }));
export const url = testProcedure.query(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});
