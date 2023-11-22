import { Quote } from "lucide-react"
import { QuoteProps } from "@/types"

interface Quote {
  quote: Promise<any>
}


const QuoteCard = ({ quote }: Quote) => {
  return (
    <div className="relative flex flex-col" >
      <div>
        <Quote size={26} className="flex object-contain top-0 left-0 absolute"  />
      </div>
      <div className="flex flex-col justify-center items-center rounded-xl bg-gray-100 w-full" >
        {quote?.map((item) => (
          <>
            <h3 className="text-black font-medium" > {item.quote} </h3>
            <div className="flex flex-col justify-center items-center " >
              <p className="text-gray-700 font-light" >"{item.author}"</p>
              <p className="text-gray-700 font-light">"{item.category}"</p>
            </div>
          </>
        ))}
      </div>
      <div>
        <Quote size={26} className="flex object-contain bottom-0 right-0 absolute" />
      </div>
    </div>
  )
}

export default QuoteCard