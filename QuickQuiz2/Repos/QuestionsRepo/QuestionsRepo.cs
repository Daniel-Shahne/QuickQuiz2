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
            return await context.Questions.ToListAsync();
        }

        public async Task<List<QuestionModel>?> GetAmountOfQuestions(int amount)
        {
            //check if there are any questions
            List<QuestionModel>? allQuestions = await GetAllQuestions();

            if (allQuestions == null)
            {
                //TODO - error handling
                return null;
            }

            //check amount of questions
            int amountOfQuestions = allQuestions.Count;

            if (amount > amountOfQuestions)
            {
                //TODO - error handling
                return null;
            }

            Random random = new();

            //shuffle the list and take the first {amount} of elements
            return allQuestions.OrderBy(x => random.Next()).Take(amount).ToList();

        }

        public async Task<QuestionModel?> GetQuestionById(int questionId)
        {
            return await context.Questions.FirstOrDefaultAsync(q => q.Id == questionId);
        }
    }
}
