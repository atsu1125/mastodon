# frozen_string_literal: true

class RulePolicy < ApplicationPolicy
  def index?
    admin?
  end

  def create?
    admin?
  end

  def update?
    admin?
  end

  def destroy?
    admin?
  end
end
