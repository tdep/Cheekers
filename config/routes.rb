Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/tiles', to: 'tiles#index'
  get '/tiles/:id', to: 'tiles#show'
  patch '/tiles/:id', to: 'tiles#update'

  get '/pieces', to: 'pieces#index'
  patch '/pieces/:id', to: 'pieces#update'
end
