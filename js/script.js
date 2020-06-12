function validar(){
    var Email = document.getElementById("Email")
    var EmailError = document.getElementById("EmailError")
    if (Email.value.includes('@') && Email.value.includes('.com')){
        var str = Email.value.split("@");
        if(str[0].length < 1 || str[1].length < 1){
          Email.className = 'input-error'
          EmailError.className = 'text-bottom'
        }
        else {
          Email.classList.remove('input-error')
          EmailError.className = 'display-none'
        }  
      }
      else{
        Email.className = 'input-error'
        EmailError.className = 'text-bottom'
      }
}