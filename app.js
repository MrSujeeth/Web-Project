let indianPlayers = [
    {
        
        "name": "Virat Kohli",
        "role": "Batsman",
        "image": "Cricketer image"
    },
    {
        
        "name": "Rohit Sharma",
        "role": "Batsman",
        "image": "Cricketer image"
    },
    {
        
        "name": "Shubman Gill",
        "role": "Batsman",
        "image": "Cricketer image"
    },
    {
        
        "name": "Shreyas Iyer",
        "role": "Batsman",
        "image": "Cricketer image"
    },
    {
        
        "name": "KL Rahul",
        "role": "Wicketkeeper",
        "image": "Cricketer image"
    },
    {
        
        "name": "Hardik Pandya",
        "role": "All-rounder",
        "image": "Cricketer image"
    },
    {
        
        "name": "Ravindra Jadeja",
        "role": "All-rounder",
        "image": "Cricketer image"
    },
    {
        
        "name": "Axar Patel",
        "role": "All-rounder",
        "image": "Cricketer image"
    },
    {
        
        "name": "Washington Sunder",
        "role": "Bowler",
        "image": "Cricketer image"
    },
    {
        
        "name": "Rishab Pant",
        "role": "Wicketkeeper",
        "image": "Cricketer image"
    },
    {
        
        "name": "Kuldeep Yadav",
        "role": "Bowler",
        "image": "Cricketer image"
    },
    {
        
        "name": "Arshdeep Singh",
        "role": "Bowler",
        "image": "Cricketer image"
    },
    {
        
        "name": "Varun Chakaravarthy",
        "role": "Bowler",
        "image": "Cricketer image"
    },
    {
        
        "name": "Harshit Rana",
        "role": "Bowler",
        "image": "Cricketer image"
    },
    {
        
        "name": "Mohammed Shami",
        "role": "Bowler",
        "image": "Cricketer image"
    },
];

let container = document.getElementById("playerContainer");

indianPlayers.map(({ name, role, image }) => {
    container.innerHTML += `
        <div class="card">
        <img src="${image}" alt="${name}" class="player-img">
            <h3>${name}</h3>
            <p> ${role}</p>
            
            
        </div>
    `;
});
