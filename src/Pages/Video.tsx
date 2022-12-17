import tile from "../Assets/img/category-tile.png";
import "./video.css";

export default function Video() {
  const categories = [
    {
      elements: [
        {
          image: tile,
          title: '#1'
        },
        {
          image: tile,
          title: '#2'
        },
        {
          image: tile,
          title: '#3'
        },
        {
          image: tile,
          title: '#4'
        }
      ],
      name: "NATURE",
    },
    {
      elements: [
        {
          image: tile,
          title: '#1'
        },
        {
          image: tile,
          title: '#2'
        },
        {
          image: tile,
          title: '#3'
        },
        {
          image: tile,
          title: '#4'
        }
      ],
      name: "SPORTS",
    },
  ];


  return (
    <div className="videos-page">
      <div className="page-title">video categories
      <span><button className="all-videos-btn">SEE ALL VIDEOS</button></span>
      </div>
      <div className="videos-categories">

        {categories.map((category) => (
          <div className="video-category">
            <div className="category-title">{category.name}</div>
            <div className="category-videos">
              {category.elements.map(el => (
                <div className="video-element">
                  <div className="video-title">{el.title}</div>
                  <div className="video-img">
                    <img src={el.image} alt={el.title} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>


    </div>
  );
}
