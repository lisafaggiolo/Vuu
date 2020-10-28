# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require('faker')

5.times do
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: Faker::Internet.password)
end

Province.create(name: "Newfoundland and Labrador", average_rent: 1002, shelter_cost_to_income_ratio: 82, age_group_vis_min: 3, description: "The most easterly province in Canada, Newfoundland, and Labrador sits on the Atlantic and is made up of the island of Newfoundland and the mainland Labrador (hence the name).")
Province.create(name: "Prince Edward Island", average_rent: 818, shelter_cost_to_income_ratio: 79, age_group_vis_min: 6, description: "The last of the three Maritime provinces, Prince Edward Island is actually made up of several islands (232 to be exact, including the main island), the largest having the same name.")
Province.create(name: "Nova Scotia", average_rent: 909, shelter_cost_to_income_ratio: 77, age_group_vis_min: 7, description: "Although the second smallest province, Nova Scotia is the second most densely populated in the country. It is one of the three Maritime provinces and part of what forms Atlantic Canada.")
Province.create(name: "New Brunswick", average_rent: 741, shelter_cost_to_income_ratio: 81, age_group_vis_min: 4, description: "New Brunswick is one of Canada's three Maritime provinces, which form a tiny water-bound cluster on the east coast, just below Quebec and bordering the state of Maine in the U.S.")
Province.create(name: "Quebec", average_rent: 775, shelter_cost_to_income_ratio: 78, age_group_vis_min: 15, description: "Quebec is the second most populous Canadian province and known primarily for its French-speaking population, culture, and heritage. It is the country's largest province by land area. Most residents live along and near the St. Lawrence River, especially in and between Montreal and Quebec City, the two major cities.")
Province.create(name: "Ontario", average_rent: 1109, shelter_cost_to_income_ratio: 71, age_group_vis_min: 32, description: "Ontario is Canada's most populous province, by a long shot. It is also home to the federal capital of Ottawa and the unofficial financial capital of Toronto. The majority of Ontario residents live in the southern part of the province near Toronto, along with Ottawa, Niagara Falls, and Niagara-on-the-Lake.")
Province.create(name: "Manitoba", average_rent: 891, shelter_cost_to_income_ratio: 76, age_group_vis_min: 21, description: "Manitoba is the most easterly prairie province and longitudinal center of Canada. Like Saskatchewan, a majority of the population lives in the southern region. Manitoba's north comprises Canadian Shield rock and arctic tundra and is largely uninhabited. For more than 6,000 years, the province has been home to Aboriginal and Métis people, who continue to exert a great cultural influence.")
Province.create(name: "Saskatchewan", average_rent: 1021, shelter_cost_to_income_ratio: 73 , age_group_vis_min: 14, description: "Saskatchewan is the middle prairie province, landlocked between the other two, Alberta and Manitoba. The majority of Saskatchewan's population live in the southern half of the province, especially in Saskatoon and Regina. The province's major industry is agriculture, followed by mining, oil, and natural gas production.")
Province.create(name: "Alberta", average_rent: 1279, shelter_cost_to_income_ratio: 77, age_group_vis_min: 26, description: "Alberta is one of Canada's three prairie provinces. It shares the Canadian Rocky Mountain range with its western B.C. neighbor and is therefore famous as a ski and hiking destination. Alberta is the primary supply and service hub for Canada's crude oil industry, Athabasca oil sands, and other northern resource industries.")
Province.create(name: "British Columbia", average_rent: 1149, shelter_cost_to_income_ratio: 70, age_group_vis_min: 33, description: "British Columbia is the country's most western province. Bordered by the Pacific Ocean, B.C., as it is more commonly known, has some of the most temperate locations in the country. With coastal islands and a mountainous interior, B.C.'s diverse geography draws adventure seekers from around the world including skiers, kayakers, and mountain bikers.")
Province.create(name: "Yukon", average_rent: 1038, shelter_cost_to_income_ratio: 78, age_group_vis_min: 10, description: "The smallest of the three territories, Yukon (also known as the Yukon) is the most westerly territory, bordering Alaska.")
Province.create(name: "Northwest Territories", average_rent: 1190, shelter_cost_to_income_ratio: 86, age_group_vis_min: 11, description: "Northwest Territories is the most populous of the three and borders the other two territories in—as you would expect—the northwest part of the country.")
Province.create(name: "Nunavut", average_rent: 736, shelter_cost_to_income_ratio: 94, age_group_vis_min: 4, description: "Nunavut is the largest and most northern territory of Canada. It is the newest territory as well, having been separated from Northwest Territories in 1999.")
 
