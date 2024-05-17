import axios from 'axios';
const KEY = 'tx5PaRmtQ3dUkaJsusPP1EL1X689uQHE68acBPkOs-w';
axios.defaults.baseURL = "https://api.unsplash.com/";
  

const fetchData = async (query, page, per_page) => {
    try {
        const response = await axios.get(`search/photos`, {
            params: {
                client_id: KEY,
                query: query,
                page: page,
                per_page: per_page,
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }   
}

export default fetchData;