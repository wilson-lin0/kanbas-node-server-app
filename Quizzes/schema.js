import mongoose from "mongoose";
const quizzSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
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
    timeLimit: Boolean,
    multipleAttempts: String,
    showCorrectAnswers: String,
    accessCode: Date,
    role: {
        type: String,
        enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
        default: "USER",
    },
},
    {
        collection: "quizz"
    });
export default quizzSchema;