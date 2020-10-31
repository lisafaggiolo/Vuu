Rails.application.routes.draw do
  
  namespace :api do
    resources :users, only: [:index, :create, :show]
    resources :cities, only: [:index, :show, :create]
    resources :questions, only: [:index, :show]
    
    resources :results, only: [:index, :show] 
    
    resources :provinces do
      resources :cities, only: [:index, :show]
    end
  end
  
  # get '/api/users(/:id)', to: 'users#show'
  # get '/api/provinces(/:id)', to: 'provinces#show'
  # get '/api/cities(/:id)', to: 'cities#show'
  # get '/api/questions(/:id)', to: 'questions#show'
  
  
  # #routes for later lol
  # get '/about' => 'about#show'
  # get '/login' => 'sessions#new'
  # post '/login' => 'sessions#create'
  # get '/logout' => 'sessions#destroy'
  # get '/signup' => 'users#new'
  # post '/users' => 'users#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end