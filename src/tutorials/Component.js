import { useContext, createContext } from 'react';
 
/*
  * React Component
  Resuable and independent parts to build UI.
  Component name must starts with uppercase letter.

  1 Component Composition
  2 props
  3 children props
  4 useContext Hook
*/


/* 
  Component composition 
*/


export function Composition() {

  function Content() {
    return (
      <section>
        <h2>고양이는 액체일까?</h2>
        <img
          src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
          alt=""
          width="100%"
        />
      </section>
    )
  }
  
  
  function Comments() {
    return (
      <section>
        <h2>댓글</h2>
        <ul>
          <li>유치하게 등수는ㅉㅉ 3빠</li>
          <li>2빠</li>
          <li>1빠</li>
        </ul>  
      </section>
    )
  }
  
  
  function Suggested() {
    return (
      <section>
        <h2>추천 영상</h2>
        <ul>
          <li>고양이는 정말 폭력적일까?</li>
          <li>고양이는 정말 자기가 신이라고 생각할까?</li>
          <li>냥냥펀치는 얼마나 아플까?</li>
        </ul>  
      </section>
    )
  }

  // Main component
  function Snippet() {
    return (
      <>
        <header>
          <h1>Youtube</h1>
        </header>
        
        <main>
          <Content />
          <Comments />
        </main>

        <aside>
          <Suggested />
        </aside>
      </>
    )
  }

  return <Snippet /> 
}


/*
  * Props

  DATA that is passed into component
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
  Children props 

  you can build component tree
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
  
        <main>
          {children}
        </main>
      </>  
    )
  }
  
  function Article() {
    return (
      <section>
        <img
          src="https://external-preview.redd.it/Lpgb3alLNJ0BOp_YH6hj2UaY-N60pmkUHf-gS6hbifE.jpg?auto=webp&s=44a73214eb47bf11c5d5c2dca4d971113c06baf3"
          alt=""
          width="100%"
        />
        <p>
          <b>snoop_dogg</b> 주인 나감ㅋ
        </p>
  
        <small>1일 전</small>
      </section>  
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
  useContext hook 

  access props that sent from higher component
*/

export function UseContextHook() {

  // Provider
  const AuthContext = createContext();

  function AuthProvider({ children }) {
    // local scope
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
        
        <main>
          {children}
        </main>
      </>  
    )
  }
  
  
  function Article() {

    return (
      <section>
        <img
          src="https://external-preview.redd.it/Lpgb3alLNJ0BOp_YH6hj2UaY-N60pmkUHf-gS6hbifE.jpg?auto=webp&s=44a73214eb47bf11c5d5c2dca4d971113c06baf3"
          alt=""
          width="100%"
        />
        <p>
          <b>snoop_dogg </b> 주인 나감ㅋ
        </p>
  
        <small>1일 전</small>
      </section>  
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


