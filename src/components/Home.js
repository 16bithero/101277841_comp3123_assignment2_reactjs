import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <br />
            <br />
            <div className="divmid">
                <div className="hero">
                    <h2 style={{color: '#fdfdfd', fontSize: '6em'}}>hello there.</h2>
                    <h3 style={{color: '#fdfdfd'}}>Employee Management App</h3>
                </div>
                <div className="heroCap">
                    <h2>Select an option to continue</h2>
                    <Link to='/login'>
                        <Button size="lg" style={{ width: 150 }}>Login</Button>
                    </Link>
                    <br />
                    <br />
                    <Link to='/signup'>
                        <Button size="lg" style={{ width: 150 }}>Signup</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
