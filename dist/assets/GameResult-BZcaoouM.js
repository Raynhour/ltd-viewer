import{M as b}from"./MastermindIcon-_4L9oj3u.js";import{a as w,u as P,i as W,p as x}from"./useTeams-Capxemwn.js";import{V as S}from"./VTable-IPKgHb5H.js";import{d as T,b as V,w as k,o as l,e as t,n as u,j as c,k as I,F as N,t as a,h as R,C as B,i as m,f as h,aS as C,aT as G,_ as $,aU as y,a as _}from"./index-C4zrIX2P.js";const n=o=>(C("data-v-e74fbaaa"),o=o(),G(),o),D=n(()=>t("th",null,"#",-1)),F=n(()=>t("th",null,"Nickname",-1)),M=n(()=>t("th",null,"Rating",-1)),j=n(()=>t("th",null,"Powerscore",-1)),E=n(()=>t("th",null,"Fighter Value",-1)),L=n(()=>t("th",null,"Income",-1)),z=n(()=>t("th",null,"Spell",-1)),U=n(()=>t("th",null,"Legion",-1)),q=[D,F,M,j,E,L,z,U],A={class:"text-left"},H={class:"text-left"},J={key:0,class:"text-warning font-weight-bold"},K={class:"text-left"},O={class:"text-left"},Q={class:"text-left"},X={class:"text-left"},Y={class:"text-left"},Z=["src"],tt={class:"text-left"},et=T({__name:"GameTable",props:{players:{},isWin:{type:Boolean}},setup(o){return(i,p)=>(l(),V(S,{class:"custom-table"},{default:k(()=>[t("thead",null,[t("tr",{class:u({win:i.isWin,lost:!i.isWin})},q,2)]),(l(!0),c(N,null,I(i.players,e=>(l(),c("tr",{key:e.playerId},[t("td",A,a(e.playerSlot),1),t("td",H,[R(a(e.playerName)+" ",1),e.mvp?(l(),c("span",J,"[MVP]")):B("",!0)]),t("td",K,a(e.overallElo),1),t("td",O,a(e.netWorth),1),t("td",Q,a(e.value),1),t("td",X,a(e.income),1),t("td",Y,[t("img",{clas:"icon",src:m(w)(e.chosenSpell)},null,8,Z)]),t("td",tt,[h(b,{mastermind:e.legion,"is-megamind":e.megamind},null,8,["mastermind","is-megamind"])])]))),128))]),_:1}))}}),g=$(et,[["__scopeId","data-v-e74fbaaa"]]),st={class:"w-100"},at={class:"d-flex justify-space-between"},nt={class:"patch"},dt=T({__name:"GameResult",props:{data:{}},setup(o){const i=o,{playersData:p}=y(i.data),e=_(()=>p.value.map(s=>({...s,income:s.incomePerWave[s.incomePerWave.length-1],netWorth:s.netWorthPerWave[s.netWorthPerWave.length-1]}))),{firstTeam:f,secondTeam:v}=P(e),r=_(()=>{const s=W(f.value[0]);return{title:x(s),isWin:s}}),d=_(()=>{const s=W(v.value[0]);return{title:x(s),isWin:s}});return(s,ot)=>(l(),c("div",st,[t("div",at,[t("div",{class:u(["result",r.value.isWin?"text-green":"text-red"])},a(r.value.title),3),t("span",nt,a(s.data.version),1)]),h(g,{players:m(f),isWin:r.value.isWin},null,8,["players","isWin"]),t("div",{class:u(["result",d.value.isWin?"text-green":"text-red"])},a(d.value.title),3),h(g,{players:m(v),isWin:d.value.isWin},null,8,["players","isWin"])]))}});export{dt as default};