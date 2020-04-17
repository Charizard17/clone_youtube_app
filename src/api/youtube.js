import axios from 'axios';

export default axios.create({
    baseURL: 'https://developers.google.com/youtube/v3',
    params: {
        part: 'snippet',    // this line for getting videos from our youtube api
        maxResults: 5,      // and this line is show the limit of getting apis
        key: '[API_KEY]'    // your API KEY must be inside of square brackets
    }
})