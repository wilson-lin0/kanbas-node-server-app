import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["Multiple Choice", "True False", "Fill in Multiple Blanks"],
        default: "Multiple Choice"
    },
    title: {
        type: String,
        required: true
    },
    points: Number,
    problem: {
        type: String,
        default: "",
        required: true
    },
    choices: [{
        type: String
    }],
    answer: {
        type: String
    },
    answers: [{
        type: String
    }]
})

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    assignedTo: String,
    type: {
        type: String,
        required: true,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz"
    },
    points: Number,
    assignmentGroup: {
        type: String,
        required: true,
        enum: ["Quizzes", "Exams", "Assignments", "Project"],
        default: "Quizzes"
    },
    shuffleAnswers: {
        type: Boolean,
        default: true
    },
    timeLimit: {
        type: Number,
        default: 20
    },
    multipleAttempts: {
        type: Boolean,
        default: false
    },
    showCorrectAnswers: {
        type: String,
        enum: ["Immediately", "Never"],
        default: "Never"
    },
    accessCode: {
        type: Number,
        default: ''
    },
    oneQuestionAtATime: {
        type: Boolean,
        default: true
    },
    webcamRequired: {
        type: Boolean,
        default: false
    },
    lockQuestion: {
        type: Boolean,
        default: false
    },
    published: {
        type: Boolean,
        default: false
    },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    availability: Boolean,
    questions: [questionSchema],
    numberOfQuestions: {
        type: Number
    },
}, {
    collection: "quizzes"
});

export default quizSchema;