class Province < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  has_many :cities
end
