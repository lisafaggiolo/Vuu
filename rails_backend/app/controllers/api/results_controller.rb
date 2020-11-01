class Api::ResultsController < ApplicationController

  
  def index
    @cities = City.order(created_at: :desc);
    render json: { status: 'SUCCESS', message: 'Loaded cities', data: @cities }, status: :ok
  end

  def show
    filtered_cities = filter_algorithm(results_params)
    render json: { status: 'SUCCESS', message: 'Loaded city', data:@cities }, status: :ok
  end

  def create
    filtered_cities = filter_algorithm(results_params)
  end

  def filter_algorithm(answers_obj)
    puts answers_obj
    answers_obj.each do |answer_obj|
      question_id = answer_obj[:question_id]
      user_answer = answer_obj[:user_answers]
      if user_answer != []
        @question = Question.where(:id => question_id)
        puts @question, user_answer
      end
    end
  end

  private
  def results_params
    params.require(:_json);
  end
  

  
end
