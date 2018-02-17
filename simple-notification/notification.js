var ICON = 'https://avatars0.githubusercontent.com/u/24819158?s=460&v=4';

var MyNotificationObj = function(){
    this.icon = ICON;
    this.titulo ="";
    this.mensagem ="";
    this.url;
}

var _solicitarPermissao = function () {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission();
        return;
    }
};

var _browserTemSuporte = function () {
    if (!Notification) {
        alert('Navegodor sem suporte para notificações')
        return false;
    }
    return true;
};


var _notifyMe = function (myNotificationObj) {

    if (_browserTemSuporte()) {

        _solicitarPermissao();

        var notification = new Notification(myNotificationObj.titulo, {
            icon: myNotificationObj.icon,
            body: myNotificationObj.mensagem
        });
        notification.onclick = function () {
            window.open(myNotificationObj.url);
        }
    }
}




document.addEventListener('DOMContentLoaded', function () {
    _solicitarPermissao();
});

var myNotificationObj = new MyNotificationObj();
myNotificationObj.titulo='Notificação do Leandro';
myNotificationObj.mensagem = 'Olá, um novo push foi realizado no meu github';
myNotificationObj.url = 'https://github.com/leandrodasilvalaves/';

_notifyMe(myNotificationObj);