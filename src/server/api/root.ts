import { createTRPCRouter } from "~/server/api/trpc";
import { userRouter } from "./routers/users-router";
import { reportsRouter } from "./routers/reports-router";
import { dommandeRouter } from "./routers/dommande-router";
import { serviceRouter } from "./routers/services";
import { workContractRouter } from "./routers/work-contruct";
import { dealRouter } from "./routers/deal-routers";
import { profileRouter } from "./routers/custom/user-profile";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  users: userRouter,
  dommande : dommandeRouter , 
  report : reportsRouter,
  services : serviceRouter,
  contract : workContractRouter ,
  deal : dealRouter,
  profile : profileRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
