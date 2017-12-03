

var Subject = function () {
    this.observers = [];
}

Subject.prototype = {
    subscribeObserver: function (observer) {
        this.observers.push(observer);
    },
    unSubscribeObserver: function (observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    },
    notifyObservers: function () {
        for (var i = 0; i < this.observers.length; i++) {
            this.observers[i].notify(i);
        };
    }
}

var Observer = function () {
    return {
        notify: function (index) {
            console.log('Observer ' + (index + 1) + ' está notificado');
        }
    }
}


var subject = new Subject();
var observer1 = new Observer();
var observer2 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);

subject.notifyObservers();

subject.unSubscribeObserver(observer1);

subject.notifyObservers();
