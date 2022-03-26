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
    }, [])

    return (
        <div className="starship-list">
            <section className="starships-list">
                {ships.map((ship, idx) => {
                    return (
                        <Link to={`/ships/${ship.uid}`} key={ship.uid}>
                            <div key={idx} >
                                <span className="starships-text">{ship.name}
                                </span>
                            </div>
                        </Link>
                    )
                })}


            </section>
        </div>
    )
}



export default StarshipsList