class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
  //checar a velocidade do pig no console
  // diminuir o valor da condição para ser mais facil de derrota-lo
   console.log("pig velocity= " + this.body.speed);
   if(this.body.speed < 3){

    super.display();
   }

   else{
     World.remove(world, this.body);
     push();
     //aumentar o valor de decremente da visibilidade para o porco sumir mais rápido.
     this.Visiblity = this.Visiblity - 3;

     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }



};
