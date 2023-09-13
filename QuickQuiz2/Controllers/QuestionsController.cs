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
            try
            {
                var questions = await questionsRepo.GetAllQuestions();

                return Ok(questions);
            }
            catch (NoEntriesReceivedException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<QuestionModel>> GetQuestionById(int id)
        {
            try
            {
                //retrieve question by ID
                var question = await questionsRepo.GetQuestionById(id);

                return Ok(question);
            }
            catch (NoEntriesReceivedException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("random/{amount}")]
        public async Task<ActionResult<List<QuestionModel>>> GetRandomQuestions(int amount)
        {
            try
            {
                //retrieve random questions
                var questions = await questionsRepo.GetAmountOfQuestions(amount);

                return Ok(questions);
            }
            catch (NoEntriesReceivedException ex)
            {
                return NotFound(ex.Message);
            }
            catch (InvalidQuestionAmountException ex)
            {
                return BadRequest(ex.Message);
            }
        }




    }
}
