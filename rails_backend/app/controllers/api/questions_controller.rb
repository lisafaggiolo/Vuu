class Api::QuestionsController < ApplicationController
    def index
      @questions = Question.all
      render json: @questions 
    end

    def  filter 
      
    end
end
