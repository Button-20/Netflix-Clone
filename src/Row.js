import React, { useEffect, useState } from 'react';
import axios from './axios';
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition
    useEffect(() => {
        //If [], run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request);
            return request;
        }
        fetchData();
    }, [fetchUrl])

        console.table(movies);
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {/* several row__posters */}

                {movies.map((movie) => (
                    <img className="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
            {/* container -> posters */}
        </div>
    )
}

export default Row
