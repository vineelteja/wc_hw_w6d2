  /* add partner images */
  // var photos = [];
  // var fileNames = [];
  // var imageList = [];
  // var image;
  // var openList = `<li>`;
  // var closeList = `</li>`;

  // for (var i = 0; i < 6; i++) {
  //   fileNames.push("partner" + (i + 1));
  //   photos.push(`<img src=images/partners/${fileNames[i]}.png>`);
  //   image = openList + photos[i] + closeList;
  //   imageList.push(image);
  // }
  // document.getElementById("partner_album").innerHTML = imageList;
/* add partner images */


try{
  var sel = document.querySelector("#selectContact")
  sel.addEventListener('change', function(){
    var condiv = document.querySelector("#contactMethod")
    const email = 'email'
    const phone = 'phone'
    console.log(sel.value)
    if (sel.value == email){
      condiv.innerHTML = `<br>
      <label for="contactMethod">Enter your ${email}</label> <br>
      <input class="form-control" type="email" id="contactEmail">`
    } else if (sel.value == phone){
      condiv.innerHTML = `<br>
      <label for="contactMethod">Enter your ${phone}</label> <br>
      <input class="form-control" type="tel" id="contactPhone">`  
    }
  })
}
catch{

}



