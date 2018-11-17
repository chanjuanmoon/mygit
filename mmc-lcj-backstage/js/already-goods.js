/**
 * Created by pc on 2018/1/2.
 */
$(function () {
    /*
    删除
     */
    $(".del").click(function () {
        var object = $(this).parents("tr");
        //询问框
        layer.confirm('是否确定删除该商品？', {
            btn: ['确定','取消'] //按钮
        }, function(){
            $(object).css("display","none");
            layer.msg('删除成功', {icon: 1});
            //提交表单
            $("form[name='form1']").submit();
        }, function(){

        });
    })
})