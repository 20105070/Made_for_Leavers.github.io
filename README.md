# _Made for Leavers_ - README.md
The project is called _Made for Leavers_ as it is made for prospective students, mostly school leavers, who are looking to leave their country or city to study. Thus, the one primary objective of this project is to provide a website that helps prospective students find their right university in their right country or city. This one primary objective will be achieved by the successful implementation of this project’s two secondary objectives. Firstly, _Made for Leavers_ must be a centralised universities hub that takes a user’s input of a country or city and outputs all the universities in that country or city as clickable links to their websites, which can be saved, loaded, and removed from a database. Secondly, _Made for Leavers_ must have a Ninja AI system embedded into _Made for Leavers_ that acts as a quasi-guidance counsellor to prospective students. The API/AI of the Hipo Labs API and the Ninja AI will help prospective students find their right university in their right country or city.

### 1 - Use-Cases:
- User registers email and password.	
- User logs-in with email and password.	
- User searches country or city.	
- User saves searched university.
- User asks question to Ninja AI guidance counsellor.	
- User loads saved universities.
- User removes loaded university.	
- User logs-out.

### 2 - Requirements:
- _Made for Leavers_ signs-up User via email and password.	
- _Made for Leavers_ signs-in User that entered correct email and password.	
- _Made for Leavers_ displays all universities in inputted country or city.	
- _Made for Leavers_ posts university into database.
- _Made for Leavers_ provides answers via Ninja AI guidance counsellor.	
- _Made for Leavers_ gets universities from database.
- _Made for Leavers_ deletes university from database.	
- _Made for Leavers_ logs-out User from _Made for Leavers_.

### 3 - Hosting:
- Download README.md from https://github.com/20105070/Made_for_Leavers.github.io.
- Open SQL Server Management Studio, click Connect, click New Query, paste the script from README.md's 4, and click Execute.
- Download Made_for_LeaversApi from https://github.com/20105070/Made_for_Leavers.github.io.
- Open Visual Studio 2022 as administrator, click Open a project or solution, open Made_for_LeaversApi.sln, click Start Without Debugging.
- Download Made_for_Leavers from https://github.com/20105070/Made_for_Leavers.github.io.
- Open Visual Studio Code, click File, click Open Folder, click Made_for_Leavers, click Terminal, click New Terminal, type ng serve, and press enter.
- Go to http://localhost:4200/.
- Use _Made for Leavers_ according to README.md's 1 and 2.

### 4 - Database:
CREATE DATABASE Made_for_Leavers;

USE Made_for_Leavers;

CREATE TABLE Universities (
	id INT NOT NULL IDENTITY,
	email NVARCHAR(3248) NOT NULL,
	name NVARCHAR(3248) NOT NULL,
	webPage NVARCHAR(3248) NOT NULL,
	PRIMARY KEY(id)
);