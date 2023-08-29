using Microsoft.EntityFrameworkCore;
using QuickQuiz2.Models;
using QuickQuiz2.Static;

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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QuestionModel>().HasData(SeedingData.AnimalQuestions);
        }

    }

}
