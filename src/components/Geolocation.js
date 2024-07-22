import { useEffect } from "react";
import axios from "axios";

function Geolocation({ setLatitude, setLongitude, setCity, setCountry, setError, myApiKey }) {
  
    useEffect(() => {
        const getCoords = async () => {
            if (!("geolocation" in navigator)) {
                setError("Geolocation is not supported!");
                return;
            }

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
                        setError(""); // Clear any previous errors
                    } catch (error) {
                        setError("Could not retrieve the location. Check your API key or try again later!");
                    }
                },
                (error) => {
                    setError("Please enable geolocation for the map to be displayed");
                }
            );
        };

        getCoords();
    }, [setLatitude, setLongitude, setCity, setCountry, setError, myApiKey]);

    return null;
}

export default Geolocation;

/* const myApiKey = "5314496f25e249258ee608b395d8c9e7"; */