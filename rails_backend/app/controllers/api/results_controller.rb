class Api::ResultsController < ApplicationController

  
  def index
    @cities = City.order(created_at: :desc);
    render json: { status: 'SUCCESS', message: 'Loaded cities', data: @cities }, status: :ok
  end

  def show
    @filtered_cities = City.all
    render json: { status: 'SUCCESS', message: 'Loaded city', data:@filtered_cities }, status: :ok
  end

  def create
    filtered_cities = filter_algorithm(results_params)
    
  end

  def filter_algorithm(answers_array)
    # puts answers_array
    
    
    filters = Hash.new

    answers_array.each do |answer_obj|

      question_id = answer_obj[:question_id]
      user_answer = answer_obj[:user_answers]
  
      if user_answer != []
        question = Question.find(:id => question_id)
        key = question.answer_type
        filters[:key] = user_answer
      end
    end
    
 
    if filters(:boolean) == "No"
      filters.delete(:time_zone)
    end
    puts filters  
  end

  private
  def results_params
    params.require(:_json);
  end
  

  
end
