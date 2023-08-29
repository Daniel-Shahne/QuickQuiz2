using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using QuickQuiz2.Models;
using QuickQuiz2.Repos.QuestionsRepo;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickQuiz2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class QuestionsController : ControllerBase
    {
        private readonly IQuestionsRepo questionsRepo;

        public QuestionsController(IQuestionsRepo questionsRepo)
        {
            this.questionsRepo = questionsRepo;
        }

        [HttpGet]
        public async Task<ActionResult<List<QuestionModel>?>> GetAll()
        {
            var questions = await this.questionsRepo.GetAllQuestions();

            if (questions == null)
            {
                return NotFound("Could not find any questions");
            }
            else
            {
                return Ok(questions);
            }
        }





    }
}
