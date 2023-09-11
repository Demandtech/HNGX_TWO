import { useState } from 'react'
import logoImg from '../assets/images/logo.png'
import menuIcon from '../assets/svgs/menu-icon.svg'
import searchIcon from '../assets/svgs/search-icon.svg'

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const [query, setQuery] = useState('')

  return (
    <header className='flex items-center justify-between bg-transparent text-white py-5  absolute top-0 left-0 w-full px-[15px] md:px-[2rem] lg:px-[80px] '>
      <div className='flex items-center gap-2 '>
        <div className='w-[30px] lg:w-[50]'>
          <img src={logoImg} alt='logo Image' className='w-full' />
        </div>
        <h4 className='font-[700] lg:text-[24px] leading-[24px]'>MovieBox</h4>
      </div>
      <form
        className={`md:w-1/2  ${
          openSearch
            ? 'absolute transition-all duration-300 top-[70px] right-10 left-10 md:w-1/2 md:static '
            : 'static hidden md:block box-border'
        }`}
      >
        <div className='form-control relative'>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type='text'
            placeholder='What do you want to watch?'
            className='border border-white lg:w-full bg-transparent rounded-md p-2 placeholder:text-white overflow-hidden w-full  shadow-md shadow-[#000000]'
          />
          <div className='right-3 absolute top-1/2 -translate-y-1/2'>
            <button>
              <img src={searchIcon} alt='Search Icon' />
            </button>
          </div>
        </div>
      </form>
      <div className='gap-5 flex items-center'>
        <button className='font-[700] leading-[24px]'>Sign In</button>
        <button
          onClick={() => setOpenSearch(!openSearch)}
          className='bg-[#BE123C] w-[36px] h-[36px] rounded-full grid place-content-center'
        >
          <img src={menuIcon} alt='' />
        </button>
      </div>
    </header>
  )
}

export default Header
