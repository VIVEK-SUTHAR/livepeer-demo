import { Player, useStream } from "@livepeer/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function livestream() {
  const router = useRouter();
  const [playbackid, setplaybackid] = useState(
    "bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe"
  );
  useEffect(() => {
    const { id } = router.query;
    console.log(id);
    // setplaybackid(id);
  }, []);
  return (
    <>
      <h3 className="title">Live Stream by LIVE_STREAM_NAME</h3>
      <div className="player">
        <Player
          autoPlay={true}
          playbackId={"6d7el73r1y12chxr"}
          showPipButton
          objectFit="cover"
          priority
          refetchPlaybackInfoInterval={1000}
          showTitle={false}
          theme={{
            borderStyles: {
              containerBorderStyle: "1px solid greenyello",
            },
          }}
        />
        <div className="stats title">
          stats will be here
          <div className="comment">
            <input className="input inputcomment" />
            <button className="send-btn">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default livestream;
