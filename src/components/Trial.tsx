import check from "../assets/Check-icon.svg"
import mockup from "../assets/mockup.png"

const Trial = () => {
  return (
    <div className="pl-36 mt-36">
      <div className="flex justify-between">
        <div>
          <h1 className="text-gray-900 font-bold w-[400px] text-3xl">
            Ready to clear the path to perfect communication?
          </h1>
          <div className="mt-7">
            <TrialFeature feature="30 days free trial" />
            <TrialFeature feature="Cancel at any time" />
            <TrialFeature feature="Access to all features" />
            <TrialFeature feature="Personalized onboarding" />
          </div>
          <div className="flex gap-4 mt-7">
            <button className="border-[1px] border-gray-400 font-bold rounded-full px-3 h-9 text-sm">
              Talk to sales
            </button>
            <button className="bg-blue-700 font-bold text-white rounded-full px-3 h-9 text-sm">
              Start your free trial
            </button>
          </div>
        </div>
        <img src={mockup} className="w-[700px]" alt="" />
      </div>
    </div>
  )
}

export default Trial

const TrialFeature = ({ feature }: { feature: string }) => {
  return (
    <div className="flex mb-3 gap-2">
      <img src={check} className="w-5" alt="" />
      <p className="text-gray-500">{feature}</p>
    </div>
  )
}
