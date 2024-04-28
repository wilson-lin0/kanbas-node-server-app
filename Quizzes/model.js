import mongoose from "mongoose";
import quizSchema from "./schema.js";
const quizModel = mongoose.model("QuizModel", quizSchema);
export default quizModel;