City.create(name: "Okanagan Valley", province_id: 10, population: 362258, 
            description: "Aside from wine tasting, festivals, and farmers-market hopping, popular pursuits include cycling the Kettle Valley Rail Trail and boating on Okanagan Lake. Sunny and hot with fragrant sage, lavender fields, and vineyards spanning the hillsides, the long valley is filled with an expansive lake.  the Okanagan Valley has something for everyone: hoodoos, orchards, vineyards, mountains, valleys, lakes, highlands, ski slopes, and trails. This is truly one of the most desirable locales in British Columbia for year-round outdoor fun.", 
            location_type: "town", view_type: "country", time_zone: "PDT")

City.create(name: "Vancouver", province_id: 10, population: 85935, 
            description: "As British Columbia’s largest city, Vancouver is a haven for outdoor enthusiasts and cosmopolitan adventurers alike. Framed by the Pacific Ocean and Coast Mountains, Vancouver’s meandering oceanside pathways are the perfect way to explore the city. Close to 30 kilometres of uninterrupted waterfront path surround Vancouver’s favourite neighbourhoods, including the seawall around Stanley Park.", 
            location_type: "city-large", view_type: ["ocean", "mountain", "urban"], time_zone: "PDT")

City.create(name: "Gaspe Peninsula", province_id: 5, population: 15163, 
            description: "“Stunning coastal scenery.” “Breathtaking.” “A trip of a lifetime.” That’s how visitors describe Quebec’s Gaspé Peninsula, a spot home to an unlikely amount of varied, untamed landscapes packed onto one 155-mile-long peninsula jutting into the Gulf of St. Lawrence. A National Geographic top travel destination a few years back, it's a place of stirring natural beauty and serenity, rugged seascapes, gorgeous beaches, and small-town charm. Lucky for us, it’s still largely undiscovered.", 
            location_type: ["town", "village"], view_type: "coast", time_zone: "EDT")

City.create(name: "Magdalen Islands", province_id: 5, population: 12010, 
            description: "Located in the middle of the Gulf of St. Lawrence, this green archipelago surrounded by white-sand beaches and red cliffs exerts a magnetic attraction on visitors. Renowned for their warm hospitality, the Islanders are also talented chefs, artists and artisans. During your stay, enjoy exquisite seafood, wind sports, sea excursions, visits to local art galleries and studios, hikes and more.", 
            location_type: ["town", "village"], view_type: "coast", time_zone: "ADT")

City.create(name: "Wasaga Beach", province_id: 6, population: 20675, 
            description: "Wasaga Beach is not only the longest freshwater beach in the world with 14 km of safe, sandy shore, but the sunsets there are breathtaking. Wasaga Beach is the first provincial park in Canada to be awarded the “Blue Flag” designation for its banks management efforts under the international environmental standards. For more information, visit www.BlueFlag.ca", 
            location_type: "town", view_type: "lake", time_zone: "EDT")

City.create(name: "Strathcona County", province_id: 9, population: 98044, 
            description: "Strathcona County is perfect for those who enjoy the fine balance of a rural and an urban territory. For this reason, the area of Strathcona County is a specialized municipality as it does a fine job of supporting the needs of those living in the rural area of the city as well as those who live in the urban portion of the city. In a city where the crime rate and the unemployment rate is low, there is no doubt that it is one of the best places to live in Alberta, and Canada as well.", 
            location_type: "town", view_type: "rural", time_zone: "MDT")

City.create(name: "Jasper", province_id: 9, population: 4590,  
            description: "Jasper is an intimate community that originated as a railway town that just happens to be in the middle of some of the most gorgeous protected wilderness in the world.", 
            location_type: "city-small", view_type: ["mountain", "lake"], time_zone: "MDT")

City.create(name: "Banff", province_id: 9, population: 7847, 
            description: "Banff is a resort town and one of Canada's most popular tourist destinations. Known for its mountainous surroundings and hot springs, it is a destination for outdoor sports and features extensive hiking, biking, scrambling and skiing destinations within the area.", 
            location_type: "town", view_type: ["mountain", "lake"], time_zone: "MDT")

