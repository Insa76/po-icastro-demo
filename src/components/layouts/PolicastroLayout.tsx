import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function PolicastroLayout({
  children,
}: Props) {
  return (
    <div
      className="
        min-h-screen
        bg-[#0F1115]
        text-white
      "
    >
      <header
        className="
          border-b
          border-[#222833]
          backdrop-blur
        "
      >
        <div
          className="
            max-w-6xl
            mx-auto
            px-6
            py-5
            flex
            justify-between
            items-center
          "
        >
          <div>
            <h1
              className="
                text-2xl
                font-bold
              "
            >
              Policastro
            </h1>

            <p
              className="
                text-sm
                text-gray-500
              "
            >
              PresenceOS Cocktail
            </p>
          </div>

          <nav
            className="
              flex
              gap-6
            "
          >
            <Link
              to="/policastro"
              className="
                text-gray-300
                hover:text-[#C9A86A]
                transition
              "
            >
              Inicio
            </Link>

            <Link
              to="/cocktail"
              className="
                text-gray-300
                hover:text-[#C9A86A]
                transition
              "
            >
              Cliente
            </Link>

            <Link
              to="/cocktail/analytics"
              className="
                text-gray-300
                hover:text-[#C9A86A]
                transition
              "
            >
              Analytics
            </Link>
          </nav>
        </div>
      </header>

      <main
        className="
          max-w-6xl
          mx-auto
          px-6
          py-8
        "
      >
        {children}
      </main>
    </div>
  );
}