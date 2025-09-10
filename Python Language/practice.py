# a = 50
# b = 20

# print((a == b) or (a > b))

# male = True
# female = False

# print(male and female)

# a = "3"
# b = 5
# c = 3.44
# d = int(a)

# print(d+b+c)

# name = input("Enter your name:")
# print("Welcome,", name)

# userName = "____.manishhhh"
# password = "chandana0197"
# phoneNo = 9353038235
# email = "manishce3@gmail.com"
# email1 = email.count("a")
# print(email1)

# light = "green"

# if (light == "red"):
#     print("WAIT")
# elif (light == "orange"):
#     print("READY")
# elif(light == "green"):
#     print("GO")
    
# marks = int(input("Enter your marks :"))

# if (marks >= 95):
#     print("A+")
# elif(marks >= 85):
#     print("A")
# elif(marks >= 75):
#     print("B+")
# elif(marks >= 60):
#     print("B")
# elif(marks >= 45):
#     print("C+")
# else:
#     print("Fail")

# age = 2

# if (age >= 18):
#     if(age >= 80):
#         print("Cannot Drive")
#     else:
#         print("Can Drive")
# else:
#     print("Cannot Drive")    

# num = 849374

# if(num%2 == 0):
#     print("The number is Even")
# else:
#     print("The number is odd")

# num = 700

# if (num%7 == 0):
#     print("7")
# else:
#     print("not 7")

# a = 1222222222
# b = 3333333333
# c = 6553333333

# if (a > b and a > c):
#     print("a is greater")
# elif(b > a and b > c):
#     print("b is greater")
# else:
#     print("c is greater")

# List and Tuple

# marks = [34, 59, 98, 23, 45, 54]
# # marks.append("manish")
# marks.remove(34)
# print(marks)
# print(type(marks))

# name = "manishce3"
# rname = name[::-1]
# print(rname)

# grade = ["vini", "nishi", "sanj"]
# grade.sort()
# grade.append("chandana")
# print(grade)

# dict = {
#     "name" : "Manish",
#     "Age" : 18,
#     "Sex" : "Male"
# }
# print(dict["name"])
# print(dict["Age"])

# dict1 = {}
# dict1["name"] = "manish"
# print(dict1)

# info = {
#     "name" : "Manish K",
#     "marks" : {
#         "phy" : 80,
#         "chem" : 90,
#         "math" : 100,
#         "bio" : 100
#     },
#     "Age" : 18,
#     "College" : "MMPU"
# }

# info["total"] = "99%"
# print(info)

# sets = set()
# sets.add(1)
# sets.add("Chandana")
# sets.remove("Chandana")
# print(sets)
# print(len(sets))

# set1 = {1,2,3,4}
# set2 = {3,4,5,6}

# print(set1.intersection(set2))

# subjects = {
#     "python", "java", "python", "chma", "cn", "dbms","java", "fsd","chma", "cn", "dbms"
# }
# print(len(subjects))

a = int(input("Enter a word : "))
b = a[::-1]
print(b)