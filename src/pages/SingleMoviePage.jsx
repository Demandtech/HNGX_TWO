import star from '../assets/images/star.png'
import expand from '../assets/images/expand-arrow.png'
import rectangle from '../assets/images/rectangle.png'
import list from '../assets/images/list.png'
import twotickets from '../assets/images/twotickets.png'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getGenres, getTime, getUtcData } from '../utils'
export const apiKey = import.meta.env.VITE_APP_API_KEY
export const url = import.meta.env.VITE_APP_API_URL

const SingleMoviePage = () => {
  const { id } = useParams()
  const [runtime, setRuntime] = useState()
  const [release_date, setReleaseDate] = useState('')
  const [genres, setGenres] = useState([])

  const { isLoading, data } = useQuery({
    queryKey: ['movies'],
    queryFn: () =>
      axios.get(`${url}${id}`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }),
  })

  useEffect(() => {
    setReleaseDate(getUtcData(data?.data?.release_date))
    setGenres(getGenres(data?.data?.genres))
    setRuntime(getTime(data?.data?.runtime))
  }, [data])

  console.log(genres)

  return (
    <main className='grid lg:grid-cols-[200px,1fr] min-h-screen singlepage'>
      <div className='sticky top-0 lg:h-screen overflow-y-scroll left-0 border rounded-r-[50px] border-[#0000004d]  hidden lg:block lg:w-[200px] bg-white'>
        <Sidebar />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='p-5'>
          <img
            src={`https://image.tmdb.org/t/p/original${data?.data?.backdrop_path}`}
            alt=''
            className='mb-5 w-[100%] h-[350px] rounded-[20px] object-cover'
            style={{ objectPosition: 'centet top' }}
          />
          <div className='flex items-start flex-wrap'>
            <div className='text-[#404040] text-[1.2rem] mr-10 lg:w-1/2'>
              <span data-testid='movie-title'>{data?.data?.title}</span> •{' '}
              <span data-testid='movie-release-date'>{release_date}</span> •
              <span> PG-13 </span> •{' '}
              <span data-testid='movie-runtime'>{runtime}</span>
            </div>
            <div className='text-[#B91C1C]'>
              <span className='rounded-[15px]  flex gap-3'>
                {genres?.map((item) => {
                  return (
                    <span
                      className='text-sm rounded-2xl border px-2 border-[#F8E7EB]'
                      key={item}
                    >
                      {item}
                    </span>
                  )
                })}
              </span>
            </div>
            <div className='ml-auto flex items-center gap-2'>
              <img src={star} alt='star rating' width={20} height={20} />
              <p className='mt-1'>
                {' '}
                <span className='text-[#E8E8E8]'> 8.5 </span>|{' '}
                <span className='text-[#666666]'>350k</span>
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row mt-5'>
            <div className='lg:w-[70%] pb-5 lg:pb-0'>
              <p
                className='text-[#333] lg:text-[18px] mb-5 lg:pr-5'
                data-testid='movie-overview '
              >
                {data?.data?.overview}
              </p>
              <div className='flex flex-col gap-5 mb-5'>
                <p>
                  <strong>Director: </strong>{' '}
                  <span className='text-[#be123c]'>Joseph Kosinski</span>
                </p>
                <p>
                  <strong>Writers: </strong>{' '}
                  <span className='text-[#be123c]'>
                    {['Jim Cash', 'Jack Epps Jr', 'Peter Craig'].join(', ')}
                  </span>
                </p>
                <p>
                  <strong>Stars: </strong>{' '}
                  <span className='text-[#be123c]'>
                    {['Tom Cruise', 'Jennifer Connelly', 'Miles Teller'].join(
                      ', '
                    )}
                  </span>
                </p>
              </div>
              <div className=' flex items-center lg:h-12 flex-col lg:flex-row'>
                <div className='mb-4 lg:mb-0 px-5 h-12 lg:h-full rounded-md bg-[#be123c] text-white w-full md:max-w-[250px] text-center grid place-content-center'>
                  Top rated movie #65
                </div>
                <div className='h-12 -z-10 border-l-2 lg:border-l-none lg:-translate-x-8 w-full lg:h-full rounded-l-md lg:rounded-l-none rounded-r-md flex items-center  border-[#C7C7C7] border-r-2 border-t-2 border-b-2 pr-5'>
                  <span className='pl-12'>Awards 9 nominations</span>
                  <img className='ml-auto' src={expand} alt='expand ' />
                </div>
              </div>
            </div>
            <div className='lg:w-[30%] h-full flex flex-col-reverse lg:flex-col'>
              <div>
                <div className='mb-4'>
                  <button className='bg-[#be123c] text-white w-full rounded-md py-3 flex items-center justify-center gap-2'>
                    <img width='25px' height='25px' src={twotickets} alt='' />
                    <span>See Showtimes</span>
                  </button>
                </div>
                <div className=''>
                  <button className='border border-[#be123c] bg-[#be123c19] w-full rounded-md py-3 flex items-center justify-center gap-2'>
                    <img width='23px' src={list} alt='' />{' '}
                    <span>More watch options</span>
                  </button>
                </div>
              </div>
              <div className='mb-5 lg:mt-5 lg:mb-0'>
                <img src={rectangle} alt='More' width='100%' />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default SingleMoviePage
