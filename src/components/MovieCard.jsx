import { ReactComponent as Heart } from '../assets/svgs/heart.svg'
import imdb from '../assets/images/imdb.png'
import rotten from '../assets/images/rotten.png'
import { Link } from 'react-router-dom'

const MovieCard = ({ poster_path, original_title, release_date, id }) => {
  console.log(id, release_date)
  return (
    <article data-testid='movie-card '>
      <div className='relative'>
        <img
          data-testid='movie-poster'
          className='w-full'
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt=''
        />
        <div className='flex items-center justify-between absolute top-[15px] right-[15px]  '>
          <div></div>
          <div className='bg-[#F3F4F6] opacity-50 rounded-full w-[32px] h-[32px] grid place-content-center'>
            <Heart />
          </div>
        </div>
      </div>
      <div className='pt-[1rem]'>
        <p
          data-testid='movie-release-date'
          className='text-[#9ca3af] text-[12px] font-[700] leading-normal'
        >
          {release_date}
        </p>
        <Link
          to={`movie/${id}`}
          data-testid='movie-title'
          className='text-xl font-[800] text-[#111827] pt-3'
        >
          {original_title}
        </Link>
        <div className='flex items-center justify-between py-3'>
          <div className='flex items-center gap-2'>
            <img src={imdb} alt=' imdb rating' className='inline' />{' '}
            <span className='text-sm text-gray-300'> 860/100</span>
          </div>
          <div className='flex items-center gap-2'>
            <img src={rotten} alt='rotten Tomatoes rating' className='inline' />
            <span className='text-sm text-gray-300'>97%</span>
          </div>
        </div>
        <p className='text-[#9ca3af] text-sm'>Action, Adventure, Drama</p>
      </div>
    </article>
  )
}

export default MovieCard
