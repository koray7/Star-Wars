import { Link } from 'react-router-dom'


function Main() {
    return (
        <nav className='main'>
            <h2 ><a className='home' href='/'>Home</a></h2>
            <h2 ><Link to="/ships" className='list-button'>Starships List</Link></h2>
        </nav>
    )
}

export default Main 