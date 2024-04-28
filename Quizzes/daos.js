import quizModel from "./model.js"
import questionModel from "./model.js"

export const createQuiz = (quiz) => {
    delete quiz._id
    return quizModel.create(quiz);
}
export const findAllQuizzes = () => quizModel.find();
export const findQuizById = (quizId) => quizModel.findById(quizId);
export const findQuizByQuizTitle = (title) => quizModel.findOne({ title: title });
export const updateQuiz = (quizId, quiz) => quizModel.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => quizModel.deleteOne({ _id: quizId });

export const createQuestion = (question) => {
    delete question._id
    return questionModel.create(question);
}
export const findAllQuestions = () => questionModel.find();
export const findQuestionById = (quizId) => questionModel.findById(questionId);
export const findQuestionByQuestionTitle = (title) => questionModel.findOne({ title: title });
export const updateQuestion = (quizId, quiz) => questionModel.updateOne({ _id: questionId }, { $set: question });
export const deleteQuestion = (quizId) => questionModel.deleteOne({ _id: questionId });