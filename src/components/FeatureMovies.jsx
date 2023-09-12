import axios from 'axios'
import { ReactComponent as ChevronRight } from '../assets/svgs/chevron-right.svg'
import MovieCard from './MovieCard'
import { useQuery } from '@tanstack/react-query'

const FeatureMovies = () => {
  const { isLoading, data} = useQuery({
    queryKey: ['movies'],
    queryFn: () =>
      axios.get(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjUyYmQ2NzQwMWFlMGM1YjJmNTk0OWJmYzI0ODMzOSIsInN1YiI6IjY0ZmUyYjRmZGI0ZWQ2MTAzM2EwZmU4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7qI-bGtAeIqsNZsprN9IQxdIFmcIYA11pIJMveKPKxA',
          },
        }
      ),
  })

  console.log(isLoading)
  console.log(data?.data?.results)

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
      {isLoading && <div>Loading...</div>}
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-[4rem] 2xl:grid-cols-5'>
        {data?.data?.results
          ?.map((item) => {
            return <MovieCard key={item.id} {...item} />
          })
          .slice(0, 12)}
      </div>
    </section>
  )
}

export default FeatureMovies
