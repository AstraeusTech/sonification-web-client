(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6379:function(e,s,t){Promise.resolve().then(t.bind(t,8549))},8549:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Home}});var a=t(7437),l=t(6691),n=t.n(l),r=t(2265),i=t(4033),o=t(263).Buffer;function FileSelection(){let[e,s]=(0,r.useState)(!1),t=(0,i.useRouter)(),handleFileChange=async e=>{var s;let t=null===(s=e.target.files)||void 0===s?void 0:s[0];t&&await handleFile(t)},handleFile=async e=>{s(!0);try{let s=new FileReader;s.onload=async()=>{let e=new Image;e.src=s.result,e.onload=async()=>{let s=document.createElement("canvas"),t=s.getContext("2d"),a=e.width,l=e.height;a>1280&&(l*=1280/a,a=1280),l>720&&(a*=720/l,l=720),s.width=a,s.height=l,null==t||t.drawImage(e,0,0,a,l);let n=s.toDataURL("image/jpeg",.7),r=await new Promise(e=>{let s=new XMLHttpRequest;s.open("GET",n),s.responseType="arraybuffer",s.onload=()=>{e(s.response)},s.send()});await sendArrayBuffer(r)}},s.readAsDataURL(e)}catch(e){console.error("An error occurred:",e)}};async function sendArrayBuffer(e){try{var s;let a=o.from(e),l=await fetch("/api/upload",{method:"POST",body:a}),n=await l.json();t.push(null!==(s="/".concat(n.id))&&void 0!==s?s:"/")}catch(e){console.error("An error occurred:",e)}}return e?(0,a.jsx)("span",{className:"loading loading-dots loading-lg"}):(0,a.jsx)("div",{onDrop:e=>{var s;e.preventDefault();let t=null===(s=e.dataTransfer.files)||void 0===s?void 0:s[0];t&&("image/jpeg"===t.type||"image/png"===t.type)&&handleFile(t)},onDragOver:e=>e.preventDefault(),className:"flex flex-row max-w-2xl h-64 justify-center items-center border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors",children:(0,a.jsxs)("div",{className:"flex flex-col items-center mx-24",children:[(0,a.jsxs)("p",{children:[(0,a.jsx)("b",{children:"Drag and drop"})," or ",(0,a.jsx)("b",{children:"select"})," a file to upload"]}),(0,a.jsx)("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:handleFileChange,accept:"image/jpeg, image/png"})]})})}let d={sm:"w-6 h-6",md:"w-8 h-8",lg:"w-10 h-10"};function ChevronDown(e){let{className:s,size:t}=e,l=t?d[t]:d.sm;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:l+" "+(s||""),children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function Home(){let[e,s]=(0,r.useState)(!1);return(0,a.jsxs)("main",{children:[(0,a.jsxs)("div",{className:"hero min-h-screen hero-pattern",children:[(0,a.jsx)("div",{className:"hero-content text-center",children:e?(0,a.jsx)(FileSelection,{}):(0,a.jsxs)("div",{className:"max-w-lg",children:[(0,a.jsx)(n(),{src:"/waves.png",className:"m-auto",width:125,height:100,alt:"logo"}),(0,a.jsx)("h1",{className:"text-7xl font-bold text-slate-800",children:"Astrorpheus"}),(0,a.jsx)("h2",{className:"text-2xl text-slate-500 font-semibold mt-2",children:"A Space Odyssey in Sound"}),(0,a.jsx)("p",{className:"py-6 text-lg",children:"Explore space in way you have never experienced before. Astrorpheus is a space odyssey in sound. Explore the cosmos through the sounds of the planets, stars, and other celestial bodies."}),(0,a.jsxs)("div",{className:"space-x-4",children:[(0,a.jsx)("button",{onClick:()=>s(!0),className:"btn text-slate-50 transition-all duration-500 bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100",children:"Get Started"}),(0,a.jsx)("a",{className:"btn btn-outline",href:"/explore",children:"Explore"})]})]})}),(0,a.jsx)("a",{href:"#features",className:"absolute bottom-8",children:(0,a.jsx)(ChevronDown,{className:"animate-bounce",size:"lg"})})]}),(0,a.jsx)("div",{className:"bg-slate-950 min-h-screen pt-32 feature-pattern flex flex-col justify-center",id:"features",children:(0,a.jsx)("div",{className:"overflow-hidden py-24 sm:py-32",children:(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2",children:[(0,a.jsx)("div",{className:"lg:pr-8 lg:pt-4",children:(0,a.jsxs)("div",{className:"lg:max-w-lg",children:[(0,a.jsx)("h2",{className:"font-semibold leading-7 text-3xl tracking-tight text-fuchsia-400",children:"Explore the cosmos"}),(0,a.jsx)("p",{className:"mt-6 text-lg leading-8 text-slate-400",children:"Embark on an otherworldly journey like never before with our cutting-edge feature! Upload your 2D space images and watch as they transcend into stunning 3D models. Dive into the cosmos with immersive soundscapes and explore the universe in a whole new dimension."}),(0,a.jsxs)("dl",{className:"mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-300 lg:max-w-none",children:[(0,a.jsxs)("div",{className:"relative pl-9",children:[(0,a.jsxs)("dt",{className:"inline font-semibold text-slate-50",children:[(0,a.jsx)("svg",{className:"absolute left-1 top-1 h-5 w-5 text-fuchsia-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z",clipRule:"evenodd"})}),"Upload your images."]}),(0,a.jsxs)("dd",{className:"inline",children:[" ","Space is vast and so are the possibilities. Upload your 2D images to get started."]})]}),(0,a.jsxs)("div",{className:"relative pl-9",children:[(0,a.jsxs)("dt",{className:"inline font-semibold text-slate-50",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"absolute left-1 top-1 h-5 w-5 text-fuchsia-600",children:(0,a.jsx)("path",{d:"M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"})}),"Immerse yourself."]}),(0,a.jsxs)("dd",{className:"inline",children:[" ","Transcend into immersive 3D models and twinkling, melodic soundscapes."]})]}),(0,a.jsxs)("div",{className:"relative pl-9",children:[(0,a.jsxs)("dt",{className:"inline font-semibold text-slate-50",children:[(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"absolute left-1 top-1 h-5 w-5 text-fuchsia-600",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z",clipRule:"evenodd"})}),"Explore."]}),(0,a.jsxs)("dd",{className:"inline",children:[" ","Share your creations with the world and explore what others have created."]})]})]})]})}),(0,a.jsx)("img",{src:"/features-image.png",alt:"Product screenshot",className:"w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0",width:"2432",height:"1442"})]})})})})]})}},2597:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(e,s){for(var t in s)Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}(s,{default:function(){return o},unstable_getImgProps:function(){return unstable_getImgProps}});let a=t(1024),l=t(3655),n=t(7707),r=t(6964),i=a._(t(5324)),unstable_getImgProps=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:s}=(0,l.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(s))void 0===t&&delete s[e];return{props:s}},o=r.Image},7650:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"RouterContext",{enumerable:!0,get:function(){return n}});let a=t(1024),l=a._(t(2265)),n=l.default.createContext(null)},6691:function(e,s,t){e.exports=t(2597)},4033:function(e,s,t){e.exports=t(290)}},function(e){e.O(0,[964,447,971,864,744],function(){return e(e.s=6379)}),_N_E=e.O()}]);