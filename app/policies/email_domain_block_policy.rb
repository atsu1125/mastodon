# frozen_string_literal: true

class EmailDomainBlockPolicy < ApplicationPolicy
  def index?
    staff?
  end

  def create?
    staff?
  end

  def destroy?
    staff?
  end
end
