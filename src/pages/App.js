import {
    LocalUser,
    RemoteUser,
    useIsConnected,
    useJoin,
    useLocalMicrophoneTrack,
    useLocalCameraTrack,
    usePublish,
    useRemoteUsers,
  } from "agora-rtc-react";
  import React, { useState } from "react";
  import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
  
//   import "@/styles/agora.css";
  import logo from "@/images/logo.png";
  export const Basics = () => {
    // 定义状态变量
    
    const [calling, setCalling] = useState(false); // 是否正在呼叫
    const isConnected = useIsConnected(); // 存储用户的连接状态
    const [appId, setAppId] = useState(""); // 存储 App ID 的状态
    const [channel, setChannel] = useState(""); // 存储频道名的状态
    const [token, setToken] = useState(""); // 存储 Token 的状态
    const abd = useState(false);
  
    // 使用 App ID、频道名和 Token 加入频道，是否加入频道取决于 calling 的状态 for free
    useJoin({appid: appId, channel: channel, token: token ? token : null}, calling);

    // 本地用户
    const [micOn, setMic] = useState(true);
    const [cameraOn, setCamera] = useState(true);
    const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
    const { localCameraTrack } = useLocalCameraTrack(cameraOn);
    usePublish([localMicrophoneTrack, localCameraTrack]);

    // 远端用户
    const remoteUsers = useRemoteUsers();
   

    return (
      <>
        <div className="room">
            <div className="join-room">
             <img alt="agora-logo" className="logo" src={logo} />
              <input
                onChange={e => setAppId(e.target.value)}
                placeholder="<Your App ID>"
                value={appId}
              />
              <input
                onChange={e => setChannel(e.target.value)}
                placeholder="<Your channel Name>"
                value={channel}
              />
              <input
                onChange={e => setToken(e.target.value)}
                placeholder="<Your token>"
                value={token}
              />
  
              <button
                className={`join-channel ${!appId || !channel ? "disabled" : ""}`}
                disabled={!appId || !channel}
                onClick={() => setCalling(true)}
              >
                <span>Join Channel</span>
              </button>
            </div>
        </div>
      </>
    );
  };
  
  export default Basics;
  