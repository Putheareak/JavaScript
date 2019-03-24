function accum(s) {
  var word = s.toLowerCase().split('')
  }
  
  for(let i = 0; i < word.length; i++) {
    word[i] = word[i].toUpperCase() + word[i].repeat(i)
  }
  return letters.join('-')
}
