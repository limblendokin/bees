var invoice_id;
$(document).ready(()=>{
    invoice_id = 
    $('#manager_submit').click(()=>{window.location = `${managerBase}?invoice=true&manager=${getRandomManager()}&order_id=${getUrlParameter('order_id')}`});
});
getRandomManager = () => {
    var min = 0;
    var max = 1;
    return (Math.floor(Math.random() * (max - min + 1)) + min) ? "Kate" :"Nasty" ; //The maximum is inclusive and the minimum is inclusive 
}
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