import{r as b,w as qt,x as pe,y as O,O as Tt,U as be,z as _e,A as oe,C as Wn,D as Gn,E as Kn,H as M,I as je,R as De,K as Xn,N as Le,Q as Jn,S as Yn,V as Qn,W as xe,X as $e,Y as A,Z as Zn,_ as es,$ as ts,a0 as ns,a1 as et,a2 as ss,a3 as rs,a4 as is,a5 as as,j as o,g as K,a6 as ct,G as ye,a7 as os,a8 as ut,i as ls,a9 as Wt,aa as cs,ab as us,a as Gt,ac as Kt,ad as Xt,T as he,ae as ds,B as Z,J as F,b as hs,af as Oe,ag as fs,u as dt,P as Jt,h as Yt,ah as tt,ai as Qt,aj as Zt,ak as ht,al as Pe,k as en,l as tn,m as nn,f as ps,L as ms,am as gs}from"./index-CvgQaTfO.js";import{C as sn,T as bs}from"./Title-Bcosy7lF.js";import{T as _s}from"./Tabs-CbSxrTo6.js";import{b as xs,c as ys,d as vs,e as rn,f as ws,g as Ts}from"./taskApiSlice-q39a5GBi.js";import{U as an}from"./UserInfo--eEtOHP_.js";import"bcryptjs";function on(e,t){let[n,s]=b.useState(e),r=qt(e);return pe(()=>s(r.current),[r,s,...t]),n}function Ss(e,t,n){let[s,r]=b.useState(n),i=e!==void 0,a=b.useRef(i),l=b.useRef(!1),c=b.useRef(!1);return i&&!a.current&&!l.current?(l.current=!0,a.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!i&&a.current&&!c.current&&(c.current=!0,a.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[i?e:s,O(u=>(i||r(u),t==null?void 0:t(u)))]}function ln(e={},t=null,n=[]){for(let[s,r]of Object.entries(e))un(n,cn(t,s),r);return n}function cn(e,t){return e?e+"["+t+"]":t}function un(e,t,n){if(Array.isArray(n))for(let[s,r]of n.entries())un(e,cn(t,s.toString()),r);else n instanceof Date?e.push([t,n.toISOString()]):typeof n=="boolean"?e.push([t,n?"1":"0"]):typeof n=="string"?e.push([t,n]):typeof n=="number"?e.push([t,`${n}`]):n==null?e.push([t,""]):ln(n,t,e)}var Es=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Es||{}),Rs=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Rs||{}),Is=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Is||{}),Ns=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ns||{});function Ve(e,t=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,s=as(t(e.options.slice()),i=>i.dataRef.current.domRef.current),r=n?s.indexOf(n):null;return r===-1&&(r=null),{options:s,activeOptionIndex:r}}let Ds={1(e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},0(e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let t=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,s=e.options.findIndex(r=>n(r.dataRef.current.value));return s!==-1&&(t=s),{...e,listboxState:0,activeOptionIndex:t}},2(e,t){var n;if(e.dataRef.current.disabled||e.listboxState===1)return e;let s=Ve(e),r=is(t,{resolveItems:()=>s.options,resolveActiveIndex:()=>s.activeOptionIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled});return{...e,...s,searchQuery:"",activeOptionIndex:r,activationTrigger:(n=t.trigger)!=null?n:1}},3:(e,t)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,s=e.searchQuery+t.value.toLowerCase(),r=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(a=>{var l;return!a.dataRef.current.disabled&&((l=a.dataRef.current.textValue)==null?void 0:l.startsWith(s))}),i=r?e.options.indexOf(r):-1;return i===-1||i===e.activeOptionIndex?{...e,searchQuery:s}:{...e,searchQuery:s,activeOptionIndex:i,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5:(e,t)=>{let n={id:t.id,dataRef:t.dataRef},s=Ve(e,r=>[...r,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(t.dataRef.current.value)&&(s.activeOptionIndex=s.options.indexOf(n)),{...e,...s}},6:(e,t)=>{let n=Ve(e,s=>{let r=s.findIndex(i=>i.id===t.id);return r!==-1&&s.splice(r,1),s});return{...e,...n,activationTrigger:1}},7:(e,t)=>({...e,labelId:t.id})},ft=b.createContext(null);ft.displayName="ListboxActionsContext";function ve(e){let t=b.useContext(ft);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ve),n}return t}let pt=b.createContext(null);pt.displayName="ListboxDataContext";function we(e){let t=b.useContext(pt);if(t===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,we),n}return t}function Os(e,t){return oe(t.type,Ds,e,t)}let As=b.Fragment;function Cs(e,t){let{value:n,defaultValue:s,form:r,name:i,onChange:a,by:l=(v,N)=>v===N,disabled:c=!1,horizontal:u=!1,multiple:f=!1,...m}=e;const _=u?"horizontal":"vertical";let x=_e(t),[d=f?[]:void 0,g]=Ss(n,a,s),[h,p]=b.useReducer(Os,{dataRef:b.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),y=b.useRef({static:!1,hold:!1}),T=b.useRef(null),S=b.useRef(null),C=b.useRef(null),I=O(typeof l=="string"?(v,N)=>{let j=l;return(v==null?void 0:v[j])===(N==null?void 0:N[j])}:l),P=b.useCallback(v=>oe(w.mode,{1:()=>d.some(N=>I(N,v)),0:()=>I(d,v)}),[d]),w=b.useMemo(()=>({...h,value:d,disabled:c,mode:f?1:0,orientation:_,compare:I,isSelected:P,optionsPropsRef:y,labelRef:T,buttonRef:S,optionsRef:C}),[d,c,f,h]);pe(()=>{h.dataRef.current=w},[w]),Wn([w.buttonRef,w.optionsRef],(v,N)=>{var j;p({type:1}),Gn(N,Kn.Loose)||(v.preventDefault(),(j=w.buttonRef.current)==null||j.focus())},w.listboxState===0);let V=b.useMemo(()=>({open:w.listboxState===0,disabled:c,value:d}),[w,c,d]),Ee=O(v=>{let N=w.options.find(j=>j.id===v);N&&re(N.dataRef.current.value)}),$=O(()=>{if(w.activeOptionIndex!==null){let{dataRef:v,id:N}=w.options[w.activeOptionIndex];re(v.current.value),p({type:2,focus:M.Specific,id:N})}}),ne=O(()=>p({type:0})),U=O(()=>p({type:1})),se=O((v,N,j)=>v===M.Specific?p({type:2,focus:M.Specific,id:N,trigger:j}):p({type:2,focus:v,trigger:j})),Re=O((v,N)=>(p({type:5,id:v,dataRef:N}),()=>p({type:6,id:v}))),ze=O(v=>(p({type:7,id:v}),()=>p({type:7,id:null}))),re=O(v=>oe(w.mode,{0(){return g==null?void 0:g(v)},1(){let N=w.value.slice(),j=N.findIndex(Ne=>I(Ne,v));return j===-1?N.push(v):N.splice(j,1),g==null?void 0:g(N)}})),q=O(v=>p({type:3,value:v})),Hn=O(()=>p({type:4})),zn=b.useMemo(()=>({onChange:re,registerOption:Re,registerLabel:ze,goToOption:se,closeListbox:U,openListbox:ne,selectActiveOption:$,selectOption:Ee,search:q,clearSearch:Hn}),[]),Vn={ref:x},Ie=b.useRef(null),qn=je();return b.useEffect(()=>{Ie.current&&s!==void 0&&qn.addEventListener(Ie.current,"reset",()=>{g==null||g(s)})},[Ie,g]),De.createElement(ft.Provider,{value:zn},De.createElement(pt.Provider,{value:w},De.createElement(Xn,{value:oe(w.listboxState,{0:Le.Open,1:Le.Closed})},i!=null&&d!=null&&ln({[i]:d}).map(([v,N],j)=>De.createElement(Jn,{features:Yn.Hidden,ref:j===0?Ne=>{var wt;Ie.current=(wt=Ne==null?void 0:Ne.closest("form"))!=null?wt:null}:void 0,...Qn({key:v,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:r,disabled:c,name:v,value:N})})),xe({ourProps:Vn,theirProps:m,slot:V,defaultTag:As,name:"Listbox"}))))}let js="button";function Ls(e,t){var n;let s=$e(),{id:r=`headlessui-listbox-button-${s}`,...i}=e,a=we("Listbox.Button"),l=ve("Listbox.Button"),c=_e(a.buttonRef,t),u=je(),f=O(h=>{switch(h.key){case A.Space:case A.Enter:case A.ArrowDown:h.preventDefault(),l.openListbox(),u.nextFrame(()=>{a.value||l.goToOption(M.First)});break;case A.ArrowUp:h.preventDefault(),l.openListbox(),u.nextFrame(()=>{a.value||l.goToOption(M.Last)});break}}),m=O(h=>{switch(h.key){case A.Space:h.preventDefault();break}}),_=O(h=>{if(Zn(h.currentTarget))return h.preventDefault();a.listboxState===0?(l.closeListbox(),u.nextFrame(()=>{var p;return(p=a.buttonRef.current)==null?void 0:p.focus({preventScroll:!0})})):(h.preventDefault(),l.openListbox())}),x=on(()=>{if(a.labelId)return[a.labelId,r].join(" ")},[a.labelId,r]),d=b.useMemo(()=>({open:a.listboxState===0,disabled:a.disabled,value:a.value}),[a]),g={ref:c,id:r,type:es(e,a.buttonRef),"aria-haspopup":"listbox","aria-controls":(n=a.optionsRef.current)==null?void 0:n.id,"aria-expanded":a.listboxState===0,"aria-labelledby":x,disabled:a.disabled,onKeyDown:f,onKeyUp:m,onClick:_};return xe({ourProps:g,theirProps:i,slot:d,defaultTag:js,name:"Listbox.Button"})}let Ps="label";function Us(e,t){let n=$e(),{id:s=`headlessui-listbox-label-${n}`,...r}=e,i=we("Listbox.Label"),a=ve("Listbox.Label"),l=_e(i.labelRef,t);pe(()=>a.registerLabel(s),[s]);let c=O(()=>{var f;return(f=i.buttonRef.current)==null?void 0:f.focus({preventScroll:!0})}),u=b.useMemo(()=>({open:i.listboxState===0,disabled:i.disabled}),[i]);return xe({ourProps:{ref:l,id:s,onClick:c},theirProps:r,slot:u,defaultTag:Ps,name:"Listbox.Label"})}let Bs="ul",Ms=Tt.RenderStrategy|Tt.Static;function ks(e,t){var n;let s=$e(),{id:r=`headlessui-listbox-options-${s}`,...i}=e,a=we("Listbox.Options"),l=ve("Listbox.Options"),c=_e(a.optionsRef,t),u=je(),f=je(),m=ts(),_=m!==null?(m&Le.Open)===Le.Open:a.listboxState===0;b.useEffect(()=>{var p;let y=a.optionsRef.current;y&&a.listboxState===0&&y!==((p=ns(y))==null?void 0:p.activeElement)&&y.focus({preventScroll:!0})},[a.listboxState,a.optionsRef]);let x=O(p=>{switch(f.dispose(),p.key){case A.Space:if(a.searchQuery!=="")return p.preventDefault(),p.stopPropagation(),l.search(p.key);case A.Enter:if(p.preventDefault(),p.stopPropagation(),a.activeOptionIndex!==null){let{dataRef:y}=a.options[a.activeOptionIndex];l.onChange(y.current.value)}a.mode===0&&(l.closeListbox(),et().nextFrame(()=>{var y;return(y=a.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})}));break;case oe(a.orientation,{vertical:A.ArrowDown,horizontal:A.ArrowRight}):return p.preventDefault(),p.stopPropagation(),l.goToOption(M.Next);case oe(a.orientation,{vertical:A.ArrowUp,horizontal:A.ArrowLeft}):return p.preventDefault(),p.stopPropagation(),l.goToOption(M.Previous);case A.Home:case A.PageUp:return p.preventDefault(),p.stopPropagation(),l.goToOption(M.First);case A.End:case A.PageDown:return p.preventDefault(),p.stopPropagation(),l.goToOption(M.Last);case A.Escape:return p.preventDefault(),p.stopPropagation(),l.closeListbox(),u.nextFrame(()=>{var y;return(y=a.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})});case A.Tab:p.preventDefault(),p.stopPropagation();break;default:p.key.length===1&&(l.search(p.key),f.setTimeout(()=>l.clearSearch(),350));break}}),d=on(()=>{var p;return(p=a.buttonRef.current)==null?void 0:p.id},[a.buttonRef.current]),g=b.useMemo(()=>({open:a.listboxState===0}),[a]),h={"aria-activedescendant":a.activeOptionIndex===null||(n=a.options[a.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":a.mode===1?!0:void 0,"aria-labelledby":d,"aria-orientation":a.orientation,id:r,onKeyDown:x,role:"listbox",tabIndex:0,ref:c};return xe({ourProps:h,theirProps:i,slot:g,defaultTag:Bs,features:Ms,visible:_,name:"Listbox.Options"})}let $s="li";function Fs(e,t){let n=$e(),{id:s=`headlessui-listbox-option-${n}`,disabled:r=!1,value:i,...a}=e,l=we("Listbox.Option"),c=ve("Listbox.Option"),u=l.activeOptionIndex!==null?l.options[l.activeOptionIndex].id===s:!1,f=l.isSelected(i),m=b.useRef(null),_=ss(m),x=qt({disabled:r,value:i,domRef:m,get textValue(){return _()}}),d=_e(t,m);pe(()=>{if(l.listboxState!==0||!u||l.activationTrigger===0)return;let I=et();return I.requestAnimationFrame(()=>{var P,w;(w=(P=m.current)==null?void 0:P.scrollIntoView)==null||w.call(P,{block:"nearest"})}),I.dispose},[m,u,l.listboxState,l.activationTrigger,l.activeOptionIndex]),pe(()=>c.registerOption(s,x),[x,s]);let g=O(I=>{if(r)return I.preventDefault();c.onChange(i),l.mode===0&&(c.closeListbox(),et().nextFrame(()=>{var P;return(P=l.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})}))}),h=O(()=>{if(r)return c.goToOption(M.Nothing);c.goToOption(M.Specific,s)}),p=rs(),y=O(I=>p.update(I)),T=O(I=>{p.wasMoved(I)&&(r||u||c.goToOption(M.Specific,s,0))}),S=O(I=>{p.wasMoved(I)&&(r||u&&c.goToOption(M.Nothing))}),C=b.useMemo(()=>({active:u,selected:f,disabled:r}),[u,f,r]);return xe({ourProps:{id:s,ref:d,role:"option",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,"aria-selected":f,disabled:void 0,onClick:g,onFocus:h,onPointerEnter:y,onMouseEnter:y,onPointerMove:T,onMouseMove:T,onPointerLeave:S,onMouseLeave:S},theirProps:a,slot:C,defaultTag:$s,name:"Listbox.Option"})}let Hs=be(Cs),zs=be(Ls),Vs=be(Us),qs=be(ks),Ws=be(Fs),G=Object.assign(Hs,{Button:zs,Label:Vs,Options:qs,Option:Ws});const qe=({label:e,className:t})=>o.jsxs("div",{className:"w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between",children:[o.jsxs("div",{className:"flex gap-2 items-center",children:[o.jsx("div",{className:K("w-4 h-4 rounded-full ",t)}),o.jsx("p",{className:"text-sm md:text-base text-gray-600",children:e})]}),o.jsx("button",{className:"hidden md:block",children:o.jsx(ct,{className:"text-lg text-black"})})]});function Gs(e){return ye({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{fill:"#D9D9D9",d:"M159 768h612.3l103.4-256H262.3z"},child:[]},{tag:"path",attr:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"},child:[]}]})(e)}function dn(e){return ye({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"},child:[]}]})(e)}function Ks(e){return ye({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"},child:[]}]})(e)}function Xs(e){return ye({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"},child:[]},{tag:"path",attr:{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"},child:[]}]})(e)}function Js(e){return ye({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"},child:[]}]})(e)}new Date("2023-01-15").toISOString(),new Date("2023-01-15").toISOString(),new Date("2023-01-15").toISOString(),new Date("2024-01-15").toISOString(),new Date("2023-01-15").toISOString(),new Date("2023-01-15").toISOString();const Ys=({setTeam:e,team:t})=>{const{data:n,isLoading:s}=os(),[r,i]=b.useState([]),a=l=>{i(l),e(l==null?void 0:l.map(c=>c._id))};return b.useEffect(()=>{(t==null?void 0:t.length)<1?n&&i([n[0]]):i(t)},[s]),o.jsxs("div",{children:[o.jsx("p",{className:"text-gray-700",children:"Assign Task To: "}),o.jsx(G,{value:r,onChange:l=>a(l),multiple:!0,children:o.jsxs("div",{className:"relative mt-1",children:[o.jsxs(G.Button,{className:"relative w-full cursor-default rounded bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-300 sm:text-sm",children:[o.jsx("span",{className:"block truncate",children:r==null?void 0:r.map(l=>l.name).join(", ")}),o.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:o.jsx(dn,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),o.jsx(ut,{as:b.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:o.jsx(G.Options,{className:"z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:n==null?void 0:n.map((l,c)=>o.jsx(G.Option,{className:({active:u})=>`relative cursor-default select-none py-2 pl-10 pr-4. ${u?"bg-amber-100 text-amber-900":"text-gray-900"} `,value:l,children:({selected:u})=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:K("flex items-center gap-2 truncate",u?"font-medium":"font-normal"),children:[o.jsx("div",{className:"w-6 h-6 rounded-full text-white flex items-center justify-center bg-violet-600",children:o.jsx("span",{className:"text-center text-[10px]",children:ls(l.name)})}),o.jsx("span",{children:l.name})]}),u?o.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",children:o.jsx(Wt,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},c))})})]})})]})},St=({lists:e,selected:t,setSelected:n,label:s})=>o.jsxs("div",{className:"w-full",children:[s&&o.jsx("p",{className:"text-slate-900 dark:text-gray-500",children:s}),o.jsx(G,{value:t,onChange:n,children:o.jsxs("div",{className:"relative mt-1",children:[o.jsxs(G.Button,{className:"relative w-full cursor-default rounded bg-white pl-3 pr-10 text-left px-3 py-2.5 2xl:py-3 border border-gray-300 sm:text-sm",children:[o.jsx("span",{className:"block truncate",children:t}),o.jsx("span",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",children:o.jsx(dn,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})})]}),o.jsx(ut,{as:b.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:o.jsx(G.Options,{className:"z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:e.map((r,i)=>o.jsx(G.Option,{className:({active:a})=>`relative cursor-default select-none py-2 pl-10 pr-4 ${a?"bg-amber-100 text-amber-900":"text-gray-900"}`,value:r,children:({selected:a})=>o.jsxs(o.Fragment,{children:[o.jsx("span",{className:`block truncate ${a?"font-medium":"font-normal"}`,children:r}),a?o.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",children:o.jsx(Wt,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},i))})})]})})]}),Et=globalThis||void 0||self;var Rt={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Qs=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],a=e[n++],l=e[n++],c=((r&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],a=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return t.join("")},fn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],a=r+1<e.length,l=a?e[r+1]:0,c=r+2<e.length,u=c?e[r+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let _=(l&15)<<2|u>>6,x=u&63;c||(x=64,a||(_=64)),s.push(n[f],n[m],n[_],n[x])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(hn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Qs(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],l=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const m=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||l==null||u==null||m==null)throw new Zs;const _=i<<2|l>>4;if(s.push(_),u!==64){const x=l<<4&240|u>>2;if(s.push(x),m!==64){const d=u<<6&192|m;s.push(d)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Zs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const er=function(e){const t=hn(e);return fn.encodeByteArray(t,!0)},Ue=function(e){return er(e).replace(/\./g,"")},tr=function(e){try{return fn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof Et<"u")return Et;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=()=>nr().__FIREBASE_DEFAULTS__,rr=()=>{if(typeof cs>"u"||typeof Rt>"u")return;const e=Rt.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ir=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&tr(e[1]);return t&&JSON.parse(t)},pn=()=>{try{return sr()||rr()||ir()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ar=e=>{var t,n;return(n=(t=pn())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},or=e=>{const t=ar(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},mn=()=>{var e;return(e=pn())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ue(JSON.stringify(n)),Ue(JSON.stringify(a)),""].join(".")}function ur(){try{return typeof indexedDB=="object"}catch{return!1}}function dr(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="FirebaseError";class ce extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=hr,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],a=i?fr(i,s):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new ce(r,l,s)}}function fr(e,t){return e.replace(pr,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const pr=/\{\$([^}]+)}/g;function nt(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],a=t[r];if(It(i)&&It(a)){if(!nt(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function It(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){return e&&e._delegate?e._delegate:e}class me{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new lr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(br(t))try{this.getOrInitializeService({instanceIdentifier:Y})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=Y){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Y){return this.instances.has(t)}getOptions(t=Y){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&a.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&t(a,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:gr(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Y){return this.component?this.component.multipleInstances?t:Y:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gr(e){return e===Y?void 0:e}function br(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new mr(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(E||(E={}));const xr={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},yr=E.INFO,vr={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},wr=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=vr[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Tr{constructor(t){this.name=t,this._logLevel=yr,this._logHandler=wr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in E))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...t),this._logHandler(this,E.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...t),this._logHandler(this,E.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,E.INFO,...t),this._logHandler(this,E.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,E.WARN,...t),this._logHandler(this,E.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...t),this._logHandler(this,E.ERROR,...t)}}const Sr=(e,t)=>t.some(n=>e instanceof n);let Nt,Dt;function Er(){return Nt||(Nt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rr(){return Dt||(Dt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bn=new WeakMap,st=new WeakMap,_n=new WeakMap,We=new WeakMap,mt=new WeakMap;function Ir(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{n(X(e.result)),r()},a=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&bn.set(n,e)}).catch(()=>{}),mt.set(t,e),t}function Nr(e){if(st.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});st.set(e,t)}let rt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return st.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_n.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return X(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Dr(e){rt=e(rt)}function Or(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Ge(this),t,...n);return _n.set(s,t.sort?t.sort():[t]),X(s)}:Rr().includes(e)?function(...t){return e.apply(Ge(this),t),X(bn.get(this))}:function(...t){return X(e.apply(Ge(this),t))}}function Ar(e){return typeof e=="function"?Or(e):(e instanceof IDBTransaction&&Nr(e),Sr(e,Er())?new Proxy(e,rt):e)}function X(e){if(e instanceof IDBRequest)return Ir(e);if(We.has(e))return We.get(e);const t=Ar(e);return t!==e&&(We.set(e,t),mt.set(t,e)),t}const Ge=e=>mt.get(e);function Cr(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(e,t),l=X(a);return s&&a.addEventListener("upgradeneeded",c=>{s(X(a.result),c.oldVersion,c.newVersion,X(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const jr=["get","getKey","getAll","getAllKeys","count"],Lr=["put","add","delete","clear"],Ke=new Map;function Ot(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ke.get(t))return Ke.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Lr.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||jr.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return Ke.set(t,i),i}Dr(e=>({...e,get:(t,n,s)=>Ot(t,n)||e.get(t,n,s),has:(t,n)=>!!Ot(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ur(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ur(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const it="@firebase/app",At="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new Tr("@firebase/app"),Br="@firebase/app-compat",Mr="@firebase/analytics-compat",kr="@firebase/analytics",$r="@firebase/app-check-compat",Fr="@firebase/app-check",Hr="@firebase/auth",zr="@firebase/auth-compat",Vr="@firebase/database",qr="@firebase/database-compat",Wr="@firebase/functions",Gr="@firebase/functions-compat",Kr="@firebase/installations",Xr="@firebase/installations-compat",Jr="@firebase/messaging",Yr="@firebase/messaging-compat",Qr="@firebase/performance",Zr="@firebase/performance-compat",ei="@firebase/remote-config",ti="@firebase/remote-config-compat",ni="@firebase/storage",si="@firebase/storage-compat",ri="@firebase/firestore",ii="@firebase/firestore-compat",ai="firebase",oi="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="[DEFAULT]",li={[it]:"fire-core",[Br]:"fire-core-compat",[kr]:"fire-analytics",[Mr]:"fire-analytics-compat",[Fr]:"fire-app-check",[$r]:"fire-app-check-compat",[Hr]:"fire-auth",[zr]:"fire-auth-compat",[Vr]:"fire-rtdb",[qr]:"fire-rtdb-compat",[Wr]:"fire-fn",[Gr]:"fire-fn-compat",[Kr]:"fire-iid",[Xr]:"fire-iid-compat",[Jr]:"fire-fcm",[Yr]:"fire-fcm-compat",[Qr]:"fire-perf",[Zr]:"fire-perf-compat",[ei]:"fire-rc",[ti]:"fire-rc-compat",[ni]:"fire-gcs",[si]:"fire-gcs-compat",[ri]:"fire-fst",[ii]:"fire-fst-compat","fire-js":"fire-js",[ai]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=new Map,ci=new Map,ot=new Map;function Ct(e,t){try{e.container.addComponent(t)}catch(n){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Me(e){const t=e.name;if(ot.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;ot.set(t,e);for(const n of Be.values())Ct(n,e);for(const n of ci.values())Ct(n,e);return!0}function ui(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},J=new gn("app","Firebase",di);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new me("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw J.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=oi;function xn(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:at,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw J.create("bad-app-name",{appName:String(r)});if(n||(n=mn()),!n)throw J.create("no-options");const i=Be.get(r);if(i){if(nt(n,i.options)&&nt(s,i.config))return i;throw J.create("duplicate-app",{appName:r})}const a=new _r(r);for(const c of ot.values())a.addComponent(c);const l=new hi(n,s,a);return Be.set(r,l),l}function pi(e=at){const t=Be.get(e);if(!t&&e===at&&mn())return xn();if(!t)throw J.create("no-app",{appName:e});return t}function le(e,t,n){var s;let r=(s=li[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const l=[`Unable to register library "${r}" with version "${t}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(l.join(" "));return}Me(new me(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi="firebase-heartbeat-database",gi=1,ge="firebase-heartbeat-store";let Xe=null;function yn(){return Xe||(Xe=Cr(mi,gi,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ge)}catch(n){console.warn(n)}}}}).catch(e=>{throw J.create("idb-open",{originalErrorMessage:e.message})})),Xe}async function bi(e){try{const n=(await yn()).transaction(ge),s=await n.objectStore(ge).get(vn(e));return await n.done,s}catch(t){if(t instanceof ce)ee.warn(t.message);else{const n=J.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(n.message)}}}async function jt(e,t){try{const s=(await yn()).transaction(ge,"readwrite");await s.objectStore(ge).put(t,vn(e)),await s.done}catch(n){if(n instanceof ce)ee.warn(n.message);else{const s=J.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ee.warn(s.message)}}}function vn(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=1024,xi=30*24*60*60*1e3;class yi{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wi(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lt();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=xi}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lt(),{heartbeatsToSend:s,unsentEntries:r}=vi(this._heartbeatsCache.heartbeats),i=Ue(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lt(){return new Date().toISOString().substring(0,10)}function vi(e,t=_i){const n=[];let s=e.slice();for(const r of e){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Pt(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Pt(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class wi{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ur()?dr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bi(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Pt(e){return Ue(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){Me(new me("platform-logger",t=>new Pr(t),"PRIVATE")),Me(new me("heartbeat",t=>new yi(t),"PRIVATE")),le(it,At,e),le(it,At,"esm2017"),le("fire-js","")}Ti("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="firebasestorage.googleapis.com",Tn="storageBucket",Si=2*60*1e3,Ei=10*60*1e3,Ri=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D extends ce{constructor(t,n,s=0){super(Je(t),`Firebase Storage: ${n} (${Je(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Je(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var R;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(R||(R={}));function Je(e){return"storage/"+e}function gt(){const e="An unknown error occurred, please check the error payload for server response.";return new D(R.UNKNOWN,e)}function Ii(e){return new D(R.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Ni(e){return new D(R.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Di(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new D(R.UNAUTHENTICATED,e)}function Oi(){return new D(R.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ai(e){return new D(R.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Sn(){return new D(R.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function En(){return new D(R.CANCELED,"User canceled the upload/download.")}function Ci(e){return new D(R.INVALID_URL,"Invalid URL '"+e+"'.")}function ji(e){return new D(R.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Li(){return new D(R.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Tn+"' property when initializing the app?")}function Rn(){return new D(R.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Pi(){return new D(R.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Ui(){return new D(R.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Bi(e){return new D(R.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lt(e){return new D(R.INVALID_ARGUMENT,e)}function In(){return new D(R.APP_DELETED,"The Firebase app was deleted.")}function Mi(e){return new D(R.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fe(e,t){return new D(R.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function de(e){throw new D(R.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=k.makeFromUrl(t,n)}catch{return new k(t,"")}if(s.path==="")return s;throw ji(t)}static makeFromUrl(t,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+r+a,"i"),c={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const f="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",x=new RegExp(`^https?://${m}/${f}/b/${r}/o${_}`,"i"),d={bucket:1,path:3},g=n===wn?"(?:storage.googleapis.com|storage.cloud.google.com)":n,h="([^?#]*)",p=new RegExp(`^https?://${g}/${r}/${h}`,"i"),T=[{regex:l,indices:c,postModify:i},{regex:x,indices:d,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<T.length;S++){const C=T[S],I=C.regex.exec(t);if(I){const P=I[C.indices.bucket];let w=I[C.indices.path];w||(w=""),s=new k(P,w),C.postModify(s);break}}if(s==null)throw Ci(t);return s}}class ki{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e,t,n){let s=1,r=null,i=null,a=!1,l=0;function c(){return l===2}let u=!1;function f(...h){u||(u=!0,t.apply(null,h))}function m(h){r=setTimeout(()=>{r=null,e(x,c())},h)}function _(){i&&clearTimeout(i)}function x(h,...p){if(u){_();return}if(h){_(),f.call(null,h,...p);return}if(c()||a){_(),f.call(null,h,...p);return}s<64&&(s*=2);let T;l===1?(l=2,T=0):T=(s+Math.random())*1e3,m(T)}let d=!1;function g(h){d||(d=!0,_(),!u&&(r!==null?(h||(l=2),clearTimeout(r),m(0)):h||(l=1)))}return m(0),i=setTimeout(()=>{a=!0,g(!0)},n),g}function Fi(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(e){return e!==void 0}function zi(e){return typeof e=="function"}function Vi(e){return typeof e=="object"&&!Array.isArray(e)}function He(e){return typeof e=="string"||e instanceof String}function Ut(e){return bt()&&e instanceof Blob}function bt(){return typeof Blob<"u"}function Bt(e,t,n,s){if(s<t)throw lt(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw lt(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t,n){let s=t;return n==null&&(s=`https://${t}`),`${n}://${s}/v0${e}`}function Nn(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const r=t(s)+"="+t(e[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Q||(Q={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,i=t.indexOf(e)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,n,s,r,i,a,l,c,u,f,m,_=!0){this.url_=t,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=m,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,d)=>{this.resolve_=x,this.reject_=d,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new Ae(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Q.NO_ERROR,c=i.getStatus();if(!l||Dn(c,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Q.ABORT;s(!1,new Ae(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new Ae(u,i))})},n=(s,r)=>{const i=this.resolve_,a=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Hi(c)?i(c):i()}catch(c){a(c)}else if(l!==null){const c=gt();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(r.canceled){const c=this.appDelete_?In():En();a(c)}else{const c=Sn();a(c)}};this.canceled_?n(!1,new Ae(!1,null,!0)):this.backoffId_=$i(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Fi(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ae{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function Wi(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Gi(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Ki(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Xi(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Ji(e,t,n,s,r,i,a=!0){const l=Nn(e.urlParams),c=e.url+l,u=Object.assign({},e.headers);return Ki(u,t),Wi(u,n),Gi(u,i),Xi(u,s),new qi(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Qi(...e){const t=Yi();if(t!==void 0){const n=new t;for(let s=0;s<e.length;s++)n.append(e[s]);return n.getBlob()}else{if(bt())return new Blob(e);throw new D(R.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zi(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e){if(typeof atob>"u")throw Bi("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ye{constructor(t,n){this.data=t,this.contentType=n||null}}function ta(e,t){switch(e){case H.RAW:return new Ye(On(t));case H.BASE64:case H.BASE64URL:return new Ye(An(e,t));case H.DATA_URL:return new Ye(sa(t),ra(t))}throw gt()}function On(e){const t=[];for(let n=0;n<e.length;n++){let s=e.charCodeAt(n);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const i=s,a=e.charCodeAt(++n);s=65536|(i&1023)<<10|a&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function na(e){let t;try{t=decodeURIComponent(e)}catch{throw fe(H.DATA_URL,"Malformed data URL.")}return On(t)}function An(e,t){switch(e){case H.BASE64:{const r=t.indexOf("-")!==-1,i=t.indexOf("_")!==-1;if(r||i)throw fe(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case H.BASE64URL:{const r=t.indexOf("+")!==-1,i=t.indexOf("/")!==-1;if(r||i)throw fe(e,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ea(t)}catch(r){throw r.message.includes("polyfill")?r:fe(e,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Cn{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw fe(H.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=ia(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function sa(e){const t=new Cn(e);return t.base64?An(H.BASE64,t.rest):na(t.rest)}function ra(e){return new Cn(e).contentType}function ia(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,n){let s=0,r="";Ut(t)?(this.data_=t,s=t.size,r=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,n){if(Ut(this.data_)){const s=this.data_,r=Zi(s,t,n);return r===null?null:new W(r)}else{const s=new Uint8Array(this.data_.buffer,t,n-t);return new W(s,!0)}}static getBlob(...t){if(bt()){const n=t.map(s=>s instanceof W?s.data_:s);return new W(Qi.apply(null,n))}else{const n=t.map(a=>He(a)?ta(H.RAW,a).data:a.data_);let s=0;n.forEach(a=>{s+=a.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(a=>{for(let l=0;l<a.length;l++)r[i++]=a[l]}),new W(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e){let t;try{t=JSON.parse(e)}catch{return null}return Vi(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function oa(e,t){const n=t.split("/").filter(s=>s.length>0).join("/");return e.length===0?n:e+"/"+n}function Ln(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(e,t){return t}class L{constructor(t,n,s,r){this.server=t,this.local=n||t,this.writable=!!s,this.xform=r||la}}let Ce=null;function ca(e){return!He(e)||e.length<2?e:Ln(e)}function Pn(){if(Ce)return Ce;const e=[];e.push(new L("bucket")),e.push(new L("generation")),e.push(new L("metageneration")),e.push(new L("name","fullPath",!0));function t(i,a){return ca(a)}const n=new L("name");n.xform=t,e.push(n);function s(i,a){return a!==void 0?Number(a):a}const r=new L("size");return r.xform=s,e.push(r),e.push(new L("timeCreated")),e.push(new L("updated")),e.push(new L("md5Hash",null,!0)),e.push(new L("cacheControl",null,!0)),e.push(new L("contentDisposition",null,!0)),e.push(new L("contentEncoding",null,!0)),e.push(new L("contentLanguage",null,!0)),e.push(new L("contentType",null,!0)),e.push(new L("metadata","customMetadata",!0)),Ce=e,Ce}function ua(e,t){function n(){const s=e.bucket,r=e.fullPath,i=new k(s,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function da(e,t,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const a=n[i];s[a.local]=a.xform(s,t[a.server])}return ua(s,e),s}function Un(e,t,n){const s=jn(t);return s===null?null:da(e,s,n)}function ha(e,t,n,s){const r=jn(t);if(r===null||!He(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(u=>{const f=e.bucket,m=e.fullPath,_="/b/"+a(f)+"/o/"+a(m),x=Te(_,n,s),d=Nn({alt:"media",token:u});return x+d})[0]}function Bn(e,t){const n={},s=t.length;for(let r=0;r<s;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}class ue{constructor(t,n,s,r){this.url=t,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(!e)throw gt()}function _t(e,t){function n(s,r){const i=Un(e,r,t);return z(i!==null),i}return n}function fa(e,t){function n(s,r){const i=Un(e,r,t);return z(i!==null),ha(i,r,e.host,e._protocol)}return n}function Se(e){function t(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Oi():r=Di():n.getStatus()===402?r=Ni(e.bucket):n.getStatus()===403?r=Ai(e.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return t}function Mn(e){const t=Se(e);function n(s,r){let i=t(s,r);return s.getStatus()===404&&(i=Ii(e.path)),i.serverResponse=r.serverResponse,i}return n}function pa(e,t,n){const s=t.fullServerUrl(),r=Te(s,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,l=new ue(r,i,_t(e,n),a);return l.errorHandler=Mn(t),l}function ma(e,t,n){const s=t.fullServerUrl(),r=Te(s,e.host,e._protocol),i="GET",a=e.maxOperationRetryTime,l=new ue(r,i,fa(e,n),a);return l.errorHandler=Mn(t),l}function ga(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function kn(e,t,n){const s=Object.assign({},n);return s.fullPath=e.path,s.size=t.size(),s.contentType||(s.contentType=ga(null,t)),s}function ba(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let T="";for(let S=0;S<2;S++)T=T+Math.random().toString().slice(2);return T}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const u=kn(t,s,r),f=Bn(u,n),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,_=`\r
--`+c+"--",x=W.getBlob(m,s,_);if(x===null)throw Rn();const d={name:u.fullPath},g=Te(i,e.host,e._protocol),h="POST",p=e.maxUploadRetryTime,y=new ue(g,h,_t(e,n),p);return y.urlParams=d,y.headers=a,y.body=x.uploadData(),y.errorHandler=Se(t),y}class ke{constructor(t,n,s,r){this.current=t,this.total=n,this.finalized=!!s,this.metadata=r||null}}function xt(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch{z(!1)}return z(!!n&&(t||["active"]).indexOf(n)!==-1),n}function _a(e,t,n,s,r){const i=t.bucketOnlyServerUrl(),a=kn(t,s,r),l={name:a.fullPath},c=Te(i,e.host,e._protocol),u="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},m=Bn(a,n),_=e.maxUploadRetryTime;function x(g){xt(g);let h;try{h=g.getResponseHeader("X-Goog-Upload-URL")}catch{z(!1)}return z(He(h)),h}const d=new ue(c,u,x,_);return d.urlParams=l,d.headers=f,d.body=m,d.errorHandler=Se(t),d}function xa(e,t,n,s){const r={"X-Goog-Upload-Command":"query"};function i(u){const f=xt(u,["active","final"]);let m=null;try{m=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{z(!1)}m||z(!1);const _=Number(m);return z(!isNaN(_)),new ke(_,s.size(),f==="final")}const a="POST",l=e.maxUploadRetryTime,c=new ue(n,a,i,l);return c.headers=r,c.errorHandler=Se(t),c}const Mt=256*1024;function ya(e,t,n,s,r,i,a,l){const c=new ke(0,0);if(a?(c.current=a.current,c.total=a.total):(c.current=0,c.total=s.size()),s.size()!==c.total)throw Pi();const u=c.total-c.current;let f=u;r>0&&(f=Math.min(f,r));const m=c.current,_=m+f;let x="";f===0?x="finalize":u===f?x="upload, finalize":x="upload";const d={"X-Goog-Upload-Command":x,"X-Goog-Upload-Offset":`${c.current}`},g=s.slice(m,_);if(g===null)throw Rn();function h(S,C){const I=xt(S,["active","final"]),P=c.current+f,w=s.size();let V;return I==="final"?V=_t(t,i)(S,C):V=null,new ke(P,w,I==="final",V)}const p="POST",y=t.maxUploadRetryTime,T=new ue(n,p,h,y);return T.headers=d,T.body=g.uploadData(),T.progressCallback=l||null,T.errorHandler=Se(e),T}const B={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Qe(e){switch(e){case"running":case"pausing":case"canceling":return B.RUNNING;case"paused":return B.PAUSED;case"success":return B.SUCCESS;case"canceled":return B.CANCELED;case"error":return B.ERROR;default:return B.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,n,s){if(zi(t)||n!=null||s!=null)this.next=t,this.error=n??void 0,this.complete=s??void 0;else{const i=t;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}class wa{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Q.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Q.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Q.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,s,r){if(this.sent_)throw de("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw de("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw de("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw de("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw de("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Ta extends wa{initXhr(){this.xhr_.responseType="text"}}function ae(){return new Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=n,this._metadata=s,this._mappings=Pn(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(R.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Dn(r.status,[]))if(i)r=Sn();else{this.sleepTime=Math.max(this.sleepTime*2,Ri),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(R.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return n=>this._updateProgress(t+n)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":t(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,n)=>{const s=_a(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,ae,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((n,s)=>{const r=xa(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,ae,n,s);this._request=i,i.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Mt*this._chunkMultiplier,n=new ke(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let a;try{a=ya(this._ref._location,this._ref.storage,s,this._blob,t,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const l=this._ref.storage._makeRequest(a,ae,r,i,!1);this._request=l,l.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Mt*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,n)=>{const s=pa(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,ae,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,n)=>{const s=ba(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,ae,t,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const n=this._transferred;this._transferred=t,this._transferred!==n&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=t,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=En(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Qe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,n,s,r){const i=new va(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,n){return this._promise.then(t,n)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const n=this._observers.indexOf(t);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Qe(this._state)){case B.SUCCESS:ie(this._resolve.bind(null,this.snapshot))();break;case B.CANCELED:case B.ERROR:const n=this._reject;ie(n.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Qe(this._state)){case B.RUNNING:case B.PAUSED:t.next&&ie(t.next.bind(t,this.snapshot))();break;case B.SUCCESS:t.complete&&ie(t.complete.bind(t))();break;case B.CANCELED:case B.ERROR:t.error&&ie(t.error.bind(t,this._error))();break;default:t.error&&ie(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,n){this._service=t,n instanceof k?this._location=n:this._location=k.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new te(t,n)}get root(){const t=new k(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ln(this._location.path)}get storage(){return this._service}get parent(){const t=aa(this._location.path);if(t===null)return null;const n=new k(this._location.bucket,t);return new te(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw Mi(t)}}function Ea(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new Sa(e,new W(t),n)}function Ra(e){e._throwIfRoot("getDownloadURL");const t=ma(e.storage,e._location,Pn());return e.storage.makeRequestWithTokens(t,ae).then(n=>{if(n===null)throw Ui();return n})}function Ia(e,t){const n=oa(e._location.path,t),s=new k(e._location.bucket,n);return new te(e.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(e){return/^[A-Za-z]+:\/\//.test(e)}function Da(e,t){return new te(e,t)}function $n(e,t){if(e instanceof yt){const n=e;if(n._bucket==null)throw Li();const s=new te(n,n._bucket);return t!=null?$n(s,t):s}else return t!==void 0?Ia(e,t):e}function Oa(e,t){if(t&&Na(t)){if(e instanceof yt)return Da(e,t);throw lt("To use ref(service, url), the first argument must be a Storage instance.")}else return $n(e,t)}function kt(e,t){const n=t==null?void 0:t[Tn];return n==null?null:k.makeFromBucketSpec(n,e)}function Aa(e,t,n,s={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=s;r&&(e._overrideAuthToken=typeof r=="string"?r:cr(r,e.app.options.projectId))}class yt{constructor(t,n,s,r,i){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=wn,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Si,this._maxUploadRetryTime=Ei,this._requests=new Set,r!=null?this._bucket=k.makeFromBucketSpec(r,this._host):this._bucket=kt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=k.makeFromBucketSpec(this._url,t):this._bucket=kt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Bt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Bt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new te(this,t)}_makeRequest(t,n,s,r,i=!0){if(this._deleted)return new ki(In());{const a=Ji(t,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,r).getPromise()}}const $t="@firebase/storage",Ft="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="storage";function Ca(e,t,n){return e=Fe(e),Ea(e,t,n)}function ja(e){return e=Fe(e),Ra(e)}function La(e,t){return e=Fe(e),Oa(e,t)}function Pa(e=pi(),t){e=Fe(e);const s=ui(e,Fn).getImmediate({identifier:t}),r=or("storage");return r&&Ua(s,...r),s}function Ua(e,t,n,s={}){Aa(e,t,n,s)}function Ba(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new yt(n,s,r,t,fi)}function Ma(){Me(new me(Fn,Ba,"PUBLIC").setMultipleInstances(!0)),le($t,Ft,""),le($t,Ft,"esm2017")}Ma();var ka="firebase",$a="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le(ka,$a,"app");const Fa={apiKey:"AIzaSyCe9knlDkL3g0X8y4uw8CJ-6MfublzXsUA",authDomain:"promanager-54fb2.firebaseapp.com",projectId:"promanager-54fb2",storageBucket:"promanager-54fb2.appspot.com",messagingSenderId:"1012300220755",appId:"1:1012300220755:web:78ba7be8d896c3d303f9a6",measurementId:"G-BS868V9T85"},Ha=xn(Fa),Ht=["TODO","IN PROGRESS","COMPLETED"],zt=["HIGH","MEDIUM","NORMAL","LOW"],Vt=[],vt=({open:e,setOpen:t,task:n})=>{var V,Ee;const s={title:(n==null?void 0:n.title)||"",date:us((n==null?void 0:n.date)||new Date),team:[],stage:"",priority:"",assets:[]},{register:r,handleSubmit:i,formState:{errors:a}}=Gt({defaultValues:s}),[l,c]=b.useState((n==null?void 0:n.team)||[]),[u,f]=b.useState(((V=n==null?void 0:n.stage)==null?void 0:V.toUpperCase())||Ht[0]),[m,_]=b.useState(((Ee=n==null?void 0:n.priority)==null?void 0:Ee.toUpperCase())||zt[2]),[x,d]=b.useState([]),[g,h]=b.useState(!1),[p,{isLoading:y}]=xs(),[T,{isLoading:S}]=ys(),C=n!=null&&n.assets?[...n.assets]:[],I=async $=>{var ne;for(const U of x){h(!0);try{await w(U)}catch(se){console.error("Error uploading file:",se.message);return}finally{h(!1)}}try{const U={...$,assets:[...C,...Vt],team:l,stage:u,priority:m},se=n!=null&&n._id?await T({...U,_id:n._id}).unwrap():await p(U).unwrap();F.success("Task updated successfully"),setTimeout(()=>{t(!1)},500)}catch(U){console.log(U),F.error(((ne=U==null?void 0:U.data)==null?void 0:ne.message)||U.error)}},P=$=>{d($.target.files)},w=async $=>{const ne=Pa(Ha),U=new Date().getTime()+$.name,se=La(ne,U),Re=Ca(se,$);return new Promise((ze,re)=>{Re.on("state_changed",q=>{console.log("Uploading")},q=>{re(q)},()=>{ja(Re.snapshot.ref).then(q=>{Vt.push(q),ze()}).catch(q=>{re(q)})})})};return o.jsx(o.Fragment,{children:o.jsx(Kt,{open:e,setOpen:t,children:o.jsxs("form",{onSubmit:i(I),children:[o.jsx(Xt.Title,{as:"h2",className:"text-base font-bold leading-6 text-gray-900 mb-4",children:n?"UPDATE TASK":"ADD TASK"}),o.jsxs("div",{className:"mt-2 flex flex-col gap-6",children:[o.jsx(he,{placeholder:"Task Title",type:"text",name:"title",label:"Task Title",className:"w-full rounded",register:r("title",{required:"Title is required"}),error:a.title?a.title.message:""}),o.jsx(Ys,{setTeam:c,team:l}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(St,{label:"Task Stage",lists:Ht,selected:u,setSelected:f}),o.jsx("div",{className:"w-full",children:o.jsx(he,{placeholder:"Date",type:"date",name:"date",label:"Task Date",className:"w-full rounded",register:r("date",{required:"Date is required!"}),error:a.date?a.date.message:""})})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(St,{label:"Priority Level",lists:zt,selected:m,setSelected:_}),o.jsx("div",{className:"w-full flex items-center justify-center mt-4",children:o.jsxs("label",{className:"flex items-center gap-1 text-base text-ascent-2 hover:text-ascent-1 cursor-pointer my-4",htmlFor:"imgUpload",children:[o.jsx("input",{type:"file",className:"hidden",id:"imgUpload",onChange:$=>P($),accept:".jpg, .png, .jpeg",multiple:!0}),o.jsx(ds,{}),o.jsx("span",{children:"Add Assets"})]})})]}),o.jsxs("div",{className:"bg-gray-50 py-6 sm:flex sm:flex-row-reverse gap-4",children:[g?o.jsx("span",{className:"text-sm py-2 text-red-500",children:"Uploading assets"}):o.jsx(Z,{label:"Submit",type:"submit",className:"bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700  sm:w-auto"}),o.jsx(Z,{type:"button",className:"bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto",onClick:()=>t(!1),label:"Cancel"})]})]})]})})})},za=({open:e,setOpen:t,id:n})=>{const{register:s,handleSubmit:r,formState:{errors:i}}=Gt(),[a]=vs(),l=async c=>{var u;try{const f=await a({data:c,id:n}).unwrap();F.success(f.message),setTimeout(()=>{t(!1)},500)}catch(f){console.log(f),F.error(((u=f==null?void 0:f.data)==null?void 0:u.message)||f.error)}};return o.jsx(o.Fragment,{children:o.jsx(Kt,{open:e,setOpen:t,children:o.jsxs("form",{onSubmit:r(l),className:"",children:[o.jsx(Xt.Title,{as:"h2",className:"text-base font-bold leading-6 text-gray-900 mb-4",children:"ADD SUB-TASK"}),o.jsxs("div",{className:"mt-2 flex flex-col gap-6",children:[o.jsx(he,{placeholder:"Sub-Task title",type:"text",name:"title",label:"Title",className:"w-full rounded",register:s("title",{required:"Title is required!"}),error:i.title?i.title.message:""}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx(he,{placeholder:"Date",type:"date",name:"date",label:"Task Date",className:"w-full rounded",register:s("date",{required:"Date is required!"}),error:i.date?i.date.message:""}),o.jsx(he,{placeholder:"Tag",type:"text",name:"tag",label:"Tag",className:"w-full rounded",register:s("tag",{required:"Tag is required!"}),error:i.tag?i.tag.message:""})]})]}),o.jsxs("div",{className:"py-3 mt-4 flex sm:flex-row-reverse gap-4",children:[o.jsx(Z,{type:"submit",className:"bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 sm:ml-3 sm:w-auto",label:"Add Task"}),o.jsx(Z,{type:"button",className:"bg-white border text-sm font-semibold text-gray-900 sm:w-auto",onClick:()=>t(!1),label:"Cancel"})]})]})})})},Va=({task:e,currentUserId:t,isAdmin:n,isUserView:s=!1})=>{b.useState(!1);const[r,i]=b.useState(!1),[a,l]=b.useState(!1),c=hs(),[u]=rn(),[f]=ws(),m=async()=>{var g;try{const h=await f(e._id).unwrap();F.success("Task duplicated successfully"),setTimeout(()=>{l(!1),window.location.reload()},500)}catch(h){console.log(h),F.error(((g=h==null?void 0:h.data)==null?void 0:g.message)||h.error)}},_=()=>{l(!0)},x=async()=>{var g;try{const h=await u({id:e._id,isTrashed:"trash"}).unwrap();F.success(h==null?void 0:h.message),setTimeout(()=>{l(!1),window.location.reload()},500)}catch(h){console.log(h),F.error(((g=h==null?void 0:h.data)==null?void 0:g.message)||h.error)}},d=[{label:"Open Task",icon:o.jsx(Gs,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),onClick:()=>c(`/task/${e._id}`)}];return!s&&(n||e.assignedTo===t)&&d.push({label:"Duplicate Task",icon:o.jsx(Xs,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),onClick:m},{label:"Edit Task",icon:o.jsx(fs,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),onClick:()=>i(!0)},{label:"Delete Task",icon:o.jsx(Js,{className:"mr-2 h-5 w-5","aria-hidden":"true"}),onClick:_}),o.jsxs(o.Fragment,{children:[o.jsx("div",{children:o.jsxs(Oe,{as:"div",className:"relative inline-block text-left",children:[o.jsx(Oe.Button,{className:"inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-600",children:o.jsx(Ks,{})}),o.jsx(ut,{as:b.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:o.jsx(Oe.Items,{className:"absolute p-4 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:d.map((g,h)=>o.jsx(Oe.Item,{children:({active:p})=>o.jsxs("button",{className:`${p?"bg-gray-100 text-gray-900":"text-gray-700"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,onClick:g.onClick,children:[g.icon,g.label]})},h))})})]})}),o.jsx(vt,{open:r,setOpen:i,task:e}),o.jsx(sn,{title:"Are you sure you want to delete this task?",description:"This action cannot be undone",onClick:x,open:a,setOpen:l})]})},qa={high:o.jsx(en,{}),medium:o.jsx(tn,{}),low:o.jsx(nn,{})},Wa=({task:e})=>{var r,i,a,l,c,u;const{user:t}=dt(f=>f.auth),[n,s]=b.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"w-full h-fit bg-white shadow-md p-4 rounded",children:[o.jsxs("div",{className:"w-full flex justify-between",children:[o.jsxs("div",{className:K("flex flex-1 gap-1 items-center text-sm font-medium",Jt[e==null?void 0:e.priority]),children:[o.jsx("span",{className:"text-lg",children:qa[e==null?void 0:e.priority]}),o.jsxs("span",{className:"uppercase",children:[e==null?void 0:e.priority," Priority"]})]}),o.jsx(Va,{task:e,currentUserId:t==null?void 0:t._id,isAdmin:t==null?void 0:t.isAdmin})]}),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:K("w-4 h-4 rounded-full",Yt[e.stage])}),o.jsx("h4",{className:"line-clamp-1 text-black",children:e==null?void 0:e.title})]}),o.jsx("span",{className:"text-sm text-gray-600",children:tt(new Date(e==null?void 0:e.date))})]}),o.jsx("div",{className:"w-full border-t border-gray-200 my-2"}),o.jsxs("div",{className:"flex items-center justify-between mb-2",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600",children:[o.jsx(Qt,{}),o.jsx("span",{children:(r=e==null?void 0:e.activities)==null?void 0:r.length})]}),o.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600 ",children:[o.jsx(Zt,{}),o.jsx("span",{children:(i=e==null?void 0:e.assets)==null?void 0:i.length})]}),o.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600 ",children:[o.jsx(ht,{}),o.jsxs("span",{children:["0/",(a=e==null?void 0:e.subTasks)==null?void 0:a.length]})]})]}),o.jsx("div",{className:"flex flex-row-reverse",children:(l=e==null?void 0:e.team)==null?void 0:l.map((f,m)=>{var _;return o.jsx("div",{className:K("w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",Pe[m%((_=Pe)==null?void 0:_.length)]),children:o.jsx(an,{user:f})},m)})})]}),((c=e==null?void 0:e.subTasks)==null?void 0:c.length)>0?o.jsxs("div",{className:"py-4 border-t border-gray-200",children:[o.jsx("h5",{className:"text-base line-clamp-1 text-black",children:e==null?void 0:e.subTasks[0].title}),o.jsxs("div",{className:"p-4 space-x-8",children:[o.jsx("span",{className:"text-sm text-gray-600",children:tt(new Date((u=e==null?void 0:e.subTasks[0])==null?void 0:u.date))}),o.jsx("span",{className:"bg-blue-600/10 px-3 py-1 rounded0full text-blue-700 font-medium",children:e==null?void 0:e.subTasks[0].tag})]})]}):o.jsx("div",{className:"py-4 border-t border-gray-200",children:o.jsx("span",{className:"text-gray-500",children:"No Sub Task"})}),o.jsx("div",{className:"w-full pb-2",children:(t==null?void 0:t.isAdmin)&&o.jsxs("button",{onClick:()=>s(!0),className:"w-full flex gap-4 items-center text-sm text-gray-500 font-semibold",children:[o.jsx(ct,{className:"text-lg"}),o.jsx("span",{children:"ADD SUBTASK"})]})})]}),o.jsx(za,{open:n,setOpen:s,id:e._id})]})},Ga=({tasks:e})=>o.jsx("div",{className:"w-full py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 2xl:gap-10",children:e.map((t,n)=>o.jsx(Wa,{task:t},n))}),Ka={high:o.jsx(en,{}),medium:o.jsx(tn,{}),low:o.jsx(nn,{})},Xa=({tasks:e})=>{const[t,n]=b.useState(!1),[s,r]=b.useState(null),[i,a]=b.useState(!1),[l]=rn(),{user:c}=dt(d=>d.auth),u=d=>{r(d),n(!0)},f=d=>{r(d),a(!0)},m=async()=>{var d;try{const g=await l({id:s,isTrash:"trash"}).unwrap();F.success(g==null?void 0:g.message),setTimeout(()=>{n(!1),window.location.reload()},500)}catch(g){console.log(g),F.error(((d=g==null?void 0:g.data)==null?void 0:d.message)||g.error)}},_=()=>o.jsx("thead",{className:"w-full border-b border-gray-300",children:o.jsxs("tr",{className:"w-full text-black text-left",children:[o.jsx("th",{className:"py-2",children:"Task Title"}),o.jsx("th",{className:"py-2",children:"Priority"}),o.jsx("th",{className:"py-2 line-clamp-1",children:"Created At"}),o.jsx("th",{className:"py-2",children:"Assets"}),o.jsx("th",{className:"py-2",children:"Team"}),(c==null?void 0:c.isAdmin)&&o.jsx("th",{className:"py-2",children:"Actions"})]})}),x=({task:d})=>{var g,h,p,y;return o.jsxs("tr",{className:"border-b border-gray-200 text-gray-600 hover:bg-gray-300/10",children:[o.jsx("td",{className:"py-2",children:o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:K("w-4 h-4 rounded-full",Yt[d.stage])}),o.jsx("p",{className:"w-full line-clamp-2 text-base text-black",children:d==null?void 0:d.title})]})}),o.jsx("td",{className:"py-2",children:o.jsxs("div",{className:"flex gap-1 items-center",children:[o.jsx("span",{className:K("text-lg",Jt[d==null?void 0:d.priority]),children:Ka[d==null?void 0:d.priority]}),o.jsxs("span",{className:"capitalize line-clamp-1",children:[d==null?void 0:d.priority," Priority"]})]})}),o.jsx("td",{className:"py-2",children:o.jsx("span",{className:"text-sm text-gray-600",children:tt(new Date(d==null?void 0:d.date))})}),o.jsx("td",{className:"py-2",children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600",children:[o.jsx(Qt,{}),o.jsx("span",{children:(g=d==null?void 0:d.activities)==null?void 0:g.length})]}),o.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600",children:[o.jsx(Zt,{}),o.jsx("span",{children:(h=d==null?void 0:d.assets)==null?void 0:h.length})]}),o.jsxs("div",{className:"flex gap-1 items-center text-sm text-gray-600",children:[o.jsx(ht,{}),o.jsxs("span",{children:["0/",(p=d==null?void 0:d.subTasks)==null?void 0:p.length]})]})]})}),o.jsx("td",{className:"py-2",children:o.jsx("div",{className:"flex",children:(y=d==null?void 0:d.team)==null?void 0:y.map((T,S)=>{var C;return o.jsx("div",{className:K("w-7 h-7 rounded-full text-white flex items-center justify-center text-sm -mr-1",Pe[S%((C=Pe)==null?void 0:C.length)]),children:o.jsx(an,{user:T})},T._id)})})}),(c==null?void 0:c.isAdmin)&&o.jsxs("td",{className:"py-2 flex gap-2 md:gap-4 justify-end",children:[o.jsx(Z,{className:"text-blue-600 hover:text-blue-500 sm:px-0 text-sm md:text-base",label:"Edit",type:"button",onClick:()=>f(d)}),o.jsx(Z,{className:"text-red-700 hover:text-red-500 sm:px-0 text-sm md:text-base",label:"Delete",type:"button",onClick:()=>u(d._id)})]})]})};return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"bg-white px-2 md:px-4 pt-4 pb-9 shadow-md rounded",children:o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full",children:[o.jsx(_,{}),o.jsx("tbody",{children:e.map((d,g)=>o.jsx(x,{task:d},d._id||g))})]})})}),o.jsx(sn,{open:t,setOpen:n,onClick:m}),o.jsx(vt,{open:i,setOpen:a,task:s},new Date().getTime())]})},Ja=[{title:"Board View",icon:o.jsx(gs,{})},{title:"List View",icon:o.jsx(ht,{})}],Ze={todo:"bg-blue-600","in progress":"bg-yellow-600",completed:"bg-green-600"},so=()=>{var f;const e=ps(),{user:t}=dt(m=>m.auth),[n,s]=b.useState(0),[r,i]=b.useState(!1),a=(e==null?void 0:e.status)||"",{data:l,isLoading:c}=Ts({strQuery:a,isTrashed:"",search:""}),u=t!=null&&t.isAdmin?l==null?void 0:l.tasks:(f=l==null?void 0:l.tasks)==null?void 0:f.filter(m=>m.team.some(_=>_._id===t._id));return c?o.jsx("div",{className:"py-10",children:o.jsx(ms,{})}):o.jsxs("div",{className:"w-full",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx(bs,{title:a?`${a} Tasks`:"Tasks"}),(t==null?void 0:t.isAdmin)&&!a&&o.jsx(Z,{onClick:()=>i(!0),label:"Create Task",icon:o.jsx(ct,{className:"text-lg"}),className:"flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"})]}),o.jsxs(_s,{tabs:Ja,setSelected:s,children:[!a&&o.jsxs("div",{className:"w-full flex justify-between gap-4 md:gap-x-12 py-4",children:[o.jsx(qe,{label:"To Do",className:Ze.todo}),o.jsx(qe,{label:"In Progress",className:Ze["in progress"]}),o.jsx(qe,{label:"Completed",className:Ze.completed})]}),n!==1?o.jsx(Ga,{tasks:u}):o.jsx("div",{className:"w-full",children:o.jsx(Xa,{tasks:u})})]}),o.jsx(vt,{open:r,setOpen:i})]})};export{so as default};
