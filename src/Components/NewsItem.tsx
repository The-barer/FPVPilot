interface newsProps {
  title: string;
  description: string;
  image: string;
}

export default function NewsItem(props: newsProps) {
  const { title, description, image } = props;
  return (
    <div className="news-item">
      <div className="img">
        <img src={image} alt="News Tile" />
      </div>
      <div className="news-content">
        <div className="title">{title}</div>
        <div className="description">{description.slice(0, 1000) + "..."}</div>
      </div>
      <hr />
    </div>
  );
}
