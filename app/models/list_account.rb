# frozen_string_literal: true
# == Schema Information
#
# Table name: list_accounts
#
#  id         :bigint(8)        not null, primary key
#  list_id    :bigint(8)        not null
#  account_id :bigint(8)        not null
#  follow_id  :bigint(8)
#

class ListAccount < ApplicationRecord
  belongs_to :list
  belongs_to :account

  validates :account_id, uniqueness: { scope: :list_id }

  private

end
