using Microsoft.AspNetCore.Mvc;
using QuickQuiz2.Controllers;
using QuickQuiz2.Data;
using QuickQuiz2.Models;
using QuickQuiz2.Repos.QuestionsRepo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Xunit.Abstractions;

namespace BackendTesterXUnit
{
    public class QuestionsControllerTester
    {
        // outputhelper for printing to test explorer
        private readonly ITestOutputHelper output;

        // Database connection field variables
        QuickQuizDbContext context;
        QuestionsRepo repo;
        // Web API field variables
        QuestionsController questionsController;

        public QuestionsControllerTester(ITestOutputHelper output)
        {
            // Arrange database connections
            context = new();
            repo = new(context);

            // Arrange the controller
            questionsController = new(repo);
            
            // Arrange outputhelper
            this.output = output;
        }

        /// <summary>
        /// Tests if the GetAll action method of the QuestionsController
        /// web api successfully responds (i.e status code 200) and if
        /// it contains a List<QuestionModel>, printing out the name
        /// of the first result.
        /// </summary>
        [Fact]
        public async void GetAllQuestions_SuccessfullyFetched()
        {
            // Getting the resulting object of controllers method
            var actionResult = await questionsController.GetAll();
            var objectResult = actionResult.Result as ObjectResult;
            
            // Objectresult might be null if casting failed
            if (objectResult == null)
            {
                // Handle the case where objectResult is null
                Assert.True(false, "objectResult is null");
            }

            // Asserting and printing the status code
            Assert.Equal(200, objectResult.StatusCode);
            output.WriteLine($"Status code: {objectResult.StatusCode}");

            // Checking if the response contains a list of QuestionModel's
            var questions = objectResult.Value as List<QuestionModel>;
            // Check if questions is not null
            if (questions != null)
            {
                // Assert if questions is of any length, and print
                Assert.True(questions.Count >= 0);
                output.WriteLine($"Name of the first item in database: {questions[0].Answer}");
            }
            else
            {
                // Handle the case where questions is null
                Assert.True(false, "questions is null");
            }
        }
    }
}
