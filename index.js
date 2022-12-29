while (1){
    password = prompt("비밀번호를 입력하세요.");
    if (password == 1) {
        setTimeout(() => location.href = "main.html", 3000);
        break
    }
    else {
        alert("비밀번호가 틀렸습니다.")
    }
}