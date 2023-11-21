import Link from "next/link"
import { BookmarkIcon } from "lucide-react"
import { CustomButton } from "@/components"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10" >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4" >
        <Link
          href="/"
          className="flex justify-center items-center"
        >
          <BookmarkIcon size={18} color="#2B59FF" />
        </Link>
        <CustomButton
          title="Follow"
          btnType="button"
          containerStyles="text-white bg-primary-blue min-w-[130px] rounded-full"
        />
      </nav>
    </header>
  )
}

export default Navbar