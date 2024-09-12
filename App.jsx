
import { useState } from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard'
import CenterCard from './Centercard'
function App() {

  return (
    
      <div className='row px-5 py-5 bg-primary'>
      <LeftCard/>
      <CenterCard/>
      <RightCard/>
    </div>
    
  )
}

export default App