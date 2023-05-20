// resume button

// let resume1=document.getElementById("resumelink-1").addEventListener("click",opendrive);
// let resume2=document.getElementById("resume-link-2").addEventListener("click",opendrive);

function opendrive(){
    window.open(
        (href="https://drive.google.com/file/d/1POjdPMFjOFN0KSQypUovvnSSv1H9Czae/view?usp=share_link")
    )
}

let hamburger=document.querySelector(".hamburger")
hamburger.onclick=()=>{
    let navlist=document.querySelector(".nav-list")
    navlist.classList.toggle("active");
}

// let typed= new typed(".typing",{
//     String:["Full Stack Developer"],
//     typespeed:100,
//     backspeed:60,
//     loop:true
// })

