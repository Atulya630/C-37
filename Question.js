class Question {

    constructor() {
        this.title = createElement('h1');
        this.input1 = createInput("Enter your name here . . .");
        this.input2 = createInput("Enter correct answer option No..")
        this.button = createButton('submit');
        this.button2 = createButton('reset');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createEleemnt('h4');
        this.option3 = createElement('h4');
        this.option = createEleemnt('h4');
    }

    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.button2.hide();
        this.input2.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);
        this.option3.html("3: Estimate");
        this.option3.position(150,140);
        this.option4.html("4: Example");
        this.option4.position(150,160);

        this.input1.position(150,230);
        this.input2.position(350,230);
        this.button.positon(290,300);
        this.button2.position(360,300);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestant.update();
            contestant.updateCount(contestantCount);
        });

        this.button2.mousePressed(()=>{
            contestant.updateCount(0)
            quiz.update(0)
            var ref = database.ref("contestants")
            ref.remove()
        })

    }
}