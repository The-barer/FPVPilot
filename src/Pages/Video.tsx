import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import tile from "../Assets/img/category-tile.png";
import VideoModal from "../Components/VideoModal";
import "./video.css";

// interface IVideo {
//   id: number;
//   title: string;
//   description: string;
//   previewImage: string;
//   video: string;
//   category: string;
// }

const videos = [
  {
    id: 1,
    title: "title1",
    description: "str",
    previewImage: tile,
    video: "https://www.youtube.com/embed/bIIM0AvWqVc",
    category: "NATURE",
  },
  {
    id: 2,
    title: "title2",
    description: "str",
    previewImage: tile,
    video: "https://www.youtube.com/embed/bIIM0AvWqVc",
    category: "SPORTS",
  },
  {
    id: 3,
    title: "title3",
    description: "str",
    previewImage: tile,
    video: "urhttps://www.youtube.com/embed/bIIM0AvWqVcl",
    category: "INDOOR",
  },
  {
    id: 4,
    title: "title4",
    description: "str",
    previewImage: tile,
    video: "https://www.youtube.com/embed/bIIM0AvWqVc",
    category: "SPORTS",
  },
  {
    id: 5,
    title: "title5",
    description: "str",
    previewImage: tile,
    video: "https://www.youtube.com/embed/bIIM0AvWqVc",
    category: "NATURE",
  },
  {
    id: 6,
    title: "title6",
    description: "str",
    previewImage: tile,
    video: "https://www.youtube.com/embed/bIIM0AvWqVc",
    category: "SPORTS",
  },
  {
    id: 7,
    title: "title7",
    description: "str",
    previewImage: tile,
    video: "https://www.youtube.com/embed/bIIM0AvWqVc",
    category: "NATURE",
  },
  {
    id: 8,
    title: "title8",
    description: "str",
    previewImage: tile,
    video: "https://www.youtube.com/embed/bIIM0AvWqVc",
    category: "NATURE",
  },
];

export function Video() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [videoData, setVideoData] = useState({});
  useEffect(() => {
    setCategories(
      Array.from(
        videos.reduce(
          (acc, video) => acc.add(video.category),
          new Set<string>()
        )
      )
    );
  }, []);

  function handelShowModal(params: any) {
    setShowModal(true);
    setVideoData(params);
  }
  function handelCloseModal() {
    setShowModal(false);
  }
  return (
    <div className="videos-page">
      <div className="page-title">
        video categories
        <span>
          <button className="videos-btn" onClick={() => navigate("all")}>
            SEE ALL VIDEOS
          </button>
        </span>
      </div>

      <div className="videos-categories">
        {categories.map((category) => (
          <div className="video-category" key={category}>
            <div className="category-title">{category}</div>
            <div className="category-videos">
              {videos.map((video) => {
                if (video.category.toLowerCase() === category.toLowerCase()) {
                  return (
                    <div className="video-element" key={video.id}>
                      <div className="video-title">{video.title}</div>
                      <div
                        className="video-img"
                        onClick={() => handelShowModal(video)}
                      >
                        <img src={video.previewImage} alt={video.title} />
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        ))}
      </div>
      {showModal && <VideoModal video={videoData} close={handelCloseModal} />}
    </div>
  );
}
export function VideoAll() {
  const navigate = useNavigate();
  return (
    <div className="videos-page">
      <div className="page-title">
        ALL VIDEOS
        <span>
          <button className="videos-btn" onClick={() => navigate("/video")}>
            SEE CATEGORIES
          </button>
        </span>
      </div>

      <div className="category-videos">
        {videos.map((video) => (
          <div className="video-element" key={video.id}>
            <div className="video-title">{video.title}</div>
            <div className="video-img">
              <img src={video.previewImage} alt={video.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
