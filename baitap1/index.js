console.log("hello11");

var convertArray = [];
var soNguyen = [];
// console.log({convertArray,soNguyen});

function LaySoNhap() {
  var txtNumber = document.getElementById("laySoNhap").value * 1;
  convertArray.push(txtNumber);
  document.getElementById("noti").innerHTML = `số đã thêm ` + convertArray;
}

function laySoDuong() {
  var tong = 0;
  for (var i = 0; i < convertArray.length; i++) {
    var score = convertArray[i];
    if (score % 2 === 0) {
      tong += score;
    }
  }
  document.getElementById("noti2").innerHTML = "Tổng Các Số Chẵn Là : " + tong;
}

function demSoDuong() {
  var dem = 1;
  for (var i = 0; i < convertArray.length; i++) {
    var score = convertArray[i];
    if (score % 1 === 0) {
      dem++;
    }
  }
  document.getElementById("noti3").innerHTML = "có" + dem + "số dương";
}

function minNumber() {
  var minNumber = convertArray[0];
  for (var i = 1; i < convertArray.length; i++) {
    var score = convertArray[i];
    if (minNumber > score) {
      minNumber = score;
    }
  }
  document.getElementById("noti4").innerHTML = "Số Nhỏ Nhất " + minNumber;
}
function minNumberValue() {
  var minNumber1 = convertArray[0];
  for (var i = 1; i < convertArray.length; i++) {
    var score = convertArray[i];
    if (minNumber1 > score) {
      minNumber1 = score;
    }
  }
  document.getElementById("noti5").innerHTML = "Số Nhỏ Nhất " + minNumber1;
}
function soCuoiCung() {
  var indexNumber = convertArray[-1];
  for (var i = 0; i < convertArray.length - 1; i++) {
    if (convertArray[i] % 2 === 0) {
      indexNumber = convertArray[i];
    }
  }
  document.getElementById("noti6").innerHTML =
    "Số chẵn cuối cùng " + indexNumber;
}
function doiViTri() {
  var txtVitri1 = document.getElementById("txtVitri1").value * 1;
  var txtVitri2 = document.getElementById("txtVitri2").value * 1;
  if (
    0 <= txtVitri1 < convertArray.length &&
    0 <= txtVitri2 < convertArray.length
  ) {
    var hoanVi = convertArray[txtVitri1];
    convertArray[txtVitri1] = convertArray[txtVitri2];
    hoanVi = convertArray[txtVitri2];
  }
  document.getElementById("noti7").innerHTML =
    "Hàm sau khi đổi : " + convertArray;
}
function soNguyenTo() {
  for (var i = 0; i <= convertArray.length; i++) {
    var indexNumber = -1;
    if (
      convertArray[i] % 1 === 0 &&
      (convertArray[i] % convertArray[i] === 0) & (convertArray[i] > 1)
    ) {
      indexNumber = convertArray[i];
      break;
    }
  }
  document.getElementById("noti8").innerHTML = "Số nguyên tố là " + indexNumber;
}
