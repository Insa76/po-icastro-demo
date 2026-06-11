import argentonic from "./argentonic.jpeg";
import negroni from "./negroni.jpeg";
import mojito from "./mojito.jpeg";
import oldFashioned from "./old_fashioned.jpeg";
import espressoMartini from "./espresso_martini.jpeg";
import fecaYBochas from "./feca.jpeg";
import defaultCocktail from "./default.jpeg";

const cocktailImages: Record<string, string> = {
  ARGENTONIC: argentonic,
  NEGRONI: negroni,
  MOJITO: mojito,
  "OLD FASHIONED": oldFashioned,
  "ESPRESSO MARTINI": espressoMartini,
  "FECA Y BOCHAS": fecaYBochas,
};

export function getCocktailImage(
  name: string
) {
  return (
    cocktailImages[name] ??
    defaultCocktail
  );
}