City.create(name: "Halifax", province_id: 3, population: 431479, 
            description: "Compared to conurbations such as Vancouver and Toronto, Halifax barely qualifies as a city, but this seaside town punches well above its size: it's dotted with red-brick heritage buildings, public parks and a landmark citadel, blessed with some first-rate museums, and home to a truly epic 4km seafront boardwalk.", 
            location_type: "city-small", view_type: "coast", time_zone: "ADT")

City.create(name: "Charlottetown", province_id: 2, population: 36094, 
            description: "Charlottetown might be a small city, but it’s bursting with big energy and infectious island vibes. It’s got all the charm and hospitality PEI is famous for, plus culinary experiences and an arts and culture scene that take visitors by surprise—in the best way possible. Soak in the romance and nostalgia of the postcard-perfect streetscapes. Wander along a boardwalk where lobster boats and sailboats cozy up. Stay in a B&B that will give you serious Anne energy. Sound good? It’s time to discover Charlottetown.", 
            location_type: "city-small", view_type: "coast", time_zone: "ADT")

City.create(name: "St-Johns", province_id: 1, population: 113948,
            description: "St. John's, Newfoundland Labrador's capital, is the perfect combination of big-city luxury and traditional small-town charm. It is one of the oldest and most easterly cities in North America, and has become a rare destination full of character and charisma, with a contemporary, sophisticated edge.", 
            location_type: "town", view_type: "coast", time_zone: "NDT")

City.create(name: "Moncton", province_id: 4, population: 85198, 
            description: "New Brunswick's transportation hub is vibrant Moncton, one of the country's fastest growing cities and a community steeped in history. Its storied past is brought to life in its many cultural institutions and museums, from the Acadian Museum to Le Centre Culturel Aberdeen. The city's largest green space, Centennial Park, includes many attractions and activities, from hiking and skiing trails to an artificial beach to an aerial treetop obstacle course and zip line.", 
            location_type: "city-small", view_type: "urban", time_zone: "ADT")

City.create(name: "Whitehorse", province_id: 11, population: 25085,
            description: "Few cities in the world offer such rich access to pristine wilderness, yet still provide all the amenities of a modern metropolis. Hugged by the banks of the Yukon River and surrounded by the peaks of Grey Mountain, Haeckel Hill, and Golden Horn Mountain, Whitehorse is the Yukon’s most cosmopolitan community, but its easy access to trails, rivers, lakes and mountains are what make this city memorable.", 
            location_type: "city-small", view_type: ["forest", "mountain"], time_zone: "PDT")

City.create(name: "Winnepeg", province_id: 7, population: 749534, 
            description: "A cosmopolitan city known as the 'cultural cradle of Canada', Winnipeg is family friendly with plenty of charm. It boasts a dazzling arts, theatre and indie music scene, as well as lip-smacking dining options to tantalize every taste bud. Experience nine acres of shopping and interactive fun at the Forks Market or explore Winnipeg’s diverse neighborhoods like the historic French Quarter and Exchange District or the boho chic Osborne Village.", 
            location_type: "city-small", view_type: "urban", time_zone: "CDT")

City.create(name: "Iqaluit", province_id: 13, population: 7740, 
            description: "Iqaluit is the capital and largest community in Canada’s newest territory, Nunavut. It is also the territory's only city. Iqaluit is situated at the northeast head of Frobisher Bay, on southern Baffin Island. In an area long used by the Inuit and their ancestors, it is surrounded by hills close to the Sylvia Grinnell River and looks across the bay to the mountains of the Meta Incognita Peninsula.", 
            location_type: "city-small", view_type: ["coast", "mountain"], time_zone: "EDT")

City.create(name: "Massif de Charlevoix", province_id: 5, population: 29562, 
            description: "Mentioning Charlevoix to Quebeckers evokes a heartfelt sigh. No wonder: this region is renowned for its salty breezes (coming straight from “la mer”, as the tidal Saint Lawrence river is known), stunning vistas, artsy Baie-Saint-Paul and gourmet food trails. Getting here from Québec City is easy on Le Train de Massif from Montmorency Falls. In winter, Le Massif mountain’s 770 metres offers the greatest vertical drop for downhill skiing east of the Rocky Mountains.", 
            location_type: "city-small", view_type: ["coast", "mountain", "forest"], time_zone: "EDT")
            
