// pages/api/saveData.js
import { database } from "@/firebaseConfig";
import { ref, update, set } from "firebase/database";

const tours = {
  "ancient-egypt-and-nile-sailing-tour-12-days": {
    countries: ["Egypt"],
    features: [
      "Airport transfer at the end of the tour",
      "Return overnight sleeper train from Cairo to Luxor",
      "Visit the Valley of the Kings - Entry not included",
      "Visit the Temple of Hatshepsut; Egypt’s only female Pharaoh - Entry not included",
      "See the Temple of Gebel el-Silsila - Entry not included",
      "See Philae Temple and the Unfinished Obelisk - Entry not included",
      "Tour Cairo City",
      "Visit Egypt’s first completed pyramid; the Step Pyramid of Zoser - Entry not included",
      "Explore the Temples of Karnak, Luxor and Edfu - Entry not included",
      "See the impressive Colossi of Memnon",
      "Spend four nights on an authentic Dahabiya Nile Cruise",
      "Visit Kom Ombo Temple - Entry not included",
      "Take a sleeper train from Aswan to Cairo",
    ],
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/57n4mBp8XyhOdjNtvmcUuy/173d14cbfbc398f20ef64a5c6e8e124b/summary-abu-simbel-ancient-egypt-guided-egypt-tour.jpg?fit=fill&w=500&h=500",
      "https://images.ctfassets.net/hcch9ko3ppsh/6gZMkm24Lmm2gokjX7mCdd/9bce81734b62e0607b4c210b47da9383/day1-mosque-madrassa-sultan-hassan-cairo-egypt-guided-tour.jpg?fit=crop&h=750&w=1950&f=center",
    ],
    itinerary: [
      {
        description:
          "Get ready for a week filled with ancient history, culture, and adventure as you arrive in Cairo. After checking in, you’ll have the afternoon and evening to venture out and explore Egypt’s bustling capital city!",
        destination: "Cairo",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6gZMkm24Lmm2gokjX7mCdd/9bce81734b62e0607b4c210b47da9383/day1-mosque-madrassa-sultan-hassan-cairo-egypt-guided-tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today, the group will get to experience Egypt’s most iconic sights, including the Pyramids of Giza and the Sphinx. After a day of exploring, you’ll head back to the hotel before joining the group to catch an overnight sleeper train to Luxor.",
        destination: "Cairo",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6b2BQJ6KKnksesGQ8SUeO2/c26e0c830ee8fa7ed7ec71e5ad819d5a/pyramids-ancient-egypt-tourists.jpg?fit=fill&w=350",
      },
      {
        description:
          "The group arrives in Luxor this morning. Transfer to your hotel before setting out to visit Luxor Temple and Karnak Temple. After a day filled with incredible experiences, relax at the hotel in Luxor tonight.",
        destination: "Luxor",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2cFg0hfcfjoi2sIwiq0CCi/681d0e1c36e198133d4f618f9933cd74/ruins-of-temple-kom-ombo-egypt.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today, the West Bank of Luxor is on the itinerary. You’ll visit the Valley of the Kings, the Temple of Hatshepsut, and the Colossi of Memnon. After a day of exploring the area which, millenia ago, was the ancient city of Thebes!",
        destination: "Luxor",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6pzDlHcPf4MGHQjpXwKZKi/daf26e1bfe6f8d1179d1371e28443bdf/temple-of-hatshepsut-Guided-Tour-Ancient-Egypt.jpg?fit=fill&w=350",
      },
      {
        description:
          "This morning, the group will enjoy a leisurely breakfast before boarding a Dahabiya Nile Cruise. Enjoy the views and experiences as you sail to Edfu and Fazwa Island. In the evening, the group will be free to find a spot to enjoy dinner.",
        destination: "Edfu - Fazwa Island",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6RxQD3LWrKmMEqkIGo4WCA/2430911f48d52b6dd22dcf4f4d64adff/temple-of-Edfu-Ancient-Egypt-Tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "Enjoy the sights and sounds of the Nile as the cruise continues towards Gebel el-Silsila. Explore the temple and surrounding area before heading back to the cruise which will be beautifully illuminated at nightfall!",
        destination: "Gebel el-Silsila",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/Oc5wgd3DzvYQgOoGwoIAG/0b32f1e2c73dfc4d0878f5b4c5c44b2d/nile-cruise-guided-ancient-egypt-tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "Enjoy a leisurely breakfast this morning as the boat continues towards Kom Ombo. Explore the temple before heading back to the cruise to continue sailing towards an enchanting island location.",
        destination: "Kom Ombo",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2cFg0hfcfjoi2sIwiq0CCi/681d0e1c36e198133d4f618f9933cd74/ruins-of-temple-kom-ombo-egypt.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today the tour sails onwards to Aswan, the gateway to southern Egypt. Here, you’ll have the opportunity to visit Philae Temple and the Unfinished Obelisk. Relax on the deck as you conclude your magical cruise and take in the remarkable views.",
        destination: "Aswan",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3ubavo8VQJycYKO02iMI6e/edb38b2a6b4c4a0d8a7678e1db17076a/egypt-philae-temple-guided-tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "The group can look forward to a free day in Aswan where you can choose to take an optional excursion to Abu Simbel. In the evening, the tour will regroup and head to the train station for an overnight sleeper train back to Cairo.",
        destination: "Aswan Free Day - Abu Simbel add-on",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6Wesh6mcjyUowAooKMgoOs/2b3fcecb8a65ae4e43e4c8a24a7390d2/abu-simbel-temple-ancient-Egypt-Aswan-Guided-Tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "Arrive at the train station early this morning where you’ll be transferred to the hotel. After breakfast, enjoy a day of exploring Cairo at your own pace. Don’t miss the chance to visit the bustling markets (Khan el-Khalili). This is what Cairo vacations are all about!",
        destination: "Cairo",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4mJ956EGrkjISgkW2w0e28/9f7d0d3d8a40a1c0ffcd3912a8e3217a/egypt-market-bazaar-spices-guided-tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "After breakfast this morning, your group will have the opportunity to visit Alexandria (optional add-on). Discover the ancient library, catacombs, and the stunning Mediterranean coastline. Be sure to communicate your plans and any additional details to your tour guide before leaving tomorrow.",
        destination: "Cairo - Alexandria add-on",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/23ppRY63b2EKAiMqaweOqk/ae79b0d3f76a19c2a8f6a2532b45b7b4/alexandria-egypt-guided-tour-day.jpg?fit=fill&w=350",
      },
    ],
    language: "English",
    min_group_size: 10,
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "20 years of Operational Excellence",
      "Customisable itineraries with daily add-on activities",
      "Protected payments and financial peace of mind",
      "Group-focused itineraries crafted by industry experts",
      "Choose your own departure date",
    ],
    recommended_ages: "10 to 80",
    slug: "ancient-egypt-and-nile-sailing-tour-12-days",
    summary:
      "See the highlights of Egypt in 12 days on one of our best Egypt tours. Visit Cairo, Aswan, Luxor and Alexandria. Embark on an authentic Dahabiya Nile cruise and take a sleeper train trip through the Egyptian desert. Experience the world-famous Pyramids of Giza and Great Sphinx. Visit the Valley of the Kings and discover the impressive Abu Simbel. This group tour features renowned tombs and temples as well as the chance to learn about ancient Egyptian history! Enjoy the delights of Egypt and make memories to last a lifetime!",
    summary_image:
      "https://images.ctfassets.net/hcch9ko3ppsh/7KnyaYBqSo6mONkX0iCXHW/69d6073b5cbeec2169dbfa302e68a81e/hero-tourist-sphinx-great-pyramids-ancient-egypt-cairo-tour.jpg?fit=fill&w=550",
    tour_duration: "12 days",
    tour_end: "Cairo",
    tour_name: "Ancient Egypt & Nile Sailing Tour - 12 Days",
    tour_start: "Cairo",
  },
  "best-of-central-europe-from-budapest-13-days": {
    tour_name: "Best of Central Europe from Budapest - 13 Days",
    tour_start: "Budapest",
    tour_end: "Vienna",
    tour_duration: "13 days",
    min_group_size: 10,
    language: "English",
    recommended_ages: "10 to 80",
    slug: "best-of-central-europe-from-budapest-13-days",
    summary:
      "See the highlights of Egypt in 12 days on one of our best Egypt tours. Visit Cairo, Aswan, Luxor and Alexandria. Embark on an authentic Dahabiya Nile cruise and take a sleeper train trip through the Egyptian desert. Experience the world-famous Pyramids of Giza and Great Sphinx. Visit the Valley of the Kings and discover the impressive Abu Simbel. This group tour features renowned tombs and temples as well as the chance to learn about ancient Egyptian history! Enjoy the delights of Egypt and make memories to last a lifetime!",
    summary_image:
      "https://images.ctfassets.net/hcch9ko3ppsh/7KnyaYBqSo6mONkX0iCXHW/69d6073b5cbeec2169dbfa302e68a81e/hero-tourist-sphinx-great-pyramids-ancient-egypt-cairo-tour.jpg?fit=fill&w=550",
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/5NXceVnqFy1c5vR8DwK3lc/46037dec94bcc0960443dbbdc86df02d/day11-scenic-spring-sunset-aerial-view-of-the-old-town-pier-architecture-and-charles-bridge-over-vltava-river-in-prague-czec.jpg",
      "https://images.ctfassets.net/hcch9ko3ppsh/7jmADQElwnl3x8EIaOCKyK/d403d71166e3bd74fab3cdbee9bfcd7f/day6-stunning-alpine-panorama-with-jungfrau-monch-eiger-north-face-and-mannlichen-cable-car-station-grindelwald-bernese-ober.jpg?fit=crop&h=750&w=1950&f=top",
    ],
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "20 years of Operational Excellence",
      "Customisable itineraries with daily add-on activities",
      "Protected payments and financial peace of mind",
      "Group-focused itineraries crafted by industry experts",
      "Choose your own departure date",
    ],
    itinerary: [
      {
        description:
          "Welcome to Budapest! This 13 day European tour begins today. Arrive in Budapest where transfers can be arranged from the airport or from Vienna. Meet with the Group Tour Shop Tour Director who will escort the group for the duration of the tour and offer some Budapest travel advice for the rest of the day. The Hungarian capital is situated along the majestic Danube River and is home to stunning, diverse architecture. Relax in one of Budapest’s thermal baths or take a sightseeing cruise or orientation tour of the city. Why not kick off the first night with a welcome dinner cruise? If coming from Vienna, there are also options to enjoy tours and experiences in Vienna before travelling to Budapest.",
        destination: "Budapest",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5Wu4FDwG0XZWf93S1ukWX2/c6bb0137cc836a290c2516f11e1504b8/day1-budapest-thermal-baths-hungary.jpg?fit=fill&w=350",
      },
      {
        description:
          "Hop aboard the coach today and travel towards Slovenia! The road to the Slovenian capital offers plenty of sightseeing opportunities. A stop in Lake Balaton can be made, admire the region’s amazing beaches and volcanoes. Alternatively, watch a Hungarian horse show at a ranch or visit the otherworldly Visegrád castle. Once in Slovenia, stops can be made in the medieval city of Maribor or Lake Bled, renowned for its crystal clear waters and gorgeous views. Later, arrive in Ljubljana and take the rest of the day to discover this magical city. A trip to the Ljubljana Castle and the surrounding Castle Hill is not to be missed. Tonight the group could learn some Slovenian dance moves and try local cuisine!",
        destination: "Ljubljana",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6C0te6Pe7rTh2NDi37N3l5/f0551399292178479afb6684a154d724/day2-ljubljana-slovenia-eastern-europe-guided-tours.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today, the tour travels to Italy’s most romantic city, Venice! Before leaving Slovenia, why not visit the town of Postojna? Here, marvel at the legendary Postojna caves and the Renaissance Predjama Castle built within a cave mouth! Crossing the Italian border, stops can be made in Treviso, the home of Prosecco, or the port city of Trieste. The rest of the day is free to explore Venice! Traverse the picturesque Venice canals on a gondola, embark on a Venice lagoon tour or witness a glass blowing demonstration. Make sure to enjoy Venetian delicacies and the first taste of Italian cuisine at dinner either on the islands of Venice or in the Mestre commune.",
        destination: "Venice",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2qchVIkdUBu6RnOutcnHvu/5f72bd9f6b205788b37127ce605cc36e/day3-beautiful-day-in-venice-the-view-of-canal-grande-venetian-gondoliers-punting-gondolas-through-canal-grande-in-venice-it.jpg?fit=fill&w=350",
      },
      {
        description:
          "Drive from Venice to Tuscany today and enjoy some fantastic stopover opportunities along the way. Stops and tours are available in Padova, home to one of the world’s oldest universities, Bologna which is the historic capital of the Emilia-Romagna region and in Modena, where a balsamic vinegar tasting can be enjoyed. A major highlight of the Tuscany region is its capital city, Florence, which is home to true masterpieces of Renaissance art and architecture. Discover some of Florence’s celebrated art with a tour of the Uffizi or Accademia Galleries. Watch the sunset from the Piazzale Michelangelo viewpoint and choose to end the day with a Tuscan wine tasting or dinner!",
        destination: "Tuscany",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5cSyvZzaGdIIGHF3KuZ7de/6f2fb084bd7af92fc61070e3131803e0/day4-summer-landscape-tuscany-italy-europe.jpg?fit=fill&w=350",
      },
      {
        description:
          "Say arrivederci to Italy as the tour travels to the Swiss Alps! Enjoy this incredibly scenic drive which first travels through the north of Italy. On the way, stop in Pisa and get a picture with its famous Leaning Tower, take a food tour complete with Parma ham and Parmesan cheese in Parma or take a tour of Milan, Italy’s fashion capital. Witness the changing landscapes as the tour crosses over into Switzerland. Add a stop in Bellinzona to see its three medieval castles or take a cruise along the magnificent Lake Lucerne before arriving in the Swiss Alps. Settle in for the evening or enjoy a traditional Swiss family-style dinner!",
        destination: "Jungfrau",
        image:
          "dhttps://images.ctfassets.net/hcch9ko3ppsh/3AC18B4lnwcVBA6tAK8FN6/ad0f8dc44bff0e21a0727416baf754cd/day5-famous-electric-red-tourist-train-coming-down-from-the-jungfraujoch-station-in-kleine-scheidegg-bernese-oberland-switze.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today is free to explore the Jungfrau region of the Swiss Alps! There are so many fantastic ways to spend this free day, from adventure sports in nearby Interlaken to a mouthwatering Swiss chocolate tour. One of the best ways to experience the majesty of the Swiss Alps is a trip to Jungfraujoch train station, the highest in Europe, to marvel at the year-round snow and glistening glaciers. Other excellent activities include a St. Beatus Caves tour, a cruise on Lake Thun or Lake Brienz and a trip to the Ballenberg Swiss Open-Air Museum. An authentic fondue dinner is an ideal way to spend the evening.",
        destination: "Jungfrau",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7jmADQElwnl3x8EIaOCKyK/d403d71166e3bd74fab3cdbee9bfcd7f/day6-stunning-alpine-panorama-with-jungfrau-monch-eiger-north-face-and-mannlichen-cable-car-station-grindelwald-bernese-ober.jpg?fit=fill&w=350",
      },
      {
        description:
          "Get ready for another scenic drive today as the tour travels from Switzerland to Paris, the capital of France! Stops can be made in Lac de Neuchâtel or Bern, Switzerland’s capital city, before crossing the French border. The group will drive through Burgundy, a lovely French wine region, and get the chance to stop here for lunch or a tour. Discover Beaune, Burgundy’s wine capital, with a wine tasting and tour or enjoy a mustard experience in Dijon. Later in the day, arrive in Paris, the “City of Lights”! The group could embark on a driving tour to get acquainted with this captivating city. Sample French cuisine with a Parisian dinner or enjoy entertainment in the form of a cabaret show!",
        destination: "Paris",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/gsp5mYk4WTmIkYtfLiAmW/580c67ec92a322940ed236642c118bc0/day7-high-angle-view-of-city-skyline-and-of-eiffel-tower-view-from-arc-de-triomphe-paris-france.jpg?fit=fill&w=350",
      },
      {
        description:
          "Enjoy a free day to explore the romantic city of Paris, one of the world’s top tourist destinations! Of course, the iconic Parisian landmarks can be ticked off the bucket list today. Visit renowned Paris museums like the Louvre and Musée d'Orsay or relax in one of the city’s tranquil parks. Join a Paris sightseeing tour to see the Eiffel Tower, the Champs-Élysées, the River Seine and more! Explore a vibrant Paris neighbourhood on a locally guided tour of Montmartre, home to the striking Sacré-Cœur church and the Moulin Rouge. The group can extend their time in Montmartre with a dinner here.",
        destination: "Paris",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4KxiaTVL8XMghbsYrGcrN9/3207ac0f501bf6a8fcc5903619a5d88f/day8-aerial-view-of-the-arc-de-trioumphe-in-paris-france.jpg?fit=fill&w=350",
      },
      {
        description:
          "This morning, leave Paris for Heidelberg in Germany. On the way, drive through France’s delightful Champagne region. Indulge in tastings of this sophisticated beverage as well as a half-day tour in the city of Reims, the unofficial capital of the Champagne region. History buffs can stop in Verdun and enjoy a half-day tour of the WWI Battle Ground. The group will have the opportunity to visit Luxembourg, one of Europe’s smallest sovereign states. Tour the fascinating Luxembourg City and its many UNESCO World Heritage Sites. Then, arrive in the university town of Heidelberg. Discover the historic Old Town and don’t miss out on a visit to the Heidelberg Castle, one of Europe’s most important Renaissance structures!",
        destination: "Heidelberg",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/dPJeRdB6fEHfrekPP3Q27/adffa3e8c4905225bbb381eedd53a199/day9-landmarks-and-beautiful-towns-of-germany-medieval-heidelberg.jpg?fit=fill&w=350",
      },
      {
        description:
          "Get one last taste of Germany as the tour travels towards Prague today! Stop in the German towns of Stuttgart, Würzburg, Bamberg or Nuremberg, the birthplace of gingerbread and the site of the Nuremberg trials. Cross the border into the Czech Republic where the group can stop in the town of Pilsen. A tour of the Pilsner Urquell brewery is a must for beer lovers! Or, stop in the attractive spa town of Karlovy Vary. Next stop, Prague, the capital of the Czech Republic! With its spellbinding architecture, Prague is a historic city unlike any other. Join a tour and get acquainted with the “City of Spires” before ending the day, we suggest trying a hearty Czech dinner.",
        destination: "Prague",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6c5glIsT9ikHqJ4FEnEF4f/351a7e293fcc29062525de943bd7941d/day10-prague-food-traditional-trdelnik-pastry-czech-republic-traveller.jpg?fit=fill&w=350",
      },
      {
        description:
          "The glorious city of Prague is waiting to be explored today! See top Prague attractions such as the Charles Bridge, the Astronomical Clock, and the St. Vitus Cathedral on a sightseeing tour with added lunch or dinner cruise along the Vltava River. A tour of the spectacular 9th century Prague Castle complex is not to be missed. A little further afield is Kutna Hora, renowned for the hauntingly beautiful Sedlec Ossuary or “bone church”, where the group can enjoy a guided tour of the area. In the evening, soak up the Prague beer culture on a pub crawl or watch a traditional folk show.",
        destination: "Prague",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3vk8gb5BtcQO2YPlsM1ykk/0bea29468bd378e0349e53828f8eae30/day11-scenic-spring-sunset-aerial-view-of-the-old-town-pier-architecture-and-charles-bridge-over-vltava-river-in-prague-czec.jpg?fit=fill&w=350",
      },
      {
        description:
          "The group leaves Prague this morning for Vienna. Before arriving in Austria, why not stop in Bratislava, the charming capital of Slovakia? Once in Austria, the group can learn about Austria’s tragic history at the Mauthausen concentration camp or join a guided tour of the historic Melk Abbey, a UNESCO World Heritage Site. The rest of the day is free to experience Vienna tours and travel highlights! All good Vienna tours showcase top attractions such as the Schönbrunn Palace, St. Stephen’s Cathedral, and the Belvedere Palace. See these sights on a guided Vienna city tour. Vienna is known for its classical music and was once home to Mozart. A classical music concert is the best way to soak up the musical atmosphere of this city.",
        destination: "Vienna",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6ASHDyFicFGxblFbJAZwm2/bf18df7689a8a8e138c8342a6d5d29aa/day12-lovely-twilight-skyline-view-from-above-of-vienna-austria.jpg?fit=fill&w=350",
      },
      {
        description:
          "After 13 days of incredible European adventures, this group tour concludes today. Transfers are available back to Budapest if the group will be continuing their journey from there. There is also an option to end the tour in Bratislava or another destination en route to Budapest. If time allows, make the most of this final day with some of the best tours in Vienna, Austria, lovely Budapest tours, or a tour of Bratislava. Wherever the trip comes to an end, Group Tour Shop wishes the group a pleasant onward journey!",
        destination: "Vienna",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3wEDM65YOGObmQvPa5XTm6/16f7bea5e76ec64fc875fab3b551b71e/day13-church-heiliger-franz-of-assisi-at-mexikoplatz-vienna-austria.jpg?fit=fill&w=350",
      },
    ],
    countries: [
      "Hungary",
      "Slovenia",
      "Italy",
      "Switzerland",
      "France",
      "Germany",
      "Czech Republic",
      "Austria",
      "Slovakia",
      "Luxembourg",
    ],
  },
  "best-of-central-europe-from-budapest-15-days": {
    tour_name: "Best of Central Europe from Budapest - 15 Days",
    slug: "best-of-central-europe-from-budapest-15-days",
    tour_start: "Budapest",
    tour_end: "Vienna",
    tour_duration: "15 days",
    min_group_size: "10 people",
    language: "English",
    recommended_ages: "10 to 80",
    summary:
      "Join Group Tour Shop Budapest to Vienna tours for unforgettable Europe group tours! Over 15 days, experience top travel destinations and embrace the local culture, history and cuisine. Visit Budapest and discover the historic city perched along the Danube. Explore magical Ljubljana and embrace the Italian delights of Venice and Tuscany. Marvel at the views of the Swiss Alps, see iconic sights in Paris, cruise Amsterdam’s canals and journey to Germany’s Rhine Valley. Enjoy the best of Prague, Vienna and Budapest tours. Customise this group trip to perfection with exciting add-ons available daily!",
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "Customisable itineraries with daily add-on activities",
      "Group-focused itineraries crafted by industry experts",
      "20 years of Operational Excellence",
      "Protected payments and financial peace of mind",
      "Choose your own departure date",
    ],
    itinerary: [
      {
        destination: "Budapest",
        description:
          "Welcome to Hungary and the start of this 15 day Central Europe group tour! Travel to Budapest where the group can arrange an airport transfer or a transfer from Vienna for a hassle-free arrival. Next, the group will meet up with the Group Tour Shop Tour Director for an overview on the upcoming trip. Afterward, the group can get to know Hungary’s capital city on a selection of Budapest tours! Explore the city with a local guide or embark on a sightseeing cruise and see highlights like Buda Castle, the Hungarian Parliament Building, Chain Bridge and more. Alternatively, take a dip in the city’s famous thermal baths! Make it a first night to remember with an add-on dinner in Budapest.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/CmEsiq7pJyX1odFXt0Y91/8ba91ad7562c8c985ad8c1845b058acb/day1-Budapest-Hungary-Aerial-panoramic-skyline-view-of-Buda-Castle-Royal-Palace-with-Szechenyi-Chain-Bridge-St.Stephen-s-Bas.jpg?fit=fill&w=350",
      },
      {
        destination: "Ljubljana",
        description:
          "The tour travels to Slovenia today. Along the way, the group can choose from a number of great travel experiences! Why not visit a traditional Hungarian horse ranch, stop at Lake Balaton or explore the medieval halls of Visegrad Castle? Cross the border into Slovenia where the group could venture on a half-day mountain hiking excursion, have lunch in Maribor or admire the views of Lake Bled. Alternatively, the group can head straight to Ljubljana and embrace this fairytale-like city complete with dragons and castles! The group can enjoy a locally guided tour, visit the hill-top castle, explore Tivoli Park or indulge on a food tour of Ljubljana. Don’t miss the Slovenian Evening experience, it promises a night of dinner and dancing!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3VUuxEGHlQj2AgnVfnatLf/4affdb7644d46221b96f4fb34e2219b2/day2-ljubljana-famous-dragon-bridge-symbol-slovenia.jpg?fit=fill&w=350",
      },
      {
        destination: "Venice",
        description:
          "This European adventure continues to Italy today. This morning, the group could choose to see more of Slovenia on a trip to the Postojna caves and castle. Afterward, hit the road - destination Venice! Along the way, stopovers are available in Trieste and Treviso - two beautiful Italian cities. Later, arrive in Venice, a top destination on Italy tours! Italy's famous floating city exudes romance, art and history! A locally guided tour is the best introduction to the city while the group can choose to enjoy an iconic Venetian experience on a gondola ride! See more of the city on a lagoon tour or learn about the Venetian art of glass blowing. This evening, why not try traditional local dishes at a Venetian dinner?",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3RDxTchNBWWuAlwi94b9kY/43515491a061656bb8d4963253638b2f/day3-panoramic-aerial-cityscape-of-venice-with-santa-maria-della-salute-church-in-venice-italy__1_.jpg?fit=fill&w=350",
      },
      {
        destination: "Tuscany",
        description:
          "Today, the tour heads towards Tuscany and there are a number of great stops along the way. The group could visit the famous Leaning Tower of Pisa - a bucket list site on tours in Italy! Historic cities Padova and Bologna are home to the oldest universities in Italy, while a stopover in Modena offers a balsamic vinegar tasting and a chance to visit the Enzo Ferrari Museum. A real highlight today is the opportunity to experience Florence! The group could explore with a local guide to see the Ponte Vecchio, Florence Cathedral and more, tour the Uffizi and Accademia Galleries or enjoy a wine, pizza and gelato tour. Sample more tastes of Tuscany during an add-on wine tasting and dinner tonight.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7LKNJjyu6rsLfENdmVyeVo/09c93f3105ed01bc29a3cf7306fd5668/day4-david-sculpture-in-florence-italy.jpg?fit=fill&w=350",
      },
      {
        destination: "Jungfrau Region",
        description:
          "Look forward to magnificent views as the group makes the journey from Tuscany to the Swiss Alps! Several highlights of tours to Italy are on offer today. The group could visit Modena, Bologna or Parma which are excellent options for foodies, while Milan (Italy’s fashion capital) and Lake Como are incredibly popular stops on Italy tours. Travel through Northern Italy and cross the border to Switzerland. En route, the group will enjoy a scenic drive with views of quaint villages, sparkling lakes, Alpine forests and impressive mountains! Choose to stop in Bellinzona, Lugano, Locarno, or Altdorf before arriving in the Jungfrau Region which will be the group’s base for the next two nights.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/q9swaIV3i4zAep34zNfzX/c0b8203f730049fa9ae447c67c6d4fb8/day5-lake-como-famous-lake-italy-lakes-district-tour.jpg?fit=fill&w=350",
      },
      {
        destination: "Jungfrau Region",
        description:
          "Breathe in the crisp mountain air, it’s time for a free day in the Swiss Alps! The group is free to customise their Switzerland trip with a variety of activities available. The train trip to Jungfraujoch is highly recommended. The group will travel to the “top of Europe” and get to enjoy the snowy scenery and giant glaciers! Alternatively, see more of Switzerland. Visit Lucerne and see the gorgeous Old Town or visit Interlaken - the adventure sports capital of Switzerland! Other exciting excursions include a St. Beatus Caves tour, a cruise on Lake Thun or Lake Brienz and a visit to Ballenberg, a Swiss open-air museum. Wrap up today with delicious local fare at a fondue or Swiss family-style dinner.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1mfTF8QeaYkjmcvrOeUHEp/8952cd31dedf0329f1390fd4c93b80e4/day6-lucerne-luzern-the-largest-city-in-central-switzerland.jpg?fit=fill&w=350",
      },
      {
        destination: "Paris",
        description:
          "Wave farewell to Switzerland and say bonjour to France! Before leaving Switzerland, the group could stop in Lac de Neuchatel or Bern. Next, the group will travel through Burgundy, France’s beautiful wine region full of rolling vineyards and charming towns. Along the way, a visit to Dijon and a wine tasting and tour in Beaune are available. A half-day Burgundy experience is another great option. Later, the group will arrive in Paris, the famous “City of Lights!” The best way to see Paris is on a driving tour showcasing iconic sites like the Eiffel Tower, Champs-Élysées, River Seine and the Arc de Triomphe, or a locally guided tour. Why not complete the day with a Parisian dinner? Bon appetit!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/37neMQDn3uOSgCwxw3vKSg/224bb14190180b496d51a1535c25c30c/day7-Paris-Arc-De-Triomphe-Triumphal-Arch-In-Chaps-Elysees-At-Sunset-Paris-France.jpg?fit=fill&w=350",
      },
      {
        destination: "Paris",
        description:
          "The group will enjoy a full day in Paris today. Make the most of a day in this popular travel destination which is famous for its romantic atmosphere, iconic sites, renowned museums, fashion, art and cuisine! Once again, a range of exciting activities are available today. The group could enjoy a sightseeing tour which includes a macaron tasting and a trip up Montparnasse Tower. Wander through Montmartre with a local guide and learn more about this artistic neighbourhood that is home to the breathtaking Sacré-Cœur church and famous Moulin Rouge. Savour the tastes of French food and wine at a dinner in Montmartre or central Paris before ending the day off on a glamorous note at a cabaret show!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4FhbPjgdHvjQXgXxUEJRTR/dba598328eb45b89399fa7befbcefe9d/day8-Paris-Montmartre-night-city-life-travel-europe-guided-tours-from-london.jpg?fit=fill&w=350",
      },
      {
        destination: "Amsterdam",
        description:
          "Today, the tour continues to Amsterdam in the Netherlands, travelling through Belgium along the way. Belgium is a country overflowing with rich history, incredible art, museums and historic towns! It’s also the centre of Europe’s politics. The group can choose to visit the medieval city of Bruges, historic Ghent or the capital city Brussels. Wherever the group stops, be sure to try the local fare - Belgium is famous for its chocolate, waffles and beer! In the Netherlands, Rotterdam, Delft and Antwerp are fantastic cities to visit before the tour arrives in lively Amsterdam later! Get to know the city on an optional Amsterdam canal tour and choose to end the day with dinner in the heart of the city.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3j5TkvWrLdFQVLU62oGeD5/f28ca67ed4d2fc66bfc95cbf9fdce985/day9-bruges-belgium-guided-tours-canal-medieval-town.jpg?fit=fill&w=350",
      },
      {
        destination: "Amsterdam",
        description:
          "Discover what makes Amsterdam beloved by travellers from around the world on this free day! The city is famous for its canals, coffee shops, bicycles, museums and historic neighbourhoods. Experience Amsterdam travel highlights such as the Rijksmuseum, the Van Gogh Museum, the Moco Museum and the Anne Frank House. Cycle through the city or relax at a local cafe and try Dutch staples like stroopwafels, cheese and poffertjes. Enjoy top Netherlands tours available as add-on activities. Get out of the city on a Dutch countryside excursion, watch how locals create Dutch cheese and clogs or learn about Netherland’s history at the immersive “This is Holland” exhibition. As night falls, be sure to absorb the atmosphere of Amsterdam’s vibrant nightlife!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2oklsnaXMI7hq1XfDubrbi/e7d9f082a7f70e7427fd1102d6938cd7/day10-Van-Gogh-Museum-With-Sunflowers-In-The-Foreground-Amsterdam-Netherlands.jpg?fit=fill&w=350",
      },
      {
        destination: "Rhine Valley",
        description:
          "Adventures in Germany are on the agenda today. Say farewell to Amsterdam and head for Germany’s beautiful Rhine Valley. On the way, admire views of the Dutch countryside where the group can stopover in Nijmegen - home to the oldest shopping street in the Netherlands. An informative half-day WWII is also available today. Alternatively, cross the border and visit Cologne or Düsseldorf in Germany. Later, the group will arrive in the Rhine Valley where they could cruise the Rhine River, taste authentic German wine or see how authentic German steins and cuckoo clocks are crafted. Better yet, do all three on a half-day tour of the Rhine Valley!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5x1NF9ITdp0iXhoXt32PAY/8d4f8d3fd1513ec661bf48482c262b00/day11-rhine-valley-germany-river-cruise-travel-europe-guided-tours-from-london.jpg?fit=fill&w=350",
      },
      {
        destination: "Prague",
        description:
          "Leave the stunning scenery of the Rhine Valley behind as the tour travels to Prague in the Czech Republic. Why not visit a couple of popular German destinations along the way? Frankfurt, Heidelberg, Würzburg and Bamberg are great options. Or, spend time in historic Nuremberg with a local guide or enjoy a Pilsner Urquell brewery tour! Across the border, choose to stop in Karlovy Vary, a beautiful Czech spa town, before arriving in Prague. The best way to explore this top travel destination is on a locally guided tour, visiting sites like Prague Castle, the Old Town, Charles Bridge, the Astronomical Clock Tower and more! The group can complete the day with a delicious local dinner.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1cKZ2tt5UlcDPaHuP928fE/fca0bd5800a3ebfaac8e2b57f362ac05/day12-nuremberg-famous-castle-landmark.jpg?fit=fill&w=350",
      },
      {
        destination: "Prague",
        description:
          "Make the most of a full day in Prague today! This city is renowned for its history, buildings and incredible scenery! The group can enjoy a variety of unique Prague experiences. Choose from a guided tour of Prague Castle, feel pampered at a beer spa, take in an authentic folk show, visit the Prague Zoo or head out of the city and visit the medieval city of Kutná Hora. Explore the city from the Vltava River - the interestingly named “Devil’s Channel Cruise” is an atmospheric trip through a fairytale-like area of Prague! This evening, the group can embrace one of the country’s most famous products - beer - on a pub crawl or take it easy on a romantic dinner cruise.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/40QHjs2rwT872CTKsHJwEQ/8665cf520d7f9347108a6a983e31c1d2/day13-astronomical-clock-prague-old-town-square-czech-republic__1_.jpg?fit=fill&w=350",
      },
      {
        destination: "Vienna",
        description:
          "See more of the Czech Republic’s best places to visit before the tour arrives in Vienna, Austria later today. Visit Konopiště Castle, Brno or Český Krumlov. Add another country to the itinerary and visit the historic Slovakian capital, Bratislava. Highlights in this European city include Bratislava Castle, St. Martin's Cathedral and the Old Town Hall. Later, the group will arrive in Vienna, a city famous for its imperial palaces, grand museums, baroque architecture, classical music and delicious pastries! See the sights of Vienna on a driving tour or a locally guided tour before celebrating the end of this fantastic European adventure with a farewell dinner!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6P674LIYjsAVGdynsFA82a/9e7f00000b5d72feef1c454f3d10a89c/day14-panoramic-view-across-river-summer-day-cesky-krumlov-czech-republic.jpg?fit=fill&w=350",
      },
      {
        destination: "Vienna",
        description:
          "After 15 days and dozens of unforgettable destinations, this fantastic group tour of Europe comes to an end today. There is still time for more great Vienna tours and experiences this morning before the tour concludes. The group can choose to end the tour in Vienna or catch a transfer to Budapest. Other endpoint options such as Bratislava are available as add-ons - the group can personalise this day as they wish! If the group travels on to Budapest, choose to see even more Budapest travel highlights before saying farewell. Group Tour Shop wishes you a safe onward journey!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6ztQ1UyAoT9DO93VkjWODc/e625fba9440e5df5edb53047769c7f48/day15-Hofburg-Vienna-Austria.jpg?fit=fill&w=350",
      },
    ],
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/6ztQ1UyAoT9DO93VkjWODc/e625fba9440e5df5edb53047769c7f48/day15-Hofburg-Vienna-Austria.jpg",
      "https://images.ctfassets.net/hcch9ko3ppsh/31jE1t2jrFOQOztMQEDh5T/7e3d299fae5fe28853d3361663b71340/ljubljana-slovenia-eastern-europe-guided-tours.jpg?fit=crop&h=750&w=1950&f=center",
    ],
    countries: [
      "Hungary",
      "Slovenia",
      "Italy",
      "Switzerland",
      "France",
      "Netherlands",
      "Germany",
      "Czech Republic",
      "Austria",
      "Slovakia",
    ],
  },
  "best-of-central-europe-from-vienna-14-days": {
    tour_name: "Best of Central Europe from Vienna - 14 Days",
    tour_start: "Vienna",
    tour_end: "Budapest",
    tour_duration: "14 days",
    min_group_size: 10,
    language: "English",
    recommended_ages: "10 to 80",
    slug: "best-of-central-europe-from-vienna-14-days",
    summary:
      "Discover the Best of Central Europe on this Vienna to Budapest tour! Over 14 days, experience diverse cultures, fascinating history and stunning natural beauty. Walk in Mozart’s footsteps in Vienna and marvel at the otherworldly architecture in Prague. Taste wine in the Rhine Valley and Dutch cheese in Amsterdam! Spot iconic Paris landmarks, snow-capped mountains in the Swiss Alps and magical castles in Ljubljana. Take in the sights, sounds and tastes of Italy and experience Budapest travel highlights. All this and more awaits on Group Tour Shop Vienna to Budapest package holidays!",
    summary_image: "dummy_image_string",
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/6mFzmnAyiWnvHgEuet4fVv/d93e41541b4e9ca4c2e92e40685b5f2c/summary-amsterdam-netherlands-iconic-houses-guided-europe-tour.jpg",
      "https://images.ctfassets.net/hcch9ko3ppsh/6Eu31GXTEGh7WXKJkVvD8X/8a05087859cb83c2ebf1950d64518814/day13-astronomical-clock-prague-old-town-square-czech-republic__1_.jpg?fit=crop&h=750&w=1950&f=center",
    ],
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "Customisable itineraries with daily add-on activities",
      "Group-focused itineraries crafted by industry experts",
      "20 years of Operational Excellence",
      "Protected payments and financial peace of mind",
      "Choose your own departure date",
    ],
    itinerary: [
      {
        description:
          "Welcome to Austria and the first day of this 14 day Vienna to Budapest tour! Airport transfers can be arranged as well as transfers to Vienna from Budapest. Meet with the Group Tour Shop Tour Director who will brief the group on the upcoming itinerary. The rest of the day is free to explore Vienna! Renowned for its magnificent city center and historical architecture, Vienna is also Austria’s musical hub and was home to Mozart for most of his creative life. Explore more of Austria’s capital city on an orientation tour. The group can immerse themselves in Vienna’s exceptional classical music scene with a concert.",
        destination: "Vienna",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3JlATuMootu1uerXgTxLU7/44ffc3b01ac023296be54ce056f2e34c/day1-Beautiful-View-Of-Famous-Schloss-Belvedere-In-Vienna-Austria.jpg?fit=fill&w=350",
      },
      {
        description:
          "The tour leaves Vienna today and travels towards Prague, the capital of the Czech Republic. Along the way, the group can enjoy a guided tour of Austria’s impressive Melk Abbey, a UNESCO World Heritage Site, or tour the tragic yet important Mauthausen concentration camp. Why not add another country to the list with an orientation tour in Bratislava, the capital of Slovakia? Across the border, admire the fairytale beauty of Český Krumlov during a comfort stop or enjoy a guided tour of the medieval city of Kutna Hora, known for the Sedlec Ossuary or “bone church”. Finally, arrive in Prague where the group can get to know this magical city with a tour.",
        destination: "Prague",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/F9iVFijaGpOoXGSyxffRT/616cb87ba39475fa7324859653212d76/day2-Bratislava_historical_center_with_the_castle_over_Danube_river__Bratislava__Slovakia.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today is free to experience the otherworldly city of Prague! Known as the “City of Spires”, Prague is home to some of the world’s most fascinating architecture. Explore the city’s top sights such as the Charles Bridge, the Astronomical Clock, and the Vltava River on a Prague sightseeing tour and lunch cruise. A tour of the beautiful Prague Castle, the largest castle in the world, is also highly recommended. Prague is famous for its beer and lovers of the beverage can sample the city’s famous brews on a pub crawl or even relax in a beer spa! End the day with a traditional Prague folk show or a dinner complete with classic Czech dishes.",
        destination: "Prague",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7o4NKgYqZpslSYyD3m1T57/406beb27574ede2ccf78efe3c0e34f98/day3-prague-astronomical-clock-famous-landmark-czech-republic.jpg?fit=fill&w=350",
      },
      {
        description:
          "This morning, the tour heads towards Germany with the glorious Rhine Valley as the final destination. Before driving through Germany, a comfort stop in Pilsen is available as well as a tour of its Pilsner Urquell brewery! Across the border, take the opportunity to stopover in a fascinating German city. Comfort stops are available in Würzburg, Heidelberg, Frankfurt and Nuremberg. Why not add on a lunch in Nuremberg or a locally guided tour to learn more about this important historical city? Later, arrive in the Rhine Valley and marvel at the stunning scenery along the Rhine River. Sample the celebrated Rhine Valley wines with a wine tasting or take a cruise and admire the many castles of the region.",
        destination: "Rhine Valley",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/Uwa083IkjYCSR2weZdHs0/4656e1dcdccb2fc0e60722d06b90b1e4/day4-heidelberg-old-town-bridge-germany-guided-tour-expat-explore.jpg?fit=fill&w=350",
      },
      {
        description:
          "Enjoy the views leaving the Rhine Valley as the tour heads towards Amsterdam! Comfort stops can be added in the German cities of Cologne or Düsseldorf on the way. Before arriving in the Dutch capital, enjoy a comfort stop in Nijmegen, the oldest town in the Netherlands, or take in some history on 'A Bridge Too Far' WWII half-day tour. Or, experience the Dutch countryside and its iconic windmills! The group could also witness how Dutch cheese and clogs are made with a factory tour. Once in Amsterdam, cruise the city’s lovely canals or enjoy the immersive “This is Holland” exhibit.",
        destination: "Amsterdam",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/8OOZCYOkSpeU7g0bP38OR/ffd2810b17de5eece12d73ce03a54d63/day5-netherlands-amsterdam-windmills-dutch-culture.jpg?fit=fill&w=350",
      },
      {
        description:
          "On today’s drive from Amsterdam to Paris, the tour will pass through Belgium. Belgium is known for its incredible architecture, thriving arts and culture scene and delicious cuisine. Select a comfort stop and orientation tour in the picturesque Belgian cities of Ghent, Bruges or Brussels, the capital. In whichever city the group chooses, a tasting of Belgian chocolate, beer or waffles is a must! Later, the group will arrive in Paris, the capital of France and the “City of Lights”! Take a driving tour of Paris and see the city’s unmistakable landmarks such as the Eiffel Tower, Arc de Triomphe and the Champs-Élysées. End the day with a welcome dinner to try authentic French cuisine.",
        destination: "Paris",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3437aXI8IZfnqRB9kW4KrC/6c16d1d5ae0e98247d8a30ff6bd0ba1a/day6-Skyline-Of-Paris-With-Eiffel-Tower-At-Sunset-In-Paris-France.jpg?fit=fill&w=350",
      },
      {
        description:
          "Paris is waiting to be explored on this free day! Discover what makes Paris one of the world’s top tourist destinations and soak up the city’s romantic atmosphere. Visit one of Paris’s renowned museums such as the Louvre or Musée d'Orsay or relax with a coffee and croissant in one of the city’s many parks. Tick off multiple Parisian sights on a Paris sightseeing tour or explore the bustling Montmartre neighborhood, home to the amazing Sacré-Cœur church and the Moulin Rouge. In the evening, enjoy the option of dinner in Montmartre and get a taste of Parisian glamour with a cabaret show!",
        destination: "Paris",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/25vV007937Y5XgQZ5sMKYd/a6cfdab8f6315551e7905300252822f3/day7-louvre-museum-paris-europe-tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "Bid adieu to Paris and enjoy a scenic drive towards the Swiss Alps! Along the way, the group will stop in Burgundy, a gorgeous French wine region. Explore Beaune, Burgundy’s wine capital with a wine tasting and tour or visit the Hôtel-Dieu Museum - Hospices de Beaune and admire its ornate gothic architecture. Alternatively, stop in Dijon and sample the region’s traditional mustard. As the tour crosses the border into Switzerland, take in the changing landscapes of the awe-inspiring Swiss Alps. Before arriving at the hotel for the evening, comfort stops can be made in Bern, the Swiss capital, or in the tranquil Lac de Neuchatel. Why not celebrate the first night in the Swiss Alps with a traditional Swiss family-style dinner?",
        destination: "Jungfrau Region",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/46C9GlezSoDnNsGn8Y00mx/a83e9ae6f09fa6b134ca3e3178b32751/day8-beaune-burgundy-hospices-hospital-france-travel-europe-guided-tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "Enjoy fresh air, spectacular mountain views, and plenty of exciting add-on activities on this free day in Jungfrau! Today offers the group the opportunity to travel to the “Top of Europe'' with a Jungfraujoch train tour. This highly recommended add-on experience showcases incredible snowy vistas and magical glaciers. Other options for the day include a trip to nearby Interlaken where the group can enjoy adventure sports such as paragliding, skiing on local ski slopes, an irresistible Swiss chocolate tour, cruises on Lake Thun or Lake Brienz, or a visit to the Ballenberg Swiss Open-Air Museum. An ideal way to end this day is with a cheese fondue dinner!",
        destination: "Jungfrau Region",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/10sDywjRb1MFLYifJBSDTt/006f279b294d0b21cfd1441f6168debd/day9-view-of-the-rail-service-connecting-kleine-scheidegg-to-jungfraujoch-switzerland.jpg?fit=fill&w=350",
      },
      {
        description:
          "Hop aboard the coach again today and drive towards the rolling hills of Italy’s Tuscany region. Cross the border into Italy and enjoy multiple options for stopovers, tours and experiences. See Italy’s fashion capital, Milan on an orientation tour, taste balsamic vinegar in Modena, or indulge in a Parma food tour to taste the city’s eponymous ham and parmesan. Stopover in Pisa and snap a picture with its legendary Leaning Tower! Stopping in Florence, Tuscany’s capital is another fantastic option. Admire Renaissance masterpieces in the Uffizi Gallery, view the city from the Piazzale Michelangelo viewpoint or take a wine, pizza and gelato tour! In the evening, why not enjoy a delicious Tuscan dinner?",
        destination: "Tuscany",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3W4vyLedsy3Serg3CcHBSi/5fa7bfaf2c18ac13c4fa4f6b752b9ba8/day10-piazza-duomo-square-in-milan-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today, the tour drives from the hills of Tuscany to the canals of Venice! Tours of Pisa and Florence are also available today if the group did not have the time to stopover yesterday. Before arriving in Venice, comfort stops are available in Bologna, birthplace of bolognaise, Verona, city of Romeo and Juliet, or the lovely university town of Padua. Once in Venice, explore this romantic floating city on an orientation tour or on a gondola ride! Other add-on activities include a lagoon tour or glass blowing demonstration. Dinner can be enjoyed in Venice or the neighbourhood of Mestre tonight.",
        destination: "Venice",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/fA6Ohw3HOarRT9ZSLX9a9/b245d6aed6a0a2b256bababf54092280/day11-leaning-tower-of-pisa-torre-pendente-di-pisa-with-sculture-in-front-pisa-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Say arrivederci to Italy and head to Slovenia today! En route, comfort stops can be enjoyed in the Italian cities of Treviso and Trieste. Before arriving in Ljubljana, Slovenia's capital city, stop in the town of Postojna and explore its mysterious caves and the striking Predjama Castle. Alternatively, a comfort stop can be made at the majestic Lake Bled. Then, arrive in beautiful Ljubljana. With its dragon statues and a hill-top castle, this city is like something out of a fairytale! See the top attractions in Ljubljana, such as the Central Market, Plečnik House, and, of course, Castle Hill, on an optional orientation tour. In the evening, the group can choose to enjoy a traditional Slovenian dinner with dancing!",
        destination: "Ljubljana",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1nkLNsgPKCOUhaRwU8lXjW/318e2aaa740046e2a767835795a1c2a9/day12-slovenia-dragon-bridge-ljubljana.jpg?fit=fill&w=350",
      },
      {
        description:
          "The tour makes its way to its last city today; Budapest! Before leaving Slovenia, why not make a stop in the city of Maribor? This charming city has a fascinating medieval history and is located amid a picturesque wine region. Once in Hungary, make a stop or take a half-day tour of Lake Balaton. This freshwater lake boasts breathtaking views and is surrounded by beaches, volcanoes and resort towns. Later, arrive in Budapest, the capital of Hungary! Here, enjoy a range of Budapest tours. Relax in one of Budapest’s famous thermal baths, see top attractions like the Buda Castle, the Hungarian Parliament Building and Chain Bridge, or cruise along the Danube river.",
        destination: "Budapest",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4zv4tS9aYnQXJgNCviM0IS/6d1d2837a00718cd6c1cc4310ad1e76b/day13-budapest-baths-hungary-spa.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today marks the end of this Vienna to Budapest tour! Airport transfers, as well as transfers back to Vienna, can be arranged for convenience. Depending on departure time, the group can experience more Budapest travel highlights with a sightseeing cruise or locally guided tour. Alternatively, visit a Hungarian ranch for lunch and a horse show or take a trip to the enchanting 13th century Visegrád castle. A farewell dinner cruise is an amazing way to end the tour. Group Tour Shop wishes you a safe journey onwards!",
        destination: "Budapest",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2wkrUy4P9pLs1Geb5RK7F0/f06fae9d524fe4ca2d43cc34e129600f/day14-danube-cruise-budapest-eastern-europe-guided-tours.jpg?fit=fill&w=350",
      },
    ],
    features: [
      "Tour Director for the duration of the trip",
      "Transport by private coach between destinations",
      "One night in Vienna, Rhine Valley, Amsterdam, Tuscany, Venice, Ljubljana and Budapest",
      "Two nights in Prague, capital of Czech Republic",
      "Two nights in Paris, the “City of Lights”",
      "Two nights in the majestic Swiss Alps",
      "Drive through Belgium with options for stops in three Belgian cities",
      "Scenic drive through the Swiss Alps",
      "Drive through the rolling hills of Tuscany",
      "Free days in Prague, Paris and the Swiss Alps",
    ],
    countries: [
      "Austria",
      "Czech Republic",
      "Germany",
      "Netherlands",
      "Belgium",
      "France",
      "Switzerland",
      "Italy",
      "Slovenia",
      "Hungary",
    ],
  },
  "best-of-egypt-jordan-and-israel-20-days": {
    tour_name: "Best of Egypt, Jordan & Israel - 20 Days",
    tour_start: "Cairo",
    tour_end: "Jerusalem",
    tour_duration: "20 days",
    min_group_size: 10,
    language: "English",
    recommended_ages: "10 to 80",
    summary:
      "Experience the Best of Egypt, Jordan and Israel on this 20-day group tour! Travel from Cairo to Jerusalem; cruise the Nile River, see the Pyramids of Giza, visit Petra, tour Israel’s holy sites and more.",
    summary_image:
      "https://images.ctfassets.net/hcch9ko3ppsh/3jxsy5jQK9TF0eaxveSBuq/5bf27574443f5aa375b294c459dc3e26/day6-valley-kings-ancient-egypt-king-tutankhamun-tomb.jpg?fit=fill&w=500&h=500",
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "Customisable itineraries with daily add-on activities",
      "Group-focused itineraries crafted by industry experts",
      "20 years of Operational Excellence",
      "Protected payments and financial peace of mind",
      "Choose your own departure date",
    ],
    slug: "best-of-egypt-jordan-and-israel-20-days",
    countries: ["Egypt", "Jordan", "Israel"],
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/6mfYdE1OMOn4CDks9cAMmt/bdf857174b1ebf134f41408f9c1fd95b/day12-the-ruins-of-jerash-amman-jordan.jpg",
      "https://images.ctfassets.net/hcch9ko3ppsh/3GH45WlmTotQu1gp57aNIi/19b15753c19c71cf6e22b04f78c7dc12/hero-egypt-cairo-giza-pyramids.jpg?fit=crop&h=750&w=1950&f=center",
    ],
    features: [
      "Tour of the Pyramids and Great Sphinx of Giza",
      "Visit the Pyramid of Zoser, Sakkara - Entry not included",
      "Visit the Philae Temple - Entry not included",
      "Sail on a three-night, five-star Nile River Cruise",
      "Visit the temple of Kom Ombo - Entry not included",
      "Visit Karnak Temple - Entry not included",
      "Explore the Luxor Temple - Entry not included",
      "Explore the Valley of the Kings - Entry not included",
      "Discover the Temple of Hatshepsut - Entry not included",
      "Visit Colossi of Memnon - Entry not included",
      "All-inclusive, two-night stay at Red Sea resort",
      "Guided Cairo city tour",
      "Free day to explore Cairo",
      "Flight from Cairo to Amman, Jordan",
      "Guided city tour of Amman",
      "Visit Jerash; home to impressive Roman ruins - Entry not included",
      "Explore Petra; a famous ancient city - Entry to the treasury is not included",
      "Visit Nazareth; a historic Christian pilgrimage site",
      "Enjoy a boat ride on the Sea of Galilee",
      "Visit Caesarea; home to King Herod’s ancient port",
      "Experience the historic monuments of Bethlehem",
      "Spend three days in Jerusalem",
      "Tour the Old City of Jerusalem",
      "Explore Ein Karem, the Mount of Olives and Mount Zion",
      "Transfer to the airport at end of the tour",
    ],
    itinerary: [
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6y0Ss5dS6oZgGO7bmNbpTO/d33e6e9de367f7e008bf7f50a8b0ceba/day1-mosque-madrassa-sultan-hassan-cairo-egypt-guided-tour__1_.jpg?fit=fill&w=350",
        destination: "Start of tour in Cairo",
        description:
          "Welcome to Cairo, Egypt’s fascinating capital city! Once your group arrives at the Cairo Airport, a Group Tour Shop representative will assist with passport control, immigration and baggage claim before transferring your group to the hotel. Once everyone has checked in, your group will meet with the tour representative for more information about the trip.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5aYbVOTwyAQBk05jECADqK/77e00852d302aef13ebf395547a8e1f5/day2-egypt-cairo-giza-pyramids-sphinx.jpg?fit=fill&w=350",
        destination: "Cairo",
        description:
          "Enjoy breakfast at the hotel before today’s Cairo tour. Get ready to experience the icons of ancient Egypt! Head to the Giza pyramid complex - one of the highlights when you visit Cairo - and marvel at the Great Pyramid of Giza, the Pyramid of Khafre, the Pyramid of Menkaure and the Great Sphinx. Then, visit Sakkara to see the Step Pyramid of Zoser (also known as the Pyramid of Djoser). This was the first-ever completed pyramid in Egypt and gets its name from the six tombs built on top of each other.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3ZL8rXO8lD8Lb4ubWEI9W2/a788a967c82203dcc2ffad302e471556/day3-cruise-ship-on-the-nile-river.jpg?fit=fill&w=350",
        destination: "Cairo - Aswan",
        description:
          "Early this morning your group will depart for Aswan. Upon arrival, everyone will check into their rooms on the spectacular five star Nile River Cruise! First on the agenda is a visit to the Philae Temple Complex. This beautiful island is reached by a small motorboat. It is believed that the last Egyptian hieroglyph was written on the island of Philae in the late fourth century! Tonight, the Nile Cruise officially begins with an overnight stay on the Nile Cruise Boat.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7KUVDkN8gqFuEDm6Wr5cfE/fc165032be5f8b7e8a60554a05e95228/day4-ruins-of-temple-kom-ombo-egypt.jpg?fit=fill&w=350",
        destination: "Aswan - Nile River Cruise - Kom Ombo",
        description:
          "Enjoy a leisurely breakfast aboard the Nile River Cruise this morning before sailing towards Kom Ombo around midday. Today, there is an option to add on an experience to your tour with an awe-inspiring excursion to Abu Simbel. Located at the southernmost tip of ancient Egypt’s borders, Abu Simbel is the Sun Temple of Ramses the Great and has stood on the banks of the Nile River for over 3,000 years! In the evening, explore the Temple of Kom Ombo. This unique 'double' temple is dedicated to the crocodile god Sobek and the falcon god Haroeris (Horus). The perfectly symmetrical twin entrances overlook the picturesque riverside.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6anCSvsedWJNBKr1t0QU1o/62c09b092a6843c27ef7a4a4b37024d1/day5-ancient-luxor-temple-view-sunset-panorama-egypt.jpg?fit=fill&w=350",
        destination: "Kom Ombo - Nile River Cruise - Luxor",
        description:
          "After breakfast, sail along the Nile towards Luxor. Arrive in the afternoon and get ready to explore Luxor’s historic East Bank. Visit the immense Karnak Temple, considered by many to be Egypt’s most important Pharaonic sight, and marvel at its towering, decorated pillars and obelisks. Then, explore the magnificent Luxor Temple which is home to the Avenue of Sphinxes. Luxor Temple is a place of worship dedicated to three gods: Amun, his wife Mut and his son Khons. After a busy afternoon, enjoy a final overnight stay on the Nile River Cruise ship.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4xTDE8S4ce5t53OPDuCuDF/e2013f1cb8960b80665cc81e5356ba34/day6-valley-kings-ancient-egypt-king-tutankhamun-tomb.jpg?fit=fill&w=350",
        destination: "Luxor - Hurghada",
        description:
          "Today the tour heads to Luxor’s West Bank after breakfast. The day begins with a guided tour of the Valley of the Kings. This world-famous archeological site is rich in ancient history. Here, the group will step into some of the most fascinating tombs of the New Kingdom Pharaohs, including King Tutankhamen! Next, journey to the Temple of Hatshepsut - Egypt’s only female Pharaoh. The final stop for today’s tour is the Great Colossi of Memnon - the last remains of Amenophis III’s temple. Then, it’s time to hop on an air-conditioned coach to Hurghada. Spend the night in a resort on the red sea.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6Oqp4DiYFjc6rgjnZtTG97/398768548da960e61167acb79f882ee4/day7-relax-under-parasol-on-the-beach-of-red-sea-egypt.jpg?fit=fill&w=350",
        destination: "Hurghada: Free Day",
        description:
          "Enjoy a free day to spend as you wish at your resort on the Red Sea! Plenty of activities are available such as snorkeling, swimming, and scuba diving! Hurghada’s seas boast some of the best coral reef diving spots in the world and an incredible range of fish species. Alternatively, just sit back, relax, and soak up the sun’s rays. Indulge in delicious food and drinks - it’s all included!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/grK56sPjV0WCocsrD7JUn/a23c952881c781889939f20bfbddfe94/day8-crystal-clear-azure-water-and-white-beach-paradise-coastline-hurghada-red-sea-egypt.jpg?fit=fill&w=350",
        destination: "Hurghada: Free Day",
        description:
          "Enjoy another free day in Hurghada at your all-inclusive resort. Laze around on the beach or at the pool and indulge in a range of food and drinks. Or, choose to partake in an adventurous activity such as snorkeling, swimming, and scuba diving!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/17QIsyl581tk9fHHTLskdI/2c05d37a1b8d68589ad1a2d75c041b36/day9-the-egyptian-museum-at-tahrir-square-in-cairo.jpg?fit=fill&w=350",
        destination: "Hurghada - Cairo",
        description:
          "Depart for Cairo early this morning. Upon arrival, the group will embark on a city tour. In Cairo, enjoy the opportunity to visit the Egyptian Museum and discover many important pieces of ancient Egyptian history, including the treasures of King Tutankhamen’s tomb! Then, visit the Coptic area to see the Hanging Church which gets its name from its suspension above two Roman gate towers. From there it's on to the Mosque of Muhammed Ali. This grand mosque sits majestically on the summit of the Citadel of Saladin. Finally, visit the old Cairo Bazaar, Khan El Khalili. This intriguing maze of alleyways is full of souvenir stalls and coffee shops.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/YclkE8MkWOKyT2O7b3S3p/72c7cb88139b46c5573c1b312df48c2a/day10-mosque-madrassa-sultan-hassan-cairo-egypt-guided-tour.jpg?fit=fill&w=350",
        destination: "Cairo: Free Day",
        description:
          "By now, this part of the tour will have showcased the best of Egypt! Today the group will have a free day to explore Cairo as they wish. Discover more ancient or religious sites such as Memphis or the St. Simon Monastery. Alternatively, relax in Al Azhar Park, go shopping, or visit one of Cairo’s many museums.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6PgYyH6emRxIx8BAmpjRcT/c04c728e391b879f8a9de46d8d1fa278/day11-markets-cairo-amman.jpg?fit=fill&w=350",
        destination: "Cairo - Amman",
        description:
          "Tuck into a hearty breakfast this morning and prepare for the next stop of the tour which is a brand new country: Jordan! Travel to Cairo Airport and catch a flight to Amman, the capital city of Jordan. Upon arrival in Amman, a Group Tour Shop representative will meet with your group and take you to the coach which will transfer your group to the hotel. The rest of the day is free for travelers to do as they wish. Why not wander around this bustling capital city? See inspiring architecture, Roman ruins, the Citadel, the lively downtown area, museums and more which can be explored further on the city tour tomorrow!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4bcp5E7Kyieu3oyvynuLwY/8ad56b524c6df9196864d62a9d3c7d68/day12-the-ruins-of-jerash-amman-jordan.jpg?fit=fill&w=350",
        destination: "Amman - Jerash - Petra",
        description:
          "After breakfast, embark on a city tour of Amman. Enjoy a panoramic tour and visit top attractions including the Citadel, the Roman Theatre, and Downtown Amman. Afterwards, it’s time to travel to Jerash. This city is one of the largest and best-preserved Roman sites outside of Italy! The ancient Roman city dates back to the Bronze Age and, millennia ago, the hippodrome was the site of gladiator battles and chariot races! Explore the ruins of the ancient city, including the imposing Hadrian’s Arch, all of which lie just outside of the modern city. Next on the itinerary is Petra. Travel to this famous historic site, check into the hotel where your group will enjoy an included dinner.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5XFmnVfJmKFyXAIKEJOCZC/645cfa065f6ac6407304782955a44987/day13-petra-ancient-city-mountain-jordan-middle-east-tours.jpg?fit=fill&w=350",
        destination: "Petra - Galilee",
        description:
          "Get ready for a true highlight of the trip today! Explore Petra and discover why it is called the Red Rose City! This ancient city has been half-built and half-carved into the surrounding mountains’ rockface and the destination is one of the world’s most famous archaeological sites. It is a definite highlight of any Jordan tour! After experiencing the wonders of Petra, the tour travels onwards to Allenby Bridge, across the Jordan River, towards the Galilee region of Israel. Arrive in Galilee and check into the hotel for tonight.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/HECxKbUyYN2434GAHrMS5/a2e500fc1d54163739ec3f6f12de406f/day14-basilica-of-announciation-in-nazareth-israel_..jpg?fit=fill&w=350",
        destination: "Galilee - Nazareth - Galilee",
        description:
          "This morning, the tour travels to Nazareth. This historic city is said to be the childhood home of Jesus and today it is a major site for Christian pilgrimage. Arrive in Nazareth and see a number of fascinating architectural sites including the Basilica of the Annunciation which is home to Mary’s Well (the site where the Archangel Gabriel is said to have appeared to Mary), St. Joseph’s church and Mount Precipice which lies just outside of the city. Next, travel towards the Sea of Galilee and make stops in Cana, Tabgha, and Capernaum en route. Later, enjoy a boat ride on the Sea of Galilee, a large freshwater lake that is another important pilgrimage site.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/9HKlzTVubxmCSNEYZlhDM/1b1da4c98808d8090037b24d088eb466/day15-the-port-of-king-herod-in-ancient-caesarea.jpg?fit=fill&w=350",
        destination: "Galilee - Caesarea - Bethlehem",
        description:
          "Bid farewell to the Galilee region and head to Israel’s coast today! Arrive in Caesarea, home to King Herod’s ancient port, Israel’s largest aqueduct, and a large Roman amphitheater! Admire the view of Mount Tabor before traveling onwards to Bethlehem. Arrive in Bethlehem, another major Christian pilgrimage destination. The town is said to be the birthplace of Jesus and is home to several prominent holy sites. Check into the hotel for tonight and choose to see some of the city on your own or relax for the evening before another exciting day tomorrow!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/41kq0HTLLYx3qWPpnylzHF/43efcc695472d3a9c931d0f324fd6e1b/day16-view-of-the-church-of-the-nativity-bethlehem-jerusalem-israel.jpg?fit=fill&w=350",
        destination: "Bethlehem",
        description:
          "Explore the historic highlights of Bethlehem today! See major sites including the Church of Nativity, the Chapel of the Holy Innocents, St. Jerome’s Grotto, Manger Square, and the Shepherds’ Field Chapel. In addition to these holy sites, Bethlehem is a city of deep religious, cultural, and historic roots. It’s home to monasteries, museums, and heritage centers. Experience all facets of Bethlehem life during your stay.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4nxae5twTyggDbaK3CTr34/8c5b88d0ebcf121208576f5dea16825a/day17-western-wall-and-dome-of-the-rock-in-the-old-city-of-jerusalem-israel.jpg?fit=fill&w=350",
        destination: "Bethlehem - Jerusalem",
        description:
          "Travel from Bethlehem and get ready to visit Jerusalem today! Arrive in Jerusalem, one of the world’s holiest cities. Did you know that it is also one of the oldest cities as well as a center for three major religions: Judaism, Christianity, and Islam? Explore the Old City of Jerusalem which is a destination home to more holy sites than any other square kilometer in the world! Walk along Via Dolorosa, which is home to the Stations of the Cross, visit the Church of the Holy Sepulchre, view Dome of the Rock and Al Aqsa Mosque, and see the Western Wall. Absorbing the history, culture, and myriad of religious monuments is an absolute must on tours to Jerusalem!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/47d1cxVjOpmXEn22Zu4BLB/16bd2bc05c363fa980f3cc4fda2b8f51/day18-dormition-abbey-at-mount-zion-jerusalem-israel.jpg?fit=fill&w=350",
        destination: "Jerusalem",
        description:
          "Adventures in and around the city continue today! Enjoy a full-day Jerusalem tour experience. Admire the vibrant Chagall Windows and see the Model of Jerusalem which is a 1:50 scale rendition of the ancient city. Visit the charming ancient village of Ein Karem and explore the Church of Saint John the Baptist. Experience the Gardens of Gethsemane located at the base of the Mount of Olives as well as the Church of all Nations, the Rock of Agony, the Tomb of the Virgin Mary, and the Church of the Pater Noster. Complete your Jerusalem excursion with a trip to Mount Zion, a highlight of tours to Jerusalem, and see the Church of Saint Peter in Gallicantu.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3r4Iho0jxlmPIKG5O5h0j0/716b6eac490eb4daa63ff02367ee5c01/day19-jerusalem-israel-at-the-tower-of-david.jpg?fit=fill&w=350",
        destination: "Jerusalem",
        description:
          "Another full day in Jerusalem filled with culture, history, and incredible sites! Visit the fascinating Dominus Flevit Church, the Abbey of Dormition, and the Cenacle - said to be the site of the Last Supper! Be sure to snap some photos at St. Stephen’s Gate and the Pool of Bethesda. Even more holy sites to visit include the Church of St. Anne and the Ecce Homo Convent. It’s easy to see that Jerusalem is absolutely bursting with incredible things to see, do, and experience!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5EkjkuV7wFxmAu9apASkMT/ef20c96c0866a694ec6997ab695890f5/day20-jerusalem-street-in-the-old-city.jpg?fit=fill&w=350",
        destination: "End of tour in Jerusalem",
        description:
          "After 20 days spent exploring three magnificent countries, the tour comes to an end today. At this point, you will have experienced bucket list destinations in Egypt, Jordan, and Israel! Enjoy a final breakfast on tour. After breakfast, a transfer to the airport is available. Safe onward travels!",
      },
    ],
  },
  "best-of-europe-001-12-days": {
    tour_name: "Best of Europe 001 - 12 Days",
    tour_start: "Amsterdam",
    tour_end: "Amsterdam",
    tour_duration: "12 days",
    min_group_size: 10,
    language: "English",
    recommended_ages: "10 to 80",
    slug: "best-of-europe-001-12-days",
    summary:
      "Explore Europe’s top destinations with this 12 day group tour! Visit Amsterdam, Germany, Italy, Swiss Alps and Paris. Customise this Best of Europe tour with incredible add-on activities available daily for a truly unforgettable journey.",
    summary_image:
      "https://images.ctfassets.net/hcch9ko3ppsh/65ainmvFB4A24Vx7bQwkTX/fb7df69e4daa8b376012e955fcdda941/GTSNMC8-florence-italy-cityscape.jpg?fit=fill&w=500&h=500",
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/3GEgE43K1uYigGPb9E4R1T/b5cf81609241d84e220ed53178531177/florence-italy-cityscape.jpg?fit=crop&h=750&w=1950&f=center",
      "https://images.ctfassets.net/hcch9ko3ppsh/3w3YEsPLYaLCbDWPheTUlP/9229c36a54f5a2e0431a26d8636ab93c/day1-Bridges-Over-Canals-In-Amsterdam-At-Autumn.jpg?fit=crop&h=750&w=1950&f=center",
    ],
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "Customisable itineraries with daily add-on activities",
      "Group-focused itineraries crafted by industry experts",
      "20 years of Operational Excellence",
      "Protected payments and financial peace of mind",
      "Choose your own departure date",
    ],
    features: [
      "Tour Director for the duration of the trip",
      "Transport by coach between destinations",
      "One night in Amsterdam, capital of the Netherlands",
      "One night in Germany’s beautiful Rhine Valley",
      "One night in Munich, capital of Bavaria",
      "One night in Venice, Italy’s romantic floating city",
      "Two nights in Rome, capital of Italy",
      "One night in Italy’s Tuscany region",
      "Two nights in the majestic Swiss Alps",
      "Two nights in Paris, capital of France",
      "Scenic drive through Austria",
      "Travel through Northern Italy",
      "Drive through France’s Burgundy wine region",
    ],
    itinerary: [
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3w3YEsPLYaLCbDWPheTUlP/9229c36a54f5a2e0431a26d8636ab93c/day1-Bridges-Over-Canals-In-Amsterdam-At-Autumn.jpg?fit=fill&w=350",
        destination: "Amsterdam",
        description:
          "Welcome to Amsterdam, the capital of the Netherlands! For a smooth arrival, airport transfers can be arranged for the group. Arrive at the hotel for the evening and meet with the Group Tour Shop Tour Director who will brief the group on the upcoming itinerary. The Tour Director can also offer some expert Amsterdam travel advice for the rest of the day. Known for its impressive museums, some of the best places to visit in Amsterdam include the Van Gogh Museum, MOCO, Rijksmuseum and Vondelpark. There is also an option to take an Amsterdam canal cruise or join a cheese and clog factory tour! Why not celebrate the first night of the tour by adding on a dinner in a central restaurant?",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2AK77OcWAR23I3809tCxDc/83e719888e7e7d25617c3bc8f83f0902/day2-summary-rhine-valley-cruise.jpg?fit=fill&w=350",
        destination: "Rhine Valley",
        description:
          "The tour makes its way to its next destination, the beautiful Rhine Valley, this morning. If more time in the Netherlands is desired, a Dutch countryside tour showcasing stunning windmills and tulips can be added. History buffs can join ​​'A Bridge too far' Netherlands WWII half day tour. Before reaching the Rhine Valley, stops can be made in Nijmegen or the German cities of Düsseldorf or Cologne. Arrive in the Rhine Valley and admire the stunning surroundings. The best way to see the Rhine Valley is on a Rhine cruise. Try the celebrated wines of the region and learn how cuckoo clocks and beer steins are made!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3MKOii718lh7ZedkXGxAyy/516d8d07f9147050bb0a65add8dc3635/day3-nuremberg-castle-europe-jewel.jpg?fit=fill&w=350",
        destination: "Munich",
        description:
          "Today, the group will travel to the capital of Bavaria, Munich! En route, the group can choose from a variety of comfort stops in Frankfurt, Ulm, Nuremberg and Heidelberg among others. Highly recommended is a stop in the awe-inspiring Black Forest, the inspiration behind many Brothers Grimm fairy tales. The rest of the day is free to explore Munich. Munich is known for its rich culture, exceptional beer and many important museums. The best way to get acquainted with this Bavarian city is on a guided tour. Munich is known for its beer halls. This evening, dine at a traditional beer hall, it’s a must for beer lovers and foodies!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6pgZkznCGVJUIofqxPmGs9/e2d7bc9d4859ed9b362ae11c828e46dd/day4-Neuschwanstein_Castle.jpg?fit=fill&w=350",
        destination: "Venice",
        description:
          "Say Auf Wiedersehen to Germany as the tour travels to Italy this morning. Before crossing the border into Austria, there is an opportunity to visit the glorious Neuschwanstein Castle or the historic Andechs Monastery. Then, drive through Austria where stops can be made in Salzburg, Mozart’s birthplace, or Innsbruck which is renowned for its winter sports. A trip to the Nordkette mountain range is also available in Innsbruck. Admire the changing landscapes as the tour makes its way to Venice, Italy’s mesmerising floating city! Once in Venice, discover some of the city’s incredible highlights, join experiences such as an orientation tour, gondola ride or glass blowing demonstration.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1UFfEV9AvvCfPn10meUtbf/13fb7a97387394fec9374a481e4aebd3/day5-Pantheon-Rome-Italy.jpg?fit=fill&w=350",
        destination: "Rome",
        description:
          "This morning, leave the floating city for Rome, the 'Eternal City'! On the way, there are many options for stops and orientation tours such as a visit to Padua, home to one of the oldest Universities in the world, or Modena, known for its sports cars and balsamic vinegar, which can be sampled with a tasting. Later, arrive in Rome, Italy’s capital city! This ancient city is one of the world’s top tourist destinations thanks to its exceptional art, fascinating history and delectable cuisine. A walking tour is the best way to see Rome’s top sights such as the Pantheon, Colosseum and Roman Forum. Or, join a food tour to taste authentic Roman cuisine like regional cheeses, pasta and gelato!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4HFeVQWHiYDL0U0oUAkrCU/35f06341db79aba9f393dca0e37bfc1d/day6-ancient-Roman-city-Pompeii-Vesuvius-volcano.jpg?fit=fill&w=350",
        destination: "Rome",
        description:
          "Enjoy a free day to discover the wonders of Rome! Make a wish at the Trevi Fountain, join a tour of the majestic Castel Sant’Angelo or wander around one of Rome’s bustling Piazzas. Today also offers an opportunity to tour the Vatican City, the smallest country in the world and home to the Pope. Marvel at the exceptional art within the Vatican Museums and Michelangelo’s frescoes in the Sistine Chapel. This tour can be combined with a tour of Castel Gandolfo, where the Pope’s summer residence is situated. There is also an option to take a trip further afield with a day tour of Naples and Pompeii, which was famously destroyed after Mount Vesuvius erupted thousands of years ago.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/30acTDvycMW15zCay8ItGd/0a7cdfb6e04bc3cbfe45e7da2a6f4bbe/day7-siena-italy-guided-tour-medieval-hill-town.jpg?fit=fill&w=350",
        destination: "Tuscany",
        description:
          "The Italian adventure continues today as the group departs Rome for Tuscany. Stops can be added in Siena, famous for the Palio horse race, or Pisa, where the group can snap that perfect picture with its famous leaning tower. Before arriving in Florence, why not visit enchanting Tuscan hill-top towns, full of gorgeous medieval architecture like Montepulciano, San Gimignano or Orvieto? Before heading to the hotel, we suggest a visit to discover Florence! This lively city is home to stunning landmarks and Renaissance art masterpieces which can be viewed on a visit to the Uffizi or Accademia Galleries. Florence is renowned for its world-class cuisine. Sample Tuscan delights like Florentine steak or pappardelle pasta with an add-on lunch or dinner.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5nWag7zrfaQI6DnAAcoSk4/456be88a11cde8d8414921465b297681/day8-piazza-duomo-square-in-milan-italy.jpg?fit=fill&w=350",
        destination: "Jungfrau Region",
        description:
          "After four days in Italy, it's time to head to the mountains! Enjoy a scenic drive from Tuscany to the Swiss Alps, first driving through Northern Italy. Stop along the way and enjoy the option to add on orientation tours in the home of bolognese, Bologna, Carrara Town, known for its marble and the Italian fashion capital, Milan! Admire the changing scenery and mountainous landscapes as the tour approaches Switzerland. Before arriving at tonight’s accommodation, why not take a Lake Lucerne cruise or an orientation tour of the town? Or, join a tour of Bellinzona, home to three UNESCO-listed castles! Make the most of the first night in Switzerland and try a Swiss family-style dinner.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/46TC4FpwaOrLM8ZjKIKV4z/6a42860bb4d3ec45ccbdbe659cacc513/day9-cog-wheel-train-travels-on-famous-jungfrau-railway-from-keine-scheidegg-jungfraujoch-switzerland.jpg?fit=fill&w=350",
        destination: "Jungfrau Region",
        description:
          "There are so many fantastic ways to spend this free day in the Swiss Alps. The Jungfrau region boasts exquisite views which are best admired from one of the region's alpine towns or atop a mountain! To get the best view around, take a trip to Jungfraujoch train station, the highest train station in Europe! This highly recommended add-on showcases unmissable snowy vistas and magical glaciers. On the ground, a visit to the Ballenberg Open-Air Museum or a Swiss chocolate tour can be added to the agenda. Before leaving Switzerland, trying a classic Swiss fondue dinner is a must!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7d8eYsw7PRkWSitGkzp8EM/f164ae66dc0ccb3eceee78eae835b394/day10-beaune-burgundy-hospices-hospital-france-travel-europe-guided-tours.jpg?fit=fill&w=350",
        destination: "Paris",
        description:
          "The tour continues towards France today! Before leaving Switzerland, the group could enjoy comfort stops at the picturesque Lac de Neuchatel or in Bern, the Swiss capital. Then, look forward to a drive through Burgundy, a gorgeous French wine region. Make the most of this journey with a visit to Burgundy. A wine tasting and tour is also available in Beaune, Burgundy’s wine capital. Or, sample Dijon mustard in the town of the same name. Next stop is the French capital and “City of Lights”, Paris! Arrive later in the day and settle into the hotel. An ideal way to see this enchanting city is on a sightseeing tour, or the group can end the night with a glamorous cabaret show!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5zD3R1AKCbvRShrCq7f00s/f620a3cb08f7233ecb72afc3ba94e7af/day11-Sacre_Coeur_Cathedral_on_Montmartre_Hill_in_Paris__France.jpg?fit=fill&w=350",
        destination: "Paris",
        description:
          "Paris is waiting to be explored today! This romantic city has been beloved by artists, poets and travellers for centuries with its iconic sights being immortalised in films and novels. Take a Paris Sightseeing tour and admire many of these famous sights including the Eiffel Tower, the Champs-Élysées and the River Seine. Visit an authentic Parisian neighbourhood with a locally guided tour of Montmartre, affectionately called the “last village in Paris”, which is known for the striking Sacré-Cœur church and for being home to many famous artists including Monet, Degas and Picasso! A trip to Paris is not complete without a taste of French cuisine. End the day with dinner in Montmartre or in the city.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2Y3bTbPOClb7s4cIRMvtSe/427c07f72040253cb5a79bc6da5bdda4/day12-ghent-belgium-medieval-city-guided-tours.jpg?fit=fill&w=350",
        destination: "Amsterdam",
        description:
          "The tour may be coming to an end but there are still many memories that can be made on this final day! The group leaves Paris and drives through Belgium. The group can take this opportunity to add another country to the list and stopover in the Belgian cities of Bruges, Ghent or the capital city, Brussels. Either way, be sure to sample some famous Belgian chocolate, beer or waffles! En route to Amsterdam, stopovers can be made in the Dutch cities of Rotterdam, Delft or Antwerp. The group can choose to end the tour in Paris or in any of the areas mentioned. If ending the tour in Amsterdam, enjoy the option of a farewell dinner. Safe travels!",
      },
    ],
    countries: [
      "Netherlands",
      "Germany",
      "Italy",
      "Switzerland",
      "France",
      "Belgium",
    ],
  },

  "best-of-europe-002-12-days": {
    tour_name: "Best of Europe 002 - 12 Days",
    tour_start: "Amsterdam",
    tour_end: "Amsterdam",
    tour_duration: "12 days",
    min_group_size: 10,
    language: "English",
    recommended_ages: "10 to 80",
    slug: "best-of-europe-002-12-days",
    summary:
      "Travel to multiple destinations within five countries on this 12-day Best of Europe tour! Group Tour Shop Amsterdam to Amsterdam holiday packages feature plenty of add-on experiences each day to make this trip truly unforgettable.",
    summary_image:
      "https://images.ctfassets.net/hcch9ko3ppsh/43jZzwm17dpWY63RGjaPcb/95b57ae9d65551f56d1c99009e3c84d6/GTSNMC9-hero-Eiffel-Tower-Aerial-View-On-The-Champ-De-Mars-In-Paris-France.jpg?fit=fill&w=500&h=500",
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/43jZzwm17dpWY63RGjaPcb/95b57ae9d65551f56d1c99009e3c84d6/GTSNMC9-hero-Eiffel-Tower-Aerial-View-On-The-Champ-De-Mars-In-Paris-France.jpg?fit=fill&w=500&h=500",
      "https://images.ctfassets.net/hcch9ko3ppsh/6VD0sZP6ctzqrwQhJtJTV0/7c9620cd77bf9c4de3b24cfd226a60c4/day1-Channel-In-Amsterdam-Netherlands-Houses-River-Amstel.jpg?fit=crop&h=750&w=1950&f=center",
    ],
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "Customisable itineraries with daily add-on activities",
      "Group-focused itineraries crafted by industry experts",
      "20 years of Operational Excellence",
      "Protected payments and financial peace of mind",
      "Choose your own departure date",
    ],
    features: [
      "Tour Director for the duration of the trip",
      "Transport by coach between destinations",
      "Breakfast every morning",
      "One night in Amsterdam, the Dutch capital",
      "Two nights in Paris, the “city of lights”",
      "Two nights in the majestic Swiss Alps",
      "One night in the hills of Tuscany",
      "Two nights in Rome, Italy’s capital",
      "One night in Venice, Italy’s floating city",
      "One night in Munich, capital of Bavaria",
      "One night in the beautiful Rhine Valley",
      "Drive through France’s Burgundy wine region",
      "Drive through Austria and the Bavarian Alps",
      "Free option to end the tour in Amsterdam, Rhine Valley or in between",
    ],
    itinerary: [
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6VD0sZP6ctzqrwQhJtJTV0/7c9620cd77bf9c4de3b24cfd226a60c4/day1-Channel-In-Amsterdam-Netherlands-Houses-River-Amstel.jpg?fit=fill&w=350",
        destination: "Amsterdam",
        description:
          "This Best of Europe tour begins today in Amsterdam, the capital of the Netherlands! For a hassle-free travel experience, an airport transfer to tonight’s hotel can be arranged. The Group Tour Shop Tour Director, who will be with the group for the duration of the tour, will meet the group and brief them on the itinerary for the next 12 days. The rest of the day is free to explore Amsterdam! To discover some of the best places to visit in Amsterdam, be sure to ask the Tour Director for some Amsterdam travel advice. Pay a visit to one of the city’s many museums, hop on an Amsterdam canal cruise or join a Dutch countryside tour and admire the picturesque fields and windmills.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7wM4WNqcSkRCrkR6y9j5Ve/f544b80cde7aff707c009be907b3ab50/day2-bruges-belgium-old-town-square-belfry.jpg?fit=fill&w=350",
        destination: "Paris",
        description:
          "Hop aboard the coach this morning as the tour leaves Amsterdam and heads to Paris! Drive through Belgium, a country known for its important role in the European Union as well as its exceptional chocolate, beer and waffles! Comfort stops are available in the Belgian cities of Ghent, Bruges and Brussels, Belgium’s capital. Next stop, Paris! As one of the world’s top travel destinations, the romantic French capital needs little introduction. Spend the rest of the day admiring Paris’s iconic landmarks such as the Eiffel Tower, the Arc de Triomphe, the Louvre and more! The best way to see this grand city is on a guided sightseeing tour. In the evening, be sure to sample authentic French cuisine.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2L9Hu41CfG48UcyxTKbala/745eca68e7705a085f930cf76c283149/day3-Sacre-Coeur-Cathedral-on-Montmartre-Hill-Paris-France.jpg?fit=fill&w=350",
        destination: "Paris",
        description:
          "Enjoy a free day in the city of lights of love! Group Tour Shop recommends adding a Paris Sightseeing tour to today’s agenda which includes visits to Paris’s top sights as well as a macaron tasting and a trip to Montparnasse Tower to gain a panoramic view of the city. Another great option for the day is a tour of the stunning neighbourhood of Montmartre. This charming village is home to the striking Sacré-Cœur church as well as quaint cafés and artists lining the streets. While in Paris, be sure to taste some classic French dishes such as French onion soup, escargot and, of course, real Parisian croissants! In the evening, why not add-on some fabulous entertainment with a Cabaret show?",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/ZTW1fztsLiNFt5d2qFd6v/6464085f7aa697d59c4470e78ad1a435/day4-Beautiful_aerial_view_on_the_old_town_with_historical_buildings_in_Bern_city_in_Switzerland.jpg?fit=fill&w=350",
        destination: "Jungfrau Region",
        description:
          "Say au revoir to the bright lights of Paris and prepare for the snow-capped mountains of the Swiss Alps! On the way, the group will drive through France’s beautiful Burgundy wine region. Comfort stops and tasting experiences can be added in Beaune, Burgundy’s wine capital or Dijon, famous for its synonymous mustard. Before arriving in Jungfrau, final stops can be made in Bern or Lake Neuchâtel, or, the group can join a Lake Thun cruise, St. Beatus Caves tour or visit the Ballenberg Open-Air museum. In the evening, choose to celebrate the first night in Switzerland with a traditional Swiss Family Style Dinner.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1MeHZQRuJhQ7A13E0vpQrm/5e76bc798fa5e01fcbc52f24455e4210/DAY5-F-1.JPG?fit=fill&w=350",
        destination: "Jungfrau Region",
        description:
          "Discover the majesty of the snowy Swiss Alps with a free day! Plenty of outdoor activities are on offer such as skiing, snowboarding and paragliding! A train ride up to Jungfraujoch the “Top of Europe” is an experience not to miss, Once at the top marvel at the year-round snow and magnificent views. Alternatively, take a leisurely cruise on Lake Thun or Lake Brienz or visit Ballenberg, a Swiss open-air museum that displays traditional architecture from around the country. After a day in the cool Swiss air, warm up with an add-on traditional Swiss fondue dinner.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/SlteAcLhWEtd1Yaq9aRoE/672ccfc77a7706fb7d84ea3309dc85da/day6-the-wonderful-masterpiece-of-the-judgment-day-inside-the-dome-in-florence-italy.jpg?fit=fill&w=350",
        destination: "Tuscany",
        description:
          "Today, the tour leaves behind the mountains of Switzerland and travels through the hills of Tuscany! En route to Florence, there are plenty of comfort stops, tours and experiences available to discover more stunning Italian regions. Choose an orientation tour of Milan, Italy’s fashion capital, Modena, birthplace of Enzo Ferrari, or Bologna, home of bolognese sauce! Another unmissable experience for foodies is a Parma food tour to taste the region's famous ham and parmesan cheese. Witness the centuries-old seaside villages of Cinque Terre or go on a tour of Pisa and snap a picture with that iconic leaning tower. In Florence, enjoy add-ons such as a leather workshop, Uffizi and Accademia Gallery tours or a wine, pizza and gelato tour!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1681uiJNNKbELYfv10c1mM/c7e57406106c2e0c0d9366962de00373/day8-town-of-orvieto-hill-tuscany-italy.jpg?fit=fill&w=350",
        destination: "Rome",
        description:
          "The tour travels towards Rome, the capital of Italy, today! On the way, comfort stops in the medieval Tuscan towns of Montepulciano and Orvieto are available. Then, arrive in Rome, the Eternal City! Renowned and beloved for its art, architecture and ancient history, Rome should certainly be on every traveller’s bucket list! Visit top attractions like the Trevi Fountain, the Colosseum, the Roman Forum and the Pantheon on an insightful guided walking tour. Find out what makes Rome a foodie haven and join a Rome food tour. Taste Italian delights such as pizza, pasta, cheese and gelato!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5ulp9JLnm6fqOUVkY7JK8c/e53549e6f890b5a5f04f275d26131db9/Trevi-Fountain-In-The-Morning-Light-Rome-Italy.jpg?fit=fill&w=350",
        destination: "Rome",
        description:
          "Today is free to explore Bella Roma! If yesterday was spent exploring Rome’s iconic landmarks, why not add on a trip to the Vatican City today? This guided tour will showcase the spectacular artworks housed in the Vatican’s museums, Michaelangelo’s frescoes in the Sistine Chapel and the Renaissance and Baroque masterpieces within St. Peter’s Basilica. A trip to the charming town of Castel Gandolfo, home to the Pope’s summer residence, can also be added on. Alternatively, take a day trip to Naples and Pompeii to see the mighty Mount Vesuvius which once destroyed the town of Pompeii in a volcanic eruption.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1xfnKrKQ1vrc32wVwgOrQj/b7c68dcc346efe8065e8c94ac7e86d4b/grand-canal-with-gondola-in-venice-italy.jpg?fit=fill&w=350",
        destination: "Venice",
        description:
          "Head towards Venice, Italy’s most romantic city! Shakespeare fans can enjoy a stop in fair Verona, the setting of Romeo and Juliet or in picturesque Padua, the setting for most of the Taming of the Shrew. Alternatively, visit Ravenna, known for its well-preserved late ​​Roman and Byzantine architecture or in the historic micro-state of San Marino. Then, it’s on to Venice, a floating city that has captivated artists and filmmakers for generations! No trip to Venice is complete without a gondola ride along the city’s captivating canals. Other experiences include a glass blowing demonstration, a Venice orientation tour and dinner in Venice or the Mestre comune.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6p5CrclhGW8UEvMVADBVp2/d79bda2bc2a59e45db6b7b7fa1fd4939/day10-salzburg-castle-gardens-austria-guided-tour.jpg?fit=fill&w=350",
        destination: "Munich",
        description:
          "Bid arrivederci to Italy today and say Guten Tag to Germany! Admire incredible views of the Bavarian Alps as the group drives through Austria. Enjoy the option to stop in Salzburg, the birthplace of Mozart and home to several sites from The Sound of Music! Or, visit the alpine city of Innsbruck, a world-renowned winter sports capital. Cross the border into Germany and take the opportunity to visit the magical Neuschwanstein Castle, Andechs Monastery or Eagle’s Nest which was once a meeting point for the Nazi party. Once in Munich, city tours and Olympic Park and BMW museum tours are available. Try an authentic beer hall dinner experience to end the day!",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2FCo89aJ4RQyeEaZ1CfPaw/48b8d99b00d6f66ff46c6933994cf1c5/day11-cuckoo-clocks-germany-winter-guided-tour.jpg?fit=fill&w=350",
        destination: "Rhine Valley",
        description:
          "After breakfast, drive from Munich towards Germany’s gorgeous Rhine Valley. On the way, add a stop in Ulm to see the tallest church steeple in the world, Nuremberg, the first town to make gingerbread and the site of the notorious Nuremberg trials or Frankfurt to admire its glistening skyline. A half day tour of the Black Forest is also highly recommended as its breathtaking scenery and fairytale-like atmosphere is truly unmatched. Arrive in the Rhine Valley and take a Rhine River cruise, taste some of the Rhine Valley’s famed wines or enjoy a beer stein and cuckoo clock demonstration! A half day Rhine Valley tour will allow the group to do all three activities and more.",
      },
      {
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1hTkhPZv2fwbd22Q8Whrbm/2c3678403692a9f11356c4c6e0f814e5/day12-zaanse-schans-netherlands-holland-windmill-canal-travel-europe-guided-tours-from-london.jpg?fit=fill&w=350",
        destination: "Amsterdam",
        description:
          'The tour comes to an end today and travels back to where it all began in Amsterdam. The group can choose to end the tour in the Rhine Valley, Amsterdam or anywhere between such as Cologne or Frankfurt. If returning to Amsterdam, add-on comfort stops are available in the German cities of Cologne and Düsseldorf or the Dutch city of Nijmegen. To learn more about European history, go on the “A Bridge Too Far" Netherlands WWII tour. Depending on the group’s departure time, add on more Amsterdam travel experiences with a cheese and clog factory tour or a farewell dinner! Wishing you a pleasant and safe journey onwards!',
      },
    ],
    countries: [
      "Netherlands",
      "Belgium",
      "France",
      "Switzerland",
      "Italy",
      "Germany",
      "Austria",
    ],
  },
  "best-of-israel-holy-land-tour-10-days": {
    tour_name: "Best of Israel Holy Land Tour - 10 Days",
    tour_start: "Tel Aviv",
    tour_end: "Tel Aviv",
    duration: "10 days",
    min_group_size: 10,
    language: "English",
    recommended_ages: "10 to 80",
    slug: "best-of-israel-holy-land-tour-10-days",
    countries: ["Israel"],
    summary:
      "This 10-day Israel Holy Land Tour showcases pilgrimage sites, spectacular mountainous landscapes, ancient cities, churches and much more! Enjoy a round trip from Tel Aviv and visit Nazareth, Bethlehem and must-see sites in Jerusalem.",
    summary_image:
      "https://images.ctfassets.net/hcch9ko3ppsh/2We5NIgORWvUZHdjLGPIKn/c6ef9669c93552017d6a7ad14506870f/day1-old-town-and-port-of-tel-aviv-city-israel.jpg?fit=fill&w=500&h=500",
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/7l6JMO0o1crcpGrjgandT/771938da74cf802376ef69c47e51ca1e/day7-jerusalem-highlights-israel.jpg",
      "https://images.ctfassets.net/hcch9ko3ppsh/5qaFHnVrldaGlXzR6frJ2H/042ee6e74374294384206c1b663767ee/day6-israel-palestine-bethlehem-holy-lavra-of-saint-sabbas.jpg?fit=crop&h=750&w=1950&f=center",
    ],
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "Customisable itineraries with daily add-on activities",
      "Group-focused itineraries crafted by industry experts",
      "20 years of Operational Excellence",
      "Protected payments and financial peace of mind",
      "Choose your own departure date",
    ],
    description:
      "This 10-day Israel Holy Land Tour showcases pilgrimage sites, spectacular mountainous landscapes, ancient cities, churches and much more! Starting in Tel Aviv, travel through Nazareth, explore Bethlehem and embark on a holy land Jerusalem tour. Seeing the Church of Nativity, swimming in the Dead Sea and taking a boat ride across the Sea of Galilee are just some of the highlights of Group Tour Shop holy land tours! Experience Israel’s top attractions and walk in the footsteps of Jesus, Mary and many other biblical figures with this incredible holy land tour package.",
    itinerary: [
      {
        description:
          "Welcome to the first day of this Israel holy land tour! On arrival at Tel Aviv airport, the Group Tour Shop Tour Director will meet your group and escort them to their private coach. Meet the bus driver who will accompany your group throughout the entirety of this tour. Proceed to the hotel in Nazareth for the evening.",
        destination: "Nazareth",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2We5NIgORWvUZHdjLGPIKn/c6ef9669c93552017d6a7ad14506870f/day1-old-town-and-port-of-tel-aviv-city-israel.jpg?fit=fill&w=350",
      },
      {
        description:
          "Enjoy breakfast at the hotel. Afterwards, the group makes its way to Mount Tabor, a picturesque site of great religious importance in Judaism and Christianity. Next stop is Cana of Galilee, the location of the Marriage at Cana. This iconic site is where Jesus is said to have turned water into wine! Here, mass will be performed with an option for couples to renew their vows. Head back to Nazareth for free time to enjoy lunch. Then visit the Church of the Annunciation and Mary’s Well, where Mary would draw water and where she reportedly received the news of conceiving baby Jesus. Next, see the nearby Church of St Joseph which was built in 1914 over much older Byzantine church ruins.",
        destination: "Nazareth",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/EPH0ZkXRALGEHdoIahzE1/e140a5a693da98943dc3b3697c0e2b46/day2-nazareth-city-panoramic-view-israel.jpg?fit=fill&w=350",
      },
      {
        description:
          "After breakfast, travel to the Sea of Galilee. Visit the Mount of Beatitudes, where Jesus is believed to have delivered the Sermon on the Mount, and enjoy mass upon arrival. At the nearby Mount of Tabgha, see the famous loaves and fish mosaic. Then, visit the Church of the Primacy of Saint Peter. Next, travel to Capernaum to see the house of St. Peter and the synagogue where Jesus is said to have preached. Enjoy the opportunity to try St. Peter’s fish (Tilapia) for lunch. Finally, it’s time for a real highlight of holy land tours; a boat ride across the Sea of Galilee. See the “Jesus Boat”, a 2,000-year-old boat found on the shores of Magdala!",
        destination: "Nazareth",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7kK1Zt7m9hlDj8Ao1CXqxU/a53280b44689503f1f7d6018c706f9b3/day3-view-of-the-sea-of-galilee.jpg?fit=fill&w=350",
      },
      {
        description:
          "Take a drive to the important city of Akko (also known as Acre) this morning. Akko is one of the oldest, continuously inhabited cities on earth! Here, marvel at the breathtaking Citadel of Acre. Next, visit the beautiful city of Haifa on the slopes of Mount Carmel. Enjoy mass at the lovely church of Stella Maris and take in the spectacular panoramic city views from the Bahá'í Gardens. Then, the group travels west to the ancient city of Caesarea Maritima to see the famous Roman aqueducts and amphitheatre. This is also where Pontius Pilate’s palace was located. Head back to Nazareth for dinner.",
        destination: "Nazareth",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1SqoGILHz9JjYy41NMb0yY/254d65eb61127745504f31ebff1fa7ae/day4-basilica-of-announciation-in-nazareth-israel.jpg?fit=fill&w=350",
      },
      {
        description:
          "After breakfast, the tour travels along the incredible Jordan Valley. Stop at the Jordan River and enjoy a chance to renew baptism vows. The next stop is Jericho - the oldest city in the world! Visit the spectacular Mount of Temptation Monastery where Jesus was said to be tempted by the devil. Next, it's on to the otherworldly archaeological site of Qumran, where the Dead Sea Scrolls were uncovered. On the way to tonight’s hotel, the group will enjoy a swim (or float!) in the mineral-rich waters of the Dead Sea. Soak up the water’s healing properties after a day filled with exploration!",
        destination: "Dead Sea",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1XaFx6lff2mZkqN5AOqbtY/6bb9a41f4e1076f230e487d75ebf4e45/day5-dead-sea-salt-shore-jordan-tour.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today after breakfast, drive to the charming village of Ein Karem to visit the Church of Saint John the Baptist and the Church of Visitation. This is where Mary visited Elizabeth (the mother of John the Baptist) and where she reportedly sang the ancient hymn of Magnificat. Then, head to Bethlehem to visit the Shepherds Field, known as the place where the star appeared, leading the shepherds to the manger. Then, visit the gorgeous Chapel of the Milk Grotto before viewing the iconic Church of Nativity - the traditional birthplace of Jesus. Marvel at the Manger Square, the grotto, which is Christianity’s oldest, continuously used place of worship, and the basilica which is the oldest major church in the holy land.",
        destination: "Bethlehem",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7J0gJ4K1KMYmJ62KJllTCK/e6353e2fd155efb9d7ccc52a2988c87c/day6-israel-palestine-bethlehem-holy-lavra-of-saint-sabbas.jpg?fit=fill&w=350",
      },
      {
        description:
          "The next three days feature incredible and engaging Holy Land Jerusalem tours! Today, head to Mount Zion and visit the remarkable Church of the Dormition, where Mary died. Next, visit the Cenacle, or Upper Room, where, according to the bible, the Last Supper took place. The last stop for the day is the gorgeous Roman Catholic Church of Saint Peter in Gallicantu, believed to be the location of the High Priest Caiaphas' palace.",
        destination: "Jerusalem",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6g3hNcT6bimNUSmab9zF22/33893c330424e761fee1c220eab10618/day7-jerusalem-highlights-israel.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today, explore the Old City of Jerusalem and marvel at seminal sights including the Dome of the Rock, the Al-Aqsa Mosque, the Western Wall, the Jewish quarter and the Cardo. After lunch, head to the Muslim Quarter to see the Church of Saint Anne and the Pool of Bethesda. Visit the Antonia Fortress where it is believed that Jesus was held for high treason. From there, walk the Via Dolorosa processional route through the Old City’s markets and stop at each Station of the Cross until reaching the Church of the Holy Sepulchre where the five remaining stations are today. Here, visit the Calvary and Jesus’s empty tomb. A mass will be held in the Church of the Holy Sepulchre.",
        destination: "Jerusalem",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/gosfGTAkt9zuQRRjeKbvW/0c0d0859c4376b7f99a74decadba64ab/day8-jerusalem-colorful-sunset-israel.jpg?fit=fill&w=350",
      },
      {
        description:
          "Drive to the top of the Mount of Olives after breakfast this morning. Admire spectacular panoramic views of Jerusalem and gain a better understanding of its geography and surrounding attractions. Located on the Mount of Olives is the Church of Pater Noster which is associated with the teachings of Jesus. Walk along the Palm Sunday road stopping at the amazing Dominus Flevit Church. The walk continues to the Gethsemane gardens and the Rock of Agony where, according to the bible, Jesus uttered his last prayer. Spend some time in the peaceful Catholic Church of All Nations above the rock. In the afternoon, drive to the Benedictine monastery in Abu Ghosh which is associated with Emmaus from the Gospel of Luke.",
        destination: "Jerusalem",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6oMhDPsSSBn3AgAOqmFaKl/7a388f596d3dd216b0db1ce4e84a5088/day9-jerusalem-israel-guided-middle-east-tours.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today is the final day of this Israel holy land tour! After one last breakfast, the group will be transferred to the Tel Aviv airport to continue their journey onwards. Safe travels!",
        destination: "Tel Aviv",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/htxF2kpgksgg4YCoMll3b/5ab9e0f2402e51317ffe3240c059d649/day10-night-view-of-tel-aviv-israel.jpg?fit=fill&w=350",
      },
    ],
  },
  "best-of-italy-milan-to-naples-16-days": {
    tour_name: "Best of Italy: Milan to Naples - 16 Days",
    start_location: "Milan",
    end_location: "Naples",
    duration: "16 days",
    min_group_size: 10,
    language: "English",
    recommended_ages: "10 to 80",
    slug: "best-of-italy-milan-to-naples-16-days",
    summary:
      "Discover the Best of Italy on this 16-day group tour which showcases vibrant cities, coastal villages and historic towns! Explore Milan, the Italian Lake District, Venice, Tuscany, Rome, Sorrento, Alberobello, Naples and more!",
    summary_image:
      "https://images.ctfassets.net/hcch9ko3ppsh/4DdqUh7F9E66mSooBaylEH/02760806d57bfd31571cd6e7df678f02/day15-colourful-island-of-procida-naples-italy.jpg?fit=fill&w=500&h=500",
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/4083dgCSkDR6wPLQGkBqrr/4b4fb6fb8413f4c048412eb402f1782c/day15-colourful-island-of-procida-naples-italy.jpg",
      "https://images.ctfassets.net/hcch9ko3ppsh/4VznwIKArKj9FojkWypVlK/0562a04767a903894346557c382ed5df/day2-cathedral-duomo-di-milano-and-vittorio-emanuele-gallery-in-square-piazza-duomo-at-sunny-morning-milan-italy.jpg?fit=crop&h=750&w=1950&f=bottom",
    ],
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "Customisable itineraries with daily add-on activities",
      "Group-focused itineraries crafted by industry experts",
      "20 years of Operational Excellence",
      "Protected payments and financial peace of mind",
      "Choose your own departure date",
    ],
    itinerary: [
      {
        description:
          "Welcome to Milan and the first day of this 16-day Best of Italy tour! Airport transfers can be arranged from both Milan and Rome for a smooth arrival. At the hotel in Milan, meet with the Group Tour Shop Tour Director who will escort the group throughout the tour. The rest of the day is free to discover Italy’s fashion capital! Learn more about this fascinating cultural hub on a Milan orientation tour with a local guide. Visits to top attractions such as the elaborate Duomo di Milano and the impressive Sforzesco Castle are also recommended. A great way to celebrate the first night of this tour is with a welcome lunch or dinner at a local restaurant.",
        destination: "Milan",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4SuJDR8CUqBJm0DwLjBXh/362448b9a0a20f68e9c9e6a5d174ca41/day1-beautiful-panoramic-view-of-milan-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Day 2 offers a full free day in Milan! Today, the group can enjoy a day tour and lunch in Turin, the capital city of Italy’s Piedmont region. Turin is home to world-renowned cuisine (including prized white truffles), fascinating museums and beautiful churches, squares and royal residences in a wide range of architectural styles! Another option for the day, and a must for Formula 1 fans, is a visit to the historic Autodromo Nazionale Monza. Alternatively, explore more within the city of Milan. Don’t miss out on sampling Milanese cuisine which includes popular dishes such as ossobuco and risotto alla Milanese!",
        destination: "Milan",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4VznwIKArKj9FojkWypVlK/0562a04767a903894346557c382ed5df/day2-cathedral-duomo-di-milano-and-vittorio-emanuele-gallery-in-square-piazza-duomo-at-sunny-morning-milan-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Drive up north this morning as the tour leaves Milan for the Italian Lake District! The group can stop in Brescia, which houses some of the most well-preserved Roman buildings in Northern Italy, or in the mediaeval city of Bergamo. The group can also visit San Pellegrino Terme to learn more about this picturesque spa town known for its mineral water and thermal baths. There are a wide range of tours and cruises available in Lake Como, Iseo and Garda, all of which offer stunning scenery and unique experiences. Even a trip to Switzerland is possible with a cruise along Lake Maggiore! Lunch or dinner can be enjoyed in Bellagio, the “Pearl of Lake Como!”.",
        destination: "Italian Lake District",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3o9WJ1jMfXl9AKzuY4wNzE/35fb5de8ff2e1c56f54b66eeb37c54f2/day3-lenno-town-in-como-lake-district-italian-traditional-lake-village.jpg?fit=fill&w=350",
      },
      {
        description:
          "Enjoy a free day to discover the majestic scenery of the Italian Lake District! The group can take a half day tour of Lake Como, an upscale resort region which is surrounded by snow-capped Alps and luscious greenery, or, discover a hidden gem with a half day tour of Lake Iseo and its lovely villages. Alternatively, the group can visit Lake Garda and admire its diverse landscapes with a tour or boat cruise. A comfort stop in Sirmione is highly recommended to see its imposing medieval castle which overlooks Lake Garda. Lake Garda and Lake Iseo are also great spots for water sports. Why not end the day with dinner at a restaurant within the Lake District?",
        destination: "Italian Lake District",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/yvn0YS9jvODtzUHEzYjuz/47cad5dec381b3b4ff57a1d4df3f8fdb/day4-varenna-town-in-como-lake-district-italian-traditional-lake-village-italy-europe.jpg?fit=fill&w=350",
      },
      {
        description:
          "Hop aboard the coach again and head to Venice! The group can enjoy a last stop at Lake Garda or make a stop in Verona. Why not take this opportunity to explore this romantic UNESCO World Heritage city known as the setting for Shakespeare’s Romeo and Juliet? A guided tour of the Verona Arena, renowned for its large-scale operas, is highly recommended. Later, arrive in Italy’s romantic floating city, Venice! The best way to get to know this city that has captivated artists and filmmakers for generations is with an orientation tour or gondola ride along its iconic canals. The group can taste Venetian cuisine with dinner in the city or in the Mestre neighbourhood.",
        destination: "Venice",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/1aWspl5JEYSdyvg1TMmy0z/5c5cde42b0a497fc7938a7657eb06dc5/day5-canal-in-venice-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today is free to explore Venice, the “City of Canals”. Group Tour Shop highly recommends a lagoon tour which will showcase Venice’s magical islands of Murano and Burano, truly a highlight of Venice travel! Alternatively, the group can learn more about Venice’s fascinating history and culture on a guided tour of the city’s many churches and museums. Why not get to know the city even better with a local guide? Another great way to spend the day is with a lace making or glass blowing demonstration to discover how local Venetian crafts are made. Adventurous travellers can enjoy a Venice dragon boat experience! The group is free to personalise this day to perfection.",
        destination: "Venice",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4d7m3QKoZ8PHD1Du76yhed/4b39e16d86b187a054a31b086db969a3/day6-view-of-the-colorful-venetian-houses-with-some-visitors-walking-by-in-venice-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Today’s scenic drive takes the group through the rolling hills, vineyards and medieval hilltop towns of Tuscany! Stops and tours can be enjoyed in Bologna, historic capital of the Emilia-Romagna region, Modena - where a balsamic vinegar tasting can be enjoyed, or in the lovely university town of Padova. A visit to Florence, Tuscany’s capital city, is one of the best ways to spend this day. Celebrated for its important Renaissance art and architecture, Florence is certainly one of the best places to visit in Italy. The group can explore this vibrant city on an orientation tour or visit the Uffizi or Accademia Galleries to admire artistic masterpieces. Choose to end the day with a dinner to sample local Tuscan cuisine!",
        destination: "Tuscany",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6P30HOnkzjeO9k5pZTfrdS/89f5de327dec7d981f387a8cabb55a94/day7-italian-dinner-table-with-homemade-antipasti-cheese-pienza-tuscany-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "It’s another beautiful day in Italy’s Tuscany region! As a renowned wine region, wine tasting experiences are a must when in Tuscany. The group can enjoy wine tastings in San Gimignano or Siena, both of which are magnificent hilltop towns which boast amazing medieval architecture. Alternatively, a wine, pizza and gelato tour is available in Florence! Today also offers an opportunity to tour the city of Pisa and see its iconic Leaning Tower! Another fabulous day trip is available to Cinque Terre, a string of picturesque seaside villages along the rugged Italian Riviera coastline. The group can enjoy a guided tour, lunch or dinner in this spectacular region.",
        destination: "Tuscany",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/6f1Gl35YFnhZoU1UyuQKO8/46221a45c7c16f64fc0419702a6b817b/day8-summer-landscape-tuscany-italy-europe.jpg?fit=fill&w=350",
      },
      {
        description:
          "The tour leaves Tuscany this morning and heads towards Rome, Italy’s capital city! En route, there are options to enjoy Florence tours as well as orientation tours in Siena, San Gimignano and the hilltop towns of Orvieto and Montepulciano. The rest of the day will be spent in Bella Roma! The best way to explore this ancient city is on a walking tour. Wander through Rome and discover top sights such as the Pantheon, the Colosseum, the Roman Forum, the Spanish Steps and much more. The group can discover what makes Rome such a popular foodie city with a food tour or lunch or dinner at a local restaurant.",
        destination: "Rome",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5ws0nrFZnMLttJkgxtM5L0/b0a56065caf0715f8c1f975578e99998/day9-roman-ruins-in-rome-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Get ready for another day of exciting Rome tours! This free day offers the group more opportunities to discover the best places to visit in Rome. The group can also enjoy a visit to the Vatican City today. The world’s smallest country is known for being the Pope’s official residence and houses artistic wonders in the Vatican Museums and Sistine Chapel. There is also an option to combine this tour with a trip to Castel Gandolfo. Situated on the edge of a beautiful volcanic lake, Castel Gandolfo is the Pope’s summer residence. One of the best day trips from Rome is to Tivoli. The group can embark on a half day tour of Tivoli’s awe-inspiring gardens and temples.",
        destination: "Rome",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7Aw2weklY32aVx82xlDfnO/9e4947417ea4875ba8e265f7f5488d64/day10-saint-peters-square-in-vatican-and-aerial-view-of-rome-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Say ciao to Rome and drive south towards Sorrento today! The group will pass through, and can stop in, Cassino, site of the battle of Montecassino. Then, drive through Naples and marvel at the legendary Mount Vesuvius! A guided tour is available in Pompeii should the group wish to learn more about how this city was destroyed by the volcanic eruption nearly two thousand years ago. Later, arrive in Sorrento, a breathtaking coastal town which boasts panoramic views of the Bay of Naples! The group can explore Sorrento on a guided tour. In the evening, why not enjoy dinner at a local restaurant? End the meal with a shot of limoncello, a lemon liqueur which the region is famous for!",
        destination: "Sorrento",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3elkNv7nbICHqaKMHB1EDz/0f1fc6d0f63189161c83555d28bf697d/day11-street-scene-with-shops-and-tourists-in-sorrento-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Experience the natural beauty and laid back lifestyle of the Sorrento Peninsula on this free day! Wander around the historic old town, people watch in the Piazza Tasso or simply take in the stunning harbour views. A day trip to Capri could also be added to today’s itinerary. Capri is a glamorous island frequented by the rich and famous and loved for its marvelous natural surroundings and world-class cuisine and shopping. The group can taste fresh, local cuisine such as authentic Caprese salad and Torta Caprese, a rich yet light chocolate almond tart, with a lunch or dinner in Capri. Alternatively, the group can join a scenic tour of the colourful Amalfi Coast.",
        destination: "Sorrento",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/ajU6SPC2BkVku8ER9DSXW/e19426bc2fed69bf5a199a58790244ee/day12-aerial-view-of-sorrento-city-amalfi-coast-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "Hit the road again and travel towards Alberobello! Along the way, the group can visit Positano, a cliffside village on the Amalfi Coast, the port city of Salerno, known for its delicious cuisine, and the fascinating ancient city of Matera, known for its cave dwellings which house shops, cafés and hotels. The tour will then arrive in the Puglia region which offers a visit to the city of Bari and Locorotondo, a hilltop town known for its sparkling white wine. Later, arrive in Alberobello, a UNESCO World Heritage Site famous for its unique “trulli” houses! The group can get to know this lovely town with a local guide or discover local cuisine with a market tour and cooking class!",
        destination: "Alberobello",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3M8uDffVRTUd8EVPV7TInN/485f42e5429ad4aa6337736802e1b4a0/day13-people-in-holiday-visiting-the-traditional-trulli-houses-in-alberonello-village-in-summer-holiday-alberobello-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "As one of Puglia’s most popular attractions, Alberobello offers plenty to be explored on this free day! Wander around this charming town and admire its top landmarks such as the 18th century Trullo Sovrano heritage museum, the Romanesque Church of Sant’Antonio and Casa D'amore, a 1797 home. Wanting to purchase souvenirs? Alberobello’s artisans craft exceptional textiles such as hand woven linens. Today also offers day trips to the whitewashed, and architecturally impressive, towns of Ostuni and Martina Franca or the nearby city of Lecce, often referred to as the “Florence of the South” due to its historic buildings. Alternatively, visit the town of Otranto and see its 15th century Aragonese Castle and 11th century Otranto Cathedral!",
        destination: "Alberobello",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5KYiLPycUPQzoEOwppw6z9/94f4f389db13587821c29bbddf187adb/day14-alberobellos-trulli-buildings-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "The tour makes its way to its final destination today, Naples! En route, the group can visit Caserta, known for its Baroque palace, the city of Trani, which has a fascinating Jewish history, or Grotte di Castellana, an otherworldly cave system! Then, arrive in Naples, an intriguing city which contains centuries of important art and architecture. A guided tour can be taken to see some of the top sights in Naples such as the Ovo Castle and Castel Nuovo. Naples is also the birthplace of pizza and there is nothing quite like traditional Neapolitan pizza! The group can test their culinary skills during a pizza making class today!",
        destination: "Naples",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4083dgCSkDR6wPLQGkBqrr/4b4fb6fb8413f4c048412eb402f1782c/day15-colourful-island-of-procida-naples-italy.jpg?fit=fill&w=350",
      },
      {
        description:
          "After 16 days of Italy travel highlights, the tour comes to an end today. If time allows, the group can still enjoy Naples tours and Pompeii tours to make this last day especially memorable. Airport transfers can be arranged for a smooth departure. A coach transfer to Rome or a rail transfer back to Milan can also be arranged. Wherever the tour ends today, Group Tour Shop wishes you a safe trip onwards!",
        destination: "Naples",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/7ErEdBGpiMYeeHOyXpKOkx/f5c259d8addc7b237d2cca6a53032afa/day16-panoramic-scenic-view-of-naples-at-night-italy.jpg?fit=fill&w=350",
      },
    ],
    countries: ["Italy"],
  },
  "best-of-spain-and-portugal-14-days": {
    tour_name: "Best of Spain & Portugal - 14 Days",
    tour_start: "Madrid",
    tour_end: "Barcelona",
    tour_duration: "14 days",
    min_group_size: 10,
    language: "English",
    recommended_ages: "10 to 80",
    slug: "best-of-spain-and-portugal-14-days",
    summary:
      "Looking for the best of Spain & Portugal in one group trip, including history, culture, epic scenery and delicious cuisine? This is it! Personalize this two-week escorted Madrid to Barcelona tour with unmissable daily add-on activities.",
    summary_image:
      "https://images.ctfassets.net/hcch9ko3ppsh/474nQ4YsvUw1QZoRkNGry4/dc078caab2851f5e3d60970023a40474/GTSSMC2-day11-view-of-peniscola-valencia-spain.jpg?fit=fill&w=500&h=500",
    images: [
      "https://images.ctfassets.net/hcch9ko3ppsh/3KMR8t4Edj7NkFcmdo5iph/ad9e822eac0df3a8658530851c071980/ronda-spain-at-puente-nuevo-bridge-at-sunset.jpg?fit=crop&h=750&w=1950&f=center",
      "https://images.ctfassets.net/hcch9ko3ppsh/3h4Jet36zka8DuO7oAYR9/f4be6137e41b86afa1d60255605ccb6f/historic-city-of-avila-castilla-y-leon-spain.jpg?fit=crop&h=750&w=1950&f=bottom",
    ],
    reasons: [
      "Escorted by Tour Director for duration of tour",
      "Customisable itineraries with daily add-on activities",
      "Group-focused itineraries crafted by industry experts",
      "20 years of Operational Excellence",
      "Protected payments and financial peace of mind",
      "Choose your own departure date",
    ],
    features: [
      "Tour Director for the duration of the trip",
      "Transport by private coach between destinations",
      "Two night stay in Madrid; capital of Spain",
      "Two night stay in Lisbon; capital of Portugal",
      "Two night stay in Seville; an enchanting Spanish City",
      "Two night stay in Barcelona; capital of Catalonia",
      "One night stays in Granada, Valencia, Porto, Zamora and Santiago de Compostela",
      "Scenic drive along Portugal’s Algarve Coast",
      "Travel through the heart of Andalusia in Spain",
      "Drive along Spain’s gorgeous Mediterranean coastline",
      "Full days to explore Madrid, Lisbon, Seville and Barcelona",
    ],
    countries: ["Spain", "Portugal"],
    itinerary: [
      {
        destination: "Madrid",
        description:
          "This exciting two-week Europe group tour begins today in Madrid - Spain’s capital city. Arrive and travel to the hotel in Madrid; to make the trip even more convenient, opt-in for an airport transfer. A Group Tour Shop Tour Director will meet the group at the hotel and provide a brief on what to look forward to over the next 14 days. Depending on the time of arrival, head out and explore Madrid. This city is famous for its architecture, cuisine and artistic flair! Get personalized tips on Madrid travel must-sees from the Tour Director!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/16hGq1p2v2QdNp8ZMtqbDp/c60958543db0c41bf59c130bdbebbf55/day1-skyline-of-madrid-spain-during-sunset.jpg?fit=fill&w=350",
      },
      {
        destination: "Madrid",
        description:
          "Today, the group can explore the best places to visit in Madrid! Enjoy major sites like Puerta de Alcalá, Puerta del Sol, Plaza de Cibeles and the Bernabéu Stadium - home to the Real Madrid football club! Admire Plaza Mayor, snap photos of the iconic “bear and strawberry tree statue” and taste local gourmet food at San Miguel market. The best way to explore it all is on a tour with a local guide. Experience local flavours with a Madrid food tour or dinner at a local spot! Alternatively, venture out of the city on optional trips to Segovia, Ávila and Toledo, or visit El Escorial to see the world’s largest Renaissance building and the historical residence of the King of Spain.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/5TvWYo0i63rJfpgMkvDmeo/474782e5959088764c8e55e01f9542b5/day5-madrid-spain-at-puerta-de-alcala-gate.jpg?fit=fill&w=350",
      },
      {
        destination: "Madrid - Zamora",
        description:
          "Enjoy the morning in Madrid before the group tour continues to Zamora today. Travel through the heart of Spain’s interior and admire the scenic views along the way. There are a number of great stops available en route including visits to Salamanca, Medina del Campo and Tordesillas. Arrive in Zamora, located in the beautiful Castilla Leon region. Zamora is home to the most Romanesque churches in all of Europe. The group can explore the city on their own or take in the sights on a guided city tour and top it off with a visit to Zamora Castle!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4DBFMyT3oGDb6yM5xWsOR/0ed1b7c6b3f22fa1df3c8ec0573378ce/day3-san-salvador-cathedral-of-zamora-spain.jpg?fit=fill&w=350",
      },
      {
        destination: "Zamora - Santiago de Compostela",
        description:
          "Get ready for more historic Spanish towns and scenic views as the tour continues today! As the group travels through the western reaches of Spain, why not make a stop at the ancient Tower of Hercules? Estimated to have been built in the 2nd century, this is the world's oldest Roman lighthouse that is still in use today. Later, arrive in Santiago de Compostela. This famous destination is the culmination of the Camino de Santiago pilgrimage route. In town, the group can explore the quaint cobbled streets on a walking tour and admire the magnificent Gothic architecture!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/62OkDkykolY8XGymBGWWc3/78bd7ada41db79f078d6c716ee3d1854/day4-great-cathedral-of-santiago-de-compostela.jpg?fit=fill&w=350",
      },
      {
        destination: "Santiago de Compostela - Porto",
        description:
          "A new country is on the agenda today - Portugal awaits! Bid farewell to Spain’s Santiago de Compostela and cross the border into Portugal. Travel along the Portuguese coast with the option to add on a stop in the picturesque Viana do Castelo. Next, the group will arrive in Porto, Portugal’s vibrant second city! Porto is home to a number of top sights including Dom Luis I Bridge, Porto Cathedral, Palácio da Bolsa, the Church of Sao Francisco and the popular Lello Bookstore. The best way to discover the city's top spots is on a guided walking tour while the best way to complete the day is with some port wine tastings and a cruise along the Douro River!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2xgvvcwzPBKlhll6LCKm9o/00a9714b659f833f7c66df859f75f485/day5-porto-portugal-old-town-on-the-douro-river.jpg?fit=fill&w=350",
      },
      {
        destination: "Porto - Lisbon",
        description:
          "Enjoy the morning in Porto before the tour continues to Lisbon later today. Take in the changing landscapes and choose to make a stopover in several quaint Portuguese towns including Coimbra, Obidos and Nazare along the way. Arrive in Lisbon and look forward to exploring the highlights and hidden gems of Portugal’s capital city! Lisbon is a bustling hub home to historic buildings, impressive monuments, colorful neighborhoods and lively pracas. It’s the home of Fado music, delicious Pasteis de Nata, and the iconic Tram 28. The best way to explore all that Lisbon has to offer is with a local guide. Finish off today with dinner at the LX Factory - a historic, arty converted industrial complex - or a captivating Fado show and dinner!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3ddn4mEn5kr24kWwYDEYiJ/e1a672ab94aa81a1e883a0905c0c220e/day6-lisbon-portugal-skyline-at-sao-jorge-castle.jpg?fit=fill&w=350",
      },
      {
        destination: "Lisbon",
        description:
          "The group will enjoy a full day to experience Lisbon today. Visit must-see sights including the Tower of Belem, the Monument to the Discoveries, Jerónimos Monastery, São Jorge Castle and Praça do Comércio at the centre of the city. Walk along the riverfront and absorb the local vibe, browse the stalls at the Time Out Market or see the city from a unique vantage point on a tram ride. A guided day trip to Sintra is highly recommended! Sintra is a picturesque town located near Lisbon and was once the summer residence of the Portuguese royal family. Sintra is full of color and romance! Explore the vibrant palace and whimsical manors while enjoying the scenic beauty of the area.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2hUjftxTBrCKR4OCYnmzec/0d8c31172965505b327d3196da2a7a1d/day7-panoramic-view-of-lisbon-portugal.jpg?fit=fill&w=350",
      },
      {
        destination: "Lisbon - Seville",
        description:
          "Spain is calling once again as the tour leaves Portugal and travels back across the border, towards Seville. The group can decide how to spend the last few hours in Lisbon before hitting the road again. En route, appreciate the Algarve views, and decide on a selection of comfort stops along the way. In Portugal, choose to stop in Evora to see the Temple of Diana, Sagres to admire the dramatic scenery of Carvoeiro, Loule, Tavira and Albufeira on the Algarve coast. In Spain, stopover in historic Huelva or Merida to see ancient Roman ruins. Later, arrive in Seville which is the capital of Andalusia, famous for its rich history, authentic culture and impressive architecture!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/4tpSP2ZAXjecLc73tNGDk5/3a7dac010c57aede275b169c76e5c434/day8-seville-spain-cityscape-with-plaza-de-espana-buildings.jpg?fit=fill&w=350",
      },
      {
        destination: "Seville",
        description:
          "The delights of Seville are waiting to be explored today with a number of excellent add-on activities available! Seville enchants travelers from across the globe who visit to experience the city’s grandeur; from the world’s largest Gothic Cathedral and Plaza de España to Mudéjar palaces and twisting medieval streets. Discover it all - stroll through the neighborhoods, sit down at a local tapas restaurant or spend the night flamenco dancing! On this free day, embark on a range of excursions, such as a guided tour of the Seville Alcazar and Cathedral, the Seville Museum of Fine Arts or the Naval Museum and Real Maestranza Bullring. Alternatively, enjoy a Gibraltar day tour or visit a new country on an exciting day trip to Morocco!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2VStflajkA0vMJHjYBooQh/d2e820f16d8d3cab64bd78c301b16d94/day9-beautiful-plaza-de-espana-sevilla-spain.jpg?fit=fill&w=350",
      },
      {
        destination: "Seville - Granada",
        description:
          "Hop aboard the coach to discover more of Spain today! Head for Granada and travel through the beautiful heart of Andalusia. Why not visit a few beautiful old towns along the way? See Osuna, Cordoba or Ronda en route. Ronda is the birthplace of bullfighting, is home to the dramatic El Tajo gorge and New Bridge, and was even a favorite travel destination of Ernest Hemingway! Later, arrive in Granada - a city where the historic Moorish influence is palpable in the streets, local culture and architecture! Depending on arrival time, visit the famous Alhambra palace and fortress on a guided tour, enjoy a sunset walking tour and perhaps indulge in a Granada wine experience and food tour!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3Kn5iapzaivvbNrmnPX2Bx/dde1924c8f52e44f53f5277ccbf78e6e/day10-alhambra-fortress-and-albaicin-quarter-granada-spain.jpg?fit=fill&w=350",
      },
      {
        destination: "Granada - Valencia",
        description:
          "This morning, the group can choose to explore more of Granada on a locally guided tour before hitting the road towards Valencia. Swap Spain's Andalusian interior landscapes for a drive towards the coast. Choose to make stopovers in Murcia - a university famous for its Baroque churches, its local produce and folklore - or Elche which is famous for its vast palm grove. Arrive in Valencia, a gorgeous and historic coastal city which is the home of paella! The group can embark on a driving tour of the city or an Old Town Valencia tour complete with wine and tapas enjoyed in an 11th-century historic monument.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/2twGNcocF7POuXzBTo6jzv/a9f976f847272089e117010d1eec9212/day11-view-of-peniscola-valencia-spain.jpg?fit=fill&w=350",
      },
      {
        destination: "Valencia - Barcelona",
        description:
          "Before leaving Valencia, the group should be sure to experience the City of Arts and Science, tour the Central Market and enjoy a paella cooking class, or visit the Beach and Marina. Next, buckle up for the last leg of the tour. Drive along the Spanish Mediterranean coast and head for Barcelona. Make stops in famous towns of the Costa del Sol en route. Arrive in the cosmopolitan capital of Catalonia and get ready to explore! Barcelona boasts breathtaking architecture, mouthwatering cuisine and vibrant nightlife. Select a variety of fantastic add-ons that offer the perfect introduction to the city such as a locally guided walking and driving tour, a tapas experience and a lively flamenco show and dinner!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/12OOBSUvJl8Seys3o9ao1D/dbaae3b92a4e0c25680157df9ca2d506/day12-square-portal-de-la-pau-and-port-vell-marina-and-columbus-monument-in-barcelona.jpg?fit=fill&w=350",
      },
      {
        destination: "Barcelona",
        description:
          "The group can make the most of a free day in Barcelona today with a variety of add-on excursions! Art and architecture lovers can explore Antoni Gaudí’s famous creations on guided tours to La Sagrada Família and Park Güell which are two fantastic places to visit in Barcelona or embark on a Barcelona Modernist architecture tour. Football enthusiasts will be thrilled by a Barcelona FC stadium tour while foodies will be delighted by a food and tapas tour of the city. Alternatively, head north of Barcelona on a half-day trip to Montserrat. Here, discover the spellbinding monastery located high up on the mountainside and view the statue of the Black Madonna.",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/3CzbBpHlhMPQKIU7sMN7b/0c81e0d4331380360f1a9a8441b24ca5/day14-ceramic-mosaic-park-guell-barcelona-spain.jpg?fit=fill&w=350",
      },
      {
        destination: "End of tour in Barcelona/Madrid",
        description:
          "Enjoy the last of Barcelona travel highlights this morning before the tour officially ends. After two weeks, you will have experienced the highlights of Spain and Portugal travel experiences! Say farewell in Barcelona or choose to transfer cities and end the trip in Madrid as an optional add-on. Safe onward travels!",
        image:
          "https://images.ctfassets.net/hcch9ko3ppsh/298qn5JvnjLxVmAMEmJMPU/2df448b79640fad207f2ed9404bc8907/day14-aerial-panorama-view-of-barcelona-city-skyline.jpg?fit=fill&w=350",
      },
    ],
  },
};

export async function insertDummyData() {
  try {
    // if (isUpdate) {
    //   await update(ref(database, "tours"), data);
    // } else {
    await set(ref(database, "/tours"), tours);
    // }
    console.log("Data saved successfully");
  } catch (error) {
    console.log("Fail to save data");
  }
}
