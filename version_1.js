// wrapping all our code inside an immediately invoked function expression

(function(){
    // building a function constructor called question
        var Question = function(question,answers,correct_answer){
            this.question = question,
            this.answers = answers,
            this.correct_answer = correct_answer
        }

        // creating different question from the constructor above
        var mathQuestion = new Question(
            'How can you differentiate a decimal from an integer ?',
            ['one is number and one is string','both are number','integer is whole number while decimal has point'],
            2
        )

        // console.log(mathQuestion.question,mathQuestion.answers)
        var currentAffairs = new Question(
            'What is the name of FCT ?',['Kaduna','Abuja','Lagos'],
            1
        )

        var englishQuestion = new Question(
            'The name of anybody,animal,place or things is what ?',
            ['Noun','Phrase','Verb'],
            0
        )
        
        var questionArray = [mathQuestion,currentAffairs,englishQuestion]
        var selectionAtRandom = Math.floor(Math.random() * (questionArray.length))

        //  console.log(questionArray)
        //  choosing question at random
        
        Question.prototype.randomSelection = function(){
            console.log(this.question)

            // looping through the answer array
            for(var i = 0;i < this.answers.length;i++){
                console.log(i+': '+this.answers[i])
            } 
        }

        // creating a prototype for checking answer
        Question.prototype.answerChecker = function(ans){
            if(ans === this.correct_answer){
                console.log('Correct!')
            }else{
                console.log('Wrong!')
            }
        }

        questionArray[selectionAtRandom].randomSelection()
        // receiving answers from users
        var submittedAnswer = prompt('Please input the correct answer number into the form below,thanks')
        // converting the answer from string to integer
        var submittedAnswer = parseInt(submittedAnswer)

        questionArray[selectionAtRandom].answerChecker(submittedAnswer)
})()


