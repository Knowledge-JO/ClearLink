import Faqs from "./Faqs"
import Features from "./Features"
import Footer from "./Footer"
import Hero from "./Hero"
import Reviews from "./Reviews"
import Supporters from "./Supporters"
import Trial from "./Trial"
function App() {
  return (
    <>
      <div className="xl:hidden min-h-screen flex justify-center items-center">
        <div className="bg-[url('/src/assets/Background-pattern.png')] bg-no-repeat bg-center bg-cover">
          <img
            src="/mobile.webp"
            alt=""
            className="shadow-xl rounded-xl mb-3"
          />
          <p className="text-center text-gray-700 font-bold">
            Please visit us on a desktop or laptop
          </p>
        </div>
      </div>
      <div className="hidden xl:block">
        <Hero />
        <Supporters />
        <Features />
        <Reviews />
        <Faqs />
        <Trial />
        <Footer />
      </div>
    </>
  )
}

export default App
