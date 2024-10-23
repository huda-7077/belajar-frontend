import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <p>Ini Page Home</p>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Home;
