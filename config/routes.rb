Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [ :create, :destroy, :show ]
    resources :photos, only: [:create, :index, :show, :destroy, :update] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:show, :update, :destroy]
    resources :follows, only: [:create, :destroy]
    get '/feed', to: 'photos#index_feed'
  end
end
