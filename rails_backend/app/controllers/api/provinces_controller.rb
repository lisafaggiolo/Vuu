class Api::ProvincesController < ApplicationController
  
  def index
    @provinces = Province.all
    render json: { status: 'SUCCESS', message: 'Loaded provinces', data:@provinces }, status: :ok
  end
  
  def show
    
    province = Province.find(params[:id])
    cities = City.where(province_id: province.id)
    province_cities = [province, cities]
    render json: { status: 'SUCCESS', message: 'Loaded province', data:province_cities }, status: :ok
    
    unless province
      flash[:alert] = 'Province not found'
      return render action: :index
    end
    
  end
  
  def create
    province = Province.new(province_params)
    
    if province.save
      render json: { status: 'SUCCESS', message: 'Saved province', data:province }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Could not save province', data:province.errors }, status: :unprocessable_entity
    end
    
  end
  
  def update
    province = Province.find(params[:id])
    
    if province.update_attributes(province_params)
      render json: { status: 'SUCCESS', message: 'Updated province', data:province }, status: :ok
    else
      render json: { status: 'ERROR', message: 'Could not update province', data:province.errors }, status: :unprocessable_entity 
    end
    
  end
  
  private  
  def province_params
    params.permit(:name, :description)
  end
  
    
end