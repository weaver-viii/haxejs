// Generated by Haxe 3.3.0 (git build development @ 297c528)
(function ($hx_exports) { "use strict";
var Main = function() {
	console.log("Example expose");
	var instance = new MyClass("Jim from Haxe code");
	console.log(instance.foo());

var instance2 = new MyClass('Jenny from untyped Haxe code');
console.log(instance2.foo()); // logs a message in the console
		;
};
Main.main = function() {
	new Main();
};
var MyClass = $hx_exports["MyClass"] = function(name) {
	this.name = name;
};
MyClass.prototype = {
	foo: function() {
		return "Greetings from " + this.name + "!";
	}
};
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this);
