import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { decrease, increase, reset} from '../redux/Slice'

function CounterMain() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()

  return (
    <div className='w-100 justify-content-center align-items-center d-flex' style={{height:'100vh'}}>
        <div className='w-50 border border-light p-4'>
            <h1 className='text-light text-center'>COUNTER</h1>
            <h2 className='text-warning text-center'>{count}</h2>
            <div className='mt=3 d-flex justify-content-between'>
              <button className='btn btn-success' onClick={()=>{dispatch(increase())}}>Increase</button>
              <button className='btn btn-info' onClick={()=>{dispatch(reset())}}>Reset</button>
              <button className='btn btn-warning' onClick={()=>{dispatch(decrease())}}>Decrease</button>

            </div>

        </div>
    </div>
  )
}

export default CounterMain