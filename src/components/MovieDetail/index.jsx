
import { useHistory } from "react-router-dom"
function MovieDetail(movie){
	let history=useHistory()
    let genres=movie.genres?movie.genres:[];
    let imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/images/no-poster.jpg";
   
    return(
        <div className="row" id="movieDetail">
			<div className="col-12 col-md-4">
				<img src={imageUrl} id="movieImg" alt={movie.title} className="rounded img-thumbnail"/>
			</div>
			<div className="col-12 col-md-8" id="movieInfo">
				<h2>Título: {movie.title} </h2>
				<h5>Géneros: </h5>
				<ul>
                {genres.map((genre , i)=><li key={i}>{genre.name}</li>)}
				</ul>
				<h5>Reseña: </h5>
				<p>{movie.overview || 'Sin reseña.'}</p>
				<h5 id="rating">Rating: {movie.vote_average} </h5>
				<button onClick={()=>history.goBack()} className="btn btn-dark my-3">volver</button>
			</div>
		</div>
    )
};
export default MovieDetail