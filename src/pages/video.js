import React, { StrictMode }  from 'react';
import { createRoot } from "react-dom/client";
// import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
// import App from "./App";
import dynamic from 'next/dynamic'


const Page =  dynamic(()=>import('./App'), {ssr:false});
export default ()=>{
    // const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    return (<div>
    <Page/>
</div>)}
// ()=>{
//     import('./App').then(App=>{
//         return <App/>
//     })
//     // return (<div>1111</div>)  
// }

// export default dynamic(() => 
//     import('./App').then(App=>{
//         const rootElement = document.getElementById("root");
//         // const root = createRoot(rootElement);
        
//         // highlight-next-line
//         // 视频通话场景下，将 mode 设为 "rtc"
//         const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        
//       return (<div>1111<div/>)  
//         // root.render(
//         //  return  (<StrictMode>
//         //     // highlight-start
//         //     <AgoraRTCProvider client={client}>
//         //       <App />
//         //     </AgoraRTCProvider>
//         //     // highlight-end
//         //   </StrictMode>)
//         // );
//     })
// , { ssr: false });