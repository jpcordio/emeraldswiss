import '../styles/style.css';
import { useState, useEffect } from "react";
import Geolocation from "./Geolocation";

/* Geoapify API */
const myApiKey = "5314496f25e249258ee608b395d8c9e7";

/* Display Google Maps driving directions based on the current location of user */
function GoogleMaps() {
	const [longitude, setLongitude] = useState(0);
	const [latitude, setLatitude] = useState(0);
	const [error, setError] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [directionsUrl, setDirectionsUrl] = useState("");

	/* Hardcoded kennel coordinates for Google Maps route planning */
	const destination = { lat: 53.34696, lng: -6.46156 };

	useEffect(() => {
		if (latitude !== 0 && longitude !== 0) {
		
		/* Generates Google Maps directions URL */
		const origin = `${latitude},${longitude}`;
		const destinationCoords = `${destination.lat},${destination.lng}`;
		const url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAlU6WmSs3AzBYcniex31yyI0Mlu4LYIiw&origin=${origin}&destination=${destinationCoords}&mode=driving`;
		setDirectionsUrl(url);
		}
  	}, [latitude, longitude, destination.lng, destination.lat]);
	/* Uses placeholder API key for accessing Google Maps services */

	return (
		<div>
			<Geolocation /* Required to obtain the user's current location */
				setLatitude={setLatitude}
				setLongitude={setLongitude}
				setCity={setCity}
				setCountry={setCountry}
				setError={setError}
				myApiKey={myApiKey}
			/>
			{error ? ( /* Error handling */
				<div className="row justify-content-center mt-4">
					<div className="col-md-6 text-center">
						<h4>{error}</h4>
					</div>
				</div>
			) : ( /* Returns user coordinates and provides driving directions */
				<div className="row justify-content-center mt-4">
					<div className="col-md-6 text-center">
						<h1>Driving Directions</h1>
						<h6>As per the below Coordinates:</h6>
						<h4>{latitude}, {longitude}</h4>
						<h6>You are located in:</h6>
						<h4>{city}, {country}</h4>
						<p>Below map shows driving directions to our kennel</p>
						{directionsUrl && (
							<div className="iframe">
								<iframe
								src={directionsUrl}
								title="Google Map"
								></iframe>
							</div> 
							/* Iframe embeds the Google Maps directions directly into the page */
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default GoogleMaps;

/* GoogleMapsApiKey = "AIzaSyAlU6WmSs3AzBYcniex31yyI0Mlu4LYIiw"; */