City.create(name: "Quebec City", province_id: 5, population: 542298, 
            description: "Dubbed the “Paris of North America”, 400-year-old Québec City is the province’s capital, and a must-visit in order to capture the spirit of New France (particularly in August’s New France Festival). Stay at the “castle” – Fairmont Chateau Frontenac – an architectural symbol of the city, recognisable for its steeply pitched copper roof and imposing turrets. Stroll along Dufferin Terrace overlooking the Saint Lawrence river – Canada’s first “highway”, it led explorers, traders, missionaries and settlers into the hinterland. Being North America’s only walled city, Old Québec is a Unesco world heritage site. Investigate the Citadel, wander the Plains of Abraham where British General Wolfe defeated French General Montcalm in 1759, then choose from many restaurants featuring le terroir (regional foods).", 
            location_type: "city-small", view_type: "urban", time_zone: "EDT")

City.create(name: "Montreal", province_id: 5, population: 1780000, 
            description: "Witness a French-infused city that's in love with festivals, the arts, good food, living well and enjoying life to the hilt. Montréal is the country’s cultural juggernaut. The city, standard bearer of an entire linguistic-cultural identity – francophone Canada – simply lives for public celebration of the arts. There are some 250 theater and dance companies, more than 90 festivals and a fascinating medley of neighborhoods where artists, writers and musicians have helped cement the city’s reputation as a great arts center.", 
            location_type: "city-large", view_type: "urban", time_zone: "EDT")
            
City.create(name: "Toronto", province_id: 6, population: 2930000, 
            description: "Toronto is one of Canada's largest cities and one of its best destinations to travel to in the country, full of sights and attractions such as its countless museums and parks. With its highly iconic landmark of the CN Tower gracing its skyline, Toronto is also famous for its beautiful lake scenery with much of the city straddling and rising up against the gorgeous Lake Ontario.", 
            location_type: "city-large", view_type: "urban", time_zone: "EDT")

City.create(name: "Ottawa", province_id: 6, population: 994837, 
            description: "Ottawa is Canada’s beautiful capital city, a destination filled with national sites and historic landmarks. Home to about 1.25 million people, Ottawa is located within easy driving distance of Montreal (1h 45min), Toronto (4hrs) and the US border (45min). There are countless sites to see in the capital, and many ways to see them. Boat tours on the Rideau Canada and the Ottawa River, bus tours on land, and amphibus tours on water, biplane and helicopter tours, cycling tours and a variety of themed walking tours. In fact, many of Ottawa’s most popular attractions and experiences can be found in its surprisingly compact and walkable downtown core.", 
            location_type: "city-small", view_type: "urban", time_zone: "EDT")

City.create(name: "Victoria", province_id: 10, population: 92141, 
            description: "Victoria is a year-round tourism destination that offers a friendly, safe haven for all visitors. With a clean environment and charming ambience, it is no surprise that Victoria, BC is one of the world's favourite destinations. It’s a great place to spend a few days before or after your kayak tour of Vancouver Island, without fear of getting lost in the sprawl of a major city.", 
            location_type: "city-small", view_type: ["coast", "urban"], time_zone: "PDT")
            
City.create(name: "Tofino", province_id: 10, population: 1932, 
            description: "The surf swept community of Tofino rests in the centre of Clayoquot Sound, an expanse of islets and inlets arranged like a collection of emeralds along the west coast of Vancouver Island. The meaning of Clayoquot comes from Tla-o- quia-aht “people who are different from who they used to be”. A fitting description any traveler should expect for themselves when journeying to this wild west coast town on the edge of the world.", 
            location_type: "town", view_type: ["coast", "forest"], time_zone: "PDT")

City.create(name: "Canmore", province_id: 9, population: 13992, 
            description: "If you’re about the outdoors lifestyle and enjoy picturesque scenary, Canmore is the place you and your family want to be living. The town of Canmore is located just west of the big city of Calgary, but is also on the boundary of Banff National Park. Canada’s oldest national park offers a beautiful view of the Rocky Mountains, and some of the most gorgeous lakes in the world.", 
            location_type: "town", view_type: ["mountain", "urban", "forest"], time_zone: "MDT")

