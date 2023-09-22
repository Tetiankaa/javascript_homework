let url = new URL(location.href);
let idValue = url.searchParams.get('id');
let id = JSON.parse(idValue);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>response.json())
        .then(user=>{
            console.log(user);

            for (const key1 in user) {
                let h3 = document.createElement('h3');

                if (typeof user[key1] !== 'object'){
                    h3.innerText = `${key1}: ${user[key1]}`;

                }else {
                    h3.innerText = `${key1}: `.toUpperCase();

                    for (const key2 in user[key1]) {

                        let h4 = document.createElement('h4');

                        if (typeof user[key1][key2] !== 'object'){
                            h4.innerText = `${key2}: ${user[key1][key2]}`;
                        }else {
                            h4.innerText = `${key2}: `.toUpperCase();

                            for (const key3 in user[key1][key2]) {

                                let h5 = document.createElement('h5');

                                if (typeof user[key1][key2][key3] !== 'object'){
                                    h5.innerText = `${key3}: ${user[key1][key2][key3]}`
                                }
                                h4.appendChild(h5);
                            }
                        }
                        h3.appendChild(h4);
                    }

                }

            document.body.appendChild(h3);
            }

            }

            )


