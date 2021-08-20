import { Link , useHistory , useLocation} from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons';


function MovieCard(movie){
	//accediendo al localStorage en key favourites
	let favList=localStorage.getItem("favourites");
	let favParsed=JSON.parse(favList);
	
	//si existe la key, consulta si alguno de los id coincide con el id de la pelicula, para marcarla como fav o no.
	let filterState=favParsed&&favParsed.some(item=>item.id===(movie.id));
	
	
	let [ favourite , setFavourite ]= useState(filterState);
	let history=useHistory();
	let location=useLocation();
	
	

	let addFavHandler=()=>{
		setFavourite(true);

		let newItem={
			id:movie.id,
			poster_path:movie.poster_path,
			original_title:movie.original_title,
			overview:movie.overview
			};

		if(favList===null){
			localStorage.setItem("favourites",JSON.stringify([newItem]))
		}else{
		let localList=localStorage.getItem("favourites");
		let list=JSON.parse(localList);
		list.push(newItem)
		localStorage.setItem("favourites",JSON.stringify(list))
	}		
	};

	

	let RemoveFavHandler=()=>{
		setFavourite(false);
		let localList=localStorage.getItem("favourites");
		let list=JSON.parse(localList);
		let newList=list.filter(item=>item.id!==movie.id);
		localStorage.setItem("favourites",JSON.stringify(newList))
		if(location.pathname==="/favourites"){
			history.push("/favourites")
		}
	};

    let imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/images/no-poster.jpg';
    return(
        <div className="col-12 col-sm-6 col-lg-3 my-2">
					<div className="card h-100">
						<img src={imageUrl} className="card-img-top" alt={movie.original_title}/>
						<div className="card-body">
							<h5 className="card-title one-line-title" >{movie.original_title}</h5>
							<p className="card-text">{movie.overview.substr(0, 80).trim()}...</p>
							<div className="d-flex justify-content-between align-items-center">
                            	<Link to={`/detail/${movie.id}`} className="btn btn-primary">Ver detalle</Link>
								{favourite?
								<FontAwesomeIcon icon={solidHeart} size="lg" onClick={RemoveFavHandler} className="favIconD"/>:
								<FontAwesomeIcon icon={emptyHeart} size="lg"  onClick={addFavHandler} className="favIcon"/>}
							</div>
							
						</div>
					</div>
        </div>
		
    )
}
export default MovieCard