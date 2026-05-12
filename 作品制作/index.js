function send_btn(){
    const btn = document.getElementById("btn");
    const spinner = document.getElementById("spinner");
    const result = document.getElementById("chat_log");

    btn.disabled = true;
    result.innerText = "";
    spinner.style.display = "block";

    setTimeout(() =>{
        spinner.style.display = "none";
        result.innerText = "ggrks";
        btn.disabled = false;
    }, 5000);
    
}