import { FC } from 'react'

interface HeaderAbdullahProps {
  type : boolean
}

const Header: FC<HeaderAbdullahProps> = ({type}) => {
  return <div className='w-full h-[70px] fixed top-0 left-0 right-0 bg-black '>
    <div className='container h-full flex items-center'>

    </div>
  </div>
}

export default Header