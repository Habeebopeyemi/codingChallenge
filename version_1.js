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
        Question.prototype.answerChecker = function(ans,callBack){
            var sc
            if(ans === this.correct_answer){
                console.log('Correct!')
                sc = callBack(true)
            }else{
                console.log('Wrong!')
                sc = callBack(false)
            }
            this.displayScore(sc)
        }

        // creating a method in the Question constructor to display score
        Question.prototype.displayScore = function(score){
            console.log('Your score is: '+score)
            console.log('------------------------------------')
        }

        var questionArray = [mathQuestion,currentAffairs,englishQuestion]

        // using the power of CLOSURE to keep track of our scores
        function score(){
            var sc = 0
            return function(correct){
                // correct is expected to return a boolean value as set in the answerChecker prototype
                if(correct){
                    sc++
                }
                return sc
            }
        }

        var keepScore = score()
        // function to post another question by default
        function nextQuestion(){
            var selectionAtRandom = Math.floor(Math.random() * (questionArray.length))
            questionArray[selectionAtRandom].randomSelection()
            // receiving answers from users
            var submittedAnswer = prompt('Please input the correct answer number into the form below or quit the game by typing exit,thanks')

            // creating the game exit plan
            if(submittedAnswer !== 'exit'){
                // converting the answer from string to integer
                var submittedAnswer = parseInt(submittedAnswer)
                
                questionArray[selectionAtRandom].answerChecker(submittedAnswer,keepScore)

                nextQuestion()
            }
        }
       nextQuestion()
})()
