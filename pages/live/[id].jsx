import { Player } from "@livepeer/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function livestream() {
  const router = useRouter();
  const [playbackid, setplaybackid] = useState("");
  useEffect(() => {
    const { id } = router.query;
    console.log(id);
    setplaybackid(id);
  }, []);
  return (
    <Player
      playbackId={playbackid}
      showPipButton
      objectFit="cover"
      priority
      showTitle={false}
    />
  );
}

export default livestream;
