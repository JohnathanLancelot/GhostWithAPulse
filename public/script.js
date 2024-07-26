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
            document.getElementById("icon-pop-up").style.display = "block";
            document.getElementById("icon-exit-button").style.display = "block";

            // Icons switch case:
            switch (number)
            {
                case 1:
                    document.getElementById("icon-luca").style.display = "block";
                    currentTextboxOpen = 'icon-luca';
                    break;
                case 2:
                    document.getElementById("icon-lillian").style.display = "block";
                    currentTextboxOpen = 'icon-lillian';
                    break;
                case 3:
                    document.getElementById("icon-abigail").style.display = "block";
                    currentTextboxOpen = 'icon-abigail';
                    break;
                case 4:
                    document.getElementById("icon-corpsie").style.display = "block";
                    currentTextboxOpen = 'icon-corpsie';
                    break;
                case 5:
                    document.getElementById("icon-chloe").style.display = "block";
                    currentTextboxOpen = 'icon-chloe';
                    break;
                case 6:
                    document.getElementById("icon-daisy").style.display = "block";
                    currentTextboxOpen = 'icon-daisy';
                    break;
                case 7:
                    document.getElementById("icon-meddy").style.display = "block";
                    currentTextboxOpen = 'icon-meddy';
                    break;
                case 8:
                    document.getElementById("icon-oxifawkes").style.display = "block";
                    currentTextboxOpen = 'icon-oxifawkes';
                    break;
                case 9:
                    document.getElementById("icon-pan").style.display = "block";
                    currentTextboxOpen = 'icon-pan';
                    break;
                case 10:
                    document.getElementById("icon-peek").style.display = "block";
                    currentTextboxOpen = 'icon-peek';
                    break;
                case 11:
                    document.getElementById("icon-phantasm").style.display = "block";
                    currentTextboxOpen = 'icon-phantasm';
                    break;
                case 12:
                    document.getElementById("icon-vex").style.display = "block";
                    currentTextboxOpen = 'icon-vex';
                    break;
                case 13:
                    document.getElementById("icon-whippet").style.display = "block";
                    currentTextboxOpen = 'icon-whippet';
                    break;
                default:
                    alert("Number tag for one or more icon images is invalid. Check HTML!");
            }
        }
        else if (category == 'character')
        {
            document.getElementById("char-pop-up").style.display = "block";
            document.getElementById("char-exit-button").style.display = "block";

            // Characters switch case:
            switch (number)
            {
                case 1:
                    document.getElementById("char-fairy").style.display = "block";
                    currentTextboxOpen = 'char-fairy';
                    break;
                case 2:
                    document.getElementById("char-bat").style.display = "block";
                    currentTextboxOpen = 'char-bat';
                    break;
                case 3:
                    document.getElementById("char-candyfloss").style.display = "block";
                    currentTextboxOpen = 'char-candyfloss';
                    break;
                case 4:
                    document.getElementById("char-mascot").style.display = "block";
                    currentTextboxOpen = 'char-mascot';
                    break;
                case 5:
                    document.getElementById("char-corpsie-badge").style.display = "block";
                    currentTextboxOpen = 'char-corpsie-badge';
                    break;
                case 6:
                    document.getElementById("char-dog").style.display = "block";
                    currentTextboxOpen = 'char-dog';
                    break;
                case 7:
                    document.getElementById("char-fable").style.display = "block";
                    currentTextboxOpen = 'char-fable';
                    break;
                case 8:
                    document.getElementById("char-gazelle-duck").style.display = "block";
                    currentTextboxOpen = 'char-gazelle-duck';
                    break;
                case 9:
                    document.getElementById("char-hare").style.display = "block";
                    currentTextboxOpen = 'char-hare';
                    break;
                case 10:
                    document.getElementById("char-izzy").style.display = "block";
                    currentTextboxOpen = 'char-izzy';
                    break;
                case 11:
                    document.getElementById("char-lovis").style.display = "block";
                    currentTextboxOpen = 'char-lovis';
                    break;
                case 12:
                    document.getElementById("char-nix").style.display = "block";
                    currentTextboxOpen = 'char-nix';
                    break;
                case 13:
                    document.getElementById("char-npcs").style.display = "block";
                    currentTextboxOpen = 'char-npcs';
                    break;
                case 14:
                    document.getElementById("char-nyx-cave").style.display = "block";
                    currentTextboxOpen = 'char-nyx-cave';
                    break;
                case 15:
                    document.getElementById("char-nyx-space").style.display = "block";
                    currentTextboxOpen = 'char-nyx-space';
                    break;
                case 16:
                    document.getElementById("char-obsidian").style.display = "block";
                    currentTextboxOpen = 'char-obsidian';
                    break;
                case 17:
                    document.getElementById("char-reaper").style.display = "block";
                    currentTextboxOpen = 'char-reaper';
                    break;
                case 18:
                    document.getElementById("char-phantasm-fullbody").style.display = "block";
                    currentTextboxOpen = 'char-phantasm-fullbody';
                    break;
                case 19:
                    document.getElementById("char-piggie-back").style.display = "block";
                    currentTextboxOpen = 'char-piggie-back';
                    break;
                case 20:
                    document.getElementById("char-snow-leopard").style.display = "block";
                    currentTextboxOpen = 'char-snow-leopard';
                    break;
                case 21:
                    document.getElementById("char-relay").style.display = "block";
                    currentTextboxOpen = 'char-relay';
                    break;
                case 22:
                    document.getElementById("char-rudolph").style.display = "block";
                    currentTextboxOpen = 'char-rudolph';
                    break;
                case 23:
                    document.getElementById("char-spook-phantasm-kiss").style.display = "block";
                    currentTextboxOpen = 'char-spook-phantasm-kiss';
                    break;
                case 24:
                    document.getElementById("char-werewolf").style.display = "block";
                    currentTextboxOpen = 'char-werewolf';
                    break;
                case 25:
                    document.getElementById("char-maple-tree").style.display = "block";
                    currentTextboxOpen = 'char-maple-tree';
                    break;
                default:
                    alert("Number tag for one or more character images is invalid. Check HTML!");
            }
        }
        else if (category == 'background')
        {
            document.getElementById("backg-pop-up").style.display = "block";
            document.getElementById("backg-exit-button").style.display = "block";

            // Backgrounds switch case:
            switch (number)
            {
                case 1:
                    document.getElementById("backg-classroom").style.display = "block";
                    currentTextboxOpen = 'backg-classroom';
                    break;
                case 2:
                    document.getElementById("backg-bathroom").style.display = "block";
                    currentTextboxOpen = 'backg-bathroom';
                    break;
                case 3:
                    document.getElementById("backg-beach").style.display = "block";
                    currentTextboxOpen = 'backg-beach';
                    break;
                case 4:
                    document.getElementById("backg-bear-room").style.display = "block";
                    currentTextboxOpen = 'backg-bear-room';
                    break;
                case 5:
                    document.getElementById("backg-bedroom").style.display = "block";
                    currentTextboxOpen = 'backg-bedroom';
                    break;
                case 6:
                    document.getElementById("backg-cleaning-room").style.display = "block";
                    currentTextboxOpen = 'backg-cleaning-room';
                    break;
                case 7:
                    document.getElementById("backg-stairwell-1").style.display = "block";
                    currentTextboxOpen = 'backg-stairwell-1';
                    break;
                case 8:
                    document.getElementById("backg-hallway-2").style.display = "block";
                    currentTextboxOpen = 'backg-hallway-2';
                    break;
                case 9:
                    document.getElementById("backg-hallway-3").style.display = "block";
                    currentTextboxOpen = 'backg-hallway-3';
                    break;
                case 10:
                    document.getElementById("backg-hallway-with-key").style.display = "block";
                    currentTextboxOpen = 'backg-hallway-with-key';
                    break;
                case 11:
                    document.getElementById("backg-kitchen").style.display = "block";
                    currentTextboxOpen = 'backg-kitchen';
                    break;
                case 12:
                    document.getElementById("backg-lab-1").style.display = "block";
                    currentTextboxOpen = 'backg-lab-1';
                    break;
                case 13:
                    document.getElementById("backg-lab-2").style.display = "block";
                    currentTextboxOpen = 'backg-lab-2';
                    break;
                case 14:
                    document.getElementById("backg-secret-stairwell").style.display = "block";
                    currentTextboxOpen = 'backg-secret-stairwell';
                    break;
                case 15:
                    document.getElementById("backg-managers-office").style.display = "block";
                    currentTextboxOpen = 'backg-managers-office';
                    break;
                case 16:
                    document.getElementById("backg-mirror-room").style.display = "block";
                    currentTextboxOpen = 'backg-mirror-room';
                    break;
                case 17:
                    document.getElementById("backg-noticeboard").style.display = "block";
                    currentTextboxOpen = 'backg-noticeboard';
                    break;
                case 18:
                    document.getElementById("backg-escape").style.display = "block";
                    currentTextboxOpen = 'backg-escape';
                    break;
                case 19:
                    document.getElementById("backg-ballpit").style.display = "block";
                    currentTextboxOpen = 'backg-ballpit';
                    break;
                case 20:
                    document.getElementById("backg-storage").style.display = "block";
                    currentTextboxOpen = 'backg-storage';
                    break;
                case 21:
                    document.getElementById("backg-IMYAHW").style.display = "block";
                    currentTextboxOpen = 'backg-IMYAHW';
                    break;
                default:
                    alert("Number tag for one or more background images is invalid. Check HTML!");
            }
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
        document.getElementById("icon-pop-up").style.display = "none";
        document.getElementById("icon-exit-button").style.display = "none";
        document.getElementById(currentTextboxOpen).style.display = "none";
        currentTextboxOpen = "none";
    }
    else if (category == 'character')
    {
        document.getElementById("char-pop-up").style.display = "none";
        document.getElementById("char-exit-button").style.display = "none";
        document.getElementById(currentTextboxOpen).style.display = "none";
        currentTextboxOpen = 'none';
    }
    else if (category == 'background')
    {
        document.getElementById("backg-pop-up").style.display = "none";
        document.getElementById("backg-exit-button").style.display = "none";
        document.getElementById(currentTextboxOpen).style.display = "none";
        currentTextboxOpen = 'none';
    }
    else if (category == 'reference')
    {
        document.getElementById("ref-pop-up").style.display = "none";
        document.getElementById("ref-exit-button").style.display = "none";
        document.getElementById(currentTextboxOpen).style.display = "none";
        currentTextboxOpen = 'none';
    }
    else if (category == 'reaper')
    {
        document.getElementById("char-pop-up").style.display = "none";
        document.getElementById("char-exit-button").style.display = "none";
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
    else if (artTag == 'Stairwell')
    {
        document.getElementById("stairs").src = "../assets/images/art-images/backgrounds/Door-open.jpg";
    }
    else if (artTag == 'Reaper')
    {
        document.getElementById("reaper").src = "../assets/images/art-images/characters/Oxifawkes-reaper-1.jpg";
    }
    else if (artTag == 'Fable')
    {
        document.getElementById("fable").src = "../assets/images/art-images/characters/Fable-2.jpg";
    }
    else if (artTag == 'MapleTree')
    {
        document.getElementById("maple").src = "../assets/images/art-images/characters/Game-art-2.PNG";
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
    else if (artTag == 'Stairwell')
    {
        document.getElementById("stairs").src = "../assets/images/art-images/backgrounds/Lab-stairwell.jpg";
    }
    else if (artTag == 'Reaper')
    {
        document.getElementById("reaper").src = "../assets/images/art-images/characters/Oxifawkes-reaper-2.jpg";
    }
    else if (artTag == 'Fable')
    {
        document.getElementById("fable").src = "../assets/images/art-images/characters/Fable-1.jpg";
    }
    else if (artTag == 'MapleTree')
    {
        document.getElementById("maple").src = "../assets/images/art-images/characters/Game-art-1.PNG";
    }
    else
    {
        alert("Art tag for one or more art pieces with an alternative version is invalid. Check HTML!");
    }
}