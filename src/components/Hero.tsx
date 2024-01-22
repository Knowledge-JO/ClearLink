import firstFrame from "../assets/Frame-1.png"
import ai from "../assets/ai.svg"
import avatarGroup from "../assets/Avatar-group.png"
import ratings from "../assets/ratings.png"
import Navbar from "./Navbar"

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="px-36 mt-20">
        <div className="bg-[url('/src/assets/Background-pattern.png')] bg-no-repeat bg-center bg-cover flex gap-20 justify-between">
          <div className="pt-3">
            <h1 className="text-5xl font-bold text-gray-800">
              Uniting the world,
              <br /> one video call at a time
            </h1>
            <p className="text-gray-500 w-[430px] mt-5">
              Experience the future of communication with ClearLink - where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>

            <div className="flex gap-3 items-center mt-10">
              <button className="bg-blue-700 font-bold text-white rounded-full px-3 h-9 text-sm">
                Start your free trial
              </button>
              <div className="relative w-fit ">
                <img src={ai} alt="" className="absolute" />
                <button className="text-blue-700 px-7">
                  Discover AI assistant
                </button>
              </div>
            </div>
            <div className="flex mt-10 gap-2">
              <img src={avatarGroup} alt="" className="w-[120px]" />
              <div>
                <img src={ratings} alt="" className="w-24" />
                <p className="text-gray-500 text-[11px]">from 3,000+ reviews</p>
              </div>
            </div>
          </div>

          <img
            src={firstFrame}
            alt=""
            className="w-[530px] h-[400px] mr-[-35px]"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
