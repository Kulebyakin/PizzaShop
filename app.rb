require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
  erb 'Can you handle a '
end

