(()=>{var e={};e.id=607,e.ids=[607],e.modules={6864:e=>{function webpackEmptyContext(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id=6864,e.exports=webpackEmptyContext},1841:e=>{"use strict";e.exports=require("@aws-sdk/client-s3")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7388:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>d});var a=r(3137),n=r(4647),s=r(4183),i=r.n(s),o=r(1775),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let l=a.AppPageRouteModule,d=["",{children:["explore",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7170)),"/Users/ethan/dev/projects/sonification-web-client/app/explore/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,4998))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5966)),"/Users/ethan/dev/projects/sonification-web-client/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,4998))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/ethan/dev/projects/sonification-web-client/app/explore/page.tsx"],u="/explore/page",f={require:r,loadChunk:()=>Promise.resolve()},x=new l({definition:{kind:n.x.APP_PAGE,page:"/explore/page",pathname:"/explore",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1043:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1297,23))},7170:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Explore,dynamic:()=>c});var a=r(8144),n=r(4602),s=r.n(n),i=r(1841),o=r(5038);let c="force-dynamic",l=new i.S3Client({region:process.env.AWS_DEFAULT_REGION}),d=process.env.S3_BUCKET;async function getThumbnails(){let e=await Promise.all(["a33025de-eeb9-4606-aec2-8af102753913.png","7d08332b-37a1-4524-9238-b93e48b939d4.png","1344cc81-5835-4340-bf74-1de400d881f6.png","94039711-3b8b-4884-a67c-5e8dcba2e490.png","06db2ad9-9c4e-4a80-9174-56a7e71d2646.png","3cb4ac06-9874-4999-9781-f733b263d36a.png","a9bf22cd-242f-4834-8ed5-5be817544583.png","bd48df5e-ee40-4669-8b33-57ef6acf1210.png","84a0579b-e34e-4e70-a736-e662b2956790.png","1250ccf8-2b15-4290-87e4-962e5d352c90.png","36b6f5d3-7c9f-4490-8320-adbf333215d9.png","75cce2f8-dc5b-49f0-920f-d6082fa2756a.png","4244bcfb-0352-4402-aa4f-b41138d352ff.png","30083357-1f72-443b-83a7-f0e68c2173e7.png","c896c43e-af06-4d45-9e1d-d47ea370c2e8.png","fa68de26-4cd3-4054-abd5-6cae6f66f090.png","cee9be4c-6152-403d-9bf9-8fbf95d8e91b.png","sun.png","star-cluster.png","asteroid.png"].map(async e=>{let t=new i.GetObjectCommand({Bucket:d,Key:e}),r=await (0,o.getSignedUrl)(l,t,{expiresIn:3600});return{url:r,fileName:e.split(".")[0]}}));return e}async function Explore(){let e=await getThumbnails();return(0,a.jsxs)("div",{className:"container pt-20",children:[a.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Our Curated Collection"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4",children:e&&e.map((e,t)=>a.jsx(s(),{href:e.fileName??"",children:a.jsx("div",{className:"h-52 w-52 shadow-xl mx-auto overflow-hidden",children:a.jsx("img",{className:"rounded-lg object-cover h-full w-full",alt:"Model Thumbnail",src:e.url})})},`model-${t}`))})]})}},4998:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=r(6885);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"icon.png");return[{type:"image/png",sizes:"127x80",url:t+"?d2b05ec441a48fa6"}]}}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[818,38,885,667],()=>__webpack_exec__(7388));module.exports=r})();