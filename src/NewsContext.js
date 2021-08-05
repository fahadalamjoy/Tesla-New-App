import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
  const [data, setData] = useState()
  const apiKey = 'd60884e841924f61be89c9a28c2521ad'

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&form=2020-07-19&sortby=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  )
}
