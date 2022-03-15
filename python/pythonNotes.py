# How to find a value in a string
sentence = 'The quick brown dog jumped over the lazy dog.'

query_two = sentence.find('loo')
query = sentence.index('q')



print(query)
print(query_two)

query = 'dog' in sentence

if 'dog' in sentence:
    print(query)


print(query)

# How to replace a string
sentence = 'The quick brown dog jumped over the lazy dog.'

sentence = sentence.replace('quick', 'slow')


# How to add, remove, creat, and more in a list.
users = ['Kristine', 'Tiffany', 'Jordan']

users.insert(0, 'Anthony')

users.append('Fuck Her') # The append() method in python adds a single item to the existing list. It doesn't return a new list of items but will modify the original list by adding the item to the end of the list.

print([users[4]])

users[4] = 'Brayden'

print(users)

console:
['Kristine', 'Tiffany', 'Jordan']
['Anthony', 'Kristine', 'Tiffany', 'Jordan']
['Anthony', 'Kristine', 'Tiffany', 'Jordan', 'Fuck Her']
['Fuck Her']
['Anthony', 'Kristine', 'Tiffany', 'Jordan', 'Brayden']


# How to remove items in a list
users = ['Kristine', 'Tiffany', 'Jordan', 'Leann']

users.remove('Jordan')

popped_user = users.pop()

del users[0]


# Working with lists
users = ['Kristine', 'Tiffany', 'Jordan', 'Leann']

ids = [1, 2, 3, 4]

mixed_list = [42, 10.3, 'Altuve', users]

print(mixed_list)

user_list = mixed_list.pop()

print(mixed_list)
print(user_list)

nested_lists = [[123], [234], [345]]

print(nested_lists)

[42, 10.3, 'Altuve', ['Kristine', 'Tiffany', 'Jordan', 'Leann']]
[42, 10.3, 'Altuve']
['Kristine', 'Tiffany', 'Jordan', 'Leann']
[[123], [234], [345]]


# This is how you can sort and reverse sort a list in alphabetic order
tags = ['python', 'development', 'tutorials', 'code']

print(tags)

tags.sort()

print(tags)

tags.sort(reverse=True)

print(tags)

totals = [234, 1, 543, 2345]

totals.sort()

print(totals)
['python', 'development', 'tutorials', 'code']
['code', 'development', 'python', 'tutorials']
['tutorials', 'python', 'development', 'code']
[1, 234, 543, 2345]


# How to use join and create something that works like google search
uri = 'https://www.google.com/search?q='
tags = ['python', 'development', 'tutorial']
formatted_tags = '////'.join(tags)
query_uri = f'{uri}{formatted_tags}'

print(query_uri)

console:
https://www.google.com/search?q=python////development////tutorial


# How to flip a list so that it starts at the last index instead of the first
tags = [
  'python',
  'development',
  'tutorials',
  'code',
  'programming',
  'computer science'
]

tag_range = tags[::-1]

['computer science', 'programming', 'code', 'tutorials', 'development', 'python']


# How to sort a list
sale_prices = [
  100,
  83,
  220,
  40,
  100,
  400,
  10,
  1,
  3
]

sorted_list = sorted(sale_prices, reverse=True)

print(sorted_list)
print(sale_prices)

[400, 220, 100, 100, 83, 40, 10, 3, 1]
[100, 83, 220, 40, 100, 400, 10, 1, 3]


# How to slice lists
import math

sale_prices = [
  100,
  83,
  220,
  40,
  100,
  400,
  10,
  1,
  3
]

sorted_list = sorted(sale_prices)
num_of_sales = len(sorted_list)
half_slice = math.floor(num_of_sales/2)
first_sales_items = sorted_list[:half_slice]
last_sales_items = sorted_list[-(half_slice):]
median = sorted_list[half_slice:(half_slice + 1)]

print(sorted_list)
print(num_of_sales)
print(first_sales_items)
print(last_sales_items)
print(median)

[1, 3, 10, 40, 83, 100, 100, 220, 400]
9
[1, 3, 10, 40]
[100, 100, 220, 400]
[83]

