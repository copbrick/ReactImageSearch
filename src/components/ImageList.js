import ImageCard from "./ImageCard";
import "./ImageList.css";
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageCard image={image} key={image.id} />;
  });

  return (
    <div className="container">
      <div className="image-list">{renderedImages}</div>
    </div>
  );
}

export default ImageList;
