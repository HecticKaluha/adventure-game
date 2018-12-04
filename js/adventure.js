var gameContainer = document.getElementById('game-container');
var inventoryItem = document.getElementById('inventoryItem');
var gameButtons = document.getElementById('game-buttons');
var gameTitle = document.getElementById('title');
var description = document.getElementById('description');
var levels = [
    {backgroundImageSrc: 'img/game-over.jpg',title:'Je bent dood', description:'Je hebt de verkeerde keuze gemaakt', buttons:[{buttonText:'Restart', buttonOnclick:'restart', dependsOn: null}], itemAvailable: false, itemIMageSource:'', itemPosX:'',itemPosy:'', itemTaken: false},
    {backgroundImageSrc: 'img/level1.jpg',title:'Je bent in een bar, het wordt al laat!', description:'De barman geeft aan dat hij wilt gaan afsluiten. Wat wil je doen?', buttons:[{buttonText:'Speel een spelletje pool', buttonOnclick:'2', dependsOn: null},{ buttonText: 'Verlaat de bar en zoek een andere plek omde avond door te brengen',buttonOnclick:'3', dependsOn: null}], itemAvailable: true, itemIMageSource:'', itemPosX:'',itemPosy:'', itemTaken: false},
    {backgroundImageSrc: 'img/level1.jpg',title:'Dit is level 1', description:'Dit is description van level 1', buttons:[{buttonText:'knop 1 level 1', buttonOnclick:'2', dependsOn: null},{ buttonText: 'knop 2 level 1',buttonOnclick:'3', dependsOn: null}, {buttonText: 'knop 3 level 1', buttonOnclick:'4', dependsOn: null}], itemAvailable: false, itemIMageSource:'', itemPosX:'',itemPosy:'', itemTaken: false},
    {backgroundImageSrc: 'img/level2.jpg',title:'Dit is level 2', description:'Dit is description van level 2', buttons:[{buttonText:'knop 1 level 2', buttonOnclick:'3', dependsOn: null},{ buttonText: 'knop 2 level 2',buttonOnclick:'4', dependsOn: null}, {buttonText: 'knop 3 level 2', buttonOnclick:'5', dependsOn: null}], itemAvailable: true, itemIMageSource:'img/itemLevel2.png', itemPosX:'900px',itemPosy:'100px', itemWidth:'150px',itemHeight:'50px', itemTaken: false},
    {backgroundImageSrc: 'img/level1.jpg',title:'Dit is level 3', description:'Dit is description van level 3', buttons:[{buttonText:'knop 1 level 3', buttonOnclick:'1', dependsOn: 2},{ buttonText: 'knop 2 level 3',buttonOnclick:'4', dependsOn: null}, {buttonText: 'knop 3 level 2', buttonOnclick:'5', dependsOn: null}], itemAvailable: false, itemIMageSource:'', itemPosX:'',itemPosy:'', itemWidth:'',itemHeight:'', itemTaken: false},
];

loadLevel(1);

function loadLevel(levelToLoad){
    //reset the buttons and items on screen
    gameButtons.innerHTML = '';
    inventoryItem.style.display = "none";
    //load the level
    document.body.style.backgroundImage = "url("+ levels[levelToLoad].backgroundImageSrc +")";
    gameTitle.innerText = levels[levelToLoad].title;
    description.innerText = levels[levelToLoad].description;
    for(i = 0; i < levels[levelToLoad].buttons.length; i++)
    {
        var button = levels[levelToLoad].buttons[i];
        var newButton = document.createElement('BUTTON');
        gameButtons.appendChild(newButton);
        newButton.innerText = levels[levelToLoad].buttons[i].buttonText;
        var nextLevel = 0;
        if((button.dependsOn != null && levels[button.dependsOn].itemTaken) || button.dependsOn == null) {
            nextLevel = button.buttonOnclick
        }
        newButton.setAttribute('onClick', "loadLevel('"+ nextLevel +"')");
        if(button.buttonOnclick === 'restart')
        {
            newButton.setAttribute('onClick', "restart()");
        }
    }
    //set the item to pickup if necessary
    if(levels[levelToLoad].itemAvailable && !levels[levelToLoad].itemTaken){
        inventoryItem.src = levels[levelToLoad].itemIMageSource;
        inventoryItem.style.display = "block";
        inventoryItem.style.width = levels[levelToLoad].itemWidth;
        inventoryItem.style.height = levels[levelToLoad].itemHeight;
        inventoryItem.style.left = levels[levelToLoad].itemPosX;
        inventoryItem.style.bottom = levels[levelToLoad].itemPosy;
        inventoryItem.onclick = function() { takeItem(levelToLoad); };
    }
}

function takeItem(levelToTakeItemFrom){
    levels[levelToTakeItemFrom].itemTaken = true;
    inventoryItem.style.display = "none";
}

function restart(){
    location.reload();
}
