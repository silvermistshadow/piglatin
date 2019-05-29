# _Pig Latin Translator_

#### _Pig latin translator, 5-29-2019_

#### By _**BM**_

## Description

_Translates a single word into Pig Latin. While the word can contain numbers and special characters, these will generally be ignored or cause incorrect results, as the app only checks for a vowel being the first letter, and then one other special case. Entering only special characters and/or numbers will result in no output._

Specs:
  The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
    Example Input: 3
    Example Output: 3
  The program adds "way" to words beginning with a vowel.
    Example Input: i
    Example Output: iway
  For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
    example input: they
    example output: eythay
  Words beginning with y have y treated as a consonant.
    Example input: y
    example output: yay
  If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
    Example input: squeal
    example output: ealsquay

## Setup/Installation Requirements

* _Load site_
* _Input ONE word, must not contain numbers_
* _Translate!_


## Known Bugs

_None at the moment._



## Technologies Used

_JavaScript_

### License

*MIT*
