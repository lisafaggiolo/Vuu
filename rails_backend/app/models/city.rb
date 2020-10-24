class City < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :province, presence: true
  validates :population, presence: true
  validates :local_temp, presence: true
end
