// Հայկական Աստվածաշնչի Կայք - Հիմնական JavaScript ֆայլ
// Կառավարում է դինամիկ բովանդակությունը, որոնումը, ֆիլտրավորումը և ձևի վավերացումը

// Աստվածաշնչի տվյալների կառուցվածք
const bibleData = {
    oldTestament: [
        { name: 'Genesis', armenian: 'Ծննդոց', chapters: 50, testament: 'old' },
        { name: 'Exodus', armenian: 'Ելք', chapters: 40, testament: 'old' },
        { name: 'Leviticus', armenian: 'Ղևտացոց', chapters: 27, testament: 'old' },
        { name: 'Numbers', armenian: 'Թվեր', chapters: 36, testament: 'old' },
        { name: 'Deuteronomy', armenian: 'Երկրորդ Օրենք', chapters: 34, testament: 'old' },
        { name: 'Joshua', armenian: 'Հեսու', chapters: 24, testament: 'old' },
        { name: 'Judges', armenian: 'Դատավորներ', chapters: 21, testament: 'old' },
        { name: 'Ruth', armenian: 'Ռութ', chapters: 4, testament: 'old' },
        { name: '1 Samuel', armenian: 'Ա Սամուէլ', chapters: 31, testament: 'old' },
        { name: '2 Samuel', armenian: 'Բ Սամուէլ', chapters: 24, testament: 'old' },
        { name: '1 Kings', armenian: 'Ա Թագավորներ', chapters: 22, testament: 'old' },
        { name: '2 Kings', armenian: 'Բ Թագավորներ', chapters: 25, testament: 'old' },
        { name: '1 Chronicles', armenian: 'Ա Մնացորդք', chapters: 29, testament: 'old' },
        { name: '2 Chronicles', armenian: 'Բ Մնացորդք', chapters: 36, testament: 'old' },
        { name: 'Ezra', armenian: 'Եզրաս', chapters: 10, testament: 'old' },
        { name: 'Nehemiah', armenian: 'Նէեմիա', chapters: 13, testament: 'old' },
        { name: 'Esther', armenian: 'Եսթեր', chapters: 10, testament: 'old' },
        { name: 'Job', armenian: 'Հոբ', chapters: 42, testament: 'old' },
        { name: 'Psalms', armenian: 'Սաղմոսներ', chapters: 150, testament: 'old' },
        { name: 'Proverbs', armenian: 'Առակներ', chapters: 31, testament: 'old' },
        { name: 'Ecclesiastes', armenian: 'Ժողովող', chapters: 12, testament: 'old' },
        { name: 'Song of Solomon', armenian: 'Վերագ', chapters: 8, testament: 'old' },
        { name: 'Isaiah', armenian: 'Եսայի', chapters: 66, testament: 'old' },
        { name: 'Jeremiah', armenian: 'Երեմիա', chapters: 52, testament: 'old' },
        { name: 'Lamentations', armenian: 'Ողբ', chapters: 5, testament: 'old' },
        { name: 'Ezekiel', armenian: 'Եզեկիել', chapters: 48, testament: 'old' },
        { name: 'Daniel', armenian: 'Դանիել', chapters: 12, testament: 'old' },
        { name: 'Hosea', armenian: 'Օսէ', chapters: 14, testament: 'old' },
        { name: 'Joel', armenian: 'Հովել', chapters: 3, testament: 'old' },
        { name: 'Amos', armenian: 'Ամոս', chapters: 9, testament: 'old' },
        { name: 'Obadiah', armenian: 'Աբդիու', chapters: 1, testament: 'old' },
        { name: 'Jonah', armenian: 'Յովնան', chapters: 4, testament: 'old' },
        { name: 'Micah', armenian: 'Միքիա', chapters: 7, testament: 'old' },
        { name: 'Nahum', armenian: 'Նահում', chapters: 3, testament: 'old' },
        { name: 'Habakkuk', armenian: 'Ամբակում', chapters: 3, testament: 'old' },
        { name: 'Zephaniah', armenian: 'Սոփոնիա', chapters: 3, testament: 'old' },
        { name: 'Haggai', armenian: 'Ագէոս', chapters: 2, testament: 'old' },
        { name: 'Zechariah', armenian: 'Զաքարիա', chapters: 14, testament: 'old' },
        { name: 'Malachi', armenian: 'Մաղաքիա', chapters: 4, testament: 'old' }
    ],
    newTestament: [
        { name: 'Matthew', armenian: 'Մատթէոս', chapters: 28, testament: 'new' },
        { name: 'Mark', armenian: 'Մարկոս', chapters: 16, testament: 'new' },
        { name: 'Luke', armenian: 'Ղուկաս', chapters: 24, testament: 'new' },
        { name: 'John', armenian: 'Յովհաննէս', chapters: 21, testament: 'new' },
        { name: 'Acts', armenian: 'Գործք Առաքելոց', chapters: 28, testament: 'new' },
        { name: 'Romans', armenian: 'Հռոմէացիներ', chapters: 16, testament: 'new' },
        { name: '1 Corinthians', armenian: 'Ա Կորնթացիներ', chapters: 16, testament: 'new' },
        { name: '2 Corinthians', armenian: 'Բ Կորնթացիներ', chapters: 13, testament: 'new' },
        { name: 'Galatians', armenian: 'Գաղատացիներ', chapters: 6, testament: 'new' },
        { name: 'Ephesians', armenian: 'Եփեսացիներ', chapters: 6, testament: 'new' },
        { name: 'Philippians', armenian: 'Փիլիպպեցիներ', chapters: 4, testament: 'new' },
        { name: 'Colossians', armenian: 'Կողոսացիներ', chapters: 4, testament: 'new' },
        { name: '1 Thessalonians', armenian: 'Ա Թեսաղոնիկեցիներ', chapters: 5, testament: 'new' },
        { name: '2 Thessalonians', armenian: 'Բ Թեսաղոնիկեցիներ', chapters: 3, testament: 'new' },
        { name: '1 Timothy', armenian: 'Ա Տիմոթէոս', chapters: 6, testament: 'new' },
        { name: '2 Timothy', armenian: 'Բ Տիմոթէոս', chapters: 4, testament: 'new' },
        { name: 'Titus', armenian: 'Տիտոս', chapters: 3, testament: 'new' },
        { name: 'Philemon', armenian: 'Փիլիմոն', chapters: 1, testament: 'new' },
        { name: 'Hebrews', armenian: 'Եբրայեցիներ', chapters: 13, testament: 'new' },
        { name: 'James', armenian: 'Յակոբ', chapters: 5, testament: 'new' },
        { name: '1 Peter', armenian: 'Ա Պետրոս', chapters: 5, testament: 'new' },
        { name: '2 Peter', armenian: 'Բ Պետրոս', chapters: 3, testament: 'new' },
        { name: '1 John', armenian: 'Ա Յովհաննէս', chapters: 5, testament: 'new' },
        { name: '2 John', armenian: 'Բ Յովհաննէս', chapters: 1, testament: 'new' },
        { name: '3 John', armenian: 'Գ Յովհաննէս', chapters: 1, testament: 'new' },
        { name: 'Jude', armenian: 'Հուդա', chapters: 1, testament: 'new' },
        { name: 'Revelation', armenian: 'Հայտնություն', chapters: 22, testament: 'new' }
    ]
};

