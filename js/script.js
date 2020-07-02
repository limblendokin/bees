var smola20searchIdBaseLink = "https://smola20.ru/bitrix/admin/sale_order.php?PAGEN_1=1&SIZEN_1=20&lang=ru&set_filter=Y&adm_filter_applied=0&filter_account_number=S-";
var toKate = "./toKate.html";
var toNasty = "./toNasty.html";
var toCredentials = "./toCredentials.html"; 
var on_order_id_submit=()=>{
    var order_id = $('#order_id').val();
    order_id = order_id.trim();
    if(order_id.substr(0,2)=="S-"){
        order_id=order_id.substr(2,5);
    }
    if(order_id.length == 5){
        var location = smola20searchIdBaseLink;
        location+=order_id;
        window.location = location;
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
};
var on_no_order_id_submit = ()=>{
    window.location = toCredentials;
}
$(document).ready(()=>{
    $('#order_id_submit').click(on_order_id_submit);
    $('#order_id').keyup((event)=>{
        console.log('ve')
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          on_order_id_submit();
        }
      });
    $('#no_order_id_submit').click(on_no_order_id_submit);
})

