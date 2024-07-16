import { Link } from "react-router-dom"


function Navbar() {
    return (
        <div>
            <div className="flex gap-3 bg-pink-300 p-4">
               <Link to={'/'}> <p>List of students</p></Link>
                <Link to={'/fav'}><button><p>Favourite students</p></button></Link>
            </div>
        </div>
    )
}

export default Navbar
