function checkEmpty() {
    var isEmpty = false,
        isim = document.getElementById("isim").value,
        soyisim = document.getElementById("soyisim").value,
        dogumtarihi = document.getElementById("dogumtarihi").value,
        cinsiyet = document.getElementById("cinsiyet").value,
        add = document.getElementById("add").value,
        add = num = document.getElementById("num").value;
    if (isim === "") {
        alert("İlk isim boş olamaz");
        isEmpty = true;
    } else if (soyisim === "") {
        alert("Soyadı Boş bırakılamaz");
        isEmpty = true;
    } else if (dogumtarihi === "") {
        alert("Doğum Tarihi Boş olamaz");
        isEmpty = true;
    } else if (cinsiyet === "Seçiniz") {
        alert("Cinsiyetinizi seçiniz");
        isEmpty = true;
    } else if (add === "") {
        alert("Adres Boş olamaz");
        isEmpty = true;
    } else if (num === "" || num.length > 12) {
        alert("İrtibat Numarası Boş olamaz veya 12 Haneyi Aşamaz");
        isEmpty = true;
    }
    return isEmpty;
}

function addRow() {
    if (!checkEmpty()) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            isim = document.getElementById("isim").value,
            ikinciisim = document.getElementById("ikinciisim").value,
            soyisim = document.getElementById("soyisim").value,
            dogumtarihi = document.getElementById("dogumtarihi").value,
            cinsiyet = document.getElementById("cinsiyet").value,
            add = document.getElementById("add").value,
            num = document.getElementById("num").value;
        if (ikinciisim === "") {
            cell1.innerHTML = isim + " " + soyisim;
        } else {
            cell1.innerHTML = isim + " " + ikinciisim + " " + soyisim;
        }
        cell2.innerHTML = dogumtarihi;
        cell3.innerHTML = cinsiyet;
        cell4.innerHTML = add;
        cell5.innerHTML = num;
        cell6.innerHTML = "Düzenle";
        cell7.innerHTML = "Kaldır";
        editRow();
        deleteRow();
        clearForm();
    }
}

function editRow() {
    var index, table = document.getElementById('table');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[5].onclick = function () {
            var c = confirm("bu satırı düzenlemek ister misiniz");
            if (c === true) {
                index = this.parentElement.rowIndex;
                table.rows[index].cells[0].innerHTML = prompt("Ad ve soyadınızı giriniz :");
                table.rows[index].cells[1].innerHTML = prompt(
                    "Doğum Tarihinizi YYYY-AA-GG Formatında Giriniz :");
                table.rows[index].cells[2].innerHTML = prompt("Cinsiyetinizi Girin :");
                table.rows[index].cells[3].innerHTML = prompt("Adresinizi Girin :");
                table.rows[index].cells[4].innerHTML = prompt("İletişim Numaranızı Girin :");
            }
        };

    }
}

function deleteRow() {
    var index, table = document.getElementById('table');
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[6].onclick = function () {
            var c = confirm("bu satırı silmek istiyor musun");
            if (c === true) {
                index = this.parentElement.rowIndex;
                table.deleteRow(index);
            }
        };

    }
}

function clearForm() {
    document.getElementById("isim").value = '';
    document.getElementById("ikinciisim").value = '';
    document.getElementById("soyisim").value = '';
    document.getElementById("dogumtarihi").value = '';
    document.getElementById("cinsiyet").value = 'seciniz';
    document.getElementById("add").value = '';
    document.getElementById("num").value = '';
}