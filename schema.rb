require_relative 'environment'

class CreateTasksTable < ActiveRecord::Migration[5.0]

  def up
    puts 'creating tasks table'

    create_table :tasks do |t|
      t.string :title
      t.string :status
      t.string :priority
    end

    puts 'created tasks table'
  end

  def down
    puts 'dropping tasks table'

    drop_table :tasks

    puts 'dropped tasks table'
  end

end

def main
  action = (ARGV[0] || :up).to_sym

  CreateTasksTable.migrate(action)
end

main if __FILE__ == $PROGRAM_NAME
