
import './search.scss';
import { useState, useEffect } from 'react';
import  Moment  from 'moment';
import axios from 'axios';



const YoutubeSearch = () => {
    const [ video, setVideo ] = useState([]);
    const [ keyword, setKeyword ] = useState('');

    const handleSearch = async () => {
        const apiKey = 'AIzaSyCEKTGb0n8RzCLkA0GlbNZgJ-ZnE5Qa0po';
        const getAPI = await axios({
                method : 'get',
                baseURL: "https://www.googleapis.com/youtube/v3/search",
                    params: {
                    part: "snippet",
                    type : 'video',
                    maxResults: 20,
                    key: apiKey,
                    q : keyword
             },
           });
        if (getAPI && getAPI.data) {
            let videos = getAPI.data.items;
            if (videos && videos.length  > 0 ){
                let listVideo = [];
                videos.forEach( video => {
                    let obj = {
                        id : video.id.videoId,
                        author : video.snippet.channelTitle,
                        publish : video.snippet.publishedAt,
                        desc : video.snippet.description,
                        title : video.snippet.title
                    }

                    listVideo.push(obj);
                });

                setVideo(listVideo);
            }
        }
    }

    return (
       <div className="youtube_search">
        <div className="input_search">
            <input 
                className="input"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}

            />
            <button 
                className="btn-search"
                onClick={handleSearch}
            >
            Search</button>
        </div>


        {
            video.map( vid => {
                return (
                    <div className='search_results' key={vid.id}>
                        <div className='left'>
                            <iframe  
                                className='iframe' 
                                src={`https://www.youtube.com/embed/${vid.id}`}
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                        <div className='right'>
                            <h4 className='title'> 
                                {
                                    vid.title
                                }
                            </h4>
                            <span className='time'>
                                Created At :{Moment(vid.publish).format('DD/MM/YYYY HH:mm:ss A')}
                            </span>

                            <span className='author'>
                                Author : {vid.author}
                            </span>

                            <p className='desc'>
                                {vid.desc}
                            </p>

                        </div>
                    </div>
                );
            })
        }
       </div>
    )
}

export default YoutubeSearch;