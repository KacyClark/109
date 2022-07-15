import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
    return (
    <div className="home-page">
        <h1>Specializing in Things for Your Chiwowwow!</h1>
        <Link className="btn-btn-secondary" to="/catalog">Check out our Furbulous catalog</Link>
    </div>
    );
};





export default Home;