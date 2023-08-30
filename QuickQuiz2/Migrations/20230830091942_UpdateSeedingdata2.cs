using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace QuickQuiz2.Migrations
{
    /// <inheritdoc />
    public partial class UpdateSeedingdata2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Questions",
                keyColumn: "Id",
                keyValue: 39,
                column: "ImagePath",
                value: "hummingbird.png");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Questions",
                keyColumn: "Id",
                keyValue: 39,
                column: "ImagePath",
                value: "albatross.png");
        }
    }
}
