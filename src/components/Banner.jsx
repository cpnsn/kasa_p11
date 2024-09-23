function Banner({ imgSrc, text }) {
  return (
    <div className="banner">
      <img src={imgSrc} alt="banner" />
      <div className="banner-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Banner;
