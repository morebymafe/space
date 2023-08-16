//Tab content for destination
function openCity(event, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
    
}

//Tab content for crew
function openCrew(event, crewName) {
    var i, tabcontent, studs;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++){
        studs[i].className = studs[i].className.replace(" active", "");
    }

    document.getElementById(crewName).style.display = "block";
    event.currentTarget.className += " active";
    
}

//code for side nav-bar menu
function openNav() {
    document.getElementById("nav-bar").style.visibility = "visible";
    document.getElementById('nav-bar').style.width = "100vw";
  };
function closeNav() {
    document.getElementById("nav-bar").style.visibility = "hidden";
    document.getElementById("nav-bar").style.width = "0";
  };
