# Introduction
## Summary
A small web based quiz game intended for children with questions about animals, but designed in a way to easily be updated to contain questions from other categories too. 
This app has two parts: one where an individual can learn more about the creatures, and another mode where two players face off in a quiz battle to answer questions first for points.

## Tech stack
This app was built with the .NET template for a .NET/React app, with a .NET Core Web API serving as the backend and a CRA React app acting as the front end. The backend is connected
to a SQL database that is added to the users local MSSQL server. This template also contains a proxy server for connecting front- and backend.

# Setup
## Commands
```dotnet run```
Has to be run in the inner QuickQuiz2 folder. Will launch both front- and backend with a connecting proxy server.
