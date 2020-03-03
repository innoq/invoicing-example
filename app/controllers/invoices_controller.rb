class InvoicesController < ApplicationController
  def index
    # to_a is necessary here, otherwise map does not work
    @invoices = Invoice.all.to_a
  end
end
