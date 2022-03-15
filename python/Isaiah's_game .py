#intro

def gender_selector():
    print('Are you a Man or a Woman?')
    gender = input()
    if gender == 'man' or gender == 'Man' or gender == 'woman' or gender == 'Woman':
        gender = gender.capitalize()
        print(f'You have chosen {gender}.\n Press enter to continue...')
        input()
        return gender
    else:
        print(gender_selector())


def name_selector():
    print('What is your name?')
    name = input()
    name = name.capitalize()
    print(f'Hello {name}\nPress enter to continue...')
    input()
    return name

def race_selector():
    print(f'What is your race?\n<Human> <Elf> <Dwarf> <Orc>')
    race = input()

    if race == 'elf' or race == 'Elf' or race == 'human' or race == 'Human' or race == 'dwarf' or race == 'Dwarf' or race == 'orc' or race == 'Orc':
        race = race.capitalize()
        print(f'You have selected {race}.\nPress enter to continue...')
        input()
        return race


    else:
        print(race_selector())


def class_selector():
    print('What is your class?\n<Warrior> <Archer> <Mage> <Thief>')
    my_class = input()

    if my_class == 'warrior' or my_class == 'Warrior' or my_class == 'mage' or my_class == 'Mage' or my_class == 'archer'  or my_class == 'Archer' or my_class == 'thief' or my_class == 'Thief':
        my_class = my_class.capitalize()
        print(f'You have selected {race} {my_class}.\nPress enter to continue...')
        input()
        return my_class 

    else:
        print(class_selector())



def make_sure():
    print(f'{name} the {race} {my_class}.\nAre you sure this is who you want to be?')
    if input() == 'yes':
        print('And so our story begins\nPress enter to continue...')
        input()
    else:
        print(name_selector())


def choice1():
    print("You wake up in a jail cell.")
    print("As to who and what you are, you have no idea. From the bump on your head, it's assumed you've been knocked out, but you can't remember much beyond your name. One of side of the room is the door with a slot in it that you can look out of. In the corner is a pile of hay that you sleep on, in another is a bucket that's cleaned out once a day from... leavings..., and in another is a small puddle that has excess water for you to drink. On the opposite wall there are multiple carvings from the loose stones.")
    print('Press enter to contnue...')
    input()
    print("What do you do?\n<Approach the door>\n<Sift through the hay>\n<Investigate the wall>")
    


def choice2():
    choice = input()
    if race == 'Orc' and choice == 'approach the door':
        print("As you head to the door, you can hear some grunting and a few voices. When you look out, there are two pig-faced men with greenish skin. They aren't wearing armor, but you can tell they are guards. Orcs, like yourself. Usually not very bright. However, they do have great strength, as dim witted they usually are.")
        print("Press enter to continue...")
        input()
        print("What do you do?\n<Call one over>\n<Toss a small stone out>\n<Investigate my cell>")
    

    elif choice == 'approach the door':
        print("As you head to the door, you can hear some grunting and a few voices. When you look out, there are two pig-faced men with greenish skin. They aren't wearing armor, but you can tell they are guards. Orcs. From when you can remember, they are sentient, but not very bright. However, they do have great strength, as dim witted they are.")
        print('Press enter to contnue...')
        input()
        print("What do you do?\n<Call one over>\n<Toss a small stone out>\n<Investigate my cell>")

    elif choice == 'sift through the hay':
        print('Path not yet created...')   
        print("Press enter to continue...")  
        input()
        print("What do you do?\n")

    elif choice == 'investigate the wall':
        print('Path not yet created...')
        print("Press enter to continue...")
        input()
        print("What do you do?\n")
        




def choice3():
    choice = input()

    if choice == 'call one one over':
        print('Path not yet created...')
        print("Press enter to continue...")
        input()
        print("What do you do?\n")


        
    elif choice == 'toss a small stone out':
        print('Path not yet created...')
        print("Press enter to continue...")
        input()
        print("What do you do?\n")


    elif choice == 'investigate my cell':
        print("When you head back into the cell, you notice that the stones on the wall aren't exactly solid, but from what you can tell, taking them all out won't let you escape. Instead, it seems like they were jammed in certain ways to make it look like they wall was completely normal.")
        print("Press enter to continue...")
        input()
        print("What do you do?\n<Pull on the stones>\n<Investigate more of my cell>")


def choice4():
    choice = input
    if choice == 'pull on the stones':
        print("once You pry a few of the stones loose, you hide them under your haystack, in case one of the orcs turns to look into your cell. Behind one of the stones, you find a thin, folded piece of paper. While it's not in the best condition, it's still legible. There are other stones to pull still.")
        print('Press enter to contnue...')
        input()
        print("What do you do?\n<Read the paper>\n<Hide it in my boot and keep pulling stones>")


    elif choice == 'investigate more of my cell':
        print('Path not yet created...')
        input()
        print("What do you do?\n")


def choice5():
    choice = input
    
    if choice == 'read the paper':
        print('Path not yet created...')
        input()
        print("What do you do?\n")
        choice = input()


    elif choice == 'hide it in my boot and keep pulling stones':
        print('Path not yet created...')
        input()
        print("What do you do?\n")
        choice = input()







gender = gender_selector()
name = name_selector()
race = race_selector()
my_class = class_selector()
make_sure()
choice1()
choice2()
choice3()
choice4()
choice5()