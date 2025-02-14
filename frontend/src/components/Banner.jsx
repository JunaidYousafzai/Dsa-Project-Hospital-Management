import BannerImg from "../assets/doctor-pic .png"


const Banner = () => {
    return (
      <div className="container mx-auto px-4 py-10 text-black">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between ">
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Providing Quality Healthcare for a Brighter and Healthy Future
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-4 leading-relaxed">
              At our hospital, we are dedicated to providing exceptional medical care to our patients
              and their families. Our experienced team of medical professionals, cutting-edge technology, and
              compassionate approach make us a leader in the healthcare industry.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
                Appointments
              </button>
              <button className="bg-transparent border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg flex items-center gap-2 hover:bg-blue-600 hover:text-white transition">
                <i className="fa-solid fa-play"></i> Watch Video
              </button>
            </div>
          </div>
  

          <div className="relative md:w-1/3 w-full flex justify-center">
            <img
              src={BannerImg}
              alt="Doctor"
              className="w-2/3 "
            />

          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  