import { Card, Sidebar } from "../components";
import { useEffect, useState } from "react";
import api from "../api";
import st from "../assets/styles/Cards.module.css";

const Cards = () => {
  return (
    <>
      <div className="area">
        <Sidebar />
        <div className="container">
          <h1>Suas Cartas</h1>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Cards;
