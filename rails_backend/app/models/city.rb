class City < ApplicationRecord
  validates :name, presence: true
  validates :province, presence: true
  validates :population, presence: true
  validates :local_temperature, presence: true
end
