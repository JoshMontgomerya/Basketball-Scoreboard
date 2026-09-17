let home = 0
let guest = 0
let homeGuest = guest + home
let num1 = 1
let num2 = 2
let num3 = 3
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")


function home1() {
     home += num1
    homeEl.textContent = home
}
function home2() {
      home += num2
    homeEl.textContent = home
}
function home3() {
      home += num3
    homeEl.textContent = home
}



function guest1() {
   guest += num1
    guestEl.textContent = guest
}
function guest2() {
        guest += num2
    guestEl.textContent = guest
}
function guest3() {
        guest += num3
    guestEl.textContent = guest
}


function newgame() {
    guest = 0
    home = 0
    homeGuest = 0
    homeEl.textContent = homeGuest
    guestEl.textContent = homeGuest
    
}