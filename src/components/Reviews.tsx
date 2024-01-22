import shopify from "../assets//Shopify.svg"
import star from "../assets/Star-icon.svg"
import content from "../assets/Contents.png"
import sarahThompson from "../assets/SarahThompson.png"
import leftArrow from "../assets/arrow-left.svg"
import rightArrow from "../assets/arrow-right.svg"

const Reviews = () => {
  return (
    <div className="px-36 py-20 mt-28 bg-gray-100">
      <div className="flex justify-between gap-20 relative">
        <div>
          <img src={shopify} alt="" />
          <div className="flex mt-10">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p className="text-gray-900 w-[400px] font-bold text-3xl mt-10">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </p>

          <div className="flex mt-10 gap-4 items-center">
            <img src={sarahThompson} alt="" />
            <div>
              <p className="font-bold text-gray-900">Sarah Thompson</p>
              <p className="text-gray-500 text-sm">Project Manger, Shopify</p>
            </div>
          </div>
        </div>
        <img src={content} className="mr-[-35px] w-[570px]" alt="" />
        <div className="flex gap-7 absolute bottom-8 left-1/3">
          <button className="bg-white px-2 py-2 rounded-full">
            <img src={leftArrow} alt="" />
          </button>
          <button className="bg-white px-2 py-2 rounded-full">
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Reviews
