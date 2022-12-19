import { useNavigate } from "react-router-dom";

export default function VideoModal(params: any) {
  const { id, title, description, video, category } = params.video;

  const navigate = useNavigate();

  return (
    <>
      <div className="video-modal-overlay" onClick={params.close}></div>
      <div className="video-modal">
        <div className="modal-close" onClick={params.close}>
          &times;
        </div>
        <div className="video-modal-content">
          <div className="video-content-title">{category}</div>
          <iframe
            className="video-content-frame"
            src={video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="video-modal-description">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className="modal-buttons">
          <button className="videos-btn" onClick={() => navigate("/video")}>
            SEE CATEGORIES
          </button>
          <button className="videos-btn" onClick={() => navigate("/video/all")}>
            SEE ALL VIDEOS
          </button>
        </div>
      </div>
    </>
  );
}
