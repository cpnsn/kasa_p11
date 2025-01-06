function Banner({ imgSrc, text }) {
  return (
    <header className="banner">
      <img src={imgSrc} alt="banner" />
      <div className="banner-text">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

export default Banner;