// Comprehensive verse data for all books
const sampleVerses = {
    'Genesis': {
        1: [
            'Սկզբում Աստված ստեղծեց երկինքը և երկիրը:',
            'Եվ երկիրը դատարկ էր և անձև, և խավարը եղավ անդունդի երեսին:',
            'Եվ Աստծո Հոգին շարժվում էր ջրերի երեսին:',
            'Եվ Աստված ասաց. «Թող լույս լինի», և լույս եղավ:',
            'Եվ Աստված տեսավ, որ լույսը լավ է, և Աստված լույսը բաժանեց խավարից:'
        ],
        2: [
            'Այսպես ավարտվեցին երկինքը և երկիրը և նրանց բոլոր բանակները:',
            'Եվ Աստված յոթերորդ օրը ավարտեց իր աշխատանքը, որ նա արել էր:',
            'Եվ Աստված օրհնեց յոթերորդ օրը և սրբեց նրան:',
            'Որովհետև այդ օրը Աստված դադարեց իր բոլոր գործերից:'
        ],
        3: [
            'Օձը, սակայն, ամենաճարպիկն էր բոլոր դաշտային գազանների մեջ:',
            'Եվ նա ասաց կնոջը. «Իսկապես Աստված ասաց. «Մի՛ ուտեք այգուց ոչ մի ծառի պտուղ»:',
            'Կինը ասաց օձին. «Այգու ծառերի պտուղները կարող ենք ուտել:»'
        ]
    },
    'Exodus': {
        1: [
            'Սրանք են այն անունները, որոնք Իսրայելի որդիները, որոնք մտել էին Եգիպտոս:',
            'Յուրի հետ, յուրաքանչյուրը իր ընտանիքի հետ մտել էին:',
            'Ռուբեն, Սիմեոն, Լևի և Հուդա:',
            'Իսաքար, Զաբուլոն և Բենիամին:',
            'Դան և Նեփթաղի, Գադ և Ասեր:'
        ],
        2: [
            'Եվ մի մարդ գնաց Լևիի տոհմից և ամուսնացավ Լևիի դստեր հետ:',
            'Կինը հղիացավ և ծնեց որդի: Եվ նա տեսավ, որ նա գեղեցիկ է:',
            'Եվ նա նրան թաքցրեց երեք ամիս:',
            'Եվ երբ նրան այլևս չէին կարող թաքցնել, նա վերցրեց նրա համար:'
        ]
    },
    'Psalms': {
        1: [
            'Երանի այն մարդուն, ով չի քայլում չարերի խորհրդով:',
            'Եվ չի կանգնում մեղավորների ճանապարհին:',
            'Եվ չի նստում ծաղրողների նստարանին:',
            'Բայց նրա հաճույքը Տիրոջ օրենքում է:',
            'Եվ նա մտածում է նրա օրենքի մասին ցերեկ ու գիշեր:'
        ],
        23: [
            'Տերը իմ հովիվն է, ես չեմ պակասի:',
            'Նա ինձ պառկեցնում է կանաչ արոտներում:',
            'Նա ինձ տանում է հանգստության ջրերի մոտ:',
            'Նա վերականգնում է իմ հոգին:',
            'Նա ինձ տանում է արդարության ճանապարհներով իր անվան համար:'
        ]
    },
    'Matthew': {
        1: [
            'Հիսուս Քրիստոսի ծննդյան գիրքը, Դավթի որդու, Աբրահամի որդու:',
            'Աբրահամը ծնեց Իսահակին, Իսահակը ծնեց Հակոբին:',
            'Հակոբը ծնեց Հուդային և նրա եղբայրներին:',
            'Հուդան ծնեց Փարեսին և Զարահին Թամարից:',
            'Փարեսը ծնեց Եսրոմին, Եսրոմը ծնեց Արամին:'
        ],
        5: [
            'Երբ Հիսուսը տեսավ ամբոխները, նա բարձրացավ լեռը:',
            'Եվ երբ նա նստեց, նրա աշակերտները մոտեցան նրան:',
            'Եվ նա բացեց իր բերանը և սկսեց ուսուցանել նրանց:',
            'Երանի են աղքատները հոգով, որովհետև նրանցն է երկնքի արքայությունը:',
            'Երանի են սգավորները, որովհետև նրանք կմխիթարվեն:'
        ]
    },
    'John': {
        1: [
            'Սկզբում էր Բանը, և Բանը Աստծո մոտ էր, և Բանը Աստված էր:',
            'Նա սկզբում Աստծո մոտ էր:',
            'Ամեն ինչ նրա միջոցով եղավ, և առանց նրա ոչինչ չեղավ:',
            'Նրա մեջ կյանք էր, և կյանքը մարդկանց լույսն էր:',
            'Եվ լույսը փայլում է խավարում, և խավարը նրան չընդունեց:'
        ],
        3: [
            'Որովհետև Աստված այնքան սիրեց աշխարհը, որ տվեց իր միածին Որդուն:',
            'Որպեսզի ամեն ով, ով հավատում է նրան, չկորչի, այլ ունենա հավիտենական կյանք:',
            'Որովհետև Աստված չուղարկեց իր Որդուն աշխարհ, որպեսզի դատապարտի աշխարհը:',
            'Բայց որպեսզի աշխարհը նրա միջոցով փրկվի:',
            'Ով հավատում է նրան, նա չի դատապարտվի:'
        ]
    },
    'Romans': {
        1: [
            'Պողոսը, Հիսուս Քրիստոսի ծառան, կանչված առաքյալ:',
            'Նշանակված Աստծո ավետարանը:',
            'Որը նա նախապես խոստացել էր իր մարգարեների միջոցով:',
            'Սուրբ Գրերում իր Որդու մասին:',
            'Ով ծնվել է Դավթի սերնդից մարմնով:'
        ],
        8: [
            'Այսպես, ովքեր մարմնով են, չեն կարող հաճելի լինել Աստծուն:',
            'Եվ դուք չեք մարմնով, այլ Հոգով, եթե Աստծո Հոգին բնակվում է ձեր մեջ:',
            'Եվ եթե մեկը չունի Քրիստոսի Հոգին, նա նրան չի պատկանում:',
            'Եվ եթե Քրիստոսը ձեր մեջ է, մարմինը մահ է մեղքի պատճառով:',
            'Բայց Հոգին կյանք է արդարության պատճառով:'
        ]
    }
};

