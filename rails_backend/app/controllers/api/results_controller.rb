class Api::ResultsController < ApplicationController

  
  def index
    @cities = City.order(created_at: :desc);
    render json: { status: 'SUCCESS', message: 'Loaded cities', data: @cities }, status: :ok
  end

  def show
    cities = City.where({})
    render json: { status: 'SUCCESS', message: 'Loaded city', data:@cities }, status: :ok
  end

  def create
    puts params[:_json][0][:question_id]
  end

  private
  def results_params
    params.require(:result).permit(:_json, :user_answers);
  end
  
  def filter_algorithm 
  end
  
  def create
    result = results_params
    puts result.answers
  end
  
  private
  def results_params
    params.require(:result).permit(:answers);
end
