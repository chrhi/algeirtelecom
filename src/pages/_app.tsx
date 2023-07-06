import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Toaster } from "~/components/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return<div>
        <Component {...pageProps} />
        <Toaster />
  </div>
 
};

export default api.withTRPC(MyApp);
