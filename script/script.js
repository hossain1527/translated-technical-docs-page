const langEl = document.querySelector('.langWrap')
const linksEl = document.querySelectorAll('#anch1')

const mainTitleEl = document.querySelector('#maintitle')

const titleEl1 = document.querySelector('.title1')
const titleEl2 = document.querySelector('.title2')
const titleEl3 = document.querySelector('.title3')
const titleEl4 = document.querySelector('.title4')
const titleEl5 = document.querySelector('.title5')

const anchorEl1 = document.querySelector('#intro')
const anchorEl2 = document.querySelector('#know')
const anchorEl3 = document.querySelector('#about')
const anchorEl4 = document.querySelector('#topic1')
const anchorEl5 = document.querySelector('#topic2')

const paraEl1 = document.querySelector('.para1')
const paraEl2 = document.querySelector('.para2')
const paraEl3 = document.querySelector('.para3')
const paraEl4 = document.querySelector('.para4')
const paraEl5 = document.querySelector('.para5')
const paraEl6 = document.querySelector('.para6')
const paraEl7 = document.querySelector('.para7')
const paraEl8 = document.querySelector('.para8')

const codeEl1 = document.querySelector('#code1')

const listEl1 = document.querySelector("#list1")
const listEl2 = document.querySelector("#list2")
const listEl3 = document.querySelector("#list3")

linksEl.forEach(element => {
   element.addEventListener('click', () => {
      langEl.querySelector('.active').classList.remove('active')
      element.classList.add('active')

      const attr = element.getAttribute('language')  

    mainTitleEl.textContent = data[attr].maintitle

    titleEl1.textContent = data[attr].title1
    titleEl2.textContent = data[attr].title2
    titleEl3.textContent = data[attr].title3
    titleEl4.textContent = data[attr].title4
    titleEl5.textContent = data[attr].title5

    anchorEl1.textContent = data[attr].intro
    anchorEl2.textContent = data[attr].know
    anchorEl3.textContent = data[attr].about
    anchorEl4.textContent = data[attr].topic1
    anchorEl5.textContent = data[attr].topic2

    paraEl1.textContent = data[attr].para1
    paraEl2.textContent = data[attr].para2
    paraEl3.textContent = data[attr].para3
    paraEl4.textContent = data[attr].para4
    paraEl5.textContent = data[attr].para5
    paraEl6.textContent = data[attr].para6
    paraEl7.textContent = data[attr].para7
    paraEl8.textContent = data[attr].para8

    listEl1.textContent = data[attr].list1 
    listEl2.textContent = data[attr].list2
    listEl3.textContent = data[attr].list3

   })
})

