function amIWilson(p) {
  var pro=1;
  for (var i=1;i<p;i++){
  pro=pro*i;
  }
  var ri=pro+1;
  var mul=Math.pow(p,2);
  return (ri%mul==0) ? true : false ;
  
}
Logic of wilson prime is : ((n-1)!+1)%(nxn)==0;
Step 1 : finding the fuctorial of (p-1)!
Step 2 : using the ternary operator to return true or false
Try to differenciate between "true" and true becasue :
true : it will return as it a key word;
"true" : it will return a it a string;
