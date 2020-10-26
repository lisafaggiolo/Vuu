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

Province.create(name: "Alberta", description: "Alberta is one of Canada's three prairie provinces. It shares the Canadian Rocky Mountain range with its western B.C. neighbor and is therefore famous as a ski and hiking destination. Alberta is the primary supply and service hub for Canada's crude oil industry, Athabasca oil sands, and other northern resource industries.")
Province.create(name: "British Columbia", description: "British Columbia is the country's most western province. Bordered by the Pacific Ocean, B.C., as it is more commonly known, has some of the most temperate locations in the country. With coastal islands and a mountainous interior, B.C.'s diverse geography draws adventure seekers from around the world including skiers, kayakers, and mountain bikers.")
Province.create(name: "Manitoba", description: "Manitoba is the most easterly prairie province and longitudinal center of Canada. Like Saskatchewan, a majority of the population lives in the southern region. Manitoba's north comprises Canadian Shield rock and arctic tundra and is largely uninhabited. For more than 6,000 years, the province has been home to Aboriginal and Métis people, who continue to exert a great cultural influence.")
Province.create(name: "New Brunswick", description: "New Brunswick is one of Canada's three Maritime provinces, which form a tiny water-bound cluster on the east coast, just below Quebec and bordering the state of Maine in the U.S.")
Province.create(name: "Newfoundland and Labrador", description: "The most easterly province in Canada, Newfoundland, and Labrador sits on the Atlantic and is made up of the island of Newfoundland and the mainland Labrador (hence the name).")
Province.create(name: "Nova Scotia", description: "Although the second smallest province, Nova Scotia is the second most densely populated in the country. It is one of the three Maritime provinces and part of what forms Atlantic Canada.")
Province.create(name: "Ontario", description: "Ontario is Canada's most populous province, by a long shot. It is also home to the federal capital of Ottawa and the unofficial financial capital of Toronto. The majority of Ontario residents live in the southern part of the province near Toronto, along with Ottawa, Niagara Falls, and Niagara-on-the-Lake.")
Province.create(name: "Prince Edward Island", description: "The last of the three Maritime provinces, Prince Edward Island is actually made up of several islands (232 to be exact, including the main island), the largest having the same name.")
Province.create(name: "Quebec", description: "Quebec is the second most populous Canadian province and known primarily for its French-speaking population, culture, and heritage. It is the country's largest province by land area. Most residents live along and near the St. Lawrence River, especially in and between Montreal and Quebec City, the two major cities.")
Province.create(name: "Saskatchewan", description: "Saskatchewan is the middle prairie province, landlocked between the other two, Alberta and Manitoba. The majority of Saskatchewan's population live in the southern half of the province, especially in Saskatoon and Regina. The province's major industry is agriculture, followed by mining, oil, and natural gas production.")
Province.create(name: "Northwest Territories", description: "Northwest Territories is the most populous of the three and borders the other two territories in—as you would expect—the northwest part of the country.")
Province.create(name: "Nunavut", description: "Nunavut is the largest and most northern territory of Canada. It is the newest territory as well, having been separated from Northwest Territories in 1999.")
Province.create(name: "Yukon", description: "The smallest of the three territories, Yukon (also known as the Yukon) is the most westerly territory, bordering Alaska.")

City.create(name: "Okanagan Valley", province: "British Columbia", population: 362258, local_temperature: 25)
City.create(name: "North Vancouver", province: "British Columbia", population: 85935, local_temperature: 30)
City.create(name: "Kelowna", province:"British Columbia", population: 194882, local_temperature: 20)
City.create(name: "Gaspe", province: "Quebec", population: 15163, local_temperature: 15)
City.create(name: "Iles de la Madeleine", province: "Quebec", population: 12010, local_temperature: 20)
City.create(name: "Perce", province: "Quebec", population: 3103, local_temperature: 20)
City.create(name: "Wasaga Beach", province: "Ontario", population: 20675, local_temperature: 15)
City.create(name: "Collingwood", province: "Ontario", population: 21793, local_temperature: 10)
City.create(name: "Jasper", province: "Alberta", population: 4590,  local_temperature: 12)
City.create(name: "Banff", province: "Alberta", population: 7847, local_temperature: 16)
City.create(name: "Halifax", province: "Nova Scotia", population: 431479, local_temperature: 13)
City.create(name: "Charlottetown", province: "Prince Edward Island", population: 36094, local_temperature: 19)
City.create(name: "St-Johns", province: "Newfoundland and Labrador", population: 113948,  local_temperature: 20)
City.create(name: "Moncton", province: "New Brunswick", population: 85198, local_temperature: 10)
City.create(name: "White Horse", province: "Yukon", population: 25085,  local_temperature: 11)
City.create(name: "Winnepeg", province: "Manitoba", population: 749534, local_temperature: 12)
City.create(name: "Iqaluit", province: "Nunavut", population: 7740, local_temperature: 13)
City.create(name: "Meadow Lake", province: "Saskatchewan", population: 5344, local_temperature: 14)
City.create(name: "Gander", province: "Newfoundland and Labrador", population: 11688, local_temperature: 15)
