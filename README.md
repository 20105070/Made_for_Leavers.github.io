# _Made for Leavers_ - README.md
The project is called _Made for Leavers_ as it is made for prospective students, mostly school leavers, who are looking to leave their country or city to study. Thus, the one primary objective of this project is to provide a website that helps prospective students find their right university in their right country or city. This one primary objective will be achieved by the successful implementation of this project’s two secondary objectives. Firstly, _Made for Leavers_ must be a centralised universities hub that takes a user’s input of a country or city and outputs all the universities in that country or city as clickable links to their websites, which can be saved, loaded, and removed from a database. Secondly, _Made for Leavers_ must have a ChatGPT system embedded into _Made for Leavers_ that acts as a quasi-guidance counsellor to prospective students. The APIs of the Hipo Labs API and the ChatGPT API will help prospective students find their right university in their right country or city.

### 1 - Use-Cases:
- User searches country or city.	
- User saves searched university.	
- User loads saved universities.	
- User removes loaded university.
- User enters username and password.	
- User asks question to ChatGPT guidance counsellor.

### 2 - Hosting:
- Download README.md from https://github.com/20105070/Made_for_Leavers.github.io.
- Open SQL Server Management Studio, click Connect, click New Query, paste the script from README.md's 3, and click Execute.
- Download Made_for_LeaversApi from https://github.com/20105070/Made_for_Leavers.github.io.
- Open Visual Studio 2022 as administrator, click Open a project or solution, open Made_for_LeaversApi.sln, click Start Without Debugging.
- Download Made_for_Leavers from https://github.com/20105070/Made_for_Leavers.github.io.
- Open Visual Studio Code, click File, click Open Folder, click Made_for_Leavers, click Terminal, click New Terminal, type ng serve, and press enter.
- Go to http://localhost:4200/.
- Use _Made for Leavers_ according to README.md's 1.

### 3 - Database:
CREATE DATABASE Made_for_Leavers;  
GO  
USE Made_for_Leavers;  
GO  
CREATE TABLE Universities (  
name NVARCHAR(50) NOT NULL PRIMARY KEY,  
webPage NVARCHAR(50) NOT NULL  
);
