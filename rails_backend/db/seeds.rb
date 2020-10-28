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

Province.create(id: 1, name: "Newfoundland and Labrador", average_rent: 1002, shelter_cost_to_income_ratio: 82, age_group_vis_min: 3, description: "The most easterly province in Canada, Newfoundland, and Labrador sits on the Atlantic and is made up of the island of Newfoundland and the mainland Labrador (hence the name).")
Province.create(id: 2, name: "Prince Edward Island", average_rent: 818, shelter_cost_to_income_ratio: 79, age_group_vis_min: 6, description: "The last of the three Maritime provinces, Prince Edward Island is actually made up of several islands (232 to be exact, including the main island), the largest having the same name.")
Province.create(id: 3, name: "Nova Scotia", average_rent: 909, shelter_cost_to_income_ratio: 77, age_group_vis_min: 7, description: "Although the second smallest province, Nova Scotia is the second most densely populated in the country. It is one of the three Maritime provinces and part of what forms Atlantic Canada.")
Province.create(id: 4, name: "New Brunswick", average_rent: 741, shelter_cost_to_income_ratio: 81, age_group_vis_min: 4, description: "New Brunswick is one of Canada's three Maritime provinces, which form a tiny water-bound cluster on the east coast, just below Quebec and bordering the state of Maine in the U.S.")
Province.create(id: 5, name: "Quebec", average_rent: 775, shelter_cost_to_income_ratio: 78, age_group_vis_min: 15, description: "Quebec is the second most populous Canadian province and known primarily for its French-speaking population, culture, and heritage. It is the country's largest province by land area. Most residents live along and near the St. Lawrence River, especially in and between Montreal and Quebec City, the two major cities.")
Province.create(id: 6, name: "Ontario", average_rent: 1109, shelter_cost_to_income_ratio: 71, age_group_vis_min: 32, description: "Ontario is Canada's most populous province, by a long shot. It is also home to the federal capital of Ottawa and the unofficial financial capital of Toronto. The majority of Ontario residents live in the southern part of the province near Toronto, along with Ottawa, Niagara Falls, and Niagara-on-the-Lake.")
Province.create(id: 7, name: "Manitoba", average_rent: 891, shelter_cost_to_income_ratio: 76, age_group_vis_min: 21, description: "Manitoba is the most easterly prairie province and longitudinal center of Canada. Like Saskatchewan, a majority of the population lives in the southern region. Manitoba's north comprises Canadian Shield rock and arctic tundra and is largely uninhabited. For more than 6,000 years, the province has been home to Aboriginal and Métis people, who continue to exert a great cultural influence.")
Province.create(id: 8, name: "Saskatchewan", average_rent: 1021, shelter_cost_to_income_ratio: 73 , age_group_vis_min: 14, description: "Saskatchewan is the middle prairie province, landlocked between the other two, Alberta and Manitoba. The majority of Saskatchewan's population live in the southern half of the province, especially in Saskatoon and Regina. The province's major industry is agriculture, followed by mining, oil, and natural gas production.")
Province.create(id: 9, name: "Alberta", average_rent: 1279, shelter_cost_to_income_ratio: 77, age_group_vis_min: 26, description: "Alberta is one of Canada's three prairie provinces. It shares the Canadian Rocky Mountain range with its western B.C. neighbor and is therefore famous as a ski and hiking destination. Alberta is the primary supply and service hub for Canada's crude oil industry, Athabasca oil sands, and other northern resource industries.")
Province.create(id: 10, name: "British Columbia", average_rent: 1149, shelter_cost_to_income_ratio: 70, age_group_vis_min: 33, description: "British Columbia is the country's most western province. Bordered by the Pacific Ocean, B.C., as it is more commonly known, has some of the most temperate locations in the country. With coastal islands and a mountainous interior, B.C.'s diverse geography draws adventure seekers from around the world including skiers, kayakers, and mountain bikers.")
Province.create(id: 11, name: "Yukon", average_rent: 1038, shelter_cost_to_income_ratio: 78, age_group_vis_min: 10, description: "The smallest of the three territories, Yukon (also known as the Yukon) is the most westerly territory, bordering Alaska.")
Province.create(id: 12, name: "Northwest Territories", average_rent: 1190, shelter_cost_to_income_ratio: 86, age_group_vis_min: 11, description: "Northwest Territories is the most populous of the three and borders the other two territories in—as you would expect—the northwest part of the country.")
Province.create(id: 13, name: "Nunavut", average_rent: 736, shelter_cost_to_income_ratio: 94, age_group_vis_min: 4, description: "Nunavut is the largest and most northern territory of Canada. It is the newest territory as well, having been separated from Northwest Territories in 1999.")
 
