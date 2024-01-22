import logo from "../assets/logo.png"
import playstore from "../assets/playstore.svg"
import appstore from "../assets/appstore.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import youtube from "../assets/youtube.svg"

const Footer = () => {
  return (
    <>
      <div className="px-36 mt-20">
        <div className="flex justify-between">
          <div>
            <div className="flex gap-2">
              <img src={logo} alt="" className="w-[25.384px] h-[28px]" />
              <p className="text-lg font-bold text-gray-900">
                ClearLink<span className="text-blue-400">.</span>
              </p>
            </div>
            <p className="text-gray-500 w-[330px] mt-5">
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>
          <table className="w-1/2 h-[190px] font-bold">
            <thead className="text-gray-500 text-left">
              <tr>
                <th>Product</th>
                <th>Company</th>
                <th>Resources</th>
                <th>Legal</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr>
                <td>Overview</td>
                <td>Features</td>
                <td>Solutions</td>
                <td>Tutorials</td>
              </tr>
              <tr>
                <td>About us</td>
                <td>Careers</td>
                <td>Press</td>
                <td>News</td>
              </tr>
              <tr>
                <td>Blog</td>
                <td>Events</td>
                <td>Help centre</td>
                <td>Tutorials</td>
              </tr>
              <tr>
                <td>Terms</td>
                <td>Privacy</td>
                <td>Cookies</td>
                <td>Licenses</td>
              </tr>
              <tr>
                <td>Pricing</td>
                <td>Contact</td>
                <td>Support</td>
                <td>Contact</td>
              </tr>
            </tbody>
          </table>

          <div>
            <p className="text-blue-700 font-bold">Get the app</p>
            <img src={playstore} className="mt-3" alt="" />
            <img src={appstore} className="mt-3" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 px-36 py-8 mt-10">
        <div className="flex justify-between">
          <p className="text-gray-500">
            &copy; ClearLink. All rights reserved.
          </p>
          <div className="flex gap-4">
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={github} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
