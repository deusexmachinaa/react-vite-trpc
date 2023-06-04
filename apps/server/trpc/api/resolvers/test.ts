import { testProcedure } from "trpc";

export const test = testProcedure.query(() => ({ test: "Hello" as const }));
