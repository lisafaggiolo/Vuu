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

City.create(id: 7, name: "Strathcona County", province_id: 9, population: 3103, 
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
            description: "", location_type: "city-small", view_type: "urban", time_zone: "CDT")

City.create(id: 17, name: "Iqaluit", province_id: 13, population: 7740, 
            description: "", location_type: "city-small", view_type: ["coast", "mountain"], time_zone: "EDT")

City.create(id: 18, name: "Meadow Lake", province_id: 8, population: 5344, 
            description: "", location_type: "town", view_type: , time_zone: "CST")

City.create(id: 19, name: "Massif de Charlevoix", province_id: 5, population: 11688, 
            description: "", location_type: "city-small", view_type: ["coast", "mountain", "forest"], time_zone: "EDT")
            
City.create(id: 20, name: "Quebec City", province_id: 5, population: 11688, 
            description: "", location_type: "city-small", view_type: "urban", time_zone: "EDT")

City.create(id: 21, name: "Montreal", province_id: 5, population: 11688, 
            description: "", location_type: "city-large", view_type: "urban", time_zone: "EDT")
            
City.create(id: 22, name: "Toronto", province_id: 6, population: 11688, 
            description: "", location_type: "city-large", view_type: "urban", time_zone: "EDT")

City.create(id: 23, name: "Ottawa", province_id: 6, population: 11688, 
            description: "", location_type: "city-small", view_type: "urban", time_zone: "EDT")

City.create(id: 24, name: "Victoria", province_id: 10, population: 11688, 
            description: "", location_type: "city-small", view_type: ["coast", "urban"], time_zone: "PDT")
            
City.create(id: 25, name: "Tofino", province_id: 10, population: 11688, 
            description: "", location_type: "town", view_type: ["coast", "forest"], time_zone: "PDT")

City.create(id: 26, name: "Canmore", province_id: 9, population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)

City.create(id: 27, name: "Calgary", province_id: 9, population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
City.create(id: 28, name: "The Thousand Islands", province_id: 6, population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
City.create(id: 29, name: "Niagara", province_id: 6, population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
            