import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";
import "../styles/globals.css";
const LivepeerClient = createReactClient({
  provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_LIVEPEER }),
});

function MyApp({ Component, pageProps }) {
  return (
    <LivepeerConfig client={LivepeerClient}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp;
