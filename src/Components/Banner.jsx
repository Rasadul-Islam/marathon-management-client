import React, { useState, useEffect } from "react";

const Banner = () => {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(1);

  // Total number of slides
  const totalSlides = 4;

  // Scroll function to navigate to the next slide
  const scrollToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === totalSlides ? 1 : prevSlide + 1
      );
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div>
      <div className="carousel w-full h-80 md:h-96 lg:h-[450px] rounded-b-xl relative">
        {/* Slide 1 */}
        <div
          id="slide1"
          className={`carousel-item relative w-full ${
            currentSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/P55qP1g/6-world-marathon.png"
            alt="Community engagement"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute text-white right-0 left-0 flex flex-col justify-center gap-5 top-0 bottom-0 w-3/5 mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold uppercase">
              Embrace the adventure of running with us
            </h1>
            <p className="text-base md:text-sm lg:text-2xl">
              Join us to explore the thrill of running, push boundaries, connect
              with others, and embrace every stride of the journey.
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          id="slide2"
          className={`carousel-item relative w-full ${
            currentSlide === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/RQcBMLL/what-happens-to-your-body-when-you-run-a-marathon-1440x810.jpg"
            alt="marathon picture"
            className="w-full h-full object-cover"
          />
          <div className="absolute text-white md:text-black left-20 md:left-16 lg:left-40 flex flex-col justify-center gap-5 md:gap-10 top-0 bottom-0">
            <h1 className="text-2xl md:text-4xl font-bold uppercase w-72">
              Take the first step today
            </h1>
            <p className="text-base md:text-sm lg:text-2xl w-2/5">
              Start your journey now, embrace new challenges, and unlock endless
              possibilities by taking the first step toward your goals.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          id="slide3"
          className={`carousel-item relative w-full ${
            currentSlide === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/6smgPH2/marathon-jpg.webp"
            alt="Marathon Picture"
            className="w-full h-full object-cover"
          />
          <div className="absolute text-white right-0 left-0 flex flex-col justify-center gap-5 top-0 bottom-0 w-3/5 mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold uppercase shadow-xl shadow-black bg-opacity-30 bg-black rounded-xl p-2">
              Challenge yourself, run with us.
            </h1>
            <p className="text-base md:text-sm lg:text-2xl">
              Push your limits and embrace the challenge. Join us for the
              ultimate running experience!
            </p>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          id="slide4"
          className={`carousel-item relative w-full ${
            currentSlide === 4 ? "block" : "hidden"
          }`}
        >
          <img
            src="https://i.ibb.co.com/qggtjL9/slide1-1920x565-2.jpg"
            alt="marathon picture"
            className="w-full h-full object-cover"
          />
          <div className="absolute text-white right-0 left-0 flex flex-col justify-center gap-5 top-0 bottom-0 w-3/5 mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold uppercase shadow-xl shadow-black bg-opacity-30 bg-black rounded-xl p-2">
              Explore upcoming marathons
            </h1>
            <p className="text-base md:text-sm lg:text-2xl">
              Discover upcoming marathons and join exciting running events near
              you. Don’t miss out!
            </p>
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {[1, 2, 3, 4].map((slide) => (
            <button
              key={slide}
              className={`w-4 h-4 rounded-full ${
                currentSlide === slide ? "bg-lime-300" : "bg-gray-500"
              }`}
              onClick={() => scrollToSlide(slide)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
