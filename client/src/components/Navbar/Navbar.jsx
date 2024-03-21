import { ArrowBarLeft, ArrowBarRight } from 'react-bootstrap-icons';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const toggleClicked = () => {
        setClicked(!clicked)
    }

    return(
        <div className="navbar bg-[#303030] align-items-center">
            <Link className="text-[#eee] p-2" to="/">Logo</Link>
            <div id="navbar" className={clicked ? '#navbar active' : '#navbar'}>
                <Link className="text-[#CECECE] p-2" to="/">Home</Link>
                <Link className="text-[#CECECE] p-2" to="/">About</Link>
            </div>
            <div id="switch">
                <p onClick={toggleClicked}>{clicked ?
                    <ArrowBarRight className="text-[#fff] text-2xl"/>
                    :
                    <ArrowBarLeft className="text-[#fff] text-2xl"/>
                }
                </p>
            </div>
        </div>
    )
}

export default Navbar