function Spinner(){
    return(
        <div className="row justify-content-center" id="loading">
            <div className="col-6 text-center">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>cargando...</p>
            </div>
		</div> 
    )
}
export default Spinner