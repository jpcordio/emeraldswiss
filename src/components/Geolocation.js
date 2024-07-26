import { useEffect } from "react";
import axios from "axios";

/* Gets latitude and longitude coordinates and then fetches location details from Geoapify API */
function Geolocation({ setLatitude, setLongitude, setCity, setCountry, setError, myApiKey }) {
  
    /* Checks if browser supports geolocation */
    useEffect(() => {
        const getCoords = async () => {
            if (!("geolocation" in navigator)) {
                setError("Geolocation is not supported!");
                return;
            }

            /* Gets coordinates and handles the API request */
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    const latitude = pos.coords.latitude;
                    const longitude = pos.coords.longitude;

                    try {
                        const response = await axios.get("https://api.geoapify.com/v1/geocode/reverse", {
                            params: {
                                lat: latitude,
                                lon: longitude,
                                apiKey: myApiKey
                            }
                        });

                        const city = response.data.features[0].properties.city;
                        const country = response.data.features[0].properties.country;

                        setLatitude(latitude);
                        setLongitude(longitude);
                        setCity(city);
                        setCountry(country);
                        setError(""); /* Clear previous errors */
                    } catch (error) {
                        setError("Cannot get your location details. Please check API.");
                    }
                },
                (err) => {
                    /* Error handling for geolocation */
                    if (err.code === err.PERMISSION_DENIED) {
                        setError("Please allow geolocation in your browser!");
                    } else {
                        setError("Cannot get your location details. Please check API.");
                    }
                }
            );
        };

        getCoords();
    }, [setLatitude, setLongitude, setCity, setCountry, setError, myApiKey]);

    /* Returns nothing, as it only performs side effects */
    return null;
}

export default Geolocation;

/* const myApiKey = "5314496f25e249258ee608b395d8c9e7"; */