function submitForm() {
    var kon = confirm("Apakah Anda Yakin Untuk Memesan ? ");
    if (kon == true) {
        window.location.href = "berhasil.html";
    }
    else{
        window.history.forward();
    }
}

const testDiv = document.getElementById("test");

function card(nama, harga, gambar, kode, rating) {
    return`
    <div class="col1">
                <div class="card1">
                <div class="row row-cols-1 row-cols-md-2 g-4" id="kartu">
                    <img src="${gambar}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${nama}</h5>
                        <p class="card-text">${kode}</p>
                        <p class="card-text">${rating}</p>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">booking</button>
                        RP. <span class="price">${harga}</span>
                    </div>
                </div>
                </div>
            </div>`;
}
fetch("https://data-kamar.vercel.app/kamar/suite")
.then((res) => res.json())
.then((res) => {
    console.log (res.data);
    res.data.map((kamar) => {
        testDiv.innerHTML += card(kamar.nama,kamar.harga, kamar.gambar, kamar.kode_kamar, kamar.rating)
    })
})

const deluxeDiv = document.getElementById("deluxe");

function card(nama, harga, gambar, kode, rating) {
    return`
            <div class="col1">
                <div class="card1">
                <div class="row row-cols-1 row-cols-md-2 g-4" id="kartu">
                    <img src="${gambar}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${nama}</h5>
                        <p class="card-text">${kode}</p>
                        <p class="card-text">${rating}</p>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">booking</button>
                        RP. <span class="price">${harga}</span>
                    </div>
                </div>
                </div>
            </div>`;
}

const StandardDiv = document.getElementById("Standard");

function card(nama, harga, gambar, kode, rating) {
    return`
            <div class="col1">
                <div class="card1">
                <div class="row row-cols-1 row-cols-md-2 g-4" id="kartu">
                    <img src="${gambar}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${nama}</h5>
                        <p class="card-text">${kode}</p>
                        <p class="card-text">${rating}</p>
                        <button type="button" class="btn btn-secondary" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">booking</button>
                        RP. <span class="price">${harga}</span>
                    </div>
                </div>
                </div>
            </div>`;
}