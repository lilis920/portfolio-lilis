const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const progress=$("#progress"), menu=$("#menu"), nav=$("#nav"), theme=$("#theme");
window.addEventListener("scroll",()=>{
  const h=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(h>0?(scrollY/h)*100:0)+"%";
});
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
$$(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const saved=localStorage.getItem("lilis-theme");
if(saved==="light")document.body.classList.add("light");
theme?.addEventListener("click",()=>{
  document.body.classList.toggle("light");
  localStorage.setItem("lilis-theme",document.body.classList.contains("light")?"light":"dark");
});
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
$$(".reveal").forEach(e=>obs.observe(e));
const sections=$$("main section[id]"), links=$$(".nav a");
function active(){
  let id="home";
  sections.forEach(s=>{if(scrollY>=s.offsetTop-180)id=s.id});
  links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+id));
}
window.addEventListener("scroll",active); active();
