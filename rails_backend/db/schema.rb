# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_24_183619) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", force: :cascade do |t|
    t.string "name"
    t.string "province"
    t.string "population"
    t.integer "local_temperature"
    t.string "time_zone"
    t.integer "crime_index"
    t.integer "air_pollution_index"
    t.string "main_mode_of_transport"
    t.string "average_cost_of_living"
    t.integer "quality of life index"
    t.string "health_system_quality"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end
   
  create_table "city_demographics", force: :cascade do |t|
    t.string "mobility_status"
    t.string "distribution_of_population_by_age_groups"
    t.string "local_knowledge_of_official_languages"
    t.string "visible_minority_makeup"
    t.string "shelter_cost_to_income_ratio"
  end

  create_table "provinces", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.text "avg_rent_per_month"
    t.integer "total_COVID_hospitalizations"
    t.integer "current_active_cases"
    t.string "current_phase_of_COVID"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
