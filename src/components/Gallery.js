const Gallery = ({ setshowImg, imgs }) => {
  return (
    <div className="gallery">
      {imgs.map((img) => (
        <div className="image-wrapper rounded">
          <img
            className="gallery-image shadow-1-strong rounded mb-4"
            src={img}
            onClick={() => {
              console.log(img,"img")
              setshowImg(img);
            }}
          />
          <div className="content-title">
            Click to preview
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
