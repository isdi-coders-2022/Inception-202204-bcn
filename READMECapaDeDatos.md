# Capa de Datos:

# Datos reactivos

- Provinientes de la API externa, todas de cada Cocktail:

  - Id (no visible): "idDrink"
  - Name: "strDrink"
  - Alcoholic: "strAlcoholic"
  - Category: "strCategory"
  - Type of glass: "strGlass"
  - Instructions: "strInstructions"
  - Ingredient n: "strIngredientn"
  - Measure n: "strMeasuren"
  - Image: "strImageSource"

- Provinientes de la API local:

  - Id (no visible): "idDrink"
  - IdOwnDrink: Diferente a la API externa
  - Name: "strDrink"
  - Alcoholic: "strAlcoholic"
  - Category: "strCategory"
  - Type of glass: "strGlass"
  - Instructions: "strInstructions"
  - Ingredient n: "strIngredientn"
  - Measure n: "strMeasuren"
  - Image: "strImageSource"

- Estaticos:

  - Endpoints:
    - Búsqueda por Alcoholic: www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
    - Búsqueda por Non/Alcoholic: www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic
    - Búsqueda por nombre de cocktail: www.thecocktaildb.com/api/json/v1/1/search.php?s=
    - Búsqueda de detalle por id: www.thecocktaildb.com/api/json/v1/1/lookup.php?i=
    - B
