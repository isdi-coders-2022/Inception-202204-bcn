import { rest } from "msw";

export const handlers = [
  rest.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php`,
    (_req, res, ctx) => {
      const query = _req.url.searchParams;
      const _limit = query.get("a");

      if (_limit === "Alcoholic") {
        return res(
          ctx.status(200),
          ctx.json({
            drinks: [
              {
                idDrink: "11007",
                strDrink: "Margarita",
                strDrinkAlternate: null,
                strTags: "IBA,ContemporaryClassic",
                strVideo: null,
                strCategory: "Ordinary Drink",
                strIBA: "Contemporary Classics",
                strAlcoholic: "Alcoholic",
                strGlass: "Cocktail glass",
                strInstructions:
                  "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
                strInstructionsES: null,
                strInstructionsDE:
                  "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
                strInstructionsFR: null,
                strInstructionsIT:
                  "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
                "strInstructionsZH-HANS": null,
                "strInstructionsZH-HANT": null,
                strDrinkThumb:
                  "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
                strIngredient1: "Tequila",
                strIngredient2: "Triple sec",
                strIngredient3: "Lime juice",
                strIngredient4: "Salt",
                strMeasure1: "1 1/2 oz ",
                strMeasure2: "1/2 oz ",
                strMeasure3: "1 oz ",
                strImageSource:
                  "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
                strImageAttribution: "Cocktailmarler",
                strCreativeCommonsConfirmed: "Yes",
                dateModified: "2015-08-18 14:42:59",
              },
            ],
          })
        );
      }
    }
  ),

  rest.post(`https://drinks-api.onrender.com/drinks`, (_req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          idDrink: "11000",
          strDrink: "Mojito",
          strTags:
            "IBA,ContemporaryClassic,Alcoholic,USA,Asia,Vegan,Citrus,Brunch,Hangover,Mild",
          strCategory: "Cocktail",
          strIBA: "Contemporary Classics",
          strAlcoholic: "Alcoholic",
          strGlass: "Highball glass",
          strInstructions:
            "Muddle mint leaves with sugar and lime juice. Add a splash of soda water and fill the glass with cracked ice. Pour the rum and top with soda water. Garnish and serve with straw.",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
          strIngredient1: "Light rum",
          strIngredient2: "Lime",
          strIngredient3: "Sugar",
          strIngredient4: "Mint",
          strIngredient5: "Soda water",
          strMeasure1: "2-3 oz ",
          strMeasure2: "Juice of 1 ",
          strMeasure3: "2 tsp ",
          strMeasure4: "2-4 ",
          strImageSource:
            "https://pixabay.com/photos/cocktail-mojito-cocktail-recipe-5096281/",
          strImageAttribution:
            "anilaha https://pixabay.com/users/anilaha-16242978/",
          strCreativeCommonsConfirmed: "Yes",
          dateModified: "2016-11-04 09:17:09",
        },
      ])
    )
  ),

  rest.get(`https://drinks-api.onrender.com/drinks`, (_req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          idDrink: "11003",
          strDrink: "Negroni",
          strTags: "IBA,Classic",
          strVideo: "https://www.youtube.com/watch?v=Y4LH0FQlU8Q",
          strCategory: "Ordinary Drink",
          strIBA: "Unforgettables",
          strAlcoholic: "Alcoholic",
          strGlass: "Old-fashioned glass",
          strInstructions: "Stir into glass over ice, garnish and serve.",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
          strIngredient1: "Gin",
          strIngredient2: "Campari",
          strIngredient3: "Sweet Vermouth",
          strMeasure1: "1 oz ",
          strMeasure2: "1 oz ",
          strMeasure3: "1 oz ",
          strImageSource: "https://www.thecocktaildb.com/drink/11003",
          strImageAttribution: "TheCocktailDB.com",
          strCreativeCommonsConfirmed: "Yes",
          dateModified: "2015-08-18 15:12:07",
        },
      ])
    )
  ),
];
