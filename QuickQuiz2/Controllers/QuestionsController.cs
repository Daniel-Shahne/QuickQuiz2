using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using QuickQuiz2.Models;
using QuickQuiz2.Repos.QuestionsRepo;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace QuickQuiz2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
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
            //questions
            var questions = await questionsRepo.GetAllQuestions();

            if (questions == null)
            {
                return NotFound("Could not find any questions");
            }
            else
            {
                return Ok(questions);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<QuestionModel>> GetQuestionById(int id)
        {
            //questions/1
            var question = await questionsRepo.GetQuestionById(id);
            if (question == null)
            {
                return NotFound($"Could not find question with {id}");
            }
            return Ok(question);
        }

        [HttpGet("random/{amount}")]
        public async Task<ActionResult<List<QuestionModel>>> GetRandomQuestions(int amount)
        {
            //questions/random/2
            var questions = await questionsRepo.GetAmountOfQuestions(amount);
            if (questions == null)
            {
                return NotFound(); // Or return an appropriate error response
            }
            return Ok(questions);
        }




    }
}
