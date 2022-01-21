function dang_ky_mail()
{
    var mail=document.getElementById("mail").value;
    alert("Cảm ơn bạn đã đăng ký nhận thông báo"+
    "\nThông tin về sản phẩm bạn quan tâm sẽ được gửi về email: "
    +mail);
}
function kiem_tra_mat_khau()
{
    var mk1=document.getElementById("matkhau1").value;
    var mk2=document.getElementById("matkhau2").value;    
    if(mk1 != mk2){
        alert("Mật khẩu không giống nhau\nHãy nhập lại");
    } 
    else if((mk1!="")&&(mk2!="")){
        alert("Bạn đã đăng ký tài khoản thành công");
    }    
}
function dem_so_luong()
{
    var op = document.forms["myForm"]["op"].value;
    var soluong = parseInt(document.forms["myForm"]["txtSo2"].value);
    var soluong1=Number(soluong)
    /*switch (op)
    {
        case "+": soluong1 ++; break;
        case "-": 
            if (soluong1 > 1)
                soluong1 --; 
            break;
    }*/
    document.forms["myForm"]["kq"].value = kq;
}