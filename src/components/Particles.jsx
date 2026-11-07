import { useEffect } from "react";

function Particles() {

useEffect(()=>{

const move=(e)=>{

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=e.clientX+"px";

particle.style.top=e.clientY+"px";

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},800);

}

window.addEventListener("mousemove",move);

return ()=>window.removeEventListener("mousemove",move);

},[]);

return null;

}

export default Particles;