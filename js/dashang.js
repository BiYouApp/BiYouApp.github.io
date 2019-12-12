
function checkWeChat(){
    $("input[name='pay-type']").get(0).checked=true;
    $("#pay-type-title").html('微信');
    $("#pay-image").attr("src","images/pay/wechat.png");
}

function checkAliPay(){
    $("input[name='pay-type']").get(1).checked=true;
    $("#pay-type-title").html('支付宝');
    $("#pay-image").attr("src","images/pay/alipay.png");
}