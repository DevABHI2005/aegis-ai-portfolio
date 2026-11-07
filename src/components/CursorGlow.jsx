import {useState,useEffect} from "react";

function CursorGlow(){

const[pos,setPos]=useState({x:0,y:0});

useEffect(()=>{

const move=(e)=>{

setPos({

x:e.clientX,

y:e.clientY

})

}

window.addEventListener("mousemove",move);

return ()=>window.removeEventListener("mousemove",move);

},[])

return(

<div

style={{

position:"fixed",

left:pos.x-180,

top:pos.y-180,

width:"360px",

height:"360px",

borderRadius:"50%",

background:"radial-gradient(circle, rgba(105,230,255,.18), transparent 70%)",

pointerEvents:"none",

zIndex:-1,

filter:"blur(20px)",

transition:"all .08s linear"

}}

>

</div>

)

}

export default CursorGlow;