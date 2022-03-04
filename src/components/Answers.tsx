import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { AnswerObject } from '../screens/Quiz';
import Buttons from './Button';

interface Answers {
    userAnswer: AnswerObject | undefined;
    answers: string[];
    setCorrectAnswer: any;
    checkAnswer: () => void;
}

const Answers: FC<Answers> = props => {
    return (
        <SafeAreaView>
            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                {props.answers.map((answer, key) => {
                    return (
                        <View key={answer}>
                            <Buttons
                                {...{ key, answer }}
                                correct={props.userAnswer?.correctAnswer === answer}
                                disabled={props.userAnswer ? true : false}
                                onPress={() => {
                                    (props.setCorrectAnswer.current = answer),
                                        props.checkAnswer();
                                }}
                            />
                        </View>
                    );
                })}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        paddingRight: 16,
    },

    textStyle: { padding: 15, fontSize: 15, color: 'blue' },
});

export default Answers;