City.create(name: "Calgary", province_id: 9, population: 1336000, 
            description: "If you like the big city with all the amenities that can be offered, Calgary is a great choice for you and your family. The city of Calgary has over 1.4 million people residing within it and is the largest city the province of Alberta has to offer. As a resident in Calgary, you’ll have no problem finding activities to do with your free time. Annual events like the Calgary Stampede bring people from all over the world to the city to enjoy the rodeo, exhibition, and festival.", 
            location_type: "city-large", view_type: ["mountain", "urban"], time_zone: "MDT")
            
City.create(name: "The Thousand Islands", province_id: 6, population: 9465, 
            description: "Perhaps it starts with an inspiring sunrise on the Canadian side of the St. Lawrence Seaway or ends with a breathtaking sunset from the U.S. Maybe it includes views of storybook castles, a good fish story, a taste of craft beverages or a trip back in time. On the pristine waters or in quiet villages, there are thousands of things to see and do.", 
            location_type: "town", view_type: "lake", time_zone: "EDT")
            
City.create(name: "Niagara", province_id: 6, population: 447888, 
            description: "From wining, dining and riding the vines in Niagara-on-the-Lake and off the beaten path in Twenty Valley, to the urban cool of St. Catharines or outdoor adventures on the beach and amongst the battlefields of Niagara’s South Coast, without forgetting the iconic Niagara Falls, you will indulge in moments that are sure to inspire your senses.", 
            location_type: "city-small", view_type: ["urban", "country"], time_zone: "EDT")
            
City.create(name: "Regina", province_id: 8, population: , 
            description: "Although situated on a flat plain with few indigenous trees, Regina boasts some of western Canada's most innovative urban landscaping, with plentiful green spaces, hiking and biking paths, playgrounds, oak-lined streets and parks throughout the city. The popular Wascana Lake plays host to summer boaters and winter skating. Regina is also home to numerous cultural and educational institutions, including museums, galleries, theaters and Canada's RCMP Training Academy Grounds.", 
            location_type: "city-small", view_type: "urban", time_zone: "CST")
 
City.create(name: "Saskatoon", province_id: 8, population: , 
            description: "Named for the sweet berry that grows wild in the region, Saskatoon boasts various cultural festivals, concerts and sporting events throughout the year. Explore the trails and beaches of Beaver Creek and Cranberry Flats, cross-country ski the Meewasin Valley Trail, check out the city's many galleries and museums, and shop for bargains at Midtown Plaza.", 
            location_type: "city-small", view_type: ["urban", "lake"], time_zone: "CST")
 
City.create(name: "Moose Jaw", province_id: 8, population: , 
            description: "Moose Jaw is the fourth largest city in Saskatchewan, Canada. Lying on the Moose Jaw River in the south-central part of the province, it is situated on the Trans-Canada Highway, 77 km (48 mi) west of Regina. Residents of Moose Jaw are known as Moose Javians. The city is surrounded by the Rural Municipality of Moose Jaw No. 161.", 
            location_type: "city-small", view_type: "urban", time_zone: "CST")
 
City.create(name: "Swift Current", province_id: 8, population: 16604, 
            description: "Swift Current, also known as Speedy Creek, is the fifth largest city in the Canadian province of Saskatchewan. It is situated along the Trans Canada Highway 170 kilometres (110 mi) west from Moose Jaw, and 218 kilometres (135 mi) east from Medicine Hat, Alberta. Swift Current grew 6.8% between 2011 and 2016, ending up at 16,604 residents.[2] The city is surrounded by the Rural Municipality of Swift Current No. 137.", 
            location_type: "", view_type: "urban", time_zone: "CST")
 
City.create(name: "Prince Albert", province_id: 8, population: 35926, 
            description: "Prince Albert is the third-largest city in Saskatchewan, Canada, after Saskatoon and Regina. It is situated near the centre of the province on the banks of the North Saskatchewan River. The city is known as the 'Gateway to the North' because it is the last major centre along the route to the resources of northern Saskatchewan.", 
            location_type: "town", view_type: "river", time_zone: "CST")
            
City.create(name: "Brandon", province_id: 7, population: 48859, 
            description: "The City of Brandon was incorporated in 1882,[5] having a history rooted in the Assiniboine River fur trade as well as its role as a major junction on the Canadian Pacific Railway.[6] Known as The Wheat City, Brandon's economy is predominantly associated with agriculture;[7] however, it also has strengths in health care, manufacturing, food processing, business services, and transportation.", 
            location_type: "town", view_type: "river", time_zone: "CST")
 
