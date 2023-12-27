function OuterFunction() {

    var outerVariable = 100;
    
    function InnerFunction() {
    
    console.log(outerVariable);
    
    }
    
    InnerFunction();
    
    }
    
    var InnerFun = OuterFunction();
    
    InnerFun;