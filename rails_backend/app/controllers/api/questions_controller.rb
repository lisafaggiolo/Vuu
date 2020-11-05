class Api::QuestionsController < ApplicationController
  # skip_before_action :authorized
    def index
      @questions = Question.all
      render json: @questions 
    end

    def  filter 
      puts state.answers
    end
end
