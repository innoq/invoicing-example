Rails.application.routes.draw do
  resources :invoices, only: [:index]
  root to: redirect('/invoices')
end
