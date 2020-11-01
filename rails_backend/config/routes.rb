Rails.application.routes.draw do
  
  # get 'authorized', to: 'sessions#page_requires_login' 
  # post '/auth/login', to: 'authentication#login'
  # get '/*a', to: 'application#not_found'
  
  namespace :api do
    
    resources :cities, only: [:index, :show]
    resources :questions, only: [:index, :show] 
    resources :results, only: [:index, :show, :create]

    resources :users, only: [:new, :create]
    resources :provinces do
      resources :cities, only: [:index, :show]
    end
    
  end
  
  resources :admin do
    resources :cities, only: [:update, :create]
    resources :provinces, only: [:update]
  end
  
  # #routes for later lol
  post 'auth/login' => 'sessions#create'
  get 'auth/logout' => 'sessions#destroy'
  post 'auth/users' => 'users#create'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end