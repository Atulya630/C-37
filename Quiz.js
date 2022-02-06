class Quiz {
    constructor (){}

getstate(){
    var gamestateRef = database.ref('gamestate');
      gamestateRef.on("value",function(data){
          gamestate = data.val();
 } ) 
   
}

update(state){
    database.ref('/').update({
        gamestate: state
    });
}


async start(){
    if(gameState === 0){
       contestant = new Contestant();
    var contestantCountRef = await database.ref('contestantCount').once("value");
if(contestantCountRef.exists()){
    constestantCount = contestantCountRef.val();
    contestant.getCount();
}
question = new question()
question.display();
    }
}

play(){

    question.hide();

    backgroundImage("Red");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340,50);
    text("-----------------------------",320, 65);
    Contestant.getPlayerInfo();
    if(allContestants !== undefined){
        debugger;
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        text("*Note: Contestant who answered right are highlighted in green color!",130,230);
    
    for(var plr in allContestants){
        debugger;
        var correctAns = "2";

        //if (correctAns !== allContestants[plr].answer){
          //fill("Green")
          //}
          //else{
              //fill("red");
          //}

          //if (correctAns === allContestants[plr].answer){
              //fill("Green")
          //}
          //else{
              //fill("red");
          //}

          if (correctAns === allContestants[plr].answer){
            fill("green")
          }
          else{
              fill("red");
          }
          
          //if (correctAns = allContestants[plr].answer){
              // fill ("Green")
          //}
          //else{
              //fill("red");
          //}

          display_Answers+=30;
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250, display_Answers);
        }
      }
    }
  }