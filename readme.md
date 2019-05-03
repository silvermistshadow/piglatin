# _{Application Name}_

#### _Pig latin translator, 4-17-2019_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

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

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_Using the same consonant twice in a row at the start of a word will cause a loop. I'm looking into it._

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*MIT*
