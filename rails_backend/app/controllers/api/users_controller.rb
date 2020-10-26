class Api::UsersController < ApplicationController
  
  def index
    @users = User.order(created_at: :desc)
    render json: @users
  end
 
  def create
    respond_with User.create(user_params)
  end

  def show
    respond_with User.find(params[:id])
  end
  
  private
  def users_params
    params.permit(:first_name, :last_name, :email, :password)
  end
  
end

