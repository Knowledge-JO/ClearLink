import shopify from "../assets/Shopify.png"
import coinbase from "../assets/Coinbase.png"
import dropbox from "../assets/Dropbox.png"
import intercom from "../assets/Intercom.png"
import marvel from "../assets/Marvel.png"
import automattic from "../assets/Automattic.png"

const Supporters = () => {
  return (
    <div className="mt-20 px-36">
      <div className="text-center">
        <p className="text-gray-500 font-bold">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>

        <div className="flex gap-10 justify-between mt-7">
          <img src={shopify} alt="" className="w-40 h-8" />
          <img src={coinbase} alt="" className="w-44 h-8 " />
          <img src={dropbox} alt="" className="w-32 h-8 " />
          <img src={intercom} alt="" className="w-32 h-8 " />
          <img src={marvel} alt="" className="w-32 h-8" />
          <img src={automattic} alt="" className="w-32 h-8" />
        </div>
      </div>
    </div>
  )
}

export default Supporters
