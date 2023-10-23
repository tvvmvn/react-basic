import { useState, createContext, useContext } from 'react';
import { Router as HashRouter, Routes, Route, Link, useParams } from 'react-router-dom';


/*
  React Router

  1 Basic Router
  2 Router with authentication
*/


/*
  Basic Router 
*/


export function BasicRouter() {
  
  function Home() {
    return <h1>Home</h1>
  }
  
  function Posts() {
    return (
      <>
        <h1>Posts</h1>
        <ul>
          <li>
            <Link to="/router/basic/post/p0">Post 1</Link>
          </li>
          <li>
            <Link to="/router/basic/post/p1">Post 2</Link>
          </li>
        </ul>
      </>
    )
  }
  
  function Post() {
    // access url parameter
    const { postId } = useParams();
  
    return (
      <>
        <h1>Title</h1>
        <p>{postId}</p>
      </>
    )
  }
  
  function About() {
    return <h1>About</h1>
  }
  
  function NotFound() {
    return <h1>404 NotFound</h1>
  }

  function Snippet() {
    return (
      // replace Fragment to Router component.
      <> 
        <nav>
          <ul>
            <li>
              <Link to="/router/basic/">Home</Link>
            </li>
            <li>
              <Link to="/router/basic/about">About</Link>
            </li>
            <li>
              <Link to="/router/basic/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:postId" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  }

  return <Snippet />
}


/*
  Router with auth
*/


export function AuthRouter() {
  
  const AuthContext = createContext();
  
  function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
  
    const value = { user, setUser };
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
  }
  
  function AuthStatus() {
    const { user, setUser } = useContext(AuthContext);
  
    return user ? (
      <p>
        Hi, {user}! {" "}
        <button onClick={() => setUser(null)}>Log out</button>
      </p>
    ) : (
      <p>Not logged in</p>
    )
  }

  function AuthRequired({ children }) {
    const { user, setUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();

      setUser(username);
    }
  
    if (!user) {
      return (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input 
            type="text" 
            name="username" 
            onChange={(e) => setUsername(e.target.value)} 
            required
          />
          <button type="submit">Login</button>
        </form>
      )
    }
  
    return children;
  }
  
  function Home() {
    return <h1>Home</h1>
  }
  
  function Posts() {
    return (
      <>
        <h1>Posts</h1>
        <ul>
          <li>
            <Link to="/router/auth/post/p0">Post 1</Link>
          </li>
          <li>
            <Link to="/router/auth/post/p1">Post 2</Link>
          </li>
        </ul>
      </>
    )
  }
  
  function Post() {
    const { postId } = useParams();
  
    return (
      <>
        <h1>Post</h1>
        <p>{postId}</p>
      </>
    )
  }
  
  function NotFound() {
    return <h1>404 NotFound</h1>
  }

  function Snippet() {
    return (
      // replace Fragment to Router Component.
      <>
        <AuthProvider>
          <nav>
            <ul>
              <li>
                <Link to="/router/auth/">Home</Link>
              </li>
              <li>
                <Link to="/router/auth/posts">Posts</Link>
              </li>
            </ul>
          </nav>

          <AuthStatus />
          
          <Routes>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="post/:postId" element={
              <AuthRequired>
                <Post />
              </AuthRequired>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </>
    )
  }

  return <Snippet />
}
