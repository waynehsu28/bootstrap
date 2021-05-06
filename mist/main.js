let promtAnswer = prompt("小明家裡有三個小孩，他兩個哥哥叫張一、張二，請問第三個小孩叫什麼?", "張三");
let thisH1 = document.getElementById("Response");
switch (promtAnswer) {
    case "張三":
        thisH1.innerHTML = "那小明是誰?";
        break;
    case "小明":
        thisH1.innerHTML = "聰明";
        break;
    default:
        thisH1.innerHTML = "你想多了";}
        