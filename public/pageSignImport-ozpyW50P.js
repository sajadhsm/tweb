import{a as o,A as s,_ as r,S as m}from"./index-vPomZQnx.js";import{p as h}from"./putPreloader-gR5Sxp5Q.js";import{P as d}from"./page-LpAoM83r.js";let i;const g=async()=>{const{dcId:e,token:u,tgAddr:n}=i;let a;try{o.managers.apiManager.setBaseDcId(e);const t=await o.managers.apiManager.invokeApi("auth.importWebTokenAuthorization",{api_id:s.id,api_hash:s.hash,web_auth_token:u},{dcId:e,ignoreErrors:!0});t._==="auth.authorization"&&(o.managers.apiManager.setUser(t.user),a=r(()=>import("./pageIm-htxc-EuZ.js"),__vite__mapDeps([0,1,2,3]),import.meta.url))}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":{t.handled=!0,a=r(()=>import("./pagePassword-b9HsBTgI.js"),__vite__mapDeps([4,1,2,5,3,6,7,8,9]),import.meta.url);break}default:{console.error("authorization import error:",t);const p=m.authState._;p==="authStateSignIn"?a=r(()=>import("./pageSignIn-HW_rd61F.js"),__vite__mapDeps([10,1,2,5,3,11,6,8,12,13,14]),import.meta.url):p==="authStateSignQr"&&(a=r(()=>import("./pageSignQR-qdVNviy_.js").then(_=>_.a),__vite__mapDeps([13,1,2,3,6,5,14]),import.meta.url));break}}}location.hash=n?.trim()?"#?tgaddr="+encodeURIComponent(n):"",a&&a.then(t=>t.default.mount())},l=new d("page-signImport",!0,()=>{h(l.pageEl.firstElementChild,!0),g()},e=>{i=e,o.managers.appStateManager.pushToState("authState",{_:"authStateSignImport",data:i})});export{l as default};
//# sourceMappingURL=pageSignImport-ozpyW50P.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./pageIm-htxc-EuZ.js","./index-vPomZQnx.js","./index-a9cJFIqq.css","./page-LpAoM83r.js","./pagePassword-b9HsBTgI.js","./putPreloader-gR5Sxp5Q.js","./button-WMjxfvfX.js","./htmlToSpan-xJ1szuCq.js","./wrapEmojiText-EY4tBdob.js","./loginPage-fTMMkwhc.js","./pageSignIn-HW_rd61F.js","./countryInputField-HQv8dYSM.js","./scrollable-bkRNAagy.js","./pageSignQR-qdVNviy_.js","./textToSvgURL-Z4O-nL1S.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}