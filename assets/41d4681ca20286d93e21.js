"use strict";(self.webpackChunkc=self.webpackChunkc||[]).push([[9],{5639:(e,t,n)=>{n.d(t,{Z:()=>s});const s={imgToolBlock:"_3ngoL",labelBlock:"FVQ43",labelBlockSmall:"ulH-j"}},8081:(e,t,n)=>{n.d(t,{F:()=>a});var s=n(5893),i=n(4593);function a({title:e,desc:t}){return(0,s.jsxs)(i.q,{children:[(0,s.jsx)("title",{children:e}),(0,s.jsx)("meta",{name:"description",content:t}),(0,s.jsx)("meta",{property:"og:title",content:e}),(0,s.jsx)("meta",{property:"og:description",content:t})]})}},1740:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var s=n(5893);function i(){return(0,s.jsxs)("div",{children:[(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{children:"ASCII image generator from image"}),(0,s.jsx)("h2",{children:"Tool description"}),(0,s.jsx)("p",{children:"Using this tool, you can generate an ASCII image with an arbitrary ASCII character width from the image. Each character of the generated image consists of braille dots and spaces."})]}),(0,s.jsxs)("section",{children:[(0,s.jsx)("h2",{children:"Options"}),(0,s.jsx)("p",{children:"The color threshold allows you to choose the optimal level at which the important contours of the original image will be involved in the generated ASCII image."}),(0,s.jsx)("p",{children:"The width parameter sets the thickness of a single character that makes up the final image."}),(0,s.jsx)("p",{children:'To invert the base color from which the points are generated, click on the "Invert" button.'})]})]})}var a=n(5639),r=n(5067),l=n(9391),o=n(4639),c=n(2146);var h=n(4938),d=n(7294),m=n(8400),g=n(1848),u=n(8081);function j(){const[e,t]=(0,d.useState)(128),[n,j]=(0,d.useState)(30),[x,v]=(0,d.useState)("[]"),[f,p]=(0,m.OT)(!1),[b,w]=(0,d.useState)(null),[y,k]=(0,d.useState)(""),[C,S]=(0,d.useState)("");(0,d.useEffect)((()=>{fetch("https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_fcbeed664f7c47d6ba3b57691275ef51/static/light/2.0").then((e=>e.blob())).then((e=>new File([e],""))).then(w)}),[]),(0,d.useEffect)((()=>{b&&function({file:e,threshold:t,width:n,reversed:s,space:i,fullDotSymbol:a}){return new Promise(((t,n)=>{const s=document.createElement("img");s.src=URL.createObjectURL(e.slice(0)),s.onload=()=>t(s),s.onerror=n})).then((e=>{const r=n;function l(e){if(2!=e.width||4!=e.height)throw TypeError();let n=[];for(let t=0;t<8;t++)n[t]=e.data.subarray(4*t,4*(t+1));n=[n[0],n[2],n[4],n[1],n[3],n[5],n[6],n[7]].map((e=>{const t=(e[0]+e[1]+e[2])/3;return s?255-t:t})).map((e=>+(e<t)));const r=10240+parseInt(n.reverse().join(""),2);return 10240===r?i:10495===r?a:String.fromCharCode(r)}var o=[];let c=Math.ceil(2*r*(e.height/e.width)/4);var h=document.createElement("canvas"),d=h.getContext("2d",{willReadFrequently:!0});h.width=2*r,h.height=4*c,d.drawImage(e,0,0,h.width,h.height);for(var m=0;m<h.height;m+=4){for(var g="",u=0;u<h.width;u+=2)g+=l(d.getImageData(u,m,2,4));o.push(g)}return o.join("\r\n")}))}({file:b,width:Number(n),threshold:e,reversed:f,space:y||"⠀",fullDotSymbol:C||"⣿"}).then((e=>v(JSON.stringify([e]))))}),[b,n,e,f,y,C]);const I=(0,d.useMemo)((()=>new g.f({content:x},!1)),[x]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(u.F,{title:"Ascii image generator",desc:"This tool allows you to generate an Ascii image based on an existing image"}),(0,s.jsx)(i,{}),(0,s.jsx)("section",{children:(0,s.jsxs)("div",Object.assign({className:a.Z.imgToolBlock},{children:[(0,s.jsxs)("div",Object.assign({className:a.Z.labelBlock,style:{width:"40%"}},{children:[(0,s.jsx)("div",{children:"Color threshold"}),(0,s.jsx)(c.R,{value:e,onEnter:t}),(0,s.jsx)("input",{style:{width:"100%"},type:"range",min:"0",max:"256",value:e,onChange:e=>t(Number(e.target.value))})]})),(0,s.jsxs)("div",Object.assign({className:a.Z.labelBlock,style:{width:"40%"}},{children:[(0,s.jsx)("div",{children:"Width"}),(0,s.jsx)(c.R,{value:n,min:1,max:2e3,onEnter:j}),(0,s.jsx)("input",{style:{width:"100%"},type:"range",min:"0",max:"256",value:n,onChange:e=>j(Number(e.target.value))})]})),(0,s.jsxs)("div",Object.assign({className:a.Z.labelBlock},{children:[(0,s.jsx)("div",{children:"Space symbol"}),(0,s.jsx)(o.I,{value:y,onChange:k,container:{style:{maxWidth:100}}})]})),(0,s.jsxs)("div",Object.assign({className:a.Z.labelBlock},{children:[(0,s.jsx)("div",{children:"Dot-filled symbol"}),(0,s.jsx)(o.I,{value:C,onChange:S,container:{style:{maxWidth:100}}})]})),(0,s.jsxs)("div",{children:[(0,s.jsx)(l.z,Object.assign({onClick:p},{children:"Invert"})),(0,s.jsx)(l.z,Object.assign({onClick:()=>(0,h.ep)(!1).then((e=>w(e.item(0))))},{children:"Upload"}))]})]}))}),(0,s.jsx)(r.f,{model:I})]})}}}]);