(()=>{var e={};e.id=312,e.ids=[312],e.modules={6864:e=>{function webpackEmptyContext(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id=6864,e.exports=webpackEmptyContext},1841:e=>{"use strict";e.exports=require("@aws-sdk/client-s3")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},5435:(e,t,i)=>{"use strict";i.r(t),i.d(t,{headerHooks:()=>f,originalPathname:()=>g,requestAsyncStorage:()=>m,routeModule:()=>l,serverHooks:()=>y,staticGenerationAsyncStorage:()=>w,staticGenerationBailout:()=>x});var n={};i.r(n),i.d(n,{GET:()=>GET,dynamic:()=>p}),i(5655);var a=i(3323),r=i(4647),o=i(1841),s=i(5038);let p="force-dynamic",u=new o.S3Client,d=process.env.S3_BUCKET;async function GET(e){let t;let i=[];do{let e=new o.ListObjectsV2Command({Bucket:d,ContinuationToken:t}),n=await u.send(e),a=n.Contents||[];i.push(...a),t=n.NextContinuationToken}while(t);let n=i.filter(e=>void 0!==e.LastModified&&e.Key?.includes(".png")).sort((e,t)=>e.LastModified&&t.LastModified?t.LastModified.getTime()-e.LastModified.getTime():0).slice(0,20);try{let e=await Promise.all(n.map(async e=>{let t=new o.GetObjectCommand({Bucket:d,Key:e.Key}),i=await (0,s.getSignedUrl)(u,t,{expiresIn:3600});return{url:i,fileName:e.Key?.split(".")[0]}}));return new Response(JSON.stringify(e||[]))}catch(e){return new Response(JSON.stringify([]))}}let c=a.AppRouteRouteModule,l=new c({definition:{kind:r.x.APP_ROUTE,page:"/api/images/route",pathname:"/api/images",filename:"route",bundlePath:"app/api/images/route"},resolvedPagePath:"/Users/ethan/dev/projects/sonification-web-client/app/api/images/route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:m,staticGenerationAsyncStorage:w,serverHooks:y,headerHooks:f,staticGenerationBailout:x}=l,g="/api/images/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[405,38],()=>__webpack_exec__(5435));module.exports=i})();