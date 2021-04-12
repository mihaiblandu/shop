import React, { useState ,useEffect} from "react";
import AuthService from '../services/auth.service'


export default function Login(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (evt) => {
      evt.preventDefault();
      AuthService.login(name, password).then((data) => {
          console.log(data);
      }).catch((err) => {

          console.error(JSON.stringify(err));
        });
  }
 

  return (
      <div>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>

  );
}
