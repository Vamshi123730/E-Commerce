const nav=document.getElementById("menu-bar");
const bar=document.getElementById("navbar");
const cancel=document.getElementById("cencel");


if(nav){
    nav.addEventListener('click',()=>{
        bar.classList.add('active');
    })
}
if(cancel){
    cancel.addEventListener('click',()=>{
        bar.classList.remove('active');
    })
}
