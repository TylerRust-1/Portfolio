interface MyInterface {  
    firstname: string;  
    lastname: string;  
    country: string;  
   }  
   class MyClass {  
    fulldata: string;  
    constructor(public firstname, public lastname, public country) {  
     this.fulldata = firstname + " " + lastname + " " + country;  
    }  
   }  
   function data(mcn: MyInterface) {  
    return "Welcome in " + mcn.firstname + " " + mcn.lastname + " " + mcn.country;  
   }  
   window.onload = () => {  
    var name = new MyClass("Mcn", "solution", " at India");  
    document.body.innerHTML = data(name); //test  
   }  