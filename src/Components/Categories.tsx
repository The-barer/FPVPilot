import tile from "../Assets/img/category-tile.png";

export default function Categories() {
  return (
    <div className="categories-element">
      <div className="categories-title">Categories</div>
      <div className="categories-grid">
        <img className="grid-img" src={tile} alt="1" />
        <img className="grid-img" src={tile} alt="1" />
        <img className="grid-img" src={tile} alt="1" />
        <img className="grid-img" src={tile} alt="1" />
        <img className="grid-img" src={tile} alt="1" />
        <img className="grid-img" src={tile} alt="1" />
        <img className="grid-img" src={tile} alt="1" />
      </div>
    </div>
  );
}