// Generate verses for all books and chapters
function generateAllVerses() {
    const allVerses = {};
    
    // Generate verses for Old Testament
    bibleData.oldTestament.forEach(book => {
        allVerses[book.name] = {};
        for (let chapter = 1; chapter <= Math.min(book.chapters, 10); chapter++) {
            allVerses[book.name][chapter] = generateChapterVerses(book.name, chapter, book.chapters);
        }
    });
    
    // Generate verses for New Testament
    bibleData.newTestament.forEach(book => {
        allVerses[book.name] = {};
        for (let chapter = 1; chapter <= Math.min(book.chapters, 10); chapter++) {
            allVerses[book.name][chapter] = generateChapterVerses(book.name, chapter, book.chapters);
        }
    });
    
    return allVerses;
}

// Generate sample verses for a specific chapter
function generateChapterVerses(bookName, chapterNum, totalChapters) {
    const verses = [];
    const verseCount = Math.min(10, Math.floor(Math.random() * 15) + 5); // 5-20 verses per chapter
    
    for (let i = 1; i <= verseCount; i++) {
        if (bookName === 'Genesis' && chapterNum === 1 && i <= 5) {
            // Use actual Genesis 1 verses
            verses.push(sampleVerses['Genesis'][1][i - 1] || `Սա է ${bookName} գրքի ${chapterNum} գլխի ${i} տողը:`);
        } else if (bookName === 'John' && chapterNum === 3 && i <= 5) {
            // Use actual John 3 verses
            verses.push(sampleVerses['John'][3][i - 1] || `Սա է ${bookName} գրքի ${chapterNum} գլխի ${i} տողը:`);
        } else {
            // Generate sample verse
            verses.push(`Սա է ${bookName} գրքի ${chapterNum} գլխի ${i} տողը: Այստեղ կլինի իրական տողի բովանդակությունը:`);
        }
    }
    
    return verses;
}

