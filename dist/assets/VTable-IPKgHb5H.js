import{J as h,U as d,ai as m,W as b,X as v,L as f,Y as c,aj as u,N as g,f as t,a7 as x}from"./index-C4zrIX2P.js";const T=h({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...d(),...m(),...b(),...v()},"VTable"),k=f()({name:"VTable",props:T(),setup(a,r){let{slots:e,emit:y}=r;const{themeClasses:i}=c(a),{densityClasses:n}=u(a);return g(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},i.value,n.value,a.class],style:a.style},{default:()=>{var o,l,s;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:x(a.height)}},[t("table",null,[e.default()])]):(l=e.wrapper)==null?void 0:l.call(e),(s=e.bottom)==null?void 0:s.call(e)]}})),{}}});export{k as V};