var i=0;
const arr= [];
let modalBtn = document.getElementById("popup-btn");
let modal = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-btn");
modalBtn.onclick = function(){
modal.style.display = "block"
}

closeBtn.onclick = function(){
modal.style.display = "none"
}

window.onclick = function(e){
if(e.target == popup){
modal.style.display = "none"
}
}
function Lay_gia_tri_cu(){
    return document.getElementById("gia_tri_cu").innerText;
}

function In_gia_tri_cu(so) {
    document.getElementById("gia_tri_cu").innerText = so;
}


function Lay_ket_qua() {
    return document.getElementById("gia_tri_xuat").innerText;
}
function In_Ket_qua(so) {
    if(so=="") {
        document.getElementById("gia_tri_xuat").innerText = so;
    } else {
        document.getElementById("gia_tri_xuat").innerText = Dinh_dang_chuoi(so);
    }
 
}
function Dinh_dang_chuoi(so) {
    if(so == "-") {
        return "";
    }
    var n = Number(so);
    var gia_tri = n.toLocaleString("en");
    return gia_tri;
}

function Xoa_Dinh_dang_chuoi(so) {
    return Number(so.replace(/,/g, ''))
} 

var he_thong = document.getElementsByClassName('he_thong');
for(var i=0; i < he_thong.length; i++) {
    he_thong[i].addEventListener('click', function() {
        if(this.id == "xoa_tat_ca") {
            In_Ket_qua("");
            In_gia_tri_cu("");
        } 
        else if(this.id == "xoa_tung_so") {
            let ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua()).toString();
            if(ket_qua) {
                ket_qua = ket_qua.substr(0, ket_qua.length -1)
                In_Ket_qua(ket_qua)
            }
        } 
        else {
            var ket_qua = Lay_ket_qua();
            var ket_qua_cu = Lay_gia_tri_cu();
            if(ket_qua != "") {
                ket_qua = Xoa_Dinh_dang_chuoi(ket_qua);
                ket_qua_cu =ket_qua_cu + ket_qua;
                if(this.id == "=") {
                    var ket_qua_cuoi = eval(ket_qua_cu);
                    arr.push(ket_qua_cuoi);
                    In_Ket_qua(ket_qua_cuoi)
                    In_gia_tri_cu("")
                } else {
                    ket_qua_cu = ket_qua_cu + this.id;
                    In_gia_tri_cu(ket_qua_cu)
                    In_Ket_qua("")
                }
            }
            
        
        }
        
    });
}
var c2=document.getElementById("^2");
c2.onclick=function(){
    var so= parseFloat(document.getElementById("gia_tri_xuat").innerText);
    document.getElementById("gia_tri_cu").innerText=so+"^2";
    document.getElementById("gia_tri_xuat").innerText=so*so;
    
    
}
var c3=document.getElementById("^3");
c3.onclick=function(){
    var so= parseFloat(document.getElementById("gia_tri_xuat").innerText);
    document.getElementById("gia_tri_cu").innerText=so+"^3";
    document.getElementById("gia_tri_xuat").innerText=so**so;
}
var c4=document.getElementById("can");
c4.onclick=function(){
    var so= parseFloat(document.getElementById("gia_tri_xuat").innerText);
    document.getElementById("gia_tri_cu").innerText="sqrt("+so+")";
    document.getElementById("gia_tri_xuat").innerText=Math.sqrt(so);
    //Xoa_Dinh_dang_chuoi(Lay_ket_qua());
    
}
var c5=document.getElementById("cu");
c5.onclick=function(){
    //var so= parseFloat(document.getElementById("gia_tri_xuat").innerText);
   // document.getElementById("gia_tri_cu").innerText=so+"^2";
   var x=document.getElementById("gia_tri_xuat");
    x.innerText=arr[i];
    i++;
    
}
var con_so = document.getElementsByClassName('con_so');
for(var i=0; i < con_so.length; i++) {
    con_so[i].addEventListener('click', function() {
        var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua())
        if(ket_qua != NaN) {
            ket_qua = ket_qua + this.id;
            In_Ket_qua(ket_qua)
        }
    })
}