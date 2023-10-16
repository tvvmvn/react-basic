import { useState } from 'react'


/*
  JSX rendering

  Q. create following table
*/


export function JSX() {
  const beers = [
    { name: "Guinness", origin: "Ireland", available: false },
    { name: "Heineken", origin: "Netherlands", available: true },
    { name: "Budwiser", origin: "USA", available: true }
  ]

  const beerRows = beers.map((beer) => (
    <tr key={beer.name}>
      <td>{beer.name}</td>
      <td>{beer.origin}</td>
      <td>{beer.available ? "예" : "아니오"}</td>
    </tr>  
  ))

  return (
    <>
      <h1>Beers</h1>
      <table border="1">
        <thead>
          <tr>
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
  Component composition and props

  Q. Create view with DATA and following components.
  (DATA has local variable in Snippet)
  
  1 Snippet (Main component)
  2 Content
  3 Comments
  4 Suggested
*/


export function ComponentComposition() {

  function Snippet() {
    const DATA = {
      video: {
        id: 'v0', 
        title: '고양이는 액체일까?',
        source: "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
      },
      comments: [
        { id: 'c0', content: '1빠' },
        { id: 'c1', content: '2빠' },
        { id: 'c2', content: '유치하게 등수는... 3빠' },
      ],
      suggestedVideos: [
        { id: 's0', title: '고양이는 정말 폭력적일까?' },
        { id: 's1', title: '고양이는 정말 자기가 신이라고 생각할까?' },
        { id: 's2', title: '냥냥펀치는 얼마나 아플까?' },
      ]
    }
    
    return (
      <>
        <header>
          <h1>Youtube</h1>
        </header>
        
        <main>
          <Content video={DATA.video} />
          <Comments comments={DATA.comments} />
        </main>

        <aside>
          <Suggested suggestedVideos={DATA.suggestedVideos} />
        </aside>
      </>
    )
  }

  function Content(props) {

    const video = props.video;

    return (
      <>
        <h2>{video.title}</h2>
        
        {/* video */}
        <img src={video.source} alt="" width="100%" />
      </>
    )
  }
  
  function Comments(props) {

    const comments = props.comments;

    const commentList = comments.map(comment => (
      <li key={comment.id}>{comment.content}</li>  
    ))

    return (
      <>
        <h2>댓글</h2>
        <ul>
          {commentList}
        </ul>  
      </>
    )
  }
  
  
  function Suggested(props) {

    const suggestedVideos = props.suggestedVideos;

    const suggestedVideoList = suggestedVideos.map(video => (
      <li key={video.id}>{video.title}</li>  
    ))

    return (
      <>
        <h2>추천 영상</h2>
        <ul>
          {suggestedVideoList}
        </ul>  
      </>
    )
  }

  return <Snippet /> 
}


/*
  Update View
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
