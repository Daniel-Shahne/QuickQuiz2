using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuickQuiz2.Migrations
{
    /// <inheritdoc />
    public partial class TestSeed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Questions",
                columns: new[] { "Id", "Answer", "Category", "Description", "HardDiffDesc", "ImagePath" },
                values: new object[] { 1, "Elephant", "Animal", "Introducing the incredible elephant! These gentle giants are found in various parts of the world, like Africa and Asia. They're the largest land animals on Earth and can weigh as much as a few cars put together! Elephants are super smart and have big, floppy ears that help them keep cool. When it's hot, they spray themselves with water using their trunks, which are like their own personal water hoses. These plant-eating pals have a huge appetite and love munching on leaves, grass, and fruits. Elephants live in close-knit families called herds, where they look out for each other. Just like us, they're curious and full of surprises!", "I'm a gentle giant found in places like Africa and Asia. I'm the biggest land animal, with floppy ears, a long trunk, and I love eating plants. Who am I?", "" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