tags = [
  'python',
  'development',
  'tutorials',
  'code',
  'programming',
  'python',
  'development',
  'tutorials',
  'code',
  'programming',
]

print(tags[1:4:2])

slice_obj = slice(1, 4, 2)

print(slice_obj.start)
print(slice_obj.stop)
print(slice_obj.step)

print(tags[slice_obj])

['development', 'code']
1
4
2
['development', 'code']


# How to add on to a list
tags = ['python', 'development', 'tutorials', 'code']

tags[-1] = 'programing'

tags.extend('programing')

tags.extend(['programing']) # Creats and ads on a new list

new_tags = tags + ['programing']

print(new_tags)

['python', 'development', 'tutorials', 'code', 'programing']


# How to build a list that generates a random vallue
import numpy as np

def weighted_lottery(weights):
    container_list = []

    for (name, weight) in weights.items():
        for _ in range(weight):
            container_list.append(name)

    return np.random.choice(container_list)

other_weights = {
        'winning': 1,
        'break_even': 2,
        'losing': 3
        }

print(weighted_lottery(other_weights))


# Example of the range function and how it works
sum = 0
i = 0
while i<10:
    sum = sum + i
    print sum
    i = i + 1

sum = 0
for i in range(10):
    sum = sum + id
    print(sum)


# How to make a dictionary
players = {
    "ss": "Correa",
    "2b": "Altuve",
    "3b": "Bregman",
    "DH": "Gattis",
    "OF": "Springer",
}

second_base = players['2b']
designated_hitter = players['DH']

print(designated_hitter)


# How to add a key and a value to a dictionary
teams = {
    "astros": ["Altuve", "Correa", "bregman"],
    "angels": ["Trout", "Pujols"],
    "Yankees": ["Judge", "Stanton"],
}

teams['red sox'] = ['price', 'betts']

print(teams)

{'astros': ['Altuve', 'Correa', 'bregman'], 'angels': ['Trout', 'Pujols'], 'Yankees': ['Judge', 'Stanton'], 'red sox': ['price', 'betts']}


# Fall back function. If it cant find waht you are looking for, instead of throughing an error it'll write what you tell it to instead
teams = {
    "astros": ["Altuve", "Correa", "bregman"],
    "angels": ["Trout", "Pujols"],
    "Yankees": ["Judge", "Stanton"],
    'red sox': ['price', 'betts'],
}

featured_team = teams.get('hello', 'No fucks givin')

print(featured_team)

console:
No fucks givin


# How to get a value or a key in a string
teams = {
  "astros" : ["Altuve", "Correa", "Bregman"],
  "angels":  ["Trout", "Pujols"],
  "yankees": ["Judge", "Stanton"],
  "red sox": ["Price", "Betts"],
}
 #this .value is the function that tells it to pull out the vallues. You can use .items and .keys to pull all the items or the keys as well
team_groupings = teams.value()
team_groupings = teams.items()
team_groupings = teams.keys()


#how to remove items in a dictionary. Pop gives the ability to return something you tell it to say if what it was looking to return is not there the same way the .get function works
teams = {
  "astros" : ["Altuve", "Correa", "Bregman"],
  "angels":  ["Trout", "Pujols"],
  "yankees": ["Judge", "Stanton"],
  "red sox": ["Price", "Betts"],
}

del teams['astros']
remove_team = teams.pop('nope bitch', 'no team found by that name')

print(teams)
print(remove_team)

console:
{'angels': ['Trout', 'Pujols'], 'yankees': ['Judge', 'Stanton'], 'red sox': ['Price', 'Betts']}
no team found by that name


# You can put multiple dictionaries inside of a list
teams = [
    {
        'astros': {
            '2B': 'Altuve',
            'SS': 'Correa',
            '3B': 'Bregman',
        }
    },
    {
         'angels': {
            'of': 'Trout',
            'dh': 'Rujols',
        }
    },
]

angels = teams[1].get('angels', 'Team not found')

print(list(angels.values())[1])


