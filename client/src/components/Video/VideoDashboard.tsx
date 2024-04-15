import { SocketProvider } from "./provider/socket";

function VideoDashbaord ({ Component, pageProps }: any) {

  return (
    <>
      <SocketProvider>
        <Component {...pageProps} />
      </SocketProvider>
    </>
  )
};

export default VideoDashbaord;