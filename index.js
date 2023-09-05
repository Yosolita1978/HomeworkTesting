//writing a function
function clothingRecommendation(temp, weather){

    let clothing = "";
    //we decided include 0
    if((temp <=0 && weather === "Snowy")){
      clothing = "Wear a heavy coat and gloves.";
      //we decided to include 10
    } else if(temp <= 10 && weather === "Rainy"){
      clothing = "Wear a raincoat and boots.";
    } else if(temp > 10 && temp < 20 && weather === "Sunny" ){
      clothing = "Wear a light jacket.";
      // we decide to include 20
    } else if(temp >= 20 && weather === "Sunny"){
      clothing = "Wear shorts and a t-shirt.";
    } else{
      clothing = "Wear regular clothes.";
    }
    return clothing
  }

  module.exports = clothingRecommendation;