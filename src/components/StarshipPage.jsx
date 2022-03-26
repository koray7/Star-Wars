import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



function StarshipPage() {

    const [ship, setShip] = useState({})
    const { uid } = useParams()

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/starships/${uid}`)
            .then((res) => res.json())
            // .then((res) => console.log(res.json()))
            .then((data) => {
                console.log(data)
                setShip(data.result.properties)
            }).catch(console.error)
    }, [])

    return (

        <div>
            <h1>StarShip Page</h1>
            <h1 className='detail'>This is the Starship</h1>
            <div className='starship-details'>
                <h2>Name : {ship.name}</h2>
                <h3>Model: {ship.model}</h3>
                <h3>Manufacturer: {ship.manufacturer}</h3>
                <h3>Cost: ${ship.cost_in_credits}</h3>
                <h3>Length: {ship.length}</h3>
                <h3>Passengers: {ship.passengers}</h3>
                <h3>Max Speed: {ship.max_atmosphering_speed} MPH</h3>
            </div>
        </div>

    )
}

export default StarshipPage