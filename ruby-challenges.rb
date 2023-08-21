# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
# filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def words_with_target_letter(words_array, target_letter)
    filtered_words = []
  
    words_array.each do |word|
      if word.include?(target_letter)
        filtered_words.push(word)
      end
    end
  
    return filtered_words
  end


beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
result_o = words_with_target_letter(beverages_array, filter_letter_o)
puts result_o.inspect

# Pseudo code:
#define a function that takes two parameters
#Initialize an empty array (this will holds words that contain target letter)
#each method will loop through each word
#use .include method (to see if word contains the target letter)
#return filtered_words array (contains words included in the target letter)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


def hash_values_in_alphabetical_order(hash)
    values = hash.values.flatten.sort
    return values
  end
  
  us_states = { 
    northwest: ['Washington', 'Oregon', 'Idaho'], 
    southwest: ['California', 'Arizona', 'Nevada'], 
    notheast: ['Maine', 'New Hampshire', 'Rhode Island'] 
  }
  
  result = hash_values_in_alphabetical_order(us_states)
  puts result.inspect
  



# Pseudo code:
# define a function that takes in parameter hash
# Initialize empty array that will hold values from nested arrays
# iterate through each value array in the hash using each method
# use .push method to flatten the nested arrays
# use .sort method to sort alphabetically 
# return the values 


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model, wheels = 2, current_speed = 0)
      @model = model
      @wheels = wheels
      @current_speed = current_speed
    end
  
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
  end
  
 
  my_bike = Bike.new('Trek')
  puts my_bike.bike_info
  

# Pseudo code:
# define class Bike
# create initialize method that takes 3 parameters
# set instance variables
# define method bike_info
# return formatted string with bike info using instance variables

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(model, wheels = 2, current_speed = 0)
      @model = model
      @wheels = wheels
      @current_speed = current_speed
    end
  
    def bike_info
      "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
  
    def pedal_faster(amount)
      @current_speed += amount
    end
  
    def brake(amount)
        @current_speed = [@current_speed - amount, 0].max
    end
  end
  
  
  puts my_bike.pedal_faster(10)
  puts my_bike.pedal_faster(18)
  puts my_bike.brake(5)
  puts my_bike.brake(25)
  
# Pseudo code:
# define class bike
# create and initializemethod that takes 3 parameters
# set instance variables 
# define method bike_info
# return formatted string with bike info using instance 
# define method pedal_faster that takes 1 parameter
# calculate new speed by subtracting amount from current_speed
# set current_speed to max of new_speed and 0
