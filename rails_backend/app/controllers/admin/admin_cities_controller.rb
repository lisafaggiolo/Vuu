class AdminController < ApplicationController
  http_basic_authenticate_with name: 'View', password: 'finder'
  
  def index
    @cities = City.order(id: :desc).all
  end
  
  def show
    @cities = City.count
  end
  
end