 userMessages = [];
const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');

const post = document.querySelector('button');
// window.addEventListener("load", () => {
//   fetch("1b-database.php", { method : "POST" })
//   .then(res => res.text()).then((txt) => {
//     document.getElementById("demo").innerHTML = txt;
//   });
// });
// var mysql = require('mysql2');
//
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

function limit(element)
{
    var max_chars = 8;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
function getAllData() {

    var values = [];
        keys = Object.keys(localStorage);
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
//alert(values);

    return values;
}
var sanitizeHTML = function (str) {
	return str.replace(/[^\w. ]/gi, function (c) {
		return '&#' + c.charCodeAt(0) + ';';
	});
};
function renderMessages() {
  userMessages=getAllData();
  let messageItems = '';

  // var app = document.querySelector('#app');
  //
  // // The third-party content
  // var thirdPartySrc = '" onerror="alert(\'XSS Attack\')"';
  //
  // // Create the img element
  // var img = document.createElement('img');
  //
  // // Add the property
  // img.src = thirdPartySrc;
  //
  // // Inject into the DOM
  // app.appendChild(img);





      for (const message of userMessages) {
        var obj = JSON.parse(message);
        var commentBoxValue=obj.name+":";
        //console.log(commentBoxValue+" end");
        var li = document.createElement("li");
        var li1 = document.createElement("li");
        var text = document.createTextNode(commentBoxValue);
        var text1 = document.createTextNode(obj.image);
        userMessagesList.appendChild(document.createElement("br"));
        userMessagesList.appendChild(document.createElement("br"));
        li.appendChild(text);
        userMessagesList.appendChild(li);
        li1.appendChild(text1);
        userMessagesList.appendChild(li1);

        // var myScript = document.createElement('script');
        //  myScript.textContent =obj.age;
        //  userMessagesList.appendChild(myScript);
}
//**************************** one way of avoid the xss attack***************
// console.log(message);
//   obj = JSON.parse(message);
//     messageItems = `
//       ${messageItems}
//       <li class="message-item">
//         <p>${obj.name}:<br>${obj.image}</p>
//       </li>
//     `;
// }
//   userMessagesList.innerHTML =sanitizeHTML(messageItems);
//  var myScript = document.createElement('script');
//  myScript.textContent =obj.passward;
//  userMessagesList.appendChild(myScript);

}

function formSubmitHandler(event) {
  event.preventDefault();

  const userNameInput = event.target.querySelector('#name-message');
  const userPasswardInput = event.target.querySelector('#passward-message');
  const userAgeInput = event.target.querySelector('#age-message');
  const imageInput = event.target.querySelector('#message-image');

  const name = userNameInput.value.toString();
  const age = userAgeInput.value.toString();
  const passward = userPasswardInput.value.toString();
  const imageUrl = imageInput.value.toString();

  if (
    !name ||
    !passward ||
    !age ||
    !imageUrl ||
    name.trim().length === 0 ||
    passward.trim().length === 0 ||
    age.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert('Please insert a valid input');
    return;
  }
  var data = {
          "name":name,
          "passward":passward,
          "age":age,
          "image":imageUrl
       }

  userMessages.push({
    name: name,
      passward: passward,
      age: age,
    image: imageUrl,
  });
  id = Date.now();
localStorage.setItem(id,JSON.stringify(data));
  userNameInput.value = '';
  userPasswardInput.value = '';
    userAgeInput.value = '';
  imageInput.value = '';

  renderMessages();
}

userMessageForm.addEventListener('submit', formSubmitHandler);

//************************* code to inject on web page ***********************
  // var values = [],
  //     keys = Object.keys(localStorage),
  //     i = keys.length;
  //
  // while ( i-- ) {
  // //  values.push("Name:"+JSON.parse(localStorage.getItem(Object.keys(localStorage)[i])).name+"   password: "+JSON.parse(localStorage.getItem(Object.keys(localStorage)[i])).passward);
  //   alert("Name:"+JSON.parse(localStorage.getItem(Object.keys(localStorage)[i])).name+"   password: "+JSON.parse(localStorage.getItem(Object.keys(localStorage)[i])).passward);
  //
  // }
  //alert(values);




  // alert("Name:"+JSON.parse(localStorage.getItem(Object.keys(localStorage)[0])).name+"   password: "+JSON.parse(localStorage.getItem(Object.keys(localStorage)[0])).passward+"  Age: "+JSON.parse(localStorage.getItem(Object.keys(localStorage)[0])).age);
