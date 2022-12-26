import React, {useEffect, useState, useRef} from 'react';


function UsersList(){


	const [movies,SetMovies] = useState([]);
	const searchInput = useRef()

	useEffect(()=>{
		fetch("/api/users")
		.then( res => res.json())
		.then( users => SetMovies(users.users))
		.catch( err => console.log(err))
	},[])


	return(
		<div className="container-fluid">
			{
				
				<>
					<div className="row">
						<div className="col-12">
							<h2>Listado de Usuarios:</h2>
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
												<p>{movie.apellido}</p>
												<p>{movie.email}</p>
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

export default UsersList;
