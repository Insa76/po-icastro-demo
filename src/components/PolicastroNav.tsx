import { Link } from "react-router-dom";

export default function PolicastroNav() {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginBottom: 24,
      }}
    >
      <Link to="/policastro">
        Inicio
      </Link>

      <Link to="/cocktail">
        Cliente
      </Link>

      <Link to="/cocktail/analytics">
        Analytics
      </Link>
    </div>
  );
}