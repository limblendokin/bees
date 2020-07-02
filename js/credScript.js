var smola20searchIdBaseLink = "https://smola20.ru/bitrix/admin/sale_order.php?PAGEN_1=1&SIZEN_1=20&lang=ru&set_filter=Y&adm_filter_applied=0&filter_account_number=S-";
var crmSearchBaseLink = "https://crmsmola20.bitrix24.ru/crm/deal/list/?apply_filter=Y&with_preset=Y&FIND=";
$(document).ready(()=>{
    $('#credentials_submit').click(function(){
        var credentials = $('#credentials').val();
        credentials = credentials.trim();
        crmSearchBaseLink += credentials;
        window.open(crmSearchBaseLink, '_blank');
    });
    $('#order_id_submit').click(function(){
        var order_id = $('#order_id').val();
        order_id = order_id.trim();
        if(order_id.substr(0,2)=="S-"){
            order_id=order_id.substr(2,5);
        }
        smola20searchIdBaseLink+=order_id;
        window.location = smola20searchIdBaseLink;
    })
})

