let users = [
    {
        name: "Aarav Mehta",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
        bio: "Full-stack developer who loves building clean and scalable web applications."
    },
    {
        name: "Neha Sharma",
        pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
        bio: "UI/UX designer focused on creating intuitive and user-friendly digital experiences."
    },
    {
        name: "Rohan Verma",
        pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600&auto=format&fit=crop&q=60",
        bio: "Backend engineer passionate about APIs, databases, and system design."
    },
    {
        name: "Priya Kapoor",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
        bio: "Creative content strategist who blends storytelling with data-driven marketing."
    },
    {
        name: "Kunal Singh",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60",
        bio: "Mobile app developer with a strong interest in performance and user experience."
    }
];

const container = document.getElementById("card");
// Show all users initially
function showUsers(arr){
    // container.innerHTML = "";
    if(arr.length === 0){
        container.innerHTML = "<h2>No results found</h2>";
        return;
    }

    arr.forEach(function(user) {
        // Create main card
        const card = document.createElement("div");
        card.classList.add("card");

        // Create image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // Create blurred layer
        const blurLayer = document.createElement("div");
        blurLayer.style.backgroundImage = `url(${user.pic})`;
        blurLayer.classList = "blurred-layer";

        // Create content container
        const content = document.createElement("div");
        content.classList = "content";

        // Create heading
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Create paragraph
        const para = document.createElement("p");
        para.textContent = user.bio;

        // Append elements
        content.appendChild(heading);
        content.appendChild(para);

        card.appendChild(img);
        card.appendChild(blurLayer);
        card.appendChild(content);

        container.appendChild(card);
    });
}
showUsers(users);

// Search filter functionality

let input = document.getElementById("inp");
input.addEventListener("input", function(){
    const value = input.value.toLowerCase();
    let filteredUsers = users.filter(function(user){
        return user.name.toLowerCase().includes(value)
    })
    container.innerHTML = "";
    showUsers(filteredUsers);

})




