var levels = [
    {
        level: 0,
        backgroundImageSrc: 'img/backgrounds/game-over.jpg',
        title: 'Je bent af!',
        description: 'Je hebt de verkeerde keuze gemaakt',
        buttons: [
            {
                buttonText: 'Restart',
                buttonOnclick: 'restart',
                buttonAlternative: '',
                dependsOn: null
            }
        ],
        itemAvailable: false,
        itemImageSource: '',
        itemPosX: '',
        itemPosy: '',
        itemWidth: '',
        itemHeight: '',
        itemTaken: false
    },
    {
        level: 1,
        backgroundImageSrc: 'img/backgrounds/bar.jpg',
        title: 'Je bent in een bar, het wordt al laat!',
        description: 'De barman geeft aan dat hij wilt gaan afsluiten. Neem je nog een biertje voor onderweg, of blijf je voor een potje pool? Wat wil je doen?',
        buttons: [
            {
                buttonText: 'Speel pool',
                buttonOnclick: '2',
                buttonAlternative: '',
                dependsOn: null
            }, {
                buttonText: 'Verlaat de bar',
                buttonOnclick: '3',
                buttonAlternative: '',
                dependsOn: null
            }
        ],
        itemAvailable: true,
        itemImageSource: 'img/items/beer.png',
        itemPosX: '900px',
        itemPosy: '340px',
        itemWidth: '100px',
        itemHeight: '110px',
        itemTaken: false
    },
    {
        level: 2,
        backgroundImageSrc: 'img/backgrounds/jail.jpg',
        title: 'De barman heeft de politie gebeld!',
        description: 'Vanwege ongeoorloofd gedrag ben je opgepakt en zit je vast in de gevangenis',
        buttons: [
            {
                buttonText: 'Herstart',
                buttonOnclick: 'restart',
                buttonAlternative: '',
                dependsOn: null
            }
        ],
        itemAvailable: false,
        itemImageSource: '',
        itemPosX: '',
        itemPosy: '',
        itemWidth: '',
        itemHeight: '',
        itemTaken: false
    },
    {
        level: 3,
        backgroundImageSrc: 'img/backgrounds/alley.jpg',
        title: 'Je stapt naar uit de bar.',
        description: 'Je bevind je in een steeg. Een zwerver komt op je afgelopen en smeekt om wat alcohol.',
        buttons: [
            {
                buttonText: 'Geef de man een flesje bier',
                buttonOnclick: '4',
                buttonAlternative: '5',
                dependsOn: 1
            },
            {
                buttonText: 'Loop snel door',
                buttonOnclick: '6',
                buttonAlternative: '',
                dependsOn: null
            }
        ],
        itemAvailable: false,
        itemImageSource: '',
        itemPosX: '',
        itemPosy: '',
        itemWidth: '',
        itemHeight: '',
        itemTaken: false
    },
    {
        level: 4,
        backgroundImageSrc: '',
        title: '',
        description: '',
        buttons: [
            {
                buttonText: '',
                buttonOnclick: '',
                buttonAlternative: '',
                dependsOn: null
            },
            {
                buttonText: '',
                buttonOnclick: '',
                dependsOn: null
            }
        ],
        itemAvailable: false,
        itemImageSource: '',
        itemPosX: '',
        itemPosy: '',
        itemWidth: '',
        itemHeight: '',
        itemTaken: false
    },
    {
        level: 5,
        backgroundImageSrc: 'img/backgrounds/knockout.jpg',
        title: 'Problemen',
        description: 'Je beseft dat je helemaal geen biertje hebt voor de man. Na dit gehoord de hebben wordt hij woest en slaat je bewusteloos!',
        buttons: [
            {
                buttonText: 'Herstart',
                buttonOnclick: 'restart',
                buttonAlternative: '',
                dependsOn: null
            },
        ],
        itemAvailable: false,
        itemImageSource: '',
        itemPosX: '',
        itemPosy: '',
        itemWidth: '',
        itemHeight: '',
        itemTaken: false
    },
    {
        level: 6,
        backgroundImageSrc: '',
        title: '',
        description: '',
        buttons: [
            {
                buttonText: '',
                buttonOnclick: '',
                buttonAlternative: '',
                dependsOn: null
            },
            {
                buttonText: '',
                buttonOnclick: '',
                buttonAlternative: '',
                dependsOn: null
            },
        ],
        itemAvailable: false,
        itemImageSource: '',
        itemPosX: '',
        itemPosy: '',
        itemWidth: '',
        itemHeight: '',
        itemTaken: false
    },
];