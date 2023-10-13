(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},3422:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>l.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>m,routeModule:()=>h,tree:()=>c});var a=t(3137),r=t(4647),n=t(4183),l=t.n(n),i=t(1775),o={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>i[e]);t.d(s,o);let d=a.AppPageRouteModule,c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,4165)),"/Users/mirmukhammadmirsodikov/Documents/Development/sandbox/NASASpaceApps2023/sonification-web-app/app/page.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,5966)),"/Users/mirmukhammadmirsodikov/Documents/Development/sandbox/NASASpaceApps2023/sonification-web-app/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,1918,23)),"next/dist/client/components/not-found-error"]}],m=["/Users/mirmukhammadmirsodikov/Documents/Development/sandbox/NASASpaceApps2023/sonification-web-app/app/page.tsx"],p="/page",x={require:t,loadChunk:()=>Promise.resolve()},h=new d({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2919:(e,s,t)=>{Promise.resolve().then(t.bind(t,6724))},6724:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>Home});var a=t(80),r=t(2451),n=t.n(r),l=t(9885),i=t(7114);function FileSelection(){let[e,s]=(0,l.useState)(!1),t=(0,i.useRouter)(),handleFileChange=async e=>{let s=e.target.files?.[0];s&&await handleFile(s)},handleFile=async e=>{s(!0);try{let s=new FileReader;s.onload=async()=>{let e=new Image;e.src=s.result,e.onload=async()=>{let s=document.createElement("canvas"),t=s.getContext("2d"),a=e.width,r=e.height;a>1280&&(r*=1280/a,a=1280),r>720&&(a*=720/r,r=720),s.width=a,s.height=r,t?.drawImage(e,0,0,a,r);let n=s.toDataURL("image/jpeg",.7),l=await new Promise(e=>{let s=new XMLHttpRequest;s.open("GET",n),s.responseType="arraybuffer",s.onload=()=>{e(s.response)},s.send()});await sendArrayBuffer(l)}},s.readAsDataURL(e)}catch(e){console.error("An error occurred:",e)}};async function sendArrayBuffer(e){try{let s=Buffer.from(e),a=await fetch("/api/upload",{method:"POST",body:s}),r=await a.json();t.push(`/${r.id}`??0)}catch(e){console.error("An error occurred:",e)}}return e?a.jsx("span",{className:"loading loading-dots loading-lg"}):a.jsx("div",{onDrop:e=>{e.preventDefault();let s=e.dataTransfer.files?.[0];s&&("image/jpeg"===s.type||"image/png"===s.type)&&handleFile(s)},onDragOver:e=>e.preventDefault(),className:"flex flex-row max-w-2xl h-64 justify-center items-center border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400 transition-colors",children:(0,a.jsxs)("div",{className:"flex flex-col items-center mx-24",children:[(0,a.jsxs)("p",{children:[a.jsx("b",{children:"Drag and drop"})," or ",a.jsx("b",{children:"select"})," a file to upload"]}),a.jsx("input",{type:"file",className:"file-input file-input-bordered w-full max-w-xs",onChange:handleFileChange,accept:"image/jpeg, image/png"})]})})}let o={sm:"w-6 h-6",md:"w-8 h-8",lg:"w-10 h-10"};function ChevronDown({className:e,size:s}){let t=s?o[s]:o.sm;return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:t+" "+(e||""),children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function Home(){let[e,s]=(0,l.useState)(!1);return(0,a.jsxs)("main",{children:[(0,a.jsxs)("div",{className:"hero min-h-screen hero-pattern",children:[a.jsx("div",{className:"hero-content text-center",children:e?a.jsx(FileSelection,{}):(0,a.jsxs)("div",{className:"max-w-lg",children:[a.jsx(n(),{src:"/waves.png",className:"m-auto",width:125,height:100,alt:"logo"}),a.jsx("h1",{className:"text-7xl font-bold text-slate-800",children:"Astrorpheus"}),a.jsx("h2",{className:"text-2xl text-slate-500 font-semibold mt-2",children:"A Space Odyssey in Sound"}),a.jsx("p",{className:"py-6 text-lg",children:"Explore space in way you have never experienced before. Astrorpheus is a space odyssey in sound. Explore the cosmos through the sounds of the planets, stars, and other celestial bodies."}),(0,a.jsxs)("div",{className:"space-x-4",children:[a.jsx("button",{onClick:()=>s(!0),className:"btn text-slate-50 transition-all duration-500 bg-gradient-to-tl from-rose-400 via-fuchsia-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100",children:"Get Started"}),a.jsx("a",{className:"btn btn-outline",href:"/explore",children:"Explore"})]})]})}),a.jsx("a",{href:"#features",className:"absolute bottom-8",children:a.jsx(ChevronDown,{className:"animate-bounce",size:"lg"})})]}),a.jsx("div",{className:"bg-slate-950 min-h-screen pt-32 feature-pattern flex flex-col justify-center",id:"features",children:a.jsx("div",{className:"overflow-hidden py-24 sm:py-32",children:a.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2",children:[a.jsx("div",{className:"lg:pr-8 lg:pt-4",children:(0,a.jsxs)("div",{className:"lg:max-w-lg",children:[a.jsx("h2",{className:"font-semibold leading-7 text-3xl tracking-tight text-fuchsia-400",children:"Explore the cosmos"}),a.jsx("p",{className:"mt-6 text-lg leading-8 text-slate-400",children:"Embark on an otherworldly journey like never before with our cutting-edge feature! Upload your 2D space images and watch as they transcend into stunning 3D models. Dive into the cosmos with immersive soundscapes and explore the universe in a whole new dimension."}),(0,a.jsxs)("dl",{className:"mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-300 lg:max-w-none",children:[(0,a.jsxs)("div",{className:"relative pl-9",children:[(0,a.jsxs)("dt",{className:"inline font-semibold text-slate-50",children:[a.jsx("svg",{className:"absolute left-1 top-1 h-5 w-5 text-fuchsia-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z",clipRule:"evenodd"})}),"Upload your images."]}),(0,a.jsxs)("dd",{className:"inline",children:[" ","Space is vast and so are the possibilities. Upload your 2D images to get started."]})]}),(0,a.jsxs)("div",{className:"relative pl-9",children:[(0,a.jsxs)("dt",{className:"inline font-semibold text-slate-50",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"absolute left-1 top-1 h-5 w-5 text-fuchsia-600",children:a.jsx("path",{d:"M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z"})}),"Immerse yourself."]}),(0,a.jsxs)("dd",{className:"inline",children:[" ","Transcend into immersive 3D models and twinkling, melodic soundscapes."]})]}),(0,a.jsxs)("div",{className:"relative pl-9",children:[(0,a.jsxs)("dt",{className:"inline font-semibold text-slate-50",children:[a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"absolute left-1 top-1 h-5 w-5 text-fuchsia-600",children:a.jsx("path",{fillRule:"evenodd",d:"M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z",clipRule:"evenodd"})}),"Explore."]}),(0,a.jsxs)("dd",{className:"inline",children:[" ","Share your creations with the world and explore what others have created."]})]})]})]})}),a.jsx("img",{src:"/features-image.png",alt:"Product screenshot",className:"w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0",width:"2432",height:"1442"})]})})})})]})}},4165:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>l,__esModule:()=>n,default:()=>o});var a=t(7536);let r=(0,a.createProxy)(String.raw`/Users/mirmukhammadmirsodikov/Documents/Development/sandbox/NASASpaceApps2023/sonification-web-app/app/page.tsx`),{__esModule:n,$$typeof:l}=r,i=r.default,o=i}};var s=require("../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[818,863,893],()=>__webpack_exec__(3422));module.exports=t})();