using System.ComponentModel.DataAnnotations;

namespace QuickQuiz2.Models
{
    public class QuestionModel
    {
        [Key]
        public int Id { get; set; }
        public string Category { get; set; } = null!;
        public string Answer { get; set; } = null!;
        public string ImagePath { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string HardDiffDesc { get; set; } = null!;
    }
}
