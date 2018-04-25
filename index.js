function takeANumber(katzDeli, name) {
    
    if (katzDeli.length > 0);
      katzDeli.push(name);
      return ('Welcome, ' + name + '. You are number ' + katzDeli.length + ' in line.')
  }
   takeANumber(katzDeli, 'Ada');
   
   
function nowServing (katzDeliLine){
    if(katzDeliLine.length===0) { 
    return 'There is nobody waiting to be served!'; 
}
    var customer = katzDeliLine.shift(); 
    return "Currently serving " + customer + ".";
}