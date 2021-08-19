import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../../components/MovieCard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons';

function Favourites(){
   
    let localData=JSON.parse(localStorage.getItem("favourites"));
    let [ movies , setMovies ] =useState([])
    let location=useLocation();
  
  
 
    useEffect(()=>{
        setMovies(localData)
        // eslint-disable-next-line
    },[location])
  
    
    return(
        <>
            <div className="container my-4">
                <div className="row" id="popularMovies">   
                    {movies&&
                    movies.map((movie)=>{return <MovieCard key={movie.id} {...movie}/>})}
                    {movies.length===0?
                    <div className="d-flex justify-content-center align-items-center">
                        <h2 className="me-3">No hay películas guardadas</h2>
                        <FontAwesomeIcon icon={faFilm} size="2x"/>
                    </div>
                    :""}
                </div>
            </div>
        </>
    )
};

export default Favourites