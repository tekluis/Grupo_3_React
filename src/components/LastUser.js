import React, {useEffect, useState, useRef} from 'react';


function LastUser(){
    
	const [movies,SetMovies] = useState([]);
	const searchInput = useRef()

	useEffect(()=>{
		fetch("/api/users")
		.then( res => res.json())
		.then( users => SetMovies(users.users[users.users.length-1]))
		.catch( err => console.log(err))
	},[])



    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario registrado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} src={"/images/"+movies.imagen} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{movies.nombre}</p>
                    <p>{movies.apellido}</p>
                    <p>{movies.email}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle del usuario</a>
                </div>
            </div>
        </div>
    )
}

export default LastUser;
