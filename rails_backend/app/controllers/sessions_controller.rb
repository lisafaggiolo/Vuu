class SessionsController < ApplicationController
  
  skip_before_action :authorized, only: [:create]

  def create
     @user = User.find_by(email: params[:email])
     if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        render json: {message:"Logged in succesful", user:{name:@user.name, username:@user.username, id:@user.id, email:@user.email}
      else
         render json: {message:"Cannot log in"}
     end
  end

end