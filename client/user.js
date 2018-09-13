
function getUser(){
  fetch('/user').then((res) => {
    return res.json();
  }).then((jres) => {
    console.log({jres});
  }).catch((err) => {
    console.log({err});
  })
}
