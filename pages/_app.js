import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
} from "@livepeer/react";
import "../styles/globals.css"
const LivepeerClient = createReactClient({
  provider: studioProvider({ apiKey: "1d8e8f2b-9a61-4d70-ba19-99a5981355d0" }),
});

function MyApp({ Component, pageProps }) {
  return (
    <LivepeerConfig client={LivepeerClient}>
      <Component {...pageProps} />
    </LivepeerConfig>
  );
}

export default MyApp;
