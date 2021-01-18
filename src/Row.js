import React, {useState, useEffect} from 'react'
import axios from './axios';


function Row({title, fetchURL}) {

   const [movies, setMovies] = useState([]);
   useEffect(() => {
       
       async function fetchData() {
           const request = axios.get(fetchURL);

           return request;
       }
       fetchData();
       return
   }    
   , [fetchURL]);

    return (
        <div>
             <h2>{title}</h2>
        </div>
    )
}

export default Row;