City.create(id: 1, name: "Okanagan Valley", province_id: 10, population: 362258, 
            description: "Aside from wine tasting, festivals, and farmers-market hopping, popular pursuits include cycling the Kettle Valley Rail Trail and boating on Okanagan Lake. Sunny and hot with fragrant sage, lavender fields, and vineyards spanning the hillsides, the long valley is filled with an expansive lake.  the Okanagan Valley has something for everyone: hoodoos, orchards, vineyards, mountains, valleys, lakes, highlands, ski slopes, and trails. This is truly one of the most desirable locales in British Columbia for year-round outdoor fun.", 
            location_type: "town", view_type: "country", time_zone: "PDT")

City.create(id: 2, name: "Vancouver", province_id: 10, population: 85935, 
            description: "As British Columbia’s largest city, Vancouver is a haven for outdoor enthusiasts and cosmopolitan adventurers alike. Framed by the Pacific Ocean and Coast Mountains, Vancouver’s meandering oceanside pathways are the perfect way to explore the city. Close to 30 kilometres of uninterrupted waterfront path surround Vancouver’s favourite neighbourhoods, including the seawall around Stanley Park.", 
            location_type: "city-large", view_type: ["ocean", "mountain", "urban"], time_zone: "PDT")

City.create(id: 3, name: "Kelowna", province_id: 10, population: 194882, 
            description: "", location_type: , view_type: , time_zone: "PDT")

City.create(id: 4, name: "Gaspe Peninsula", province_id: 5, population: 15163, 
            description: "“Stunning coastal scenery.” “Breathtaking.” “A trip of a lifetime.” That’s how visitors describe Quebec’s Gaspé Peninsula, a spot home to an unlikely amount of varied, untamed landscapes packed onto one 155-mile-long peninsula jutting into the Gulf of St. Lawrence. A National Geographic top travel destination a few years back, it's a place of stirring natural beauty and serenity, rugged seascapes, gorgeous beaches, and small-town charm. Lucky for us, it’s still largely undiscovered.", 
            location_type: ["town", "village"], view_type: "coast", time_zone: "EDT")

City.create(id: 5, name: "Magdalen Islands", province_id: 5, population: 12010, 
            description: "Located in the middle of the Gulf of St. Lawrence, this green archipelago surrounded by white-sand beaches and red cliffs exerts a magnetic attraction on visitors. Renowned for their warm hospitality, the Islanders are also talented chefs, artists and artisans. During your stay, enjoy exquisite seafood, wind sports, sea excursions, visits to local art galleries and studios, hikes and more.", 
            location_type: ["town", "village"], view_type: "coast", time_zone: "ADT")

City.create(id: 6, name: "Wasaga Beach", province_id: 6, population: 20675, 
            description: "Wasaga Beach is not only the longest freshwater beach in the world with 14 km of safe, sandy shore, but the sunsets there are breathtaking. Wasaga Beach is the first provincial park in Canada to be awarded the “Blue Flag” designation for its banks management efforts under the international environmental standards. For more information, visit www.BlueFlag.ca", 
            location_type: "town", view_type: "lake", time_zone: "EDT")

