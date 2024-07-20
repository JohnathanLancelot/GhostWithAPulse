// Global variables needed:
var currentTextboxOpen = 'none';

// The pop-up function allowing users to find out more about each art piece shown:
function popUp(category, number) {
    // ONLY open a text box if one isn't already open:
    if (currentTextboxOpen == 'none')
    {
        /* Determine the category of art, e.g. icon, character, background or reference.
        Any art that is clicked on will trigger a pop-up with an x / exit button.
        Determine the individual art number in order to show the correct info in the pop-up.
        */
        if (category == 'icon')
        {
            // Icons switch case:
        }
        else if (category == 'character')
        {
            // Characters switch case:
        }
        else if (category == 'background')
        {
            // Backgrounds switch case:
        }
        else if (category == 'reference')
        {
            document.getElementById("ref-pop-up").style.display = "block";
            document.getElementById("ref-exit-button").style.display = "block";
    
            // References switch case:
            switch (number)
            {
                case 1:
                    document.getElementById("ref-giraffe").style.display = "block";
                    currentTextboxOpen = 'ref-giraffe';
                    break;
                case 2:
                    document.getElementById("ref-hedgehog").style.display = "block";
                    currentTextboxOpen = 'ref-hedgehog';
                    break;
                default:
                    alert("Number tag for one or more reference images is invalid. Check HTML!");
            }
        }
        else
        {
            alert("Category tag for one or more art pieces is invalid. Check HTML!");
        }
    }
}

// The exit button functionality for the info pop-ups:
function exitPopUp(category) {
    if (category == 'icon')
    {
        // Icons switch case:
    }
    else if (category == 'character')
    {
        // Characters switch case:
    }
    else if (category == 'background')
    {
        // Backgrounds switch case:
    }
    else if (category == 'reference')
    {
        document.getElementById("ref-pop-up").style.display = "none";
        document.getElementById("ref-exit-button").style.display = "none";
        document.getElementById(currentTextboxOpen).style.display = "none";
        currentTextboxOpen = 'none';
    }
    else
    {
        alert("Category tag for one or more exit buttons is invalid. Check HTML!");
    }
}

/* Only a few art pieces have an alternate version. This function allows users to see a second version of a
   piece of art when they hover over it. */
function changeVersion(artTag)
{
    if (artTag == 'Decontamination')
    {
        // Change the image used for this art when it is hovered over:
        document.getElementById("decontam").src = "../assets/images/art-images/backgrounds/Mist-room.jpg";
    }
    else
    {
        alert("Art tag for one or more art pieces with an alternative version is invalid. Check HTML!");
    }
}

// This function reverts an image back to its original version once the mouse stops hovering over it:
function changeVersionBack(artTag)
{
    if (artTag == 'Decontamination')
    {
        document.getElementById("decontam").src = "../assets/images/art-images/backgrounds/Cleaning-room.jpg";
    }
    else
    {
        alert("Art tag for one or more art pieces with an alternative version is invalid. Check HTML!");
    }
}