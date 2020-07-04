$(document).ready(() => {
    var manager = getUrlParameter('manager') == "Kate" ? "Екатерины Зининой" : "Анастасии Барановой";
    var managerNumber = getUrlParameter('manager') == "Kate" ? "7707" : "3333";
    var id = getUrlParameter('order_id');
    var header = `Переведите звонок на ${managerNumber}`;
    
    if(getUrlParameter('invoice')){
        message = `Переведите звонок по добавочному номеру ${managerNumber}, и сообщите номер счета ${id}`
    }
    else{
        var origin = getUrlParameter('order_origin');
        message = `Это заказ ${id?"№"+id:""} ${origin?"из "+origin:""} для ${manager}, переведите звонок по добавочному номеру ${managerNumber}.`;
    }
    $('#header').html(header);
    $('#message').html(message);
});
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};