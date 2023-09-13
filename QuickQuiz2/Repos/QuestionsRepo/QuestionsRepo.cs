using Microsoft.EntityFrameworkCore;
using QuickQuiz2.Data;
using QuickQuiz2.Models;

namespace QuickQuiz2.Repos.QuestionsRepo
{
    public class QuestionsRepo : IQuestionsRepo
    {
        private readonly QuickQuizDbContext context;

        public QuestionsRepo(QuickQuizDbContext context)
        {
            this.context = context;
        }

        public async Task<List<QuestionModel>?> GetAllQuestions()
        {

            var allQuestions = await context.Questions.ToListAsync();

            return allQuestions ?? throw new NoEntriesReceivedException("Failed to retrieve all questions from database");
        }

        public async Task<List<QuestionModel>?> GetAmountOfQuestions(int amount)
        {

            //check if there are any questions
            List<QuestionModel>? allQuestions = await GetAllQuestions();

            //check amount of questions

            if (amount > allQuestions?.Count || amount < 1)
            {
                throw new InvalidQuestionAmountException("Received invalid amount for questions to retrieve from database");
            }

            Random random = new();

            //shuffle the list and take the first {amount} of elements
            return allQuestions?.OrderBy(x => random.Next()).Take(amount).ToList();

        }

        public async Task<QuestionModel?> GetQuestionById(int questionId)
        {
            var question = await context.Questions.FirstOrDefaultAsync(q => q.Id == questionId);

            return question ?? throw new NoEntriesReceivedException("Failed to retrieve question with provided id");
        }
    }
}
