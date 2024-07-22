import { useState, useEffect } from "react";
import Geolocation from "./Geolocation";

const myApiKey = "5314496f25e249258ee608b395d8c9e7";

function GoogleMaps() {
	const [longitude, setLongitude] = useState(0);
	const [latitude, setLatitude] = useState(0);
	const [error, setError] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [directionsUrl, setDirectionsUrl] = useState("");

	// kennel coordinates for Google Maps route planning
	const destination = { lat: 53.34696, lng: -6.46156 };

	useEffect(() => {
		if (latitude !== 0 && longitude !== 0) {
		
		// generates Google Maps Directions URL
		const origin = `${latitude},${longitude}`;
		const destinationCoords = `${destination.lat},${destination.lng}`;
		const url = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyAlU6WmSs3AzBYcniex31yyI0Mlu4LYIiw&origin=${origin}&destination=${destinationCoords}&mode=driving`;
		setDirectionsUrl(url);
		}
  	}, [latitude, longitude, destination.lng, destination.lat]);

	return (
		<div>
			<Geolocation
				setLatitude={setLatitude}
				setLongitude={setLongitude}
				setCity={setCity}
				setCountry={setCountry}
				setError={setError}
				myApiKey={myApiKey}
			/>
			{error ? (
				<div className="row justify-content-center mt-4">
					<div className="col-md-6 text-center">
						<h4>{error}</h4>
					</div>
				</div>
			) : (
				<div className="row justify-content-center mt-4">
					<div className="col-md-6 text-center">
						<h1>Driving Directions</h1>
						<h4>As per the Coordinates: {latitude}, {longitude}</h4>
						<h4>You are located in {city}, {country}.</h4>
						<p>Below map shows driving directions to our kennel.</p>
						{directionsUrl && (
							<>
								<iframe
								src={directionsUrl}
								title="Google Map"
								></iframe>
							</> 
							// FOR STYLING Footer with media icons overlap with map iframe
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default GoogleMaps;

/* GoogleMapsApiKey = "AIzaSyAlU6WmSs3AzBYcniex31yyI0Mlu4LYIiw"; */