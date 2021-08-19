import { useState , useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import Spinner from "../../components/Spinner";

function Home(){
    let [movies , setMovies]=useState([]);
    let [loading , setLoading]=useState(true);

    let apiKey="a8f9cb188269fd197a08f62cd74de710";

    let getData=async()=>{
       await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1`)
            .then(response=>response.json())
            .then(data=>{
                setMovies(data.results)
                setLoading(false)
                })       
    };

    useEffect(()=>{
        getData()
        // eslint-disable-next-line
    },[]);

    /*useEffect(()=>{
       
    },[movies])
    */

    return(
        <>
            <div className="container my-4">
                <div className="row" id="popularMovies">
                    {loading?<Spinner />:""}     
                    {movies.map((movie)=>{return <MovieCard key={movie.id} {...movie}/>})}
                </div>
            </div>
        </>
    )
}
export default Home