import { useContext, createContext } from 'react';
 
/*
  * React Component
  independent and reusable parts to make UI.
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
        <h3>Samsung Galaxy S24</h3>
        <i>Features</i>
        <dl>
          <dt>CPU</dt>
          <dd>8 Core</dd>
          <dt>RAM</dt>
          <dd>8GB</dd>
          <dt>Storage</dt>
          <dd>512GB SSD</dd>
        </dl>
        <button>Add To Cart</button>
      </section>
    )
  }
  
  
  function Reviews() {
    return (
      <section>
        <h3>Customer Reviews</h3>
        <ul>
          <li>I love the design!</li>
          <li>poor quality. </li>
          <li>Great product!</li>
        </ul>  
      </section>
    )
  }
  
  
  function Suggested() {
    return (
      <section>
        <h3>Suggested items</h3>
        <ul>
          <li>iPhone 15 Pro</li>
          <li>Pixel Pro 8</li>
          <li>Huawei</li>
        </ul>  
      </section>
    )
  }

  // main 
  function Snippet() {
    return (
      <>
        <header>
          <h1>Amazon.com</h1>
        </header>
        
        <main>
          <Content />
          <Reviews />
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

  DATA passed between components in composition
*/

export function Props() {

  function Profile({ profile }) {
    return (
      <section>
        <h3>{profile.username}</h3>
        <p>{profile.bio}</p>
        <ul>
          <li>{profile.posts} posts</li>
          <li>{profile.followers} followers</li>
          <li>{profile.following} following</li>
        </ul>
      </section>
    )
  }

  function Snippet() {

    // local 
    const DATA = { 
      username: "Jesus Christ", 
      bio: "Love your neighbors!",
      posts: 5,
      followers: 10,
      following: 20,
    };

    return (
      <>
        <h1>Instagram.com</h1>

        <Profile profile={DATA} />
      </>
    )
  }
  
  return <Snippet />
}


/* 
  Component Tree

  you can build component tree with children props.
*/


export function ChildrenProps() {

  function Layout({ children }) {
    return (
      <>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Posts</li>
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
        <h1>First post</h1>
        <i>January 1, 2024</i>
        <p>..</p>
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
  Delievering data into low level component
  in tree structure
*/


export function UseContextHook() {

  // Provider 
  const AuthContext = createContext();

  function AuthProvider({ children }) {
    // local 
    const value = { username: 'bunny' };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>  
    )
  }
  
  function Layout({ children }) {

    // access value
    const auth = useContext(AuthContext);
  
    return (
      <>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Posts</li>
          </ul>
        </nav>
  
        {auth ? (
          <p>Hi, {auth.username}!</p>
        ) : (
          <p>Sign in, please.</p>
        )}
        
        <main>
          {children}
        </main>
      </>  
    )
  }
  
  
  function Article() {
    return (
      <section>
        <h1>First post</h1>
        <i>January 1, 2024</i>
        <p>..</p>
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


