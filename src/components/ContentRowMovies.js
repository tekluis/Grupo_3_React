import React, {useState, useRef, useEffect} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */



function ContentRowMovies(){

    const [users,SetUsers] = useState([]);
    const [products,SetProducts] = useState([]);
    const searchInput = useRef()
    
    useEffect(()=>{
        fetch("/api/users")
        .then( res => res.json())
        .then( users => SetUsers(users.meta.count))
        .catch( err => console.log(err))
    },[])
    
    
    useEffect(()=>{
        fetch("/api/products")
        .then( res => res.json())
        .then( users => SetProducts(users.meta.count))
        .catch( err => console.log(err))
    },[])
    
    
    let moviesInDB = {
        title: 'Productos en venta',
        color: 'primary', 
        cuantity: products,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let totalAwards = {
        title:'Usuarios registrados', 
        color:'success', 
        cuantity: users,
        icon:'fa-user'
    }
    
    /* <!-- Actors quantity --> */
    
    let actorsQuantity = {
        title:'Ventas realizadas' ,
        color:'warning',
        cuantity:'49',
        icon:'fa-list'
    }
    
    let cartProps = [moviesInDB, totalAwards, actorsQuantity];
    



    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;