function pointsPer48(ppg, mpg) {
  var res=(48*ppg)/mpg;
  if(res>0){
  return parseFloat(res.toFixed(1));}
  else{
  return 0;}
}