# How to print moltuple things on the same line and have it still look pritty
sales = {
    'google': 20,
    'facebook': 42,
    'twitter': 10,
    'offline': 12,
}

print('g ' + sales['google'] * '$')
print('f ' + sales['facebook'] * '$')
print('t ' + sales['twitter'] * '$')
print('o ' + sales['offline'] * '$')

console:
g $$$$$$$$$$$$$$$$$$$$
f $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
t $$$$$$$$$$
o $$$$$$$$$$$$


# Diference between a tuple, list, and dictionary
List: []
Dictionary: {}
Tuple: ()


# Un packing tequneek
post = ('Python Basics', 'Intro guide to python', 'Some cool python content')

# A tuple is unchangable while a list is changable
Tuple: immutable 
List: mutable

# Tuple unpacking
title, sub_heading, content = post

# Equivalent to Tuple unpacking
title = post[0]
sub_heading = post[1]
content = post[2]

print(title)
print(sub_heading)
print(content)

console:
Python Basics
Intro guide to python
Some cool python content

# If  you dont use a comma after a name of the object you are calling in a list, dictionary, or tuple, it will give you an error
post = ('Python Basics', 'Intro guide to python', 'Some cool python content')
# Like right here
post = post + ('published',)

# How to find an id
post = ('Python Basics', 'Intro guide to python', 'Some cool python content')
print(id(post))

console:
140154652579776

# How to add elements to a tuple
post = ('Python Basics', 'Intro guide to python', 'Some cool python content')
post = post + ('published',)

# How to Add Elements to a Tuple by Leveraging Re-Assignment
post = ('Python Basics', 'Intro guide to python', 'Some cool python content')

print(id(post))
print(id(post))

post += ('published',)

print(id(post))

title, sub_heading, content, status = post

print(title)
print(sub_heading)
print(content)
print(status)

# Working with Lists Nested in Tuples
post = ('Python Basics', 'Intro guide to python', 'Some cool python content')

post = ('Python Basics', 'Intro guide to Python', 'Some cool python content')

tags = ['python', 'coding', 'tutorial']

post += (tags,)

print(post[-1][1])

# How to slice in python
post = ('Python Basics', 'Intro guide to python', 'Some cool python content')
print(post[1::2])

# How convert a tuple into a list and back into a tuple
post = list(post)
post = tuple(post)

# Three Ways to Remove Elements from a Python Tuple
post = ('Python Basics', 'Intro guide to Python', 'Some cool python content', 'published')

# Removing elements from end
post = post[:-1]

# Removing elements from beginning
post = post[1:]

# Removing specific element (messy/not recommended)
post = list(post)
post.remove('published')
post = tuple(post)


# How to Use a Tuple as a Dictionary Key in Python
priority_index = {
  (1, 'premier'): [1, 34, 12],
  (1, 'mvp'): [84, 22, 24],
  (2, 'standard'): [93, 81, 3],
}

