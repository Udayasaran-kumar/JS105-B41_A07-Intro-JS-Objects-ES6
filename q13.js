function range(price){
 var category = price >= 1000 ? "Expensive"
 : price >=500 ? "Moderate"
 : price<500  ? "Affordable";
 console.log(category);
if(price==0){
  console.log("Free");
} else if(price<0){
  console.log("Invalid Price");
}   
console.log(category); 
}
range(1200);
range(950);
range(452);
range(0);
range(-5);
