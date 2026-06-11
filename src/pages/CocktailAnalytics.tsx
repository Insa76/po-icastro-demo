import { useEffect, useState } from "react";

import {
  ChartColumn,
  Martini,
  TrendingUp,
  Target,
} from "lucide-react";

import PolicastroLayout from "../components/layouts/PolicastroLayout";

import {
  getCocktailImage,
} from "../assets/policastro/cocktails";

type CocktailAnalytics = {
  name: string;
  recommended: number;
  selected: number;
  conversion: number;
};

const mockAnalytics: CocktailAnalytics[] = [
  {
    name: "Argentonic",
    recommended: 148,
    selected: 92,
    conversion: 62,
  },

  {
    name: "Feca y Bochas",
    recommended: 121,
    selected: 77,
    conversion: 64,
  },

  {
    name: "Negroni",
    recommended: 109,
    selected: 58,
    conversion: 53,
  },

  {
    name: "Espresso Martini",
    recommended: 96,
    selected: 49,
    conversion: 51,
  },

  {
    name: "Mojito",
    recommended: 88,
    selected: 41,
    conversion: 47,
  },

  {
    name: "Old Fashioned",
    recommended: 74,
    selected: 28,
    conversion: 38,
  },
];

export default function CocktailAnalytics() {
  const [data, setData] = useState<
    CocktailAnalytics[]
  >([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(mockAnalytics);
      setLoading(false);
    }, 800);
  }, []);

  const totalRecommended =
    data.reduce(
      (sum, item) =>
        sum + item.recommended,
      0
    );

  const totalSelected =
    data.reduce(
      (sum, item) =>
        sum + item.selected,
      0
    );

  const averageConversion =
    totalRecommended > 0
      ? (
          (totalSelected /
            totalRecommended) *
          100
        ).toFixed(1)
      : "0";

  const topCocktails =
    [...data]
      .sort(
        (a, b) =>
          b.recommended -
          a.recommended
      )
      .slice(0, 6);

  return (
    <PolicastroLayout>
      {loading ? (
        <div className="text-white">
          Cargando analytics...
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">

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
            <h1
              className="
                text-4xl
                font-bold
                text-white
                mb-2
              "
            >
              Analytics
            </h1>

            <p
              className="
                text-gray-400
              "
            >
              Inteligencia comercial
              para Policastro.
            </p>
          </div>

          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mb-8
            "
          >

            <div
              className="
                bg-[#181C22]
                border
                border-[#2A2F38]
                rounded-3xl
                p-6
              "
            >
              <Martini
                className="
                  text-[#C9A86A]
                  mb-4
                "
              />

              <div
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                {totalRecommended}
              </div>

              <div
                className="
                  text-gray-400
                "
              >
                Recomendaciones
              </div>
            </div>

            <div
              className="
                bg-[#181C22]
                border
                border-[#2A2F38]
                rounded-3xl
                p-6
              "
            >
              <Target
                className="
                  text-[#C9A86A]
                  mb-4
                "
              />

              <div
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                {totalSelected}
              </div>

              <div
                className="
                  text-gray-400
                "
              >
                Selecciones
              </div>
            </div>

            <div
              className="
                bg-[#181C22]
                border
                border-[#2A2F38]
                rounded-3xl
                p-6
              "
            >
              <TrendingUp
                className="
                  text-[#C9A86A]
                  mb-4
                "
              />

              <div
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                {averageConversion}%
              </div>

              <div
                className="
                  text-gray-400
                "
              >
                Conversión
              </div>
            </div>

          </div>

          <div
            className="
              mb-6
              flex
              items-center
              gap-3
            "
          >
            <ChartColumn
              className="
                text-[#C9A86A]
              "
            />

            <h2
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              Top Cocktails
            </h2>
          </div>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {topCocktails.map(
              (cocktail) => (
                <div
                  key={cocktail.name}
                  className="
                    bg-[#181C22]
                    border
                    border-[#2A2F38]
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
                        text-white
                        mb-4
                      "
                    >
                      {cocktail.name}
                    </h3>

                    <div
                      className="
                        space-y-3
                        text-gray-300
                      "
                    >
                      <div>
                        🍸 Recomendado:{" "}
                        {cocktail.recommended}
                      </div>

                      <div>
                        🎯 Seleccionado:{" "}
                        {cocktail.selected}
                      </div>

                      <div
                        className="
                          text-[#C9A86A]
                          font-semibold
                        "
                      >
                        📈 Conversión:{" "}
                        {cocktail.conversion}%
                      </div>
                    </div>

                  </div>

                </div>
              )
            )}

          </div>

        </div>
      )}
    </PolicastroLayout>
  );
}