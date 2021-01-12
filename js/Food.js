class Food {
constructor(){
this.milk= loadImage("images/Milk.png");
 this.foodStock=0;
 this.lastFed;

 
}
getFoodStock(){
return this.foodStock;
}

updateFoodStock(foodStock){
this.foodStock=foodStock;
}

deductFoodStock(){
if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
}

display(){
  var x  


    
}
}
}
