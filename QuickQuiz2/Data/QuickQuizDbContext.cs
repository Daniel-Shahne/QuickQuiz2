using Microsoft.EntityFrameworkCore;
using QuickQuiz2.Models;

namespace QuickQuiz2.Data
{
    public class QuickQuizDbContext : DbContext
    {

        public QuickQuizDbContext()
        {

        }

        public QuickQuizDbContext(DbContextOptions options) : base(options)
        {
                    
        }

        public DbSet<QuestionModel> Questions { get; set; }
    }
}
