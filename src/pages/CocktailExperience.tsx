import { useState } from "react";
import PolicastroLayout from "../components/layouts/PolicastroLayout";
import heroImage from "../assets/policastro/hero.jpeg";
import {
  getCocktailImage,
} from "../assets/policastro/cocktails";

type Recommendation = {
  name: string;
  description: string;
  score: number;
};

const mockRecommendations: Recommendation[] = [
  {
    name: "Argentonic",
    description:
      "Gin, Hesperidina, almíbar de mate cocido, tónica, pomelo y romero.",
    score: 95,
  },

  {
    name: "Feca y Bochas",
    description:
      "Pineral, Caña Legui, cordial de naranja y nueces tostadas, café.",
    score: 92,
  },

  {
    name: "Negroni",
    description:
      "Gin, Vermouth Rosso y Campari.",
    score: 88,
  },
];

export default function CocktailExperience() {
  const [step, setStep] = useState(1);

  const [primaryTag, setPrimaryTag] =
    useState("");

  const [, setSecondaryTag] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [recommendations, setRecommendations] =
    useState<Recommendation[]>([]);

  async function handleRecommend(
    selectedSecondaryTag: string
  ) {
    setLoading(true);

    setTimeout(() => {
      setRecommendations(
        mockRecommendations
      );

      setLoading(false);

      setStep(3);
    }, 1200);
  }

  async function selectCocktail(
    cocktailName: string
  ) {
    alert(
      `${cocktailName} agregado al pedido`
    );
  }

  return (
    <PolicastroLayout>
      <div className="max-w-5xl mx-auto">

        <img
          src={heroImage}
          alt="Policastro"
          className="
            w-full
            h-[320px]
            object-cover
            rounded-3xl
            mb-8
            shadow-2xl
          "
        />

        <div
          className="
            bg-[#181C22]
            border
            border-[#2A2F38]
            rounded-3xl
            p-8
            text-white
          "
        >

          {step === 1 && (
            <>
              <div className="mb-8">

                <h1
                  className="
                    text-4xl
                    font-bold
                    mb-3
                  "
                >
                  Descubrí tu cocktail ideal
                </h1>

                <p
                  className="
                    text-gray-400
                    text-lg
                  "
                >
                  Recomendaciones
                  personalizadas
                  basadas en tus gustos.
                </p>

              </div>

              <h2
                className="
                  text-xl
                  font-semibold
                  mb-5
                "
              >
                ¿Qué te gustaría tomar hoy?
              </h2>

              <div className="grid gap-4">

                {[
                  {
                    label:
                      "🌿 Fresco y refrescante",
                    value:
                      "refreshing",
                  },

                  {
                    label:
                      "🔥 Intenso",
                    value:
                      "intense",
                  },

                  {
                    label:
                      "🍬 Dulce",
                    value:
                      "sweet",
                  },

                  {
                    label:
                      "🍊 Cítrico",
                    value:
                      "citrus",
                  },

                  {
                    label:
                      "✨ Sorprendeme",
                    value:
                      "signature",
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setPrimaryTag(
                        option.value
                      );
                      setStep(2);
                    }}
                    className="
                      p-5
                      rounded-2xl
                      bg-[#222833]
                      border
                      border-[#303846]
                      text-left
                      hover:border-[#C9A86A]
                      hover:bg-[#252D39]
                      transition
                    "
                  >
                    {option.label}
                  </button>
                ))}

              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2
                className="
                  text-2xl
                  font-semibold
                  mb-6
                "
              >
                ¿Qué te llama más la atención?
              </h2>

              <div className="grid gap-4">

                {[
                  {
                    label:
                      "🌿 Herbal",
                    value:
                      "herbal",
                  },

                  {
                    label:
                      "🍓 Frutal",
                    value:
                      "fruity",
                  },

                  {
                    label:
                      "🎩 Clásico",
                    value:
                      "classic",
                  },

                  {
                    label:
                      "✨ De Autor",
                    value:
                      "signature",
                  },

                  {
                    label:
                      "☕ Café",
                    value:
                      "coffee",
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {

                      setSecondaryTag(
                        option.value
                      );

                      handleRecommend(
                        option.value
                      );

                    }}
                    className="
                      p-5
                      rounded-2xl
                      bg-[#222833]
                      border
                      border-[#303846]
                      text-left
                      hover:border-[#C9A86A]
                      hover:bg-[#252D39]
                      transition
                    "
                  >
                    {option.label}
                  </button>
                ))}

              </div>
            </>
          )}

          {loading && (
            <div
              className="
                text-center
                py-12
                text-lg
              "
            >
              Buscando recomendaciones...
            </div>
          )}

          {step === 3 && (
            <>
              <h2
                className="
                  text-3xl
                  font-bold
                  mb-8
                "
              >
                Recomendados para vos
              </h2>

              <div
                className="
                  grid
                  md:grid-cols-2
                  gap-6
                "
              >

                {recommendations.map(
                  (cocktail) => (
                    <div
                      key={cocktail.name}
                      className="
                        bg-[#222833]
                        border
                        border-[#303846]
                        rounded-3xl
                        overflow-hidden
                      "
                    >

                      <img
                        src={getCocktailImage(
                          cocktail.name
                        )}
                        alt={cocktail.name}
                        className="
                          w-full
                          h-56
                          object-cover
                        "
                      />

                      <div className="p-6">

                        <h3
                          className="
                            text-2xl
                            font-bold
                            mb-2
                          "
                        >
                          {cocktail.name}
                        </h3>

                        <p
                          className="
                            text-gray-400
                            mb-4
                          "
                        >
                          {cocktail.description}
                        </p>

                        <div
                          className="
                            text-xs
                            uppercase
                            tracking-wider
                            text-[#C9A86A]
                            mb-5
                          "
                        >
                          Match Score:{" "}
                          {cocktail.score}
                        </div>

                        <button
                          onClick={() =>
                            selectCocktail(
                              cocktail.name
                            )
                          }
                          className="
                            w-full
                            py-3
                            rounded-xl
                            bg-[#C9A86A]
                            text-black
                            font-semibold
                            hover:opacity-90
                            transition
                          "
                        >
                          Agregar al pedido
                        </button>

                      </div>

                    </div>
                  )
                )}

              </div>
            </>
          )}

        </div>

      </div>
    </PolicastroLayout>
  );
}