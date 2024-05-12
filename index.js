
var tinhToanBtn = document.getElementById('tinh-toan-btn');
tinhToanBtn.onclick = function () {

    var tongTien = document.getElementById('tong-hoa-don').value;
    var phanTramBoa = document.getElementById('phan-tram-tien-boa').value;
    var soNguoi = document.getElementById('share-so-nguoi').value;


    if (!tongTien || !phanTramBoa || !soNguoi || tongTien <= 0 || soNguoi <= 0) {
        alert('Thông tin bạn nhập không hợp lệ. Vui lòng kiểm tra lại');
        return;
    }


    tongTien = Number(tongTien);
    phanTramBoa = Number(phanTramBoa);
    soNguoi = Number(soNguoi);


    var tienBoa = tongTien * (phanTramBoa / 100);


    var tienMoiNguoi = tienBoa / soNguoi;


    var resultText = "Mỗi người sẽ là: $" + tienMoiNguoi.toFixed(2);
    document.getElementById('result').innerHTML = resultText;
};


