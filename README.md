csv-uploader
Bonus task for "sourcery-academy" admission process

If you want to save some time or in case it only "works on my machine ;D", you can take a look at a demo video here:
https://drive.google.com/file/d/1cgAVXEUiN_tup-WuI4IOH4yc-ixT4xVW/view?usp=sharing

Requirements:
Front-end: node.js
Back-end: java 19, maven

Download links:
https://maven.apache.org/download.cgi
https://www.oracle.com/java/technologies/javase/jdk19-archive-downloads.html
https://nodejs.org/en/download/


How to run the app:
1. clone this git repo.

2. open terminal/command prompt
3. navigate to the directory "./csv-front"
4. run command "npm install"
5. run command "npm start" (front end application should start on localhost port 3000)

6. open a second terminal
7. navigate to the directory "./csv-back" in the second terminal
8. run "mvn compile" command
9. run "mvn spring-boot:run" command
(steps 6-9 can be replaced with a java IDE which can run maven projects)

10. navigate to localhost:3000
11 click "Upload" button
12. select a csv file of this format:
![image](https://user-images.githubusercontent.com/69421425/220403387-19384904-8533-40c6-ad9d-d0dbc966a9e6.png)
(2 example files are provided in this repo)

13. Click "Submit" button
14. Data from the csv file should appear in the table bellow





