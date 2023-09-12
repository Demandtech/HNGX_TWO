import { useEffect } from 'react'
import FeatureMovies from '../components/FeatureMovies'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'
import { useDispatch } from 'react-redux'
import { getMoviesList } from '../redux/movieThunk'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesList())
  }, [])

  return (
    <div className='max-w-[1440px]  mx-auto relative'>
      <Header />
      <HomeHero />
      <FeatureMovies />
      <Footer />
    </div>
  )
}

export default Home
