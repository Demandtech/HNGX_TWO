import { useSelector } from 'react-redux'
import imdb from '../assets/images/imdb.png'
import rotten from '../assets/images/rotten.png'
import { useEffect, useState } from 'react'

const HomeHero = () => {
  const { all_movies } = useSelector((store) => store.movie)
  const [bannerObj, setBannerObj] = useState(null)

  useEffect(() => {
    if (all_movies && all_movies?.length > 0) {
      const index = Math.floor(Math.random() * all_movies?.length)
      setBannerObj(all_movies[index])
    }
  }, [all_movies])

  return (
    <div
      style={{
        background: `url(https://image.tmdb.org/t/p/original${bannerObj?.backdrop_path}) no-repeat center`,
      }}
      className='lg:min-h-screen 2xl:min-h-[800px] px-[15px] md:px-[2rem] lg:px-[80px] py-[9rem] lg:py-0 flex items-center relative'
    >
      {/* <Header /> */}
      <div className='flex h-full justify-self-center lg:pt-0'>
        <div className='lg:max-w-[400px] w-full text-white '>
          <h1 className='text-[28px] lg:text-[48px] font-[700] lg:leading-[56px] w-[90%] z-50'>
            {bannerObj?.original_title}
          </h1>

          <div className='flex items-center gap-5 my-5'>
            <div className='flex items-center gap-2'>
              <img src={imdb} alt=' imdb rating' className='inline' />{' '}
              <span className='text-sm text-gray-300'> 860/100</span>
            </div>
            <div className='flex items-center gap-2'>
              <img
                src={rotten}
                alt='rotten Tomatoes rating'
                className='inline'
              />
              <span className='text-sm text-gray-300'>97%</span>
            </div>
          </div>
          <p className='font-[500] leading-[23px] w-[90%]'>
            {bannerObj?.overview}
          </p>
        </div>
      </div>
      <div className='absolute bg-[#00000011] top-0 left-0 w-full h-full'></div>
    </div>
  )
}

export default HomeHero
