 import React, {useEffect, useState} from 'react';

function CatalogMovies({url, imageDomain}) {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(resp => resp.json())
            .then(function(data) {
                console.log('data:', data);
                setData(data.results)
            })
            .catch(function(error) {
                console.log(error);
            });
    },[])
    console.log('aaa' , data)
    return (
        <div>
            {data && data.map((movie) => <img src={imageDomain + movie.backdrop_path} />)}
        </div>
    )
}

export default CatalogMovies;