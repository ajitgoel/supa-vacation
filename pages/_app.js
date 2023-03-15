import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { SessionProvider} from 'next-auth/react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>      
      <Toaster />
     </>
  );
}
export default MyApp;
