/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Spinner from './Spinners';

// eslint-disable-next-line no-unused-vars
// Componente Card que toma props de loadingData, showData, weather y forecast
const Card = ({ loadingData, showData, weather, forecast }) => {
    var today = new Date();  // Obtener la fecha actual
    var day = today.getDate();  // Obtener el día actual
    var month = today.getMonth() + 1;  // Obtener el mes actual
    var year = today.getFullYear();  // Obtener el año actual
    var date = day + "/" + month + "/" + year;  // Formar la fecha actual en formato dd/mm/yyyy

    var url = "";       // Variable para almacenar la URL base de los iconos
    var iconUrl = "";   // Variable para almacenar la URL completa del icono del clima actual


    // Variables para almacenar las URLs completas de los iconos de los pronósticos futuros
    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    // Variables para almacenar fechas y horas de los pronósticos futuros
    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    if (loadingData) {
        return <Spinner />;
    }

    if (showData) {
        // Controla cuándo se visualizan los datos
        url = "http://openweathermap.org/img/w/"; // URL de los iconos que se ven en pantalla
        iconUrl = url + weather.weather[0].icon + ".png"; // Desde aquí se accede al icono viéndolo desde la consola

        // Forma las URLs completas de los iconos de los pronósticos futuros
        iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

        // Forma las fechas y horas de los pronósticos futuros
        forecastDate3 =
            forecast.list[1].dt_txt.substring(8, 10) +
            '/' +
            forecast.list[1].dt_txt.substring(5, 7) +
            '/' +
            forecast.list[1].dt_txt.substring(0, 4) +
            ' ' +
            forecast.list[1].dt_txt.substring(11, 13);
        forecastDate6 =
            forecast.list[2].dt_txt.substring(8, 10) +
            '/' +
            forecast.list[2].dt_txt.substring(5, 7) +
            '/' +
            forecast.list[2].dt_txt.substring(0, 4) +
            ' ' +
            forecast.list[2].dt_txt.substring(11, 13);
        forecastDate9 =
            forecast.list[3].dt_txt.substring(8, 10) +
            '/' +
            forecast.list[3].dt_txt.substring(5, 7) +
            '/' +
            forecast.list[3].dt_txt.substring(0, 4) +
            ' ' +
            forecast.list[3].dt_txt.substring(11, 13);
    }

    return (
        <div className='mt-5'>
            {showData === true ? (
                <div className="container">
                    <div className="card mn-3 mx-auto bg-dark text-light text-center">
                        <div className="row g-0" >
                            <div className="col-md-4" >
                                <h3 className="card-title">{weather.name} </h3>
                                <p className="card-date">{date}</p> 
                                <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)} °C </h1>
                                <p className="card-desc"><img src={iconUrl} alt="icon"/>{weather.weather[0].description}</p>
                                <img src="https://images.pexels.com/photos/3523938/pexels-photo-3523938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt=".." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5 className="card-text"> Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                    <h5 className="card-text"> Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                                    <h5 className="card-text"> Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                    <h5 className="card-text"> Humedad: {weather.main.humidity} % </h5>
                                    <h5 className="card-text"> Velocidad del viento: {weather.wind.speed} m/s </h5>
                                </div>
                                <hr />

                                {/* Descripción */}
                                <div className="row mt-4">
                                    <div className="col">
                                        <p>{forecastDate3}h</p>
                                        <p className="description"><img src={iconUrl3} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}°C</p> 
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate6}h</p>
                                        <p className="description"><img src={iconUrl6} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}°C</p> 
                                    </div>
                                    <div className="col">
                                        <p>{forecastDate9}h</p>
                                        <p className="description"><img src={iconUrl9} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                        <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}°C</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h2 className="text-light text-center">Sin datos </h2>
            )}
        </div>
    );
};

export default Card;
