function getValue(){
var eventType  = document.getElementById("eventType").value;
var tempFahr = document.getElementById("tempFahr").value;
//'var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, ";

  if (eventType==="casual" && tempFahr<54) {
   var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear something comfy and a coat.";
    }else if (eventType==='casual' &&  tempFahr<=70 && tempFahr>=53 ){
    var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear something comfy and a Jacket.";
  }else if (eventType==="casual" && tempFahr>70) {
   var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear something comfy and no Jacket.";
    }else if (eventType==="semi-formal" && tempFahr>70) {
   var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear a polo and no Jacket.";
   }else if (eventType==="semi-formal" && tempFahr<54) {
   var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear a polo and a coat.";
    }else if (eventType==="formal" && tempFahr<54) {
   var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear a suit and a coat.";
   }else if (eventType==='semi-formal' &&  tempFahr<=70 && tempFahr>=53 ){
    var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear a polo and a Jacket.";
     }else if (eventType==='formal' &&  tempFahr<=70 && tempFahr>=53 ){
    var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear a suit and a Jacket.";
    }else if (eventType==="formal" && tempFahr>70) {
   var results = "Since it is "+ tempFahr +" degrees fahrenheit, and you are attending a "+eventType+" event, "+ "you should wear a suit and no Jacket.";
    }
 console.log(results);
 delete results;
  }
  
 
  