using QuickQuiz2.Models;

namespace QuickQuiz2.Static
{
    public class SeedingData
    {
        List<QuestionModel> questionModels = new List<QuestionModel>
        {
            new QuestionModel()
            {
                Id = 1,
                Category = "Animals",
                Answer = "Elephant",
                ImagePath = ""
            }
        };



    }
}
