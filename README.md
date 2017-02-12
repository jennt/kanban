# Kanban

*under development*

## Synopsis

To do list

## Code Example
```ruby   
post '/api/task' do
  task = Task.create(
    title: params[:title],
    status: params[:status],
    priority: params[:priority]
  ).to_json
end
  ```

## Motivation
Purposes for developing this program include:
  * To practice designing and building REST architecture
  * To practice designing and building REST APIs with Sinatra
  * Design and build a data-driven JavaScript UI w/ Ajax

## Authors
* Jenn Tustin
