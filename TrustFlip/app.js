var MyClass = /** @class */ (function () {
    function MyClass(firstname, lastname, country) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.country = country;
        this.fulldata = firstname + " " + lastname + " " + country;
    }
    return MyClass;
}());
function data(mcn) {
    return "Welcome in " + mcn.firstname + " " + mcn.lastname + " " + mcn.country;
}
window.onload = function () {
    var name = new MyClass("Mcn", "solution", " at India");
    document.body.innerHTML = data(name);
};