// Հայերեն թարգմանություններ
const translations = {
    chapters: 'գլուխներ',
    noVersesAvailable: 'Այս գլխի տողերը հասանելի չեն նմուշային տվյալներում:',
    sending: 'Ուղարկվում է...',
    thankYou: 'Շնորհակալություն! Ձեր հաղորդագրությունը հաջողությամբ ուղարկվել է:',
    nameRequired: 'Անունը պարտադիր է',
    emailRequired: 'Էլ. փոստը պարտադիր է',
    invalidEmail: 'Խնդրում ենք մուտքագրել վավեր էլ. փոստի հասցե',
    messageRequired: 'Հաղորդագրությունը պարտադիր է',
    allTestaments: 'Բոլոր Կտակարանները',
    oldTestament: 'Հին Կտակարան',
    newTestament: 'Նոր Կտակարան',
    allBooks: 'Բոլոր Գրքերը',
    searchPlaceholder: 'Որոնել տողեր, գրքեր կամ բանալի բառեր...',
    bibleExplorer: 'Աստվածաշնչի Բացահայտիչ',
    historyTitle: 'Հայկական Աստվածաշնչի Պատմությունը',
    aboutTitle: 'Մեսրոպ Մաշտոցի Մասին',
    contactTitle: 'Կապվեք Մեզ Հետ',
    name: 'Անուն',
    email: 'Էլ. փոստ',
    message: 'Հաղորդագրություն',
    sendMessage: 'Ուղարկել Հաղորդագրություն',
    quickLinks: 'Արագ Հղումներ',
    home: 'Գլխավոր',
    bible: 'Աստվածաշունչ',
    history: 'Պատմություն',
    about: 'Մեր Մասին',
    connect: 'Միանալ',
    copyright: '© 2024 Հայկական Աստվածաշունչ: Բոլոր իրավունքները պաշտպանված են:',
    preservingHeritage: 'Պահպանելով Հայաստանի սուրբ գրքերը և մշակութային ժառանգությունը'
};

