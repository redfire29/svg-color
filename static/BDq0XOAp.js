import{d as re,r as w,o as X,L as me,v as S,M as ge,c as ee,G as be,e as xe,t as $,x as i,N as j,B as te,O as ne,P as we,Q as ye,y as Ce,R as z,S as ke,z as le,A as Se}from"./DjcFHE2Z.js";const _e=Symbol.for("nuxt:client-only"),$e=re({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:o}){const n=w(!1);return X(()=>{n.value=!0}),me(_e,!0),s=>{var p;if(n.value)return(p=t.default)==null?void 0:p.call(t);const h=t.fallback||t.placeholder;if(h)return h();const d=s.fallback||s.placeholder||"",v=s.fallbackTag||s.placeholderTag||"span";return S(v,o,d)}}});function I(e,t,o){return Math.max(t,Math.min(e,o))}function Le(e,t){if(typeof e=="string"||typeof t=="string")return e===t;for(const o in e)if(e[o]!==t[o])return!1;return!0}function P(e){const t=[],o=e.length>5?2:1;for(let n=1;n<e.length;n+=o){const s=e.substring(n,n+o).repeat(o%2+1),h=parseInt(s,16);t.push(n===3*o+1?h/255:h)}return t.length===3&&t.push(1),{r:t[0],g:t[1],b:t[2],a:t[3]}}function se(e){const t=e.l/100,o=t+e.s/100*Math.min(t,1-t),n=o===0?0:200*(1-t/o);return{h:e.h,s:n,v:o*100,a:e.a}}function D(e){let t=e.h%360;t<0&&(t+=360);const o=e.s/100,n=e.l/100;return{r:K(0,t,o,n)*255,g:K(8,t,o,n)*255,b:K(4,t,o,n)*255,a:e.a}}function K(e,t,o,n){const s=(e+t/30)%12,h=o*Math.min(n,1-n);return n-h*Math.max(-1,Math.min(s-3,9-s,1))}function ce(e){const t=e.s/100,o=e.v/100,n=o*(1-t/2);return{h:e.h,s:n===0||n===1?0:(o-n)/Math.min(n,1-n)*100,l:n*100,a:e.a}}function ie(e){return{h:e.h,w:e.v*(100-e.s)/100,b:100-e.v,a:e.a}}function E(e){return D(ce(e))}function M(e){const t=e.w/100,o=e.b/100;let n,s;const h=t+o;return h>=1?(n=0,s=t/h):(s=1-o,n=(1-t/s)*100),{h:e.h,s:n,v:s*100,a:e.a}}function V(e){const{r:t,g:o,b:n,a:s}=e,h=Math.min(t,o,n),d=Math.max(t,o,n),v=d-h,p=(d+h)/2;let f=0;v!==0&&(d===t?f=(o-n)/v+(o<n?6:0):d===o?f=(n-t)/v+2:d===n&&(f=(t-o)/v+4),f*=60);let c=0;return p!==0&&p!==255&&(c=(d-p)/Math.min(p,255-p)),{h:f,s:c*100,l:p/255*100,a:s}}function R(e){return"#"+Object.values(e).map((t,o)=>Math.round(o===3?t*255:t).toString(16).padStart(2,"0")).join("")}function F(e){return ie(se(V(e)))}const Me={hex:{hex:e=>e,hsl:e=>V(P(e)),hsv:e=>M(F(P(e))),hwb:e=>F(P(e)),rgb:P},hsl:{hex:e=>R(D(e)),hsl:e=>e,hsv:se,hwb:e=>F(D(e)),rgb:D},hsv:{hex:e=>R(E(e)),hsl:ce,hsv:e=>e,hwb:ie,rgb:E},hwb:{hex:e=>R(E(M(e))),hsl:e=>V(E(M(e))),hsv:M,hwb:e=>e,rgb:e=>E(M(e))},rgb:{hex:R,hsl:V,hsv:e=>M(F(e)),hwb:F,rgb:e=>e}};function Te(e,t,o){return Me[e][t](o)}function Ae(e,t){const o=e.toFixed(t);return o.includes(".")?o.replace(/\.?0+$/,""):o}const Ne={deg:1,grad:.9,rad:180/Math.PI,turn:360},W={from(e){return e.endsWith("%")?T.from(e,{referenceValue:1}):C.from(e,{min:0,max:1})},to(e){return C.to(e)}},oe={from(e){const t=e.match(/deg|g?rad|turn$/);if(t===null)return C.from(e);const o=t[0];return C.from(e.slice(0,-o.length))*Ne[o]},to(e){return C.to(e)}},C={from(e,{min:t=Number.NEGATIVE_INFINITY,max:o=Number.POSITIVE_INFINITY}={}){return e.endsWith(".")?NaN:I(Number(e),t,o)},to(e){return Ae(e,2)}},T={from(e,{referenceValue:t=100,min:o=0,max:n=100}={}){return e.endsWith("%")?C.from(e.slice(0,-1),{min:o,max:n})*t/100:NaN},to(e){return C.to(e)+"%"}},Y={from(e){return e.endsWith("%")?T.from(e,{referenceValue:255}):C.from(e,{min:0,max:255})},to(e){return C.to(e)}},Ee={hsl:{h:oe,s:T,l:T,a:W},hwb:{h:oe,w:T,b:T,a:W},rgb:{r:Y,g:Y,b:Y,a:W}};function H(e,t){return Ee[e][t]}function G({format:e,color:t},o){if(e==="hex")return o&&[5,9].includes(t.length)?t.substring(0,t.length-(t.length-1)/4):t;const n=Object.entries(t).slice(0,o?3:4).map(([s,h])=>{const d=H(e,s);return(s==="a"?"/ ":"")+d.to(h)});return`${e}(${n.join(" ")})`}function ue(e){return/^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(e)}function Fe(e){return"r"in e?"rgb":"w"in e?"hwb":"v"in e?"hsv":"s"in e?"hsl":null}const ae={hsl:["h","s","l","a"],hwb:["h","w","b","a"],rgb:["r","g","b","a"]};function Ie(e){if(typeof e!="string"){const v=Fe(e);return v===null?null:{format:v,color:e}}if(e.startsWith("#"))return ue(e)?{format:"hex",color:e}:null;if(!e.includes("(")){const v=document.createElement("canvas").getContext("2d");v.fillStyle=e;const p=v.fillStyle;return p==="#000000"&&e!=="black"?null:{format:"hex",color:p}}const[t,o]=e.split("("),n=t.substring(0,3);if(!(n in ae))return null;const s=o.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");s.length===3&&s.push("1");const h=ae[n],d=Object.fromEntries(h.map((v,p)=>{const f=H(n,v);return[v,f.from(s[p])]}));return{format:n,color:d}}function Oe(e,t,o){const n=e.getBoundingClientRect(),s=t-n.left,h=o-n.top;return{x:n.width===0?0:I(s/n.width*100,0,100),y:n.height===0?0:I((1-h/n.height)*100,0,100)}}const je={class:"vacp-range-input-group"},ze=["for"],Pe={class:"vacp-range-input-label-text vacp-range-input-label-text--hue"},Re=["id","value"],De=["for"],Ve={class:"vacp-range-input-label-text vacp-range-input-label-text--alpha"},He=["id","value"],Be=i("span",{class:"vacp-visually-hidden"},"Copy color",-1),Ue=i("svg",{class:"vacp-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 32 32"},[i("path",{d:"M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z",fill:"currentColor"})],-1),Ke={class:"vacp-color-inputs"},We={class:"vacp-color-input-group"},Ye=["for"],Ge=i("span",{class:"vacp-color-input-label-text"}," Hex ",-1),Xe=["id","value"],qe=["id","for","onInput"],Qe={class:"vacp-color-input-label-text"},Je=["id","value","onInput"],Ze=i("span",{class:"vacp-visually-hidden"},"Switch format",-1),et=i("svg",{class:"vacp-icon","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"15"},[i("path",{d:"M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z",fill:"currentColor"})],-1),tt=re({__name:"ColorPicker",props:{color:{default:"#ffffffff"},id:{default:"color-picker"},visibleFormats:{default:()=>["hex","hsl","hwb","rgb"]},defaultFormat:{default:"hsl"},alphaChannel:{default:"show"}},emits:["color-change"],setup(e,{emit:t}){const o=["hex","hsl","hsv","hwb","rgb"],n=e,s=t,h=w(null),d=w(null),v=w(null);let p=!1;const f=w(n.visibleFormats.includes(n.defaultFormat)?n.defaultFormat:n.visibleFormats[0]),c=ge({hex:"#ffffffff",hsl:{h:0,s:0,l:100,a:1},hsv:{h:0,s:0,v:100,a:1},hwb:{h:0,w:100,b:0,a:1},rgb:{r:255,g:255,b:255,a:1}}),B=ee(function(){const l=Object.keys(c[f.value]);return f.value!=="hex"&&n.alphaChannel==="hide"?l.slice(0,3):l}),U=ee(function(){return n.alphaChannel==="hide"&&[5,9].includes(c.hex.length)?c.hex.substring(0,c.hex.length-(c.hex.length-1)/4):c.hex});be(()=>n.color,q),X(function(){document.addEventListener("mousemove",_,{passive:!1}),document.addEventListener("touchmove",A,{passive:!1}),document.addEventListener("mouseup",m),document.addEventListener("touchend",m),q(n.color)}),xe(function(){document.removeEventListener("mousemove",_),document.removeEventListener("touchmove",A),document.removeEventListener("mouseup",m),document.removeEventListener("touchend",m)});function b(){const l=(n.visibleFormats.findIndex(a=>a===f.value)+1)%n.visibleFormats.length;f.value=n.visibleFormats[l]}function g(l){p=!0,_(l)}function x(l){p=!0,A(l)}function m(){p=!1}function _(l){l.buttons!==1||p===!1||!(d.value instanceof HTMLElement)||N(d.value,l.clientX,l.clientY)}function A(l){if(p===!1||!(d.value instanceof HTMLElement))return;l.preventDefault();const a=l.touches[0];N(d.value,a.clientX,a.clientY)}function N(l,a,r){const u=Oe(l,a,r),y=Object.assign({},c.hsv);y.s=u.x,y.v=u.y,L("hsv",y)}function O(l){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(l.key))return;l.preventDefault();const a=["ArrowLeft","ArrowDown"].includes(l.key)?-1:1,r=["ArrowLeft","ArrowRight"].includes(l.key)?"s":"v",u=l.shiftKey?10:1,y=c.hsv[r]+a*u,k=Object.assign({},c.hsv);k[r]=I(y,0,100),L("hsv",k)}function q(l){const a=Ie(l);a!==null&&L(a.format,a.color)}function Q(l,a){const r=l.currentTarget,u=Object.assign({},c.hsv);u[a]=Number(r.value),L("hsv",u)}function he(l){const a=l.target;ue(a.value)&&L("hex",a.value)}function J(l,a){const r=l.target,u=f.value,y=Object.assign({},c[u]),k=H(u,a).from(r.value);Number.isNaN(k)||k===void 0||(y[a]=k,L(u,y))}function L(l,a){let r=a;if(n.alphaChannel==="hide")if(typeof a!="string")a.a=1,r=a;else if([5,9].includes(a.length)){const u=(a.length-1)/4;r=a.substring(0,a.length-u)+"f".repeat(u)}else[4,7].includes(a.length)&&(r=a+"f".repeat((a.length-1)/3));if(!Le(c[l],r)){c[l]=r;for(const u of o)u!==l&&(c[u]=Te(l,u,r));s("color-change",de())}h.value instanceof HTMLElement&&d.value instanceof HTMLElement&&v.value instanceof HTMLElement&&pe(h.value,d.value,v.value)}async function fe(){const l=c[f.value],a=n.alphaChannel==="hide",r=G({color:l,format:f.value},a);await window.navigator.clipboard.writeText(r)}function ve(l){const a=f.value;return H(a,l).to(c[a][l])}function pe(l,a,r){const u=G({format:"hsl",color:c.hsl},!1);l.style.setProperty("--vacp-color",u),a.style.position="relative",a.style.backgroundColor=`hsl(${c.hsl.h} 100% 50%)`,a.style.backgroundImage="linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)",r.style.boxSizing="border-box",r.style.position="absolute",r.style.left=`${c.hsv.s}%`,r.style.bottom=`${c.hsv.v}%`}function de(){const l=n.alphaChannel==="hide",a=G({color:c[f.value],format:f.value},l);return{colors:c,cssColor:a}}function Z(l){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(l.key)||!l.shiftKey)return;const a=l.currentTarget,r=Number(a.step),u=["ArrowLeft","ArrowDown"].includes(l.key)?-1:1,y=Number(a.value)+u*r*10,k=I(y,Number(a.min),Number(a.max));a.value=String(k-u*r)}return(l,a)=>($(),S("div",{ref_key:"colorPicker",ref:h,class:"vacp-color-picker"},[i("div",{ref_key:"colorSpace",ref:d,class:"vacp-color-space",onMousedown:g,onTouchstart:x},[i("div",{ref_key:"thumb",ref:v,class:"vacp-color-space-thumb",tabindex:"0","aria-label":"Color space thumb",onKeydown:O},null,544)],544),i("div",je,[i("label",{class:"vacp-range-input-label vacp-range-input-label--hue",for:`${l.id}-hue-slider`},[i("span",Pe,[j(l.$slots,"hue-range-input-label",{},()=>[te("Hue")])]),i("input",{id:`${l.id}-hue-slider`,class:"vacp-range-input vacp-range-input--hue",value:c.hsv.h,type:"range",min:"0",max:"360",step:"1",onKeydownPassive:Z,onInput:a[0]||(a[0]=r=>Q(r,"h"))},null,40,Re)],8,ze),l.alphaChannel==="show"?($(),S("label",{key:0,class:"vacp-range-input-label vacp-range-input-label--alpha",for:`${l.id}-alpha-slider`},[i("span",Ve,[j(l.$slots,"alpha-range-input-label",{},()=>[te("Alpha")])]),i("input",{id:`${l.id}-alpha-slider`,class:"vacp-range-input vacp-range-input--alpha",value:c.hsv.a,type:"range",min:"0",max:"1",step:"0.01",onKeydownPassive:Z,onInput:a[1]||(a[1]=r=>Q(r,"a"))},null,40,He)],8,De)):ne("",!0)]),i("button",{class:"vacp-copy-button",type:"button",onClick:fe},[j(l.$slots,"copy-button",{},()=>[Be,Ue])]),i("div",Ke,[i("div",We,[f.value==="hex"?($(),S("label",{key:0,class:"vacp-color-input-label",for:`${l.id}-color-hex`},[Ge,i("input",{id:`${l.id}-color-hex`,class:"vacp-color-input",type:"text",value:U.value,onInput:he},null,40,Xe)],8,Ye)):($(!0),S(we,{key:1},ye(B.value,r=>($(),S("label",{id:`${l.id}-color-${f.value}-${r}-label`,key:`${l.id}-color-${f.value}-${r}-label`,class:"vacp-color-input-label",for:`${l.id}-color-${f.value}-${r}`,onInput:u=>J(u,r)},[i("span",Qe,Ce(r.toUpperCase()),1),i("input",{id:`${l.id}-color-${f.value}-${r}`,class:"vacp-color-input",type:"text",value:ve(r),onInput:u=>J(u,r)},null,40,Je)],40,qe))),128))]),l.visibleFormats.length>1?($(),S("button",{key:0,class:"vacp-format-switch-button",type:"button",onClick:b},[j(l.$slots,"format-switch-button",{},()=>[Ze,et])])):ne("",!0)])],512))}}),nt={class:"flex items-start justify-between px-4 max-w-[1920px] pb-[64px]"},lt={class:"flex-none"},ot=["innerHTML"],at={class:"pl-2"},rt={class:"fixed flex bottom-0 left-0 right-0 p-2"},ct={__name:"index",setup(e){const t=w(!0),o=w("rgb(255 255 255 / 1)");w(-1);const n=b=>{o.value=b.cssColor,s.value&&B(s.value)},s=w(""),h=b=>{if(s.value=b.target,s.value){let g=s.value.getAttribute("fill");if(!g){const x=s.value.classList[0];if(x){const m=p.value.find(_=>_.selectorText===`.${x}`&&_.style.fill);m&&(o.value=m.style.fill)}}g&&(o.value=g)}},d=b=>{const g=b.target.files[0];if(g&&g.type==="image/svg+xml"){const x=new FileReader;x.onload=m=>{v.value=m.target.result},x.readAsText(g)}else alert("Please upload a valid SVG file.")};w([]);const v=w(""),p=w([]),f=w([]),c=w("");X(async()=>{const x=await(await fetch("test.svg")).text(),m=new DOMParser;c.value=m.parseFromString(x,"image/svg+xml"),c.value.querySelectorAll("style").forEach(A=>{const N=new CSSStyleSheet;N.replaceSync(A.textContent),Array.from(N.cssRules).forEach(O=>{p.value.push(O),f.value.push(O.style.fill)})}),v.value=new XMLSerializer().serializeToString(c.value.documentElement)});const B=b=>{b.setAttribute("class",""),b.setAttribute("fill",o.value)},U=()=>{const b=new XMLSerializer().serializeToString(document.querySelector("#svg-content svg")),g=new Blob([b],{type:"image/svg+xml"}),x=URL.createObjectURL(g),m=document.createElement("a");m.href=x,m.download="modified.svg",document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(x)};return(b,g)=>{const x=$e;return $(),S("div",null,[i("div",nt,[i("div",lt,[i("div",{id:"svg-content",innerHTML:z(v),onClick:h},null,8,ot)]),i("div",at,[i("div",{class:ke(["overflow-hidden",{"h-0":!z(t)}])},[le(x,null,{default:Se(()=>[le(z(tt),{"visible-formats":["rgb"],color:z(o),onColorChange:n},null,8,["color"])]),_:1})],2)])]),i("div",rt,[i("input",{class:"flex-1 cursor-pointer",type:"file",onChange:d,accept:".svg"},null,32),i("p",{class:"flex-1 p-2 text-center cursor-pointer inline-block mt-2 rounded-md bg-slate-700 text-white",onClick:g[0]||(g[0]=m=>U())},"Download SVG")])])}}};export{ct as default};
