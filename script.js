function kajzerka()
{
    document.getElementById("rogalik").innerHTML = Number(document.getElementById("rogalik").innerHTML) + 1;

    if (document.getElementById("rogalik").innerHTML >= 11)
    {
        document.getElementById("rogalik").innerHTML = 0;
        window.alert("LEVEL UP!!");
        document.getElementById("level").innerHTML = Number(document.getElementById("level").innerHTML) + 1;
    }
}

