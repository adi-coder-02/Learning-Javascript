fetch("https://randomuser.me/api/?results=3")
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
        data.results.forEach(function(user){
            console.log(user); // Log each user object to the console
            const card = document.createElement("div");
            card.className =
            "max-w-sm mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden flex items-center space-x-4 p-6";

            const img = document.createElement("img");
            img.className = "h-16 w-16 rounded-full object-cover";
            img.src = user.picture.large;
            img.alt = "User avatar";

            const content = document.createElement("div");

            const name = document.createElement("div");
            name.className = "text-xl font-medium text-gray-900";
            name.textContent = user.name.first + " " + user.name.last;

            const role = document.createElement("p");
            role.className = "text-gray-500";
            role.textContent = "Frontend Developer";

            const button = document.createElement("button");
            button.className =
            "mt-2 px-4 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600";
            button.textContent = "Follow";

            content.appendChild(name);
            content.appendChild(role);
            content.appendChild(button);

            card.appendChild(img);
            card.appendChild(content);


            document.querySelector(".mainCard").appendChild(card);
        });
    })
    .catch((error) => {
        console.error("Error fetching data:", error); // Handle any errors that occur during the fetch
    });





