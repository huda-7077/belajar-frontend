import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/");
  };
  return (
    <div>
      <p>Ini Page Profile</p>
      <button onClick={onClickHome}>Home</button>
      <button onClick={() => navigate("/contact")}>Contact</button>
    </div>
  );
};

export default Profile;
