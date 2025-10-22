import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type QuestionCardProps = {
  question: string;
  option: string[];
  handleAnswerSelection: (selected: string) => void;
};

export default function QuestionCard({
  question,
  option,
  handleAnswerSelection
}: QuestionCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question}</Text>
      {option.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionBtn}
          onPress={() => handleAnswerSelection(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  optionBtn: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
    alignItems: 'center'
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500'
  }
});
