import FeatureMovies from '../components/FeatureMovies'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeHero from '../components/HomeHero'

const Home = () => {
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
