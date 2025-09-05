import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CenterCount from './component/CenterCount'
import Increment from './component/Button'

function App() {

  let [current,change]= useState(0);

  function increase(){
      console.log(current)
    return change(current + 10);
  }
  function decrease(){

    return change(current - 10);
  }


  return (
<>
<div className='h-screen w-full bg-[#1C1A27] flex justify-center items-center flex-col gap-[2rem]'>

<CenterCount value = {current}/>
<div className='button flex gap-[2rem]' >

  <Increment value= {current} label ='Increase' onclick = {increase} color='bg-[#0056F4]' />
  <Increment value= {current} label ='Decrease' onclick = {decrease} color='bg-[#E71515]'/>

</div>




</div>
</>
  )
}

export default App
