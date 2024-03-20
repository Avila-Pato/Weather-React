import { useState } from "react";



// eslint-disable-next-line react/prop-types
const Form = ({  newLocation }) => {
    // Usa newLocation como una función aquí

       // aqui se llama 
    const  [city, setCity] = useState("");

    const onSubmit = (e) => {
    e.preventDefault();
    console.log({city});  // colocar ({city}) nos deja ver sus campos en la web
    if (city === "" || !city) return //si no se escribe nada se colola la siguiente condicion que no esta definida


    // se incluye en este caso si incorporamos una ciudad  

    newLocation(city)
}

return (

    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="input-group mb-3 mx-auto">
                <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} />
                <button className="btn btn-primary input-group-text" type="submit">Buscar </button>
            </div>
        </form>
    </div>

 )
}
export default Form;