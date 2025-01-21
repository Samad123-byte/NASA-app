import {useEffect, useState} from "react";
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import SideBar from "./Components/SideBar"


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModel, setShowMdel] = useState(false)
  function handleDisplayModel() {
    setShowMdel(!showModel)
  }

  useEffect(() => {
    async function fetchAPIData () {
      const NASA_Key =import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_Key}`


      try {
       const res = await fetch(url)
       const apiData = await res.json()
       setData(apiData)
       console.log('DATA/n', apiData)
      }
      catch (err) {
       console.log(err.message)
      }
    }
    fetchAPIData()
  },[])

  return (
    <>
     {data ? (<Main data={data} />) : (
      <div className="loadingState">
         <i className="fa-solid fa-gear"></i>
      </div>
     )}
     {showModel && (<SideBar data={data} handleDisplayModel={handleDisplayModel}/>)}
     {data && (<Footer data={data} handleDisplayModel={handleDisplayModel}/>)}
    </>
  )
}

export default App