print(list(priority_index.keys())

console:
[(1, 'premier'), (1, 'mvp'), (2, 'standard')]


# How to murge two tuples together. Guide to Python's Zip Function
positions = ['2b', '3b', 'ss', 'dh']
players = ['Altuve', 'Bregman', 'Correa', 'Gattis']

scoreboard = zip(positions, players)

print(list(scoreboard))

console:
[('2b', 'Altuve'), ('3b', 'Bregman'), ('ss', 'Correa'), ('dh', 'Gattis')]


## A set in a list is unique. Even if used twice in the list it'll only be printed once.


# Introduction to the Python Set Data Structure
tags = {
  'python',
  'coding',
  'tutorials',
  'coding'
}

print(tags)

# Nope
print(tags[0])

query_one = 'python' in tags
query_two = 'ruby' in tags


#How to murge python sets
tags_one = {
  'python',
  'coding',
  'tutorials',
  'coding'
}

tags_two = {
  'ruby',
  'coding',
  'tutorials',
  'development'
}

# merged tags
merged_tags = tags_one | tags_two
print(merged_tags)

# tags in tags_one but not in tags_two
exclusive_to_tag_one = tags_one - tags_two
print(exclusive_to_tag_one)

# tags in tags_two but not in tags_one
exclusive_to_tag_two =  tags_two - tags_one
print(exclusive_to_tag_two)

# tags found in both tags_one and tags_two
universal_tags = tags_one & tags_two
print(universal_tags)


# How to build a function. Build an HTML Heading Generator Function in Python
def heading_generator(title, heading_type):
    return f'<h{heading_type}>{title}</h{heading_type}>'

print(heading_generator('Greeting', '1'))

print(heading_generator('Hi there', '3'))

console:
<h1>Greeting</h1>
<h3>Hi there</h3>


# How to work with for loops. How to Implement Python Loops for Lists, Tuples, and Dictionaries
players = ['Altuve', 'Bregman', 'Correa', 'Gattis']

for player in players:
    print(player)

console:
Altuve
Bregman
Correa
Gattis

players = {
  '2b': 'Altuve',
  '3b': 'Bregman',
  'ss': 'Correa',
  'dh': 'Gattis'
}

for position, player in players.items():
  print('Position', position)
  print('Player', player)

console:
Position 2b
Player Altuve
Position 3b
Player Bregman
Position ss
Player Correa
Position dh
Player Gattis


# How to loop through characters in a python string
alphabet = 'abcdef'

for letter in alphabet:
    print(letter)

console:
a
b
c
d
e
f


# Guide to Looping Over Ranges in Python. 
for num in range(1, 10):
  print(num)

#The third number makes the for loop skip every other second number. If you changed it to 3 it would skip every third
for num in range(1, 10, 2):
  print(num)

console:
1
2
3
4
5
6
7
8
9# first print ends here
1 
3
5
7
9

# Guide to Continue and Break in Python Loops
usernames = [
  'jon',
  'tyrion',
  'theon',
  'cersei',
  'sansa',
]

for username in usernames:
  if username == 'cersei':
    print(f'Sorry, {username}, you are not allowed')
    continue
  else:
    print(f'{username} is allowed')

for username in usernames:
  if username == 'cersei':
    print(f'{username} was found at index {usernames.index(username)}')
    break
  print(username)

console:
jon is allowed
tyrion is allowed
theon is allowed
Sorry, cersei, you are not allowed
sansa is allowed# First print ends here
jon
tyrion
theon
cersei was found at index 3


##The ddiference between a while loop and a for loop is that the for loop will stop by itself and the while loop will go on for ever


# How to use while loops and build a guessing game. This will literally let you play a little game and the game wont stop running until you have guessed correctly.
def guessing_game():
    while True:
        print('What is your guess?')
        guess = input()

        if guess == '42':
            print('You correctly guessed it!')
            return False
        else:
            print(f'No, {guess} is not the answer, please try again\n')

guessing_game()

console:
What is your guess?
5
No, 5 is not the answer, please try again

What is your guess?
42
You correctly guessed it!


# How to Combine and Flatten Lists in Python with the For / In Loop
legacy_customers = ['Alice', 'Bob']
new_customers = ['Tiffany', 'Kristine']

raw_db = [legacy_customers, new_customers]

print(raw_db)

for legacy_customer in legacy_customers:
  new_customers.append(legacy_customer)

print(new_customers)

console:
[['Alice', 'Bob'], ['Tiffany', 'Kristine']] #End of first print
['Tiffany', 'Kristine', 'Alice', 'Bob']


# How to write for in loops on one line instead of a lot. Introduction to Using List Comprehension in Python 
num_list = range(1, 11)
cubed_nums = []

for num in num_list:
  cubed_nums.append(num ** 3)

cubed_nums = [num ** 3 for num in num_list]

print(cubed_nums)

even_numbers = []

for num in num_list:
  if num % 2 == 0:
    even_numbers.append(num)

even_numbers = [num for num in num_list if num % 2 == 0]

print(even_numbers)

console:
[1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
[2, 4, 6, 8, 10]


# How to use conditionals. Overview of Python Conditionals
age = 200

if age < 25:
    print(f"I'm sorry you need to be atleast 25 years old")
    
elif age > 100:
    print(f"Defently fuck you this time")

else:
    print(f"You're good to go, {age} fits in the range to rent a car")



# How to Use the Ternary Operator in Python Conditionals
role = 'guest'

auth = 'can access' if role == 'admin' else 'cannot access'

if role == 'admin':
  auth = 'can access'
else:
  auth = 'cannot access'

print(auth)

# Full List of Python Conditional Operators
List of comparison operators
== Equality
!= Inequality
<> Inequality (deprecated)
>  Greater than
>= Greater than or equal to
<  Less than
<= Less than or equal to


# How to Check if a Value is Included in a Python String or List
sentence = 'The quick brown fox jumped over the lazy Dog'
word = 'dog'

if word.lower() in sentence.lower(): #.lower tells it that if the word is upercased and it looking for the same word but not uppercased to still accept it.
  print('The word is in the sentence')
else:
  print('The word is not in the sentence')

nums = [1, 2, 3, 4]

if 3 in nums:
  print('The number was found')
else:
  print('The number was not found')


# How to Build Compound Conditionals in Python. Using and, or, and and not.
username = 'jonsnow'
email = 'jon@snow.com'
password = 'thenorth'

if (username == 'jonsnow' or email == 'jon@snow.com') and password == 'thenorth':
    print('Access accepted')
else:
    print('You shall die, yeah, prety great right!')

logged_in = True
standard_user = False

if logged_in and not standard_user:
    print('You can access the admin dashboard')
else:
    print('You can only access the standard dashboard')


# Globing. In this, each variable name is equal to the same object in the list. The * before two on line two makes that variable be equal to all the middle objects.
one, two, three = [1, 2, 3]
one, *two, three = [1, 2, 3, 4, 5]


# How to remove items in a list with a function
def remove_first_and_last(list_to_clean):
    _, *content, _ = list_to_clean
    return content

html_2 = ['<h1>', 'some content', 'more', '</h1>']

print(remove_first_and_last(html_2))

console:
['some content', 'more']


# How to print a full name with a function
def full_name(first, last):
    print(f'{first} {last}')


full_name('Lyle', 'Rogers')


# How to make an email and pasword function
def auth(email, pasword):
    if email == 'lylerogers8@gmail.com' and pasword == 'secret':
        print('Authorized')
    else:
        print('Well fuck you then!')


auth('lylerogers8@gmail.com', 'secret')


# How to use max value
def counter(max):
    for num in range(1, max_value):
        print(num)


counter(501)


# Another naming function
def full_name(first, last):
    return f'{first} {last}'


kristine = full_name('Lyle', 'Rogers')

def greeting(name):
    print(f'Hi {name}!')


greeting(kristine)


# Greeting name function
def greeting(first, last):
    def full_name():
        return f'{first} {last}'

    print(f'Hi {full_name()}!')


greeting('Lyle', 'Rogers')


# Guest is defalt if no name is provided
def greeting(name = 'Guest'):
  print(f'Hi {name}!')

greeting()
greeting('Kristine')


# A function with that prints the id.
def some_function(collection = []):
    collection.append(1)
    print(id(collection))
    return collection


print(some_function())


# How to Utilize Named Function Arguments in Python
def full_name(first, last):
  print(f'{first} {last}')


full_name('Kristine', 'Hudgens')
full_name(first = 'Kristine', last = 'Hudgens')
full_name(last = 'Hudgens', first = 'Kristine')


# Guide to Function Argument Unpacking in Python. *args is common in python. Putting * before a n argument makes it the argument for all items. Join takes a collection and turns them into a string
def greeting(time_of_day, *args):
  print(f"Hi {' '.join(args)}, I hope that you're having a good {time_of_day}")


greeting('Afternoon', 'Kristine', 'M', 'Hudgens')
greeting('Morning', 'Tiffany', 'Hudgens')


# Dobble astrisks in functions. I have no fucking clue what this does. Lol
def greeting(**kwargs):
  if kwargs:
    print(f"Hi {kwargs['first']} {kwargs['last']}, have a great day!")
  else:
    print('Hi Guest!')


greeting()
greeting(first = 'Kristine', last = 'Hudgens')


# How to Combine All Argument Types in a Single Python Function
def greeting(time_of_day, *args, **kwargs):
  print(f"Hi {' '.join(args)}, I hope that you're having a good {time_of_day}.")
  
  if kwargs:
    print('Your tasks for today are:')
    for key, val in kwargs.items():
      print(f"{key} => {val}")


greeting('Morning',
         'Kristine', 'Hudgens', # *args. Gets all the arguments after any natural argument. so this single argument could be used to define a hundred objects if you wanted.
         first = 'Empty dishwasher', #**kwargs are the next three lines. **kwargs gets all the key word arguments that a normal *arg wouldn't know what to do with.
         second = 'Take pupper out',
         third = 'math homework')


# Lambdas are like a variable that can store functions inside to be called on whenever.
full_name = lambda first, last: f'{first} {last}'

def greeting(name):
  print(f'Hi there {name}')


greeting(full_name('Lyle', 'Rogers'))


# FizBuzz. This will print a list from 1 to 100 and for every number divisable by 3 its going to replace it with fizz, every number divisible by 5 will be replaced with buzz, and every number divisable by 3 and 5 will be replaced with fizzbuzz.
def fizz_buzz(max_num):
  for num in range(1, max_num + 1):
    if num % 3 == 0 and num % 5 == 0:
      print('FizzBuzz')
    elif num % 3 == 0:
      print('Fizz')
    elif num % 5 == 0:
      print('Buzz')
    else:
      print(num)


fizz_buzz(100)


# Instead of importing a library you can imort just one function from that library and it'll be a lot cleaner.
import math 

math.sqrt(5)
# Or you can just do this and it'll be a lot simplure and cleaner because now you dont have to call the library before the function 
from math import sqrt

sqrt(5)

# Now you can call this library to us it as mat instead of math
import math as mat


# To install a librairy, go to the comand prompt, inside write pip install and then the name of the librairy. Just like this.
pip install requests
pip install inflection
pip install beautifulsoup4 


# Building a Web Scraper in Python. This one gives you some weird shit back like the names, sign up, and name of the app. But it doesnt look pritty and isnt in a nice order pluss has // these things every where.
import requests
from bs4 import BeautifulSoup
from inflection import titleize

r = requests.get('http://www.dailysmarty.com/topics/python')
r.text


soup = BeautifulSoup(r.text, 'html.parser')

soup

links = soup.find_all('a')

for link in links:
  print(link['href'])


# Other project solution of Building a Web Scraper in Python. This one actually works though lol.
import requests
from bs4 import BeautifulSoup
from inflection import titleize

def title_generator(links):
    titles = []

    def post_formatter(url):
        if 'posts' in url:
            url = url.split('/')[-1]
            url = url.replace('-', ' ')
            url = titleize(url)
            titles.append(url)


    for link in links:
        if link.get('href') == None:
            continue
        else:
            post_formatter(link.get("href"))


    return titles


r = requests.get('http://www.dailysmarty.com/topics/python')
soup = BeautifulSoup(r.text, 'html.parser')
links = soup.find_all('a')
titles = title_generator(links)

for title in titles:
    print(title)



# This is the location of my pipenv file 
C:\Users\enoch\.virtualenvs\Python_imports-LA03VsDU


# Classes in Python
class Invoice:
    
    def greeting(self):
        return 'Hi there'


inv_one = Invoice()
print(inv_one.greeting())

inv_two = Invoice()
print(inv_two.greeting())

console:
Hi there
Hi there


# Python's __init__ Constructor Function
class Invoice:
    def __init__(self, client, total):
        self.client = client
        self.total = total

    def formatter(self):
        return f'{self.client} owes: ${self.total}'


google = Invoice('Google', 100)
snapchat = Invoice('SnapChat', 200)

print(google.formatter())
print(snapchat.formatter())

console:
Google owes: $100
SnapChat owes: $200


# How to Get and Set Data in a Python Class
class Invoice:
    def __init__(self, client, total):
        self.client = client
        self.total = total

    def formatter(self):
        return f'{self.client} owes: ${self.total}'


google = Invoice('Google', 100)

print(google.total)

google.client = 'Yahoo'

print(google.client)

console:
100
Yahoo


# If you want a verable to be protected and accedentaly used somewhere else then put an _ before the name.
self._client = client


# How to Work with Python Properties and Decorators
class Invoice:
    def __init__(self, client, total):
        self._client = client
        self._total = total

    def formatter(self):
        return f'{self._client} owes: ${self._total}'

    @property
    def client(self):
        return self._client

    @client.setter
    def client(self, client):
        self._client = client

    @property
    def total(self):
        return self._total


google = Invoice('Google', 100)

print(google.client)

google.client = 'Yahoo'

print(google.client)


# The diference between repr and str in these functions is that repr is used for more of a messy but derect way to write strings and str is a cleaner better to wread way of writing strings.
class Invoice:
  def __init__(self, client, total):
    self.client = client
    self.total = total

  def __str__(self):
    return f"Invoice from {self.client} for {self.total}"

  def __repr__(self):
    return f"Invoice <value: client: ({self.client}, {self.total}>)"


inv = Invoice('Google', 500)
print(str(inv))
print(repr(inv))

console:
Invoice from Google for 500
Invoice <value: client: (Google, 500>)


# How to Build a Custom Iterator Class in Python
class Lineup:
    def __init__(self, players):
        self.players = players
        self.last_player_index = (len(self.players) - 1)

    def __iter__(self):
        self.n = 0
        return self

    def get_player(self, n):
        return self.players[n]

    def __next__(self):
        if self.n < self.last_player_index:
            player = self.get_player(self.n)
            self.n += 1
            return player
        elif self.n == self.last_player_index:
            player = self.get_player(self.n)
            self.n = 0
            return player


astros = [
  'Springer',
  'Bregman',
  'Altuve',
  'Correa',
  'Reddick',
  'Gonzalez',
  'McCann',
  'Davis',
  'Tucker'
]

astros_lineup = Lineup(astros)
process = iter(astros_lineup)

print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))
print(next(process))

