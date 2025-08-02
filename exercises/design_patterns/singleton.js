var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Object.defineProperty(Singleton, "instance", {
        get: function () {
            if (!Singleton._instance) {
                Singleton._instance = new Singleton();
            }
            return Singleton._instance;
        },
        enumerable: false,
        configurable: true
    });
    return Singleton;
}());
var s1 = Singleton.instance;
var s2 = Singleton.instance;
console.log(s1 === s2);
