import { 
  useState, 
  useEffect, 
  useRef, 
  createContext, 
  useContext 
} from "react";

export default function Lab() {
  return <Snippet />
}

function Snippet() {
  // handling form data
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
