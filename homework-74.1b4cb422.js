const e=async()=>{try{return await fetch("http://localhost:3000/students").then(e=>e.json())}catch(e){return e}},t=e=>{let t="";return e.map(e=>{t+=`<tr id="${e.id}">
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
                <td>${n(e.isEnrolled)}</td>
                <td> 
                    <button id="change" class="change">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438}</button>
                    <button id="delete" class="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
                </td>
            </tr>`}),t},a=e=>{let t="";return e.map(e=>{t+=`<li>
                ${e}
            </li>`}),t},n=e=>e?"Записаний":"Не записаний",c=async e=>{let t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch("http://localhost:3000/students",t)}catch(e){return e}},l=async(e,t)=>{let a={method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{return await fetch(`http://localhost:3000/students/${e}`,a)}catch(e){return e}},r=async e=>{try{return await fetch(`http://localhost:3000/students/${e}`,{method:"DELETE"})}catch(e){return e}},u=(e,t,a,n,c,l,r,u,d)=>{let s=t.target.closest("tr");a.map(t=>{String(t.id)===s.id&&(e.id=t.id,n.value=t.name,c.value=t.age,l.value=t.course,r.value=t.skills.join(", "),u.value=t.email,d.checked=t.isEnrolled)})},d=document.querySelector("#get-students-btn"),s=document.querySelector("#add-student-btn"),o=document.querySelector("#close-btn"),i=document.querySelector("tbody"),h=document.querySelector("#name"),m=document.querySelector("#age"),y=document.querySelector("#course"),v=document.querySelector("#skills"),p=document.querySelector("#email"),S=document.querySelector("#checkbox"),k=document.querySelector("#name-c"),q=document.querySelector("#age-c"),g=document.querySelector("#course-c"),b=document.querySelector("#skills-c"),E=document.querySelector("#email-c"),L=document.querySelector("#checkbox-c"),w=document.querySelector(".backdrop"),f=document.querySelector("#add-student-btn-c");d.addEventListener("click",async()=>{await e().then(e=>{i.innerHTML=t(e)})}),s.addEventListener("click",async a=>{a.preventDefault();let n={name:h.value,age:Number.parseInt(m.value),course:y.value,skills:v.value.split(","),email:p.value,isEnrolled:S.checked};await c(n),await e().then(e=>{i.innerHTML=t(e)}),h.value="",m.value="",y.value="",v.value="",p.value="",S.checked=!1}),i.addEventListener("click",async a=>{if(a.preventDefault(),"change"===a.target.id&&(w.classList.remove("is-hidden"),await e().then(e=>{u(w,a,e,k,q,g,b,E,L)})),"delete"===a.target.id){let n=a.target.parentNode.parentNode.firstElementChild.textContent;await r(n),await e().then(e=>{i.innerHTML=t(e)})}}),o.addEventListener("click",()=>{w.classList.add("is-hidden")}),f.addEventListener("click",async a=>{a.preventDefault();let n=w.id,c={name:k.value,age:Number.parseInt(q.value),course:g.value,skills:b.value.split(","),email:E.value,isEnrolled:L.checked};await l(n,c),await e().then(e=>{i.innerHTML=t(e)}),w.classList.add("is-hidden")});
//# sourceMappingURL=homework-74.1b4cb422.js.map
