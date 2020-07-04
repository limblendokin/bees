var smola20searchIdBaseLink = "https://smola20.ru/bitrix/admin/sale_order.php?PAGEN_1=1&SIZEN_1=20&lang=ru&set_filter=Y&adm_filter_applied=0&filter_account_number=S-";
var managerBase = "./toManager.html";
var invoiceBase = "./invoiceId.html";
var toCredentials = "./toCredentials.html";
var valid = true;
$(document).ready(()=>{
    $('#order_id_submit').click(()=>{
        on_order_id_submit();
    });
    $('#order_id').keyup((event)=>{
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
          // Cancel the default action, if needed
          event.preventDefault();
          on_order_id_submit();
        }
      });
    $('#no_order_id_submit').click(on_no_order_id_submit);
})
var extractNumber = (str) => {
    var numberPattern = /\d+/g;
    var match = str.match( numberPattern );
    return match ? match.join('') : "";    
}
var tryPerformRelocation = (order_id) =>{
    console.log(order_id);
    if(order_id.length == 5){
        var toSmola = smola20searchIdBaseLink;
        toSmola+=order_id;
        window.open(toSmola);
    }
    else if(order_id.length == 4){
        window.location = `${invoiceBase}?order_id=${order_id}`;
    }
    else if(order_id.length == 8){
        var toNasty = `${managerBase}?manager=Nasty&order_id=${order_id}&order_origin=tiu.ru`;
        window.location = toNasty;
    }
    else if(order_id.length == 3){
        var toKate = `${managerBase}?manager=Kate&order_id=${order_id}`;
        window.location = toKate;
    }
    else if(order_id.length == 10){
        var toKate = `${managerBase}?manager=Kate&order_id=${order_id}&order_origin=приложения`;
        window.location = toKate;
    }
    else{
        return false;
    }
    return true;
}
var showInvalid = ()=>{
    if(valid){
        $("#order_id").addClass('border-danger text-danger');
        $("<p id='danger'>Это не похоже на номер заказа</p>").addClass('text-danger').insertAfter($("#order_id"));
        valid = false;
    }
}
var showValid = () =>{
    if(!valid){
        $("#order_id").removeClass('border-danger text-danger');
        $('#danger').remove();
        valid = true;
    }
}
var on_order_id_submit=()=>{
    var order_id = extractNumber( $('#order_id').val());
    if(!tryPerformRelocation(order_id)){
        showInvalid();
    }
    else{
        showValid();
    }
    
};
var on_no_order_id_submit = ()=>{
    window.location = toCredentials;
}

