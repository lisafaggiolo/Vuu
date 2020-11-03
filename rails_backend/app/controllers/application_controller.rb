class ApplicationController < ActionController::API
  include ActionController::Helpers
  
  before_action :authorized
  helper_method :current_user
  helper_method :logged_in?
  
  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    true
  end
  
  def authorized
    render json: {error: 'not_authorized ??!?!?!?', user:session} unless logged_in?
  end
   
end

