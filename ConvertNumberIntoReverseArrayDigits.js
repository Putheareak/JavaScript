function digitize(n) {
  return String(n).split('').map(Number).reverse();
}
Step 1 : String(n) : is to make the integer become a string
Step 2 : Split('') : to split the string and and give a default connector is ",".
Step 3 : map(Number) : to take every string and form in one array.
Step 4 : reverse() : is a function that used to reverse the array.
