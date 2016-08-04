﻿(function (translator) {
	translator.translations["hu"] = {
		// 02-MAR-2014 16:57
		// javascript alerts or messages
		"testneteditionactivated": "TESTNET KIADÁS AKTIVÁLVA",
		"paperlabelbitcoinaddress": "Bitcoin cím:",
		"paperlabelprivatekey": "Privát kulcs:",
		"paperlabelencryptedkey": "Titkosított privát kulcs (Jelszó szükséges)",
		"bulkgeneratingaddresses": "Cím generálás... ",
		"brainalertpassphrasetooshort": "A megadott jelmondat túl rövid.\n\n",
		"brainalertpassphrasewarning": "Figyelem: Fontos, hogy erős jelmondatot válasszon, mert különben a jelmondatot nyers erővel feltörhetik és a bitcoinjait ellophatják.",
		"brainalertpassphrasedoesnotmatch": "A jelmondat és az ellenőrző jelmondat nem azonos.",
		"detailalertnotvalidprivatekey": "A beadott szöveg nem érvénytelen Privát Kulcs",
		"detailconfirmsha256": "Az ön által beadott szöveg érvénytelen Privát Kulcs!\n\nSzeretné a beadott szöveget jelmondatként kezelni, és annak SHA256 zanzájából egy Privát Kulcsot előállítani?\n\nFigyelem: Fontos, hogy erős jelmondatot válasszon, mert különben a jelmondatot nyers erővel feltörhetik és a bitcoinjait ellophatják.",
		"bip38alertincorrectpassphrase": "Érvénytelen jelmondat a titkosított privát kulcshoz.",
		"bip38alertpassphraserequired": "A BIP38 kulcshoz jelmondat szükséges",
		"vanityinvalidinputcouldnotcombinekeys": "Érvénytelen bemenet. A kulcsok nem tartoznak össsze.",
		"vanityalertinvalidinputpublickeysmatch": "Érvénytelen bemenet. A két megadott nyilvános kulcs azonos. Két különböző kulcs bevitelére van szükség.",
		"vanityalertinvalidinputcannotmultiple": "Érvénytelen bemenet. Két nyilvános kulcs összeszorzása nem lehetséges. Válassza az 'Összeadás'-t, ha két nyilvános kulcsból szeretne egy bitcoin címet kapni.",
		"vanityprivatekeyonlyavailable": "Csak két privát kulcs kombinálásakor lehetséges",
		"vanityalertinvalidinputprivatekeysmatch": "Érvénytelen bemenet. A két megadott privát kulcs azonos. Két különböző kulcs bevitelére van szükség.",

		// header and menu html
		"tagline": "Nyílt forráskódú, kliens oldali JavaScript, Bitcoin pénztárca előállítására",
		"generatelabelbitcoinaddress": "A bitcoin cím előállítása...",
		"generatelabelmovemouse": "MOZGASSA az egeret, ha fokozni szeretné a véletlenszerűséget...",
		"generatelabelkeypress": "VAGY gépeljen be néhány véletlenszerű karaktert ebbe a szövegdobozba",
		"singlewallet": "Egyszerű pénztárca",
		"paperwallet": "Papír pénztárca",
		"bulkwallet": "Tömeges pénztárca",
		"brainwallet": "Fejben tartott pénztárca",
		"vanitywallet": "Kérkedő pénztárca",
		"splitwallet": "Részekre bontott ~",
		"detailwallet": "A pénztárca részletei",

		// footer html
		"footerlabeldonations": "Adományok:",
		"footerlabeltranslatedby": "Fordította: 1GEBor11XtqDoamipB8nAV7o4fNW5JcrUD",
		"footerlabelpgp": "PGP",
		"footerlabelversion": "Változatok története",
		"footerlabelgithub": "GitHub kódtár",
		"footerlabelgithubzip": "zip",
		"footerlabelsig": "sig",
		"footerlabelcopyright1": "Copyright bitaddress.org.",
		"footerlabelcopyright2": "Az egyes JavaScript kódok szerzőinek jogai a forráskódon belül találhatók meg.",
		"footerlabelnowarranty": "Garancia nincs.",

		// status html
		"statuslabelcryptogood": "&#10004; Good!", //TODO: please translate
		"statuslabelcryptogood1": "Your browser can generate cryptographically random keys using window.crypto.getRandomValues", //TODO: please translate
		"statusokcryptogood": "OK", //TODO: please translate
		"statuslabelcryptobad": "&times; Oh no!", //TODO: please translate
		"statuslabelcryptobad1": "Your browser does NOT support window.crypto.getRandomValues. You should use a more modern browser with this generator to increase the security of the keys generated.",
		"statusokcryptobad": "OK", //TODO: please translate
		"statuslabelunittestsgood": "&#10004; Good!", //TODO: please translate
		"statuslabelunittestsgood1": "All synchronous unit tests passed.", //TODO: please translate
		"statusokunittestsgood": "OK", //TODO: please translate
		"statuslabelunittestsbad": "&times; Oh no!", //TODO: please translate
		"statuslabelunittestsbad1": "Some synchronous unit tests DID NOT pass. You should find another browser to use with this generator.", //TODO: please translate
		"statusokunittestsbad": "OK", //TODO: please translate
		"statuslabelprotocolgood": "&#10004; Good!", //TODO: please translate
		"statuslabelprotocolgood1": "You are running this generator from your local computer. <br />Tip: Double check you are offline by trying ", //TODO: please translate
		"statusokprotocolgood": "OK", //TODO: please translate
		"statuslabelprotocolbad": "&#9888; Think twice!", //TODO: please translate
		"statuslabelprotocolbad1": "You appear to be running this generator online from a live website. For valuable wallets it is recommended to", //TODO: please translate
		"statuslabelprotocolbad2": "download", //TODO: please translate
		"statuslabelprotocolbad3": "the zip file from GitHub and run this generator offline as a local html file.", //TODO: please translate
		"statusokprotocolbad": "OK", //TODO: please translate
		"statuslabelkeypool1": "This is a log of all the Bitcoin Addresses and Private Keys you generated during your current session. Reloading the page will create a new session.", //TODO: please translate
		"statuskeypoolrefresh": "Refresh", //TODO: please translate
		"statusokkeypool": "OK", //TODO: please translate

		// single wallet html
		"newaddress": "Új cím előállítása",
		"singleprint": "Nyomtatás",
		"singlelabelbitcoinaddress": "Bitcoin cím:",
		"singlelabelprivatekey": "Privát kulcs (WIF, tárca import formátumban):",
		"singletip1": "<b>Egy bitcoin pénztárca</b> nem más, mint egy bitcoin címből és a hozzá tartozó privát kulcsból álló számpár. Egy ilyen pénztárcát állítottunk elő és jelenítettünk meg fent az Ön számára a Web böngészőben.",
		"singletip2": "<b>A pénztárca biztonságos megőrzése</b> érdekében nyomtassa ki vagy más módon rögzítse a bitcoin címet és privát kulcsot. Fontos, hogy a privát kulcsból készítsen másolatot, és tárolja biztonságos helyen. Ez a webhely nem tud az ön privát kulcsairól. Ha ismeri a PGP-t, akkor egyben letöltheti az egész web lapot, és ellenőrizheti, hogy a webhely szerzője álatal írt valódi változatot töltötte-e le. Ehhez össze kell hasonlítania a HTML-ből képzett SHA256 zanzát a webhely láblécében hivatkozott, aláírt verzió történetben lévő SHA256 zanzával. Ha elhagyja/megfrissíti a webhelyet vagy megnyomja az 'Új cím előállítása' gombot, akkor egy új privát kulcs áll elő, és az előzőleg megjelenített privát kulcs elvész. A bitcoin címhez tartozó privát kulcsot titokban kell tartani. Bárki, aki megszerzi ezt a kulcsot, el tudja költeni az ehhez a címhez tartozó összes bitcoint. Ha kinyomtatja a pénztárcát, akkor tárolja egy villámzáras vízhatlan nylon-zacskóban. A papír pénztárcát tekintse úgy, mintha pénz lenne.",
		"singletip3": "<b>Pénzt úgy tehet</b> a pénztárcájába, hogy másokkal bitcoinokat küldet erre a Bitcoin címre.",
		"singletip4": "<b>A pénztárca egyenlegét</b> úgy kérdezheti le, hogy elmegy a blockchain.info vagy a blockexplorer.com weblapokra, és ott beadja ezt a Bitcoin címet.",
		"singletip5": "<b>Ha el akarja költeni a bitcoinjait,</b> akkor menjen a blockchain.info weblapra, és a privát kulcson lévő teljes egyenleget töltse át (sweep) a weblapon lévő számlájára. A pénzt úgy is elköltheti, hogy letölti valamelyik népszerű p2p bitcoin klienst, és beimportálja a privát kulcsot a p2p kliens pénztárcájába. Ne feledje, hogy miután beimportálta a kulcsot a p2p bitcoin kliensbe, a kulcsot a p2p kliens a pénztárcában lévő többi kulccsal együtt tárolja. Pénz küldésekor a visszajáró pénzt a p2p kliens pénztárcájában lévő másik bitcoin címre fogják küldeni. Ekkor biztonsági másolatot kell készítenie a p2p kliens pénztárcáról, és a másolatot biztos helyen kell őriznie, mivel a maradék bitcoinjait a pénztárca kulcsai tárolják. Satoshi tanácsa, hogy pénztárcát soha ne töröljünk.",

		// paper wallet html
		"paperlabelhideart": "A grafika elrejtése?",
		"paperlabeladdressesperpage": "Címek száma egy oldalon:",
		"paperlabeladdressestogenerate": "Előállítandó címek száma:",
		"papergenerate": "Előállítás",
		"paperprint": "Nyomtatás",
		"paperlabelBIPpassphrase": "Jelmondat:",
		"paperlabelencrypt": "BIP38 titkosítás?",

		// bulk wallet html
		"bulklabelstartindex": "Kezdő index:",
		"bulklabelrowstogenerate": "Az előállítandó sorok száma:",
		"bulklabelcompressed": "Tömörített címek használata?",
		"bulkgenerate": "Előállítás",
		"bulkprint": "Nyomtatás",
		"bulklabelcsv": "Vesszővel elválasztott értékek (CSV):",
		"bulklabelformat": "Index, Cím, Privát cím (WIF)",
		"bulklabelq1": "Miért jó a Tömeges pénztárca használata, ha Ön bitcoint szeretne elfogadni a web-en?",
		"bulka1": "Ha Ön bitcoint szeretne elfogadni a web-en, akkor a szokásos megoldás az, hogy installálja a hivatalos bitcoin kliens démont (\"bitcoind\"). Sok web szolgáltató nem támogatja a bitcoin démon installálását. Ráadásul, ha a bitcoin démont a web szerveren futtatja, akkor a privát kulcsai is a web szerveren lesznek tárolva, és a web szerver meghekkelésekor ellophatják őket. A Tömeges pénztárca használatakor csak a bitcoin címeket kell feltölteni a web szerverre, a privát kulcsokat nem. Így nem kell aggódnia, hogy ellopják a bitcoin pénztárcáját, ha betörnek a web szerverre.",
		"bulklabelq2": "Hogyan használható a Tömeges pénztárca az Ön web helyén bitcoin elfogadásra?",
		"bulklabela2li1": "A Tömeges pénztárcával állítson elő nagy mennyiségű (10,000+) bitcoin címet. Másolja át a vesszővel elválasztott adatokat (CSV) egy biztonságos szöveges állományba a számítógépére. A szöveges állományról készítsen mentést, és azt őrizze biztonságos környezetben.",
		"bulklabela2li2": "Importálja be a Bitcoin címeket a web szerverén futó adatbázisba. (A pénztárca privát kulcsait ne importája be, mert ezzel azt kockáztatja, hogy a hackerek ellopják a pénzét. Csak a bitcoin címeket importálja be, úgy, ahogy azt a ügyfelei látják majd.)",
		"bulklabela2li3": "Web helyének vásárlókosarába vegye fel a bitcoinnal történő fizetés lehetőségét. Ha egy ügyfél bitcoinnal kíván fizetni, akkor \"fizetési címként\" az adatbázis egyik címét jelenítse meg, és a megrendelés mellett ezt a címet tárolja.",
		"bulklabela2li4": "Most szüksége van arra, hogy értesítést kapjon, ha megérkezett a pénz. A Google-on keressen rá a \"bitcoin payment notification\" kifejezésre, és iratkozzon föl valamelyik szolgáltatóhoz, amely értesítést küld, ha bizonyos címekre Bitcoint küldtek. Számos ilyen szolgáltató van, amelyik Web szervíz, API, SMS, Email, stb. segítségével értesítést küld. Amint megérkezik az értesítés, amelynek automatikus figyelése beprogramozható, máris megkezdheti az ügyfél megrendelésének feldolgozását. Ha manuálisan szeretné ellenőrizni, hogy érkezett-e valamelyik címre pénz, akkor a Block Explorer-t használhatja. A CÍM helyébe írja azt a Bitcoin címet, amelyet ellenőrizni szeretne. A tranzakció megerősítéséhez 10 és 60 perc közötti időre van szükség.<br />http://www.blockexplorer.com/address/CÍM<br /><br />A megerősítetlen tranzakciókat itt lehet megnézni: http://blockchain.info/ <br />A tranzakció 30 másodpercen belül megjelenik.",
		"bulklabela2li5": "Az Ön bitcoinjai biztonságos módon gyűlnek a blokkláncon. Használja az 1. lépés során előállított eredeti pénztárcát, ha szeretné őket elkölteni.",

		// brain wallet html
		"brainlabelenterpassphrase": "Adja be a jelmondatot: ",
		"brainlabelshow": "Jelmondat megjelenítése?",
		"brainprint": "Nyomtatás",
		"brainlabelconfirm": "Erősítse meg a jelmondatot: ",
		"brainview": "Megjelenítés",
		"brainalgorithm": "Algoritmus: SHA256(jelmondat)",
		"brainlabelbitcoinaddress": "Bitcoin cím:",
		"brainlabelprivatekey": "Privát kulcs (WIF, tárca import formátumban):",

		// vanity wallet html
		"vanitylabelstep1": "1. lépés - az \"1. lépéshez tartozó Kulcspár\" előállítása",
		"vanitynewkeypair": "Előállítás",
		"vanitylabelstep1publickey": "1. lépés, Publikus Kulcs:",
		"vanitylabelstep1pubnotes": "Másolja a fentiekeket a Vanity Pool webhely Your-Part-Public-Key ('az ön publikus kulcsa') mezőjébe.",
		"vanitylabelstep1privatekey": "1. lépés, Privát Kulcs:",
		"vanitylabelstep1privnotes": "Másolás és beillesztés segítségével másolja a fenti Privát Kulcsot egy szöveges állományba. Ideális esetben a szöveges állomány egy titkosított meghajtón van. Ha a Vanity Pool megtalálta az Ön által megadott előtaghoz tartozó Privát Kulcsot, akkor lesz szüksége erre az állományra, hogy elő tudja állítani a Privát Kulcsot.",
		"vanitylabelstep2calculateyourvanitywallet": "2. lépés - A Kérkedő Pénztárca Privát Kulcsának kiszámítása",
		"vanitylabelenteryourpart": "Adja meg az Önhöz tartozó Privát Kulcsot (amelyet az 1. lépésben állított elő és mentett el):",
		"vanitylabelenteryourpoolpart": "Adja meg a Pool-hoz tartozó Privát Kulcsot (amely  a Vanity Pool-ból származik):",
		"vanitylabelnote1": "[MEGJEGYZÉS: ebbe a szövegmezőbe publikus kulcs vagy privát kulcs egyaránt írható]",
		"vanitylabelnote2": "[MEGJEGYZÉS: ebbe a szövegmezőbe publikus kulcs vagy privát kulcs egyaránt írható]",
		"vanitylabelradioadd": "Összeadás",
		"vanitylabelradiomultiply": "Szorzás",
		"vanitycalc": "A Kérkedő pénztárca kiszámítása",
		"vanitylabelbitcoinaddress": "Kérkedő Bitcoin cím:",
		"vanitylabelnotesbitcoinaddress": "Fönt látható az ön új címe, mely magában foglalja a kívánt előtagot.",
		"vanitylabelpublickeyhex": "Kérkedő Publikus Kulcs (HEX):",
		"vanitylabelnotespublickeyhex": "A Publikus Kulcs hexadecimális alakban. ",
		"vanitylabelprivatekey": "Kérkedő Privát Kulcs (WIF):",
		"vanitylabelnotesprivatekey": "Ez az Ön Privát Kulcsa, mellyel elérheti a pénzét. ",

		// split wallet html
		"splitlabelthreshold": "A visszaállításhoz szükséges részek minimális száma",
		"splitlabelshares": "Részek száma",
		"splitview": "Előállítás",
		"combinelabelentershares": "Adja be a meglévő részeket (Enter-rel, szóközzel vagy más whitespace karakterrel elválasztva)",
		"combineview": "A részek összekombinálása",
		"combinelabelprivatekey": "Visszaállított Privát Kulcs",

		// detail wallet html
		"detaillabelenterprivatekey": "Adja meg a Privát Kulcsot",
		"detailkeyformats": "Kulcs formátumok: WIF, WIFC, HEX, B64, B6, MINI, BIP38",
		"detailview": "Részletek megjelenítése",
		"detailprint": "Nyomtatás",
		"detaillabelnote1": "A Bitcoin Privát Kulcs egy titkos szám, melyet csak Ön ismer. Számos különböző formátumban kódolható. Az alábbiakban megjelenítettük a a Privát Kulcshoz tartozó Bitcoin Címet és Publikus kulcsot, valamint a Privát Kulcsot a legnépszerűbb kódolási formátumokban (WIF, WIFC, HEX, B64).",
		"detaillabelnote2": "A Bitcoin v0.6+ a publikus kulcsokat tömörített formátumban tárolja. A kliens az importprivkey/dumpprivkey parancsokkal a privát kulcsok importálását és exportálását is támogatja. Az exportált privát kulcsok formátumát csupán a Bitcoin pénztárca verziószáma határozza meg.",
		"detaillabelbitcoinaddress": "Bitcoin cím:",
		"detaillabelbitcoinaddresscomp": "Tömörített Bitcoin cím:",
		"detaillabelpublickey": "Publikus Kulcs (130 karakter [0-9A-F]):",
		"detaillabelpublickeycomp": "Tömörített Publikus Kulcs (66 karakter [0-9A-F]):",
		"detaillabelprivwif": "WIF Privát Kulcs <br />51 db base58 karakter, melynek kezdete",
		"detaillabelprivwifcomp": "Tömörített WIF Privát Kulcs <br />52 db base58 karakter, melynek kezdete",
		"detailcompwifprefix": "'K' vagy 'L'",
		"detaillabelprivhex": "Hexadecimális formátumú Privát Kulcs (64 karakter [0-9A-F]):",
		"detaillabelprivb64": "Base64 formátumú Privát Kulcs (44 karakter):",
		"detaillabelprivmini": "Mini formátumú Privát Kulcs (22, 26 vagy 30 karakter, amely egy 'S'-sel kezdődik):",
		"detaillabelpassphrase": "BIP38 jelmondat",
		"detailbip38decryptbutton": "BIP38 dekódolás",
		"detailbip38encryptbutton": "Encrypt BIP38", //TODO: please translate
		"detaillabelq1": "Hogyan lehet dobókockával pénztárcát készíteni? Mit jelent a B6 formátum?",
		"detaila1": "Egy Bitcoin pénztárca előállításakor nagyon fontos, hogy a felhasznált véletlen számok valóban véletlenek legyenek. A fizikai véletlen jobb, mint a számítógéppel előállított pszeudo-véletlen. Fizikai véletlen a legegyszerűbben egy dobókockával állítható elő. Ha szeretne egy Bitcoin privát címet előállítani, akkor csupán egy dobókockára van szüksége, mellyel 99-szer kell dobni. Jegyezze fel minden egyes dobása eredményét. Az eredmények feljegyzésekor a következő szabályokat kövesse: 1->1, 2->2, 3->3, 4->4, 5->5, 6->0. Ha így tesz, akkor a privát kulcshoz tartozó véletlen számot B6 formátumban, vagyis 6-os számrendszerben rögzíti. Írja be ezt a 99 karakterből álló 6-os számrendszerbeli privát kulcsot a fenti szövegmezőbe, majd nyomja meg a 'Részletek megjelenítése' gombot. Ekkor megjelenik az a Bitcoin cím, amely ehhez a privát kulcshoz tartozik. Érdemes felírni a WIF formátumú privát kulcsot is, mivel ezt szélesebb körben használják."
	};
})(ninja.translator);