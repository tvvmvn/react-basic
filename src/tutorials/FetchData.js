import { useState, useEffect } from "react";


/*
  Fetch data

  1 useEffect Hook
  2 data fetching example
*/


/*
  useEffect

  It can give many effects on app

  - use case
  1) useEffect(effect)
  excute effect whenever component is rendered.
  
  2) useEffect(effect, []) 
  excute effect only at initial rendering.
  
  3) useEffect(effect, [dep])
  excute effect at initial rendering and whenever dependency is changed.
*/


export function UseEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("rendered at " + new Date().toLocaleTimeString());
  }, [])

  return (
    <>
      <h3>useEffect Hook</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>  
  )
}


/*
  Data fetching example
*/


function fetchData() {
  const DATA = {
    username: "snoop_dogg",
    image: "https://i.pinimg.com/originals/28/8b/d1/288bd18fd073898a8417c31c77f83059.jpg",
    bio: "정신이 좀 드는가"
  }
  
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(DATA)
    }, 2000)
  })

  return promise;
}


export function DataFetching() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState(null);

  // operate asynchoronously
  useEffect(() => {
    fetchData()
      .then(data => {
        setProfile(data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <p>failed to fetch profile</p>
  }

  if (!isLoaded) {
    return <p>fetching profile...</p>
  }

  return (
    <>
      <h1>Profile</h1>
      <img
        src={profile.image}
        alt={profile.username}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          border: "1px solid #ddd",
          borderRadius: "50%",
        }}
      />
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
    </>  
  )
}


