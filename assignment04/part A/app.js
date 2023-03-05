 userMessages = [];
const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');

const post = document.querySelector('button');

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
function renderMessages() {
  userMessages=getAllData();
  let messageItems = '';

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

        var myScript = document.createElement('script');
         myScript.textContent =obj.age;
         userMessagesList.appendChild(myScript);
}
//**************************** one way of avoid the xss attack***************
// console.log(message);
//   obj = JSON.parse(message);
//     messageItems = `
//       ${messageItems}
//       <li class="message-item">
//         <div class="message-image">
//           <img src="${obj.image}" alt="${obj.image}">
//         </div>
//         <p>Name:"${obj.name}"&emsp;&emsp;age:"${obj.passward}"</p>
//       </li>
//     `;
// }
//  userMessagesList.innerHTML = messageItems;
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

  const name = userNameInput.value;
  const age = userAgeInput.value;
  const passward = userPasswardInput.value;
  const imageUrl = imageInput.value;

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
  //   values.push("Name:"+JSON.parse(localStorage.getItem(Object.keys(localStorage)[i])).name+"   password: "+JSON.parse(localStorage.getItem(Object.keys(localStorage)[i])).passward);
  //   //alert("Name:"+JSON.parse(localStorage.getItem(Object.keys(localStorage)[i])).name+"   password: "+JSON.parse(localStorage.getItem(Object.keys(localStorage)[i])).passward);
  //
  // }
  // alert(values);




  // alert("Name:"+JSON.parse(localStorage.getItem(Object.keys(localStorage)[0])).name+"   password: "+JSON.parse(localStorage.getItem(Object.keys(localStorage)[0])).passward+"  Age: "+JSON.parse(localStorage.getItem(Object.keys(localStorage)[0])).age);
