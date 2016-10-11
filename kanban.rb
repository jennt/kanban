require 'sinatra'
require_relative 'task'
require_relative 'environment'

before do
  content_type :json
end

after do
  ActiveRecord::Base.connection.close
end
                  #search for ALL tasks
get '/api/tasks' do
  tasks = Task.all
  return tasks.to_json
end
                  #search for a task(by id? title? status? priority?)
get '/api/task/' do
  task = Task.where(id: params[:id])
  return task.to_json
end

                  #make a task (needs title at least...status, priority)
post '/api/task' do
  task = Task.create(
    title: params[:title],
    status: params[:status],
    priority: params[:priority]
  ).to_json
end

                  #update task by id(change title, status, or priority)
                  #what if you don't know the id
put '/api/task' do
  task = Task.where(id: params[:id])
  task.update(
    title: params[:title],
    status: params[:status],
    priority: [:priority]
  ).to_json

end

                #delete task(by id)
                #or by title, status, priority
delete '/api/task' do
  task = Task.find_by(id: params[:id])
  task.destroy

end
