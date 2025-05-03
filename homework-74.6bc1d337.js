const e=async()=>{try{return await fetch("https://680dfed9c47cb8074d91bfe0.mockapi.io/api/blog-project/students").then(e=>e.json())}catch(e){return e}},t=e=>{let t="";return e.map(e=>{t+=`<tr id="${e.id}">
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.course}</td>
                <td>
                    <ul>
                    ${c(e.skills)}
                    </ul>
                </td>
                <td>${e.email}</td>
                <td>${a(e.isEnrolled)}</td>
                <td> 
                    <button id="change" class="change">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438}</button>
                    <button id="delete" class="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
                </td>
            </tr>`}),t},c=e=>{let t="";return e.map(e=>{t+=`<li>
                ${e}
            </li>`}),t},a=e=>e?"Записаний":"Не записаний",n=async e=>{let t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch("https://680dfed9c47cb8074d91bfe0.mockapi.io/api/blog-project/students",t)}catch(e){return e}},d=async(e,t)=>{let c={method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch(`https://680dfed9c47cb8074d91bfe0.mockapi.io/api/blog-project/students/${e}`,c)}catch(e){return e}},r=async e=>{try{return await fetch(`https://680dfed9c47cb8074d91bfe0.mockapi.io/api/blog-project/students/${e}`,{method:"DELETE"})}catch(e){return e}},u=(e,t,c,a,n,d,r,u,l)=>{let i=t.target.closest("tr");c.map(t=>{String(t.id)===i.id&&(e.id=t.id,a.value=t.name,n.value=t.age,d.value=t.course,r.value=t.skills.join(", "),u.value=t.email,l.checked=t.isEnrolled)})},l=document.querySelector("#get-students-btn"),i=document.querySelector("#add-student-btn"),o=document.querySelector("#close-btn"),s=document.querySelector("tbody"),m=document.querySelector("#name"),h=document.querySelector("#age"),y=document.querySelector("#course"),p=document.querySelector("#skills"),v=document.querySelector("#email"),b=document.querySelector("#checkbox"),k=document.querySelector("#name-c"),S=document.querySelector("#age-c"),g=document.querySelector("#course-c"),f=document.querySelector("#skills-c"),q=document.querySelector("#email-c"),E=document.querySelector("#checkbox-c"),L=document.querySelector(".backdrop"),w=document.querySelector("#add-student-btn-c");l.addEventListener("click",async()=>{await e().then(e=>{s.innerHTML=t(e)})}),i.addEventListener("click",async c=>{c.preventDefault();let a={name:m.value,age:Number.parseInt(h.value),course:y.value,skills:p.value.split(","),email:v.value,isEnrolled:b.checked};await n(a),await e().then(e=>{s.innerHTML=t(e)}),m.value="",h.value="",y.value="",p.value="",v.value="",b.checked=!1}),s.addEventListener("click",async c=>{if(c.preventDefault(),"change"===c.target.id&&(L.classList.remove("is-hidden"),await e().then(e=>{u(L,c,e,k,S,g,f,q,E)})),"delete"===c.target.id){let a=c.target.parentNode.parentNode.firstElementChild.textContent;await r(a),await e().then(e=>{s.innerHTML=t(e)})}}),o.addEventListener("click",()=>{L.classList.add("is-hidden")}),w.addEventListener("click",async c=>{c.preventDefault();let a=L.id,n={name:k.value,age:Number.parseInt(S.value),course:g.value,skills:f.value.split(","),email:q.value,isEnrolled:E.checked};await d(a,n),await e().then(e=>{s.innerHTML=t(e)}),L.classList.add("is-hidden")});
//# sourceMappingURL=homework-74.6bc1d337.js.map
