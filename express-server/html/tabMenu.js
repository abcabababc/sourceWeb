const cons = document.getElementsByClassName("conbox");

function showCon(evevt){
    const tabMenuList = document.getElementsByName("tab");

    for(let i=0;i<tabMenuList.length;i++){
        if(tabMenuList[i].checked){
            cons[i].style.display = "block"
        }else{
            cons[i].style.display = "none"
        }
    }
}

cons[0].innerText = "<!DOCTYPE html>\n <html lang=\"kr\">\n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<head>\n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta charset=\"UTF-8\">\n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<title>SOURCE website</title>\n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<link rel=\"stylesheet\" href=\"css.css\">\n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<link rel=\"stylesheet\" href=\"fontello/css/fontello.css\">\n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</head> \n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<body>\n\n \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</body>\n </html>"