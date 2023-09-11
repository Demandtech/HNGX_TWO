import bg from '../assets/images/Poster.png'
import imdb from '../assets/images/imdb.png'
import rotten from '../assets/images/rotten.png'

const HomeHero = () => {

  return (
    <div
      style={{
        background: `url(${bg}) no-repeat center`,
        backgroundSize: 'cover',
      }}
      className='lg:min-h-screen 2xl:min-h-[800px] px-[15px] md:px-[2rem] lg:px-[100px] py-[9rem] lg:py-0 flex items-center'
    >
      {/* <Header /> */}
      <div className='flex h-full justify-self-center lg:pt-0'>
        <div className='lg:max-w-[400px] w-full text-white '>
          <h1 className='text-[28px] lg:text-[48px] font-[700] lg:leading-[56px] w-[90%]'>
            John Wick 3 : Parabellum
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
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
