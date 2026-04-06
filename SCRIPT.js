if(localStorage.getItem("login") !== "true"){
window.location.href = "login.html"
}
document.addEventListener("DOMContentLoaded", function(){

// LOGIN BUTTON
let btn = document.getElementById("btnLogin");

if(btn){
btn.addEventListener("click", login);
}


// CEK LOGIN DI INDEX
if(window.location.pathname.includes("index.html")){

if(localStorage.getItem("login") !== "true"){
window.location.href = "login.html";
}

}

});



function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "admin123"){

localStorage.setItem("login","true");
window.location.href = "index.html";

}else{

document.getElementById("error").innerText = "Username atau Password salah";

}

}



function logout(){
localStorage.removeItem("login")
window.location.href = "login.html"
}

let dataBuku = JSON.parse(localStorage.getItem("dataBuku")) || []

tampilBuku()

function tampilBuku(){

let tabel = document.getElementById("tabelBuku")
tabel.innerHTML=""

dataBuku.forEach((buku,index)=>{

tabel.innerHTML+=`

<tr>
<td>${index+1}</td>
<td>${buku.judul}</td>
<td>${buku.penulis}</td>
<td>${buku.kategori}</td>
<td>${buku.tahun}</td>

<td>

<button onclick="editBuku(${index})">Edit</button>
<button onclick="hapusBuku(${index})">Hapus</button>

</td>

</tr>

`

})

localStorage.setItem("dataBuku",JSON.stringify(dataBuku))

}



function tambahBuku(){

let judul = prompt("Judul Buku")
let penulis = prompt("Penulis")
let kategori = prompt("Kategori")
let tahun = prompt("Tahun")

if(judul){

dataBuku.push({

judul,
penulis,
kategori,
tahun

})

tampilBuku()

}

}



function hapusBuku(index){

if(confirm("Hapus buku?")){

dataBuku.splice(index,1)

tampilBuku()

}

}



function editBuku(index){

let buku = dataBuku[index]

let judul = prompt("Judul",buku.judul)
let penulis = prompt("Penulis",buku.penulis)
let kategori = prompt("Kategori",buku.kategori)
let tahun = prompt("Tahun",buku.tahun)

dataBuku[index]={

judul,
penulis,
kategori,
tahun

}

tampilBuku()

}



document.getElementById("searchBuku").addEventListener("keyup",function(){

let keyword = this.value.toLowerCase()

let tabel = document.getElementById("tabelBuku")
tabel.innerHTML=""

dataBuku
.filter(b=>b.judul.toLowerCase().includes(keyword))
.forEach((buku,index)=>{

tabel.innerHTML+=`

<tr>
<td>${index+1}</td>
<td>${buku.judul}</td>
<td>${buku.penulis}</td>
<td>${buku.kategori}</td>
<td>${buku.tahun}</td>

<td>

<button onclick="editBuku(${index})">Edit</button>
<button onclick="hapusBuku(${index})">Hapus</button>

</td>

</tr>

`

})

})
