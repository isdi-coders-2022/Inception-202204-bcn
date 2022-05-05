import {
  addDrinkActionCreation,
  deleteDrinkActionCreation,
  editDrinkActionCreation,
  loadAlcoholicDrinksActionCreation,
  loadLatestDrinksActionCreation,
  loadMostPopularActionCreation,
  loadNonAlcoholicDrinksActionCreation,
} from "./creador";
import {
  addDrinkActionType,
  deleteDrinkActionType,
  editDrinkActionType,
  loadAlcoholicDrinksActionType,
  loadLatestDrinksActionType,
  loadMostPopularDrinksActionType,
  loadNonAlcoholicDrinksActionType,
} from "./newDrinkActionType";

describe("Given a deleteDrinkActionCreation function", () => {
  describe("When an id '3' it's sent", () => {
    test("Then it should return an id '3'", () => {
      const id = 3;
      const expectAction = { type: deleteDrinkActionType, id };

      const result = deleteDrinkActionCreation(id);

      expect(result).toEqual(expectAction);
    });
  });
});

describe("Given a addDrinkActinCreation function", () => {
  describe("When an 'Margarita' cocktail it's sent", () => {
    test("Then it should return a 'Margarita' cocktail", () => {
      const drink = { strDrink: "Margarita" };
      const expectAction = { type: addDrinkActionType, drink };

      const result = addDrinkActionCreation(drink);

      expect(result).toEqual(expectAction);
    });
  });
});

describe("Given an editDrinkActinCreation function", () => {
  describe("When an 'Sant Francisco' cocktail it's sent", () => {
    test("Then it should return a 'San Francisco' cocktail", () => {
      const drink = { strDrink: "San Francisco" };
      const expectAction = { type: editDrinkActionType, drink };

      const result = editDrinkActionCreation(drink);

      expect(result).toEqual(expectAction);
    });
  });
});

describe("Given a loadAlcoholicDrinksActionCreation", () => {
  describe("When it receives a list of 2 cocktails", () => {
    test("Then it should return a list of 2 cocktails", () => {
      const drinks = [
        {
          strDrink: "Afterglow",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
          idDrink: "12560",
        },
        {
          strDrink: "Alice Cocktail",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
          idDrink: "12562",
        },
      ];

      const expectAction = { type: loadAlcoholicDrinksActionType, drinks };
      const result = loadAlcoholicDrinksActionCreation(drinks);

      expect(expectAction).toEqual(result);
    });
  });
});

describe("Given a loadNonAlcoholicDrinksActionCreation", () => {
  describe("When it receives a list of 2 cocktails", () => {
    test("Then it should return a list of 2 cocktails", () => {
      const drinks = [
        {
          strDrink: "Banana Cantaloupe Smoothie",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
          idDrink: "12708",
        },
        {
          strDrink: "Banana Milk Shake",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
          idDrink: "12654",
        },
      ];

      const expectAction = { type: loadNonAlcoholicDrinksActionType, drinks };
      const result = loadNonAlcoholicDrinksActionCreation(drinks);

      expect(expectAction).toEqual(result);
    });
  });
});

describe("Given a loadMostPopularActionCreation", () => {
  describe("When it receives a list of 2 cocktails", () => {
    test("Then it should return a list of 2 cocktails", () => {
      const drinks = [
        {
          strDrink: "Apple Berry Smoothie",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
          idDrink: "12710",
        },
        {
          strDrink: "Apple Karate",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
          idDrink: "12564",
        },
      ];
      const expectAction = { type: loadMostPopularDrinksActionType, drinks };
      const result = loadMostPopularActionCreation(drinks);

      expect(expectAction).toEqual(result);
    });
  });
});

describe("Given a loadLatestDrinksActionCreation", () => {
  describe("When it receives a list of 2 cocktails", () => {
    test("Then it should return a list of 2 cocktails", () => {
      const drinks = [
        {
          strDrink: "Aloha Fruit punch",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
          idDrink: "12862",
        },
        {
          strDrink: "Apello",
          strDrinkThumb:
            "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
          idDrink: "15106",
        },
      ];

      const expectAction = { type: loadLatestDrinksActionType, drinks };
      const result = loadLatestDrinksActionCreation(drinks);

      expect(expectAction).toEqual(result);
    });
  });
});