// DOM տարրեր
const elements = {
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    testamentFilter: document.getElementById('testament-filter'),
    bookFilter: document.getElementById('book-filter'),
    oldTestamentBooks: document.getElementById('old-testament-books'),
    newTestamentBooks: document.getElementById('new-testament-books'),
    contactForm: document.getElementById('contact-form'),
    mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
    nav: document.querySelector('.nav')
};

// Նախաձեռնել հավելվածը
function init() {
    // Generate comprehensive verse data
    const allVerses = generateAllVerses();
    Object.assign(sampleVerses, allVerses);
    
    renderBibleBooks();
    setupEventListeners();
    populateBookFilter();
    setupMobileMenu();
}

// Render Աստվածաշնչի գրքերը DOM-ում
function renderBibleBooks() {
    renderTestament('old', elements.oldTestamentBooks);
    renderTestament('new', elements.newTestamentBooks);
}

// Render կոնկրետ կտակարան
function renderTestament(testamentType, container) {
    const books = testamentType === 'old' ? bibleData.oldTestament : bibleData.newTestament;
    
    container.innerHTML = books.map(book => `
        <div class="book-item" data-book="${book.name}" data-testament="${book.testament}">
            <h3 class="book-title">${book.name}</h3>
            <p class="book-info">${book.armenian} • ${book.chapters} ${translations.chapters}</p>
            <div class="chapters-list" id="chapters-${book.name.replace(/\s+/g, '-')}">
                ${generateChapterButtons(book.chapters, book.name)}
            </div>
            <div class="verses-display" id="verses-${book.name.replace(/\s+/g, '-')}"></div>
        </div>
    `).join('');
}

