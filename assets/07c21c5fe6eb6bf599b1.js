"use strict";(self.webpackChunkc=self.webpackChunkc||[]).push([[365],{1365:(e,t,s)=>{s.r(t),s.d(t,{openSettingsPopup:()=>F});var n=s(5893),a=s(4047),r=s(5824),c=s(9391),o=s(3271),i=s(1996),l=s(4881),d=s(173);function h(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Account"}),(0,n.jsx)(j,{})]})})}function j(){const e=(0,l.k)(3);return(0,o.SZ)(e),e.hasLogged?(0,n.jsxs)(c.z,Object.assign({onClick:t=>(0,i.j)(t,a.oC,(t=>(0,n.jsxs)(d.Qb,Object.assign({onClick:t},{children:[(0,n.jsx)(d.HC,Object.assign({onClick:()=>e.updateUser()},{children:"Update"})),(0,n.jsx)(d.HC,Object.assign({onClick:()=>e.logout()},{children:"Logout"})),(0,n.jsx)(d.HC,Object.assign({onClick:()=>e.logoutAll()},{children:"Sign out of all sessions"}))]}))))},{children:[(0,n.jsx)("div",Object.assign({className:"soc"},{children:"twitch"})),e.username]})):(0,n.jsxs)(c.z,Object.assign({onClick:()=>e.authTwitch()},{children:[(0,n.jsx)("div",Object.assign({className:"soc"},{children:"twitch"})),"Login"]}))}var x=s(9917);class p{static delete(e){return(0,x.h)("storage",(t=>t.delete(e)))}static update(e,t){return(0,x.h)("storage",(s=>s.put(t,e)))}static get(e){return(0,x.h)("storage",(t=>t.get(e)))}}var u=s(7294),g=s(4938),m=s(7327);const b=1,f=["pastas","emotes","tags"];function v(e,t){var s,n,a;let[r,c,o]=t?[null!==(s=e.lastExportPastaId)&&void 0!==s?s:0,null!==(n=e.lastExportEmoteAdded)&&void 0!==n?n:0,null!==(a=e.lastExportTagId)&&void 0!==a?a:0]:[0,0,0];return new Promise(((e,s)=>{const n=(0,x.q)().transaction(f,"readonly");let a;n.objectStore("pastas").getAll(IDBKeyRange.lowerBound(r,!0)).onsuccess=function(){a=(0,m.Xz)(this.result)};let i=[];n.objectStore("emotes").openCursor(IDBKeyRange.lowerBound(c,!0)).onsuccess=function(){const e=this.result;e&&(c=e.key,i.push(e.value),e.continue())};let l=[];n.objectStore("tags").openCursor(IDBKeyRange.lowerBound(o,!0)).onsuccess=function(){const e=this.result;e&&(o=e.key,l.push(e.value),e.continue())},n.oncomplete=()=>{const s=Date.now();i=(0,m.Xz)(i),l=(0,m.Xz)(l);const n={stores:{pastas:a,emotes:i,tags:l},meta:{version:b,date:s,isPartial:t}},r=URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"plain/text"}));(0,g.LR)(r,"copypastas_"+(new Date).toLocaleString()+".json");const d={lastExportDate:s};a&&(d.lastExportPastaId=a[a.length-1].id),i&&(d.lastExportEmoteAdded=c),l&&(d.lastExportTagId=o),e(d)},n.onerror=s}))}var C=s(1426),k=function(e,t,s,n){return new(s||(s=Promise))((function(a,r){function c(e){try{i(n.next(e))}catch(e){r(e)}}function o(e){try{i(n.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(c,o)}i((n=n.apply(e,t||[])).next())}))};function w({type:e,name:t,source:s}){return`${e}:::${t}:::${s}`}function O(){return(0,g.ep)(!1).then((e=>e.item(0).text())).then((e=>JSON.parse(e))).then((e=>function(e){let t=e;for(let t=e.meta.version;t<b;t++)t+1;return t}(e))).then((e=>new Promise(((t,s)=>k(this,void 0,void 0,(function*(){const{meta:n,stores:r}=e,c=new Set;for(let e of yield(0,x.h)("emotes",(e=>e.getAll())))c.add(w(e));const o=(0,x.q)().transaction(f,"readwrite");if(r.pastas){const e=o.objectStore("pastas");for(let t of r.pastas)e.add(t)}if(r.emotes){const e=o.objectStore("emotes");for(let t of r.emotes)c.has(w(t))||e.add(t)}o.oncomplete=()=>{(0,a.E)("Completed"),t({lastExportDate:Date.now()})},o.onerror=s})))))).catch(C.d9)}function y(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Import and export"}),(0,n.jsx)("p",{children:"Do not forget to export data periodically (there were cases when the browser cleared the local database)"}),(0,n.jsx)(c.z,Object.assign({onClick:()=>{(0,a.EB)((()=>(0,n.jsx)(E,{})))}},{children:"Import and export"}))]})})}function E(){const[e,t]=(0,u.useState)({});function s(s){const n=Object.assign(Object.assign({},e),s);p.update("backup",n),(0,l.k)(0).getModel("favs").updatePage({withTags:!0,withTotal:!0}),t(n)}(0,u.useEffect)((()=>{p.get("backup").then((e=>e&&t(e)))}),[]);const{lastExportDate:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Import and export"}),(0,n.jsxs)("p",{children:["Export and import allows",":"]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Export pastes and transfer them to other browsers and devices",";"]}),(0,n.jsxs)("li",{children:["Create backups of the local database","."]})]}),r&&(0,n.jsxs)("p",{children:["The time of the last export or import: ",(0,n.jsx)("b",{children:new Date(r).toLocaleString()})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Full export"}),(0,n.jsx)("p",{children:"Full export of the local database"}),(0,n.jsx)(c.z,Object.assign({onClick:()=>v(e,!1).then(s)},{children:"Full export"}))]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Import"}),(0,n.jsx)("p",{children:"Import exported data into an existing database, all imported pastes, emojis, tags, etc. will be added as new."}),(0,n.jsx)(c.z,Object.assign({onClick:()=>O().then(s)},{children:"Import"}))]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Partial export"}),(0,n.jsx)("p",{children:"Only data added after the last export or import will be exported. It can be used to synchronize data between devices and browsers."}),(0,n.jsx)(c.z,Object.assign({onClick:()=>v(e,!0).then(s)},{children:"Partial export"}))]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Clear local storage"}),(0,n.jsx)("p",{children:"Clearing the corresponding section of the local database."}),(0,n.jsx)("p",{children:(0,n.jsx)(c.z,Object.assign({onClick:()=>(0,a.FW)("Clear local storage").then((()=>(0,l.k)(1).clear().then((()=>(0,l.k)(0).updateLayer("favs")))))},{children:"Clear all copypastas"}))}),(0,n.jsx)("p",{children:(0,n.jsx)(c.z,Object.assign({onClick:()=>(0,a.FW)("Clear all copypastas").then((()=>(0,l.k)(5).clear().then((()=>(0,l.k)(0).updateLayer("favs"))).then((()=>(0,l.k)(0).updateLayer("global")))))},{children:"Clear all emotes"}))}),(0,n.jsx)("p",{children:(0,n.jsx)(c.z,Object.assign({onClick:()=>(0,a.FW)("Clear all emotes").then((()=>(0,l.k)(4).clear().then((()=>(0,l.k)(0).updateLayer("favs"))).then((()=>(0,l.k)(0).updateLayer("global")))))},{children:"Clear all tags"}))})]})]})}var z=s(1611),S=s(4639),I=s(5732),D=s(2793);function L(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Tags"}),(0,n.jsx)("p",{children:"Tag settings"}),(0,n.jsx)(c.z,Object.assign({onClick:()=>{(0,a.EB)((()=>(0,n.jsx)(T,{})))}},{children:"Tags"}))]})})}function T(){const e=(0,l.k)(4);return(0,o.SZ)(e),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Tags"}),(0,n.jsx)("p",{children:"Tag customization allows you to add custom images and emojis to the tag"})]}),(0,n.jsx)(c.z,Object.assign({onClick:()=>(0,a.EB)(((e,t)=>u.createElement((()=>{const[s,a]=(0,u.useState)(""),[r,o]=(0,u.useState)(),i=()=>{if(0===s.length||!r||(0,l.k)(4).test(s))return(0,C.d9)();e({name:s,source:r.source,type:r.type})};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"New tag"}),(0,n.jsxs)("div",Object.assign({className:D.Z.gColumn},{children:[(0,n.jsx)(S.I,{value:s,onChange:a,placeholder:"Tag"}),(0,n.jsxs)(d.HC,{children:[(0,n.jsx)("div",{children:(r?"":"Icon")+(r&&s.length?"":" + ")+(s.length?s:"Tag")}),r&&(0,n.jsx)(I.A0,Object.assign({},r)),r&&(0,n.jsx)(c.z,Object.assign({className:"ic",selected:!0,onClick:()=>o(void 0)},{children:"delete"}))]}),(0,n.jsx)(z.ih,{handler:o}),(0,n.jsxs)("div",Object.assign({className:D.Z.gInline},{children:[(0,n.jsx)(c.z,Object.assign({onClick:i},{children:"Add"})),(0,n.jsx)(c.z,Object.assign({onClick:t},{children:"Cancel"}))]}))]}))]})})))).then((e=>(0,l.k)(4).add(e)))},{children:"Add"})),(0,n.jsxs)(d.aV,{children:[0===e.getData().length&&(0,n.jsx)("div",Object.assign({className:D.Z.gEmptyContainer},{children:"Empty"})),e.getData().map((t=>(0,n.jsxs)(d.HC,{children:[(0,n.jsx)("div",{children:t.name}),(0,n.jsx)(I.A0,Object.assign({},t)),(0,n.jsx)(c.z,Object.assign({className:"ic",onClick:()=>e.delete(t.name)},{children:"delete"}))]},t.name)))]})]})}function F(){return(0,r.k)("open_settings"),(0,a.EB)(((e,t)=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:"Settings"})}),(0,n.jsx)(h,{}),(0,n.jsx)(y,{}),(0,n.jsx)(L,{})]})))}}}]);