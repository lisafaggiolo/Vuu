class Question < ApplicationRecord
    validates :question, presence: true
    validates :potential_answers, presence: true
  end