const e=()=>fetch("http://localhost:3000/students").then(e=>e.json()),t=e=>{let t="";return e.map(e=>{t+=`<tr id="${e.id}">
                <td>${e.id}</td>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.course}</td>
                <td>
                    <ul>
                    ${l(e.skills)}
                    </ul>
                </td>
                <td>${e.email}</td>
                <td>${n(e.isEnrolled)}</td>
                <td> 
                    <button id="change" class="change">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438}</button>
                    <button id="delete" class="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
                </td>
            </tr>`}),t},l=e=>{let t="";return e.map(e=>{t+=`<li>
                ${e}
            </li>`}),t},n=e=>e?"Записаний":"Не записаний",d=e=>{fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}})},u=(e,t)=>{fetch(`http://localhost:3000/students/${e}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}})},c=e=>{fetch(`http://localhost:3000/students/${e}`,{method:"DELETE"})},o=(e,t,l,n,d,u,c,o,r)=>{console.log(l);let a=t.target.closest("tr");l.map(t=>{String(t.id)===a.id&&(e.id=t.id,n.value=t.name,d.value=t.age,u.value=t.course,c.value=t.skills.join(", "),o.value=t.email,r.checked=t.isEnrolled)})},r=document.querySelector("#get-students-btn"),a=document.querySelector("#add-student-btn"),s=document.querySelector("#close-btn"),i=document.querySelector("tbody"),m=document.querySelector("#name"),h=document.querySelector("#age"),v=document.querySelector("#course"),y=document.querySelector("#skills"),p=document.querySelector("#email"),S=document.querySelector("#checkbox"),g=document.querySelector("#name-c"),k=document.querySelector("#age-c"),q=document.querySelector("#course-c"),b=document.querySelector("#skills-c"),T=document.querySelector("#email-c"),E=document.querySelector("#checkbox-c"),L=document.querySelector(".backdrop"),$=document.querySelector("#add-student-btn-c");r.addEventListener("click",()=>{e().then(e=>{i.innerHTML=t(e)})}),a.addEventListener("click",l=>{l.preventDefault();let n={name:m.value,age:Number.parseInt(h.value),course:v.value,skills:y.value.split(","),email:p.value,isEnrolled:S.checked};console.log(n),d(n),setTimeout(()=>{e().then(e=>{i.innerHTML=t(e)})},100),m.value="",h.value="",v.value="",y.value="",p.value="",S.checked=!1}),i.addEventListener("click",l=>{l.preventDefault(),"change"===l.target.id&&(L.classList.remove("is-hidden"),e().then(e=>{o(L,l,e,g,k,q,b,T,E)})),"delete"===l.target.id&&(c(l.target.parentNode.parentNode.firstElementChild.textContent),setTimeout(()=>{e().then(e=>{i.innerHTML=t(e)})},100))}),s.addEventListener("click",()=>{L.classList.add("is-hidden")}),$.addEventListener("click",l=>{l.preventDefault(),u(L.id,{name:g.value,age:Number.parseInt(k.value),course:q.value,skills:b.value.split(","),email:T.value,isEnrolled:E.checked}),setTimeout(()=>{e().then(e=>{i.innerHTML=t(e)})},100),L.classList.add("is-hidden")});
//# sourceMappingURL=homework-74.4e2d8df7.js.map
