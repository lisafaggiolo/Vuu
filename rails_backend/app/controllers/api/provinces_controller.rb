class Api::ProvincesController < ApplicationController
  
  def index
    @provinces = Province.order(created_at: :desc)
    render json: { status: 'SUCCESS', message: 'Loaded provinces', data:@provinces }, status: :ok
  end
  
  def show
    province = Province.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded province', data:province }, status: :ok
    
    unless province
      flash[:alert] = 'Province not found'
      return render action: :index
    end
    
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
  
  def request_api(url)
    response = Excon.get(
      url,
      headers: {
        'X-RapidAPI-Host' => URI.parse(url).host,
        'X-RapidAPI-Key' => ENV.fetch('RAPIDAPI_API_KEY')
      }
    )
    return nil if response.status != 200
    JSON.parse(response.body)
  end
  def find_country(name)
    request_api(
      "https://restcountries-v1.p.rapidapi.com/name/#{URI.encode(name)}"
    )
  end
    
end