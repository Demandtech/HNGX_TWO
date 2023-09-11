import { ReactComponent as Youtube } from '../assets/svgs/youtube.svg'
import { ReactComponent as Facebook } from '../assets/svgs/facebook.svg'
import { ReactComponent as Twitter } from '../assets/svgs/twitter.svg'
import { ReactComponent as Instagram } from '../assets/svgs/instagram.svg'
const Footer = () => {
  return (
    <footer className='px-[1rem] py-10 flex flex-col items-center gap-5'>
      <div className='flex items-center gap-5'>
        <Facebook />
        <Instagram />
        <Twitter />
        <Youtube />
      </div>
      <div className='flex gap-5 flex-wrap justify-center'>
        <p>
          <strong>Conditions of Use</strong>
        </p>
        <p>
          <strong>Privacy & Policy</strong>
        </p>
        <p>
          <strong>Conditions of Use</strong>
        </p>
      </div>
      <div>
        <p className='text-[#6b7280] lg:text-[18px]'>
          © 2021 MovieBox by Adriana Eka Prayudha{' '}
        </p>
      </div>
    </footer>
  )
}

export default Footer
