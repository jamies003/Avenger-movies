let avengerMovies = ["The Avengers", "Age of Ultron", "Ifinity War", "End Games"];

let mainCast = [["Black Widow", "Iron Man", "Captain America", "Hulk", "Loki", "Nick Fury", "Hawkeye", "Stan Lee"],
["Black Widow", "Iron Man", "Captain America", "Hulk", "Loki", "Nick Fury", "Hawkeye", "Stan Lee", 
"Falcon", "War Machine", "Ultron", "Vision", "Thor",], 
["Black Widow", "Iron Man", "Captain America", "Hulk", "Loki", "Nick Fury", "Hawkeye", "Stan Lee",
"Falcon", "War Machine", "Ultron", "Vision", "Thor", "Spider Man", "Scarlet Witch", 
"Doctor Strange", "Thanos", "Gamora", "Black Panter", " Bucky Barns", "Mantis", "Rocket", "Groot", "Star Lord"], 
["Black Widow", "Iron Man", "Captain America", "Hulk", "Loki", "Nick Fury", "Hawkeye", "Stan Lee",
"Falcon", "War Machine", "Ultron", "Vision", "Thor","Spider Man", "Scarlet Witch", 
"Doctor Strange", "Thanos", "Gamora", "Black Panter", " Bucky Barns", "Mantis", "Rocket", "Groot", "Star Lord",
"Ant Man", "Nebula", "Drax", "Okoye"]];

let castNames = [["Scarlet Johansson", "Robert Downey Jr", "Chris Evans", "Mark Ruffalo", "Tom Hiddleston", 
"Samue L Jackson", "Jeremy Renner", "Stan Lee"],
["Scarlet Johansson", "Robert Downey Jr", "Chris Evans", "Mark Ruffalo", "Tom Hiddleston", 
"Samue L Jackson", "Jeremy Renner", "Stan Lee", "Anthony Mackie", "Don Cheadle", "James Spader", 
"Paul Bettany", "Chris Hemsworth"], 
["Scarlet Johansson", "Robert Downey Jr", "Chris Evans", "Mark Ruffalo", "Tom Hiddleston", 
"Samue L Jackson", "Jeremy Renner", "Stan Lee", "Anthony Mackie", "Don Cheadle", "James Spader", 
"Paul Bettany", "Chris Hemsworth", "Tom Holland", "Elizabeth Olsen", "Benedict Cumberbatch", "Josh Brolin", 
"Zoe Saldana", "Chadwich Boseman", "Sebastian Stan", "Pom Klementieff", "Bradley Cooper", 
"Vin Diesel", "Chris Pratt"], 
["Scarlet Johansson", "Robert Downey Jr", "Chris Evans", "Mark Ruffalo", "Tom Hiddleston", 
"Samue L Jackson", "Jeremy Renner", "Stan Lee", "Anthony Mackie", "Don Cheadle", "James Spader", 
"Paul Bettany", "Chris Hemsworth", "Tom Holland", "Elizabeth Olsen", "Benedict Cumberbatch", "Josh Brolin", 
"Zoe Saldana", "Chadwich Boseman", "Sebastian Stan", "Pom Klementieff", "Bradley Cooper", 
"Vin Diesel", "Chris Pratt", "Paul Rudd", "Karen Gillian", "Dave Baurista", "Danai Gurira"]];

let castSalary = [[35000000, 50000000, 15000000, 7500000, 3000000, 5000000, 2000000, ,], 
[50000000, 65000000, 25000000, 9000000, 5000000, 7000000, 4000000, ,5000000, 4700000, 8000000,
6000000, 20000000], 
[55000000, 75000000, 40000000, 12000000, 8000000, 10000000, 7000000, ,7500000, 6000000, 10000000,
9000000, 50000000, 10000000, 7000000, 15000000, 20000000, 12000000, 17000000, 6000000, 8000000, 6000000, 
5500000, 20000000], 
[65000000, 80000000, 55000000, 20000000, 12000000, 15000000, 13000000, ,1000000, 12000000, 15000000,
12000000, 90000000, 14000000, 9000000, 17000000, 25000000, 15000000, 20000000, 9000000, 10000000, 9000000, 
7000000, 50000000, 20000000, 12000000, 10000000, 7000000 ]];

let marvel = avengerMovies.length
for (let i=0; i<marvel; i++) { 
    for (let j=0; j<mainCast[0].length; ++j) {
        if (j===2)
        console.log(`In ${avengerMovies[i]}: ${mainCast[i][j]}: Played by ${castNames[i][j]} Earned ${castSalary[i][j]}`);
    }
}
