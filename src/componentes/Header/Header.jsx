import estilos from "./Header.module.css";

export default function Header(props) {
  return (
    <header className={estilos.header}>
      <div>
        <h1>{props.icone}</h1>
        <h2>{props.titulo}</h2>
      </div>
      <div>
        <h3>{props.subtitulo}</h3>
      </div>
    </header>
  );
}
