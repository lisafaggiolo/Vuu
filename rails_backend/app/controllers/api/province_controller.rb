class ProvinceController < ApplicationController
  
  skip_before_action :authorized

  def index
    @provinces = Province.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded provinces', data:@provinces }, status: :ok
  end
  
  def show
    
    @provinces = Province.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded province', data:@province }, status: :ok
    
    unless province
      flash[:alert] = 'Province not found'
      return render action: :index
    end
    
  end
end
