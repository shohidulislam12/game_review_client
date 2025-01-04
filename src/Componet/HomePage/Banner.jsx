
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src='https://i.postimg.cc/3NYZqLGY/img3.jpg'
      className="w-full h-96" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://i.postimg.cc/d0YmqDCd/img7.jpg"
      className="w-full h-96" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://i.postimg.cc/520s1kRt/img1.jpg"
      className="w-full h-96" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="https://i.postimg.cc/XvfLF9WQ/img-6.jpg"
      className="w-full h-96" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;