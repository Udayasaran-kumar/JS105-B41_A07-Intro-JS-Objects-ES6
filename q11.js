function discountchecker(age){
 let dis = age >= 60 ? "Eligible for Senior Discount": age <=0 ? "Invalid Age":"Not Eligible for Senior Discount";
console.log(dis); 
}
discountchecker(65);
discountchecker(18);
discountchecker(-5);
discountchecker(0);
