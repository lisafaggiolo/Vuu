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
    
    filters = Hash.new
    @filtered_cities = []
    answers_array.each do |answer_obj|

      question_id = answer_obj[:question_id]
      user_answer = answer_obj[:user_answers]
        puts "QUESTION ID", question_id
        puts "USER ANSWER",user_answer
        question = Question.find_by(:id => question_id)

        puts "QUESTION", question
        filters[question.answer_type] = user_answer
        puts "FILTERS",filters
    end
    
    boolean = filters["boolean"][0]
    # puts boolean

    if boolean == "Yes"
      @filtered_cities = City.where(time_zone: filters["time_zone"])
    else 
      @filtered_cities = City.all
    end

end

  private
  def results_params
    params.require(:_json);
  end
  

  
end
