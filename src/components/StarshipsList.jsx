import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function StarshipsList() {
    const [ships, setShips] = useState([])
    let url = "https://www.swapi.tech/api/starships"
    
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setShips(data.results)
        }).catch(err => console.error(err))
    },[])
    
    return(
        <div>
            <h1>List of Starships</h1>
            <section className="starships-list">
                { ships.map((ship, idx) => {
                return(
                    <Link to={`/ships/${ ship.uid }`} key={ ship.uid }>
                        <div key={idx} className="Solo">
                        <h3>{ship.name}</h3>

                        </div>
                    </Link>
                )
        })}


           </section>
        </div>
    )
}



export default StarshipsList