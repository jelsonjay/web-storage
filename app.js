'use strict'
if(typeof(Storage) != 'underfine'){

  if(localStorage.user){
    localStorage.user = Number(localStorage.user) + 1;
  }else{
    // this tow example gives the same results
   //localStorage.setItem('user', 1)
    localStorage.user = 1;
  }

  document.write('User: ' + localStorage.user);
}else{
 document.write('Your browser do no support wer storage!')
}