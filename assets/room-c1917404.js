import{am as r,s as t,y as n}from"./index-9d08cdbb.js";const f=r("room",()=>{const s=t({}),o=t([]);return{info:s,peoples:o,GET_INFO:async e=>{const a=await n({method:"GET",url:"/room/info",params:{id:e}});s.value=a.data.info,o.value=a.data.peoples||[]},ADD_PEOPLE:e=>{o.value.findIndex(a=>a.id===e.id)===-1&&o.value.push(e)},REMOVE_PEOPLE:e=>{o.value=o.value.filter(a=>a.id!==e)}}});export{f as u};
