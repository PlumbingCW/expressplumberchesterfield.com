(function(){
var d=document,root=d.documentElement;
var ham=d.querySelector('.hamburger'),drawer=d.getElementById('mob-drawer'),ov=d.getElementById('mob-overlay'),cl=d.querySelector('.drawer-close');
function openM(){if(!drawer)return;drawer.hidden=false;ov.classList.add('visible');ham.setAttribute('aria-expanded','true');root.style.overflow='hidden'}
function closeM(){if(!drawer)return;drawer.hidden=true;ov.classList.remove('visible');ham.setAttribute('aria-expanded','false');root.style.overflow=''}
if(ham){ham.addEventListener('click',function(){drawer.hidden?openM():closeM()});ov.addEventListener('click',closeM);cl.addEventListener('click',closeM);
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM()});
window.addEventListener('resize',function(){if(window.innerWidth>900)closeM()});
drawer.addEventListener('click',function(e){if(e.target.closest('a'))closeM()});}
d.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){
var it=b.parentNode,a=it.querySelector('.faq-answer'),o=it.classList.toggle('open');
b.setAttribute('aria-expanded',o?'true':'false');a.style.maxHeight=o?a.scrollHeight+'px':'';})});
})();
