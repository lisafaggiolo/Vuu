class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :province_id
      t.integer :population
      t.text :description
      t.string :location_type
      t.string :view_type
      t.string :time_zone
      t.float :healthcare_index
      t.float :crime_index
      t.float :pollution_index
      
      t.timestamps
    end
  end
end
