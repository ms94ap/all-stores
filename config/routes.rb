Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root to: "home#index"
resources :stores
resources :categories
resources :comments
end
