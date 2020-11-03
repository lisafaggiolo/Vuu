class Api::ResultsController < ApplicationController

  
  def index
    @cities = City.order(created_at: :desc);
    render json: { status: 'SUCCESS', message: 'Loaded cities', data: @cities }, status: :ok
  end

  def show
    @filtered_cities = filter_algorithm(results_params)
    render json: { status: 'SUCCESS', message: 'Loaded city', data:@filtered_cities }, status: :ok
  end

  def create
    @filtered_cities = filter_algorithm(results_params)
    puts @filtered_cities
    render json: { status: 'SUCCESS', message: 'Loaded city', data:@filtered_cities }, status: :ok
    
  end

  def filter_algorithm(answers_array)
    
    filters = Hash.new
    @filtered_cities = []

    answers_array.each do |answer_obj|
      question_id = answer_obj[:question_id]
      user_answer = answer_obj[:user_answers]
      
      question = Question.find_by(:id => question_id)
      filters[question.answer_type] = user_answer
    end
    
    time_zone_boolean = filters["boolean"][0]
    location_type_boolean = filters["location_type"][0]

    if time_zone_boolean == "Yes"
      if  location_type_boolean == "No"
        @filtered_cities = City.where(time_zone: filters["time_zone"])
      elsif 
        @filtered_cities = City.where(time_zone: filters["time_zone"], location_type: filters["location_type"])
      end
    else 
      @filtered_cities = City.all
    end
    
    if @filtered_cities == []
      @filtered_cities = City.where('id = ? AND id = ? AND id = ? AND id = ? AND id = ?',17, 21, 11, 7, 1)
      puts @filtered_cities
      return @filtered_cities
    end

    return @filtered_cities
end

  private
  def results_params
    params.require(:_json);
  end
  

  
end
