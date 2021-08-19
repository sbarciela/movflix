import { useState } from "react";
import { Link , useHistory} from "react-router-dom";


function Navbar(){

	let [ alert , setAlert ]= useState(false)

	let history=useHistory()

	let submitHandler=(e)=>{
		e.preventDefault();
		let word=e.currentTarget.search.value
		
		if(word.length>=3){
		history.push(`/search-results?search=${word}`)
		setAlert(false)
		e.currentTarget.reset()
		}else{
			setAlert(true)
		}
}
return(
	<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">MovFlix</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/favourites">Mis Favoritos</Link>
						</li>
					</ul>
					<form className="d-flex" onSubmit={submitHandler}>
						<input className="form-control me-2" type="search"  name="search" placeholder="Search" aria-label="Search"/>
						<button className="btn btn-outline-info" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
		{alert?
		<div className="alert alert-danger text-center" id="alert">'Ingresa un mínimo de 3 letras'</div>
		:""}
	</>
)    
}
export default Navbar