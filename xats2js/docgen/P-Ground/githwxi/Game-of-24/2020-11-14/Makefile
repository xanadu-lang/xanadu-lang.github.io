######
#
# A simple Makefile
#
######
CAT=cat
CPF=cp -f
ECHO=echo
NODE=node
######
SHARE=./../../../../share
XANADU=./../../../../xanadu
XATS2JS="./../../../../bin/xats2js"
######
XATS2JS_PRELUDE=\
"$(SHARE)/runtime/xats2js_prelude.js"
XATS2JS_XATSLIB_LIBC=\
"$(SHARE)/runtime/xats2js_xatslib_libc.js"
######
######
test:: \
Game-of-24
Game-of-24:: ; \
$(CAT) Game-of-24.cats > Game-of-24_dats.js && \
$(CAT) $(XATS2JS_PRELUDE) >> Game-of-24_dats.js && \
$(XATS2JS) 1>/dev/null 2>&1 --output-a Game-of-24_dats.js -d ./Game-of-24.dats && $(NODE) Game-of-24_dats.js
######
#
# HX: for cleaning up
#
######
clean:: ; rm -f *~
######
cleanall:: clean
cleanall:: ; rm -f output
cleanall:: ; rm -f *_dats.js
######
###### end of [Makefile] ######
