import{M as b}from"./MastermindIcon-CwemH_3V.js";import{a as w,u as k,i as W,p as x}from"./useTeams-ZrAddYHw.js";import{V as P}from"./VTable-BlVw-9R9.js";import{d as T,b as V,w as I,o as l,e as t,n as u,j as c,k as S,F as N,t as a,h as R,ak as B,i as m,f as h,ah as G,ai as $,_ as C,a$ as y,a as _}from"./index-CWFRuG_G.js";const n=o=>(G("data-v-e74fbaaa"),o=o(),$(),o),D=n(()=>t("th",null,"#",-1)),F=n(()=>t("th",null,"Nickname",-1)),M=n(()=>t("th",null,"Rating",-1)),j=n(()=>t("th",null,"Powerscore",-1)),E=n(()=>t("th",null,"Fighter Value",-1)),L=n(()=>t("th",null,"Income",-1)),z=n(()=>t("th",null,"Spell",-1)),q=n(()=>t("th",null,"Legion",-1)),A=[D,F,M,j,E,L,z,q],H={class:"text-left"},J={class:"text-left"},K={key:0,class:"text-warning font-weight-bold"},O={class:"text-left"},Q={class:"text-left"},U={class:"text-left"},X={class:"text-left"},Y={class:"text-left"},Z=["src"],tt={class:"text-left"},et=T({__name:"GameTable",props:{players:{},isWin:{type:Boolean}},setup(o){return(i,p)=>(l(),V(P,{class:"custom-table"},{default:I(()=>[t("thead",null,[t("tr",{class:u({win:i.isWin,lost:!i.isWin})},A,2)]),(l(!0),c(N,null,S(i.players,e=>(l(),c("tr",{key:e.playerId},[t("td",H,a(e.playerSlot),1),t("td",J,[R(a(e.playerName)+" ",1),e.mvp?(l(),c("span",K,"[MVP]")):B("",!0)]),t("td",O,a(e.overallElo),1),t("td",Q,a(e.netWorth),1),t("td",U,a(e.value),1),t("td",X,a(e.income),1),t("td",Y,[t("img",{clas:"icon",src:m(w)(e.chosenSpell)},null,8,Z)]),t("td",tt,[h(b,{mastermind:e.legion,"is-megamind":e.megamind},null,8,["mastermind","is-megamind"])])]))),128))]),_:1}))}}),g=C(et,[["__scopeId","data-v-e74fbaaa"]]),st={class:"w-100"},at={class:"d-flex justify-space-between"},nt={class:"patch"},dt=T({__name:"GameResult",props:{data:{}},setup(o){const i=o,{playersData:p}=y(i.data),e=_(()=>p.value.map(s=>({...s,income:s.incomePerWave[s.incomePerWave.length-1],netWorth:s.netWorthPerWave[s.netWorthPerWave.length-1]}))),{firstTeam:f,secondTeam:v}=k(e),r=_(()=>{const s=W(f.value[0]);return{title:x(s),isWin:s}}),d=_(()=>{const s=W(v.value[0]);return{title:x(s),isWin:s}});return(s,ot)=>(l(),c("div",st,[t("div",at,[t("div",{class:u(["result",r.value.isWin?"text-green":"text-red"])},a(r.value.title),3),t("span",nt,a(s.data.version),1)]),h(g,{players:m(f),isWin:r.value.isWin},null,8,["players","isWin"]),t("div",{class:u(["result",d.value.isWin?"text-green":"text-red"])},a(d.value.title),3),h(g,{players:m(v),isWin:d.value.isWin},null,8,["players","isWin"])]))}});export{dt as default};