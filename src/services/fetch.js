async function postData(endpoint,obj) {
   try {
    const peticion = await fetch(`http://localhost:3001/${endpoint}`,{
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const respuesta = await peticion.json()
    console.log(respuesta);
    return respuesta
   } catch (error) {
    console.error(error);
   }
}
async function getData(endpoint) {
   try {
    const peticion = await fetch(`http://localhost:3001/${endpoint}`,{
        method: 'get',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const respuesta = await peticion.json()
    console.log(respuesta);
    return respuesta
   } catch (error) {
    console.error(error);
   }
}
async function deleteData(endpoint,id) {
   try {
    const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`,{
        method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        }
    })
    const respuesta = await peticion.json()
    console.log(respuesta);
    return respuesta
   } catch (error) {
    console.error(error);
   }
}
async function putData(endpoint,obj,id) {
   try {
    const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`,{
        method: 'patch',
        headers:{
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(obj)
    })
    const respuesta = await peticion.json()
    console.log(respuesta);
    return respuesta
   } catch (error) {
    console.error(error);
   }
}
export {postData,getData,deleteData,putData}