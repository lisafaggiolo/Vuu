Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index]
    resources :cities, only: [:index]
    resources :provinces, only: [:index]    
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

# /api/cities
# /api/cities/:city_name
#/api/pr