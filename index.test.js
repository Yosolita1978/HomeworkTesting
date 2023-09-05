const clothingRecommendation = require('./index.js');


describe("Testing the clothing Recommendation function", () => {
  //console.log(clothingRecommendation(-5, "Snowy")); 

  test("testing with snowy weather", () => {
    expect(clothingRecommendation(-5, "Snowy")).toBe("Wear a heavy coat and gloves.");

  });

  //console.log(clothingRecommendation(15, "Sunny"))

  test("testing with Sunny weather", () => {
    expect(clothingRecommendation(15, "Sunny")).toBe("Wear a light jacket.")

  });

})


describe("testing vanilla JS itself", () => {

  test("Sanity check", () => {
    expect(true).toBe(true);
  });

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test("two objects", () => {
    const demo = {"name": "John", "age": 30};
    expect(demo).not.toEqual({})
  })

  test("function sum() adds two numbers", () => {
    const sum = (a, b) => {
      return a + b;
    }
    expect(sum(1, 2)).toBe(3);
  })
})
