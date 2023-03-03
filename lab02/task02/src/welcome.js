const getData=document.getElementById("fetch");



let table=`<table class="table table-dark table-striped mt-4">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>`


let tr=`<tr>
<td>{name}</td>
<td>{email}</td>
<td>{phone}</td>
<td>{address}</td>
</tr>`

getData.addEventListener("click",function(){
    fetch("/users")
    .then((res)=>{
        console.log(res)
        
        return res.json()
    }).then((res)=>{
        document.querySelector(".container").innerHTML+=(table);

        let tableEl=document.querySelector(".table");
        res.forEach((data)=>{
            
            tableEl.innerHTML+=tr.replace("{name}",data.name).replace("{email}",data.email).replace("{phone}",data.phone).replace("{address}",data.address)

        })
        
        // console.log(data)

    })
})