import React from 'react'

const Button = ({label, onclick,color,value}) => {




  return (
<>
<button className={ `px-5 py-3  text-2xl font-bold uppercase text-blue-50 tracking-widest rounded ${color}`} onClick= {onclick}> {label} </button>
</>
  )
}

export default Button