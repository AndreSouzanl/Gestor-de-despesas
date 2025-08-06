"use client";
import Header from "@/componentes/Header/Header";
import estilos from "./page.module.css";
import { IconList, IconUser } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className={estilos.container}>
      <Header
        titulo={"Gestor de Despesas"}
        icone={<IconList size={40} />}
        subtitulo={"Bem vindo Andre"}
      />
    </div>
  );
}
