import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QuestionCard from '../components/QuestionCard';
import { questions } from '../json/questions';

type Question = {
  questions: string;
  options: string[];
  answer: string;
};

export default function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleAnswerSelection = (selectedOption: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Kuis Selesai</Text>
          <Text style={styles.scoreText}>
            Skor anda: {score} dari {questions.length}
          </Text>
          <TouchableOpacity style={styles.resetBtn} onPress={resetQuiz}>
            <Text style={styles.resetBtnText}>Ulangi Kuis</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kuis Pengetahuan Umum</Text>
      <Text style={styles.progressText}>
        pertanyaan dari {currentQuestionIndex + 1} dari {questions.length}
      </Text>

      <QuestionCard
        question={currentQuestion.questions}
        option={currentQuestion.options}
        handleAnswerSelection={handleAnswerSelection}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    padding: 20,
    justifyContent: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  progressText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10
  },
  resultContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 20
  },
  resetBtn: {
    backgroundColor: 'blue',
    padding: 25,
    borderRadius: 8
  },
  resetBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
