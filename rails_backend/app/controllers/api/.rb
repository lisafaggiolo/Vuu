class ProvinceController < ApplicationController
  
  skip_before_action :authorized

  def index
    @provinces = Province.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded provinces', data:@provinces }, status: :ok
  end
  
  def show
    
    @provinces = Province.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded province', data:@provinces }, status: :ok
    
    unless province
      flash[:alert] = 'Province not found'
      return render action: :index
    end
    
  end
end
