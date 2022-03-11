// Set Variables
const cardBox = document.querySelector(".card-box");
const searchInput = document.querySelector("#searchBar");

// Set User Empty Array
let users = [];

// FETCH API
fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => {
		return response.json();
	})
	.then((responseData) => {
		users = responseData.map((user) => {
			let url = `https://robohash.org/${user.id}?set=set2`;

			// Create Dynamic Elements
			let card = document.createElement("div");
			card.classList = "card center";
			let userName = document.createElement("h2");
			userName.classList = "user-name";
			let userEmail = document.createElement("p");
			userEmail.classList = "user-email";
			let userImage = document.createElement("img");

			// Set textContent of Dynamic Elements
			userImage.src = url;
			userName.textContent = user.username;
			userEmail.textContent = user.email;

			// Append "h2 and p" to "card div"
			card.append(userImage, userName, userEmail);
			// Append "card" to "cardBox"
			cardBox.append(card);

			return {
				username: user.username,
				useremail: user.email,
				element: card,
			};
		});
	})
	.catch((error) => {
		alert("SOMETHING WENT WRONG!");
	});

// Search Input Function
searchInput.addEventListener("input", (e) => {
	let inputValue = e.target.value;

	users.forEach((user) => {
		if (
			user.username.toLowerCase().includes(inputValue) ||
			user.useremail.toLowerCase().includes(inputValue)
		) {
			user.element.classList.remove("hide");
		} else {
			user.element.classList.add("hide");
		}
	});
});
