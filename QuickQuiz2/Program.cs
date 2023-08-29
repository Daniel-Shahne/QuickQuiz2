using Microsoft.EntityFrameworkCore;
using QuickQuiz2.Data;
using QuickQuiz2.Repos.QuestionsRepo;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

string? connectionString = builder.Configuration.GetConnectionString("QQDbConnection");
builder.Services.AddDbContext<QuickQuizDbContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddScoped<IQuestionsRepo, QuestionsRepo>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<QuickQuizDbContext>();
    context.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
