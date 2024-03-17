
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Recipe from './Components/Recipe/Recipe'

function App() {
  

  return (
    <>      
    <main className='w-[90%] m-auto'>
      <Header></Header>
      <Banner></Banner>

      <div className="text-center mt-40 mb-5 space-x-5 space-y-5">           
        <h1 className='font-bold text-3xl'>Our Recipe</h1>
        <p className='text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id iste repudiandae recusandae beatae aspernatur libero, sapiente optio quod.</p>  
      </div>

      <Recipe></Recipe>      
    </main>    
    <Footer></Footer>
    </>
  )
}

export default App
