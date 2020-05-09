import React, { useState } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import LogoImg from "../../assets/logo.svg";
import api from './../../services/api';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const PostData = {
      nome,
      email,
      whatsapp,
      cidade,
      uf
    };

    try {
      const response = await api.post('ongs', PostData);

      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
      
    } catch (error) {
      alert('Error');
    }

  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude a encontrarem os
            casos da sua ONG.
          </p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input placeholder="Nome da ONG" value={nome} onChange={e => setNome(e.target.value)} />
          <input type="email" placeholder="Email"  value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="Whatsapp"  value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
          <div className="input-group">
            <input placeholder="Cidade"  value={cidade} onChange={e => setCidade(e.target.value)}/>
            <input placeholder="UF" style={{ width: 80 }}  value={uf} onChange={e => setUf(e.target.value)} />
          </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
