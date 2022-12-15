import Categories from "../Components/Categories";
import News from "../Components/News";
import Showreel from "../Components/Showreel";
import logo from "../Assets/img/drone_logo.png";

export default function Homepage() {
  return (
    <>
      <div className="home-title">
        <img className="drone-logo" src={logo} alt="drone logo" />
        <div className="name">DMITRIY BARER</div>
        <div className="type">FPV PILOT</div>
      </div>
      <Showreel />
      <Categories />
      <News />
    </>
  );
}
