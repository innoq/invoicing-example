class CreateInvoices < ActiveRecord::Migration[6.0]
  def change
    create_table :invoices do |t|
      t.string "saleorder_number"
      t.string "cost_centre_name"
      t.string "customer_name"
      t.string "principal_name"
      t.bigint "approvals"
      t.bigint "approvals_needed"
      t.bigint "status"
      t.decimal "total_net_price", precision: 10, scale: 2
    end
  end
end
