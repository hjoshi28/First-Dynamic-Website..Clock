dateAndTime = () => {
    myDate = new Date;

    time1 = document.getElementsByTagName("span");
    time1[0].innerText = (`${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`);

    time1[1].innerText = `${myDate.toLocaleDateString()}`;
}

ele = setInterval(dateAndTime, 1000);