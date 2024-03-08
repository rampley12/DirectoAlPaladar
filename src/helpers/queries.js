const APIPRoducto = import.meta.env.VITE_API_PRODUCTO
console.log(APIPRoducto)
//GET
export const leerProducto = async ()=>{
try {
 const repuesta = await fetch(APIPRoducto);

 return repuesta;
} catch (error){
    console.log(error);
}
};
//POST
export const crearProducto = async (productoNuevo)=>{
    try {
     const repuesta = await fetch(APIPRoducto,{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(productoNuevo)
     });

     return repuesta;
    } catch (error){
        console.log(error);
    }
    };

//PUT O PATCH
//DELETE
export const borrarProducto = async (id)=>{
    try {
     const repuesta = await fetch(APIPRoducto+`/`+id,{
        method: "DELETE",
     });
     console.log(repuesta)
     return repuesta;
    } catch (error){
        console.log(error);
    }
    };
//GET de un unico producto
export const obtenerProducto = async (id)=>{
    try {
     const repuesta = await fetch(APIPRoducto+`/`+id);
     console.log(repuesta)
     return repuesta;
    } catch (error){
        console.log(error);
    }
    };