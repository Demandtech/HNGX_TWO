import { ReactComponent as ChevronRight } from '../assets/svgs/chevron-right.svg'
import MovieCard from './MovieCard'

const FeatureMovies = () => {
  return (
    <section className='px-[15px] md:px-[2rem] lg:px-[80px] lg:py-[50px] py-[30px]'>
      <div className='flex pb-10 items-center justify-between'>
        <h2 className='text-[1.3rem] lg:text-[2rem] font-bold'>
          Featured Movie
        </h2>
        <div className='flex items-center gap-1 font-semibold text-[#BE123C]'>
          <span className='text-[14px] lg:text-[18px]'>See More</span>
          <ChevronRight />
        </div>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-[4rem] 2xl:grid-cols-5'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return <MovieCard key={item} />
        })}
      </div>
    </section>
  )
}

export default FeatureMovies
