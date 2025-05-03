const e=async()=>{try{return await fetch("https://68164d2232debfe95dbe0c40.mockapi.io/api/blog-project/students").then(e=>e.json())}catch(e){return e}},t=e=>{let t="";return e.map(e=>{t+=`<tr id="${e.id}">
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.course}</td>
                <td>
                    <ul>
                    ${a(e.skills)}
                    </ul>
                </td>
                <td>${e.email}</td>
                <td>${c(e.isEnrolled)}</td>
                <td> 
                    <button id="change" class="change">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438}</button>
                    <button id="delete" class="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
                </td>
            </tr>`}),t},a=e=>{let t="";return e.map(e=>{t+=`<li>
                ${e}
            </li>`}),t},c=e=>e?"Записаний":"Не записаний",n=async e=>{let t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch("https://68164d2232debfe95dbe0c40.mockapi.io/api/blog-project/students",t)}catch(e){return e}},d=async(e,t)=>{let a={method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch(`https://68164d2232debfe95dbe0c40.mockapi.io/api/blog-project/students/${e}`,a)}catch(e){return e}},r=async e=>{try{return await fetch(`https://68164d2232debfe95dbe0c40.mockapi.io/api/blog-project/students/${e}`,{method:"DELETE"})}catch(e){return e}},u=(e,t,a,c,n,d,r,u,l)=>{let i=t.target.closest("tr");a.map(t=>{String(t.id)===i.id&&(e.id=t.id,c.value=t.name,n.value=t.age,d.value=t.course,r.value=t.skills.join(", "),u.value=t.email,l.checked=t.isEnrolled)})},l=document.querySelector("#get-students-btn"),i=document.querySelector("#add-student-btn"),o=document.querySelector("#close-btn"),s=document.querySelector("tbody"),m=document.querySelector("#name"),h=document.querySelector("#age"),y=document.querySelector("#course"),p=document.querySelector("#skills"),v=document.querySelector("#email"),b=document.querySelector("#checkbox"),k=document.querySelector("#name-c"),S=document.querySelector("#age-c"),g=document.querySelector("#course-c"),q=document.querySelector("#skills-c"),f=document.querySelector("#email-c"),E=document.querySelector("#checkbox-c"),L=document.querySelector(".backdrop"),w=document.querySelector("#add-student-btn-c");l.addEventListener("click",async()=>{await e().then(e=>{s.innerHTML=t(e)})}),i.addEventListener("click",async a=>{a.preventDefault();let c={name:m.value,age:Number.parseInt(h.value),course:y.value,skills:p.value.split(","),email:v.value,isEnrolled:b.checked};await n(c),await e().then(e=>{s.innerHTML=t(e)}),m.value="",h.value="",y.value="",p.value="",v.value="",b.checked=!1}),s.addEventListener("click",async a=>{if(a.preventDefault(),"change"===a.target.id&&(L.classList.remove("is-hidden"),await e().then(e=>{u(L,a,e,k,S,g,q,f,E)})),"delete"===a.target.id){let c=a.target.parentNode.parentNode.firstElementChild.textContent;await r(c),await e().then(e=>{s.innerHTML=t(e)})}}),o.addEventListener("click",()=>{L.classList.add("is-hidden")}),w.addEventListener("click",async a=>{a.preventDefault();let c=L.id,n={name:k.value,age:Number.parseInt(S.value),course:g.value,skills:q.value.split(","),email:f.value,isEnrolled:E.checked};await d(c,n),await e().then(e=>{s.innerHTML=t(e)}),L.classList.add("is-hidden")});
//# sourceMappingURL=homework-74.dae42dc9.js.map
