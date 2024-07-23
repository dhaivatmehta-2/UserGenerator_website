 

 async function fetchUser() {
            try {
                const response = await fetch('https://randomuser.me/api/');
                const data = await response.json();
                const user = data.results[0];

                const userContainer = document.getElementById('user-container');
                userContainer.innerHTML = `
                    <div class="user-card">
                    here is your random user to copy-paste: <br><br>
                        <img src="${user.picture.large}" alt="User Avatar" class="user-avatar">
                        <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                        <p><strong>Gender:</strong> ${user.gender}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Mobile Num:</strong> ${user.phone}</p>
                        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                        <p><strong>username:</strong> ${user.login.username}</p>
                        <p><strong>password:</strong> ${user.login.salt}</p>

                    </div>
                `;
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }