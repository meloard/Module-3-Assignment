# Pseudocoding Challenge #3

-I need to ask my user how many characters should the password be?
-How do I ask that question? Is there some type of popup/prompt/etc? (google popup on browser, JS)
-I need the user to relog the value if the character is LESS than 8 or GREATER than 128
    => IF (password character is LESS THAN 8) {TELL THE USER TO PUT IN A LONGER PASSWORD?}
    =>IF (password character is GREATER THAN 128) {TELL THE USER TO PUT IN A SHORTER PASSWORD}

## If all goes well up top
-I need to ask the user what kind of inputs you want. Numbers? Special characters? Lowercase? Uppercase?
HOW DOES my computer know what a number is? What special characters? What's lowercase? What's uppercase?
-Do I need some type of STORAGE for each of these values?
-> IF (USER PICKS SPECIAL CHARACTERS) {
    THEY NEED TO USE THE STORAGE WITH SPECIAL CHARACTERS
} x3

### After grabbing whatever values / characters the user wants
- THE KEY THING HERE IS THAT THE PASSWORD VALUE IS **RANDOMIZED** AND **IT MATCHES THE LENGTH THAT THE USER ASKED FOR**
- Is there a way to RANDOMIZE the different values we pull from the STORAGES above?
- Is there anything that we learned that could theoretically know how many times the particular line of logic should run based on the length that the user asked for?
** WE NEED TO DISPLAY THAT RANDOMIZED VALUE TO THE PAGE (This part is already written for you in the starter code)