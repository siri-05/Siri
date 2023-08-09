var lname = "Siri";
console.log(lname);
var a = 111;
var x = a;
console.log(typeof (a) + " -> " + typeof (x));
var b = "111";
var y = b;
console.log(typeof (b) + " -> " + typeof (y));
var a1 = 4, a2 = 2, s = "The value of the ", s1 = "addition is ", s2 = "subtraction is ", s3 = "multiplication is ", s4 = "division is ", s5 = "modulus is ";
var add = a1 + a2, sub = a1 - a2, mul = a1 * a2, div = a1 / a2, mod = a1 % a2;
console.log(s + s1 + add);
console.log(s + s2 + sub);
console.log(s + s3 + mul);
console.log(s + s4 + div);
console.log(s + s5 + mod);
var e = -34;
console.log((e % 2) == 0 ? "even" : "odd");
console.log(e < 0 ? "negative" : "positive");
var f = 5, t = 1, ams = 153;
while (f > 0) {
    t *= f;
    f -= 1;
}
console.log(t);
var temp = ams;
t = 0;
while (ams > 0) {
    t += Math.pow(ams % 10, 3);
    ams = Math.floor(ams / 10);
}
if (t == temp) {
    console.log("Armstrong number");
}
else {
    console.log("Not Armstrong number");
}
var arr = new Array(23, 45);
var str = new Array("Saragadam", "Siri");
console.log(arr);
console.log(str + " " + str.length + " " + str[0].length + " " + str[1].length);
function func(x, y) {
    var z = x > y ? x : y;
    return z;
}
console.log(func(23, 45));
var car = /** @class */ (function () {
    function car() {
        this.color = "blue";
        this.price = 1500000;
    }
    car.prototype.display = function () {
        console.log(this.color + " " + this.price);
    };
    return car;
}());
var maruti = new car();
maruti.display();
var alto = new car();
alto.color = "red";
alto.price = 1200000;
alto.display();
var car1 = /** @class */ (function () {
    function car1(x, y) {
        this.color = x;
        this.price = y;
    }
    car1.prototype.display = function () {
        console.log(this.color + " " + this.price);
    };
    return car1;
}());
var swift = new car1("blue", 1500000);
swift.display();
var obj = {
    firstname: "Saragadam",
    lastname: "Siri",
    hello: function () {
        return this.firstname + " " + this.lastname;
    }
};
console.log(obj.firstname + " " + obj.lastname);
console.log(obj.hello());
var mystudent = /** @class */ (function () {
    function mystudent() {
        this.name = "Siri";
        this.age = 23;
        this.address = {
            country: "INDIA",
            city: "HYDERABAD"
        };
    }
    mystudent.prototype.getname = function () {
        return this.name;
    };
    mystudent.prototype.showage = function () {
        return this.age;
    };
    mystudent.prototype.show = function () {
        console.log(this.address);
    };
    return mystudent;
}());
var ob = new mystudent();
console.log(ob.getname() + " " + ob.showage());
ob.show();
