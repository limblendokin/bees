var smola20searchIdBaseLink = "https://smola20.ru/bitrix/admin/sale_order.php?PAGEN_1=1&SIZEN_1=20&lang=ru&set_filter=Y&adm_filter_applied=0&filter_account_number=S-";
var crmSearchBaseLink = "https://crmsmola20.bitrix24.ru/crm/deal/list/?apply_filter=Y&with_preset=Y&FIND=";
$(document).ready(()=>{
    $('#credentials_submit').click(function(){
        var credentials = $('#credentials').val();
        credentials = credentials.trim();
        var open = crmSearchBaseLink;
        open += credentials;
        window.open(open, '_blank');
    });
    $('#credentials').keyup(function(event){
        if (event.keyCode === 13) {
            var credentials = $('#credentials').val();
            credentials = credentials.trim();
            var open = crmSearchBaseLink;
            open += credentials;
            window.open(open, '_blank');
        }
    });
    $('#order_id_submit').click(function(){
        var order_id = $('#order_id').val();
        order_id = order_id.trim();
        if(order_id.substr(0,2)=="S-"){
            order_id=order_id.substr(2,5);
        }
        var location = smola20searchIdBaseLink;
        location+=order_id;
        window.location = location;
    });
    $('#order_id').keyup(function(event){
        if (event.keyCode === 13) {
            var order_id = $('#order_id').val();
            order_id = order_id.trim();
            if(order_id.substr(0,2)=="S-"){
                order_id=order_id.substr(2,5);
            }
            var location = smola20searchIdBaseLink;
            location+=order_id;
            window.location = location;
        }
    });
})

