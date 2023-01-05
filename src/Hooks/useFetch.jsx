import {useEffect, useRef, useState} from 'react'
import axios from 'axios';




const useFetch = () => {
  //Setting the states and return values
  const [dt, setDt] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = (null);


  // USE "useRef" TO WRAP AN OBJECT/ARRAY ARGUMENT 
  // WHICH IS A "useEffect" DEPENDENCY 
  // const option = useRef(_option).current;


  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIspending(true);

      try {
        const res = await fetch(url, { signal: controller.signal});
        if(!res.ok && res.status !== 200){
          throw new Error(res.statusText);
        }

        console.log(res);
        const json = await res.json();

        setIspending(false);
        setDt(json);
        setError(null);

      } catch (err) {
        if(err.name === "AbortError"){
          console.log("Fetch was aborted");
        }
          setIspending(false);
          setError("Couldn't fetch data");
          console.log(err);
      }
    }

    fetchData();
    // <---- Fetch using axios -->
    //   setIspending(true);
    //  axios(
    //   {
    //     method: method,
    //     url: url
    //   }
    //  )
    //  .then((res) => {
    //   setIspending(false)
    //   setDt(res.data);
    //   setError(null);
    // })
    //  .catch(err => {
    //   setError(err);
    //   setIspending(false);
    // })

    //  CLEANUP FUNCTION <--- INCASE THE COMPONENT USING THESE UMNOUNT THE useEffect ---> 
    return () => {
        controller.abort();
    }
  }, [url, method])


  return { dt, isPending, error }
}


export default useFetch;