console:
Springer
Bregman
Altuve
Correa
Reddick
Gonzalez
McCann
Davis
Tucker
Springer
Bregman
Altuve
Correa


# Overview of Iterators vs Generators in Python
class InfiniteLineup:
    def __init__(self, players):
        self.players = players

    def Lineup(self):
        lineup_max = len(self.players)
        idx = 0

        while True:
            if idx < lineup_max:
                yield self.players[idx]
            else:
                idx = 0
                yield self.players[idx]

            idx += 1
        
    def __repr__(self):
        return f'InfiniteLineup({self.players})'

    def __str__(self):
        return f'InfiniteLineup with the players: ({self.players})'


astros = [
  'Springer',
  'Bregman',
  'Altuve',
  'Correa',
  'Reddick',
  'Gonzalez',
  'McCann',
  'Davis',
  'Tucker'
]


full_lineup = InfiniteLineup(astros)
astros_lineup = full_lineup.Lineup()

print(next(astros_lineup))
print(next(astros_lineup))
print(next(astros_lineup))
print(next(astros_lineup))
print(next(astros_lineup))
print(next(astros_lineup))
print(next(astros_lineup))
print(next(astros_lineup))

print(repr(astros_lineup))
print(str(astros_lineup))

console:
<generator object InfiniteLineup.Lineup at 0x7fa27a1dac80>
<generator object InfiniteLineup.Lineup at 0x7fa27a1dac80>


