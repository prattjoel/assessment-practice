
function getUser(){
  const first = document.getElementById('firstInput')
  const last = document.getElementById('lastInput')
  // console.log('first name', first.value);
  // console.log('last name', last.value);
  const bodyInfo = { firstName: first.value, lastName: last.value }
  console.log({bodyInfo});
  fetch('/user', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(bodyInfo),
  }).then((res) => {
    return res.json();
  }).then((jres) => {
    console.log({jres});
    const name = document.getElementById('name');
    name.innerHTML = jres.user.firstName + ' ' + jres.user.lastName;
    first.value = '';
    last.value = ''
  }).catch((err) => {
    console.log({err});
  })
}

function getAllUsers(){
  fetch('/allUsers').then((resp) => {
    return resp.json();
  }).then((data) => {
    // const userDiv = document.getElementById('allUserList');
    // userDiv.removeChild();
    console.log({data});
    const userList = document.createElement('ul');
    for (let i=0; i<data.length; i++){
      const item = document.createElement('li');
      item.innerHTML = data[i].firstName;
      userList.appendChild(item);
    }
    //const body = document.getElementsByTagName('body')[0];
    //body.appendChild(userList)
    const userDiv = document.getElementById('allUserList');
    if (userDiv.children[0]){
      userDiv.replaceChild(userList, userDiv.children[0])
    }else{
      userDiv.appendChild(userList)
    }
  }).catch((err) =>{
    console.log({err});
  })
}

function updateUser() {
  const oldName = document.getElementById('oldName');
  const newName = document.getElementById('newName');
  const bodyInfo = {name: oldName.value, newName: newName.value};

  fetch('/update', {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(bodyInfo)
  }).then((resp) => {
    return resp.json();
  }).then((updatedUser) => {
      console.log({updatedUser});
      oldName.value = ''
      newName.value = ''
  }).catch((err) => {
    console.log({err});
  })
}

function deleteUser() {
  const name = document.getElementById('deleteName');
  bodyInfo = {name: name.value}
  fetch('/delete', {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(bodyInfo)
  }).then((resp) => {
    return resp.json();
  }).then((data) => {
    console.log({data});
    getAllUsers();
    name.value = ''
  })
}

function findOneUser() {
  const userInput = document.getElementById('findUserInput');
  fetch(`/oneUser/${userInput.value}`).then((resp) => {
    return resp.json();
  }).then((user) => {
    console.log({user});
    const name = document.getElementById('name');
    name.innerHTML = (user.firstName || 'no') + ' ' + (user.lastName || 'user');
    userInput.innerHTML = ''
  }).catch((err) => {
    console.log({err});
  })
}
