var inventoryItem = document.getElementById('inventoryItem');
var gameButtons = document.getElementById('game-buttons');
var gameTitle = document.getElementById('title');
var description = document.getElementById('description');

loadLevel(1);

function loadLevel(levelToLoad) {
    //reset the buttons and items on screen
    gameButtons.innerHTML = '';
    inventoryItem.style.display = "none";
    //load the level
    document.body.style.backgroundImage = "url(" + levels[levelToLoad].backgroundImageSrc + ")";
    gameTitle.innerText = levels[levelToLoad].title;
    description.innerText = levels[levelToLoad].description;
    for (i = 0; i < levels[levelToLoad].buttons.length; i++) {
        var button = levels[levelToLoad].buttons[i];
        var newButton = document.createElement('BUTTON');
        gameButtons.appendChild(newButton);
        newButton.innerText = button.buttonText;
        var nextLevel = 0;
        if ((button.dependsOn != null && levels[button.dependsOn].itemTaken) || button.dependsOn == null) {
            nextLevel = button.buttonOnclick
        }
        newButton.setAttribute('onClick', "loadLevel('" + nextLevel + "')");
        if (button.buttonOnclick === 'restart') {
            newButton.setAttribute('onClick', "restart()");
        }
    }
    //set the item to pickup if necessary
    if (levels[levelToLoad].itemAvailable && !levels[levelToLoad].itemTaken) {
        inventoryItem.src = levels[levelToLoad].itemImageSource;
        inventoryItem.style.display = "block";
        inventoryItem.style.width = levels[levelToLoad].itemWidth;
        inventoryItem.style.height = levels[levelToLoad].itemHeight;
        inventoryItem.style.left = levels[levelToLoad].itemPosX;
        inventoryItem.style.bottom = levels[levelToLoad].itemPosy;
        inventoryItem.onclick = function () {
            takeItem(levelToLoad);
        };
    }
}

function takeItem(levelToTakeItemFrom) {
    levels[levelToTakeItemFrom].itemTaken = true;
    inventoryItem.style.display = "none";
}

function restart() {
    location.reload();
}