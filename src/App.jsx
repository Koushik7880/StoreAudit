import Footer from './Footer'
import Hader from './Hader'
import HeroSection from './HeroSection'
import TaskBoard from './task/TaskBoard'

function App() {
  return (
    <>
      <Hader />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>

      <Footer />
    </>
  )
}

export default App
