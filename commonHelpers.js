import{i as d,S as u}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="43769783-4ebd08048bd6758fdf84d5c5e",h=s=>{const o=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${f}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},y=s=>s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:l})=>`<div class = "image-holder"><a class="gallery-link" href="${r}">
     <img  class="gallery-image"
      src="${o}"
      alt="${i}"
    />
    </a>
   <div>
   <table>
   <tr class= "title">
   <td>Likes</td> 
   <td>Views</td>
   <td>Comments</td>
   <td>Downloads</td>
   </tr>
   <tr>
   <td>${e}</td> 
   <td>${t}</td>
   <td>${a}</td>
   <td>${l}</td>
   </tr>
   </table>
   </div>
    </div>
    `).join(""),p=document.querySelector('input[name="search"]'),c=document.querySelector(".gallery-list"),g=document.querySelector(".form-image-search"),n=document.querySelector(".loader");g.addEventListener("submit",L);function L(s){s.preventDefault(),n.classList.remove("is-hidden");const o=p.value.trim();console.log(o),c.innerHTML="",o===""?(s.target.reset(),n.classList.add("is-hidden")):h(o).then(r=>{r.total===0&&(d.info({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",timeout:3e3}),s.target.reset());const i=y(r.hits);c.innerHTML=i,new u(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>console.log(r)).finally(()=>{s.target.reset(),n.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map
