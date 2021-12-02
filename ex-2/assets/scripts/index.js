let buttons = document.querySelectorAll('button[data-bs-toggle="tab"]');
buttons.forEach(elem => {
  elem.addEventListener('shown.bs.tab', function (event) {

    let related_target = event.relatedTarget,
        event_target = event.target,
        elem_id = related_target.id.slice(0, -4),
        tab = document.querySelector(`#${elem_id}`),
        show_elem_id = event_target.id.slice(0, -4),
        show_elem = document.querySelector(`#${show_elem_id}`);
    console.log(event_target)
    console.log(document.querySelector('.background').style.backgroundImage = "url('./assets/images/guy-min.png')")
    console.log(show_elem.style.display)
    
    if(show_elem_id === "opportunities") {
      document.querySelector('.background').style.backgroundImage = "url('./images/white_bg-min.png')";
      tab.style.display = "none";
      show_elem.style.display = "block";
    } else if (document.querySelector('.background').style.backgroundImage == "url('./images/white_bg-min.png')") {
      document.querySelector('.background').style.backgroundImage = "url('./images/guy-min.png')";
      tab.style.display = "none";
      show_elem.style.display = "block";
    } else {
      tab.style.display = "none";
      show_elem.style.display = "block";
    }

  })
});
