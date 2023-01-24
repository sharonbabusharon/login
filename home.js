username = localStorage.getItem('UserName')
Headers.innerHTML = `Welcome ${username}`


function logout() {
    localStorage.removeItem('UserName')
    window.location = './index.html'
}