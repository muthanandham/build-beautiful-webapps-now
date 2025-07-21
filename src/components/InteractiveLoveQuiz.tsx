import { useState } from "react";
import { Heart, Award, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quizQuestions = [
  {
    question: "What was the first thing I noticed about you?",
    options: [
      "Your beautiful smile",
      "Your sparkling eyes", 
      "Your infectious laugh",
      "Your kind heart"
    ],
    correctAnswer: 0,
    explanation: "Your smile lit up the entire room and I knew I had to get to know you!"
  },
  {
    question: "What's our favorite activity to do together?",
    options: [
      "Watching movies",
      "Going on adventures",
      "Cooking together", 
      "Just talking for hours"
    ],
    correctAnswer: 3,
    explanation: "We can talk about anything and everything - time just disappears when we're together!"
  },
  {
    question: "What song always reminds me of you?",
    options: [
      "Perfect by Ed Sheeran",
      "All of Me by John Legend",
      "Thinking Out Loud by Ed Sheeran",
      "A Thousand Years by Christina Perri"
    ],
    correctAnswer: 1,
    explanation: "Because you truly are all of me - every verse of that song describes how I feel about you!"
  },
  {
    question: "What's my favorite thing about your personality?",
    options: [
      "Your sense of humor",
      "Your compassion",
      "Your intelligence",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "How could I choose just one? You're funny, caring, brilliant, and so much more!"
  },
  {
    question: "What do I love most about our relationship?",
    options: [
      "How comfortable we are together",
      "How we make each other laugh",
      "How we support each other",
      "All of these and more"
    ],
    correctAnswer: 3,
    explanation: "Every day with you is a gift, and I love every single aspect of what we have together!"
  }
];

const InteractiveLoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) {
      return "Perfect! You know our love story by heart! 💕";
    } else if (percentage >= 80) {
      return "Amazing! You really pay attention to our special moments! 💖";
    } else if (percentage >= 60) {
      return "Great job! You remember the important things! 💗";
    } else {
      return "We need to make more memories together! 💝";
    }
  };

  if (quizComplete) {
    return (
      <section className="py-20 px-6 bg-gradient-soft">
        <div className="max-w-2xl mx-auto text-center">
          <Award className="mx-auto mb-6 text-accent-foreground animate-pulse-heart" size={80} />
          <h2 className="text-4xl font-bold text-foreground mb-6">Quiz Complete!</h2>
          <Card className="bg-card/90 backdrop-blur-sm shadow-romantic">
            <CardContent className="p-8">
              <div className="text-6xl font-bold text-primary mb-4">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                {getScoreMessage()}
              </p>
              <Button variant="romantic" size="lg" onClick={resetQuiz}>
                <RefreshCw className="mr-2" size={20} />
                Take Quiz Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="mx-auto mb-4 text-primary animate-pulse-heart" size={50} />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How Well Do You Know Our Love?
          </h2>
          <p className="text-xl text-muted-foreground">
            A fun little quiz about us and our beautiful journey together
          </p>
        </div>

        <Card className="bg-card/90 backdrop-blur-sm shadow-romantic">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-muted-foreground">
                Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
              </span>
            </div>
            <CardTitle className="text-2xl text-foreground leading-relaxed">
              {question.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4 mb-6">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    showResult
                      ? index === question.correctAnswer
                        ? "romantic"
                        : selectedAnswer === index
                        ? "outline"
                        : "ghost"
                      : "outline"
                  }
                  className={`w-full p-6 h-auto text-left justify-start text-wrap ${
                    !showResult ? "hover:bg-secondary" : ""
                  }`}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                >
                  <span className="mr-4 font-bold text-primary">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}
            </div>

            {showResult && (
              <div className="mb-6 p-6 bg-secondary rounded-lg animate-fade-in-up">
                <p className="text-foreground leading-relaxed">
                  <Heart className="inline mr-2 text-primary" size={18} />
                  {question.explanation}
                </p>
              </div>
            )}

            {showResult && (
              <div className="text-center">
                <Button variant="gold" size="lg" onClick={nextQuestion}>
                  {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                  <Heart className="ml-2" size={18} />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InteractiveLoveQuiz;