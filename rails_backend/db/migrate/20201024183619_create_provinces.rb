class CreateProvinces < ActiveRecord::Migration[6.0]
  def change
    create_table :provinces do |t|
      t.string :name
      t.integer :average_rent
      t.integer :shelter_cost_to_income_ratio
      t.integer :age_group_vis_min
      t.text :description
      t.string :COVIDid

      t.timestamps
    end
  end
end
