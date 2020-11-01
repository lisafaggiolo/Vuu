class Api::UsersController < ApplicationController  
  skip_before_action :authorized, only: [:new, :create]

  
  def index
    @users = User.all
    render json: @users, status: :ok
  end
 
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      render json {data: "User created succesfully"}
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end
  
  def update
    unless @user.update(user_params)
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def show
    respond_with User.find(params[:id])
  end
 
  def find_user
    @user = (User.find_by_username!(params[:_username] ||  User.find_by(id: session[:user_id]))  
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'User not found' }, status: :not_found
  end
  
  def favourite_cities
  end
    
  private
  def user_params
    params.require(:user)
          .permit(:name, :username,
                  :email, :password)
  
end

