import  { useState, useEffect } from 'react';
const slideStyles = {
    width: "100%",
    height: "500px",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
// eslint-disable-next-line react/prop-types
const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds (adjust as needed)

    return () => {
      clearInterval(slideInterval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <img src={slides[currentSlide].url} alt={slides[currentSlide].title} style={ slideStyles } />
      {
      /* Optionally display slide title or other content */}
      <p>{slides[currentSlide].title}</p>
    </div>
  );
};

export default ImageSlider;
