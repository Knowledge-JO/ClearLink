import recording from "../assets/recording.svg"
import calendar from "../assets/calendar.svg"
import security from "../assets/lock-unlocked.svg"
import videoRecorder from "../assets/video-recorder.svg"
import people from "../assets/people.png"
import handDrawnArrow from "../assets/hand-drawn-arrow.png"

const Features = () => {
  return (
    <div className="px-36 mt-28">
      <div>
        <div>
          <p className="text-blue-700 text-[13px] font-bold">
            The ClearLink Advantage
          </p>
          <h1 className="text-3xl font-bold">Why choose ClearLink?</h1>
          <p className="text-gray-500 w-[550px]">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="flex justify-between items-center mt-16 relative">
          <img
            src={handDrawnArrow}
            alt=""
            className="absolute right-32 bottom-72 w-[200px]"
          />
          <div className="grid grid-cols-2 gap-10 gap-x-10 w-[600px] h-[300px]">
            <Feature src={videoRecorder} title="Crystal-clear HD video">
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </Feature>
            <Feature src={recording} title="Noise-canceling audio">
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </Feature>
            <Feature src={calendar} title="Scheduling made easy">
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.
            </Feature>

            <Feature src={security} title="Bank-grade security">
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </Feature>
          </div>

          <img src={people} alt="" className="w-[350px] h-[310px]" />
        </div>
      </div>
    </div>
  )
}

export default Features

interface FeatureType {
  src: string
  title: string
  children: string
}

const Feature = ({ src, title, children }: FeatureType) => {
  return (
    <div>
      <img
        src={src}
        className="bg-gray-100 w-8 px-2 py-2 rounded-full"
        alt=""
      />
      <h3 className="font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500 w-[300px]">{children}</p>
    </div>
  )
}
