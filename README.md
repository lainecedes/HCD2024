# Creative Captioning, Bitch!
Dit is een repo voor de individuele opdracht voor het vak Human Centered Design.

## The assignment
Marie van Driessche

Marie is docent bij CMD en ze werkt als ontwerper bij Unc Inc. Marie is doof (en zo geboren) enwil graag naar podcasts luisteren en daar net zoveel details in horen als mensen die kunnen horen. En ze wil graag dat ze geluid in films net zo kan ervaren als mensen die wel geluid horen.

Podcasts luisteren en de details ‘zien’ zoals mensen dat moeten horen + geluid in film

Ze houdt niet heel erg van podcasts omdat ze saai zijn, films zijn boeiender (meer visueel), maar heeft meestal dat er bij de captions dat geluiden bijvoorbeeld niet uitgebreid genoeg is beschreven.  

Series waar naar ze kijkt:
- The Bake Off
- 3 Body Problem 
- The Bear
- The Menu
- Rupaul's Drag Race
- The Chestnut Man


## Wat is Closed Captioning?
Closed captioning (gesloten ondertiteling) en subtitling (ondertiteling) is dus een manier van spraak tekst op een televisie, video, of ander visuele display om extra of toegevoegde informatie te laten zien voor meer context. Beide worden gemaakt met transcriptie van de opgenomen audio.

HTML5 beschrijft subtitles als een transcriptie of vertaling van de dialoog wanneer geluid aanwezig is maar niet begrepen is door de gebruiker (bijv, dialoog in een ander taal). Maar ze kunnen ook gebruikt worden als je bijvoorbeeld in een gehorig ruimte zit, of als je gewoon je koptelefooon bent vergeten in de trein. 

Bij closed captions is het een ander verhaal: Captions worden beschreven als een transcriptie of vertaling van de dialoog, geluidseffecten, relevante music cues, en dergelijke informatie in audio wanneer geluid niet duidelijk genoeg of geheel afwezig is (bijv. als de gebruiker op mute staat, of als de gebruiker doof of slechthorend is.). Deze captions worden meestal aangegeven met het CC symbool onderaan de video en kan handmatig worden aan of uitgezet.

## Week 1 - 3 april

### User Trip
Ik was meer benieuwd om hoe dit zou zitten met reality achtige shows, bij Rupaul's Drag Race heb je veel sensatie, drama en vooral de optredens met veel geluid en muziek en waarbij er veel gebeurd (en hetzelfde met The British Bake Off), dus ben ik begonnen met het kijken van een paar stukken van deze series om dit te testen.

#### Test 1: Rupaul's Drag Race

Rupaul's Drag Race: S12:A7 - Madonna: The Unauthorized Rusical
Vanaf begin 25:40, 6 min lang

**Closed Captioning, geen geluid**

 - Emoties zoals verrassing en in shock zijn zijn niet heel erg goed overgebracht, zie je eigenlijk nauwelijks. Alleen emoties met lachen zie je dus met een [laugh] stukje
 - Optreden: Je ziet dat ze dus zingt en de caption een noot heeft om aan te tonen dat ze zingt met emotie maar is niet heel erg duidelijk genoeg
 - Optreden: Drag queen gebruikt instrumenten in haar optreden, misschien kan dit wat aantoonbaar gemaakt worden met animaties

**Closed Captioning, met geluid**


## Vragen
1. Custom closed captioning: Is het storend als dit ergens anders voorkomt dan alleen midden-onderaan in de video? (storend als in te druk, te afleidend van de content dat word laten zien)

## Ideeen
Wat ik heb meegekregen van een aantal notities in mijn groepje is dat:

- Trillingen kan helpen met emoties overbrengen, alleen moet het niet teveel gebruikt worden en alleen bij echt prominente geluiden zoals schoten die worden gelost of een deur die hard wordt gesloten
- Heel visueel maken, mini animaties maken die in beeld komen
- Visuele typografische effecten proberen toe te voegen bij de closed captioning: Kleuren en filters bijvoorbeeld
- Effects in video of erbuiten, geluid die dus misschien binnenkomt laten zien van de buitenkant of geluid die wegvalt ook weg laten "vallen" uit het beeld en in het kader



## Week 2: presenting RuPaul's Drag Race concept visualized
Ik had mijn idee laten zien...

Feedback:
Leuke idee en hieruit kan je veel emoties en persoonlijkheid tonen met de verschillende drag queens. De effecten met de voetstappen is een goed idee om dat te laten zien. Ook kan ik bijvoorbeeld de context van de gesprekken en bepaalde woorden laten zien, bij Rupaul's Drag Race heb je verschillende clips waarin ze een drag show
Ze is benieuwd of ik veel overdreven effecten zoals in stripboeken en anime strips kan toevoegen in de vorm van animaties (visual cues, "onomatopoeia")

