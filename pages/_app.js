import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { useStore } from "../store";
import UserContext from "@src/context/userContext";
import useLocalUser from "@src/hooks/useLocalUser";
import Layout from "@components/layout/Layout";
import "@styles/global.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  // https://dev.to/ats1999/use-multiple-layouts-at-multiple-pages-in-next-js-2b8g
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  const user = useLocalUser();
  return (
    <>
      <Head>
        <title>Blog - Website</title>
      </Head>
      <ChakraProvider>
        <ReduxProvider store={store}>
          <UserContext.Provider value={user}>{getLayout(<Component {...pageProps} />)}</UserContext.Provider>
        </ReduxProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
