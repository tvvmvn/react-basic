import { useState, useEffect } from "react";


/*
  Data fetching

  1 useEffect Hook
  2 Data fetching example
*/


/*
  useEffect

  It can give many effects into app.
  for examples, data fetching, accessing real element and etc.

  - How to use
  1 useEffect(effect)
  excute effect when component is called.
  
  2 useEffect(effect, [])
  excute effect when component is called initially.
  
  3 useEffect(effect, [deps])
  excute effect when component is called initially
  and deps(dependencies) are updated.
*/


export function EffectHook() {
  // **setState call component.
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("effect occured");
  }, [])

  return (
    <>
      <h1>useEffect</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>  
  )
}


/*
  Data fetching example
*/


function getProfile() {
  const DATA = {
    username: "doggy",
    avatar: "https://i.pinimg.com/originals/28/8b/d1/288bd18fd073898a8417c31c77f83059.jpg",
    bio: "정신이 좀 드는가"
  }
  
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(DATA)
    }, 2000);
  })

  return promise;
}


export function DataFetching() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [profile, setProfile] = useState(null);

  // asynchronous
  useEffect(() => {
    getProfile()
      .then(data => {
        setProfile(data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => setIsLoaded(true))
  }, [])

  if (error) {
    return <p>failed to fetch</p>
  }

  if (!isLoaded) {
    return <p>fetching profile...</p>
  }

  return (
    <>
      <h1>Profile</h1>
      <img
        src={profile.avatar}
        alt={profile.username}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
          border: "1px solid #ddd",
          borderRadius: "99px",
        }}
      />
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
    </>  
  )
}


