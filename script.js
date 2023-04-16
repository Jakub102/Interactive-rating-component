const ratings = document.querySelectorAll(".number");
const submit = document.querySelector(".submit");
let rating = 0;

ratings.forEach((number) => {
    number.addEventListener('click', function(){
        ratings.forEach((number) => {
            number.classList.remove('selected')
        })
        number.classList.add('selected')
        rating = number.value;
    })
})

submit.addEventListener('click', function(){
    if(rating == 0) return;
    document.querySelector("main").innerHTML = "<div class='submit_div'><div class='picture'> <img src='images/illustration-thank-you.svg' alt='illustration-thank-you'> </div><div class='submit_rating'>  You selected "+rating+" out of 5 </div><div class='text'> <h1> Thank you! </h1><p> We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p></div></div>";
})