import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tile from "../Assets/img/category-tile.png";
import "./video.css";

interface IVideo {
    id: number;
    title: string;
    description: string;
    previewImage: string;
    videoImages?: string[];
    video?: string;
    category: string;
}
const videos = [
    {
        id: 1,
        title: "title1",
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam magni necessitatibus. Temporibus inventore alias unde, ex incidunt iste fugiat blanditiis amet quam doloribus debitis et molestias, animi obcaecati voluptate magni modi nobis? Soluta maxime possimus recusandae consequuntur aut ipsam neque doloremque quos mollitia fugit reiciendis voluptas laudantium, rerum, excepturi asperiores nemo repellat reprehenderit placeat, repudiandae totam! Illum ipsam assumenda possimus tenetur cupiditate, quaerat sapiente amet dicta totam iusto. Repudiandae veritatis provident, perferendis iure excepturi sit dicta reiciendis porro veniam eaque accusantium esse nobis quam officiis labore necessitatibus quae sapiente aliquid dolorem corporis. Itaque, laboriosam! Vitae natus praesentium quas deserunt.',
        previewImage: tile,
        videoImages: [tile, tile, tile],
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
        video: "https://www.youtube.com/embed/bIIM0AvWqVc",
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
        videoImages: [tile, tile, tile],
        video: "",
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

export function Category() {
    const navigate = useNavigate();
    const [categoryVideos, setCategoryVideos] = useState<IVideo[]>([]);
    const [showDescription, setShowDescription] = useState(new Set<Number>())
    const { categoryPage } = useParams()

    useEffect(() => {
        setCategoryVideos(
            videos.filter((video) => video.category.toLowerCase() === categoryPage)
        )
    }, [categoryPage]);
    const handelReadMore = (id:Number) => {
        let tempDescriptionList = new Set(showDescription)
        tempDescriptionList.has(id) ? tempDescriptionList.delete(id) : tempDescriptionList.add(id)
        setShowDescription(tempDescriptionList)
    }

    return (
        <div className="videos-page">
            {categoryVideos.length > 0 ? <div className="page-title">
                {categoryPage}
                <span>
                    <button className="videos-btn" onClick={() => navigate("/video")}>
                        SEE ALL CATEGORIES
                    </button>
                </span>
            </div> :
                <div className="page-title">
                    Loading...
                </div>
            }

            {categoryVideos.map((video) => <div className="category-video" style={{ margin: "2rem 0" }} key={video.id}>
                <div className="title">{video.title}</div>
                {video.video ? <iframe
                    className="video-content-frame"
                    src={video.video}
                    title={video.title}
                    frameBorder='0'
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                /> : video.videoImages?.map(image => <img style={{ padding: "0 1rem" }} src={image} alt={video.title} />)}

                <div className="readmore-btn" onClick={()=>handelReadMore(video.id)}>READ MORE ABOUT ADVENTURE</div>
                {showDescription.has(video.id) ? <div className="readmore-content">{video.description}</div> : null}
            </div>
            )}
        </div>
    );
}
