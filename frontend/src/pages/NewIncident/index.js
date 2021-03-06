import React from 'react';
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

export default function newIncident(){
    return (
<div className="new-incident">
      <div className="content">
        <section>
          <img src={LogoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form>
            <input placeholder="Título do caso" />
            <textarea placeholder="Descrição" />
            <input placeholder="Valor em reais" />

            <button type="submit" className="button">
                Cadastrar
            </button>
        </form>
      </div>
    </div>
    );
}