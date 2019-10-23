# Sesame Street Fighter TAS
Javascript "TAS" for Sesame Street Fighter

# To run
- Load https://flavourmachine.com/sesamefighter/
- Copy paste everything in TAS.js into your browser console and hit enter (this could do sketchy stuff so maybe read the js first if you don't trust me)

# How it works
Since there is no real penalty for getting characters wrong, I just spam a sequence of characters that contains all the correct possible inputs. This could just be all the words for each difficulty level put together, but it can be a bit better by overlapping words, so instead of having the three words `air`, `river` and `erosion` as `airrivererosion` I have `airiverosion` to save a few characters overlap that I don't have to input.

These full strings can be seen in the TAS.js file and the idea (and generation of the strings) was taken from tom7's portmantout code.
http://tom7.org/portmantout/
https://sourceforge.net/p/tom7misc/svn/HEAD/tree/trunk/portmantout/
https://www.youtube.com/watch?v=QVn2PZGZxaI

The rest of the logic is just timing and menuing, it beats the game in 17 seconds using ingame time.
Non-TAS leaderboards are at https://www.speedrun.com/Sesame_Street_Fighter (current WR as of time of writing is 24 seconds)

Note that you don't actually have to type full correct words, simply re-inputting the first character of the word that is shown gives you points, and that is how the human WR is done.

# TODO
- record a video
- make a post on tasvideos requesting a category
- make it so characters only use the correct difficulty set
- probably need some appropriate way to actually inject the commands so it's reproducible without manually copy-pasting js
