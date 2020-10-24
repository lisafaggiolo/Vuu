module Api
  class CitiesController < ApplicationController
  
    def index
      @cities = City.order('created_at DESC');
      render json: { status: 'SUCCESS', message: 'Loaded cities', data:cities }, status: :ok
    end
    
    def show
      city = City.find(params[:id])
      render json: { status: 'SUCCESS', message: 'Loaded city', data:city }, status: :ok
    end
    
    def create
      city = City.new(city_params)
      
      if city.save
        render json: { status: 'SUCCESS', message: 'Saved city', data:city }, status: :ok
      else
        render json: { status: 'ERROR', message: 'Could not save city', data:city.errors }, status: :unprocessable_entity
      end
    end
   
    def update
      city = City.find(params[:id])
      
      if city.update_attributes(city_params)
        render json: { status: 'SUCCESS', message: 'Updated city', data:city }, status: :ok
      else
        render json: { status: 'ERROR', message: 'Could not update city', data:city.errors }, status: :unprocessable_entity 
      end
      
   end
   
    private 
    
    def city_params
      params.permit(:name, :province, :population, :local_temperature)
    end
    
    def city_search
    end
    
  end
end