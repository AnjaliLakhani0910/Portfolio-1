document.onkeydown = e => {
    if(e.key == "F12"){
        alert("You cannot copy the content of the page")
        return false
    }
    if(e.ctrlKey && e.key == "u"){
        alert("You cannot copy the content of the page")
        return false
    }
    if(e.ctrlKey && e.key == "c"){
        alert("You cannot copy the content of the page")
        return false
    }
    if(e.ctrlKey && e.key == "v"){
        alert("You cannot copy the content of the page")
        return false
    }
}
document.oncontextmenu = () => {
    alert("You cannot copy the content of the page")
    return false
}