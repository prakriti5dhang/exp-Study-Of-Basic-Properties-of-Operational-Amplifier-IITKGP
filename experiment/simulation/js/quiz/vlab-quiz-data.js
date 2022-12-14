/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var quizJSON = {
    "info": {
        "name": "Test Your Knowledge!!",
        "main": "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<p>Learn More.</p>",
        "level1": "Jeopardy Ready",
        "level2": "Jeopardy Contender",
        "level3": "Jeopardy Amateur",
        "level4": "Jeopardy Newb",
        "level5": "Stay in school, kid..." // no comma here
    },
    "questions": [
        {// Question 1 - Multiple Choice, Single True Answer
            "q": "A differential amplifier ",
            "a": [
                {"option": " is a part of an Op-pam ", "correct": false},
                {"option": "has two outputs ", "correct": false},
                {"option": " has one input and one outputs ", "correct": false},
                {"option": " Both A and B", "correct": true} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "3.	With zero volts on both inputs, an OP-amp ideally should have an output",
            "a": [
                {"option": "equal to the negative supply voltage", "correct":false},
                {"option": " equal to zero", "correct": true},
                {"option": " equal to positive supply voltage ", "correct":false},
                {"option": " equal to CMRR", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
        },
        {// Question 3 - Multiple Choice, Single True Answer
            "q": "5.	For an Op-amp with negative feedback, the output is",
            "a": [
                {"option": "increased", "correct": false},
                {"option": "equal to the input", "correct": false},
                {"option": " fed back to the inverting input", "correct": true},
                {"option": " fed back to the noninverting input", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 4 - Multiple Choice, Single True Answer
            "q": " The Op-pam can amplify",
            "a": [
                {"option": "DC signals only", "correct": false},
                {"option": "AC signal only ", "correct": false},
                {"option": "  both AC and DC signals ", "correct": true},
                {"option": " Neither AC nor DC signals", "correct": false} // no comma here
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        },
		{// Question 5 - Multiple Choice, Single True Answer
            "q": "  An ideal operational amplifier has",
            "a": [
                {"option": "Infinite bandwidth", "correct": true},
                {"option": "Infinite output impedence", "correct": false},
                {"option": "Zero input impedence ", "correct": false},
                {"option": "All of the above", "correct": false} // no comma here 
				//equation is in form  Em sin wt. w = 100 ??? rad/s. w=2 ??? x frequency. so frequency = w/2??? =100???/2???=50
            ],
            "correct": "",
            "incorrect": "" // no comma here
       
        }
		//{// Question 6 - Multiple Choice, Single True Answer
            //"q": " The switching speed could be improved by using",
           // "a": [
              //  {"option": " Zener diode at output", "correct": false},
              //  {"option": " Two Zener diode connected back to back at output", "correct": true},
              //  {"option": "Feed back resistor", "correct": false},
               // {"option": "Capacitor in feedback", "correct": false} // no comma here 
				//equation is in form  Em sin wt. w = 100 ??? rad/s. w=2 ??? x frequency. so frequency = w/2??? =100???/2???=50
            //],
            //"correct": "",
           // "incorrect": "" // no comma here
       
       // }
    ]
};




 