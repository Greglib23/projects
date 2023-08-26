profile = document.querySelector('.profile')
notFound = document.querySelector('.not-found')
search = document.querySelector('.search')
title = document.querySelector('.title')
desc = document.querySelector('.description')
image = document.querySelector('.pic')
followers = document.querySelector('.followers')
following = document.querySelector('.following')
reposCount = document.querySelector('.repos-count')
repos = document.querySelector('.repos')
const APIURL = 'https://api.github.com/users/'

search.addEventListener('keypress', searchUser)

async function searchUser(event) {
    let user = search.value
    if (event.key === 'Enter' && user != '') {
        search.value = ''
        fetch(APIURL + user)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => {
                notFound.classList.remove('visible')
                profile.classList.add('visible')
                fillProfile(data)
            })
            .catch(error => {
                console.log(error)
                notFound.classList.add('visible')
                profile.classList.remove('visible')
            })
    }
}

function fillProfile(data) {
    console.log(data)
    if (data.name == null){
        title.innerHTML = 'null'
    }else{
        title.innerHTML = data.name
    }    
    if (data.bio == null){
        desc.innerHTML = 'null'
    }else{
        desc.innerHTML = data.bio
    }    
    image.style.backgroundImage = `url(${data.avatar_url})`
    followers.innerHTML = `${data.followers} Followers`
    following.innerHTML = `${data.following} Following`
    reposCount.innerHTML = `${data.public_repos} Repos`
    repos.innerHTML = ''
    getRepos(data)
}

async function getRepos(allRepos) {
    fetch(allRepos.repos_url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < 5; i++) {
                newRepo = document.createElement('a')
                newRepo.classList.add('rep')
                newRepo.setAttribute("target", "_blank")
                newRepo.textContent = data[i].name
                newRepo.href = data[i].html_url
                console.log(newRepo)
                repos.appendChild(newRepo)
            }
        })
        .catch(error => {
            console.log(error)
        })
}