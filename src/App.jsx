import Banner from './Componets/Banner/Banner'
import Banner2 from './Componets/Banner/Banner2'
import Footer from './Componets/Footer/Footer'
import Hero from './Componets/Hero/Hero'
import Service from './Componets/Service/Service'
import Subscribe from './Componets/Subscribe/Subscribe'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white text-dark'>
      <Hero/>
      <Service/>
      <Banner/>
      <Subscribe/>
      <Banner2/>
      <Footer/>
    </div>
  )
}

export default App
