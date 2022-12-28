import React, {useEffect, useState, useRef} from 'react';
import {Link, Route, Switch} from 'react-router-dom';

function LastProduct(){

	const [movies,SetMovies] = useState([]);
	const searchInput = useRef()

	useEffect(()=>{
		fetch("/api/products")
		.then( res => res.json())
		.then( products => SetMovies(products.products[products.products.length-1]))
		.catch( err => console.log(err))
	},[])


    return(
        <>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto cargado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={"/images/"+movies.imagen} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{movies.nombre}</p>
                    <p>{movies.precio}</p>
                    <p>{movies.categoria}</p>
                    <p>{movies.tamano}</p>
                    <p>{movies.descuento}</p>
                    <Link className="btn btn-danger" to="/ProductsList">Todos los productos</Link>
                </div>
            </div>
        </div>
      </>

    )

}

export default LastProduct;
