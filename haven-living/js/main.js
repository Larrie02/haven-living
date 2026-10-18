var P=[
{n:"Luna Lounge Chair",c:"Chairs",p:890000,o:null,b:"New",s:"luna",pos:"center 60%",k:"Seating"},
{n:"Nordic 2-Seater Sofa",c:"Sofas",p:1250000,o:null,b:"",s:"nordic",pos:"center",k:"Sofas"},
{n:"Arlo Coffee Table",c:"Tables",p:420000,o:520000,b:"-20%",s:"arlo",pos:"center",k:"Tables"},
{n:"Evo Work Desk",c:"Storage",p:680000,o:null,b:"",s:"desk",pos:"center 60%",k:"Desks"},
{n:"Haven Accent Chair",c:"Chairs",p:750000,o:null,b:"New",s:"accent",pos:"center 62%",k:"Seating"},
{n:"Serene Dining Table",c:"Tables",p:1640000,o:null,b:"",s:"dining",pos:"center 60%",k:"Dining"},
{n:"Aura Floor Lamp",c:"Lighting",p:185000,o:240000,b:"-23%",s:"lamp",pos:"30% 40%",k:"Lighting"},
{n:"Oak Display Shelf",c:"Storage",p:560000,o:null,b:"",s:"shelf",pos:"center 35%",k:"Storage"},
{n:"Olive Boucle Sofa",c:"Sofas",p:1980000,o:null,b:"Hot",s:"olive",pos:"center",k:"Sofas"}
];
var fmt=function(v){return "₦"+v.toLocaleString("en-NG")};
var grid=document.getElementById("grid"),count=0;
grid.innerHTML=P.map(function(x,i){
return '<article class="card" data-c="'+x.c+'"><div class="pic" style="background:'+x.bg+'"><img data-img="'+x.s+'" alt="'+x.n+'" style="object-position:'+x.pos+'">'+
(x.b?'<span class="badge'+(x.o?' sale':'')+'">'+x.b+'</span>':'')+'</div><div class="info"><div><small>'+x.k+'</small><h3>'+x.n+'</h3><span class="price">'+fmt(x.p)+(x.o?'<s>'+fmt(x.o)+'</s>':'')+'</span></div><button class="add" data-i="'+i+'" aria-label="Add '+x.n+' to cart">+</button></div></article>';
}).join("");
var IMG={
  "shelf": "images/shelf.jpg",
  "luna": "images/luna.jpg",
  "olive": "images/olive.jpg",
  "lamp": "images/lamp.jpg",
  "desk": "images/desk.jpg",
  "wood": "images/wood.jpg",
  "bed": "images/bed.jpg",
  "nordic": "images/nordic.jpg",
  "accent": "images/accent.jpg",
  "hero": "images/hero.jpg",
  "dining": "images/dining.jpg",
  "arlo": "images/arlo.jpg"
};
document.querySelectorAll("img[data-img]").forEach(function(i){i.src=IMG[i.dataset.img]});
var toast=document.getElementById("toast"),tt;
function say(t){toast.textContent=t;toast.classList.add("show");clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove("show")},1800)}
grid.addEventListener("click",function(e){var b=e.target.closest(".add");if(!b)return;count++;document.getElementById("count").textContent=count;say(P[b.dataset.i].n+" added to cart")});
function filter(f){
document.querySelectorAll("#tabs button").forEach(function(b){b.classList.toggle("on",b.dataset.f===f)});
grid.querySelectorAll(".card").forEach(function(c){c.hidden=!(f==="all"||c.dataset.c===f)})}
document.getElementById("tabs").addEventListener("click",function(e){var b=e.target.closest("button");if(b)filter(b.dataset.f)});
document.getElementById("reset").addEventListener("click",function(){filter("all")});
document.querySelectorAll(".cat").forEach(function(c){c.addEventListener("click",function(){var m={Sofas:"Sofas",Bedroom:"all",Tables:"Tables",Desks:"Storage"};filter(m[c.dataset.cat]||"all")})});
document.getElementById("cartBtn").addEventListener("click",function(){say(count?count+" item(s) in your cart":"Your cart is empty. Add a piece to start.")});
document.getElementById("nf").addEventListener("submit",function(e){e.preventDefault();document.getElementById("ok").textContent="You’re in! Check your inbox for your 10% code.";e.target.reset()});
