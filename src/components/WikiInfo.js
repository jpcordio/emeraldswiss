import axios from 'axios';

/* Function which takes array of titles for which info is fetched from Wikipedia */
const WikiInfo = async (titles) => {
    const baseUrl = 'https://en.wikipedia.org/w/api.php';
    const params = {
        action: 'query', /* Query data from Wikipedia */
        format: 'json', /* Specify response format */
        origin: '*', /* Allows cross-origin requests */
        prop: 'extracts|pageimages', /* Request extracts=text snippets and page images=thumbnails */
        exintro: true, /* Limits to the introductory section */
        explaintext: true, /* Plain text */
        pithumbsize: 400, /* Thumbnail size in pixels */
        titles: titles.join('|') /* Joins array into a single string, which the API expects for multiple titles */
    };

    /* API request function */
    try {
        const response = await axios.get(baseUrl, { params });
        const pages = response.data.query.pages;

        /* Helper function to get the first paragraph */
        const getFirstParagraph = (text) => {
            const paragraphs = text.split('\n'); /* Split by line breaks to get paragraphs */
            return paragraphs[0]; /* Returns first paragraph */
        };

        /* Data parsed from the array of titles and for each title, an object is created with below params */
        const parsedData = titles.map(title => {
            const page = Object.values(pages).find(page => page.title.toLowerCase().includes(title.toLowerCase()));
            const description = page && page.extract ? getFirstParagraph(page.extract) : 'No description available.';
            return {
                name: title,
                description: description,
                image: page ? (page.thumbnail ? page.thumbnail.source : 'https://via.placeholder.com/400') : 'https://via.placeholder.com/400',
                link: page ? `https://en.wikipedia.org/?curid=${page.pageid}` : '#'
            };
        });
        return parsedData;
    /* Error handling */
    } catch (error) {
        console.error('Error fetching data from Wikipedia API:', error);
        return [];
    }
};

export default WikiInfo;