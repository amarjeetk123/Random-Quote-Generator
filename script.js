
let text  = document.getElementsByClassName("quotes")[0]
let author_name = document.getElementsByClassName("author_name")[0]
let btn = document.getElementById("btn")


btn.addEventListener("click" , quote_generator)


function quote_generator(){
    btn.classList.add("loading")
    btn.innerHTML = "Loading Qoute"
let url = "http://api.quotable.io/random"
fetch(url).then((res) => res.json().then((result) =>{
        // console.log(result)
        text.innerHTML = result.content
        author_name.innerHTML = result.author

        btn.innerHTML = "Next Quote"
        btn.classList.remove("loading")

    })
)
}

// code of sound btn
let soundbtn = document.getElementsByClassName("sound")[0]
soundbtn.addEventListener("click" , ()=>{
    // let sound = new SpeechSynthesisUtterance(text.innerHTML + "by" + author_name.innerHTML)
    let sound = new SpeechSynthesisUtterance(`${text.innerHTML} by ${author_name.innerHTML}`)
    speechSynthesis.speak(sound)
})


// code of copy btn
let copy_btn = document.getElementsByClassName("copy")[0]
copy_btn.addEventListener("click" , ()=>{
   
 navigator.clipboard.writeText(text.innerHTML)
})