City.create(name: "Portage la Prairie", province_id: 7, population: 13304, 
            description: "Portage la Prairie is approximately 75 kilometres (47 mi) west of Winnipeg, along the Trans-Canada Highway (exactly between the provincial boundaries of Saskatchewan and Ontario). The community sits on the Assiniboine River, which flooded the town persistently until a diversion channel north to Lake Manitoba (the Portage Diversion) was built to divert the flood waters. The city is surrounded by the Rural Municipality of Portage la Prairie.", 
            location_type: "town", view_type: "river", time_zone: "CST")
 
City.create(name: "Dauphin", province_id: 7, population: 8457, 
            description: "Dauphin is a city in Manitoba, Canada, with a population of 8,457 as of the 2016 Canadian Census, with an additional 2,388 living in the surrounding Rural Municipality of Dauphin, for a total of 10,845 in the RM and City combined.[2] Dauphin is Manitoba's 9th largest community and serves as a hub to the province's Parkland Region.", 
            location_type: "town", view_type: "", time_zone: "CST")
 
City.create(name: "Gimli", province_id: 7, population: 2246, 
            description: "Gimli is an unincorporated community in the Rural Municipality of Gimli on the west side of Lake Winnipeg in Manitoba. The community's first European settlers were Icelanders who were part of the New Iceland settlement in Manitoba. The community maintains a strong connection to Iceland and Icelandic culture today, including the annual Icelandic Festival.", 
            location_type: "town", view_type: "", time_zone: "CST")
 
City.create(name: "Fredericton", province_id: 4, population: 58220, 
            description: "Spread along both sides of the majestic St. John River, Fredericton combines the coziness of a small town with the world-class institutions of a city much larger than this humble capital. Tree-lined streets and suburban neighborhoods of Victorian-era homes live harmoniously alongside three universities, countless historic sites, museums, riverfront trails and restaurants featuring local and international cuisines. Fredericton also boasts a number of world-renowned festivals.", 
            location_type: "town", view_type: "river", time_zone: "AST")
            
City.create(name: "Saint John", province_id: 4, population: 67575, 
            description: "Saint John, New Brunswick, is the only city on the shore of the Bay of Fundy, home to the world’s highest tides. Canada’s oldest incorporated city, Saint John is a popular tourist destination known for its historic uptown streetscapes, cultural attractions and natural wonders. Popular sights include the Reversing Rapids, where the Bay collides with the St. John River, the City Market with local vendors and artisans, the New Brunswick Museum and the trails and beauty of Rockwood Park.", 
            location_type: "town", view_type: "river", time_zone: "AST")
            
City.create(name: "Saint Andrews", province_id: 4, population: 1786, 
            description: "Saint Andrews (2016 population: 1,786)[1] is a town in Charlotte County, New Brunswick, Canada. The historic town is a national historic site of Canada, bearing many characteristics of a typical 18th century British colonial settlement, including the original grid layout with its market square, and the classical architecture.", 
            location_type: "town", view_type: "coast", time_zone: "AST")
            
City.create(name: "Grand Falls", province_id: 4, population: 5326, 
            description: "Grand Falls (French: Grand-Sault) is a town located in Victoria County, New Brunswick, Canada. Grand Falls is situated on the Saint John River. The town derives its name from a waterfall created by a series of rock ledges over which the river drops 23 metres (75 ft). Its population was 5,326 at the 2016 census.", 
            location_type: "town", view_type: "", time_zone: "AST")
            
City.create(name: "Lunenburg", province_id: 3, population: 2263, 
            description: "Established in 1753, this historic Nova Scotia coastal community is now a UNESCO World Heritage Site. Wander among its colourful galleries and shops, arranged on a tidy grid of walkable streets. Visit the Fisheries Museum of the Atlantic to understand the town's maritime history.", 
            location_type: "town", view_type: "coast", time_zone: "AST")
   
City.create(name: "Baddeck", province_id: 3, population: 769, 
            description: "Baddeck, on Cape Breton Island, is a great base for the Cabot Trail, Cape Breton Highlands National Park and Louisbourg’s fortress. Easily explored on foot, Baddeck’s sole street offers an appealing array of accommodation, restaurants and stores and lovely views of Bras d’Or Lake. Take a kayak tour on the North River, visit Kidston Lighthouse or hike the national park’s trails, cliffs and coves. Back in the town, don’t miss the museum devoted to famed inventor Alexander Graham Bell.", 
            location_type: "town", view_type: "coast", time_zone: "AST")
            
