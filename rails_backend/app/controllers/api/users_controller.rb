class Api::UsersController < ApplicationController
  before_action :authorize_request, except: :create
  before_action :find_user, except: %i[create index]
  
  def index
    @users = User.all
    render json: @users, status: :ok
  end
 
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  def show
    respond_with User.find(params[:id])
  end
  
  private
  def users_params
    params.permit(:first_name, :last_name, :email, :password)
  end
  
end

