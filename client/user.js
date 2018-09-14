
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
