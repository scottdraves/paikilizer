# paikilizer
video riot

by [Scott Draves](http://ScottDraves.com), 2012, NYC

Published in Google's [Chrome Experiments](https://www.chromeexperiments.com/experiment/the-paikilizer),
and then licensed to Skrillex, Diplo, Grimes, Pretty Lights etc for their 2012 summer tour web site the *Full Flex Express*.

Thanks to [Alexander Chen](http://chenalexander.com) and
[Josh Goldberg](http://www.goldbergs.com/) for their ideas an inspiration.

The effect is based on video feedback implemented with WebGL and its
shading language, which means most of the work is done on your GPU.
The videos are in WebM format which works on Chrome and Firefox.

Besides the presets, click to open the controls then paste in the URL
of any video from YouTube to change the source.  Then adjust the
parameters to get it looking good.  Then click on "share" and send the
URL anywhere to reproduce what you see. (Note youtube changed the API so this no longer works, just the 8 preset videos.)

Basically it combines luma key with a feedback layer transformed with
scale-rotate-translate and mirror tiling.  The scale and rotation are
connected to the mouse, but if you don't move the mouse for a while,
then they get adjusted automatically.