# Class vs Instance Attributes in Python. __dict__ formats what is printed to look like a dictionary.
# This one alows you to write whatever you want and call the class on it. So it's more flexable than the bottom one.
class Website:
  def __init__(self, title):
    self.title = title


ws = Website('My Website Title')
print(ws.__dict__)

ws_two = Website('My Second Title')
print(ws_two.__dict__)

# This one you can only call on the class and the text is already hard coded.
class DifferentWebsite:
  title = 'My Class Title'

dw = DifferentWebsite()
print(dw.title)

dw_two = DifferentWebsite()
print(dw_two.title)

console:
{'title': 'My Website Title'}
{'title': 'My Second Title'}
My Class Title
My Class Title


# Inheritance in Python. Sence the class AdminUser is inheriting the class User, AdminUser now has access to both classes while User only has access to User.
class User:
    def __init__(self, email, first_name, last_name):
        self.email = email
        self.first_name = first_name
        self.last_name = last_name

    def greeting(self):
        return f'Hi {self.first_name} {self.last_name}'


class AdminUser(User):
    def active_users(self):
        return '500'


tiffany = AdminUser('lylerogers8@gmail.com', 'Lyle', 'Rogers')

fukIsaiah = User('fuckhim.com', 'fuckIsaiah', 'Yeah definitly fuck him.')

