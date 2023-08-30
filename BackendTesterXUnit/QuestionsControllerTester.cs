using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace BackendTesterXUnit
{
    public class QuestionsControllerTester
    {
        HttpClient httpClient;

        public QuestionsControllerTester()
        {
            // Arrange httpClient
            httpClient = new HttpClient();
            httpClient.BaseAddress = new Uri("https://localhost:44426/");
        }

        [Fact]
        public async void GetAllQuestions_SuccessfullyFetched()
        {
            var response = await httpClient.GetAsync("/weatherforecast");
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }
    }
}
