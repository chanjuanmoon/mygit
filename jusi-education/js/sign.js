/**
 * Created by Administrator on 2017/10/24.
 */
function checkformname(){
    var regname=/^\w{4,10}$/;
    var fname=document.getElementByIdx_x_x_x_x("name");
    var ftname=document.getElementByIdx_x_x_x_x("sname");
    if(fname.value==""|| fname.value.length<4||fname.value.length>10){
        ftname.className="frred";
        ftname.innerHTML="× 请输入4-10位用户名，可包含数字、字母、下划线";
    }
    else{
        if(fname.value.match(regname)){
            ftname.className="fgren";
            ftname.innerHTML="√用户名可用!"
        }
        else{
            ftname.className="frred";
            ftname.innerHTML="× 用户名格式输入错误，请检查！";
        }}
}
function checkpwd(){
    var fpwd=document.getElementByIdx_x_x_x_x("pwd");
    var ftpwd=document.getElementByIdx_x_x_x_x("spwd");
    if(fpwd.value==""||fpwd.value.length<4||fpwd.value.length>20){
        ftpwd.className="frred";
        ftpwd.innerHTML="× 请输入4-20位用户密码！";
    }
    else{
        ftpwd.className="fgren";
        ftpwd.innerHTML="√密码可用！"
    }
}
function rcheckpwd(){
    var fpwd=document.getElementByIdx_x_x_x_x("pwd");
    var frpwd=document.getElementByIdx_x_x_x_x("rpwd");
    var ftrpwd=document.getElementByIdx_x_x_x_x("srpwd");
    if(frpwd.value=="")
    {
        ftrpwd.className="frred";
        ftrpwd.innerHTML="× 请输入您的重复密码！"
    }
    else{
        if(frpwd.value!=fpwd.value)
        {
            ftrpwd.className="frred";
            ftrpwd.innerHTML="× 俩次密码输入不一致，请重新输入！";
        }
        else
        {
            ftrpwd.className="fgren";
            ftrpwd.innerHTML=" √ 密码输入正确"
        }
    }
}

function checkemail(){
    var regemail=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*(;\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*$/;
    var femail=document.getElementByIdx_x_x_x_x("email");
    var ftemail=document.getElementByIdx_x_x_x_x("semail");
    if(femail.value==""){
        ftemail.className="frred";
        ftemail.innerHTML="× 电子邮箱不能为空！";
    }
    else{
        if(femail.value.match(regemail)){
            ftemail.className="fgren";
            ftemail.innerHTML="√ 邮箱地址正确！";
        }
        else{
            ftemail.className="frred";
            ftemail.innerHTML="× 邮箱格式输入错误，请检查！";
        }
    }
}