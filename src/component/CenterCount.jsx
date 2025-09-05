import React from 'react'

const CenterCount = (props) => {
  return (
<>
<div className='h-[100px] w-[400px] bg-amber-50 rounded-2xl flex justify-center items-center'>

  <h1 className='text-3xl font-medium text-[#02282aa2] uppercase tracking-widest'>Count Value : {props.value}</h1>
</div>


</>
  )
}

export default CenterCount