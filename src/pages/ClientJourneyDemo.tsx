import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Play,
  Pause,
} from "lucide-react";

import PolicastroLayout from "../components/layouts/PolicastroLayout";

const scenes = [
  {
    image: "/demo/scene-1.jpeg",
    title: "Cliente llega a Policastro",
    subtitle: "Mesa 7 · 21:17 hs",
  },

  {
    image: "/demo/scene-2.jpeg",
    title: "Escaneo del QR",
    subtitle: "Nueva sesión detectada",
  },

  {
    image: "/demo/scene-3.jpeg",
    title: "PresenceOS aprende",
    subtitle: "Fresco + Herbal",
  },

  {
    image: "/demo/scene-4.jpeg",
    title: "La IA encuentra el cocktail ideal",
    subtitle: "95% compatibilidad",
  },

  {
    image: "/demo/scene-5.jpeg",
    title: "Cliente acepta la recomendación",
    subtitle: "Selección registrada",
  },

  {
    image: "/demo/scene-6.jpeg",
    title: "Analytics actualizados",
    subtitle: "Conversión en tiempo real",
  },

  {
    image: "/demo/scene-7.jpeg",
    title: "Venta generada",
    subtitle: "Experiencia → Venta",
  },
];

const SCENE_DURATION = 5000;

export default function ClientJourneyDemo() {
  const [current, setCurrent] =
    useState(0);

  const [playing, setPlaying] =
    useState(true);

  useEffect(() => {
    if (!playing) return;

    const timer =
      setInterval(() => {
        setCurrent((prev) => {
          if (
            prev >=
            scenes.length - 1
          ) {
            return prev;
          }

          return prev + 1;
        });
      }, SCENE_DURATION);

    return () =>
      clearInterval(timer);
  }, [playing]);

  const scene =
    scenes[current];

  const progress =
    ((current + 1) /
      scenes.length) *
    100;

  function next() {
    setCurrent((prev) =>
      Math.min(
        prev + 1,
        scenes.length - 1
      )
    );
  }

  function previous() {
    setCurrent((prev) =>
      Math.max(prev - 1, 0)
    );
  }

  function restart() {
    setCurrent(0);
    setPlaying(true);
  }

  return (
    <PolicastroLayout>
      <div className="max-w-7xl mx-auto">

        {/* Progress */}

        <div
          className="
            w-full
            h-2
            bg-[#2A2F38]
            rounded-full
            overflow-hidden
            mb-6
          "
        >
          <div
            className="
              h-full
              bg-[#C9A86A]
              transition-all
              duration-700
            "
            style={{
              width:
                `${progress}%`,
            }}
          />
        </div>

        {/* Scene */}

        <div
          className="
            relative
            h-[80vh]
            rounded-3xl
            overflow-hidden
            border
            border-[#2A2F38]
          "
        >
          <img
            src={scene.image}
            alt={scene.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/55
            "
          />

          {/* Content */}

          <div
            className="
              relative
              z-10
              h-full
              flex
              flex-col
              justify-end
              p-12
            "
          >
            <div
              className="
                max-w-3xl
              "
            >
              <div
                className="
                  text-[#C9A86A]
                  uppercase
                  tracking-[0.3em]
                  text-sm
                  mb-4
                "
              >
                PresenceOS Demo
              </div>

              <h1
                className="
                  text-6xl
                  font-bold
                  text-white
                  mb-4
                "
              >
                {scene.title}
              </h1>

              <p
                className="
                  text-2xl
                  text-gray-200
                "
              >
                {scene.subtitle}
              </p>
            </div>

            {/* Escena 3 */}

            {current === 2 && (
              <div
                className="
                  mt-8
                  flex
                  gap-4
                "
              >
                <div
                  className="
                    bg-[#C9A86A]
                    text-black
                    px-5
                    py-3
                    rounded-full
                    font-semibold
                  "
                >
                  ✓ Fresco
                </div>

                <div
                  className="
                    bg-[#C9A86A]
                    text-black
                    px-5
                    py-3
                    rounded-full
                    font-semibold
                  "
                >
                  ✓ Herbal
                </div>
              </div>
            )}

            {/* Escena 6 */}

            {current === 5 && (
              <div
                className="
                  mt-8
                  grid
                  md:grid-cols-3
                  gap-4
                  max-w-4xl
                "
              >
                <div
                  className="
                    bg-[#181C22]/90
                    rounded-2xl
                    p-5
                  "
                >
                  <div className="text-gray-400">
                    Recomendaciones
                  </div>

                  <div
                    className="
                      text-4xl
                      font-bold
                      text-white
                    "
                  >
                    14 → 15
                  </div>
                </div>

                <div
                  className="
                    bg-[#181C22]/90
                    rounded-2xl
                    p-5
                  "
                >
                  <div className="text-gray-400">
                    Selecciones
                  </div>

                  <div
                    className="
                      text-4xl
                      font-bold
                      text-white
                    "
                  >
                    1 → 2
                  </div>
                </div>

                <div
                  className="
                    bg-[#181C22]/90
                    rounded-2xl
                    p-5
                  "
                >
                  <div className="text-gray-400">
                    Conversión
                  </div>

                  <div
                    className="
                      text-4xl
                      font-bold
                      text-[#C9A86A]
                    "
                  >
                    6.6% → 13.3%
                  </div>
                </div>
              </div>
            )}

            {/* Escena 7 */}

            {current === 6 && (
  <div
    className="
      mt-8
      bg-[#181C22]/95
      p-8
      rounded-2xl
      max-w-2xl
    "
  >
    <div
      className="
        text-[#C9A86A]
        uppercase
        tracking-wider
        text-sm
        mb-4
      "
    >
      Staff Board
    </div>

    <h3
      className="
        text-2xl
        font-bold
        text-white
        mb-6
      "
    >
      Mesa 7
    </h3>

    <div
      className="
        space-y-3
        text-white
        text-lg
      "
    >
      <div>🍸 Argentonic x1</div>
      <div>🧀 Picada Rosso x1</div>
    </div>

    <div
      className="
        mt-6
        pt-6
        border-t
        border-[#2A2F38]
      "
    >
      <div
        className="
          text-gray-400
        "
      >
        Total estimado
      </div>

      <div
        className="
          text-4xl
          font-bold
          text-[#C9A86A]
        "
      >
        $19.000
      </div>
    </div>

    <div
      className="
        mt-6
        space-y-2
        text-green-400
      "
    >
      <div>
        ✓ Pedido recibido
      </div>

      <div>
        ✓ Staff notificado
      </div>

      <div>
        ✓ Listo para preparación
      </div>
    </div>

  </div>
)}
          </div>
        </div>

        {/* Controls */}

        <div
          className="
            flex
            justify-center
            gap-3
            mt-6
          "
        >
          <button
            onClick={previous}
            className="
              bg-[#181C22]
              border
              border-[#2A2F38]
              p-3
              rounded-xl
              text-white
            "
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() =>
              setPlaying(!playing)
            }
            className="
              bg-[#181C22]
              border
              border-[#2A2F38]
              p-3
              rounded-xl
              text-white
            "
          >
            {playing ? (
              <Pause />
            ) : (
              <Play />
            )}
          </button>

          <button
            onClick={restart}
            className="
              bg-[#C9A86A]
              text-black
              p-3
              rounded-xl
            "
          >
            <RotateCcw />
          </button>

          <button
            onClick={next}
            className="
              bg-[#181C22]
              border
              border-[#2A2F38]
              p-3
              rounded-xl
              text-white
            "
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </PolicastroLayout>
  );
}