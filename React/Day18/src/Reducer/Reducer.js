import React, { useState } from 'react'

const Reducer = () => {
    const [Count, setCount] = useState(0)
  return (
    <div>
        <h3>Value of Count:{Count}</h3>
        <button>Inc</button>
        <button>Dec</button>
        <button>Reset</button>
    </div>
  )
}

export default Reducer