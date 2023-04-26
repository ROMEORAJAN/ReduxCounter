
import React from "react";
import { useState } from "react";
import {  useDispatch,useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,counterSlice } from '../reducers/counter'

function Counts() {

  console.log(counterSlice)
  const counts = useSelector((state) => state.counterkali.value)

  const dispatch = useDispatch()
  
  

  const ingrement = () => {
    dispatch(increment())
  }
  
  const AmountAsync = () => {
    dispatch(incrementByAmount(10))
  }

  const degrement = () =>{
    dispatch(decrement())
  }
  console.log(counts)
  return (
    <>
    <h1>{counts}</h1>
    <button type="button" onClick={ingrement}>+</button>
    <button type="button" onClick={degrement}>-</button>
    <button type="button" onClick={AmountAsync}>Amount</button>
    </>
  )
}

export default Counts;
