import { useContext, createContext } from 'react';
 

/*
  React Component

  1 Component Composition

  2 props

  3 children props

  4 useContext Hook
*/


/* 
  1 Composition 
*/

export function Composition() {

  function Content() {
    return (
      <>
        <h2>고양이는 액체일까?</h2>
        
        {/* video */}
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
          alt=""
          width="100%"
        />
      </>
    )
  }
  
  
  function Comments() {
    return (
      <ul>
        <li>유치하게 등수는... 3빠</li>
        <li>2빠</li>
        <li>1빠</li>
      </ul>  
    )
  }
  
  
  function Suggested() {
    return (
      <ul>
        <li>고양이는 정말 폭력적일까?</li>
        <li>고양이는 정말 자기가 신이라고 생각할까?</li>
        <li>냥냥펀치는 얼마나 아플까?</li>
      </ul>  
    )
  }

  function Snippet() {
    return (
      <>
        <header>
          <h1>Youtube</h1>
        </header>
        
        <main>
          <Content />

          <h2>댓글</h2>
          <Comments />
        </main>

        <aside>
          <h2>추천 영상</h2>
          <Suggested />
        </aside>
      </>
    )
  }

  return <Snippet /> 
}


/*
  3 props
  DATA that pass into component
*/

export function Props() {

  function Beer({ beer }) {
    return (
      <ul>
        <li>이름: {beer.name}</li>
        <li>원산지: {beer.origin}</li>
        <li>판매중: {beer.available ? "예" : "아니오"}</li>
      </ul>  
    )
  }
  
  function Snippet() {

    // local variables
    const irishBeer = { 
      name: "Guinness", 
      origin: "Ireland",
      available: false
    };

    return (
      <>
        <h2>Beer</h2>
        <Beer beer={irishBeer} />
      </>
    )
  }

  return <Snippet />
}


/* 
  3 children props 
  you can build tree structure with components
*/

export function ChildrenProps() {

  function Layout({ children }) {

    return (
      <>
        <h1>Instagram</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li>Profile</li>
          </ul>
        </nav>
  
        <main style={{ padding: "1rem 0" }}>
          {children}
        </main>

        <footer>
          <small>2023 &copy; Instagram</small>
        </footer>
      </>  
    )
  }
  
  function Article() {
  
    return (
      <>
        <img
          src="https://external-preview.redd.it/Lpgb3alLNJ0BOp_YH6hj2UaY-N60pmkUHf-gS6hbifE.jpg?auto=webp&s=44a73214eb47bf11c5d5c2dca4d971113c06baf3"
          alt=""
          width="100%"
        />
        <p>
          <b>snoop_dogg </b> 
          주인 나가서 한컷.
        </p>
  
        <small>1일 전</small>
      </>  
    )
  }

  function Snippet() {
    return (
      <Layout>
        <Article />
      </Layout>
    )
  }

  return <Snippet />
}


/* 
  4 useContext hook 
  make component pass props to low level component  
*/

export function UseContextHook() {

  const AuthContext = createContext();

  function AuthProvider({ children }) {

    // local variables
    const value = { username: 'bunny' };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>  
    )
  }
  
  function Layout({ children }) {
  
    const auth = useContext(AuthContext);
  
    return (
      <>
        <h1>Instagram</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Posts</li>
            <li>Profile</li>
          </ul>
        </nav>
  
        <p>안녕하세요, {auth.username}님!</p>
        
        <main style={{ padding: "1rem 0" }}>
          {children}
        </main>

        <footer>
          <small>2023 &copy; Instagram</small>
        </footer>
      </>  
    )
  }
  
  
  function Article() {
  
    const auth = useContext(AuthContext);
  
    return (
      <>
        <img
          src="https://external-preview.redd.it/Lpgb3alLNJ0BOp_YH6hj2UaY-N60pmkUHf-gS6hbifE.jpg?auto=webp&s=44a73214eb47bf11c5d5c2dca4d971113c06baf3"
          alt=""
          width="100%"
        />
        <p>
          <b>snoop_dogg </b> 
          주인 나가서 한컷.
        </p>
  
        <small>1일 전</small>
      </>  
    )
  }

  function Snippet() {
    return (
      <AuthProvider>
        <Layout>
          <Article />
        </Layout>
      </AuthProvider>
    )
  }

  return <Snippet />
}


