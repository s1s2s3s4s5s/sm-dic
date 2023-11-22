import { Quote } from "lucide-react"
import { QuoteProps } from "@/types"

interface Quote {
  quote: QuoteProps[]
}

const Card = ({ quote }: QuoteProps) => {
  return (
    <>
      <h3 className="text-black font-medium" > {quote.quote} </h3>
      <div className="flex flex-col justify-center items-center " >
        <p className="text-gray-700 font-light" >"{quote.author}"</p>
        <p className="text-gray-700 font-light">"{quote.category}"</p>
    </div>
  </>
  )
}


const QuoteCard = ({ quote }: Quote) => {
  return (
    <div className="relative flex flex-col" >
      <div>
        <Quote size={26} className="flex object-contain top-0 left-0 absolute"  />
      </div>
      <div className="flex flex-col justify-center items-center rounded-xl bg-gray-100 w-full" >
        {quote?.map((item) => (
          <Card quote={item} />
        ))}
      </div>
      <div>
        <Quote size={26} className="flex object-contain bottom-0 right-0 absolute" />
      </div>
    </div>
  )
}

export default QuoteCard