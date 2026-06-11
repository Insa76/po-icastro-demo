import { useNavigate } from "react-router-dom";
import PolicastroLayout from "../components/layouts/PolicastroLayout";

import {
  Martini,
  ChartColumn,
  Server,
  Database,
  Brain,
  Activity,
  Camera,
  UtensilsCrossed,
  Sparkles,
  RefreshCcw,
  PlayCircle,
  Bot,
} from "lucide-react";

export default function PolicastroDemo() {
  const navigate = useNavigate();

  return (
    <PolicastroLayout>
      <div className="max-w-6xl mx-auto">

        {/* Hero */}

        <div
          className="
            bg-[#181C22]
            border
            border-[#2A2F38]
            rounded-3xl
            p-10
            mb-8
          "
        >
          <h1
            className="
              text-5xl
              font-bold
              text-white
              mb-3
            "
          >
            Policastro
          </h1>

          <p
            className="
              text-gray-400
              text-lg
            "
          >
            PresenceOS Cocktail Experience
          </p>
        </div>

        {/* Estado */}

        <div
          className="
            bg-[#181C22]
            border
            border-[#2A2F38]
            rounded-3xl
            p-8
            mb-8
          "
        >
          <h2
            className="
              text-2xl
              font-semibold
              text-white
              mb-6
            "
          >
            Estado del Sistema
          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              gap-4
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                text-gray-300
              "
            >
              <Server
                size={18}
                className="text-[#C9A86A]"
              />
              Backend conectado
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                text-gray-300
              "
            >
              <Database
                size={18}
                className="text-[#C9A86A]"
              />
              Policastro cargado
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                text-gray-300
              "
            >
              <Brain
                size={18}
                className="text-[#C9A86A]"
              />
              Recomendador activo
            </div>

            <div
              className="
                flex
                items-center
                gap-3
                text-gray-300
              "
            >
              <Activity
                size={18}
                className="text-[#C9A86A]"
              />
              Analytics activos
            </div>
          </div>
        </div>

        <div
  className="
    bg-gradient-to-r
    from-[#181C22]
    to-[#222833]
    border
    border-[#C9A86A]
    rounded-3xl
    p-8
    mb-8
  "
>
  <div
    className="
      text-[#C9A86A]
      uppercase
      tracking-widest
      text-sm
      mb-2
    "
  >
    Presentación Comercial
  </div>

  <h2
    className="
      text-3xl
      font-bold
      text-white
      mb-4
    "
  >
    Ver Demo Completa
  </h2>

  <p
    className="
      text-gray-400
      mb-6
    "
  >
    Simulación automática de la experiencia
    completa de un cliente en Policastro.
  </p>

  <button
    onClick={() =>
      navigate("/experience/demo")
    }
    className="
      px-6
      py-3
      rounded-xl
      bg-[#C9A86A]
      text-black
      font-semibold
    "
  >
    Iniciar Demo
  </button>
</div>

        {/* Módulos */}

        <h2
          className="
            text-3xl
            font-bold
            text-white
            mb-6
          "
        >
          Módulos disponibles
        </h2>

        <div
          className="
            grid
            md:grid-cols-2
            gap-6
          "
        >
          <button
            onClick={() =>
              navigate("/cocktail")
            }
            className="
              bg-[#181C22]
              border
              border-[#2A2F38]
              rounded-3xl
              p-8
              text-left
              hover:border-[#C9A86A]
              hover:bg-[#1D222B]
              transition
            "
          >
            <Martini
              size={34}
              className="
                mb-4
                text-[#C9A86A]
              "
            />

            <h3
              className="
                text-2xl
                font-bold
                text-white
                mb-2
              "
            >
              Experiencia Cliente
            </h3>

            <p
              className="
                text-gray-400
              "
            >
              Recomendador inteligente
              basado en preferencias
              y comportamiento.
            </p>
          </button>

          <button
            onClick={() =>
              navigate(
                "/cocktail/analytics"
              )
            }
            className="
              bg-[#181C22]
              border
              border-[#2A2F38]
              rounded-3xl
              p-8
              text-left
              hover:border-[#C9A86A]
              hover:bg-[#1D222B]
              transition
            "
          >
            <ChartColumn
              size={34}
              className="
                mb-4
                text-[#C9A86A]
              "
            />

            <h3
              className="
                text-2xl
                font-bold
                text-white
                mb-2
              "
            >
              Analytics
            </h3>

            <p
              className="
                text-gray-400
              "
            >
              Conversión, selección
              y rendimiento de cocktails.
            </p>
          </button>

          
        </div>

        {/* Roadmap */}

        <div
          className="
            bg-[#181C22]
            border
            border-[#2A2F38]
            rounded-3xl
            p-8
            mt-8
          "
        >
          <h2
            className="
              text-2xl
              font-semibold
              text-white
              mb-6
            "
          >
            Próximas funciones
          </h2>

          <div
            className="
              grid
              md:grid-cols-2
              gap-4
            "
          >
            <div className="flex items-center gap-3 text-gray-300">
              <Camera
                size={18}
                className="text-[#C9A86A]"
              />
              Fotos de cocktails
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <UtensilsCrossed
                size={18}
                className="text-[#C9A86A]"
              />
              Maridajes inteligentes
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Sparkles
                size={18}
                className="text-[#C9A86A]"
              />
              Destacados de autor
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <RefreshCcw
                size={18}
                className="text-[#C9A86A]"
              />
              Segunda ronda automática
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Bot
                size={18}
                className="text-[#C9A86A]"
              />
              Perfil de gustos persistente
            </div>
          </div>
        </div>

      </div>
    </PolicastroLayout>
  );
}