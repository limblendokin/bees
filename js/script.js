var smola20searchIdBaseLink = "https://smola20.ru/bitrix/admin/sale_order.php?PAGEN_1=1&SIZEN_1=20&lang=ru&set_filter=Y&adm_filter_applied=0&filter_account_number=S-";
var toKate = "../toKate.html";
var toNasty = "../toNasty.html";
var toCredentials = "../toCredentials.html";
$(document).ready(()=>{
    $('#order_id_submit').click(function(){
        var order_id = $('#order_id').val();
        order_id = order_id.trim();
        if(order_id.substr(0,2)=="S-"){
            order_id=order_id.substr(2,5);
        }
        if(order_id.length == 5){
            smola20searchIdBaseLink+=order_id;
            window.location = smola20searchIdBaseLink;
        }
        else if(order_id.length == 8){
            // toKate+="/&order_id=";
            // toNasty+=order_id;
            // toNasty+="&order_origin=tiu";
            window.location = toNasty;
        }
        else if(order_id.length == 3){
            window.location = toKate;
        }
        else if(order_id.length == 10){
            // toKate+="/&order_id=";
            // toKate+=order_id;
            // toKate+="&order_origin=app";
            window.location = toKate;
        }
    });
    $('#no_order_id_submit').click(function(){
        window.location = toCredentials;
    })
})

