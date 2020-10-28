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

Province.create(id: 1, name: "Newfoundland and Labrador", average_rent: 1002, shelter_cost_to_income_ratio: 82, description: "The most easterly province in Canada, Newfoundland, and Labrador sits on the Atlantic and is made up of the island of Newfoundland and the mainland Labrador (hence the name).")
Province.create(id: 2, name: "Prince Edward Island", average_rent: 818, shelter_cost_to_income_ratio: 79, description: "The last of the three Maritime provinces, Prince Edward Island is actually made up of several islands (232 to be exact, including the main island), the largest having the same name.")
Province.create(id: 3, name: "Nova Scotia", average_rent: 909, shelter_cost_to_income_ratio: 77, description: "Although the second smallest province, Nova Scotia is the second most densely populated in the country. It is one of the three Maritime provinces and part of what forms Atlantic Canada.")
Province.create(id: 4, name: "New Brunswick", average_rent: 741, shelter_cost_to_income_ratio: 81, description: "New Brunswick is one of Canada's three Maritime provinces, which form a tiny water-bound cluster on the east coast, just below Quebec and bordering the state of Maine in the U.S.")
Province.create(id: 5, name: "Quebec", average_rent: 775, shelter_cost_to_income_ratio: 78, description: "Quebec is the second most populous Canadian province and known primarily for its French-speaking population, culture, and heritage. It is the country's largest province by land area. Most residents live along and near the St. Lawrence River, especially in and between Montreal and Quebec City, the two major cities.")
Province.create(id: 6, name: "Ontario", average_rent: 1109, shelter_cost_to_income_ratio: 71, description: "Ontario is Canada's most populous province, by a long shot. It is also home to the federal capital of Ottawa and the unofficial financial capital of Toronto. The majority of Ontario residents live in the southern part of the province near Toronto, along with Ottawa, Niagara Falls, and Niagara-on-the-Lake.")
Province.create(id: 7, name: "Manitoba", average_rent: 891, shelter_cost_to_income_ratio: 76, description: "Manitoba is the most easterly prairie province and longitudinal center of Canada. Like Saskatchewan, a majority of the population lives in the southern region. Manitoba's north comprises Canadian Shield rock and arctic tundra and is largely uninhabited. For more than 6,000 years, the province has been home to Aboriginal and Métis people, who continue to exert a great cultural influence.")
Province.create(id: 8, name: "Saskatchewan", average_rent: 1021, shelter_cost_to_income_ratio: 73 , description: "Saskatchewan is the middle prairie province, landlocked between the other two, Alberta and Manitoba. The majority of Saskatchewan's population live in the southern half of the province, especially in Saskatoon and Regina. The province's major industry is agriculture, followed by mining, oil, and natural gas production.")
Province.create(id: 9, name: "Alberta", average_rent: 1279, shelter_cost_to_income_ratio: 77, description: "Alberta is one of Canada's three prairie provinces. It shares the Canadian Rocky Mountain range with its western B.C. neighbor and is therefore famous as a ski and hiking destination. Alberta is the primary supply and service hub for Canada's crude oil industry, Athabasca oil sands, and other northern resource industries.")
Province.create(id: 10, name: "British Columbia", average_rent: 1149, shelter_cost_to_income_ratio: 70, description: "British Columbia is the country's most western province. Bordered by the Pacific Ocean, B.C., as it is more commonly known, has some of the most temperate locations in the country. With coastal islands and a mountainous interior, B.C.'s diverse geography draws adventure seekers from around the world including skiers, kayakers, and mountain bikers.")
Province.create(id: 11, name: "Yukon", average_rent: 1038, shelter_cost_to_income_ratio: 78, description: "The smallest of the three territories, Yukon (also known as the Yukon) is the most westerly territory, bordering Alaska.")
Province.create(id: 12, name: "Northwest Territories", average_rent: 1190, shelter_cost_to_income_ratio: 86, description: "Northwest Territories is the most populous of the three and borders the other two territories in—as you would expect—the northwest part of the country.")
Province.create(id: 13, name: "Nunavut", average_rent: 736, shelter_cost_to_income_ratio: 94, description: "Nunavut is the largest and most northern territory of Canada. It is the newest territory as well, having been separated from Northwest Territories in 1999.")
 
