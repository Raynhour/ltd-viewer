import{a as T,m as w,u as V,i as v,p as W}from"./useTeams-CNvrrXJ7.js";import{V as b}from"./VTable-CmQMnSIt.js";import{d as P,b as k,w as I,o as i,e as t,n as h,j as c,k as S,F as B,t as a,h as N,B as R,i as r,aO as G,aP as y,_ as C,aQ as $,a as u,f as x}from"./index-CWiaxeVN.js";const o=n=>(G("data-v-3fd11f67"),n=n(),y(),n),D=o(()=>t("th",null,"#",-1)),F=o(()=>t("th",null,"Nickname",-1)),j=o(()=>t("th",null,"Rating",-1)),E=o(()=>t("th",null,"Powerscore",-1)),L=o(()=>t("th",null,"Fighter Value",-1)),z=o(()=>t("th",null,"Income",-1)),M=o(()=>t("th",null,"Spell",-1)),O=o(()=>t("th",null,"Legion",-1)),Q=[D,F,j,E,L,z,M,O],q={class:"text-left"},A={class:"text-left"},H={key:0,class:"text-warning font-weight-bold"},J={class:"text-left"},K={class:"text-left"},U={class:"text-left"},X={class:"text-left"},Y={class:"text-left"},Z=["src"],tt={class:"text-left"},et=["src"],st=P({__name:"GameTable",props:{players:{},isWin:{type:Boolean}},setup(n){return(l,m)=>(i(),k(b,{class:"custom-table"},{default:I(()=>[t("thead",null,[t("tr",{class:h({win:l.isWin,lost:!l.isWin})},Q,2)]),(i(!0),c(B,null,S(l.players,s=>(i(),c("tr",{key:s.playerId},[t("td",q,a(s.playerSlot),1),t("td",A,[N(a(s.playerName)+" ",1),s.mvp?(i(),c("span",H,"[MVP]")):R("",!0)]),t("td",J,a(s.overallElo),1),t("td",K,a(s.netWorth),1),t("td",U,a(s.value),1),t("td",X,a(s.income),1),t("td",Y,[t("img",{clas:"icon",src:r(T)(s.chosenSpell)},null,8,Z)]),t("td",tt,[t("img",{class:"icon",src:r(w)(s.legion)},null,8,et)])]))),128))]),_:1}))}}),g=C(st,[["__scopeId","data-v-3fd11f67"]]),at={class:"w-100"},ot={class:"d-flex justify-space-between"},nt={class:"patch"},dt=P({__name:"GameResult",props:{data:{}},setup(n){const l=n,{playersData:m}=$(l.data),s=u(()=>m.value.map(e=>({...e,income:e.incomePerWave[e.incomePerWave.length-1],netWorth:e.netWorthPerWave[e.netWorthPerWave.length-1]}))),{firstTeam:p,secondTeam:f}=V(s),d=u(()=>{const e=v(p.value[0]);return{title:W(e),isWin:e}}),_=u(()=>{const e=v(f.value[0]);return{title:W(e),isWin:e}});return(e,lt)=>(i(),c("div",at,[t("div",ot,[t("div",{class:h(["result",d.value.isWin?"text-green":"text-red"])},a(d.value.title),3),t("span",nt,a(e.data.version),1)]),x(g,{players:r(p),isWin:d.value.isWin},null,8,["players","isWin"]),t("div",{class:h(["result",_.value.isWin?"text-green":"text-red"])},a(_.value.title),3),x(g,{players:r(f),isWin:_.value.isWin},null,8,["players","isWin"])]))}});export{dt as default};