print(tiffany.active_users())
print(fukIsaiah.greeting())

console:
500
Hi fuckIsaiah Yeah definitly fuck him.


# Using Polymorphism to Build an HTML Generator in Python
class Html:
    def __init__(self, content):
        self.content = content

    def render(self):
        raise NotImplementedError("Subclass must implement render method")

        
class Heading(Html):
    def render(self):
        return f'<h1>{self.content}</h1>'


class Div(Html):
    def render(self):
        return f'<div>{self.content}</div>'


tags = [
    Div('Fuck life'),
    Heading('I hate headings'),
    Div('Fuck those divs')
]

for tag in tags:
    print(tag.render())


# Building Polymorphic Functions in Python
class Heading:
    def __init__(self, content):
      self.content = content

    def render(self):
      return f'<h1>{self.content}</h1>'

class Div:
    def __init__(self, content):
        self.content = content

    def render(self):
        return f'<div>{self.content}</div>'

div_one = Div('Fuck life')
heading = Heading('I hate headings')
div_two = Div('Fuck those divs')

def html_render(tag_object):
    print(tag_object.render())

html_render(div_one)
html_render(heading)
html_render(div_two)

console:
<div>Fuck life</div>
<h1>I hate headings</h1>
<div>Fuck those divs</div>


# How to build a file in python. The function open will open a file with name or given or else it'll creat a new file with that same name.
file_builder = open("logger.txt", "w+")

