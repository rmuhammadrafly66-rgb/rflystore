const currentUser = localStorage.getItem("username") || "User";
document.getElementById("userLogin") && (userLogin.innerText = currentUser);

let produk = JSON.parse(localStorage.getItem("produk")) || [];
let riwayat = JSON.parse(localStorage.getItem("riwayat")) || [];

function logout(){
  localStorage.clear();
  location.href="index.html";
}

function renderProduk(){
  if(!produkTable) return;
  produkTable.innerHTML = produk.map((p,i)=>`
    <tr>
      <td>${i+1}</td>
      <td>${p.nama}</td>
      <td>${p.harga}</td>
      <td><button class="btn btn-danger btn-sm" onclick="hapusProduk(${i})">Hapus</button></td>
    </tr>`).join("");
  localStorage.setItem("produk", JSON.stringify(produk));
  loadProdukSelect();
}

function tambahProduk(){
  produk.push({nama:nama.value, harga:Number(harga.value)});
  localStorage.setItem("produk", JSON.stringify(produk));
  renderProduk();
}

function hapusProduk(i){
  produk.splice(i,1);
  renderProduk();
}

function loadProdukSelect(){
  if(!jualProduk) return;
  jualProduk.innerHTML = produk.map((p,i)=>`
    <option value="${i}">${p.nama} - ${p.harga}</option>`).join("");
}

function jual(){
  const p = produk[jualProduk.value];
  const qty = Number(jualQty.value);
  riwayat.push({
    tanggal:new Date().toLocaleString(),
    user:currentUser,
    produk:p.nama,
    qty,
    total:p.harga*qty
  });
  localStorage.setItem("riwayat", JSON.stringify(riwayat));
}

function renderRiwayat(){
  if(!riwayatTable) return;
  riwayatTable.innerHTML = riwayat.map((r,i)=>`
    <tr>
      <td>${i+1}</td>
      <td>${r.tanggal}</td>
      <td>${r.user}</td>
      <td>${r.produk}</td>
      <td>${r.qty}</td>
      <td>${r.total}</td>
    </tr>`).join("");
}

renderProduk();
renderRiwayat();
loadProdukSelect();
