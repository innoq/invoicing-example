namespace :import do
  desc "Import invoices"
  task invoices: :environment do
    Invoice.destroy_all
    100.times do
      approvals_needed = Faker::Number.within(range: 1..10)
      approvals = Faker::Number.within(range: 1..approvals_needed)

      Invoice.create(
        saleorder_number: fake_saleorder_number,
        cost_centre_name: Faker::Company.catch_phrase,
        customer_name: Faker::Company.name,
        principal_name: Faker::Name.name,
        approvals: approvals,
        approvals_needed: approvals_needed,
        status: "awaiting_approval",
        total_net_price: Faker::Number.decimal(r_digits: 2)
      )
    end
  end

  def fake_saleorder_number
    "D#{Faker::Number.number(digits: 2)}.#{Faker::Number.number(digits: 2)}.#{Faker::Number.number(digits: 4)}"
  end
end