City.create(id: 1, name: "Okanagan Valley", province_id: 10, population: 362258, 
            description: "", location_type: , view_type: , time_zone: 25)

City.create(id: 2, name: "Vancouver", province_id: 10, population: 85935, 
            description: "", location_type: , view_type: , time_zone: 30)

City.create(id: 3, name: "Kelowna", province_id: 10, population: 194882, 
            description: "", location_type: , view_type: , time_zone: 20)

City.create(id: 4, name: "Gaspe Peninsula", province_id: 5, population: 15163, 
            description: "", location_type: , view_type: , time_zone: 15)

City.create(id: 5, name: "Magdalen Islands", province_id: 5, population: 12010, 
            description: "", location_type: , view_type: , time_zone: 20)

City.create(id: 6, name: "Wasaga Beach", province_id: "Ontario", population: 20675, 
            description: "", location_type: , view_type: , time_zone: 15)

City.create(id: 7, name: "Strathcona County", province_id: 5, population: 3103, 
            description: "", location_type: , view_type: , time_zone: 20)

City.create(id: 8, name: "Collingwood", province_id: "Ontario", population: 21793, 
            description: "", location_type: , view_type: , time_zone: 10)

City.create(id: 9, name: "Jasper", province_id: "Alberta", population: 4590,  : 12)

City.create(id: 10, name: "Banff", province_id: "Alberta", population: 7847, 
            description: "", location_type: , view_type: , time_zone: 16)

City.create(id: 11, name: "Halifax", province_id: "Nova Scotia", population: 431479, 
            description: "", location_type: , view_type: , time_zone: 13)

City.create(id: 12, name: "Charlottetown", province_id: "Prince Edward Island", population: 36094, 
            description: "", location_type: , view_type: , time_zone: 19)

City.create(id: 13, name: "St-Johns", province_id: "Newfoundland and Labrador", population: 113948,  : 20)

City.create(id: 14, name: "Moncton", province_id: "New Brunswick", population: 85198, 
            description: "", location_type: , view_type: , time_zone: 10)

City.create(id: 15, name: "White Horse", province_id: "Yukon", population: 25085,  : 11)

City.create(id: 16, name: "Winnepeg", province_id: "Manitoba", population: 749534, 
            description: "", location_type: , view_type: , time_zone: 12)

City.create(id: 17, name: "Iqaluit", province_id: "Nunavut", population: 7740, 
            description: "", location_type: , view_type: , time_zone: 13)

City.create(id: 18, name: "Meadow Lake", province_id: "Saskatchewan", population: 5344, 
            description: "", location_type: , view_type: , time_zone: 14)

City.create(id: 19, name: "Massif de Charlevoix", province_id: "Newfoundland and Labrador", population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
City.create(id: 20, name: "Quebec City", province_id: "Newfoundland and Labrador", population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)

City.create(id: 21, name: "Montreal", province_id: "Newfoundland and Labrador", population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
City.create(id: 22, name: "Toronto", province_id: "Newfoundland and Labrador", population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)

City.create(id: 23, name: "Ottawa", province_id: "Newfoundland and Labrador", population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)

City.create(id: 24, name: "Victoria", province_id: "Newfoundland and Labrador", population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
City.create(id: 25, name: "Tofino", province_id: "Newfoundland and Labrador", population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)

City.create(id: 26, name: "Canmore", province_id: 9, population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)

City.create(id: 27, name: "Calgary", province_id: 9, population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
City.create(id: 28, name: "The Thousand Islands", province_id: 6, population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
City.create(id: 29, name: "Niagara", province_id: 6, population: 11688, 
            description: "", location_type: , view_type: , time_zone: 15)
            
            