City.create(id: 7, name: "Strathcona County", province_id: 9, population: 98044, 
            description: "Strathcona County is perfect for those who enjoy the fine balance of a rural and an urban territory. For this reason, the area of Strathcona County is a specialized municipality as it does a fine job of supporting the needs of those living in the rural area of the city as well as those who live in the urban portion of the city. In a city where the crime rate and the unemployment rate is low, there is no doubt that it is one of the best places to live in Alberta, and Canada as well.", 
            location_type: "town", view_type: , time_zone: "MDT")

City.create(id: 8, name: "Collingwood", province_id: 6, population: 21793, 
            description: "", location_type: , view_type: , time_zone: "EDT")

City.create(id: 9, name: "Jasper", province_id: 9, population: 4590,  
            description: "Jasper is an intimate community that originated as a railway town that just happens to be in the middle of some of the most gorgeous protected wilderness in the world.", 
            location_type: "city-small", view_type: ["mountain", "lake"], time_zone: "MDT")

City.create(id: 10, name: "Banff", province_id: 9, population: 7847, 
            description: "Banff is a resort town and one of Canada's most popular tourist destinations. Known for its mountainous surroundings and hot springs, it is a destination for outdoor sports and features extensive hiking, biking, scrambling and skiing destinations within the area.", 
            location_type: "town", view_type: ["mountain", "lake"], time_zone: "MDT")

City.create(id: 11, name: "Halifax", province_id: 3, population: 431479, 
            description: "Compared to conurbations such as Vancouver and Toronto, Halifax barely qualifies as a city, but this seaside town punches well above its size: it's dotted with red-brick heritage buildings, public parks and a landmark citadel, blessed with some first-rate museums, and home to a truly epic 4km seafront boardwalk.", 
            location_type: "city-small" , view_type: "coast", time_zone: "ADT")

City.create(id: 12, name: "Charlottetown", province_id: 2, population: 36094, 
            description: "Charlottetown might be a small city, but it’s bursting with big energy and infectious island vibes. It’s got all the charm and hospitality PEI is famous for, plus culinary experiences and an arts and culture scene that take visitors by surprise—in the best way possible. Soak in the romance and nostalgia of the postcard-perfect streetscapes. Wander along a boardwalk where lobster boats and sailboats cozy up. Stay in a B&B that will give you serious Anne energy. Sound good? It’s time to discover Charlottetown.", 
            location_type: "city-small" , view_type: "coast", time_zone: "ADT")

City.create(id: 13, name: "St-Johns", province_id: 1, population: 113948,
            description: "St. John's, Newfoundland Labrador's capital, is the perfect combination of big-city luxury and traditional small-town charm. It is one of the oldest and most easterly cities in North America, and has become a rare destination full of character and charisma, with a contemporary, sophisticated edge.", 
            location_type: "town" , view_type: "coast", time_zone: "NDT")

City.create(id: 14, name: "Moncton", province_id: 4, population: 85198, 
            description: "New Brunswick's transportation hub is vibrant Moncton, one of the country's fastest growing cities and a community steeped in history. Its storied past is brought to life in its many cultural institutions and museums, from the Acadian Museum to Le Centre Culturel Aberdeen. The city's largest green space, Centennial Park, includes many attractions and activities, from hiking and skiing trails to an artificial beach to an aerial treetop obstacle course and zip line.", 
            location_type: "city-small", view_type: "urban", time_zone: "ADT")

City.create(id: 15, name: "Whitehorse", province_id: 11, population: 25085,
            description: "Few cities in the world offer such rich access to pristine wilderness, yet still provide all the amenities of a modern metropolis. Hugged by the banks of the Yukon River and surrounded by the peaks of Grey Mountain, Haeckel Hill, and Golden Horn Mountain, Whitehorse is the Yukon’s most cosmopolitan community, but its easy access to trails, rivers, lakes and mountains are what make this city memorable.", 
            location_type: "city-small", view_type: ["forest", "mountain"], time_zone: "PDT")