let data = {
    
    "english":
        {
        "maintitle":"Technical Documentation",
        "title1":"Introduction",
        "title2":"What you should already know",
        "title3":"About topic",
        "title4":"Topic 1",
        "title5":"Topic 2",

        "intro":"Introduction",
        "know":"What you should already know",
        "about":"About the topic",
        "topic1":"Topic 1",
        "topic2":"Topic 2",

        "para1":"Some content about the main topic, for example JavaScript or React Js documentation introduction about the language.",
        "para2":"Background information before getting into the topic:",
        "para3":"Any other content to be covered before learning this topic",
        "para4":"More lines about the topic. For example, how the basic functionalities work, features etc...",
        "para5":"Technical documentation should be through and to the point.",
        "para6":"Write about features, comparisons with other languages etc.",
        "para7":"Getting started with the actual documentaion content. This would come in a different color and font indicating lines of code.",
        "para8":"Another topic about the main topic, for example, if the topic is JavaScript, this could be variables or data types in JavaScript.",

        "list1":"Some list content",
        "list2":"Prerequisites",
        "list3":"Working and assumptions"
        },
    
    "portuguese":
        {
        "maintitle":"Documentação técnica",
        "title1":"Introdução",
        "title2":"O que você já deveria saber",
        "title3":"Sobre o tópico",
        "title4":"Tópico 1",
        "title5":"Tópico 2",

        "intro":"Introdução",
        "know":"O que você já deveria saber",
        "about":"Sobre o assunto",
        "topic1":"Tópico 1",
        "topic2":"Tópico 2",

        "para1":"Algum conteúdo sobre o tópico principal, por exemplo JavaScript ou introdução de documentação React Js sobre a linguagem.",
        "para2":"Informações básicas antes de entrar no tópico:",
        "para3":"Qualquer outro conteúdo a ser abordado antes de aprender este tópico",
        "para4":"Mais linhas sobre o assunto. Por exemplo, como funcionam as funcionalidades básicas, recursos etc ...",
        "para5":"A documentação técnica deve ser direta e direta.",
        "para6":"Escreva sobre recursos, comparações com outros idiomas, etc.",
        "para7":"Introdução ao conteúdo real da documentação. Isso viria em uma cor e fonte diferentes, indicando as linhas de código.",
        "para8":"Outro tópico sobre o tópico principal, por exemplo, se o tópico for JavaScript, podem ser variáveis ​​ou tipos de dados em JavaScript.",

        "list1":"Algum conteúdo da lista",
        "list2":"Pré-requisitos",
        "list3":"Trabalho e suposições"
        },

    "french":
        {
        "maintitle":"Documentation technique",
        "title1":"l' introduction",
        "title2":"Ce que vous devriez déjà savoir",
        "title3":"À propos du sujet",
        "title4":"Thème 1",
        "title5":"Thème 2",

        "intro":"l' introduction",
        "know":"Ce que vous devriez déjà savoir",
        "about":"À propos du sujet",
        "topic1":"Thème 1",
        "topic2":"Thème 2",

        "para1":"Du contenu sur le sujet principal, par exemple une introduction à la documentation JavaScript ou React Js sur le langage.",
        "para2":"Informations de base avant d'entrer dans le sujet:",
        "para3":"Tout autre contenu à couvrir avant d'apprendre ce sujet",
        "para4":"Plus de lignes sur le sujet. Par exemple, comment fonctionnent les fonctionnalités de base, les fonctionnalités, etc.",
        "para5":"La documentation technique doit être complète et précise.",
        "para6":"Écrivez sur les fonctionnalités, les comparaisons avec d'autres langues, etc.",
        "para7":"Prise en main du contenu réel de la documentaion. Cela viendrait dans une couleur et une police différentes indiquant les lignes de code.",
        "para8":"Un autre sujet concernant le sujet principal, par exemple, si le sujet est JavaScript, il peut s'agir de variables ou de types de données en JavaScript.",

        "list1":"Certains contenus de liste",
        "list2":"Conditions préalables",
        "list3":"Travail et hypothèses"
        },

    "dutch":
        {
        "maintitle":"Technische documentatie",
        "title1":"Invoering",
        "title2":"Wat u al moet weten",
        "title3":"Over onderwerp",
        "title4":"Onderwerp 1",
        "title5":"Onderwerp 2",

        "intro":"Invoering",
        "know":"Wat u al moet weten",
        "about":"Over het onderwerp",
        "topic1":"Onderwerp 1",
        "topic2":"Onderwerp 2",

        "para1":"Sommige inhoud over het hoofdonderwerp, bijvoorbeeld JavaScript of React Js documentatie-introductie over de taal.",
        "para2":"Basisinformatie voordat u het onderwerp invoert:",
        "para3":"Alle andere inhoud die moet worden behandeld voordat u dit onderwerp leert",
        "para4":"Meer regels over het onderwerp. Bijvoorbeeld hoe de basisfunctionaliteiten werken, features etc ...",
        "para5":"Technische documentatie moet door en door zijn.",
        "para6":"Schrijf over functies, vergelijkingen met andere talen enz.",
        "para7":"Aan de slag met de daadwerkelijke documentatie-inhoud. Dit zou in een andere kleur komen en in een ander lettertype dat coderegels aangeeft.",
        "para8":"Een ander onderwerp over het hoofdonderwerp, bijvoorbeeld als het onderwerp JavaScript is, kunnen dit variabelen of gegevenstypen in JavaScript zijn.",

        "list1":"Sommige lijstinhoud",
        "list2":"Vereisten",
        "list3":"Werken en aannames"
        },

    "spanish":
        {
        "maintitle":"Documentación técnica",
        "title1":"Introducción",
        "title2":"Lo que ya deberías saber",
        "title3":"Sobre el tema",
        "title4":"Tema 1",
        "title5":"Tema 2",

        "intro":"Introducción",
        "know":"Lo que ya deberías saber",
        "about":"Sobre el tema",
        "topic1":"Tema 1",
        "topic2":"Tema 2",

        "para1":"Algunos contenidos sobre el tema principal, por ejemplo, JavaScript o una introducción a la documentación de React Js sobre el idioma.",
        "para2":"Información básica antes de entrar al tema:",
        "para3":"Cualquier otro contenido que deba cubrirse antes de aprender este tema",
        "para4":"Más líneas sobre el tema. Por ejemplo, cómo funcionan las funcionalidades básicas, características, etc.",
        "para5":"La documentación técnica debe ser completa y precisa.",
        "para6":"Escribe sobre características, comparaciones con otros idiomas, etc.",
        "para7":"Empezando con el contenido de la documentación real. Esto vendría en un color y una fuente diferentes, indicando líneas de código.",
        "para8":"Otro tema sobre el tema principal, por ejemplo, si el tema es JavaScript, esto podría ser variables o tipos de datos en JavaScript.",

        "list1":"Algunos contenidos de lista",
        "list2":"Prerrequisitos",
        "list3":"Trabajo y supuestos"
        },

    "germany":
        {
        "maintitle":"Technische Dokumentation",
        "title1":"Einführung",
        "title2":"Was du bereits wissen solltest",
        "title3":"Über das Thema",
        "title4":"Thema 1",
        "title5":"Thema 2",

        "intro":"Einführung",
        "know":"WWas du bereits wissen solltest",
        "about":"Über das Thema",
        "topic1":"Thema 1",
        "topic2":"Thema 2",

        "para1":"Einige Inhalte zum Hauptthema, z. B. Einführung in die JavaScript- oder React Js-Dokumentation zur Sprache.",
        "para2":"Grundlegende Informationen vor dem Betreten des Themas:",
        "para3":"Alle anderen Inhalte, die behandelt werden müssen, bevor Sie dieses Thema lernen",
        "para4":"Weitere Zeilen zum Thema. Zum Beispiel, wie die grundlegenden Funktionen funktionieren, Funktionen usw.",
        "para5":"Die technische Dokumentation sollte durch und auf den Punkt sein.",
        "para6":"Schreiben Sie über Funktionen, Vergleiche mit anderen Sprachen usw.",
        "para7":"Erste Schritte mit dem eigentlichen Dokumentationsinhalt. Dies würde in einer anderen Farbe und Schriftart erfolgen, die  Codezeilen anzeigt.",
        "para8":"Ein weiteres Thema zum Hauptthema. Wenn das Thema beispielsweise JavaScript ist, können dies Variablen oder Datentypen in JavaScript sein.",

        "list1":"Einige Listeninhalte",
        "list2":"Voraussetzungen",
        "list3":"Arbeitsweise und Annahmen"
        },

    "arabic":
        {
        "maintitle":"التوثيق الفني",
        "title1":"المقدمة",
        "title2":"ما يجب أن تعرفه بالفعل",
        "title3":"حول الموضوع",
        "title4":"الموضوع 1",
        "title5":"الموضوع 2",

        "intro":"المقدمة",
        "know":"ما يجب أن تعرفه بالفعل",
        "about":"حول الموضوع",
        "topic1":"الموضوع 1",
        "topic2":"الموضوع 2",

        "para1":"بعض المحتوى حول الموضوع الرئيسي ، على سبيل المثال ، مقدمة توثيق JavaScript أو React Js حول اللغة.",
        "para2":"معلومات أساسية قبل الدخول فيالموضوع:",
        "para3":"أي محتوى آخر يجب تغطيته قبل تعلمهذا الموضوع",
        "para4":"المزيد من السطور حول الموضوع. على سبيل المثال ، كيف تعمل الوظائف الأساسية ، الميزات ، إلخ ...",
        "para5":"يجب أن يكون التوثيق الفني من خلال وإلى النقطة.",
        "para6":"اكتب عن الميزات والمقارنات مع اللغات الأخرى وما إلى ذلك.",
        "para7":"البدء بالمحتوى التوثيقي الفعلي. قد يأتي هذا بلون مختلف وخط يشير إلى سطور التعليمات البرمجية.",
        "para8":"موضوع آخر حول الموضوع الرئيسي ، على سبيل المثال ، إذا كان الموضوع هو JavaScript ، فقد يكون هذا متغيرات أو أنواع بيانات في JavaScript.",

        "list1":"بعض محتويات القائمة",
        "list2":"المتطلبات الأساسية",
        "list3":"العمل والافتراضات"
        }
    }



 

