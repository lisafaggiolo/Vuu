
Rails.application.routes.draw do
  
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  
  namespace :api do
   
    resources :cities, only: [:index, :show]
    resources :questions, only: [:index, :show] 
    resources :results, only: [:index, :show, :create]

    resources :provinces do
      resources :cities, only: [:index, :show]
    end

  end

  resources :admin do
    resources :cities, only: [:update, :create]
    resources :provinces, only: [:update]
  end

end # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