file_builder.write("Im not in this file. Im in the other one")

file_builder.close()


# How to build a file that has a thousand lines and on each line it sais "Im on line{whatever line its on}" for no fucking reason.
file_builder = open("logger.txt", "w+")

for i in range(1000):
    file_builder.write(f"I'm on line {i + 1}\n")

file_builder.close()


# Using Regular Expressions to List File Types in Python. This will find the files listed in the derectory given and ad text to the begging of them. the os.listdir('.') is to look for the derectory. If you are looking for the same derectory you are in then put a dot '.' 
import fnmatch
import os

def list_files():
    for file in os.listdir('.'):
        if fnmatch.fnmatch(file, "*.txt"): # This to grab all the lists with .txt at the end and the * is to say that you dont care what comes before so you assentialy grab every txt file.
            print('Text Files:', file)

        if fnmatch.fnmatch(file, "*.rb"):
            print('Ruby Files:', file)

        if fnmatch.fnmatch(file, "*.yml"):
            print('Yaml Files:', file)

        if fnmatch.fnmatch(file, "*.py"):
            print('Python Files:', file)

list_files()


# Build a Pretty Price Method in Python
def pretty_price(gross_price, extension):
    if isinstance(extension, int):
        extension = extension * 0.01
    return int(gross_price) + extension# int combines both numbers together wierdly

print(pretty_price(3.50, 0.95))
print(pretty_price(40.50, 21))

console:
3.95
40.21


# How to build a function that gets the average of a list of numbers
from functools import reduce
def get_average(num_list):
    total = reduce(
        (lambda total, element: total + element),
        num_list)


    return total / len(num_list)

num_list = [1, 2, 3, 4, 15, 6]
print(get_average(num_list))























































































