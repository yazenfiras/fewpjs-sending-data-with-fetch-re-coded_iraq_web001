// Add your code here
function submitData(userName,userEmail){
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

  document.body.innerHtml=Object["id"]
}).catch(err=>{
  document.body.innerHtml=err.message
})

}
