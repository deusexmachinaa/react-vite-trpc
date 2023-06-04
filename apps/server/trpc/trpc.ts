import { initTRPC } from "@trpc/server";

import type { Context } from "./api/router";

const t = initTRPC.context<Context>().create();

export const { middleware, router } = t;

export const userProcedure = t.procedure;
export const testProcedure = t.procedure;
export const urlProcedure = t.procedure;
