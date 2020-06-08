// Add your code here
/* function submitData(userName,userEmail){
  return fetch("http://localhost:3000/users",{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: `${userName}`,
    email : `${userEmail}`
  })
}).then(response=>{
  return response.json()
}).then(Object=>{
  console.log(Object)

  document.body.innerHtml=Object["id"]
}).catch(err=>{
  document.body.innerHtml=err.message
})

}
let name = "jim"
      let email = "jim@jim.com"
submitData(name,email)
*/

function submitData(name,email)
{
  let info = {
        name:name,
        email:email
      }
  let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(info)
};
  return fetch("http://localhost:3000/users",configObj)
.then(function(response) {
    return response.json();
  })
  .then(function(object) {
    let div = document.createElement('div');
        div.innerHTML = object.id;
        document.querySelector('body').append(div);
  })
  .catch(function(error) {
          let div = document.createElement('div');
          div.innerHTML = error.message;
          document.querySelector('body').append(div);
        });
      };
      let name = "jim"
      let email="jim@jim.com"
      submitData(name,email)
  // Add your code here
