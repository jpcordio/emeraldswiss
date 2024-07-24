import { useState, useEffect } from 'react';
import DogBreed from '../components/DogBreed';
import WikiInfo from '../components/WikiInfo';

/* An array containing the titles of the Swiss dog breeds */
const breedTitles = [
    { original: 'Greater Swiss Mountain Dog', display: 'Greater Swiss Mountain Dog' },
    { original: 'Bernese Mountain Dog', display: 'Bernese Mountain Dog' },
    { original: 'Appenzeller Sennenhund', display: 'Appenzeller Mountain Dog' },
    { original: 'Entlebucher Mountain Dog', display: 'Entlebucher Mountain Dog' }
];

/* Stores fetched data about dog breeds and loading state */
function SwissDogs() {
    const [breeds, setBreeds] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBreeds = async () => {
            const originalTitles = breedTitles.map(breed => breed.original);
            const data = await WikiInfo(originalTitles);

            /* Map fetched data to include the display names */
            const breedsWithDisplayNames = data.map((breed, index) => ({
                ...breed,
                displayName: breedTitles[index].display
            }));

            setBreeds(breedsWithDisplayNames);
            setIsLoading(false);
        };

        fetchBreeds();
    }, []);

    /* Display message while loading */
    if (isLoading) {
        return <div>Loading data...</div>;
    }

    /* Maps through the breeds array obtained and renders a DogBreed component for each breed with props */
    return (
        <div>
            <h1 className="text-center mt-4">Swiss Mountain Dog Breeds</h1>
            <div className="breeds-list">
                {breeds.map((breed, index) => (
                    <DogBreed
                      key={index}
                      name={breed.displayName}
                      description={breed.description}
                      image={breed.image}
                      link={breed.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default SwissDogs;