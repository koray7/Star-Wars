import { Link } from 'react-router-dom'


function Main() {
    return (
        <nav className='main-page'>
            <h1><a className='home-btn' href='/'>Home</a></h1>
            <div className="ship-list-page">
                <span className="click-text">👇🏻Click to see the Starships👇🏻</span>
                <h2 ><Link to="/ships" className='list-btn'>Starships List</Link></h2>
            </div>
        </nav>
    )
}

export default Main;