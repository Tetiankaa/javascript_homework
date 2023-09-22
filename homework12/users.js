fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{

           let ul = document.getElementById('list');

            for (const user of users) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.innerText = `${user.id}: ${user.name}`;
                a.href = `./user-details.html?id=${user.id}`;

                li.appendChild(a);
                ul.appendChild(li);
            }
        })


