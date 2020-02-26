function clrform(){
    document.getElementById('contactformid').reset();
  }

  function submitform(){
   // event.preventDefault();
      alertpop(document.getElementById('formname').value, document.getElementById('mail').value, document.getElementById('msg').value);

  }
function alertpop(value1, value2, value3){
 return alert('You have entered:\n'+value1+'\n'+value2+'\n'+value3);

}