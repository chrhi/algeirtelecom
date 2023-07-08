import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
// import '@/styles/editor.css'
import { Toaster } from "~/components/ui/toaster";
import NextNProgress from 'nextjs-progressbar';

const MyApp: AppType = ({ Component, pageProps }) => {
  return<div>
       <NextNProgress 
       color="#37f237"
       options={{ 
        showSpinner: false 
        
        }} />
        <Component {...pageProps} />
        <Toaster />
  </div>
 
};

export default api.withTRPC(MyApp);
