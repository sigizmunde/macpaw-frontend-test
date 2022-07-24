# MacPaw Internship test task

Created on React

## Features

1. Custom crafted masonry layout on flex-box
2. Favourites id-s cashing to prevent database requests after adding/removing
   favs
3. Dark/light theme switch

## Known issues

1. When refreshing page with parameters wia browser refresh button it falls into
   an infinite loop (happens on deployed page only). 
2. Some images do not fit in frames properly
3. Select field does not allow filtering by keyboard typing
4. Duplicated request calls on components mount

## Known API issues

1. API doesn't delete votes despite returning 'SUCCESS' on request
2. Most breeds in database have empty 'origin' field (in fact the only exclusion
   — Affenpinscher and Afghan Hound)
3. Neither no interface to call the set of data including both images and
   favourite/vote id, nor any known way to request a set of certain images by
   the array of ids — this causes long timings on requesting the favorites and
   votes one by one.

## performed by Illya Bondar

Feel free to contact me via Telegram @iliyabinocular or +380687072531
