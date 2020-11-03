class Api::ResultsController < ApplicationController

  
  def index
    @cities = filter_algorithm(results_params)
    render json: { status: 'SUCCESS', message: 'Loaded cities', data: @cities }, status: :ok
  end

  def show
    @filtered_cities = filter_algorithm(results_params)
    render json: { status: 'SUCCESS', message: 'Loaded city', data:@filtered_cities }, status: :ok
  end

  def create
    @filtered_cities = filter_algorithm(results_params)
    
    render json: { status: 'SUCCESS', message: 'Loaded city', data:@filtered_cities }, status: :ok
    
  end

  def filter_algorithm(answers_array)
    
    filters = Hash.new
    @filtered_cities = []

    answers_array.each do |answer_obj|
      question_id = answer_obj[:question_id]
      user_answer = answer_obj[:user_answers]
        # puts "QUESTION ID", question_id
        # puts "USER ANSWER",user_answer
        question = Question.find_by(:id => question_id)

        # puts "QUESTION", question
        filters[question.answer_type] = user_answer
        # puts "FILTERS",filters
    end
    
    time_zone_boolean = filters["boolean"][0]
    location_type_boolean = filters["location_type"]
    puts "FILTERS",filters

    if time_zone_boolean == "Yes"
      if  location_type_boolean == "No"
        puts "LINE 44"
        @filtered_cities = City.where(time_zone: filters["time_zone"])
      elsif 
        puts "LINE 47"
        @filtered_cities = City.where(time_zone: filters["time_zone"], location_type: filters["location_type"])
      end
    else 
      puts "LINE 51"
      @filtered_cities = City.where(location_type: filters["location_type"])
    end
  
    puts "FILTERED CITIES", @filtered_cities
  

end

  private
  def results_params
    params.require(:_json);
  end
  

  
end
