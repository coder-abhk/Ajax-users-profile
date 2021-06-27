const user__data = document.querySelector("#user__data");
const view__profiles__ele = document.getElementById("view__profiles__ele");

// users__profile__uri
const api__users__uri = "https://jsonplaceholder.typicode.com/users";

// ajax object creation
const xhr = new XMLHttpRequest();

// open uri
xhr.open("GET", api__users__uri, true);

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		const res = JSON.parse(this.response);

		// dom manipulate
		let isToggled = true;
		view__profiles__ele.addEventListener("click", function() {
			if (isToggled) {
				res.map(user => {
					user__data.innerHTML += (
						`<div class="user__card">
					<h3>${user.name}</h3>
					<p>Email- ${user.email}</p>
					<p>Phone- ${user.phone}</p>
					<p>Website- <a href=${user.website}>${user.website}</a></p>
					<address>
						Street- ${user.address.street},
						City- ${user.address.city},
						Zipcode- ${user.address.zipcode}
					</address>
				</div>`
					)
				})
				this.style.color = "white";
				this.style.background = "#ff1414";
				this.textContent = "close";
				isToggled = false;
			} else {
				this.style.color = "white";
				this.style.background = "black";
				this.textContent = "view profile";
				user__data.innerHTML = "";
				isToggled = true;
			}

		})
	}
}

xhr.send()