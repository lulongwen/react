import React, { useState } from 'react'

// useState 按照顺序和对应的次数调用
function App (props) {
  // const defaultCount = props.defaultCount || 0
  const [count, setCount] = useState(() => {
    console.log('initial count')
    return props.defaultCount || 0
  })
  
  return (
    <button
      type='button'
      onClick={() => {setCount(count++)}}
    >click 【{count}】</button>
  )
}

export default App

