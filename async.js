const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

// fetch
loadBtn.addEventListener("click", function (evt) {
    evt.preventDefault()
    const searchValue = searchInput.value.trim().toLowerCase();
    fetch(`https://api.github.com/users/${searchValue}`)
        .then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res
            } else {
                resultsContainer.innerHTML = `Пользователь не найден`
            }
        })
        .then(res => res.json())
        .then(data => {
            resultsContainer.innerHTML = `
                <div class="response-container">
                    <img src="${data.avatar_url}">
                    <p> Имя: <span>${data.name}</span><p>
                    <p> О себе: <span>${data.bio}</span><p>
                    <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
                </div>`
        })
        .catch(err => {
            console.log(err)
        })
});

// axios + async await
loadBtn.addEventListener("click", async (e) => {
   try {
       e.preventDefault()
       const searchValue = searchInput.value.trim().toLowerCase();
       const {data} = await axios.get(`https://api.github.com/users/${searchValue}`)
       console.log(data)
   } catch {
       console.log('Пользователь не найден')
   }
})