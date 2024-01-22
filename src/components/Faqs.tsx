import minusCircle from "../assets/minus-circle.svg"
import plusCircle from "../assets/plus-circle.svg"

const Faqs = () => {
  return (
    <div className="px-36 mt-24">
      <div className="flex gap-40">
        <div>
          <p className="text-blue-700 font-bold">Support</p>
          <h1 className="text-3xl mt-4 font-bold">FAQs</h1>
          <p className="mt-4 text-gray-500 w-[350px]">
            Everything you need to know about the product and billing.
            Can&apos;t find the answer you&apos;re looking for? Please{" "}
            <span className="underline">chat to our friendly team</span>.
          </p>
        </div>

        {/* accordion */}
        <div className=" ">
          <Faq
            title="How many participants can join a ClearLink video conference?"
            isOpen={true}
          >
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </Faq>

          <Faq title="Can I use ClearLink on multiple devices?" isOpen={false}>
            {false}
          </Faq>
          <Faq
            title="Is ClearLink compatible with other video conferencing platforms?"
            isOpen={false}
          >
            {false}
          </Faq>
          <Faq
            title="How does ClearLink ensure the security of my video conferences?"
            isOpen={false}
          >
            {false}
          </Faq>
          <Faq
            title="Can I use ClearLink on multiple devices?Do I need to download any software to use ClearLink?"
            isOpen={false}
          >
            {false}
          </Faq>
          <Faq
            title="What kind of customer support does ClearLink provide?"
            isOpen={false}
          >
            {false}
          </Faq>
        </div>
      </div>
    </div>
  )
}

export default Faqs

interface FaqContent {
  title: string
  isOpen: boolean
  children: string | boolean
}

const Faq = ({ title, isOpen = false, children = false }: FaqContent) => {
  return (
    <div
      className={`${
        isOpen ? "bg-gray-100" : ""
      } px-5 py-5 border-t-[1px] border-gray-100`}
    >
      <div className="flex justify-between">
        <p className="font-bold">{title}</p>
        <img src={isOpen ? minusCircle : plusCircle} alt="" />
      </div>
      <p className="text-gray-500">{children == false ? "" : children}</p>
    </div>
  )
}
