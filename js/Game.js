class Game {
  constructor() {
   
  }

  getState(){
    var gameStatered=database.ref("gameState")
    gameStatered.on("value",function(data){gameState=data.val()})
   }
  
   update(state){
  database.ref("/").update({gameState:state})
   }


  

  start() {
    player = new Player();
playerCount=player.getCount()
    form = new Form();
    form.display();
    car1=createSprite(width/2-50,height-100)
    car1.addImage("car1",car1Img)
    car1.scale=0.07

    car2=createSprite(width/2+100,height-100)
    car2.addImage("car2",car2Img)
    car2.scale=0.07
  cars=[car1,car2]
  }


handleElements(){
form.hide()
form.titleImg.position(40,50)
form.titleImg.class("gameTitleAfterEffect")
}

play(){
  this.handleElements();
  Player.getPlayersInfo()
if(allPlayers!=undefined){
image(pista,0,-height*5,width,height*6)
drawSprites()
}
}

}