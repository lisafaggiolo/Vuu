class City < ApplicationRecord
  validates :name, presence: true
  validates :province, presence: true
  validates :population, presence: true
  belongs_to :province
  validates :image, presence: true
end
