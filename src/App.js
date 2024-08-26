// App.js
import React, { useState } from 'react';
import axios from 'axios';
import VideoList from './VideoList';
import SearchBar from './Searchbar';

const API_KEY = "AIzaSyCIyJAXOc5SKiKKkdh66YP42H18It0qITQ";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const App = () => {
    const [videos, setVideos] = useState([]);

    const fetchComedyVideos = async (query) => {
        try {
            const response = await axios.get(`${BASE_URL}/search`, {
                params: {
                    part: 'snippet',
                    maxResults: 5,
                    q: `${query} comedy`,
                    key: API_KEY,
                    type: 'video'
                }
            });

            const videoItems = response.data.items.map(item => ({
                title: item.snippet.title,
                url: `https://www.youtube.com/embed/${item.id.videoId}`
            }));

            setVideos(videoItems);
        } catch (error) {
            console.error('Error fetching comedy videos:', error);
        }
    };

    return (
        <div>
            <h1>Comedy Show Finder</h1>
            <SearchBar onSearch={fetchComedyVideos} />
            <VideoList videos={videos} />
        </div>
    );
};

export default App;

