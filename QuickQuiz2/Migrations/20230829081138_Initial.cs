﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace QuickQuiz2.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Questions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Answer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImagePath = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HardDiffDesc = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Questions", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Questions",
                columns: new[] { "Id", "Answer", "Category", "Description", "HardDiffDesc", "ImagePath" },
                values: new object[,]
                {
                    { 1, "Elephant", "Animals", "Introducing the incredible elephant! These gentle giants are found in various parts of the world, like Africa and Asia. They're the largest land animals on Earth and can weigh as much as a few cars put together! Elephants are super smart and have big, floppy ears that help them keep cool. When it's hot, they spray themselves with water using their trunks, which are like their own personal water hoses. These plant-eating pals have a huge appetite and love munching on leaves, grass, and fruits. Elephants live in close-knit families called herds, where they look out for each other. Just like us, they're curious and full of surprises!", "I'm a gentle giant found in places like Africa and Asia. I'm the biggest land animal, with floppy ears, a long trunk, and I love eating plants. Who am I?", "elephant.png" },
                    { 2, "Crocodile", "Animals", "Meet the amazing crocodile! These fascinating reptiles can be found in warm places around the world, like Africa, Asia, and Australia. Crocs love hanging out near water, like rivers and swamps. They're like living dinosaurs with tough, scaly skin and powerful jaws. Crocodiles are fantastic swimmers and often stay hidden underwater, waiting for their next meal. Speaking of meals, they're carnivores, which means they eat meat. From fish to birds, they have a diverse menu! Crocodiles can grow to be really big, sometimes over 20 feet long! Remember, while they might look scary, they're an important part of their ecosystems. Give them their space when you spot one!", "I'm a tough reptile found in warm places around the world like Africa and Asia. I have scaly skin, powerful jaws, and love swimming in rivers. What am I?", "crocodile.png" },
                    { 3, "Hammerhead Shark", "Animals", "Dive into the world of hammerhead sharks! These cool creatures swim in the oceans around the globe, from warm tropical waters to cooler seas. What makes them stand out are their hammer-shaped heads, which are like underwater radar! This shape helps them find food, like squids and fish, even in the dark depths of the ocean. Hammerheads are strong swimmers and often travel in groups called schools. They're not usually interested in bothering humans, so if you spot one, it's best to just admire from a distance. These sharks might look a little strange, but they're perfectly designed for life underwater!", "Dive into the ocean world with an amazing creature known for its hammer-shaped head! This special feature helps it find food and swim together with its friends. Can you guess what this unique underwater animal is?", "hammerhead.png" },
                    { 4, "Raccoon", "Animals", "Get ready to meet the clever raccoon! These furry friends are found in North and Central America. Raccoons are famous for their mask-like markings around their eyes, making them look like little bandits. They're skilled climbers and love hanging out in forests, near rivers, and even in cities. Raccoons are omnivores, which means they eat both plants and animals. They have tiny 'hands' that they use to grab and explore things, just like us! These nocturnal creatures are most active at night and have a knack for finding food anywhere. Whether they're washing their meals or solving puzzles, raccoons are known for their intelligence and adaptability.", "A clever creature with mask-like markings around its eyes, as if it's a little bandit! This furry friend is skilled at climbing, exploring, and finding food anywhere. Can you guess which resourceful animal this is?", "raccoon.png" },
                    { 5, "Quokka", "Animals", "Get ready to meet the adorable quokka, a special animal found in Australia! Quokkas are famous for their friendly smiles and bouncy moves. You can spot them on Rottnest Island, their cozy home. These little marsupials are like mini kangaroos, but extra cute! Quokkas are herbivores, which means they love munching on plants, leaves, and yummy grasses. They're about the size of a cat or small dog, making them perfect pocket-sized pals. Remember, if you see a quokka, let them enjoy their island paradise in peace and take a picture from a safe distance!", "Meet a special animal from Australia! It has a friendly smile, loves plants, and is about the size of a small dog. Can you guess what it is?", "quokka.png" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Questions");
        }
    }
}
