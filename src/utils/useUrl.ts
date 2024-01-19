import React from 'react'

interface useUrlInterface{
  data:any[],
  id:number
}

export const useUrl = ({data,id}:useUrlInterface) => {
  
  const getUrlNext = data.find((item) => item.id === id + 1)
  ?.name.toLowerCase()
  .replaceAll(" ", "-");
  

  const getUrlBack = 
    data
  .find((item) => item.id === id + -1)
  ?.name.toLowerCase()
  .replaceAll(" ", "-")
  
  return {getUrlBack,getUrlNext};
}