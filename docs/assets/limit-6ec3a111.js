import{_ as i,N as d,O as u,m as p,e as _,r as l,o as n,c as h,a as e,b as m,g as f,h as v,t as s,p as g,f as w}from"./index-4a5fba38.js";const S={components:{Next:d,Operate:u},data(){return{isClose:!1,countdown:30}},computed:{...p("ScoreStore",["get"])},watch:{countdown:{immediate:!1,handler(t){t<=0&&(clearInterval(this.timer),this.isClose=!0)}}},methods:{..._("ScoreStore",["set"])},created(){this.set({score:0,combo:0,result:0})},mounted(){this.timer=setInterval(()=>{this.countdown--},1e3)}},a=t=>(g("data-v-e28572a0"),t=t(),w(),t),x=a(()=>e("header",null,[e("h1",null,"Limit Mode"),e("h2",null,"30 sec")],-1)),C={class:"rounded-full overflow-clip h-10"},N=["value"],O={class:"w-full flex gap-16 items-center justify-center"},I=a(()=>e("div",{class:"flex-grow"},[e("h1",null,"COMBO"),e("h1",null,"SCORE"),e("h1",null,"RESULT")],-1));function y(t,B,k,b,o,E){const c=l("Next"),r=l("Operate");return n(),h("div",null,[x,e("main",null,[m(c),o.isClose?v("",!0):(n(),f(r,{key:0})),e("div",C,[e("progress",{max:"30",value:o.countdown,class:"w-full h-full"},null,8,N)]),e("div",O,[I,e("div",null,[e("h1",null,s(t.get.combo),1),e("h1",null,s(t.get.score),1),e("h1",null,s(t.get.result.toFixed(3)),1)])])])])}const L=i(S,[["render",y],["__scopeId","data-v-e28572a0"]]);export{L as default};
