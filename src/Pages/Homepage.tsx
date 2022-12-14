import Categories from "../Components/Categories";
import News from "../Components/News";
import Showreel from "../Components/Showreel";

export default function Homepage() {
  return (
    <>
      <div className="home-title">      
        <div className="name">DMITRIY BARER</div>
        <div className="type">FPV PILOT</div>
      </div>
      <Showreel />
      <Categories />
      <News />
    </>
  );
}