City.create(id: 16, name: "Winnepeg", province_id: 7, population: 749534, 
            description: "A cosmopolitan city known as the 'cultural cradle of Canada', Winnipeg is family friendly with plenty of charm. It boasts a dazzling arts, theatre and indie music scene, as well as lip-smacking dining options to tantalize every taste bud. Experience nine acres of shopping and interactive fun at the Forks Market or explore Winnipeg’s diverse neighborhoods like the historic French Quarter and Exchange District or the boho chic Osborne Village.", 
            location_type: "city-small", view_type: "urban", time_zone: "CDT")

City.create(id: 17, name: "Iqaluit", province_id: 13, population: 7740, 
            description: "Iqaluit is the capital and largest community in Canada’s newest territory, Nunavut. It is also the territory's only city. Iqaluit is situated at the northeast head of Frobisher Bay, on southern Baffin Island. In an area long used by the Inuit and their ancestors, it is surrounded by hills close to the Sylvia Grinnell River and looks across the bay to the mountains of the Meta Incognita Peninsula.", 
            location_type: "city-small", view_type: ["coast", "mountain"], time_zone: "EDT")

City.create(id: 18, name: "Meadow Lake", province_id: 8, population: 5344, 
            description: "", location_type: "town", view_type: , time_zone: "CST")

City.create(id: 19, name: "Massif de Charlevoix", province_id: 5, population: 29562, 
            description: "Mentioning Charlevoix to Quebeckers evokes a heartfelt sigh. No wonder: this region is renowned for its salty breezes (coming straight from “la mer”, as the tidal Saint Lawrence river is known), stunning vistas, artsy Baie-Saint-Paul and gourmet food trails. Getting here from Québec City is easy on Le Train de Massif from Montmorency Falls. In winter, Le Massif mountain’s 770 metres offers the greatest vertical drop for downhill skiing east of the Rocky Mountains.", 
            location_type: "city-small", view_type: ["coast", "mountain", "forest"], time_zone: "EDT")
            
City.create(id: 20, name: "Quebec City", province_id: 5, population: 542298, 
            description: "Dubbed the “Paris of North America”, 400-year-old Québec City is the province’s capital, and a must-visit in order to capture the spirit of New France (particularly in August’s New France Festival). Stay at the “castle” – Fairmont Chateau Frontenac – an architectural symbol of the city, recognisable for its steeply pitched copper roof and imposing turrets. Stroll along Dufferin Terrace overlooking the Saint Lawrence river – Canada’s first “highway”, it led explorers, traders, missionaries and settlers into the hinterland. Being North America’s only walled city, Old Québec is a Unesco world heritage site. Investigate the Citadel, wander the Plains of Abraham where British General Wolfe defeated French General Montcalm in 1759, then choose from many restaurants featuring le terroir (regional foods).", 
            location_type: "city-small", view_type: "urban", time_zone: "EDT")

City.create(id: 21, name: "Montreal", province_id: 5, population: 1780000, 
            description: "Witness a French-infused city that's in love with festivals, the arts, good food, living well and enjoying life to the hilt. Montréal is the country’s cultural juggernaut. The city, standard bearer of an entire linguistic-cultural identity – francophone Canada – simply lives for public celebration of the arts. There are some 250 theater and dance companies, more than 90 festivals and a fascinating medley of neighborhoods where artists, writers and musicians have helped cement the city’s reputation as a great arts center.", 
            location_type: "city-large", view_type: "urban", time_zone: "EDT")
            
City.create(id: 22, name: "Toronto", province_id: 6, population: 2930000, 
            description: "Toronto is one of Canada's largest cities and one of its best destinations to travel to in the country, full of sights and attractions such as its countless museums and parks. With its highly iconic landmark of the CN Tower gracing its skyline, Toronto is also famous for its beautiful lake scenery with much of the city straddling and rising up against the gorgeous Lake Ontario.", 
            location_type: "city-large", view_type: "urban", time_zone: "EDT")

