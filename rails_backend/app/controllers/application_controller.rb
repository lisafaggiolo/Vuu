class ApplicationController < ActionController::API
  include ActionController::Helpers
  before_action :authorized
  helper_method :current_user
  helper_method :logged_in?
  
  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?  
    # !current_user.nil?
    true
  end
  
  def authorized
    render json: {error: 'not_authorized ??!?!?!?', user:session} unless logged_in?
  end
#   def not_found
#     render json: { error: 'not_found' }
#   end
  

#   def authorize_request
#     header = request.headers['Authorization']
#     header = header.split(' ').last if header
#     begin
#       @decoded = JsonWebToken.decode(header)
#       @current_user = User.find(@decoded[:user_id])
#     rescue ActiveRecord::RecordNotFound => e
#       render json: { errors: e.message }, status: :unauthorized
#     rescue JWT::DecodeError => e
#       render json: { errors: e.message }, status: :unauthorized
#     end
#   end

end
