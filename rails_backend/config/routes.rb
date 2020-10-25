Rails.application.routes.draw do
  # root to: ''
  
  namespace :api do
    resources :users, only: [:index]
    resources :cities, only: [:index, :show]
    resources :provinces, only: [:index, :show]    
  end
  #routes for later lol
  # get '/about' => 'about#show'
  # get '/login' => 'sessions#new'
  # post '/login' => 'sessions#create'
  # get '/logout' => 'sessions#destroy'
  # get '/signup' => 'users#new'
  # post '/users' => 'users#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end