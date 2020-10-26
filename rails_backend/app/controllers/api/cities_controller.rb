class Api::CitiesController < ApplicationController
    
  def index
    @cities = City.order(created_at: :desc);
    render json: { status: 'SUCCESS', message: 'Loaded cities', data: @cities }, status: :ok
  end
  
  def show
    city = City.find(params[:id])
    render json: { status: 'SUCCESS', message: 'Loaded city', data:city }, status: :ok
    
    unless city
      flash[:alert] = 'City not found'
      return render action: :index
    end
    
    def find_weather(city, country_code)
      query = URI.encode("#{city},#{country_code}")
      request_api(
        "https://community-open-weather-map.p.rapidapi.com/forecast?q=#{query}"
      )
    end
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
  
  def city_search
  end
  
  private 
  def city_params
    params.permit(:name, :province, :population, :local_temperature)
  end
  
end

url = URI("https://community-open-weather-map.p.rapidapi.com/find?cnt=0&mode=null&lon=0&type=link%252C%20accurate&lat=0&units=imperial%252C%20metric&q=london")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-host"] = 'community-open-weather-map.p.rapidapi.com'
request["x-rapidapi-key"] = '10b3a40fb7mshd9e5b9d36c389b5p12226cjsn89d4b168f866'

response = http.request(request)
puts response.read_body
 
require 'uri'
require 'net/http'
require 'openssl'

url = URI("https://community-open-weather-map.p.rapidapi.com/climate/month?q=Gaspe")

http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = OpenSSL::SSL::VERIFY_NONE

request = Net::HTTP::Get.new(url)
request["x-rapidapi-host"] = 'community-open-weather-map.p.rapidapi.com'
request["x-rapidapi-key"] = '10b3a40fb7mshd9e5b9d36c389b5p12226cjsn89d4b168f866'

response = http.request(request)
puts response.read_body 

require 'net/http'
require 'json'

url = 'https://api.spotify.com/v1/search?type=artist&q=tycho'
uri = URI(url)
response = Net::HTTP.get(uri)
JSON.parse(response)


require 'httparty'

url = 'https://api.spotify.com/v1/search?type=artist&q=tycho'
response = HTTParty.get(url)
response.parsed_response