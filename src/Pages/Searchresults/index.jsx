import { useState , useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import Spinner from "../../components/Spinner";

function SearchResults(){
    let [movies , setMovies]=useState([]);
    let [loading , setLoading]=useState(true);
    let [results , setResults]=useState(true)

    let location= useLocation();
    let querySearch=location.search;
    let word=querySearch.substring(8);
    

    let apiKey="a8f9cb188269fd197a08f62cd74de710";
    


    let getData=async()=>{
       await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1&query=${word}`)
            .then(response=>response.json())
            .then(data=>{
                if(data.total_results>0){
                    setResults(true)
                    setMovies(data.results)
                    setLoading(false)
                }else{
                    setResults(false)
                    setLoading(false)
                    setMovies([])
                }
                })       
    };

    useEffect(()=>{
        getData()
        return () => {
            setMovies([])
        }
      // eslint-disable-next-line
    },[]);

    useEffect(()=>{
        getData()
    // eslint-disable-next-line
    },[movies])

    return(
        <>
            <div className="container my-4">
                <div className="row" id="popularMovies">
                    {loading?<Spinner />:""}     
                    {results?
                    movies.map((movie)=>{return <MovieCard key={movie.id} {...movie}/>}):
                    <h2 className="text-center">La pelicula no existe en la base de datos</h2>}
                </div>
            </div>
        </>
    )
}
export default SearchResults