import React, {useEffect, useState, useRef} from 'react';


function ProductsList(){

	
	// Credenciales de API
	// const apiKey = '6747a91d'; // Intenta poner cualquier cosa antes para probar

	const [movies,SetMovies] = useState([]);
	//const [keyword,SetKeyword] = useState("action");
	const searchInput = useRef()

	useEffect(()=>{
		//const url=`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;
		fetch("/api/products")
		.then( res => res.json())
		.then( products => SetMovies(products.products))
		.catch( err => console.log(err))
	},[])

/*	function search (e) {
		e.preventDefault();
		const inputValue = searchInput.current.value;
		SetKeyword(inputValue);
		searchInput.current.value="";
	}*/

	return(
		<div className="container-fluid">
			{
				
				<>
					
					<div className="row">
						<div className="col-12">
							<h2>Listado de productos:</h2>
						</div>
						{/* Listado de películas */}
						{
							movies.length > 0 && movies.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={"/images/"+movie.imagen}
														alt={movie.nombre} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.nombre}</p>
												<p>{movie.precio}</p>
												<p>{movie.categoria}</p>
												<p>{movie.tamano}</p>
												<p>{movie.descuento}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ movies.length === 0 && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
			
			}
		</div>
	)
}

export default ProductsList;
