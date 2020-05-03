import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import LogoImg from "../../assets/logo.svg";

export default function Cadastro() {
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

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="Whatsapp" />
          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
