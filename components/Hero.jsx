import { Player, useCreateStream } from "@livepeer/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Hero() {
  const [streamName, setStreamName] = useState("");
  const [keyCopied, setKeyCopied] = useState(false);
  const [urlcopied, setUrlcopied] = useState(false);
  const { mutate: createStream, data: stream, status } = useCreateStream({
    name: streamName,
  });
  console.log(stream);
  const router = useRouter();
  return (
    <main className="container">
      {keyCopied && <h2 className="title">Streaming key copied</h2>}
      {urlcopied && <h2 className="title">URL Copied</h2>}
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
          <h2 className="title">Your stream has been created:</h2>
          <h3 className="info">
            To Start your Start your streaming,Go to your streaming tool and
          </h3>
          <h3 className="info">And in Streaming Tab,enter following details</h3>
          <h4 className="info">
            Server url: <span>rtmp://rtmp.livepeer.com/live</span>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "8px",
                marginInline: "5px",
                fontSize: "18px",
                borderRadius: "8px",
                borderColor: "none",
              }}
              onClick={() => {
                navigator.clipboard
                  .writeText("rtmp://rtmp.livepeer.com/live")
                  .then(() => {
                    setUrlcopied(true);
                    setTimeout(() => {
                      setUrlcopied(false);
                    }, 2000);
                  });
              }}
            >
              Copy
            </button>
          </h4>
          <h4 className="info">
            Streaming Key: {stream.streamKey}
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "8px",
                marginInline: "5px",
                fontSize: "18px",
                borderRadius: "8px",
                borderColor: "none",
              }}
              onClick={() => {
                navigator.clipboard.writeText(stream.streamKey).then(() => {
                  setKeyCopied(true);
                  setTimeout(() => {
                    setKeyCopied(false);
                  }, 2000);
                });
              }}
            >
              Copy
            </button>
          </h4>
          <h2 className="title">
            {" "}
            Once you are ready, Click the button to see your live stream
          </h2>
          <button className="button">
            <Link href={`/live/${stream.playbackId}`}>See the stream</Link>
          </button>
        </>
      )}
    </main>
  );
}

export default Hero;
