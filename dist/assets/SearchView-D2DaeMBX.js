var Ut=Object.defineProperty;var jt=(e,n,a)=>n in e?Ut(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a;var Oe=(e,n,a)=>(jt(e,typeof n!="symbol"?n+"":n,a),a);import{g as L,c as qt,a as Kt,m as Y,h as Jt,p as E,b as Ve,d as m,i as Qe,u as z,e as Qt,f as r,F as ee,j as ve,k as Ee,l as U,n as le,o as oe,q as fe,r as Ie,s as Ze,t as B,v as A,w as et,x as Zt,y as Be,z as me,A as tt,B as he,C as en,D as ge,E as nt,G as tn,H as nn,I as an,J as sn,K as F,L as at,M as J,N as st,O as ue,P as ln,Q as Se,R as ce,S as on,T as lt,U as ot,V as Ge,W as te,X as it,Y as rn,Z as rt,_ as ut,$ as un,a0 as ct,a1 as Pe,a2 as K,a3 as Z,a4 as dt,a5 as cn,a6 as dn,a7 as vn,a8 as vt,a9 as ft,aa as mt,ab as O,ac as fn,ad as mn,ae as hn,af as gn,ag as yn,ah as bn,ai as _n,aj as He,ak as Ne,al as Cn,am as Sn,an as ht,ao as gt,ap as wn,aq as X,ar as re,as as we,at as D,au as xe,av as Fe,aw as xn,ax as kn,ay as ye,az as pn,aA as Ye,aB as Tn,aC as Vn}from"./index-2kIzAs_1.js";import{m as En,u as In,a as Bn,b as Pn,c as $n}from"./scopeId-CJ4UNHnG.js";const Ln={GAME:e=>`http://165.232.113.74:3000/api/games/${e}`};function zn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return L()({name:a??qt(Kt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...Y()},setup(t,s){let{slots:l}=s;return()=>{var o;return Jt(t.tag,{class:[e,t.class],style:t.style},(o=l.default)==null?void 0:o.call(l))}}})}const yt=E({border:[Boolean,Number,String]},"border");function bt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();return{borderClasses:m(()=>{const t=Qe(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))s.push(`border-${l}`);return s})}}const $e=E({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Le(e){return{elevationClasses:m(()=>{const a=Qe(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const Rn=["elevated","flat","tonal","outlined","text","plain"];function _t(e,n){return r(ee,null,[e&&r("span",{key:"overlay",class:`${n}__overlay`},null),r("span",{key:"underlay",class:`${n}__underlay`},null)])}const ze=E({color:String,variant:{type:String,default:"elevated",validator:e=>Rn.includes(e)}},"variant");function Ct(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();const a=m(()=>{const{variant:l}=z(e);return`${n}--variant-${l}`}),{colorClasses:t,colorStyles:s}=Qt(m(()=>{const{variant:l,color:o}=z(e);return{[["elevated","flat"].includes(l)?"background":"text"]:o}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const St=E({baseColor:String,divided:Boolean,...yt(),...Y(),...ve(),...$e(),...Ee(),...U(),...le(),...ze()},"VBtnGroup"),Xe=L()({name:"VBtnGroup",props:St(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=oe(e),{densityClasses:s}=fe(e),{borderClasses:l}=bt(e),{elevationClasses:o}=Le(e),{roundedClasses:f}=Ie(e);Ze({VBtn:{height:"auto",baseColor:B(e,"baseColor"),color:B(e,"color"),density:B(e,"density"),flat:!0,variant:B(e,"variant")}}),A(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,l.value,s.value,o.value,f.value,e.class],style:e.style},a))}}),wt=E({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),xt=E({value:null,disabled:Boolean,selectedClass:String},"group-item");function kt(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=et("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Zt();Be(Symbol.for(`${n.description}:id`),s);const l=me(n,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const o=B(e,"value"),f=m(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:o,disabled:f},t),tt(()=>{l.unregister(s)});const c=m(()=>l.isSelected(s)),g=m(()=>l.items.value[0].id===s),x=m(()=>l.items.value[l.items.value.length-1].id===s),h=m(()=>c.value&&[l.selectedClass.value,e.selectedClass]);return he(c,i=>{t.emit("group:selected",{value:i})},{flush:"sync"}),{id:s,isSelected:c,isFirst:g,isLast:x,toggle:()=>l.select(s,!c.value),select:i=>l.select(s,i),selectedClass:h,value:o,disabled:f,group:l}}function Re(e,n){let a=!1;const t=en([]),s=ge(e,"modelValue",[],i=>i==null?[]:pt(t,an(i)),i=>{const v=Wn(t,i);return e.multiple?v:v[0]}),l=et("useGroup");function o(i,v){const d=i,u=Symbol.for(`${n.description}:id`),k=sn(u,l==null?void 0:l.vnode).indexOf(v);z(d.value)==null&&(d.value=k,d.useIndexAsValue=!0),k>-1?t.splice(k,0,d):t.push(d)}function f(i){if(a)return;c();const v=t.findIndex(d=>d.id===i);t.splice(v,1)}function c(){const i=t.find(v=>!v.disabled);i&&e.mandatory==="force"&&!s.value.length&&(s.value=[i.id])}nt(()=>{c()}),tt(()=>{a=!0}),tn(()=>{for(let i=0;i<t.length;i++)t[i].useIndexAsValue&&(t[i].value=i)});function g(i,v){const d=t.find(u=>u.id===i);if(!(v&&(d!=null&&d.disabled)))if(e.multiple){const u=s.value.slice(),_=u.findIndex(V=>V===i),k=~_;if(v=v??!k,k&&e.mandatory&&u.length<=1||!k&&e.max!=null&&u.length+1>e.max)return;_<0&&v?u.push(i):_>=0&&!v&&u.splice(_,1),s.value=u}else{const u=s.value.includes(i);if(e.mandatory&&u)return;s.value=v??!u?[i]:[]}}function x(i){if(e.multiple,s.value.length){const v=s.value[0],d=t.findIndex(k=>k.id===v);let u=(d+i)%t.length,_=t[u];for(;_.disabled&&u!==d;)u=(u+i)%t.length,_=t[u];if(_.disabled)return;s.value=[t[u].id]}else{const v=t.find(d=>!d.disabled);v&&(s.value=[v.id])}}const h={register:o,unregister:f,selected:s,select:g,disabled:B(e,"disabled"),prev:()=>x(t.length-1),next:()=>x(1),isSelected:i=>s.value.includes(i),selectedClass:m(()=>e.selectedClass),items:m(()=>t),getItemIndex:i=>An(t,i)};return Be(n,h),h}function An(e,n){const a=pt(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function pt(e,n){const a=[];return n.forEach(t=>{const s=e.find(o=>nn(t,o.value)),l=e[t];(s==null?void 0:s.value)!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function Wn(e,n){const a=[];return n.forEach(t=>{const s=e.findIndex(l=>l.id===t);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const Tt=Symbol.for("vuetify:v-btn-toggle"),Mn=E({...St(),...wt()},"VBtnToggle");L()({name:"VBtnToggle",props:Mn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:l,select:o,selected:f}=Re(e,Tt);return A(()=>{const c=Xe.filterProps(e);return r(Xe,F({class:["v-btn-toggle",e.class]},c,{style:e.style}),{default:()=>{var g;return[(g=a.default)==null?void 0:g.call(a,{isSelected:t,next:s,prev:l,select:o,selected:f})]}})}),{next:s,prev:l,select:o}}});const On=E({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Y(),...at(),...U({tag:"div"}),...le()},"VProgressCircular"),Vt=L()({name:"VProgressCircular",props:On(),setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,l=J(),{themeClasses:o}=oe(e),{sizeClasses:f,sizeStyles:c}=st(e),{textColorClasses:g,textColorStyles:x}=ue(B(e,"color")),{textColorClasses:h,textColorStyles:i}=ue(B(e,"bgColor")),{intersectionRef:v,isIntersecting:d}=ln(),{resizeRef:u,contentRect:_}=Se(),k=m(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),V=m(()=>Number(e.width)),I=m(()=>c.value?Number(e.size):_.value?_.value.width:Math.max(V.value,32)),C=m(()=>t/(1-V.value/I.value)*2),S=m(()=>V.value/I.value*C.value),p=m(()=>ce((100-k.value)/100*s));return on(()=>{v.value=l.value,u.value=l.value}),A(()=>r(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":d.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,f.value,g.value,e.class],style:[c.value,x.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:k.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${C.value} ${C.value}`},[r("circle",{class:["v-progress-circular__underlay",h.value],style:i.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":S.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":S.value,"stroke-dasharray":s,"stroke-dashoffset":p.value},null)]),a.default&&r("div",{class:"v-progress-circular__content"},[a.default({value:k.value})])]})),{}}}),Gn=["static","relative","fixed","absolute","sticky"],Et=E({position:{type:String,validator:e=>Gn.includes(e)}},"position");function It(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ve();return{positionClasses:m(()=>e.position?`${n}--${e.position}`:void 0)}}function Hn(e,n){he(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&lt(()=>{n(!0)})},{immediate:!0})}const ke=Symbol("rippleStop"),Nn=80;function De(e,n){e.style.transform=n,e.style.webkitTransform=n}function pe(e){return e.constructor.name==="TouchEvent"}function Bt(e){return e.constructor.name==="KeyboardEvent"}const Fn=function(e,n){var h;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!Bt(e)){const i=n.getBoundingClientRect(),v=pe(e)?e.touches[e.touches.length-1]:e;t=v.clientX-i.left,s=v.clientY-i.top}let l=0,o=.3;(h=n._ripple)!=null&&h.circle?(o=.15,l=n.clientWidth/2,l=a.center?l:l+Math.sqrt((t-l)**2+(s-l)**2)/4):l=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const f=`${(n.clientWidth-l*2)/2}px`,c=`${(n.clientHeight-l*2)/2}px`,g=a.center?f:`${t-l}px`,x=a.center?c:`${s-l}px`;return{radius:l,scale:o,x:g,y:x,centerX:f,centerY:c}},de={show(e,n){var v;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=n==null?void 0:n._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:l,scale:o,x:f,y:c,centerX:g,centerY:x}=Fn(e,n,a),h=`${l*2}px`;s.className="v-ripple__animation",s.style.width=h,s.style.height=h,n.appendChild(t);const i=window.getComputedStyle(n);i&&i.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),De(s,`translate(${f}, ${c}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),De(s,`translate(${g}, ${x}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var f;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((f=a.parentNode)==null?void 0:f.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function Pt(e){return typeof e>"u"||!!e}function ne(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ke])){if(e[ke]=!0,pe(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||Bt(e),a._ripple.class&&(n.class=a._ripple.class),pe(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{de.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},Nn)}else de.show(e,a,n)}}function Ue(e){e[ke]=!0}function $(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{$(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),de.hide(n)}}function $t(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let ae=!1;function Lt(e){!ae&&(e.keyCode===Ge.enter||e.keyCode===Ge.space)&&(ae=!0,ne(e))}function zt(e){ae=!1,$(e)}function Rt(e){ae&&(ae=!1,$(e))}function At(e,n,a){const{value:t,modifiers:s}=n,l=Pt(t);if(l||de.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,ot(t)&&t.class&&(e._ripple.class=t.class),l&&!a){if(s.stop){e.addEventListener("touchstart",Ue,{passive:!0}),e.addEventListener("mousedown",Ue);return}e.addEventListener("touchstart",ne,{passive:!0}),e.addEventListener("touchend",$,{passive:!0}),e.addEventListener("touchmove",$t,{passive:!0}),e.addEventListener("touchcancel",$),e.addEventListener("mousedown",ne),e.addEventListener("mouseup",$),e.addEventListener("mouseleave",$),e.addEventListener("keydown",Lt),e.addEventListener("keyup",zt),e.addEventListener("blur",Rt),e.addEventListener("dragstart",$,{passive:!0})}else!l&&a&&Wt(e)}function Wt(e){e.removeEventListener("mousedown",ne),e.removeEventListener("touchstart",ne),e.removeEventListener("touchend",$),e.removeEventListener("touchmove",$t),e.removeEventListener("touchcancel",$),e.removeEventListener("mouseup",$),e.removeEventListener("mouseleave",$),e.removeEventListener("keydown",Lt),e.removeEventListener("keyup",zt),e.removeEventListener("dragstart",$),e.removeEventListener("blur",Rt)}function Yn(e,n){At(e,n,!1)}function Xn(e){delete e._ripple,Wt(e)}function Dn(e,n){if(n.value===n.oldValue)return;const a=Pt(n.oldValue);At(e,n,a)}const Un={mounted:Yn,unmounted:Xn,updated:Dn},Mt=E({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:Tt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:te,appendIcon:te,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...yt(),...Y(),...ve(),...it(),...$e(),...xt(),...rn(),...rt(),...Et(),...Ee(),...En(),...at(),...U({tag:"button"}),...le(),...ze({variant:"elevated"})},"VBtn"),Q=L()({name:"VBtn",props:Mt(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=oe(e),{borderClasses:l}=bt(e),{densityClasses:o}=fe(e),{dimensionStyles:f}=ut(e),{elevationClasses:c}=Le(e),{loaderClasses:g}=un(e),{locationStyles:x}=ct(e),{positionClasses:h}=It(e),{roundedClasses:i}=Ie(e),{sizeClasses:v,sizeStyles:d}=st(e),u=kt(e,e.symbol,!1),_=In(e,a),k=m(()=>{var w;return e.active!==void 0?e.active:_.isLink.value?(w=_.isActive)==null?void 0:w.value:u==null?void 0:u.isSelected.value}),V=m(()=>{var R,N;return{color:(u==null?void 0:u.isSelected.value)&&(!_.isLink.value||((R=_.isActive)==null?void 0:R.value))||!u||((N=_.isActive)==null?void 0:N.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:I,colorStyles:C,variantClasses:S}=Ct(V),p=m(()=>(u==null?void 0:u.disabled.value)||e.disabled),P=m(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),G=m(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function H(w){var R;p.value||_.isLink.value&&(w.metaKey||w.ctrlKey||w.shiftKey||w.button!==0||a.target==="_blank")||((R=_.navigate)==null||R.call(_,w),u==null||u.toggle())}return Hn(_,u==null?void 0:u.select),A(()=>{const w=_.isLink.value?"a":e.tag,R=!!(e.prependIcon||t.prepend),N=!!(e.appendIcon||t.append),j=!!(e.icon&&e.icon!==!0);return Pe(r(w,{type:w==="a"?void 0:"button",class:["v-btn",u==null?void 0:u.selectedClass.value,{"v-btn--active":k.value,"v-btn--block":e.block,"v-btn--disabled":p.value,"v-btn--elevated":P.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,I.value,o.value,c.value,g.value,h.value,i.value,v.value,S.value,e.class],style:[C.value,f.value,x.value,d.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:p.value||void 0,href:_.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:H,value:G.value},{default:()=>{var W;return[_t(!0,"v-btn"),!e.icon&&R&&r("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?r(Z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):r(K,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&j?r(K,{key:"content-icon",icon:e.icon},null):r(Z,{key:"content-defaults",disabled:!j,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var M;return[((M=t.default)==null?void 0:M.call(t))??e.text]}})]),!e.icon&&N&&r("span",{key:"append",class:"v-btn__append"},[t.append?r(Z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):r(K,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((W=t.loader)==null?void 0:W.call(t))??r(Vt,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[Un,!p.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:u}}}),Ae=Symbol.for("vuetify:v-tabs"),jn=E({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...dt(Mt({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Te=L()({name:"VTab",props:jn(),setup(e,n){let{slots:a,attrs:t}=n;const{textColorClasses:s,textColorStyles:l}=ue(e,"sliderColor"),o=J(),f=J(),c=m(()=>e.direction==="horizontal"),g=m(()=>{var h,i;return((i=(h=o.value)==null?void 0:h.group)==null?void 0:i.isSelected.value)??!1});function x(h){var v,d;let{value:i}=h;if(i){const u=(d=(v=o.value)==null?void 0:v.$el.parentElement)==null?void 0:d.querySelector(".v-tab--selected .v-tab__slider"),_=f.value;if(!u||!_)return;const k=getComputedStyle(u).color,V=u.getBoundingClientRect(),I=_.getBoundingClientRect(),C=c.value?"x":"y",S=c.value?"X":"Y",p=c.value?"right":"bottom",P=c.value?"width":"height",G=V[C],H=I[C],w=G>H?V[p]-I[p]:V[C]-I[C],R=Math.sign(w)>0?c.value?"right":"bottom":Math.sign(w)<0?c.value?"left":"top":"center",j=(Math.abs(w)+(Math.sign(w)<0?V[P]:I[P]))/Math.max(V[P],I[P])||0,W=V[P]/I[P]||0,M=1.5;dn(_,{backgroundColor:[k,"currentcolor"],transform:[`translate${S}(${w}px) scale${S}(${W})`,`translate${S}(${w/M}px) scale${S}(${(j-1)/M+1})`,"none"],transformOrigin:Array(3).fill(R)},{duration:225,easing:vn})}}return A(()=>{const h=Q.filterProps(e);return r(Q,F({symbol:Ae,ref:o,class:["v-tab",e.class],style:e.style,tabindex:g.value?0:-1,role:"tab","aria-selected":String(g.value),active:!1},h,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":x}),{...a,default:()=>{var i;return r(ee,null,[((i=a.default)==null?void 0:i.call(a))??e.text,!e.hideSlider&&r("div",{ref:f,class:["v-tab__slider",s.value],style:l.value},null)])}})}),cn({},o)}}),qn=e=>{const{touchstartX:n,touchendX:a,touchstartY:t,touchendY:s}=e,l=.5,o=16;e.offsetX=a-n,e.offsetY=s-t,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&a<n-o&&e.left(e),e.right&&a>n+o&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&s<t-o&&e.up(e),e.down&&s>t+o&&e.down(e))};function Kn(e,n){var t;const a=e.changedTouches[0];n.touchstartX=a.clientX,n.touchstartY=a.clientY,(t=n.start)==null||t.call(n,{originalEvent:e,...n})}function Jn(e,n){var t;const a=e.changedTouches[0];n.touchendX=a.clientX,n.touchendY=a.clientY,(t=n.end)==null||t.call(n,{originalEvent:e,...n}),qn(n)}function Qn(e,n){var t;const a=e.changedTouches[0];n.touchmoveX=a.clientX,n.touchmoveY=a.clientY,(t=n.move)==null||t.call(n,{originalEvent:e,...n})}function Zn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:a=>Kn(a,n),touchend:a=>Jn(a,n),touchmove:a=>Qn(a,n)}}function ea(e,n){var f;const a=n.value,t=a!=null&&a.parent?e.parentElement:e,s=(a==null?void 0:a.options)??{passive:!0},l=(f=n.instance)==null?void 0:f.$.uid;if(!t||!l)return;const o=Zn(n.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[l]=o,vt(o).forEach(c=>{t.addEventListener(c,o[c],s)})}function ta(e,n){var l,o;const a=(l=n.value)!=null&&l.parent?e.parentElement:e,t=(o=n.instance)==null?void 0:o.$.uid;if(!(a!=null&&a._touchHandlers)||!t)return;const s=a._touchHandlers[t];vt(s).forEach(f=>{a.removeEventListener(f,s[f])}),delete a._touchHandlers[t]}const Ot={mounted:ea,unmounted:ta},na=Ot,Gt=Symbol.for("vuetify:v-window"),Ht=Symbol.for("vuetify:v-window-group"),Nt=E({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...Y(),...U(),...le()},"VWindow"),je=L()({name:"VWindow",directives:{Touch:Ot},props:Nt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:t}=oe(e),{isRtl:s}=ft(),{t:l}=mt(),o=Re(e,Ht),f=J(),c=m(()=>s.value?!e.reverse:e.reverse),g=O(!1),x=m(()=>{const C=e.direction==="vertical"?"y":"x",p=(c.value?!g.value:g.value)?"-reverse":"";return`v-window-${C}${p}-transition`}),h=O(0),i=J(void 0),v=m(()=>o.items.value.findIndex(C=>o.selected.value.includes(C.id)));he(v,(C,S)=>{const p=o.items.value.length,P=p-1;p<=2?g.value=C<S:C===P&&S===0?g.value=!0:C===0&&S===P?g.value=!1:g.value=C<S}),Be(Gt,{transition:x,isReversed:g,transitionCount:h,transitionHeight:i,rootRef:f});const d=m(()=>e.continuous||v.value!==0),u=m(()=>e.continuous||v.value!==o.items.value.length-1);function _(){d.value&&o.prev()}function k(){u.value&&o.next()}const V=m(()=>{const C=[],S={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:o.prev,"aria-label":l("$vuetify.carousel.prev")};C.push(d.value?a.prev?a.prev({props:S}):r(Q,S,null):r("div",null,null));const p={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:o.next,"aria-label":l("$vuetify.carousel.next")};return C.push(u.value?a.next?a.next({props:p}):r(Q,p,null):r("div",null,null)),C}),I=m(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?_():k()},right:()=>{c.value?k():_()},start:S=>{let{originalEvent:p}=S;p.stopPropagation()}},...e.touch===!0?{}:e.touch});return A(()=>Pe(r(e.tag,{ref:f,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var C,S;return[r("div",{class:"v-window__container",style:{height:i.value}},[(C=a.default)==null?void 0:C.call(a,{group:o}),e.showArrows!==!1&&r("div",{class:"v-window__controls"},[V.value])]),(S=a.additional)==null?void 0:S.call(a,{group:o})]}}),[[fn("touch"),I.value]])),{group:o}}}),aa=E({...dt(Nt(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),sa=L()({name:"VTabsWindow",props:aa(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=me(Ae,null),s=ge(e,"modelValue"),l=m({get(){var o;return s.value!=null||!t?s.value:(o=t.items.value.find(f=>t.selected.value.includes(f.id)))==null?void 0:o.value},set(o){s.value=o}});return A(()=>{const o=je.filterProps(e);return r(je,F({_as:"VTabsWindow"},o,{modelValue:l.value,"onUpdate:modelValue":f=>l.value=f,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),a)}),{}}});function la(){const e=O(!1);return nt(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:m(()=>e.value?void 0:{transition:"none !important"}),isBooted:mn(e)}}const Ft=E({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...Y(),...xt(),...Bn()},"VWindowItem"),qe=L()({name:"VWindowItem",directives:{Touch:na},props:Ft(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:a}=n;const t=me(Gt),s=kt(e,Ht),{isBooted:l}=la();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=O(!1),f=m(()=>l.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!o.value||!t||(o.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function g(){var d;o.value||!t||(o.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=ce((d=t.rootRef.value)==null?void 0:d.clientHeight)),t.transitionCount.value+=1)}function x(){c()}function h(d){o.value&&lt(()=>{!f.value||!o.value||!t||(t.transitionHeight.value=ce(d.clientHeight))})}const i=m(()=>{const d=t.isReversed.value?e.reverseTransition:e.transition;return f.value?{name:typeof d!="string"?t.transition.value:d,onBeforeEnter:g,onAfterEnter:c,onEnterCancelled:x,onBeforeLeave:g,onAfterLeave:c,onLeaveCancelled:x,onEnter:h}:!1}),{hasContent:v}=Pn(e,s.isSelected);return A(()=>r(gn,{transition:i.value,disabled:!l.value},{default:()=>{var d;return[Pe(r("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[v.value&&((d=a.default)==null?void 0:d.call(a))]),[[hn,s.isSelected.value]])]}})),{groupItem:s}}}),oa=E({...Ft()},"VTabsWindowItem"),ia=L()({name:"VTabsWindowItem",props:oa(),setup(e,n){let{slots:a}=n;return A(()=>{const t=qe.filterProps(e);return r(qe,F({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),a)}),{}}});function ra(e){let{selectedElement:n,containerElement:a,isRtl:t,isHorizontal:s}=e;const l=se(s,a),o=Yt(s,t,a),f=se(s,n),c=Xt(s,n),g=f*.4;return o>c?c-g:o+l<c+f?c-l+f+g:o}function ua(e){let{selectedElement:n,containerElement:a,isHorizontal:t}=e;const s=se(t,a),l=Xt(t,n),o=se(t,n);return l-s/2+o/2}function Ke(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function ca(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function Yt(e,n,a){if(!a)return 0;const{scrollLeft:t,offsetWidth:s,scrollWidth:l}=a;return e?n?l-s+t:t:a.scrollTop}function se(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function Xt(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const da=Symbol.for("vuetify:v-slide-group"),Dt=E({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:da},nextIcon:{type:te,default:"$next"},prevIcon:{type:te,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Y(),...yn(),...U(),...wt({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Je=L()({name:"VSlideGroup",props:Dt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:t}=ft(),{displayClasses:s,mobile:l}=bn(e),o=Re(e,e.symbol),f=O(!1),c=O(0),g=O(0),x=O(0),h=m(()=>e.direction==="horizontal"),{resizeRef:i,contentRect:v}=Se(),{resizeRef:d,contentRect:u}=Se(),_=_n(),k=m(()=>({container:i.el,duration:200,easing:"easeOutQuart"})),V=m(()=>o.selected.value.length?o.items.value.findIndex(y=>y.id===o.selected.value[0]):-1),I=m(()=>o.selected.value.length?o.items.value.findIndex(y=>y.id===o.selected.value[o.selected.value.length-1]):-1);if(He){let y=-1;he(()=>[o.selected.value,v.value,u.value,h.value],()=>{cancelAnimationFrame(y),y=requestAnimationFrame(()=>{if(v.value&&u.value){const b=h.value?"width":"height";g.value=v.value[b],x.value=u.value[b],f.value=g.value+1<x.value}if(V.value>=0&&d.el){const b=d.el.children[I.value];S(b,e.centerActive)}})})}const C=O(!1);function S(y,b){let T=0;b?T=ua({containerElement:i.el,isHorizontal:h.value,selectedElement:y}):T=ra({containerElement:i.el,isHorizontal:h.value,isRtl:t.value,selectedElement:y}),p(T)}function p(y){if(!He||!i.el)return;const b=se(h.value,i.el),T=Yt(h.value,t.value,i.el);if(!(Ke(h.value,i.el)<=b||Math.abs(y-T)<16)){if(h.value&&t.value&&i.el){const{scrollWidth:ie,offsetWidth:Ce}=i.el;y=ie-Ce-y}h.value?_.horizontal(y,k.value):_(y,k.value)}}function P(y){const{scrollTop:b,scrollLeft:T}=y.target;c.value=h.value?T:b}function G(y){if(C.value=!0,!(!f.value||!d.el)){for(const b of y.composedPath())for(const T of d.el.children)if(T===b){S(T);return}}}function H(y){C.value=!1}let w=!1;function R(y){var b;!w&&!C.value&&!(y.relatedTarget&&((b=d.el)!=null&&b.contains(y.relatedTarget)))&&W(),w=!1}function N(){w=!0}function j(y){if(!d.el)return;function b(T){y.preventDefault(),W(T)}h.value?y.key==="ArrowRight"?b(t.value?"prev":"next"):y.key==="ArrowLeft"&&b(t.value?"next":"prev"):y.key==="ArrowDown"?b("next"):y.key==="ArrowUp"&&b("prev"),y.key==="Home"?b("first"):y.key==="End"&&b("last")}function W(y){var T,q;if(!d.el)return;let b;if(!y)b=Cn(d.el)[0];else if(y==="next"){if(b=(T=d.el.querySelector(":focus"))==null?void 0:T.nextElementSibling,!b)return W("first")}else if(y==="prev"){if(b=(q=d.el.querySelector(":focus"))==null?void 0:q.previousElementSibling,!b)return W("last")}else y==="first"?b=d.el.firstElementChild:y==="last"&&(b=d.el.lastElementChild);b&&b.focus({preventScroll:!0})}function M(y){const b=h.value&&t.value?-1:1,T=(y==="prev"?-b:b)*g.value;let q=c.value+T;if(h.value&&t.value&&i.el){const{scrollWidth:ie,offsetWidth:Ce}=i.el;q+=ie-Ce}p(q)}const be=m(()=>({next:o.next,prev:o.prev,select:o.select,isSelected:o.isSelected})),_e=m(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!l.value;case!0:return f.value||Math.abs(c.value)>0;case"mobile":return l.value||f.value||Math.abs(c.value)>0;default:return!l.value&&(f.value||Math.abs(c.value)>0)}}),We=m(()=>Math.abs(c.value)>1),Me=m(()=>{if(!i.value)return!1;const y=Ke(h.value,i.el),b=ca(h.value,i.el);return y-b-Math.abs(c.value)>1});return A(()=>r(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!h.value,"v-slide-group--has-affixes":_e.value,"v-slide-group--is-overflowing":f.value},s.value,e.class],style:e.style,tabindex:C.value||o.selected.value.length?-1:0,onFocus:R},{default:()=>{var y,b,T;return[_e.value&&r("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!We.value}],onMousedown:N,onClick:()=>We.value&&M("prev")},[((y=a.prev)==null?void 0:y.call(a,be.value))??r(Ne,null,{default:()=>[r(K,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),r("div",{key:"container",ref:i,class:"v-slide-group__container",onScroll:P},[r("div",{ref:d,class:"v-slide-group__content",onFocusin:G,onFocusout:H,onKeydown:j},[(b=a.default)==null?void 0:b.call(a,be.value)])]),_e.value&&r("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!Me.value}],onMousedown:N,onClick:()=>Me.value&&M("next")},[((T=a.next)==null?void 0:T.call(a,be.value))??r(Ne,null,{default:()=>[r(K,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:o.selected,scrollTo:M,scrollOffset:c,focus:W}}});function va(e){return e?e.map(n=>ot(n)?n:{text:n,value:n}):[]}const fa=E({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Dt({mandatory:"force",selectedClass:"v-tab-item--selected"}),...ve(),...U()},"VTabs"),ma=L()({name:"VTabs",props:fa(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const s=ge(e,"modelValue"),l=m(()=>va(e.items)),{densityClasses:o}=fe(e),{backgroundColorClasses:f,backgroundColorStyles:c}=Sn(B(e,"bgColor")),{scopeId:g}=$n();return Ze({VTab:{color:B(e,"color"),direction:B(e,"direction"),stacked:B(e,"stacked"),fixed:B(e,"fixedTabs"),sliderColor:B(e,"sliderColor"),hideSlider:B(e,"hideSlider")}}),A(()=>{const x=Je.filterProps(e),h=!!(t.window||e.items.length>0);return r(ee,null,[r(Je,F(x,{modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},o.value,f.value,e.class],style:[{"--v-tabs-height":ce(e.height)},c.value,e.style],role:"tablist",symbol:Ae},g,a),{default:()=>{var i;return[((i=t.default)==null?void 0:i.call(t))??l.value.map(v=>{var d;return((d=t.tab)==null?void 0:d.call(t,{item:v}))??r(Te,F(v,{key:v.text,value:v.value}),{default:()=>{var u;return(u=t[`tab.${v.value}`])==null?void 0:u.call(t,{item:v})}})})]}}),h&&r(sa,F({modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,key:"tabs-window"},g),{default:()=>{var i;return[l.value.map(v=>{var d;return((d=t.item)==null?void 0:d.call(t,{item:v}))??r(ia,{value:v.value},{default:()=>{var u;return(u=t[`item.${v.value}`])==null?void 0:u.call(t,{item:v})}})}),(i=t.window)==null?void 0:i.call(t)]}})])}),{}}}),ha={class:"text-left"},ga=ht({__name:"GameWrapper",props:{data:{}},setup(e){const n=gt();return(a,t)=>{const s=wn("router-view");return X(),re("div",ha,[(X(),we(xn,{to:"#header"},[r(ma,{"align-tabs":"center","bg-color":"basil",grow:"",class:"game-tabs"},{default:D(()=>[r(Te,{to:{name:z(xe).GAME_RESULT,params:{id:z(n).params.id}}},{default:D(()=>[Fe("Result")]),_:1},8,["to"]),r(Te,{to:{name:z(xe).GAME_BUILD,params:{id:z(n).params.id}}},{default:D(()=>[Fe("Builds")]),_:1},8,["to"])]),_:1})])),r(s,{data:a.data},null,8,["data"])])}}});class ya{constructor(n){Oe(this,"api");this.api=n}async game(n){return await this.api.get(Ln.GAME(n))}}const ba=e=>{const n=new ya(e);return{game:t=>kn(["search",t],async()=>await n.game(t),{refetchOnWindowFocus:!1,refetchOnReconnect:!1})}},_a=zn("v-alert-title"),Ca=["success","info","warning","error"],Sa=E({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:te,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Ca.includes(e)},...Y(),...ve(),...it(),...$e(),...rt(),...Et(),...Ee(),...U(),...le(),...ze({variant:"flat"})},"VAlert"),wa=L()({name:"VAlert",props:Sa(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{emit:a,slots:t}=n;const s=ge(e,"modelValue"),l=m(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),o=m(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=oe(e),{colorClasses:c,colorStyles:g,variantClasses:x}=Ct(o),{densityClasses:h}=fe(e),{dimensionStyles:i}=ut(e),{elevationClasses:v}=Le(e),{locationStyles:d}=ct(e),{positionClasses:u}=It(e),{roundedClasses:_}=Ie(e),{textColorClasses:k,textColorStyles:V}=ue(B(e,"borderColor")),{t:I}=mt(),C=m(()=>({"aria-label":I(e.closeLabel),onClick(S){s.value=!1,a("click:close",S)}}));return()=>{const S=!!(t.prepend||l.value),p=!!(t.title||e.title),P=!!(t.close||e.closable);return s.value&&r(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,c.value,h.value,v.value,u.value,_.value,x.value,e.class],style:[g.value,i.value,d.value,e.style],role:"alert"},{default:()=>{var G,H;return[_t(!1,"v-alert"),e.border&&r("div",{key:"border",class:["v-alert__border",k.value],style:V.value},null),S&&r("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?r(Z,{key:"prepend-defaults",disabled:!l.value,defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},t.prepend):r(K,{key:"prepend-icon",density:e.density,icon:l.value,size:e.prominent?44:28},null)]),r("div",{class:"v-alert__content"},[p&&r(_a,{key:"title"},{default:()=>{var w;return[((w=t.title)==null?void 0:w.call(t))??e.title]}}),((G=t.text)==null?void 0:G.call(t))??e.text,(H=t.default)==null?void 0:H.call(t)]),t.append&&r("div",{key:"append",class:"v-alert__append"},[t.append()]),P&&r("div",{key:"close",class:"v-alert__close"},[t.close?r(Z,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var w;return[(w=t.close)==null?void 0:w.call(t,{props:C.value})]}}):r(Q,F({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},C.value),null)])]}})}}}),xa={class:"header d-flex"},ka=ye("div",{id:"header",class:"container w-100"},null,-1),pa=ye("h2",{class:"text-h5"},"Loading Game...",-1),Ta=ye("span",{class:"text-h6 font-weight-bold"},"Game not found",-1),Va={key:1,class:"container fill-height mt-5"},Pa=ht({__name:"SearchView",setup(e){const n=me(Vn.API),a=gt(),{game:t}=ba(n),{isLoading:s,data:l,error:o}=t(a.params.id),f=J(!1),c=m(()=>{if(!f.value)return l.value;const g=JSON.parse(JSON.stringify(l.value));return g.playersData[0].gameResult="lost",g});return(g,x)=>(X(),re(ee,null,[ye("header",xa,[r(Q,{variant:"text",to:{name:z(xe).HOME},color:"orange",icon:"mdi-arrow-left"},null,8,["to"]),ka]),z(s)||z(o)?(X(),we(pn,{key:0,class:"fill-height"},{default:D(()=>[r(Ye,{class:"text-center align-center items-center fill-height"},{default:D(()=>[z(s)?(X(),re(ee,{key:0},[r(Vt,{color:"primary",indeterminate:"disable-shrink",size:"50",width:"8"}),pa],64)):z(o)?(X(),we(wa,{key:1,height:"100",type:"error",closable:!1},{default:D(()=>[Ta]),_:1})):Tn("",!0)]),_:1})]),_:1})):(X(),re("div",Va,[r(Ye,{class:"text-center fill-height"},{default:D(()=>[r(ga,{data:c.value},null,8,["data"])]),_:1})]))],64))}});export{Pa as default};