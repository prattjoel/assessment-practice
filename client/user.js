
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
    console.log({data});
    const userList = document.createElement('ul');
    for (let i=0; i<data.length; i++){
      const item = document.createElement('li');
      item.innerHTML = data[i].firstName;
      userList.appendChild(item);
    }
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(userList)
  }).catch((err) =>{
    console.log({err});
  })
}
