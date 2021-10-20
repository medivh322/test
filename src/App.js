import React, { useEffect, useState } from 'react';

function App() {
  const [password, setPassword] = useState("");
  const [repPassword, setRepPassword] = useState("");
  const [error, setError] = useState(true);

  const submitForm = (e) => {
    e.preventDefault();
    if(password === repPassword){
        alert("Success");
    }else{
        setError(true);
    }
  }

  useEffect(() => {
      if(password !== repPassword || password === "" || repPassword === ""){
          setError(true);
      }else{
          setError(false)
      }
  }, [password, repPassword]);

  return (
    <div className="form_main">
      <h1 className="title">Смена пароля</h1>
      <p className="sml_title">Пароль должен содержать не менее 8 символов и одну заглавную букву.</p>
      <form className="form" onSubmit={submitForm}>
        <div className="form_block">
          <label htmlFor="formpass">Пароль</label>
          <input id="formpass" type="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form_block">
          <label htmlFor="formpassagain">Повторите пароль</label>
          <input id="formpassagain" className={error ? "error" : "success"} type="password" onChange={(e) =>setRepPassword(e.target.value)}/>
          {error ? 
            <span className="error_text">Error</span> : ""
          }    
        </div>
        <input type="submit" value="Сменить пароль"/>
      </form>
    </div>
  );
}

export default App;