City.create(id: 23, name: "Ottawa", province_id: 6, population: 994837, 
            description: "Ottawa is Canada’s beautiful capital city, a destination filled with national sites and historic landmarks. Home to about 1.25 million people, Ottawa is located within easy driving distance of Montreal (1h 45min), Toronto (4hrs) and the US border (45min). There are countless sites to see in the capital, and many ways to see them. Boat tours on the Rideau Canada and the Ottawa River, bus tours on land, and amphibus tours on water, biplane and helicopter tours, cycling tours and a variety of themed walking tours. In fact, many of Ottawa’s most popular attractions and experiences can be found in its surprisingly compact and walkable downtown core.", 
            location_type: "city-small", view_type: "urban", time_zone: "EDT")

City.create(id: 24, name: "Victoria", province_id: 10, population: 92141, 
            description: "Victoria is a year-round tourism destination that offers a friendly, safe haven for all visitors. With a clean environment and charming ambience, it is no surprise that Victoria, BC is one of the world's favourite destinations. It’s a great place to spend a few days before or after your kayak tour of Vancouver Island, without fear of getting lost in the sprawl of a major city.", 
            location_type: "city-small", view_type: ["coast", "urban"], time_zone: "PDT")
            
City.create(id: 25, name: "Tofino", province_id: 10, population: 1932, 
            description: "The surf swept community of Tofino rests in the centre of Clayoquot Sound, an expanse of islets and inlets arranged like a collection of emeralds along the west coast of Vancouver Island. The meaning of Clayoquot comes from Tla-o- quia-aht “people who are different from who they used to be”. A fitting description any traveler should expect for themselves when journeying to this wild west coast town on the edge of the world.", 
            location_type: "town", view_type: ["coast", "forest"], time_zone: "PDT")

City.create(id: 26, name: "Canmore", province_id: 9, population: 13992, 
            description: "If you’re about the outdoors lifestyle and enjoy picturesque scenary, Canmore is the place you and your family want to be living. The town of Canmore is located just west of the big city of Calgary, but is also on the boundary of Banff National Park. Canada’s oldest national park offers a beautiful view of the Rocky Mountains, and some of the most gorgeous lakes in the world.", 
            location_type: "town", view_type: ["mountain", "urban", "forest"], time_zone: "MDT")

City.create(id: 27, name: "Calgary", province_id: 9, population: 1336000, 
            description: "If you like the big city with all the amenities that can be offered, Calgary is a great choice for you and your family. The city of Calgary has over 1.4 million people residing within it and is the largest city the province of Alberta has to offer. As a resident in Calgary, you’ll have no problem finding activities to do with your free time. Annual events like the Calgary Stampede bring people from all over the world to the city to enjoy the rodeo, exhibition, and festival.", 
            location_type: "city-large", view_type: ["mountain", "urban"], time_zone: "MDT")
            
City.create(id: 28, name: "The Thousand Islands", province_id: 6, population: 9465, 
            description: "Perhaps it starts with an inspiring sunrise on the Canadian side of the St. Lawrence Seaway or ends with a breathtaking sunset from the U.S. Maybe it includes views of storybook castles, a good fish story, a taste of craft beverages or a trip back in time. On the pristine waters or in quiet villages, there are thousands of things to see and do.", 
            location_type: "town", view_type: "lake", time_zone: "EDT")
            
City.create(id: 29, name: "Niagara", province_id: 6, population: 447888, 
            description: "From wining, dining and riding the vines in Niagara-on-the-Lake and off the beaten path in Twenty Valley, to the urban cool of St. Catharines or outdoor adventures on the beach and amongst the battlefields of Niagara’s South Coast, without forgetting the iconic Niagara Falls, you will indulge in moments that are sure to inspire your senses.", 
            location_type: "city-small", view_type: ["urban", "country"] time_zone: "EDT")
            
 