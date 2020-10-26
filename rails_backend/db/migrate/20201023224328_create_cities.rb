class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :province
      t.string :population
      t.string :local_temperature

      t.timestamps
    end
  end
end
