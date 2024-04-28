import * as dao from "./daos.js";

export default function QuizRoutes(app) {
    let globalQuiz;

    const createQuiz = async (req, res) => {
        const quiz = await dao.createQuiz(req.body);
        res.json(quiz);
    };

    const deleteQuiz = async (req, res) => {
        const status = await dao.deleteQuiz(req.params.quizId);
        res.json(status);
    };

    const findAllQuizzes = async (req, res) => {
        const quizzes = await dao.findAllQuizzes();
        res.json(quizzes);
    };
    const findQuizById = async (req, res) => {
        const quiz = await dao.findQuizById(req.params.quizId);
        res.json(quiz);
    };

    const editQuiz = async (req, res) => {
        const { quizId } = req.params;
        const status = await dao.updateQuiz(quizId, req.body);
        const currentQuiz = await dao.findQuizById(quizId);
        globalQuiz = currentQuiz;
        res.json(status);
    };

    const detail = (req, res) => {
        let currentQuiz = globalQuiz;
        res.json(currentQuiz);
    };
    const createQuestion = async (req, res) => {
        const question = await dao.createQuestion(req.body);
        res.json(question);
    };

    app.post("/api/quizzes", createQuiz);
    app.get("/api/quizzes", findAllQuizzes);
    app.get("/api/quiz/:quizId", findQuizById);
    app.put("/api/quizzes/:quizId", editQuiz);
    app.delete("/api/quizzes/:quizId", deleteQuiz);
    app.get("/api/quizzes/detail", detail);
    app.post("/api/question", createQuestion);
}