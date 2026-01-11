let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
    users: [],
    init: function(){
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addUser();
        });
    },
    addUser: function(){
        this.users.push({
            name: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value
        });
        form.reset();
        this.renderUI();
    },
    removeUser: function(){
        // Implementation for removing a user can be added here
    },
    renderUI: function(){
        document.querySelector(".user-container").innerHTML = "";
        this.users.forEach(user => {
            const userCard = document.createElement("div");
            userCard.className = "user-card";

            const avatar = document.createElement("img");
            avatar.className = "avatar";
            avatar.src = user.photo;
            avatar.alt = "User photo";

            const userInfo = document.createElement("div");
            userInfo.className = "user-info";

            // Name
            const name = document.createElement("h3");
            name.className = "name";
            name.textContent = user.username;

            // Role
            const role = document.createElement("span");
            role.className = "role";
            role.textContent = user.role;

            // Bio
            const bio = document.createElement("p");
            bio.className = "bio";
            bio.textContent = user.bio;

            userInfo.append(name, role, bio);
            userCard.append(avatar, userInfo);


            document.querySelector(".user-container").appendChild(userCard);
        }

        )
    },
}

userManager.init();

