import Categories from "../Components/Categories";
import News from "../Components/News";
import Showreel from "../Components/Showreel";

export default function Homepage() {
  return (
    <>
      <div className="home-title">
        <h3> DMITRIY BARER</h3>
        <h2> FPV PILOT </h2>
      </div>
      <Showreel />
      <Categories />
      <News />
    </>
  );
}
