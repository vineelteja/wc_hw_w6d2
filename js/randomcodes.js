    // Random codes
 function generateCode(){
    var code = ''
    var getCode = ''
    var btnvalue;
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$';
        for (i = 1; i <=8; i++){
        var char = Math.random()*str.length;
        code += str.charAt(char)
    }
    return code;
 }

 var code = generateCode();
document.getElementById('codes').innerHTML = code


function disableButton(btnvalue){
    document.getElementById('submit').disabled = btnvalue;
    if (btnvalue == true) { // test if button disabled/enabled
      // set button and label color
      document.getElementById('submit').style.backgroundColor = "rgba(73,119,209,0.3)";
      document.getElementById('submit').style.color = "rgba(255, 255, 255, 0.5)"
    } else {
      document.getElementById('submit').style.backgroundColor = "rgba(73,119,209,1)";
      document.getElementById('submit').style.color = "rgba(255, 255, 255, 1)"
    }
  }
//   disableButton(btnvalue)

var codebox = document.getElementById('codeentered')
codebox.addEventListener('input', evaluateCode)


function evaluateCode(){
  var getCode = document.getElementById('codeentered').value
  console.log(getCode)
  var charset1 = getCode.trim()
  var charset2 = code.trim()
  console.log('----')
  console.log(getCode)
  console.log(charset2)

  if (charset1.length == charset2.length && charset1 == charset2){
    disableButton(false);
  }
}

