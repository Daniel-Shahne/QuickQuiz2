using QuickQuiz2.Models;

namespace QuickQuiz2.Repos.QuestionsRepo
{
    public interface IQuestionsRepo
    {
        Task<List<QuestionModel>?> GetAllQuestions();
        Task<List<QuestionModel>?> GetAmountOfQuestions(int amount);
        Task<QuestionModel?> GetQuestionById(int questionId);
        
    }
}
