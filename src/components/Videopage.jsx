import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SERVER_SECRET } from "./secrets";

const Videopage = () => {
  const { id } = useParams();
  const roomID = id;
  console.log(import.meta.env.VITE_APP_ID)
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 557461107 ;
    const serverSecret = "fb3103fc5df2d250920d299f0c6d62f6";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "AdarshVideoApp"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomID,
        },
      ],

      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };
  return (
    <>
      <div className="w-full h-screen p-10" ref={myMeeting}>
        <h1>hey</h1>
      </div>
    </>
  );
};

export default Videopage;