### Eerste ontwerpen
Ik heb HappyScribe gebruikt om de spraak in captions te veranderen en er zijn wel wat lange zinnen uit gekomen. Ik heb de keuze gemaakt om deze zinnen zo kort mogelijk te houden zodat ik de visual cues and sound effects het beste kan laten zien. Een voorbeeld ervan:

```
16
And then when I learned that I could make money being a performer, bitch, the game changed.
```

Naar: 

```
16
And then when I learned that I could make

17
money being a performer,

18
bitch,

19
the game changed.
```

Hierbij kan ik makkelijker elk woord 'besturen' en ze een aparte effect geven die beter past bij het overbrengen van context. Dit heeft wat meer detail en is wat minder saai dan dat je een heel zin leest.

<img src="closed-captions/readme-images/ClosedCaptioning.png" width="600px" alt="Closed Captioning voorbeeld">

Ook heb ik voor de visual cues gifjes gemaakt in Procreate om de geluiden en sfeer te verduidelijken in een sketchbook achtige stijl. Als iemand bijvoorbeeld lacht, of schrikt, of gewoon simpele dingetjes (add nonsense) zoals rond draaien, dat je dat echt uit hun mond, of om hun lichaam kan zien dat het gebeurt.

Verder had ik als leuk idee dat ik effecten kon laten zien gebaseerd op de persoonlijkheden van de drag queens. Dit wil ik zo veel mogelijk visueel laten uitdrukken: ELke drag queen heeft dus een eigen intro met muziek, en andere houdingen, en probeer ik dit te toen met getimede achtergrondeffecten en te spelen met meerdere fonts per persoon.

## Wat kan ik uit testen
 - Spans voor letters zodat ik elk letter kan animeren
 - Variable font? interesting

## Wat heb ik verbeterd
 Ik kwam erachter dat het beter was om de timing van de animaties preciezer te maken met currentTime in de video ipv highlightedIndex. Omdat je met currentTime direct de secondes kan selecteren, kan ik ook precies een animatie laten afspelen en stoppen waar ik wil, met highlightIndex is dat lastiger want dat werkt met de caption times die ik heb in mijn captions.js. Een manier kan zijn om de secondes een beetje aan te passen maar dat kan risky zijn en de hele caption volgorde overhoop gooien

 ## Week 3

 ### Testen met Marie

Ik had mijn concept aan Marie getest en ze vond het echt tof om te zien. Ze vond de kleuren en effecten in het algemeen top, en noemde vooral het laten zien van het achtergrond muziek met een party effect en duidelijke omschrijving een goede punt. Ze was tevreden over de nagedrukte teksten en de kleine visual cues, dat gaf meer detail over wat er precies gebeurde. Ze had wat feedback over wat kleinere dingen die ik opzettelijk heb gedaan voor testen, zoals:

 - De ondertiteling wat verder omhoog zetten (dit kwam ik erachter voor het testen, toen de grote monitor alles opeens had verschaald)
 - Het contrast van sommige woorden fixen
 - Video wat groter maken voor beter zicht

Ik had vooraf ook een vraag aan haar gesteld:
 - 1. Is de beschrijving van de achtergrond geluiden duidelijk genoeg?
Dit heb ik gedaan omdat ik wilde testen met het uitgebreid beschrijven van het geluid wat er afspeelt, sinds ze een week geleden had aangekaart dat sommige beschrijvingen van geluid heel saai zijn of veelal wat informatie miste.
 
Ze was er tevreden mee zei dat het duidelijk genoeg was. Ik was blij om te zien dat ze het zo tof vond!

## Week 4 

### Verbeteringen
[coming soon]


## Reflectie


## Sources
- [Mozilla Developer Network - Closed captioning](https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video)
- [Wikipedia - Closed Captioning](https://en.wikipedia.org/wiki/Closed_captioning)
- [Mozilla Developer Network - WebVTT API](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
- [Mozilla Developer Network - <track> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [Gebruikte video: Drag Race Season 16 Episode 2 First Act 😍💄 RuPaul’s Drag Race](https://www.youtube.com/watch?v=k6RUW2RRj78)
- [HappyScribe voor het transcriberen van de captions in de video met behulp van AI](https://www.happyscribe.com)
- Vasilis' SRT naar Caption Times tool + Web Typography project source

### Marie's recommendations
- Kinetic Typography:
[Pulp Fiction: What does Marsellus Wallace look like?](https://www.youtube.com/watch?v=aopg7JqbgMo&t=5s)
[Pulp Fiction - Kinetic Typography](https://www.youtube.com/watch?v=wF8f8w6HPoo)