City.create(name: "Sydney", province_id: 3, population: 29904, 
            description: "Sydney is a former city and current community located in the Cape Breton Regional Municipality of Cape Breton Island, Nova Scotia, Canada. Situated on Cape Breton Island's east coast, it belongs administratively to the Cape Breton Regional Municipality. Sydney was founded in 1785 by the British, was incorporated as a city in 1904, and dissolved on 1 August 1995, when it was amalgamated into the regional municipality.", 
            location_type: "town", view_type: "coast", time_zone: "AST")
            
City.create(name: "Dartmouth", province_id: 3, population: 65741, 
            description: "Dartmouth is a former city and current community located in the Halifax Regional Municipality of Nova Scotia, Canada. Dartmouth is located on the eastern shore of Halifax Harbour. Dartmouth has been nicknamed the City of Lakes, after the large number of lakes located within its boundaries.", 
            location_type: "town", view_type: "coast", time_zone: "AST")
            
City.create(name: "Cavendish", province_id: 2, population: 7500, 
            description: "'Anne of Green Gables' enthusiasts flock to the appealing beach town on PEI’s north coast where Lucy Maud Montgomery lived and set her books. Visit Green Gables House, the author’s childhood home, and the Anne theme park of Avonlea Village. Those who want their vacation to turn a different page can hop on the trolley and explore 25 miles of sand dunes on Cavendish Beach in Prince Edward Island National Park, play champion golf courses, bike, sail and visit various family-friendly theme parks.", 
            location_type: "town", view_type: "coast", time_zone: "AST")
            
City.create(name: "Corner Brook", province_id: 1, population: 19806, 
            description: "Located on the Bay of Islands at the mouth of the Humber River, the city is the second-largest population centre in the province behind St. John's,[2] and smallest of three cities behind St. John's and Mount Pearl.[3] As such, Corner Brook functions as a service centre for western and northern Newfoundland. It is located on the same latitude as Gaspé, Quebec, a city of similar size and landscape on the other side of the Gulf of St. Lawrence. Corner Brook is the most northern city in Atlantic Canada.", 
            location_type: "town", view_type: "coast", time_zone: "NDT")

City.create(name: "Deer Lake", province_id: 1, population: 5249, 
            description: "Deer Lake is a town in the western part of the island of Newfoundland in the province of Newfoundland and Labrador, Canada.The town derives its name from Deer Lake and is situated at the outlet of the upper Humber River at the northeastern end of the lake.", 
            location_type: "town", view_type: "lake", time_zone: "NDT")

City.create(name: "Gander", province_id: 1, population: 11688, 
            description: "Gander is a town located in the northeastern part of the island of Newfoundland in the province of Newfoundland and Labrador, approximately 40 km (25 mi) south of Gander Bay, 100 km (62 mi) south of Twillingate and 90 km (56 mi) east of Grand Falls-Windsor. Located on the northeastern shore of Gander Lake, it is the site of Gander International Airport, once an important refuelling stop for transatlantic aircraft and the largest airport in the world. The airport is still a preferred emergency landing point for aircraft facing on-board medical or security issues.", 
            location_type: "town", view_type: "", time_zone: "NDT")

City.create(name: "Twillingate", province_id: 1, population: 2196, 
            description: "Twillingate is a town of 2,196 people located on the Twillingate Islands ("Toulinquet") in Notre Dame Bay, off the north eastern shore of the island of Newfoundland in the province of Newfoundland and Labrador, Canada. The town is about 100 kilometres (62 mi) north of Lewisporte and Gander.", 
            location_type: "town", view_type: "coast", time_zone: "NDT")

City.create(name: "Yellowknife", province_id: 12, population: 19569, 
            description: "Yellowknife, population of almost 20,000, is the capital of the Northwest Territories. The most common Dene name for Yellowknife is Somba K'e which translates to "Where the money is," which makes sense for a town with a gold-mining history. Here you'll find excellent restaurants, comfy accommodations and a whole host of colourful locals that make up this vibrant and cosmopolitan place. Regardless of what time of year you visit, there's always something happening in Yellowknife from a weekend music festival in the sand, to month-long activities at a snow castle on the frozen bay.", 
            location_type: "city-small", view_type: ["urban", "river"], time_zone: "MDT")