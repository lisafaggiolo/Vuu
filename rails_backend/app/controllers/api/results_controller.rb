class Api::ResultsController < ApplicationController

  def index
    @cities = City.order(created_at: :desc);
    render json: { status: 'SUCCESS', message: 'Loaded cities', data: @cities }, status: :ok
  end

  def show
    city = City.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded city', data:city }, status: :ok
  end
  
end
