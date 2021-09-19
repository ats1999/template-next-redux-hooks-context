import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head>
              {/* Put any code <head> code that is comman for all pages, like x-frame options, etc... */}
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
