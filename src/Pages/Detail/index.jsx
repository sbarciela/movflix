import { useParams } from "react-router";
import { useState , useEffect } from "react";
import MovieDetail from "../../components/MovieDetail";
import Spinner from "../../components/Spinner";

function Detail(){
    let [ movie , setMovie ]=useState({});
    let [ loading , setLoading ]=useState(true);
    let [ movieExist , setMovieExist ]=useState(true)

    const { id } =useParams();
    let apiKey="a8f9cb188269fd197a08f62cd74de710";

   

    let getData=async()=>{
       await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`)
            .then(response=>response.json())
            .then(data=>{
                if(data.status){
                setMovie(data)
                setLoading(false)
                }else{
                    setMovieExist(false)
                    setLoading(false)
                    setMovie({})
                }
                })    
                
    };

    useEffect(()=>{
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    

    return(
        <div className="container my-4">
            {loading?<Spinner />:""} 
            {movieExist?<MovieDetail {...movie}/>:<h2 className="text-center">La pelicula no existe en la base de datos</h2>}           
            
        </div>
    )
}
export default Detail