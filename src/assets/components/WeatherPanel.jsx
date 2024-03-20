/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import Form from "./Form";
import Card from "./Card";


const WeatherPanel = () => {
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=eb7f3848bec684cb47760e5a15d96ec3&lang=es";
    let cityUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=eb7f3848bec684cb47760e5a15d96ec3&lang=es";


    const [weather, setWeather] = useState([]); // almacena la respuesta que no va a dar a la api del tiempo actual
    const [forecast, setForecast] = useState([]); // Prediccion de las siguientes horas 
    const [loading, setLoading] = useState(false); // disponemos de un load(spinner) mientras se este cargando la informacion se visualize este
    const [show, setShow] = useState(false); //  otro estado para visualizar lsa tarjetas con la informacion 
    const [location, setLocation] = useState(""); // variable de estado para que se pueda comunicar con el formulario 


    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //tiempo

        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather)
            .then((response) => {
                if (!response.ok) throw { response }
                return response.json();

            }).then((weatherData) => {     //procesamos la informacion en el parametro weathedata 
                console.log(weatherData);
                setWeather(weatherData);    //establecemos la informacion en el parametro
            }).catch((error) => {
                console.log(error);
                setLoading(false);
                setShow(false);
            });

        //forecast 

        urlForecast = urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false); //si a habido algun otro error hara que no se visualice 
            setShow(true);  //si a habido algun otro error hara que se visualice 
        });
     }


     return (

        <> 
    <Form newLocation={getLocation} 

    />
    
    <Card 
    showData={show}   //con este props visualisamos la informacion
    loadingData={loading} //con este visualizamos el spinners
    weather={weather}
    forecast={forecast}

    />

       </>
     )
} 
    

export default WeatherPanel;