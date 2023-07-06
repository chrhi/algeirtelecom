import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/users-router";
import { reportsRouter } from "./routers/reports-router";
import { dommandeRouter } from "./routers/dommande-router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  users: userRouter,
  dommande : dommandeRouter , 
  report : reportsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