// Ստեղծել գլուխների կոճակները գրքի համար
function generateChapterButtons(chapterCount, bookName) {
    const chapters = [];
    for (let i = 1; i <= chapterCount; i++) {
        chapters.push(`<button class="chapter-btn" data-chapter="${i}" data-book="${bookName}">${i}</button>`);
    }
    return chapters.join('');
}

// Populate book filter dropdown
function populateBookFilter() {
    const allBooks = [...bibleData.oldTestament, ...bibleData.newTestament];
    const bookFilter = elements.bookFilter;
    
    // Clear existing options except the first one
    bookFilter.innerHTML = `<option value="">${translations.allBooks}</option>`;
    
    allBooks.forEach(book => {
        const option = document.createElement('option');
        option.value = book.name;
        option.textContent = book.name;
        bookFilter.appendChild(option);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    elements.searchInput.addEventListener('input', handleSearch);
    elements.searchBtn.addEventListener('click', handleSearch);
    
    // Filter functionality
    elements.testamentFilter.addEventListener('change', handleFilter);
    elements.bookFilter.addEventListener('change', handleFilter);
    
    // Bible book interactions
    document.addEventListener('click', handleBibleInteractions);
    
    // Form submission
    if (elements.contactForm) {
        elements.contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Handle search functionality
function handleSearch() {
    const searchTerm = elements.searchInput.value.toLowerCase().trim();
    const testamentFilter = elements.testamentFilter.value;
    const bookFilter = elements.bookFilter.value;
    
    filterBooks(searchTerm, testamentFilter, bookFilter);
}

// Handle filter changes
function handleFilter() {
    handleSearch();
}

// Filter books based on search and filter criteria
function filterBooks(searchTerm, testamentFilter, bookFilter) {
    const allBooks = [...bibleData.oldTestament, ...bibleData.newTestament];
    let filteredBooks = allBooks;
    
    // Apply testament filter
    if (testamentFilter) {
        filteredBooks = filteredBooks.filter(book => book.testament === testamentFilter);
    }
    
    // Apply book filter
    if (bookFilter) {
        filteredBooks = filteredBooks.filter(book => book.name === bookFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredBooks = filteredBooks.filter(book => 
            book.name.toLowerCase().includes(searchTerm) ||
            book.armenian.toLowerCase().includes(searchTerm) ||
            searchInVerses(book.name, searchTerm)
        );
    }
    
    // Update display
    updateBookDisplay(filteredBooks);
}

// Search in verses
function searchInVerses(bookName, searchTerm) {
    if (sampleVerses[bookName]) {
        return Object.values(sampleVerses[bookName]).some(verses =>
            verses.some(verse => verse.toLowerCase().includes(searchTerm))
        );
    }
    return false;
}

// Update book display based on filters
function updateBookDisplay(filteredBooks) {
    const oldTestament = filteredBooks.filter(book => book.testament === 'old');
    const newTestament = filteredBooks.filter(book => book.testament === 'new');
    
    // Show/hide testaments based on results
    document.querySelector('[data-testament="old"]').style.display = oldTestament.length > 0 ? 'block' : 'none';
    document.querySelector('[data-testament="new"]').style.display = newTestament.length > 0 ? 'block' : 'none';
    
    // Update book displays
    renderTestament('old', elements.oldTestamentBooks);
    renderTestament('new', elements.newTestamentBooks);
}

// Handle Bible book interactions
function handleBibleInteractions(e) {
    if (e.target.classList.contains('book-item')) {
        toggleChapters(e.target);
    } else if (e.target.classList.contains('chapter-btn')) {
        showVerses(e.target);
    }
}

// Toggle chapters display for a book
function toggleChapters(bookElement) {
    const chaptersList = bookElement.querySelector('.chapters-list');
    const isVisible = chaptersList.classList.contains('show');
    
    // Hide all other chapter lists
    document.querySelectorAll('.chapters-list.show').forEach(list => {
        if (list !== chaptersList) {
            list.classList.remove('show');
        }
    });
    
    // Hide all verse displays
    document.querySelectorAll('.verses-display.show').forEach(display => {
        display.classList.remove('show');
    });
    
    // Toggle current chapters list
    chaptersList.classList.toggle('show');
}

// Show verses for a specific chapter
function showVerses(chapterBtn) {
    const bookName = chapterBtn.dataset.book;
    const chapterNum = parseInt(chapterBtn.dataset.chapter);
    const bookElement = chapterBtn.closest('.book-item');
    const versesDisplay = bookElement.querySelector('.verses-display');
    
    // Hide other verse displays
    document.querySelectorAll('.verses-display.show').forEach(display => {
        if (display !== versesDisplay) {
            display.classList.remove('show');
        }
    });
    
    // Show verses for this chapter
    if (sampleVerses[bookName] && sampleVerses[bookName][chapterNum]) {
        const verses = sampleVerses[bookName][chapterNum];
        versesDisplay.innerHTML = verses.map((verse, index) => `
            <div class="verse-item">
                <span class="verse-number">${chapterNum}:${index + 1}</span>
                <span class="verse-text">${verse}</span>
            </div>
        `).join('');
        versesDisplay.classList.add('show');
    } else {
        // Generate verses if they don't exist
        const generatedVerses = generateChapterVerses(bookName, chapterNum, 10);
        sampleVerses[bookName] = sampleVerses[bookName] || {};
        sampleVerses[bookName][chapterNum] = generatedVerses;
        
        versesDisplay.innerHTML = generatedVerses.map((verse, index) => `
            <div class="verse-item">
                <span class="verse-number">${chapterNum}:${index + 1}</span>
                <span class="verse-text">${verse}</span>
            </div>
        `).join('');
        versesDisplay.classList.add('show');
    }
}

// Setup mobile menu functionality
function setupMobileMenu() {
    if (elements.mobileMenuBtn && elements.nav) {
        elements.mobileMenuBtn.addEventListener('click', () => {
            elements.nav.classList.toggle('show');
            elements.mobileMenuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!elements.nav.contains(e.target) && !elements.mobileMenuBtn.contains(e.target)) {
                elements.nav.classList.remove('show');
                elements.mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// Handle form submission
function handleFormSubmission(e) {
    e.preventDefault();
    
    // Clear previous error messages
    clearFormErrors();
    
    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    
    // Validate form
    let isValid = true;
    
    if (!name) {
        showFormError('name', translations.nameRequired);
        isValid = false;
    }
    
    if (!email) {
        showFormError('email', translations.emailRequired);
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFormError('email', translations.invalidEmail);
        isValid = false;
    }
    
    if (!message) {
        showFormError('message', translations.messageRequired);
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission
        submitForm(name, email, message);
    }
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form error message
function showFormError(fieldName, message) {
    const errorElement = document.getElementById(`${fieldName}-error`);
    const inputElement = document.getElementById(fieldName);
    
    if (errorElement && inputElement) {
        errorElement.textContent = message;
        inputElement.classList.add('error');
    }
}

// Clear all form errors
function clearFormErrors() {
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.classList.remove('error');
    });
}

// Submit form (simulated)
function submitForm(name, email, message) {
    const submitBtn = elements.contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.textContent = translations.sending;
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success message
        showFormSuccess();
        
        // Reset form
        elements.contactForm.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Show form success message
function showFormSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.color = '#28a745';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '1rem';
    successMessage.textContent = translations.thankYou;
    
    elements.contactForm.appendChild(successMessage);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Add CSS for mobile menu
function addMobileMenuStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav.show {
                display: block !important;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--primary-color);
                padding: 1rem;
                box-shadow: var(--shadow);
            }
            
            .nav.show .nav-list {
                flex-direction: column;
                gap: 1rem;
            }
            
            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    addMobileMenuStyles();
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        init,
        handleSearch,
        handleFilter,
        isValidEmail,
        showFormError,
        clearFormErrors,
        generateAllVerses,
        generateChapterVerses
    };
}
