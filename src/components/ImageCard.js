import "bulma/css/bulma.css";
import "./ImageCard.css";

function ImageCard({ image }) {
  let imageDescription = image.alt_description;

  if (imageDescription === null) {
    imageDescription = "Image has no description provided by external API";
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image.urls.small} alt={image.alt_description} />
        </figure>
      </div>

      <div className="card-content">
        <div className="content">{imageDescription}</div>
      </div>
    </div>
  );
}

export default ImageCard;
