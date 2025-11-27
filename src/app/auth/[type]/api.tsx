export async function Authentication(formInfo, context){
  let response
  if(context == "Registration"){
    response = await fetch('https://localhost:5000/users/register',{
      method: "POST",
      credentials : "include",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(formInfo),
    })
  }
  if(context == "Login"){
    response = await fetch('https://localhost:5000/users/login',{
      method: "POST",
      credentials : "include",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(formInfo),
    })
  }
  if(response){
    let msg = await response.text()
    return { ok : response.ok, status : response.status, message : msg}
  }else{
    return { ok : false, status: 500, message: `Request didn't reach the server.`}
  }
}
