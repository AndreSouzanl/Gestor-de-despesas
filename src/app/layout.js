import "./globals.css";



export const metadata = {
  title: "Gestor de Despesas",
  description: "Aplicação para gerenciar despesas pessoais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
