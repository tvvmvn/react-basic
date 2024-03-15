import { useState } from "react"


/*
  JSX rendering

  Q. Create list on the screen refers to data below.
*/


export function JSX1() {
  const country = {
    capitalCity: "서울",
    name: "대한민국",
    population: 5000,
    language: "한국어",
    isG7: false,
  }

  return (
    <>
      <h1>Q. JSX 1</h1>
      <h3>{country.name}</h3>
      <ul>
        <li>수도: {country.capitalCity}</li>
        <li>인구: 약 {country.population.toLocaleString()}만 명</li>
        <li>언어: {country.language}</li>
        <li>G7 여부: {country.isG7 ? "예" : "아니오"}</li>
      </ul>
    </>  
  )
}


export function JSX2() {
  
  const beers = [
    { id: 1, name: "Guinness", origin: "Ireland", available: false },
    { id: 2, name: "Heineken", origin: "Netherlands", available: true },
    { id: 3, name: "Budwiser", origin: "USA", available: true }
  ]

  const beerRows = beers.map(beer => (
    <tr key={beer.id}>
      <td>{beer.id}</td>
      <td>{beer.name}</td>
      <td>{beer.origin}</td>
      <td>{beer.available ? "예" : "아니오"}</td>
    </tr>  
  ));

  return (
    <>
      <h1>Q. JSX 2</h1>
      
      <h3>세계 맥주</h3>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <th>이름</th>
            <th>원산지</th>
            <th>판매중</th>
          </tr>
        </thead>
        <tbody>
          {beerRows}
        </tbody>
      </table>
    </>
  )
}


/*
  Q. Props

  complete a Content component refers to VIEW.
  (Content creates VIEW using DATA)
*/


export function Props() {
  
  function Content({ video }) {
    return (
      <section>
        <h3>{video.title}</h3>
        <img src={video.source} width="200" />
        <p>
          {video.views} views
        </p>
      </section>  
    )
  }

  function Snippet() {

    const DATA = {
      title: "고양이는 액체일까?",
      author: "Who",
      source: "https://i.pinimg.com/736x/e8/25/eb/e825ebee0d666bb63a86ab80405670e3.jpg",
      views: 99,
    }

    return (
      <>
        <h1>YouTube.com</h1>

        <Content video={DATA} />

        <h3>댓글</h3>
        <ul>
          <li>유치하게 등수는ㅉㅉ 3빠</li>
          <li>2빠</li>
          <li>1빠</li>
        </ul>
      </>  
    )
  }

  return <Snippet />
}


/*
  Q. Update View
*/


export function UpdateView() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <>
      <h1>Subscribe button</h1>
      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "구독중" : "구독하기"}
      </button>
    </>  
  )
}


/* 
  Q. Form 1

  access login data after submitting login form.
*/


export function Form1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("username:", username);
    console.log("password:", password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <div>
        <label>
          Username {" "}
          <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </label>
      </div>
      <div>
        <label>
          Password {" "}
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>  
  )
}

