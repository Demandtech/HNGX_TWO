import { useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import { useSelector } from 'react-redux'

Oval
const Loader = () => {
 const { isLoading } = useSelector((store) => store.movie)

 useEffect(() => {
  
 }, [isLoading])
 
  if (isLoading) {
    return (
      <div className='min-h-screen grid place-content-center absolute top-0 left-0 w-full bg-[#00000050]'>
        <Oval
          height={80}
          width={80}
          color='#BE123C'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor='#BE123C'
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    )
  }
}

export default Loader
