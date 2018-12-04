var gameContainer = document.getElementById('game-container');
var inventoryItem = document.getElementById('inventoryItem');
var gameButtons = document.getElementById('game-buttons');
var gameTitle = document.getElementById('title');
var description = document.getElementById('description');
var levels = [
    {backgroundImageSrc: 'img/backgrounds/game-over.jpg',title:'Je bent af!', description:'Je hebt de verkeerde keuze gemaakt', buttons:[{buttonText:'Restart', buttonOnclick:'restart', dependsOn: null}], itemAvailable: false, itemImageSource:'', itemPosX:'',itemPosy:'', itemWidth:'150px',itemHeight:'50px', itemTaken: false},
    {level:1, backgroundImageSrc: 'img/backgrounds/bar.jpg',title:'Je bent in een bar, het wordt al laat!', description:'De barman geeft aan dat hij wilt gaan afsluiten. Neem je nog een biertje voor onderweg, of blijf je voor een potje pool? Wat wil je doen?', buttons:[{buttonText:'Speel pool', buttonOnclick:'2', dependsOn: null},{ buttonText: 'Verlaat de bar',buttonOnclick:'3', dependsOn: null}], itemAvailable: true, itemImageSource:'img/items/beer.png', itemPosX:'900px',itemPosy:'340px', itemWidth:'100px',itemHeight:'110px', itemTaken: false},
    {level:2, backgroundImageSrc: 'img/backgrounds/jail.jpg',title:'De barman heeft de politie gebeld!', description:'Vanwege ongeoorloofd gedrag ben je opgepakt en zit je vast in de gevangenis', buttons:[{buttonText:'Herstart', buttonOnclick:'restart', dependsOn: null}], itemAvailable: false, itemImageSource:'', itemPosX:'',itemPosy:'', itemWidth:'',itemHeight:'', itemTaken: false},
    {level:3, backgroundImageSrc: 'img/backgrounds/alley.jpg',title:'Je stapt naar uit de bar.', description:'Je bevind je in een steeg. Een zwerver komt op je afgelopen en smeekt om wat alcohol.', buttons:[{buttonText:'Geef de man een flesje bier', buttonOnclick:'4', dependsOn: 1},{buttonText: 'Loop snel door',buttonOnclick:'5', dependsOn: null}], itemAvailable: false, itemImageSource:'', itemPosX:'',itemPosy:'', itemWidth:'',itemHeight:'', itemTaken: false},
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
        newButton.innerText = button.buttonText;
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
        inventoryItem.src = levels[levelToLoad].itemImageSource;
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
