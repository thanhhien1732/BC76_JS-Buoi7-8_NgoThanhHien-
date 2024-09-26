let mangSo = [];

// Thêm số n vào mảng
document.getElementById("themSoN").onclick = function () {
    let soN = parseInt(document.getElementById("soN").value);
    mangSo.push(soN);
    document.querySelector(".kqSoN").innerHTML = "Mảng hiện tại: " + mangSo.join(", ");
};

// 1. Tính tổng các số dương trong mảng
document.getElementById("tinhTong").onclick = function () {
    let tongSoDuong = mangSo.filter(n => n > 0).reduce((acc, cur) => acc + cur, 0);
    document.querySelector(".kqTinhTong").innerHTML = "Tổng số dương: " + tongSoDuong;
};

// 2. Đếm số lượng số dương trong mảng
document.getElementById("demSo").onclick = function () {
    let demSoDuong = mangSo.filter(n => n > 0).length;
    document.querySelector(".kqDemSo").innerHTML = "Số lượng số dương: " + demSoDuong;
};

// 3. Tìm số nhỏ nhất trong mảng
document.getElementById("soNhoNhat").onclick = function () {
    let soNhoNhat = Math.min(...mangSo);
    document.querySelector(".kqSoNhoNhat").innerHTML = "Số nhỏ nhất: " + soNhoNhat;
};

// 4. Tìm số dương nhỏ nhất trong mảng
document.getElementById("soDuongNhoNhat").onclick = function () {
    let soDuongNhoNhat = Math.min(...mangSo.filter(n => n > 0));
    document.querySelector(".kqSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất: " + soDuongNhoNhat;
};

// 5. Tìm số chẵn cuối cùng trong mảng
document.getElementById("soChan").onclick = function () {
    let soChanCuoiCung = mangSo.slice().reverse().find(n => n % 2 === 0);
    document.querySelector(".kqSoChan").innerHTML = soChanCuoiCung !== undefined ? "Số chẵn cuối cùng: " + soChanCuoiCung : "-1";
};

// 6. Đổi chỗ 2 giá trị trong mảng theo vị trí
document.getElementById("doiCho").onclick = function () {
    let viTri1 = parseInt(document.getElementById("viTri1").value);
    let viTri2 = parseInt(document.getElementById("viTri2").value);
    if (viTri1 < mangSo.length && viTri2 < mangSo.length) {
        [mangSo[viTri1], mangSo[viTri2]] = [mangSo[viTri2], mangSo[viTri1]];
        document.querySelector(".kqDoiCho").innerHTML = "Mảng sau khi đổi: " + mangSo.join(", ");
    } else {
        document.querySelector(".kqDoiCho").innerHTML = "Vị trí không hợp lệ.";
    }
};

// 7. Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("sapXep").onclick = function () {
    let mangSapXep = [...mangSo].sort((a, b) => a - b);
    document.querySelector(".kqSapXep").innerHTML = "Mảng đã sắp xếp: " + mangSapXep.join(", ");
};

// 8. Tìm số nguyên tố đầu tiên trong mảng
document.getElementById("soNguyenTo").onclick = function () {
    let soNguyenToDauTien = mangSo.find(n => laSoNguyenTo(n));
    document.querySelector(".kqSoNguyenTo").innerHTML = soNguyenToDauTien !== undefined ? "Số nguyên tố đầu tiên: " + soNguyenToDauTien : "-1";
};

// Hàm kiểm tra số nguyên tố
function laSoNguyenTo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// 9. Đếm số lượng số nguyên trong mảng số thực
let mangSoThuc = [];
document.getElementById("themSo").onclick = function () {
    let soThuc = parseFloat(document.getElementById("nhapSo").value);
    mangSoThuc.push(soThuc);
    document.querySelector(".kqThemSo").innerHTML = "Mảng số thực: " + mangSoThuc.join(", ");
};

document.getElementById("demSoNguyen").onclick = function () {
    let demSoNguyen = mangSoThuc.filter(n => Number.isInteger(n)).length;
    document.querySelector(".kqDemSoNguyen").innerHTML = "Số lượng số nguyên: " + demSoNguyen;
};

// 10. So sánh số lượng số dương và số âm trong mảng
document.getElementById("soSanh").onclick = function () {
    let soLuongDuong = mangSo.filter(n => n > 0).length;
    let soLuongAm = mangSo.filter(n => n < 0).length;
    let ketQua = soLuongDuong > soLuongAm ? "Số dương nhiều hơn" : soLuongAm > soLuongDuong ? "Số âm nhiều hơn" : "Số dương và âm bằng nhau";
    document.querySelector(".kqSoSanh").innerHTML = ketQua;
};
