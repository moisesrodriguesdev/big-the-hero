import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import herosImg from "../../assets/heroes.png";
import LogoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import api from './../../services/api';

function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('OngId', id);
      localStorage.setItem('OngName', response.data.nome); 

      history.push('/profile'); 
    } catch (error) {
      alert('Error');
    }
  }

  return (
    <div>
      <div className="logon-container">
        <section className="form">
          <img src={LogoImg} alt="logo" />
          <form onSubmit={handleLogin}>
            <h1>Faça seu logon</h1>
            <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
            <button type="submit" className="button">
              Entrar
            </button>

            <Link to="/cadastro" className="back-link">
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
          </form>
        </section>

        <img src={herosImg} alt="Heroes" />
      </div>
    </div>
  );
}

export default Logon;
