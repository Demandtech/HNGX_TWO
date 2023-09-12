import { NavLink } from 'react-router-dom'
import logoImg from '../assets/images/logo.png'
import calenda from '../assets/images/calendar.png'
import tvshow from '../assets/images/tvshow.png'
import movieprojector from '../assets/images/movieprojector.png'
import home from '../assets/images/home.png'
import logouticon from '../assets/images/logout.png'

const Sidebar = () => {
  return (
    <aside className='pt-12 overflow-scroll'>
      <div className='flex items-center gap-2 justify-center'>
        <div className='w-[30px] lg:w-[50]'>
          <img src={logoImg} alt='logo Image' className='w-full' />
        </div>
        <h4 className='font-[700] lg:text-[24px] leading-[24px]'>MovieBox</h4>
      </div>
      <ul className='mt-10'>
        <li className=''>
          <NavLink
            className='text-[#666] pl-5 py-5 font-[600] flex items-center gap-3 '
            to='/'
          >
            <img src={home} alt='Home button image' />
            <span>Home</span>
          </NavLink>
        </li>
        <li className=' '>
          <span className='text-[#666] pl-5 py-5 font-[600] flex items-center gap-3 '>
            <img src={movieprojector} alt='Movies project image' />
            <span>Movies</span>
          </span>
        </li>
        <li className=''>
          <span className='text-[#666] pl-5 py-5 font-[600] flex items-center gap-3 '>
            <img src={tvshow} alt='Tv show ' />
            <span>TV Series</span>
          </span>
        </li>
        <li className=''>
          <span
            className='text-[#666] pl-5 py-5 font-[600] flex items-center gap-3 '
            to='/comingsoon'
          >
            <img src={calenda} alt='Calender image' />
            <span>Upcoming</span>
          </span>
        </li>
      </ul>
      <div className='mx-5 px-2 pt-10 pb-5 rounded-[20px] border-[#be123cb3] bg-[#f8e7eb66] border text-[15px]'>
        <p className='font-semibold'>Play movie quizes and earn free tickets</p>
        <p className='text-[12px] py-3'>50k people are playing now</p>
        <div className='text-center'>
          <button className='text-[12px] py-1 px-5 rounded-2xl bg-[#be123c33] text-[#BE123C] text-sm'>
            Start playing
          </button>
        </div>
      </div>

      <div className='mt-10 flex justify-center'>
        <button className='flex items-center gap-2'>
          <img src={logouticon} alt='Logout icon img' />
          <span className='text-[#666] font-[700]'>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
