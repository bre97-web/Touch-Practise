import{_ as u,m as c,e as h,r as n,o as p,c as f,a as o,b as s,n as r,i as _,p as m,f as w}from"./index-71e793d5.js";import{N as g,O as x,S}from"./score-30d3a406.js";const v={components:{Next:g,Operate:x,Score:S},data(){return{index:1,countdown:10,isClose:!1}},computed:{...c("TouchStore",["get","getFirst"]),...c("ScoreStore",{getScore:"get"}),leftOffset(){return{left:-100+this.countdown*10+"%"}}},watch:{countdown:{immediate:!1,handler(e){e>10&&(this.countdown=10),e<0&&(this.isClose=!0,this.countdown=0,clearInterval(this.timer))}},get:{deep:!0,handler(){this.get.length<=0&&(this.addition(++this.index),this.countdown+=2)}},index:{handler(){this.index>10&&(this.index=1)}}},methods:{...h("TouchStore",["create","addition","additionOther"])},beforeMount(){this.create(this.index)},mounted(){this.timer=setInterval(()=>{this.countdown--},1e3)}},y=e=>(m("data-v-5eb859fa"),e=e(),w(),e),b=y(()=>o("header",null,[o("h1",null,"FourKey Mode"),o("h2",null,"No time limiter and four key")],-1)),N={class:"overflow-clip flex flex-col gap-8"},O={class:"relative rounded-full h-10 overflow-clip"};function I(e,C,k,B,t,i){const a=n("Next"),d=n("Operate"),l=n("Score");return p(),f("div",null,[b,o("main",N,[s(a,{class:r({grayscale:t.countdown<=0})},null,8,["class"]),o("div",O,[o("div",{class:r(["progress",{"bg-green-500":t.countdown>20&&t.countdown<=30,"bg-orange-500":t.countdown>10&&t.countdown<=20,"bg-red-500":t.countdown<=10}]),style:_(i.leftOffset)},null,6)]),s(d),s(l)])])}const F=u(v,[["render",I],["__scopeId","data-v-5eb859fa"]]);export{F as default};