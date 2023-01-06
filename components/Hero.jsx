import { Player, useCreateStream } from "@livepeer/react";
import React, { useState } from "react";

function Hero() {
  const [streamName, setStreamName] = useState("");

  const { mutate: createStream, data: stream, status } = useCreateStream({
    name: streamName,
  });
  console.log(stream);

  return (
    <main className="container">
      <h2 className="title">
        Start Your Decentralized Live-Stream With LivePeer
        <input
          className="input"
          type={"text"}
          value={streamName}
          onChange={(e) => {
            e.preventDefault();
            setStreamName(e.target.value);
          }}
        />
        <button
          className="button"
          disabled={status === "loading" || !createStream || !streamName}
          onClick={() => {
            createStream?.();
          }}
        >
          Create Stream
        </button>
      </h2>
      {stream && (
        <>
          <Player src={"https://livepeercdn.studio/hls/1e12lkwi5nry4s3n/index.m3u8"} />
        </>
      )}
    </main>
  );
}

export default Hero;
