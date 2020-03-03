class Invoice < ApplicationRecord
  enum status: [:initial, :prepared, :awaiting_approval, :principal_approved, :sent, :paid, :cancelled, :deleted]

  # TODO: This should probably be a component
  def formatted_total_net_price
    ApplicationController.helpers.number_to_currency(total_net_price)
  end
end
