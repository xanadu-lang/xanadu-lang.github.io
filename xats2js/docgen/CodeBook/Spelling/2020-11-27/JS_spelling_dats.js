function
JS_spelling_arg0()
{
    return document.getElementById("JS_spelling_arg0").value;
}
function
JS_spelling_arg1()
{
    return document.getElementById("JS_spelling_arg1").value;
}
function
JS_spelling_dict()
{
    return document.getElementById("JS_spelling_dict").innerText;
}

function
JS_spelling_call()
{
//
ATS_spelling_call();
//
let output =
XATS2JS_the_print_store_join();
XATS2JS_the_print_store_clear();
alert(output);
JS_spelling_output.innerHTML = output;
}
/* ****** ****** */
// XATS2JS_PRELUDE
/* ****** ****** */

'use strict';

/* ****** ****** */
/*
Runtime for Xats2js
*/
/* ****** ****** */
const
XATS2JS_nil = null
const
XATS2JS_top = null
const
XATS2JS_none = null
const
XATS2JS_null = null
const
XATS2JS_void = null
/* ****** ****** */
function
XATS2JS_fnull
  (    )
{
throw new Error();
}
/* ****** ****** */
var // global
XATS2JS_excbas = 0
var // global
XATS2JS_exctag = 0
function
XATS2JS_new_exctag
  (    )
{
let bas0 =
XATS2JS_excbas;
let tag1 =
XATS2JS_exctag + 1;
XATS2JS_exctag = tag1;
return ( bas0 + tag1 );
}
/* ****** ****** */
function
XATS2JS_char
  ( cs )
{
// cs: singleton
return cs.charCodeAt(0);
}
function
XATS2JS_string
  ( cs )
{
return cs;//cs:JS_string
}
/* ****** ****** */
function
XATS2JS_fcast
  ( x0 )
{
return x0; //obj: object
}  
/* ****** ****** */
//
function
XATS2JS_raise
  ( exn )
{
  throw exn;//no return!
}
function
XATS2JS_reraise
  ( exn )
{
  throw exn;//no return!
}
/* ****** ****** */
//
function
XATS2JS_assert
  ( b0 )
{
if
(!b0)
{
  // [b0] is false
  throw new Error();
} // if-then
return ; // [b0] is true
}
//
function
XATS2JS_assertloc
  ( b0, loc )
{
if
(!b0)
{
  // [b0] is false
  throw new Error(loc);
} // if-then
return ; // [b0] is true
}
function
XATS2JS_assertmsg
  ( b0, msg )
{
if
(!b0)
{
  // [b0] is false
  throw new Error(msg);
} // if-then
return ; // [b0] is true
}
//
/* ****** ****** */
function
XATS2JS_lval_err
  (loc)
{
  // non-left-val!
  throw new Error(loc);
}
/* ****** ****** */
function
XATS2JS_lval_get
  (lvl0)
{
//
let
root = lvl0.root;
let
offs = lvl0.offs;
//
if
(
lvl0.hasOwnProperty('prev')
)
root =
XATS2JS_lval_get(lvl0.prev);
//  
return root[offs]; // JS_lval_get
}
/* ****** ****** */
function
XATS2JS_lval_set
  (lvl0, obj1)
{
//
let root = null;
let offs = lvl0.offs;
//
if
(
lvl0.hasOwnProperty('prev')
)
{ // flat tuple
root =
XATS2JS_lval_get(lvl0.prev);
root =
root.slice(); root[offs] = obj1;
XATS2JS_lval_set(lvl0.prev, root);
}
else
{
  lvl0.root[offs] = obj1; // boxed
}
return; // end of [XATS2JS_lval_set]
}
/* ****** ****** */
function
XATS2JS_patckerr0()
{
  throw new Error();
}
function
XATS2JS_patckerr1(loc)
{
  throw new Error(loc);
}
/* ****** ****** */
function
XATS2JS_matcherr0()
{
  throw new Error();
}
function
XATS2JS_matcherr1(loc)
{
  throw new Error(loc);
}
/* ****** ****** */
function
XATS2JS_new_var0
  ()
{
return {root:[null], offs:0};
}
function
XATS2JS_new_var1
  (init)
{
return {root:[init], offs:0};
}
/* ****** ****** */
function
XATS2JS_new_cofs
  (lvl1, idx2)
{
return {root:lvl1, offs:idx2}; 
}
function
XATS2JS_new_tofs
  (lvl1, idx2)
{
return {root:lvl1, offs:idx2}; 
}
/* ****** ****** */
function
XATS2JS_new_cptr
  (lvl1, idx2)
{
let
con1 =
XATS2JS_lval_get(lvl1);
return {root:con1, offs:idx2}; 
}
function
XATS2JS_new_tptr
  (lvl1, idx2)
{
let
tup1 =
XATS2JS_lval_get(lvl1);
if
(tup1[0] >= 0)
return {
  root:tup1, offs:idx2
};
else
return {
  prev:lvl1,
  root:tup1, offs:idx2
}; // end of [XATS2JS_new_tptr]
}
/* ****** ****** */

function
XATS2JS_new_lazy
  (thunk)
{
return {
  lztag: 0 // unused
, lzval: null // saved
, lzfun: thunk // for eval
}
} // end of [XATS2JS_new_lazy]

function
XATS2JS_lazy_eval
  (lzobj)
{
//
let lzres;
//
if
(lzobj.lztag===0)
{
lzres =
lzobj.lzfun();
lzobj.lztag = 1;
lzobj.lzval = lzres;
} else
{
//
// HX: tracking
//
  lzobj.lztag += 1;
  lzres = lzobj.lzval;
} ;
return lzres; // lazy_eval
} // end of [XATS2JS_lazy_eval]

/* ****** ****** */

function
XATS2JS_new_llazy
  (thunk, frees)
{
return {
  lztag: false // unused
, lzfun: thunk // for eval
, lzfrs: frees // for frees
}
} // end of [XATS2JS_new_llazy]

function
XATS2JS_llazy_eval
  (lzobj)
{
//
if
(lzobj.lztag)
{
  throw new Error();
}
//
  lzobj.lztag = true; // used
  return lzobj.lzfun(); // eval
//
} // end of [XATS2JS_llazy_eval]

function
XATS2JS_llazy_free
  (lzobj)
{
//
if
(lzobj.lztag)
{
  throw new Error();
}
//
  lzobj.lztag = true; // used
  return lzobj.lzfrs(); // free
//
} // end of [XATS2JS_llazy_free]

/* ****** ****** */

/* end of [XATS2JS_runtime.cats] */
/* ****** ****** */
/*
Basics for Xats2js
*/
/* ****** ****** */
//
// prelude/bool.sats
//
/* ****** ****** */
function
XATS2JS_bool_neg
  (b0)
{ return !b0 ; }
/* ****** ****** */
function
XATS2JS_bool_add
  (b1, b2)
{ return (b1 || b2); }
function
XATS2JS_bool_mul
  (b1, b2)
{ return (b1 && b2); }
/* ****** ****** */
//
// prelude/char.sats
//
/* ****** ****** */
function
XATS2JS_char_eqzq
  (c0)
{
return (0===c0); // eqzq
}
function
XATS2JS_char_neqzq
  (c0)
{
return (0!==c0); // neqzq
}
/* ****** ****** */
function
XATS2JS_char_cmp
  (c1, c2)
{
if
(c1 < c2)
return (-1);
else
return (c1 <= c2 ? 0 : 1);
}
/* ****** ****** */
function
XATS2JS_char_equal
  (c1, c2)
{
return (c1===c2); // equal
}
function
XATS2JS_char_noteq
  (c1, c2)
{
return (c1!==c2); // noteq
}
/* ****** ****** */
//
// prelude/gint.sats
//
/* ****** ****** */
function
XATS2JS_gint_abs_sint
  (x0)
{
if
(x0 >= 0)
{
  return x0; // abs
}
else
{
  return -x0; // abs
}
}
/* ****** ****** */
function
XATS2JS_gint_neg_sint
  (x0)
{
return (-x0); // neg
}
/* ****** ****** */
function
XATS2JS_gint_succ_sint
  (x0)
{
return (x0 + 1); // +1
}
function
XATS2JS_gint_pred_sint
  (x0)
{
return (x0 - 1); // -1
}
/* ****** ****** */
function
XATS2JS_gint_lt_sint_sint
  (x1, x2)
{
return (x1 < x2); // lt
}
function
XATS2JS_gint_gt_sint_sint
  (x1, x2)
{
return (x1 > x2); // gt
}
function
XATS2JS_gint_eq_sint_sint
  (x1, x2)
{
return (x1 === x2); // eq
}
function
XATS2JS_gint_lte_sint_sint
  (x1, x2)
{
return (x1 <= x2); // lte
}
function
XATS2JS_gint_gte_sint_sint
  (x1, x2)
{
return (x1 >= x2); // gte
}
function
XATS2JS_gint_neq_sint_sint
  (x1, x2)
{
return (x1 !== x2); // neq
}
/* ****** ****** */
function
XATS2JS_gint_cmp_sint_sint
  (x1, x2)
{
if
(x1 < x2)
return (-1);
else
return (x1 <= x2 ? 0 : 1);
}
/* ****** ****** */
function
XATS2JS_gint_add_sint_sint
  (x1, x2)
{
   return (x1 + x2); // add
}
/* ****** ****** */
function
XATS2JS_gint_sub_sint_sint
  (x1, x2)
{
  return (x1 - x2); // sub
}
/* ****** ****** */
function
XATS2JS_gint_mul_sint_sint
  (x1, x2)
{
  return (x1 * x2); // mul
}
/* ****** ****** */
function
XATS2JS_gint_mod_sint_sint
  (x1, x2)
{
  return (x1 % x2); // mod
}
/* ****** ****** */
function
XATS2JS_gint_div_sint_sint
  (x1, x2)
{ 
//
  let q0 = x1 / x2;
//
  if
  (q0 >= 0)
  {
    return Math.floor(q0);
  }
  else
  {
    return Math.ceil( q0 );
  }
}
/* ****** ****** */
//
// prelude/gflt.sats
//
/* ****** ****** */
function
XATS2JS_gflt_i_dflt
  (x0)
{
  return x0; // int
}
/* ****** ****** */
function
XATS2JS_gflt_abs_dflt
  (x0)
{
if
(x0 >= 0.0)
{
  return x0; // abs
}
else
{
  return -x0; // abs
}
}
/* ****** ****** */
function
XATS2JS_gflt_neg_dflt
  (x0)
{
return (-x0); // neg
}
/* ****** ****** */
function
XATS2JS_gflt_succ_dflt
  (x0)
{
return (x0 + 1); // +1
}
function
XATS2JS_gflt_pred_dflt
  (x0)
{
return (x0 - 1); // -1
}
/* ****** ****** */
function
XATS2JS_gflt_lt_dflt_dflt
  (x1, x2)
{
return (x1 < x2); // lt
}
function
XATS2JS_gflt_gt_dflt_dflt
  (x1, x2)
{
return (x1 > x2); // gt
}
function
XATS2JS_gflt_eq_dflt_dflt
  (x1, x2)
{
return (x1 === x2); // eq
}
function
XATS2JS_gflt_lte_dflt_dflt
  (x1, x2)
{
return (x1 <= x2); // lte
}
function
XATS2JS_gflt_gte_dflt_dflt
  (x1, x2)
{
return (x1 >= x2); // gte
}
function
XATS2JS_gflt_neq_dflt_dflt
  (x1, x2)
{
return (x1 !== x2); // neq
}
/* ****** ****** */
function
XATS2JS_gflt_cmp_dflt_dflt
  (x1, x2)
{
if
(x1 < x2)
return (-1);
else
return (x1 <= x2 ? 0 : 1);
}
/* ****** ****** */
function
XATS2JS_gflt_add_dflt_dflt
  (x1, x2)
{
   return (x1 + x2); // add
}
/* ****** ****** */
function
XATS2JS_gflt_sub_dflt_dflt
  (x1, x2)
{
   return (x1 - x2); // sub
}
/* ****** ****** */
function
XATS2JS_gflt_mul_dflt_dflt
  (x1, x2)
{
   return (x1 * x2); // mul
}
/* ****** ****** */
function
XATS2JS_gflt_div_dflt_dflt
  (x1, x2)
{
   return (x1 / x2); // div
}
/* ****** ****** */
//
// prelude/string.sats
//
/* ****** ****** */
//
// HX-2020-09-28:
// Please note that:
// A string is a JS_string
// A string_vt is a JS_array
//
/* ****** ****** */
function
XATS2JS_string_vt2t
  (cs)
{
cs.pop(); // remove the last '0'
let res = // from array to string
String.fromCharCode.apply(null, cs);
return res; // XATS2JS_string_vt2t
}
/* ****** ****** */
//
function
XATS2JS_string_nilq
  (opt)
{
return(opt==="");
}
function
XATS2JS_string_cons
  (opt)
{
return(opt!=="");
}
/* ****** ****** */
//
function
XATS2JS_stropt_nilq
  (opt)
{
return(opt===null);
}
function
XATS2JS_stropt_consq
  (opt)
{
return(opt!==null);
}
//
/* ****** ****** */
function
XATS2JS_string_lt
  (x1, x2)
{
  return (x1 < x2);
}
function
XATS2JS_string_gt
  (x1, x2)
{
  return (x1 > x2);
}
function
XATS2JS_string_eq
  (x1, x2)
{
  return (x1===x2);
}
function
XATS2JS_string_lte
  (x1, x2)
{
  return (x1 <= x2);
}
function
XATS2JS_string_gte
  (x1, x2)
{
  return (x1 >= x2);
}
function
XATS2JS_string_neq
  (x1, x2)
{
  return (x1 !== x2);
}
/* ****** ****** */
function
XATS2JS_string_cmp
  (x1, x2)
{
if(x1 < x2)
{
  return -1;
} else
{
  return (x1===x2 ? 0 : 1);
} // end of [if]
}
/* ****** ****** */
function
XATS2JS_string_head_opt
  (cs)
{
if
(cs.length <= 0)
{
  return 0; // none
}
return cs.charCodeAt(0);
}
/* ****** ****** */
function
XATS2JS_string_head_raw
  (cs)
{
return cs.charCodeAt(0);
}
/* ****** ****** */
function
XATS2JS_string_tail_raw
  (cs)
{
return cs.slice(1);//tail
}
/* ****** ****** */
function
XATS2JS_string_get_at
  (cs, i0)
{
return cs.charCodeAt(i0);
}
/* ****** ****** */
function
XATS2JS_strtmp_vt_alloc
  (bsz)
{
  let
  cs =
  new Array(bsz+1);
  cs[bsz] = 0; return cs;
}
function
XATS2JS_string_vt_get_at
  (cs, i0)
{
  return cs[i0];
  //cs:JS_array(char)
}
function
XATS2JS_strtmp_vt_set_at
  (cs, i0, c0)
{
  return (cs[i0] = c0);
}
/* ****** ****** */
function
XATS2JS_string_forall_cfr
  (cs, f0)
{
let i0;
let
res = true;
let
len = cs.length
for
( i0 = 0
; i0 < len; i0 += 1)
{
let c0 = cs.charCodeAt(i0);
if
(!f0(c0)){res = false; break;}
}
return res; // string_forall_cfr
}
/* ****** ****** */
function
XATS2JS_string_rforall_cfr
  (cs, f0)
{
let i0;
let
res = true;
let
len = cs.length
for
( i0 = len
; i0 >= 1 ; i0 -= 1)
{
let c0 = cs.charCodeAt(i0-1);
if
(!f0(c0)){res = false; break;}
}
return res; // string_rforall_cfr
}
/* ****** ****** */
function
XATS2JS_string_vt_forall_cfr
  (cs, f0)
{
let i0;
let
res = true;
let
len = cs.length
for
( i0 = 0
; i0 < len; i0 += 1)
{
if
(!f0(cs[i0])){res = false; break;}
}
return res; // string_vt_forall_cfr
}
/* ****** ****** */
function
XATS2JS_string_vt_rforall_cfr
  (cs, f0)
{
let i0;
let
res = true;
let
len = cs.length;
for
( i0 = len
; i0 >= 1 ; i0 -= 1)
{
if
(!f0(cs[i0-1])){res = false; break;}
}
return res; // string_vt_rforall_cfr
}
/* ****** ****** */
//
// prelude/array.sats
// (arrays of
//  various dimensionality)
//
/* ****** ****** */
//
// HX: 1-dimensional
//
/* ****** ****** */

function
XATS2JS_a0ptr_make
  (x0)
{
let A0 =
XATS2JS_a0ptr_alloc();
A0[0] = x0; return A0;
}
function
XATS2JS_a0ptr_alloc
  (  )
{
  return new Array(1);
}

/* ****** ****** */

function
XATS2JS_a0ref_get
  (A0)
{
  return A0[0];
}

/* ****** ****** */

function
XATS2JS_a0ref_set
  (A0, x0)
{
  return (A0[0] = x0);
}

/* ****** ****** */
//
// HX: 1-dimensional
//
/* ****** ****** */

function
XATS2JS_a1ptr_alloc
  (asz)
{
  return new Array(asz);
}

/* ****** ****** */

function
XATS2JS_a1ref_get_at
  (A0, i0)
{
  return A0[i0];
}
function
XATS2JS_a1ptr_get_at
  (A0, i0)
{
  return A0[i0];
}

/* ****** ****** */

function
XATS2JS_a1ref_set_at
  (A0, i0, x0)
{
  return (A0[i0] = x0);
}
function
XATS2JS_a1ptr_set_at
  (A0, i0, x0)
{
  return (A0[i0] = x0);
}
function
XATS2JS_a1ptr_set_at_raw
  (A0, i0, x0)
{
  return (A0[i0] = x0);
}

/* ****** ****** */
//
// prelude/unsafe.sats
//
/* ****** ****** */
//
function
XATS2JS_UN_p2tr_get
  (ptr)
{
  return XATS2JS_lval_get(ptr);
}
function
XATS2JS_UN_p2tr_set
  (ptr, obj)
{
  XATS2JS_lval_set(ptr, obj); return;
}
//
/* ****** ****** */
// HX-2020-11-09:
// Native arrays for Xats2js
/* ****** ****** */

function
XATS2JS_jsarray_length
  (xs)
{
  return (xs.length);
}

/* ****** ****** */

function
XATS2JS_jsarray_get_at
  (xs, i0)
{
  return xs[i0];
}
function
XATS2JS_jsarray_set_at
  (xs, i0, x0)
{
  return (xs[i0] = x0);
}

/* ****** ****** */

/* end of [XATS2JS_prelude.cats] */
/* ****** ****** */
/*
G_eqref for Xats2js
*/
/* ****** ****** */

function
XATS2JS_g_eqref
  (x1, x2)
{
  return (x1 === x2); 
}
function
XATS2JS_g_neqrf
  (x1, x2)
{
  return (x1 !== x2); 
}

/* ****** ****** */

/* end of [XATS2JS_g_eqref.cats] */
/* ****** ****** */
/*
G_print for Xats2js
*/
/* ****** ****** */
//
var
XATS2JS_the_print_store = [];
//
/* ****** ****** */

function
XATS2JS_g_print(obj)
{
var
rep = obj.toString();
XATS2JS_the_print_store.push(rep);
return; // XATS2JS_g_print
}

/* ****** ****** */
function
XATS2JS_bool_print
  (b0)
{
if(b0)
{
XATS2JS_g_print("true");
}
else
{
XATS2JS_g_print("false");
}
return; // XATS2JS_bool_print
}
/* ****** ****** */
function
XATS2JS_char_print
  (c0)
{
// c0: number
XATS2JS_g_print
(String.fromCharCode(c0));
return; // XATS2JS_char_print
}
/* ****** ****** */
function
XATS2JS_gint_print_sint
  (x0)
{
XATS2JS_g_print(x0);
return; // gint_print_sint
}
function
XATS2JS_gint_print_uint
  (x0)
{
XATS2JS_g_print(x0);
return; // gint_print_uint
}
/* ****** ****** */
function
XATS2JS_string_print
  (cs)
{
  return XATS2JS_g_print(cs);
}
/* ****** ****** */

function
XATS2JS_the_print_store_join()
{
var
rep =
XATS2JS_the_print_store.join("");
return rep;
} // XATS2JS_the_print_store_join

/* ****** ****** */

function
XATS2JS_the_print_store_clear()
{
XATS2JS_the_print_store = []; return;
} // XATS2JS_the_print_store_clear

/* ****** ****** */

/* end of [XATS2JS_g_print.cats] */
// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 66(line=6, offs=1) -- 121(line=8, offs=27)
// L1DCLnone1(H0Cnone1(...))

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 200(line=16, offs=1) -- 272(line=22, offs=24)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 276(line=24, offs=1) -- 313(line=24, offs=38)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 348(line=29, offs=1) -- 441(line=37, offs=26)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 450(line=39, offs=1) -- 543(line=47, offs=26)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 547(line=49, offs=1) -- 584(line=50, offs=30)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 585(line=51, offs=1) -- 622(line=52, offs=30)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 729(line=62, offs=1) -- 777(line=64, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 781(line=66, offs=1) -- 829(line=68, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 861(line=72, offs=1) -- 911(line=74, offs=29)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 912(line=75, offs=1) -- 951(line=76, offs=32)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 960(line=78, offs=1) -- 1011(line=80, offs=29)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1012(line=81, offs=1) -- 1053(line=82, offs=34)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1082(line=85, offs=1) -- 1143(line=88, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1144(line=89, offs=1) -- 1181(line=90, offs=30)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1210(line=93, offs=1) -- 1273(line=96, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1274(line=97, offs=1) -- 1315(line=98, offs=34)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1324(line=100, offs=1) -- 1387(line=103, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1388(line=104, offs=1) -- 1429(line=105, offs=34)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1508(line=113, offs=1) -- 1579(line=117, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1580(line=118, offs=1) -- 1627(line=119, offs=40)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1662(line=124, offs=1) -- 1737(line=128, offs=37)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1738(line=129, offs=1) -- 1785(line=130, offs=40)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1820(line=135, offs=1) -- 1893(line=139, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1902(line=141, offs=1) -- 1975(line=145, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2026(line=148, offs=1) -- 2075(line=149, offs=42)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2110(line=154, offs=1) -- 2201(line=160, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2202(line=161, offs=1) -- 2257(line=162, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2269(line=165, offs=1) -- 2360(line=171, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2361(line=172, offs=1) -- 2416(line=173, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2428(line=176, offs=1) -- 2519(line=182, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2520(line=183, offs=1) -- 2575(line=184, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2587(line=187, offs=1) -- 2680(line=193, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2681(line=194, offs=1) -- 2738(line=195, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2750(line=198, offs=1) -- 2843(line=204, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2844(line=205, offs=1) -- 2901(line=206, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2913(line=209, offs=1) -- 3006(line=215, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3007(line=216, offs=1) -- 3064(line=217, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3097(line=222, offs=1) -- 3203(line=229, offs=37)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3204(line=230, offs=1) -- 3261(line=231, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3294(line=236, offs=1) -- 3388(line=242, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3389(line=243, offs=1) -- 3446(line=244, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3455(line=246, offs=1) -- 3549(line=252, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3619(line=257, offs=1) -- 3713(line=263, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3714(line=264, offs=1) -- 3771(line=265, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3780(line=267, offs=1) -- 3874(line=273, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3875(line=274, offs=1) -- 3932(line=275, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3941(line=277, offs=1) -- 4038(line=283, offs=39)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4039(line=284, offs=1) -- 4096(line=285, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4178(line=294, offs=1) -- 4232(line=296, offs=31)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4233(line=297, offs=1) -- 4276(line=298, offs=36)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4311(line=303, offs=1) -- 4369(line=305, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4370(line=306, offs=1) -- 4417(line=307, offs=40)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4429(line=310, offs=1) -- 4487(line=312, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4488(line=313, offs=1) -- 4535(line=314, offs=40)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4570(line=319, offs=1) -- 4629(line=321, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4630(line=322, offs=1) -- 4679(line=323, offs=42)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4688(line=325, offs=1) -- 4747(line=327, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4748(line=328, offs=1) -- 4797(line=329, offs=42)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4832(line=334, offs=1) -- 4902(line=336, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4911(line=338, offs=1) -- 4981(line=340, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4990(line=342, offs=1) -- 5060(line=344, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5069(line=346, offs=1) -- 5140(line=348, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5149(line=350, offs=1) -- 5220(line=352, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5229(line=354, offs=1) -- 5300(line=356, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5304(line=358, offs=1) -- 5359(line=359, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5360(line=360, offs=1) -- 5415(line=361, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5416(line=362, offs=1) -- 5471(line=363, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5472(line=364, offs=1) -- 5529(line=365, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5530(line=366, offs=1) -- 5587(line=367, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5588(line=368, offs=1) -- 5645(line=369, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5680(line=374, offs=1) -- 5751(line=376, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5752(line=377, offs=1) -- 5809(line=378, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5844(line=383, offs=1) -- 5915(line=385, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5924(line=387, offs=1) -- 5995(line=389, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6004(line=391, offs=1) -- 6075(line=393, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6084(line=395, offs=1) -- 6155(line=397, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6159(line=399, offs=1) -- 6216(line=400, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6217(line=401, offs=1) -- 6274(line=402, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6275(line=403, offs=1) -- 6332(line=404, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6333(line=405, offs=1) -- 6390(line=406, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6472(line=415, offs=1) -- 6522(line=417, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6531(line=419, offs=1) -- 6587(line=421, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6591(line=423, offs=1) -- 6630(line=424, offs=32)
function
XATS2JS_optn_nil()
{
let xtmp0;
{
xtmp0 = [0];
}
;
return xtmp0;
} // function // XATS2JS_optn_nil(83)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6631(line=425, offs=1) -- 6676(line=426, offs=38)
function
XATS2JS_optn_cons(a1x1)
{
let xtmp2;
;
{
xtmp2 = [1, a1x1];
}
;
return xtmp2;
} // function // XATS2JS_optn_cons(84)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6758(line=435, offs=1) -- 6819(line=438, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6828(line=440, offs=1) -- 6900(line=444, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6901(line=445, offs=1) -- 6948(line=446, offs=40)
function
XATS2JS_list_nil()
{
let xtmp3;
{
xtmp3 = [0];
}
;
return xtmp3;
} // function // XATS2JS_list_nil(85)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6949(line=447, offs=1) -- 7002(line=448, offs=46)
function
XATS2JS_list_cons(a1x1, a1x2)
{
let xtmp6;
;
;
{
xtmp6 = [1, a1x1, a1x2];
}
;
return xtmp6;
} // function // XATS2JS_list_cons(86)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7075(line=455, offs=1) -- 7195(line=465, offs=20)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7217(line=468, offs=1) -- 7334(line=477, offs=20)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7335(line=478, offs=1) -- 7455(line=487, offs=21)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7477(line=490, offs=1) -- 7599(line=500, offs=18)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7600(line=501, offs=1) -- 7722(line=511, offs=18)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7723(line=512, offs=1) -- 7845(line=522, offs=18)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7866(line=524, offs=1) -- 7991(line=534, offs=19)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7992(line=535, offs=1) -- 8117(line=545, offs=19)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8118(line=546, offs=1) -- 8243(line=556, offs=19)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8264(line=558, offs=1) -- 8389(line=568, offs=19)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8410(line=570, offs=1) -- 8538(line=579, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8559(line=581, offs=1) -- 8687(line=590, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8708(line=592, offs=1) -- 8838(line=601, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8859(line=603, offs=1) -- 9001(line=614, offs=22)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9022(line=616, offs=1) -- 9238(line=631, offs=8)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9285(line=633, offs=1) -- 9419(line=642, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9440(line=644, offs=1) -- 9594(line=654, offs=25)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9615(line=656, offs=1) -- 9826(line=670, offs=8)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9877(line=672, offs=1) -- 10088(line=686, offs=8)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 10378(line=705, offs=1) -- 10440(line=710, offs=25)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 10441(line=711, offs=1) -- 10492(line=713, offs=35)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 10521(line=716, offs=1) -- 10590(line=721, offs=26)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 10591(line=722, offs=1) -- 10644(line=724, offs=37)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 10673(line=727, offs=1) -- 10736(line=731, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 10737(line=732, offs=1) -- 10786(line=734, offs=33)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 10815(line=737, offs=1) -- 10890(line=742, offs=31)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 10891(line=743, offs=1) -- 10940(line=745, offs=33)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11016(line=752, offs=1) -- 11105(line=758, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11106(line=759, offs=1) -- 11159(line=761, offs=37)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11191(line=765, offs=1) -- 11282(line=771, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11283(line=772, offs=1) -- 11338(line=774, offs=39)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11350(line=777, offs=1) -- 11441(line=783, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11442(line=784, offs=1) -- 11497(line=786, offs=39)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11532(line=791, offs=1) -- 11640(line=798, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11641(line=799, offs=1) -- 11696(line=801, offs=39)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11708(line=804, offs=1) -- 11816(line=811, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11817(line=812, offs=1) -- 11872(line=814, offs=39)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 11907(line=819, offs=1) -- 12020(line=826, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 12021(line=827, offs=1) -- 12084(line=829, offs=47)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 67(line=6, offs=1) -- 122(line=8, offs=27)
// L1DCLnone1(H0Cnone1(...))

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 143(line=10, offs=1) -- 183(line=11, offs=27)
// L1DCLnone1(H0Cnone1(...))

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 184(line=12, offs=1) -- 227(line=13, offs=30)
// L1DCLnone1(H0Cnone1(...))

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 385(line=25, offs=1) -- 453(line=30, offs=24)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 462(line=32, offs=1) -- 534(line=37, offs=27)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 543(line=39, offs=1) -- 617(line=44, offs=27)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 621(line=46, offs=1) -- 666(line=47, offs=38)
function
XATS2JS_lazy_cfr(a1x1)
{
let xtmp1;
let xtmp3;
;
xtmp3 =
function()
{
let xtmp2;
{
xtmp2 = a1x1();
}
;
return xtmp2;
} // lam-function
;
xtmp1 = XATS2JS_new_lazy(xtmp3);
return xtmp1;
} // function // XATS2JS_lazy_cfr(0)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 667(line=48, offs=1) -- 714(line=49, offs=40)
function
XATS2JS_llazy_cfr(a1x1)
{
let xtmp5;
let xtmp7;
let xtmp8;
;
xtmp7 =
function()
{
let xtmp6;
{
xtmp6 = a1x1();
}
;
return xtmp6;
} // lam-function
;
xtmp8 =
function()
{
let xtmp6;
} // lam-function
;
xtmp5 = XATS2JS_new_llazy(xtmp7,xtmp8);
return xtmp5;
} // function // XATS2JS_llazy_cfr(1)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 715(line=50, offs=1) -- 764(line=51, offs=42)
function
XATS2JS_lazy_vt_cfr(a1x1)
{
let xtmp10;
let xtmp12;
let xtmp13;
;
xtmp12 =
function()
{
let xtmp11;
{
xtmp11 = a1x1();
}
;
return xtmp11;
} // lam-function
;
xtmp13 =
function()
{
let xtmp11;
} // lam-function
;
xtmp10 = XATS2JS_new_llazy(xtmp12,xtmp13);
return xtmp10;
} // function // XATS2JS_lazy_vt_cfr(2)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 846(line=60, offs=1) -- 896(line=62, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 905(line=64, offs=1) -- 961(line=66, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 965(line=68, offs=1) -- 1004(line=69, offs=32)
function
XATS2JS_optn_nil()
{
let xtmp14;
{
xtmp14 = [0];
}
;
return xtmp14;
} // function // XATS2JS_optn_nil(3)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1005(line=70, offs=1) -- 1050(line=71, offs=38)
function
XATS2JS_optn_cons(a1x1)
{
let xtmp16;
;
{
xtmp16 = [1, a1x1];
}
;
return xtmp16;
} // function // XATS2JS_optn_cons(4)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1132(line=80, offs=1) -- 1193(line=83, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1202(line=85, offs=1) -- 1274(line=89, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1278(line=91, offs=1) -- 1325(line=92, offs=40)
function
XATS2JS_list_nil()
{
let xtmp17;
{
xtmp17 = [0];
}
;
return xtmp17;
} // function // XATS2JS_list_nil(5)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1326(line=93, offs=1) -- 1379(line=94, offs=46)
function
XATS2JS_list_cons(a1x1, a1x2)
{
let xtmp20;
;
;
{
xtmp20 = [1, a1x1, a1x2];
}
;
return xtmp20;
} // function // XATS2JS_list_cons(6)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1463(line=103, offs=1) -- 1530(line=106, offs=37)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1539(line=108, offs=1) -- 1619(line=112, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1623(line=114, offs=1) -- 1676(line=115, offs=46)
function
XATS2JS_strmcon_nil()
{
let xtmp21;
{
xtmp21 = [0];
}
;
return xtmp21;
} // function // XATS2JS_strmcon_nil(7)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1677(line=116, offs=1) -- 1736(line=117, offs=52)
function
XATS2JS_strmcon_cons(a1x1, a1x2)
{
let xtmp24;
;
;
{
xtmp24 = [1, a1x1, a1x2];
}
;
return xtmp24;
} // function // XATS2JS_strmcon_cons(8)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2127(line=147, offs=1) -- 2183(line=149, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2192(line=151, offs=1) -- 2254(line=153, offs=38)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2258(line=155, offs=1) -- 2303(line=156, offs=38)
function
XATS2JS_optn_vt_nil()
{
let xtmp25;
{
xtmp25 = [0];
}
;
return xtmp25;
} // function // XATS2JS_optn_vt_nil(9)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2304(line=157, offs=1) -- 2355(line=158, offs=44)
function
XATS2JS_optn_vt_cons(a1x1)
{
let xtmp27;
;
{
xtmp27 = [1, a1x1];
}
;
return xtmp27;
} // function // XATS2JS_optn_vt_cons(10)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2437(line=167, offs=1) -- 2504(line=170, offs=37)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2513(line=172, offs=1) -- 2594(line=176, offs=42)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2598(line=178, offs=1) -- 2651(line=179, offs=46)
function
XATS2JS_list_vt_nil()
{
let xtmp28;
{
xtmp28 = [0];
}
;
return xtmp28;
} // function // XATS2JS_list_vt_nil(11)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2652(line=180, offs=1) -- 2711(line=181, offs=52)
function
XATS2JS_list_vt_cons(a1x1, a1x2)
{
let xtmp31;
;
;
{
xtmp31 = [1, a1x1, a1x2];
}
;
return xtmp31;
} // function // XATS2JS_list_vt_cons(12)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3131(line=211, offs=1) -- 3204(line=214, offs=40)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3213(line=216, offs=1) -- 3302(line=220, offs=47)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3306(line=222, offs=1) -- 3365(line=223, offs=52)
function
XATS2JS_strmcon_vt_nil()
{
let xtmp32;
{
xtmp32 = [0];
}
;
return xtmp32;
} // function // XATS2JS_strmcon_vt_nil(13)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3366(line=224, offs=1) -- 3431(line=225, offs=58)
function
XATS2JS_strmcon_vt_cons(a1x1, a1x2)
{
let xtmp35;
;
;
{
xtmp35 = [1, a1x1, a1x2];
}
;
return xtmp35;
} // function // XATS2JS_strmcon_vt_cons(14)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3464(line=230, offs=1) -- 3612(line=238, offs=47)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3613(line=239, offs=1) -- 3764(line=245, offs=8)
function
XATS2JS_stream_vt_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp39;
let xtmp40;
let xtmp41;
let xtmp42;
let xtmp43;
;
;
;
xtmp40 = XATS2JS_llazy_eval(a1x1);
{
xtmp41 = 0;
do {
do {
if(0!==xtmp40[0]) break;
xtmp41 = 1;
} while(false);
if(xtmp41 > 0 ) break;
do {
if(1!==xtmp40[0]) break;
//L1PCKany();
//L1PCKany();
xtmp41 = 2;
} while(false);
if(xtmp41 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp41) {
case 1:
{
xtmp39 = a1x2();
}
;
break;
case 2:
xtmp42 = xtmp40[1];
xtmp43 = xtmp40[2];
{
xtmp39 = a1x3(xtmp42, xtmp43);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp39;
} // function // XATS2JS_stream_vt_uncons_cfr(15)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3839(line=250, offs=1) -- 3954(line=255, offs=49)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3955(line=256, offs=1) -- 4089(line=266, offs=8)
function
XATS2JS_stream_vt_map0_cfr(a1x1, a1x2)
{
let xtmp46;
;
;
// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4049(line=264, offs=1) -- 4087(line=265, offs=31)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 8898(line=717, offs=1) -- 9222(line=749, offs=8)
function
stream_vt_map0_3819_(a2x1)
{
let xtmp64;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 8965(line=725, offs=1) -- 9220(line=748, offs=12)
function
auxmain_8968_(a3x1)
{
let xtmp49;
let xtmp62;
let xtmp63;
;
xtmp62 =
function()
{
let xtmp50;
let xtmp51;
let xtmp52;
let xtmp53;
let xtmp54;
let xtmp55;
let xtmp58;
let xtmp59;
let xtmp60;
xtmp51 = XATS2JS_llazy_eval(a3x1);
{
xtmp52 = 0;
do {
do {
if(0!==xtmp51[0]) break;
xtmp52 = 1;
} while(false);
if(xtmp52 > 0 ) break;
do {
if(1!==xtmp51[0]) break;
//L1PCKany();
//L1PCKany();
xtmp52 = 2;
} while(false);
if(xtmp52 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp52) {
case 1:
{
xtmp50 = [0];
}
;
break;
case 2:
xtmp53 = xtmp51[1];
xtmp54 = xtmp51[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9144(line=743, offs=3) -- 9176(line=744, offs=24)
{
{
// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4049(line=264, offs=1) -- 4087(line=265, offs=31)
function
map0$fopr_2343_(a5x1)
{
let xtmp57;
;
{
xtmp57 = a1x2(a5x1);
}
;
return xtmp57;
} // function // map0$fopr(17)
;
xtmp55 = map0$fopr_2343_(xtmp53);
}
;
;
} // val(H0Pvar(y0(55)))
;
{
{
xtmp59 = auxmain_8968_(xtmp54);
}
;
xtmp58 = [1, xtmp55, xtmp59];
}
;
xtmp50 = xtmp58;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp50;
} // lam-function
;
xtmp63 =
function()
{
let xtmp50;
let xtmp51;
let xtmp52;
let xtmp53;
let xtmp54;
let xtmp55;
let xtmp58;
let xtmp59;
let xtmp60;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1554(line=120, offs=1) -- 1609(line=122, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1501(line=116, offs=1) -- 1550(line=118, offs=31)
function
stream_vt_free_1971_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(21)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1971_
;
xtmp60 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp49 = XATS2JS_new_llazy(xtmp62,xtmp63);
return xtmp49;
} // function // auxmain(19)
;
{
xtmp64 = auxmain_8968_(a2x1);
}
;
return xtmp64;
} // function // stream_vt_map0(18)
;
xtmp46 = stream_vt_map0_3819_(a1x1);
}
;
return xtmp46;
} // function // XATS2JS_stream_vt_map0_cfr(16)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4120(line=271, offs=1) -- 4232(line=275, offs=51)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4233(line=276, offs=1) -- 4367(line=285, offs=8)
function
XATS2JS_stream_vt_filter0_cfr(a1x1, a1x2)
{
let xtmp67;
;
;
// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4326(line=283, offs=3) -- 4365(line=284, offs=32)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9603(line=786, offs=1) -- 10044(line=826, offs=8)
function
stream_vt_filter0_4021_(a2x1)
{
let xtmp85;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9676(line=794, offs=1) -- 10042(line=825, offs=8)
function
auxmain_9679_(a3x1)
{
let a3y1;
let xtmp70;
let xtmp74;
let xtmp75;
do {
;
xtmp74 =
function()
{
let xtmp71;
let xtmp72;
{
xtmp71 = auxloop_9773_(XATS2JS_llazy_eval(a3x1));
}
;
return xtmp71;
} // lam-function
;
xtmp75 =
function()
{
let xtmp71;
let xtmp72;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1554(line=120, offs=1) -- 1609(line=122, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1501(line=116, offs=1) -- 1550(line=118, offs=31)
function
stream_vt_free_1971_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(21)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1971_
;
xtmp72 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp70 = XATS2JS_new_llazy(xtmp74,xtmp75);
break;//return
} while( true );
return xtmp70;
} // function // auxmain(25)
function
auxloop_9773_(a3x1)
{
let a3y1;
let xtmp77;
let xtmp78;
let xtmp79;
let xtmp80;
let xtmp81;
let xtmp84;
do {
;
{
xtmp78 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp78 = 1;
} while(false);
if(xtmp78 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp78 = 2;
} while(false);
if(xtmp78 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp78) {
case 1:
{
xtmp77 = [0];
}
;
break;
case 2:
xtmp79 = a3x1[1];
xtmp80 = a3x1[2];
{
// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4326(line=283, offs=3) -- 4365(line=284, offs=32)
function
filter0$test_2547_(a4x1)
{
let xtmp83;
;
{
xtmp83 = a1x2(a4x1);
}
;
return xtmp83;
} // function // filter0$test(23)
;
xtmp81 = filter0$test_2547_(xtmp79);
}
;
if
(xtmp81)
// then
{
{
{
xtmp84 = auxmain_9679_(xtmp80);
}
;
xtmp77 = [1, xtmp79, xtmp84];
}
;
} // if-then
else
{
{
// tail-recursion:
// L1CMDapp(tmp(77); L1VALfcst(auxloop(26)); L1VALeval3(L1VALtmp(tmp(80))))
a3y1 = XATS2JS_llazy_eval(xtmp80); a3x1 = a3y1; continue;
}
;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp77;
} // function // auxloop(26)
;
{
xtmp85 = auxmain_9679_(a2x1);
}
;
return xtmp85;
} // function // stream_vt_filter0(24)
;
xtmp67 = stream_vt_filter0_4021_(a1x1);
}
;
return xtmp67;
} // function // XATS2JS_stream_vt_filter0_cfr(22)


// ./spelling.dats: 21(line=2, offs=1) -- 73(line=4, offs=29)
// { // include
// ./../../../share/xats2js_prelude.hats
// ././../../../share/xats2js_prelude.hats: 114(line=8, offs=1) -- 151(line=8, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 172(line=10, offs=1) -- 209(line=10, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 210(line=11, offs=1) -- 247(line=11, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 268(line=13, offs=1) -- 305(line=13, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 306(line=14, offs=1) -- 343(line=14, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 344(line=15, offs=1) -- 381(line=15, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 402(line=17, offs=1) -- 439(line=17, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 440(line=18, offs=1) -- 477(line=18, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 478(line=19, offs=1) -- 515(line=19, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 516(line=20, offs=1) -- 553(line=20, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 574(line=22, offs=1) -- 612(line=22, offs=39)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 613(line=23, offs=1) -- 652(line=23, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 673(line=25, offs=1) -- 710(line=25, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 711(line=26, offs=1) -- 748(line=26, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 749(line=27, offs=1) -- 788(line=27, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 809(line=29, offs=1) -- 847(line=29, offs=39)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 868(line=31, offs=1) -- 908(line=31, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 929(line=33, offs=1) -- 969(line=33, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 970(line=34, offs=1) -- 1010(line=34, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1011(line=35, offs=1) -- 1053(line=35, offs=43)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1074(line=37, offs=1) -- 1113(line=37, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1134(line=39, offs=1) -- 1175(line=39, offs=42)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1199(line=42, offs=1) -- 1246(line=42, offs=48)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1250(line=44, offs=1) -- 1297(line=44, offs=48)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1301(line=46, offs=1) -- 1349(line=46, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1353(line=48, offs=1) -- 1401(line=48, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1405(line=50, offs=1) -- 1453(line=50, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1457(line=52, offs=1) -- 1505(line=52, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1506(line=53, offs=1) -- 1555(line=53, offs=50)
// L1DCLnone1(H0Cnone1(...))
// } // end-of-include


// ./spelling.dats: 102(line=7, offs=1) -- 146(line=9, offs=30)
// L1DCLnone0()

// ./spelling.dats: 178(line=13, offs=1) -- 214(line=15, offs=17)
// L1DCLnone0()

// ./spelling.dats: 223(line=17, offs=1) -- 262(line=19, offs=19)
// L1DCLnone0()

// ./spelling.dats: 271(line=21, offs=1) -- 321(line=23, offs=30)
// L1DCLnone0()

// ./spelling.dats: 346(line=27, offs=1) -- 458(line=36, offs=16)
function
wtest1_349_(a1x1, a1x2)
{
let xtmp2;
;
;
// ./spelling.dats: 415(line=34, offs=1) -- 456(line=35, offs=34)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 3390(line=283, offs=1) -- 3560(line=296, offs=13)
function
gseq_exists_1894_(a2x1)
{
let xtmp4;
let xtmp5;
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 3437(line=288, offs=3) -- 3495(line=290, offs=27)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/string.dats: 8611(line=635, offs=1) -- 8656(line=636, offs=38)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9022(line=616, offs=1) -- 9238(line=631, offs=8)
function
string_forall_6387_(a4x1)
{
let xtmp7;
let xtmp8;
;
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9067(line=621, offs=1) -- 9161(line=625, offs=26)
;
{
xtmp8 =
function(a5x1)
{
let xtmp10;
;
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 3437(line=288, offs=3) -- 3495(line=290, offs=27)
function
forall$test_3500_(a6x1)
{
let xtmp12;
let xtmp13;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 276(line=24, offs=1) -- 313(line=24, offs=38)
// { // val-binding
// } // val-binding
const // implval/fun
bool_neg_1432_ = XATS2JS_bool_neg
;
{
// ./spelling.dats: 415(line=34, offs=1) -- 456(line=35, offs=34)
function
exists$test_3379_(a7x1)
{
let xtmp15;
;
{
// ./../../../xanadu/prelude/DATS/gord.dats: 121(line=12, offs=1) -- 172(line=15, offs=21)
function
g_eq_1500_(a8x1, a8x2)
{
let xtmp18;
let xtmp19;
;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2520(line=183, offs=1) -- 2575(line=184, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
{
// ./../../../xanadu/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1144(line=89, offs=1) -- 1181(line=90, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp19 = g_cmp_1644_(a8x1, a8x2);
}
;
xtmp18 = gint_eq_sint_sint_2293_(xtmp19, 0);
}
;
return xtmp18;
} // function // g_eq(6)
;
xtmp15 = g_eq_1500_(a1x2, a7x1);
}
;
return xtmp15;
} // function // exists$test(5)
;
xtmp13 = exists$test_3379_(a6x1);
}
;
xtmp12 = bool_neg_1432_(xtmp13);
}
;
return xtmp12;
} // function // forall$test(8)
;
xtmp10 = forall$test_3500_(a5x1);
}
;
return xtmp10;
} // lam-function
;
xtmp7 = XATS2JS_string_forall_cfr(a4x1, xtmp8);
}
;
return xtmp7;
} // function // string_forall(11)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = string_forall_6387_
;
xtmp5 = gseq_forall_1939_(a2x1);
}
;
if
(xtmp5)
// then
{
xtmp4 = false;
} // if-then
else
{
xtmp4 = true;
} // if-else
;
return xtmp4;
} // function // gseq_exists(7)
;
xtmp2 = gseq_exists_1894_(a1x1);
}
;
return xtmp2;
} // function // wtest1(4)


// ./spelling.dats: 481(line=40, offs=1) -- 599(line=48, offs=16)
function
wtest2_484_(a1x1, a1x2)
{
let xtmp22;
;
;
// ./spelling.dats: 551(line=46, offs=1) -- 597(line=47, offs=39)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/string.dats: 8611(line=635, offs=1) -- 8656(line=636, offs=38)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9022(line=616, offs=1) -- 9238(line=631, offs=8)
function
string_forall_6387_(a3x1)
{
let xtmp24;
let xtmp25;
;
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9067(line=621, offs=1) -- 9161(line=625, offs=26)
;
{
xtmp25 =
function(a4x1)
{
let xtmp27;
;
{
// ./spelling.dats: 551(line=46, offs=1) -- 597(line=47, offs=39)
function
forall$test_3500_(a5x1)
{
let xtmp29;
;
{
xtmp29 = wtest1_349_(a1x2, a5x1);
}
;
return xtmp29;
} // function // forall$test(8)
;
xtmp27 = forall$test_3500_(a4x1);
}
;
return xtmp27;
} // lam-function
;
xtmp24 = XATS2JS_string_forall_cfr(a3x1, xtmp25);
}
;
return xtmp24;
} // function // string_forall(11)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = string_forall_6387_
;
xtmp22 = gseq_forall_1939_(a1x1);
}
;
return xtmp22;
} // function // wtest2(19)


// ./spelling.dats: 622(line=52, offs=1) -- 835(line=63, offs=8)
// L1DCLnone0()

// ./JS_spelling.dats: 21(line=2, offs=1) -- 73(line=4, offs=29)
// { // include
// ./../../../share/xats2js_prelude.hats
// ././../../../share/xats2js_prelude.hats: 114(line=8, offs=1) -- 151(line=8, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 172(line=10, offs=1) -- 209(line=10, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 210(line=11, offs=1) -- 247(line=11, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 268(line=13, offs=1) -- 305(line=13, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 306(line=14, offs=1) -- 343(line=14, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 344(line=15, offs=1) -- 381(line=15, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 402(line=17, offs=1) -- 439(line=17, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 440(line=18, offs=1) -- 477(line=18, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 478(line=19, offs=1) -- 515(line=19, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 516(line=20, offs=1) -- 553(line=20, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 574(line=22, offs=1) -- 612(line=22, offs=39)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 613(line=23, offs=1) -- 652(line=23, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 673(line=25, offs=1) -- 710(line=25, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 711(line=26, offs=1) -- 748(line=26, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 749(line=27, offs=1) -- 788(line=27, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 809(line=29, offs=1) -- 847(line=29, offs=39)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 868(line=31, offs=1) -- 908(line=31, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 929(line=33, offs=1) -- 969(line=33, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 970(line=34, offs=1) -- 1010(line=34, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1011(line=35, offs=1) -- 1053(line=35, offs=43)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1074(line=37, offs=1) -- 1113(line=37, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1134(line=39, offs=1) -- 1175(line=39, offs=42)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1199(line=42, offs=1) -- 1246(line=42, offs=48)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1250(line=44, offs=1) -- 1297(line=44, offs=48)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1301(line=46, offs=1) -- 1349(line=46, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1353(line=48, offs=1) -- 1401(line=48, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1405(line=50, offs=1) -- 1453(line=50, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1457(line=52, offs=1) -- 1505(line=52, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../share/xats2js_prelude.hats: 1506(line=53, offs=1) -- 1555(line=53, offs=50)
// L1DCLnone1(H0Cnone1(...))
// } // end-of-include


// ./JS_spelling.dats: 94(line=6, offs=1) -- 125(line=6, offs=32)
// L1DCLnone1(H0Cnone1(...))

// ./JS_spelling.dats: 146(line=8, offs=1) -- 189(line=9, offs=35)
// L1DCLnone1(H0Cnone1(...))

// ./JS_spelling.dats: 218(line=12, offs=1) -- 260(line=13, offs=39)


// ./JS_spelling.dats: 269(line=15, offs=1) -- 311(line=16, offs=39)


// ./JS_spelling.dats: 320(line=18, offs=1) -- 362(line=19, offs=39)


// ./JS_spelling.dats: 383(line=21, offs=1) -- 473(line=26, offs=8)
// L1DCLnone0()

// ./JS_spelling.dats: 474(line=27, offs=1) -- 525(line=28, offs=44)
// L1DCLnone0()

// ./JS_spelling.dats: 546(line=30, offs=1) -- 771(line=46, offs=8)
// L1DCLnone0()

// ./JS_spelling.dats: 800(line=49, offs=1) -- 841(line=50, offs=38)


// ./JS_spelling.dats: 862(line=52, offs=1) -- 1412(line=94, offs=8)
function
ATS_spelling_call()
{
let xtmp0;
let xtmp3;
let xtmp5;
let xtmp38;
let xtmp261;
let xtmp275;
let xtmp355;
let xtmp356;
// ./JS_spelling.dats: 899(line=56, offs=1) -- 934(line=58, offs=22)
{
{
// ./JS_spelling.dats: 383(line=21, offs=1) -- 473(line=26, offs=8)
function
spelling$char_183_()
{
let xtmp1;
let xtmp2;
// ./JS_spelling.dats: 419(line=24, offs=1) -- 446(line=25, offs=19)
{
{
xtmp1 = JS_spelling_arg0();
}
;
;
} // val(H0Pvar(cs(3)))
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8559(line=581, offs=1) -- 8687(line=590, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8627(line=587, offs=1) -- 8685(line=589, offs=31)
;
// } // val-binding
const // implval/fun
string_head_raw_3947_ = XATS2JS_string_head_raw
;
xtmp2 = string_head_raw_3947_(xtmp1);
}
;
return xtmp2;
} // function // spelling$char(3)
;
xtmp0 = spelling$char_183_();
}
;
;
} // val(H0Pvar(theChar(7)))
;
// ./JS_spelling.dats: 935(line=59, offs=1) -- 972(line=61, offs=23)
{
{
// ./JS_spelling.dats: 474(line=27, offs=1) -- 525(line=28, offs=44)
function
spelling$chars_228_()
{
let xtmp4;
{
xtmp4 = JS_spelling_arg1();
}
;
return xtmp4;
} // function // spelling$chars(5)
;
xtmp3 = spelling$chars_228_();
}
;
;
} // val(H0Pvar(theChars(9)))
;
// ./JS_spelling.dats: 976(line=63, offs=1) -- 1088(line=70, offs=19)
{
// ./JS_spelling.dats: 1036(line=68, offs=1) -- 1086(line=69, offs=43)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 9603(line=786, offs=1) -- 10044(line=826, offs=8)
function
stream_vt_filter0_4021_(a2x1)
{
let xtmp37;
;
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 9676(line=794, offs=1) -- 10042(line=825, offs=8)
function
auxmain_9679_(a3x1)
{
let a3y1;
let xtmp8;
let xtmp12;
let xtmp13;
do {
;
xtmp12 =
function()
{
let xtmp9;
let xtmp10;
{
xtmp9 = auxloop_9773_(XATS2JS_llazy_eval(a3x1));
}
;
return xtmp9;
} // lam-function
;
xtmp13 =
function()
{
let xtmp9;
let xtmp10;
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1554(line=120, offs=1) -- 1609(line=122, offs=41)
// { // val-binding
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1501(line=116, offs=1) -- 1550(line=118, offs=31)
function
stream_vt_free_1971_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(19)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1971_
;
xtmp10 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp8 = XATS2JS_new_llazy(xtmp12,xtmp13);
break;//return
} while( true );
return xtmp8;
} // function // auxmain(17)
function
auxloop_9773_(a3x1)
{
let a3y1;
let xtmp15;
let xtmp16;
let xtmp17;
let xtmp18;
let xtmp19;
let xtmp36;
do {
;
{
xtmp16 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp16 = 1;
} while(false);
if(xtmp16 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp16 = 2;
} while(false);
if(xtmp16 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp16) {
case 1:
{
xtmp15 = [0];
}
;
break;
case 2:
xtmp17 = a3x1[1];
xtmp18 = a3x1[2];
{
// ./JS_spelling.dats: 1036(line=68, offs=1) -- 1086(line=69, offs=43)
function
filter0$test_2547_(a4x1)
{
let xtmp21;
let xtmp22;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2844(line=205, offs=1) -- 2901(line=206, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
{
// ./../../../xanadu/prelude/DATS/string.dats: 3130(line=162, offs=1) -- 3368(line=186, offs=8)
function
string_length_5305_(a5x1)
{
let xtmp35;
;
// ./../../../xanadu/prelude/DATS/string.dats: 3192(line=170, offs=1) -- 3351(line=184, offs=5)
function
loop_3195_(a6x1, a6x2)
{
let a6y1;
let a6y2;
let xtmp26;
let xtmp30;
let xtmp31;
let xtmp34;
do {
;
;
// ./../../../xanadu/prelude/DATS/string.dats: 3265(line=177, offs=1) -- 3291(line=178, offs=23)
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1685(line=63, offs=1) -- 1744(line=66, offs=22)
function
string_nilq_3395_(a7x1)
{
let xtmp28;
let xtmp29;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 912(line=75, offs=1) -- 951(line=76, offs=32)
// { // val-binding
// } // val-binding
const // implval/fun
char_eqzq_1683_ = XATS2JS_char_eqzq
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8410(line=570, offs=1) -- 8538(line=579, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8478(line=576, offs=1) -- 8536(line=578, offs=31)
;
// } // val-binding
const // implval/fun
string_head_opt_3911_ = XATS2JS_string_head_opt
;
xtmp29 = string_head_opt_3911_(a7x1);
}
;
xtmp28 = char_eqzq_1683_(xtmp29);
}
;
return xtmp28;
} // function // string_nilq(23)
;
xtmp26 = string_nilq_3395_(a6x1);
}
;
;
} // val(H0Pvar(test(26)))
;
if
(xtmp26)
// then
{
xtmp30 = a6x2;
} // if-then
else
{
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1879(line=77, offs=1) -- 1928(line=79, offs=22)
function
string_tail_4009_(a7x1)
{
let xtmp33;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8708(line=592, offs=1) -- 8838(line=601, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8776(line=598, offs=1) -- 8836(line=600, offs=33)
;
// } // val-binding
const // implval/fun
string_tail_raw_4165_ = XATS2JS_string_tail_raw
;
xtmp33 = string_tail_raw_4165_(a7x1);
}
;
return xtmp33;
} // function // string_tail(28)
;
xtmp31 = string_tail_4009_(a6x1);
}
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp34 = gint_succ_sint_1861_(a6x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(30); L1VALfcst(loop(22)); L1VALtmp(tmp(31)), L1VALtmp(tmp(34)))
a6y1 = xtmp31; a6y2 = xtmp34; a6x1 = a6y1; a6x2 = a6y2; continue;
}
;
} // if-else
;
break;//return
} while( true );
return xtmp30;
} // function // loop(22)
;
{
xtmp35 = loop_3195_(a5x1, 0);
}
;
return xtmp35;
} // function // string_length(15)
;
xtmp22 = string_length_5305_(a4x1);
}
;
xtmp21 = gint_gte_sint_sint_2466_(xtmp22, 6);
}
;
return xtmp21;
} // function // filter0$test(13)
;
xtmp19 = filter0$test_2547_(xtmp17);
}
;
if
(xtmp19)
// then
{
{
{
xtmp36 = auxmain_9679_(xtmp18);
}
;
xtmp15 = [1, xtmp17, xtmp36];
}
;
} // if-then
else
{
{
// tail-recursion:
// L1CMDapp(tmp(15); L1VALfcst(auxloop(20)); L1VALeval3(L1VALtmp(tmp(18))))
a3y1 = XATS2JS_llazy_eval(xtmp18); a3x1 = a3y1; continue;
}
;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp15;
} // function // auxloop(20)
;
{
xtmp37 = auxmain_9679_(a2x1);
}
;
return xtmp37;
} // function // stream_vt_filter0(16)
;
{
// ././spelling.dats: 622(line=52, offs=1) -- 835(line=63, offs=8)
function
spelling_107_()
{
let xtmp39;
let xtmp42;
let xtmp44;
let xtmp64;
// ././spelling.dats: 695(line=58, offs=1) -- 721(line=58, offs=27)
{
{
// ./JS_spelling.dats: 383(line=21, offs=1) -- 473(line=26, offs=8)
function
spelling$char_183_()
{
let xtmp40;
let xtmp41;
// ./JS_spelling.dats: 419(line=24, offs=1) -- 446(line=25, offs=19)
{
{
xtmp40 = JS_spelling_arg0();
}
;
;
} // val(H0Pvar(cs(3)))
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8559(line=581, offs=1) -- 8687(line=590, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8627(line=587, offs=1) -- 8685(line=589, offs=31)
;
// } // val-binding
const // implval/fun
string_head_raw_3947_ = XATS2JS_string_head_raw
;
xtmp41 = string_head_raw_3947_(xtmp40);
}
;
return xtmp41;
} // function // spelling$char(3)
;
xtmp39 = spelling$char_183_();
}
;
;
} // val(H0Pvar(c0(31)))
;
// ././spelling.dats: 722(line=59, offs=1) -- 749(line=59, offs=28)
{
{
// ./JS_spelling.dats: 474(line=27, offs=1) -- 525(line=28, offs=44)
function
spelling$chars_228_()
{
let xtmp43;
{
xtmp43 = JS_spelling_arg1();
}
;
return xtmp43;
} // function // spelling$chars(5)
;
xtmp42 = spelling$chars_228_();
}
;
;
} // val(H0Pvar(cs(32)))
;
// ././spelling.dats: 750(line=60, offs=1) -- 833(line=62, offs=49)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 9603(line=786, offs=1) -- 10044(line=826, offs=8)
function
stream_vt_filter0_4021_(a3x1)
{
let xtmp63;
;
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 9676(line=794, offs=1) -- 10042(line=825, offs=8)
function
auxmain_9679_(a4x1)
{
let a4y1;
let xtmp47;
let xtmp51;
let xtmp52;
do {
;
xtmp51 =
function()
{
let xtmp48;
let xtmp49;
{
xtmp48 = auxloop_9773_(XATS2JS_llazy_eval(a4x1));
}
;
return xtmp48;
} // lam-function
;
xtmp52 =
function()
{
let xtmp48;
let xtmp49;
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1554(line=120, offs=1) -- 1609(line=122, offs=41)
// { // val-binding
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1501(line=116, offs=1) -- 1550(line=118, offs=31)
function
stream_vt_free_1971_(a7x1)
{
;
return XATS2JS_llazy_free(a7x1);
} // function // stream_vt_free(19)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1971_
;
xtmp49 = g_free_1550_(a4x1);
}
;
} // lam-function
;
xtmp47 = XATS2JS_new_llazy(xtmp51,xtmp52);
break;//return
} while( true );
return xtmp47;
} // function // auxmain(17)
function
auxloop_9773_(a4x1)
{
let a4y1;
let xtmp54;
let xtmp55;
let xtmp56;
let xtmp57;
let xtmp58;
let xtmp62;
do {
;
{
xtmp55 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp55 = 1;
} while(false);
if(xtmp55 > 0 ) break;
do {
if(1!==a4x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp55 = 2;
} while(false);
if(xtmp55 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp55) {
case 1:
{
xtmp54 = [0];
}
;
break;
case 2:
xtmp56 = a4x1[1];
xtmp57 = a4x1[2];
{
// ././spelling.dats: 750(line=60, offs=1) -- 833(line=62, offs=49)
function
filter0$test_2547_(a5x1)
{
let xtmp60;
let xtmp61;
;
{
xtmp61 = wtest1_349_(a5x1, xtmp39);
}
;
if
(xtmp61)
// then
{
{
xtmp60 = wtest2_484_(a5x1, xtmp42);
}
;
} // if-then
else
{
xtmp60 = false;
} // if-else
;
return xtmp60;
} // function // filter0$test(13)
;
xtmp58 = filter0$test_2547_(xtmp56);
}
;
if
(xtmp58)
// then
{
{
{
xtmp62 = auxmain_9679_(xtmp57);
}
;
xtmp54 = [1, xtmp56, xtmp62];
}
;
} // if-then
else
{
{
// tail-recursion:
// L1CMDapp(tmp(54); L1VALfcst(auxloop(20)); L1VALeval3(L1VALtmp(tmp(57))))
a4y1 = XATS2JS_llazy_eval(xtmp57); a4x1 = a4y1; continue;
}
;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp54;
} // function // auxloop(20)
;
{
xtmp63 = auxmain_9679_(a3x1);
}
;
return xtmp63;
} // function // stream_vt_filter0(16)
;
{
// ./JS_spelling.dats: 546(line=30, offs=1) -- 771(line=46, offs=8)
function
spelling$words_276_()
{
let xtmp65;
let xtmp66;
let xtmp244;
// ./JS_spelling.dats: 583(line=33, offs=1) -- 612(line=35, offs=19)
{
{
xtmp65 = JS_spelling_dict();
}
;
;
} // val(H0Pvar(dict(4)))
;
// ./JS_spelling.dats: 613(line=36, offs=1) -- 649(line=38, offs=25)
{
{
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 8479(line=616, offs=1) -- 8559(line=619, offs=38)
function
string_split_lines_8197_(a4x1)
{
let xtmp68;
let xtmp217;
;
{
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 8664(line=625, offs=1) -- 9556(line=706, offs=8)
function
cstream_vt_split_lines_8397_(a5x1)
{
let xtmp216;
;
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 8744(line=634, offs=1) -- 8788(line=638, offs=21)
function
iseol_8747_(a6x1)
{
let xtmp71;
;
{
// ./../../../xanadu/prelude/DATS/gord.dats: 121(line=12, offs=1) -- 172(line=15, offs=21)
function
g_eq_1500_(a7x1, a7x2)
{
let xtmp74;
let xtmp75;
;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2520(line=183, offs=1) -- 2575(line=184, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
{
// ./../../../xanadu/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1144(line=89, offs=1) -- 1181(line=90, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp75 = g_cmp_1644_(a7x1, a7x2);
}
;
xtmp74 = gint_eq_sint_sint_2293_(xtmp75, 0);
}
;
return xtmp74;
} // function // g_eq(38)
;
xtmp71 = g_eq_1500_(a6x1, XATS2JS_char('\n'));
}
;
return xtmp71;
} // function // iseol(37)
;
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 8789(line=639, offs=1) -- 9527(line=704, offs=9)
function
auxmain0_8792_(a6x1)
{
let xtmp77;
let xtmp121;
let xtmp122;
;
xtmp121 =
function()
{
let xtmp78;
let xtmp79;
let xtmp80;
let xtmp81;
let xtmp82;
let xtmp83;
let xtmp84;
let xtmp110;
let xtmp111;
let xtmp112;
let xtmp116;
let xtmp117;
xtmp79 = XATS2JS_llazy_eval(a6x1);
{
xtmp80 = 0;
do {
do {
if(0!==xtmp79[0]) break;
xtmp80 = 1;
} while(false);
if(xtmp80 > 0 ) break;
do {
if(1!==xtmp79[0]) break;
//L1PCKany();
//L1PCKany();
xtmp80 = 2;
} while(false);
if(xtmp80 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp80) {
case 1:
{
xtmp78 = [0];
}
;
break;
case 2:
xtmp81 = xtmp79[1];
xtmp82 = xtmp79[2];
{
xtmp83 = iseol_8747_(xtmp81);
}
;
if
(xtmp83)
// then
{
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 9013(line=659, offs=3) -- 9037(line=659, offs=27)
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1592(line=56, offs=1) -- 1660(line=59, offs=23)
function
string_vt_nil_3244_()
{
let xtmp85;
let xtmp109;
{
// ./../../../xanadu/prelude/DATS/string.dats: 6193(line=432, offs=1) -- 6644(line=476, offs=8)
function
string_vt_make_list_vt_7451_(a9x1)
{
let xtmp97;
let xtmp98;
let xtmp107;
let xtmp108;
;
// ./../../../xanadu/prelude/DATS/string.dats: 6370(line=449, offs=1) -- 6393(line=450, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xanadu/prelude/DATS/string.dats: 6397(line=452, offs=1) -- 6639(line=474, offs=5)
function
loop_6400_(a10x1, a10x2, a10x3)
{
let a10y1;
let a10y2;
let a10y3;
let xtmp90;
let xtmp91;
let xtmp92;
let xtmp93;
let xtmp94;
let xtmp95;
let xtmp96;
do {
;
;
;
{
xtmp91 = 0;
do {
do {
if(0!==a10x3[0]) break;
xtmp91 = 1;
} while(false);
if(xtmp91 > 0 ) break;
do {
if(1!==a10x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp91 = 2;
} while(false);
if(xtmp91 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp91) {
case 1:
{
xtmp90 = [-1];;
}
;
break;
case 2:
xtmp92 = a10x3[1];
xtmp93 = a10x3[2];
// ./../../../xanadu/prelude/DATS/string.dats: 6596(line=471, offs=1) -- 6635(line=472, offs=31)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9440(line=644, offs=1) -- 9594(line=654, offs=25)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9510(line=650, offs=1) -- 9592(line=653, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp94 = strtmp_vt_set_at_5715_(a10x1, a10x2, xtmp92);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(94)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(94)));
} // val(H0Pnil())
;
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp96 = gint_succ_sint_1861_(a10x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(95); L1VALfcst(loop(47)); L1VALtmp(arg[1](87)), L1VALtmp(tmp(96)), L1VALtmp(tmp(93)))
a10y1 = a10x1; a10y2 = xtmp96; a10y3 = xtmp93; a10x1 = a10y1; a10x2 = a10y2; a10x3 = a10y3; continue;
}
;
xtmp90 = xtmp95;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp90;
} // function // loop(47)
;
// ./../../../xanadu/prelude/DATS/string.dats: 6275(line=440, offs=1) -- 6322(line=442, offs=21)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9285(line=633, offs=1) -- 9419(line=642, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9353(line=639, offs=1) -- 9417(line=641, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_6891_ = XATS2JS_strtmp_vt_alloc
;
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a10x1)
{
let xtmp106;
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a11x1, a11x2)
{
let xtmp102;
let xtmp103;
let xtmp104;
let xtmp105;
;
;
{
xtmp103 = 0;
do {
do {
if(0!==a11x1[0]) break;
xtmp103 = 1;
} while(false);
if(xtmp103 > 0 ) break;
do {
if(1!==a11x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp103 = 2;
} while(false);
if(xtmp103 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp103) {
case 1:
xtmp102 = a11x2;
break;
case 2:
xtmp104 = a11x1[2];
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3389(line=243, offs=1) -- 3446(line=244, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp105 = gint_add_sint_sint_3439_(a11x2, 1);
}
;
xtmp102 = loop_2130_(xtmp104, xtmp105);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp102;
} // function // loop(53)
;
{
xtmp106 = loop_2130_(a10x1, 0);
}
;
return xtmp106;
} // function // list_vt_length(52)
;
xtmp98 = list_vt_length_2328_(a9x1);
}
;
xtmp97 = strtmp_vt_alloc_6891_(xtmp98);
}
;
;
} // val(H0Pvar(p0(55)))
;
// ./../../../xanadu/prelude/DATS/string.dats: 6323(line=443, offs=1) -- 6353(line=444, offs=22)
{
{
xtmp107 = loop_6400_(xtmp97, 0, a9x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(107)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(107)));
} // val(H0Pnil())
;
{
xtmp108 = XATS2JS_fcast(xtmp97);
}
;
return xtmp108;
} // function // string_vt_make_list_vt(46)
;
{
xtmp109 = [0];
}
;
xtmp85 = string_vt_make_list_vt_7451_(xtmp109);
}
;
return xtmp85;
} // function // string_vt_nil(45)
;
xtmp84 = string_vt_nil_3244_();
}
;
;
} // val(H0Pvar(l1(44)))
;
{
{
xtmp111 = auxmain0_8792_(xtmp82);
}
;
xtmp110 = [1, xtmp84, xtmp111];
}
;
xtmp78 = xtmp110;
} // if-then
else
{
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 9049(line=663, offs=1) -- 9074(line=664, offs=17)
{
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 332(line=32, offs=1) -- 401(line=35, offs=32)
function
list_vt_sing_1720_(a8x1)
{
let xtmp114;
let xtmp115;
;
{
{
xtmp115 = [0];
}
;
xtmp114 = [1, a8x1, xtmp115];
}
;
return xtmp114;
} // function // list_vt_sing(57)
;
xtmp112 = list_vt_sing_1720_(xtmp81);
}
;
;
} // val(H0Pvar(rs(62)))
;
{
xtmp116 = auxmain1_9104_(xtmp82, xtmp112);
}
;
xtmp78 = xtmp116;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp78;
} // lam-function
;
xtmp122 =
function()
{
let xtmp78;
let xtmp79;
let xtmp80;
let xtmp81;
let xtmp82;
let xtmp83;
let xtmp84;
let xtmp110;
let xtmp111;
let xtmp112;
let xtmp116;
let xtmp117;
{
// ./../../../xanadu/prelude/DATS/synougat.dats: 211(line=19, offs=1) -- 250(line=21, offs=27)
function
free1_111_(a8x1)
{
let xtmp119;
;
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1554(line=120, offs=1) -- 1609(line=122, offs=41)
// { // val-binding
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1501(line=116, offs=1) -- 1550(line=118, offs=31)
function
stream_vt_free_1971_(a10x1)
{
;
return XATS2JS_llazy_free(a10x1);
} // function // stream_vt_free(19)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1971_
;
xtmp119 = g_free_1550_(a8x1);
}
;
return xtmp119;
} // function // free1(58)
;
xtmp117 = free1_111_(a6x1);
}
;
} // lam-function
;
xtmp77 = XATS2JS_new_llazy(xtmp121,xtmp122);
return xtmp77;
} // function // auxmain0(44)
function
auxmain1_9104_(a6x1, a6x2)
{
let xtmp125;
let xtmp126;
let xtmp127;
let xtmp128;
let xtmp141;
let xtmp165;
let xtmp173;
let xtmp174;
let xtmp175;
let xtmp176;
let xtmp189;
let xtmp213;
let xtmp214;
let xtmp215;
;
;
xtmp126 = XATS2JS_llazy_eval(a6x1);
{
xtmp127 = 0;
do {
do {
if(0!==xtmp126[0]) break;
xtmp127 = 1;
} while(false);
if(xtmp127 > 0 ) break;
do {
if(1!==xtmp126[0]) break;
//L1PCKany();
//L1PCKany();
xtmp127 = 2;
} while(false);
if(xtmp127 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp127) {
case 1:
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 9251(line=682, offs=1) -- 9279(line=683, offs=20)
{
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 3688(line=300, offs=1) -- 3766(line=303, offs=38)
function
list_vt_reverse_2756_(a7x1)
{
let xtmp130;
let xtmp140;
;
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 3789(line=307, offs=1) -- 4160(line=338, offs=10)
function
list_vt_rappend_2826_(a8x1, a8x2)
{
let xtmp139;
;
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 3869(line=316, offs=1) -- 4135(line=336, offs=5)
function
loop_3872_(a9x1, a9x2)
{
let xtmp135;
let xtmp136;
let xtmp137;
let xtmp138;
;
;
{
xtmp136 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp136 = 1;
} while(false);
if(xtmp136 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp136 = 2;
} while(false);
if(xtmp136 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp136) {
case 1:
xtmp135 = a9x2;
break;
case 2:
// ./../../../xanadu/prelude/DATS/list_vt.dats: 4032(line=331, offs=3) -- 4047(line=331, offs=18)
{
xtmp137 = a9x1[2];
;
} // val(H0Pvar(xs1(75)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 4050(line=332, offs=3) -- 4072(line=332, offs=25)
{
XATS2JS_lval_set(XATS2JS_new_cofs(a9x1,2), a9x2);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp138 = loop_3872_(xtmp137, a9x1);
}
;
xtmp135 = xtmp138;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp135;
} // function // loop(62)
;
{
xtmp139 = loop_3872_(a8x1, a8x2);
}
;
return xtmp139;
} // function // list_vt_rappend(61)
;
{
xtmp140 = [0];
}
;
xtmp130 = list_vt_rappend_2826_(a7x1, xtmp140);
}
;
return xtmp130;
} // function // list_vt_reverse(60)
;
xtmp128 = list_vt_reverse_2756_(a6x2);
}
;
;
} // val(H0Pvar(rs(68)))
;
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 9280(line=684, offs=1) -- 9315(line=685, offs=27)
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 6193(line=432, offs=1) -- 6644(line=476, offs=8)
function
string_vt_make_list_vt_7451_(a7x1)
{
let xtmp153;
let xtmp154;
let xtmp163;
let xtmp164;
;
// ./../../../xanadu/prelude/DATS/string.dats: 6370(line=449, offs=1) -- 6393(line=450, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xanadu/prelude/DATS/string.dats: 6397(line=452, offs=1) -- 6639(line=474, offs=5)
function
loop_6400_(a8x1, a8x2, a8x3)
{
let a8y1;
let a8y2;
let a8y3;
let xtmp146;
let xtmp147;
let xtmp148;
let xtmp149;
let xtmp150;
let xtmp151;
let xtmp152;
do {
;
;
;
{
xtmp147 = 0;
do {
do {
if(0!==a8x3[0]) break;
xtmp147 = 1;
} while(false);
if(xtmp147 > 0 ) break;
do {
if(1!==a8x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp147 = 2;
} while(false);
if(xtmp147 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp147) {
case 1:
{
xtmp146 = [-1];;
}
;
break;
case 2:
xtmp148 = a8x3[1];
xtmp149 = a8x3[2];
// ./../../../xanadu/prelude/DATS/string.dats: 6596(line=471, offs=1) -- 6635(line=472, offs=31)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9440(line=644, offs=1) -- 9594(line=654, offs=25)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9510(line=650, offs=1) -- 9592(line=653, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp150 = strtmp_vt_set_at_5715_(a8x1, a8x2, xtmp148);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(150)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(150)));
} // val(H0Pnil())
;
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp152 = gint_succ_sint_1861_(a8x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(151); L1VALfcst(loop(47)); L1VALtmp(arg[1](143)), L1VALtmp(tmp(152)), L1VALtmp(tmp(149)))
a8y1 = a8x1; a8y2 = xtmp152; a8y3 = xtmp149; a8x1 = a8y1; a8x2 = a8y2; a8x3 = a8y3; continue;
}
;
xtmp146 = xtmp151;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp146;
} // function // loop(47)
;
// ./../../../xanadu/prelude/DATS/string.dats: 6275(line=440, offs=1) -- 6322(line=442, offs=21)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9285(line=633, offs=1) -- 9419(line=642, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9353(line=639, offs=1) -- 9417(line=641, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_6891_ = XATS2JS_strtmp_vt_alloc
;
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a8x1)
{
let xtmp162;
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a9x1, a9x2)
{
let xtmp158;
let xtmp159;
let xtmp160;
let xtmp161;
;
;
{
xtmp159 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp159 = 1;
} while(false);
if(xtmp159 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp159 = 2;
} while(false);
if(xtmp159 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp159) {
case 1:
xtmp158 = a9x2;
break;
case 2:
xtmp160 = a9x1[2];
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3389(line=243, offs=1) -- 3446(line=244, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp161 = gint_add_sint_sint_3439_(a9x2, 1);
}
;
xtmp158 = loop_2130_(xtmp160, xtmp161);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp158;
} // function // loop(53)
;
{
xtmp162 = loop_2130_(a8x1, 0);
}
;
return xtmp162;
} // function // list_vt_length(52)
;
xtmp154 = list_vt_length_2328_(a7x1);
}
;
xtmp153 = strtmp_vt_alloc_6891_(xtmp154);
}
;
;
} // val(H0Pvar(p0(55)))
;
// ./../../../xanadu/prelude/DATS/string.dats: 6323(line=443, offs=1) -- 6353(line=444, offs=22)
{
{
xtmp163 = loop_6400_(xtmp153, 0, a7x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(163)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(163)));
} // val(H0Pnil())
;
{
xtmp164 = XATS2JS_fcast(xtmp153);
}
;
return xtmp164;
} // function // string_vt_make_list_vt(46)
;
xtmp141 = string_vt_make_list_vt_7451_(xtmp128);
}
;
;
} // val(H0Pvar(l1(76)))
;
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1201(line=98, offs=1) -- 1278(line=101, offs=37)
function
strmcon_vt_sing_1762_(a7x1)
{
let xtmp167;
let xtmp168;
;
{
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 927(line=76, offs=1) -- 988(line=79, offs=25)
function
stream_vt_nil_1572_()
{
let xtmp169;
let xtmp171;
let xtmp172;
xtmp171 =
function()
{
let xtmp170;
{
xtmp170 = [0];
}
;
return xtmp170;
} // lam-function
;
xtmp172 =
function()
{
let xtmp170;
} // lam-function
;
xtmp169 = XATS2JS_new_llazy(xtmp171,xtmp172);
return xtmp169;
} // function // stream_vt_nil(64)
;
xtmp168 = stream_vt_nil_1572_();
}
;
xtmp167 = [1, a7x1, xtmp168];
}
;
return xtmp167;
} // function // strmcon_vt_sing(63)
;
xtmp165 = strmcon_vt_sing_1762_(xtmp141);
}
;
xtmp125 = xtmp165;
break;
case 2:
xtmp173 = xtmp126[1];
xtmp174 = xtmp126[2];
{
xtmp175 = iseol_8747_(xtmp173);
}
;
if
(xtmp175)
// then
{
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 9371(line=693, offs=1) -- 9399(line=694, offs=20)
{
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 3688(line=300, offs=1) -- 3766(line=303, offs=38)
function
list_vt_reverse_2756_(a7x1)
{
let xtmp178;
let xtmp188;
;
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 3789(line=307, offs=1) -- 4160(line=338, offs=10)
function
list_vt_rappend_2826_(a8x1, a8x2)
{
let xtmp187;
;
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 3869(line=316, offs=1) -- 4135(line=336, offs=5)
function
loop_3872_(a9x1, a9x2)
{
let xtmp183;
let xtmp184;
let xtmp185;
let xtmp186;
;
;
{
xtmp184 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp184 = 1;
} while(false);
if(xtmp184 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp184 = 2;
} while(false);
if(xtmp184 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp184) {
case 1:
xtmp183 = a9x2;
break;
case 2:
// ./../../../xanadu/prelude/DATS/list_vt.dats: 4032(line=331, offs=3) -- 4047(line=331, offs=18)
{
xtmp185 = a9x1[2];
;
} // val(H0Pvar(xs1(75)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 4050(line=332, offs=3) -- 4072(line=332, offs=25)
{
XATS2JS_lval_set(XATS2JS_new_cofs(a9x1,2), a9x2);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp186 = loop_3872_(xtmp185, a9x1);
}
;
xtmp183 = xtmp186;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp183;
} // function // loop(62)
;
{
xtmp187 = loop_3872_(a8x1, a8x2);
}
;
return xtmp187;
} // function // list_vt_rappend(61)
;
{
xtmp188 = [0];
}
;
xtmp178 = list_vt_rappend_2826_(a7x1, xtmp188);
}
;
return xtmp178;
} // function // list_vt_reverse(60)
;
xtmp176 = list_vt_reverse_2756_(a6x2);
}
;
;
} // val(H0Pvar(rs(80)))
;
// ./../../../xanadu/xatslib/githwxi/DATS/mygist.dats: 9400(line=695, offs=1) -- 9435(line=696, offs=27)
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 6193(line=432, offs=1) -- 6644(line=476, offs=8)
function
string_vt_make_list_vt_7451_(a7x1)
{
let xtmp201;
let xtmp202;
let xtmp211;
let xtmp212;
;
// ./../../../xanadu/prelude/DATS/string.dats: 6370(line=449, offs=1) -- 6393(line=450, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xanadu/prelude/DATS/string.dats: 6397(line=452, offs=1) -- 6639(line=474, offs=5)
function
loop_6400_(a8x1, a8x2, a8x3)
{
let a8y1;
let a8y2;
let a8y3;
let xtmp194;
let xtmp195;
let xtmp196;
let xtmp197;
let xtmp198;
let xtmp199;
let xtmp200;
do {
;
;
;
{
xtmp195 = 0;
do {
do {
if(0!==a8x3[0]) break;
xtmp195 = 1;
} while(false);
if(xtmp195 > 0 ) break;
do {
if(1!==a8x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp195 = 2;
} while(false);
if(xtmp195 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp195) {
case 1:
{
xtmp194 = [-1];;
}
;
break;
case 2:
xtmp196 = a8x3[1];
xtmp197 = a8x3[2];
// ./../../../xanadu/prelude/DATS/string.dats: 6596(line=471, offs=1) -- 6635(line=472, offs=31)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9440(line=644, offs=1) -- 9594(line=654, offs=25)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9510(line=650, offs=1) -- 9592(line=653, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp198 = strtmp_vt_set_at_5715_(a8x1, a8x2, xtmp196);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(198)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(198)));
} // val(H0Pnil())
;
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp200 = gint_succ_sint_1861_(a8x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(199); L1VALfcst(loop(47)); L1VALtmp(arg[1](191)), L1VALtmp(tmp(200)), L1VALtmp(tmp(197)))
a8y1 = a8x1; a8y2 = xtmp200; a8y3 = xtmp197; a8x1 = a8y1; a8x2 = a8y2; a8x3 = a8y3; continue;
}
;
xtmp194 = xtmp199;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp194;
} // function // loop(47)
;
// ./../../../xanadu/prelude/DATS/string.dats: 6275(line=440, offs=1) -- 6322(line=442, offs=21)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9285(line=633, offs=1) -- 9419(line=642, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9353(line=639, offs=1) -- 9417(line=641, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_6891_ = XATS2JS_strtmp_vt_alloc
;
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a8x1)
{
let xtmp210;
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a9x1, a9x2)
{
let xtmp206;
let xtmp207;
let xtmp208;
let xtmp209;
;
;
{
xtmp207 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp207 = 1;
} while(false);
if(xtmp207 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp207 = 2;
} while(false);
if(xtmp207 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp207) {
case 1:
xtmp206 = a9x2;
break;
case 2:
xtmp208 = a9x1[2];
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3389(line=243, offs=1) -- 3446(line=244, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp209 = gint_add_sint_sint_3439_(a9x2, 1);
}
;
xtmp206 = loop_2130_(xtmp208, xtmp209);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp206;
} // function // loop(53)
;
{
xtmp210 = loop_2130_(a8x1, 0);
}
;
return xtmp210;
} // function // list_vt_length(52)
;
xtmp202 = list_vt_length_2328_(a7x1);
}
;
xtmp201 = strtmp_vt_alloc_6891_(xtmp202);
}
;
;
} // val(H0Pvar(p0(55)))
;
// ./../../../xanadu/prelude/DATS/string.dats: 6323(line=443, offs=1) -- 6353(line=444, offs=22)
{
{
xtmp211 = loop_6400_(xtmp201, 0, a7x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(211)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(211)));
} // val(H0Pnil())
;
{
xtmp212 = XATS2JS_fcast(xtmp201);
}
;
return xtmp212;
} // function // string_vt_make_list_vt(46)
;
xtmp189 = string_vt_make_list_vt_7451_(xtmp176);
}
;
;
} // val(H0Pvar(l1(81)))
;
{
{
xtmp214 = auxmain0_8792_(xtmp174);
}
;
xtmp213 = [1, xtmp189, xtmp214];
}
;
xtmp125 = xtmp213;
} // if-then
else
{
{
{
xtmp215 = [1, xtmp173, a6x2];
}
;
xtmp125 = auxmain1_9104_(xtmp174, xtmp215);
}
;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp125;
} // function // auxmain1(59)
;
{
xtmp216 = auxmain0_8792_(a5x1);
}
;
return xtmp216;
} // function // cstream_vt_split_lines(36)
;
{
// ./../../../xanadu/prelude/DATS/string.dats: 5174(line=336, offs=1) -- 5461(line=364, offs=8)
function
string_streamize_6812_(a5x1)
{
let xtmp219;
let xtmp243;
;
// ./../../../xanadu/prelude/DATS/string.dats: 5243(line=344, offs=1) -- 5271(line=345, offs=20)
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 3130(line=162, offs=1) -- 3368(line=186, offs=8)
function
string_length_5305_(a6x1)
{
let xtmp232;
;
// ./../../../xanadu/prelude/DATS/string.dats: 3192(line=170, offs=1) -- 3351(line=184, offs=5)
function
loop_3195_(a7x1, a7x2)
{
let a7y1;
let a7y2;
let xtmp223;
let xtmp227;
let xtmp228;
let xtmp231;
do {
;
;
// ./../../../xanadu/prelude/DATS/string.dats: 3265(line=177, offs=1) -- 3291(line=178, offs=23)
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1685(line=63, offs=1) -- 1744(line=66, offs=22)
function
string_nilq_3395_(a8x1)
{
let xtmp225;
let xtmp226;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 912(line=75, offs=1) -- 951(line=76, offs=32)
// { // val-binding
// } // val-binding
const // implval/fun
char_eqzq_1683_ = XATS2JS_char_eqzq
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8410(line=570, offs=1) -- 8538(line=579, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8478(line=576, offs=1) -- 8536(line=578, offs=31)
;
// } // val-binding
const // implval/fun
string_head_opt_3911_ = XATS2JS_string_head_opt
;
xtmp226 = string_head_opt_3911_(a8x1);
}
;
xtmp225 = char_eqzq_1683_(xtmp226);
}
;
return xtmp225;
} // function // string_nilq(23)
;
xtmp223 = string_nilq_3395_(a7x1);
}
;
;
} // val(H0Pvar(test(26)))
;
if
(xtmp223)
// then
{
xtmp227 = a7x2;
} // if-then
else
{
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1879(line=77, offs=1) -- 1928(line=79, offs=22)
function
string_tail_4009_(a8x1)
{
let xtmp230;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8708(line=592, offs=1) -- 8838(line=601, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8776(line=598, offs=1) -- 8836(line=600, offs=33)
;
// } // val-binding
const // implval/fun
string_tail_raw_4165_ = XATS2JS_string_tail_raw
;
xtmp230 = string_tail_raw_4165_(a8x1);
}
;
return xtmp230;
} // function // string_tail(28)
;
xtmp228 = string_tail_4009_(a7x1);
}
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp231 = gint_succ_sint_1861_(a7x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(227); L1VALfcst(loop(22)); L1VALtmp(tmp(228)), L1VALtmp(tmp(231)))
a7y1 = xtmp228; a7y2 = xtmp231; a7x1 = a7y1; a7x2 = a7y2; continue;
}
;
} // if-else
;
break;//return
} while( true );
return xtmp227;
} // function // loop(22)
;
{
xtmp232 = loop_3195_(a6x1, 0);
}
;
return xtmp232;
} // function // string_length(15)
;
xtmp219 = string_length_5305_(a5x1);
}
;
;
} // val(H0Pvar(n0(83)))
;
// ./../../../xanadu/prelude/DATS/string.dats: 5272(line=346, offs=1) -- 5459(line=363, offs=8)
function
auxmain_5275_(a6x1)
{
let xtmp234;
let xtmp241;
let xtmp242;
;
xtmp241 =
function()
{
let xtmp235;
let xtmp236;
let xtmp237;
let xtmp238;
let xtmp239;
let xtmp240;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2844(line=205, offs=1) -- 2901(line=206, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
xtmp236 = gint_gte_sint_sint_2466_(a6x1, xtmp219);
}
;
if
(xtmp236)
// then
{
{
xtmp235 = [0];
}
;
} // if-then
else
{
// ./../../../xanadu/prelude/DATS/string.dats: 5367(line=358, offs=1) -- 5382(line=358, offs=16)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8859(line=603, offs=1) -- 9001(line=614, offs=22)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8923(line=609, offs=1) -- 8999(line=613, offs=22)
;
// } // val-binding
const // implval/fun
string_get_at_5545_ = XATS2JS_string_get_at
;
xtmp237 = string_get_at_5545_(a5x1, a6x1);
}
;
;
} // val(H0Pvar(ci(86)))
;
// ./../../../xanadu/prelude/DATS/string.dats: 5383(line=359, offs=1) -- 5400(line=359, offs=18)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp238 = gint_succ_sint_1861_(a6x1);
}
;
;
} // val(H0Pvar(i0(88)))
;
{
{
xtmp240 = auxmain_5275_(xtmp238);
}
;
xtmp239 = [1, xtmp237, xtmp240];
}
;
xtmp235 = xtmp239;
} // if-else
;
return xtmp235;
} // lam-function
;
xtmp242 =
function()
{
let xtmp235;
let xtmp236;
let xtmp237;
let xtmp238;
let xtmp239;
let xtmp240;
} // lam-function
;
xtmp234 = XATS2JS_new_llazy(xtmp241,xtmp242);
return xtmp234;
} // function // auxmain(66)
;
{
xtmp243 = auxmain_5275_(0);
}
;
return xtmp243;
} // function // string_streamize(65)
;
xtmp217 = string_streamize_6812_(a4x1);
}
;
xtmp68 = cstream_vt_split_lines_8397_(xtmp217);
}
;
return xtmp68;
} // function // string_split_lines(7)
;
xtmp66 = string_split_lines_8197_(xtmp65);
}
;
;
} // val(H0Pvar(words(5)))
;
// ./JS_spelling.dats: 683(line=42, offs=1) -- 702(line=42, offs=20)
// L1DCLnone1(H0Cnone1(...));
// ./JS_spelling.dats: 703(line=43, offs=1) -- 725(line=43, offs=23)
// L1DCLnone1(H0Cnone1(...));
// ./JS_spelling.dats: 726(line=44, offs=1) -- 765(line=44, offs=40)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 8898(line=717, offs=1) -- 9222(line=749, offs=8)
function
stream_vt_map0_3819_(a4x1)
{
let xtmp260;
;
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 8965(line=725, offs=1) -- 9220(line=748, offs=12)
function
auxmain_8968_(a5x1)
{
let xtmp247;
let xtmp258;
let xtmp259;
;
xtmp258 =
function()
{
let xtmp248;
let xtmp249;
let xtmp250;
let xtmp251;
let xtmp252;
let xtmp253;
let xtmp254;
let xtmp255;
let xtmp256;
xtmp249 = XATS2JS_llazy_eval(a5x1);
{
xtmp250 = 0;
do {
do {
if(0!==xtmp249[0]) break;
xtmp250 = 1;
} while(false);
if(xtmp250 > 0 ) break;
do {
if(1!==xtmp249[0]) break;
//L1PCKany();
//L1PCKany();
xtmp250 = 2;
} while(false);
if(xtmp250 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp250) {
case 1:
{
xtmp248 = [0];
}
;
break;
case 2:
xtmp251 = xtmp249[1];
xtmp252 = xtmp249[2];
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 9144(line=743, offs=3) -- 9176(line=744, offs=24)
{
{
// ./JS_spelling.dats: 726(line=44, offs=1) -- 765(line=44, offs=40)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7075(line=455, offs=1) -- 7195(line=465, offs=20)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7135(line=461, offs=1) -- 7193(line=464, offs=31)
;
// } // val-binding
const // implval/fun
string_vt2t_2060_ = XATS2JS_string_vt2t
;
// } // val-binding
const // implval/fun
map0$fopr_2343_ = string_vt2t_2060_
;
xtmp253 = map0$fopr_2343_(xtmp251);
}
;
;
} // val(H0Pvar(y0(94)))
;
{
{
xtmp255 = auxmain_8968_(xtmp252);
}
;
xtmp254 = [1, xtmp253, xtmp255];
}
;
xtmp248 = xtmp254;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp248;
} // lam-function
;
xtmp259 =
function()
{
let xtmp248;
let xtmp249;
let xtmp250;
let xtmp251;
let xtmp252;
let xtmp253;
let xtmp254;
let xtmp255;
let xtmp256;
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1554(line=120, offs=1) -- 1609(line=122, offs=41)
// { // val-binding
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 1501(line=116, offs=1) -- 1550(line=118, offs=31)
function
stream_vt_free_1971_(a8x1)
{
;
return XATS2JS_llazy_free(a8x1);
} // function // stream_vt_free(19)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1971_
;
xtmp256 = g_free_1550_(a5x1);
}
;
} // lam-function
;
xtmp247 = XATS2JS_new_llazy(xtmp258,xtmp259);
return xtmp247;
} // function // auxmain(69)
;
{
xtmp260 = auxmain_8968_(a4x1);
}
;
return xtmp260;
} // function // stream_vt_map0(10)
;
xtmp244 = stream_vt_map0_3819_(xtmp66);
}
;
return xtmp244;
} // function // spelling$words(6)
;
xtmp64 = spelling$words_276_();
}
;
xtmp44 = stream_vt_filter0_4021_(xtmp64);
}
;
return xtmp44;
} // function // spelling(33)
;
xtmp38 = spelling_107_();
}
;
xtmp5 = stream_vt_filter0_4021_(xtmp38);
}
;
;
} // val(H0Pvar(theWords(10)))
;
// ./JS_spelling.dats: 1089(line=71, offs=1) -- 1121(line=73, offs=18)
{
{
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 4751(line=379, offs=1) -- 5136(line=410, offs=8)
function
stream_vt_listize_2805_(a2x1)
{
let xtmp273;
let xtmp274;
;
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 4801(line=384, offs=1) -- 5048(line=404, offs=5)
function
loop_4804_(a3x1, a3x2)
{
let xtmp265;
let xtmp266;
let xtmp267;
let xtmp268;
let xtmp269;
let xtmp270;
let xtmp271;
let xtmp272;
;
;
xtmp266 = XATS2JS_llazy_eval(a3x1);
{
xtmp267 = 0;
do {
do {
if(0!==xtmp266[0]) break;
xtmp267 = 1;
} while(false);
if(xtmp267 > 0 ) break;
do {
if(1!==xtmp266[0]) break;
//L1PCKany();
//L1PCKany();
xtmp267 = 2;
} while(false);
if(xtmp267 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp267) {
case 1:
{
xtmp268 = [0];
}
;
XATS2JS_lval_set(a3x2, xtmp268);
xtmp265 = null;
break;
case 2:
xtmp269 = xtmp266[1];
xtmp270 = xtmp266[2];
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 4971(line=399, offs=3) -- 5009(line=400, offs=30)
{
{
xtmp271 = [1, xtmp269, XATS2JS_top];
}
;
XATS2JS_lval_set(a3x2, xtmp271);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp272 = loop_4804_(xtmp270, XATS2JS_new_cofs(XATS2JS_lval_get(a3x2),2));
}
;
xtmp265 = null;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp265;
} // function // loop(72)
;
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 5079(line=408, offs=1) -- 5097(line=408, offs=19)
{
xtmp273 = XATS2JS_new_var0();
} // val(r0(103))
;
// ./../../../xanadu/prelude/DATS/stream_vt.dats: 5098(line=409, offs=1) -- 5119(line=409, offs=22)
{
{
xtmp274 = loop_4804_(a2x1, xtmp273);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(274)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(274)));
} // val(H0Pnil())
;
return XATS2JS_lval_get(xtmp273);
} // function // stream_vt_listize(71)
;
xtmp261 = stream_vt_listize_2805_(xtmp5);
}
;
;
} // val(H0Pvar(theWords(96)))
;
// ./JS_spelling.dats: 1122(line=74, offs=1) -- 1329(line=87, offs=20)
{
// ./JS_spelling.dats: 1165(line=78, offs=1) -- 1293(line=86, offs=8)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 7965(line=650, offs=1) -- 9052(line=747, offs=13)
function
list_vt_mergesort_4006_(a2x1)
{
let xtmp345;
let xtmp346;
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8018(line=655, offs=1) -- 8041(line=656, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8045(line=658, offs=1) -- 8986(line=743, offs=6)
function
amain_8048_(a3x1, a3x2)
{
let xtmp279;
let xtmp280;
let xtmp281;
let xtmp282;
let xtmp283;
let xtmp284;
let xtmp285;
let xtmp286;
let xtmp287;
let xtmp288;
;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2681(line=194, offs=1) -- 2738(line=195, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp280 = gint_lte_sint_sint_2380_(a3x2, 1);
}
;
if
(xtmp280)
// then
{
xtmp279 = a3x1;
} // if-then
else
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8168(line=672, offs=3) -- 8183(line=672, offs=18)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3875(line=274, offs=1) -- 3932(line=275, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_div_sint_sint_3694_ = XATS2JS_gint_div_sint_sint
;
xtmp281 = gint_div_sint_sint_3694_(a3x2, 2);
}
;
;
} // val(H0Pvar(n2(112)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8186(line=673, offs=3) -- 8202(line=673, offs=19)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp282 = gint_sub_sint_sint_3524_(a3x2, xtmp281);
}
;
;
} // val(H0Pvar(n1(113)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8205(line=674, offs=3) -- 8216(line=674, offs=14)
{
xtmp283 = XATS2JS_new_var1(a3x1);
} // val(ys(114))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8219(line=675, offs=3) -- 8241(line=675, offs=25)
{
{
xtmp284 = split_8300_(xtmp283, xtmp282);
}
;
;
} // val(H0Pvar(zs(115)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8244(line=676, offs=3) -- 8266(line=676, offs=25)
{
{
xtmp285 = amain_8048_(XATS2JS_lval_get(xtmp283), xtmp282);
}
;
;
} // val(H0Pvar(ys(117)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8269(line=677, offs=3) -- 8291(line=677, offs=25)
{
{
xtmp286 = amain_8048_(xtmp284, xtmp281);
}
;
;
} // val(H0Pvar(zs(118)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8114(line=666, offs=3) -- 8124(line=666, offs=13)
{
xtmp287 = XATS2JS_new_var0();
} // val(xs(119))
;
{
xtmp288 = merge_8464_(xtmp285, xtmp286, xtmp287);
}
;
xtmp279 = XATS2JS_lval_get(xtmp287);
} // if-else
;
return xtmp279;
} // function // amain(77)
function
split_8300_(a3x1, a3x2)
{
let xtmp291;
let xtmp292;
let xtmp293;
let xtmp294;
let xtmp295;
let xtmp296;
;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2844(line=205, offs=1) -- 2901(line=206, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
xtmp292 = gint_gte_sint_sint_2466_(a3x2, 2);
}
;
if
(xtmp292)
// then
{
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp293 = gint_sub_sint_sint_3524_(a3x2, 1);
}
;
xtmp291 = split_8300_(XATS2JS_new_cofs(XATS2JS_lval_get(a3x1),2), xtmp293);
}
;
} // if-then
else
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8389(line=692, offs=1) -- 8402(line=692, offs=14)
{
xtmp294 = XATS2JS_lval_get(a3x1);
xtmp295 = xtmp294[2];
;
} // val(H0Pvar(zs(123)))
;
{
xtmp296 = [0];
}
;
XATS2JS_lval_set(XATS2JS_new_cofs(XATS2JS_lval_get(a3x1),2), xtmp296);
xtmp291 = xtmp295;
} // if-else
;
return xtmp291;
} // function // split(84)
function
merge_8464_(a3x1, a3x2, a3x3)
{
let xtmp300;
let xtmp301;
let xtmp302;
let xtmp303;
let xtmp304;
let xtmp305;
let xtmp306;
let xtmp307;
let xtmp341;
let xtmp342;
let xtmp343;
let xtmp344;
;
;
;
{
xtmp301 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp301 = 1;
} while(false);
if(xtmp301 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp301 = 2;
} while(false);
if(xtmp301 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp301) {
case 1:
XATS2JS_lval_set(a3x3, a3x2);
xtmp300 = null;
break;
case 2:
xtmp302 = a3x1[1];
xtmp303 = a3x1[2];
{
xtmp304 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp304 = 1;
} while(false);
if(xtmp304 > 0 ) break;
do {
if(1!==a3x2[0]) break;
//L1PCKany();
//L1PCKany();
xtmp304 = 2;
} while(false);
if(xtmp304 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp304) {
case 1:
XATS2JS_lval_set(a3x3, a3x1);
xtmp300 = null;
break;
case 2:
xtmp305 = a3x2[1];
xtmp306 = a3x2[2];
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8686(line=718, offs=1) -- 8715(line=719, offs=26)
{
{
// ./../../../xanadu/prelude/DATS/gord.dats: 1483(line=122, offs=1) -- 1520(line=124, offs=23)
// { // val-binding
// ./JS_spelling.dats: 1165(line=78, offs=1) -- 1293(line=86, offs=8)
function
g_cmp_1644_(a5x1, a5x2)
{
let xtmp310;
let xtmp311;
let xtmp325;
let xtmp339;
let xtmp340;
;
;
// ./JS_spelling.dats: 1201(line=81, offs=1) -- 1240(line=83, offs=30)
{
{
// ./../../../xanadu/prelude/DATS/gint.dats: 2377(line=100, offs=1) -- 2419(line=101, offs=35)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3204(line=230, offs=1) -- 3261(line=231, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_cmp_sint_sint_3209_ = XATS2JS_gint_cmp_sint_sint
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = gint_cmp_sint_sint_3209_
;
{
// ./../../../xanadu/prelude/DATS/string.dats: 3130(line=162, offs=1) -- 3368(line=186, offs=8)
function
string_length_5305_(a6x1)
{
let xtmp324;
;
// ./../../../xanadu/prelude/DATS/string.dats: 3192(line=170, offs=1) -- 3351(line=184, offs=5)
function
loop_3195_(a7x1, a7x2)
{
let a7y1;
let a7y2;
let xtmp315;
let xtmp319;
let xtmp320;
let xtmp323;
do {
;
;
// ./../../../xanadu/prelude/DATS/string.dats: 3265(line=177, offs=1) -- 3291(line=178, offs=23)
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1685(line=63, offs=1) -- 1744(line=66, offs=22)
function
string_nilq_3395_(a8x1)
{
let xtmp317;
let xtmp318;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 912(line=75, offs=1) -- 951(line=76, offs=32)
// { // val-binding
// } // val-binding
const // implval/fun
char_eqzq_1683_ = XATS2JS_char_eqzq
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8410(line=570, offs=1) -- 8538(line=579, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8478(line=576, offs=1) -- 8536(line=578, offs=31)
;
// } // val-binding
const // implval/fun
string_head_opt_3911_ = XATS2JS_string_head_opt
;
xtmp318 = string_head_opt_3911_(a8x1);
}
;
xtmp317 = char_eqzq_1683_(xtmp318);
}
;
return xtmp317;
} // function // string_nilq(23)
;
xtmp315 = string_nilq_3395_(a7x1);
}
;
;
} // val(H0Pvar(test(26)))
;
if
(xtmp315)
// then
{
xtmp319 = a7x2;
} // if-then
else
{
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1879(line=77, offs=1) -- 1928(line=79, offs=22)
function
string_tail_4009_(a8x1)
{
let xtmp322;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8708(line=592, offs=1) -- 8838(line=601, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8776(line=598, offs=1) -- 8836(line=600, offs=33)
;
// } // val-binding
const // implval/fun
string_tail_raw_4165_ = XATS2JS_string_tail_raw
;
xtmp322 = string_tail_raw_4165_(a8x1);
}
;
return xtmp322;
} // function // string_tail(28)
;
xtmp320 = string_tail_4009_(a7x1);
}
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp323 = gint_succ_sint_1861_(a7x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(319); L1VALfcst(loop(22)); L1VALtmp(tmp(320)), L1VALtmp(tmp(323)))
a7y1 = xtmp320; a7y2 = xtmp323; a7x1 = a7y1; a7x2 = a7y2; continue;
}
;
} // if-else
;
break;//return
} while( true );
return xtmp319;
} // function // loop(22)
;
{
xtmp324 = loop_3195_(a6x1, 0);
}
;
return xtmp324;
} // function // string_length(15)
;
xtmp311 = string_length_5305_(a5x1);
}
;
{
// ./../../../xanadu/prelude/DATS/string.dats: 3130(line=162, offs=1) -- 3368(line=186, offs=8)
function
string_length_5305_(a6x1)
{
let xtmp338;
;
// ./../../../xanadu/prelude/DATS/string.dats: 3192(line=170, offs=1) -- 3351(line=184, offs=5)
function
loop_3195_(a7x1, a7x2)
{
let a7y1;
let a7y2;
let xtmp329;
let xtmp333;
let xtmp334;
let xtmp337;
do {
;
;
// ./../../../xanadu/prelude/DATS/string.dats: 3265(line=177, offs=1) -- 3291(line=178, offs=23)
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1685(line=63, offs=1) -- 1744(line=66, offs=22)
function
string_nilq_3395_(a8x1)
{
let xtmp331;
let xtmp332;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 912(line=75, offs=1) -- 951(line=76, offs=32)
// { // val-binding
// } // val-binding
const // implval/fun
char_eqzq_1683_ = XATS2JS_char_eqzq
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8410(line=570, offs=1) -- 8538(line=579, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8478(line=576, offs=1) -- 8536(line=578, offs=31)
;
// } // val-binding
const // implval/fun
string_head_opt_3911_ = XATS2JS_string_head_opt
;
xtmp332 = string_head_opt_3911_(a8x1);
}
;
xtmp331 = char_eqzq_1683_(xtmp332);
}
;
return xtmp331;
} // function // string_nilq(23)
;
xtmp329 = string_nilq_3395_(a7x1);
}
;
;
} // val(H0Pvar(test(26)))
;
if
(xtmp329)
// then
{
xtmp333 = a7x2;
} // if-then
else
{
{
{
// ./../../../xanadu/prelude/DATS/string.dats: 1879(line=77, offs=1) -- 1928(line=79, offs=22)
function
string_tail_4009_(a8x1)
{
let xtmp336;
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8708(line=592, offs=1) -- 8838(line=601, offs=24)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8776(line=598, offs=1) -- 8836(line=600, offs=33)
;
// } // val-binding
const // implval/fun
string_tail_raw_4165_ = XATS2JS_string_tail_raw
;
xtmp336 = string_tail_raw_4165_(a8x1);
}
;
return xtmp336;
} // function // string_tail(28)
;
xtmp334 = string_tail_4009_(a7x1);
}
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp337 = gint_succ_sint_1861_(a7x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(333); L1VALfcst(loop(22)); L1VALtmp(tmp(334)), L1VALtmp(tmp(337)))
a7y1 = xtmp334; a7y2 = xtmp337; a7x1 = a7y1; a7x2 = a7y2; continue;
}
;
} // if-else
;
break;//return
} while( true );
return xtmp333;
} // function // loop(22)
;
{
xtmp338 = loop_3195_(a6x1, 0);
}
;
return xtmp338;
} // function // string_length(15)
;
xtmp325 = string_length_5305_(a5x2);
}
;
xtmp310 = g_cmp_1644_(xtmp311, xtmp325);
}
;
;
} // val(H0Pvar(sgn(107)))
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3007(line=216, offs=1) -- 3064(line=217, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_neq_sint_sint_2555_ = XATS2JS_gint_neq_sint_sint
;
xtmp340 = gint_neq_sint_sint_2555_(xtmp310, 0);
}
;
if
(xtmp340)
// then
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1580(line=118, offs=1) -- 1627(line=119, offs=40)
// { // val-binding
// } // val-binding
const // implval/fun
gint_neg_sint_1705_ = XATS2JS_gint_neg_sint
;
xtmp339 = gint_neg_sint_1705_(xtmp310);
}
;
} // if-then
else
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8264(line=558, offs=1) -- 8389(line=568, offs=19)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8322(line=564, offs=1) -- 8387(line=567, offs=31)
;
// } // val-binding
const // implval/fun
string_cmp_4681_ = XATS2JS_string_cmp
;
xtmp339 = string_cmp_4681_(a5x1, a5x2);
}
;
} // if-else
;
return xtmp339;
} // function // g_cmp(41)
;
// } // val-binding
const // implval/fun
gl_cmp00_2530_ = g_cmp_1644_
;
xtmp307 = gl_cmp00_2530_(xtmp302, xtmp305);
}
;
;
} // val(H0Pvar(sgn(131)))
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2681(line=194, offs=1) -- 2738(line=195, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp342 = gint_lte_sint_sint_2380_(xtmp307, 0);
}
;
if
(xtmp342)
// then
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8742(line=725, offs=1) -- 8753(line=725, offs=12)
{
;
} // val(H0Pvar(nd(133)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8754(line=726, offs=1) -- 8766(line=726, offs=13)
{
;
} // val(H0Pvar(ys(134)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8767(line=727, offs=1) -- 8785(line=727, offs=19)
{
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
XATS2JS_lval_set(a3x3, a3x1);
{
xtmp343 = merge_8464_(xtmp303, a3x2, XATS2JS_new_cofs(XATS2JS_lval_get(a3x3),2));
}
;
xtmp341 = null;
} // if-then
else
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8847(line=734, offs=1) -- 8858(line=734, offs=12)
{
;
} // val(H0Pvar(nd(135)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8859(line=735, offs=1) -- 8871(line=735, offs=13)
{
;
} // val(H0Pvar(zs(136)))
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 8872(line=736, offs=1) -- 8890(line=736, offs=19)
{
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
XATS2JS_lval_set(a3x3, a3x2);
{
xtmp344 = merge_8464_(a3x1, xtmp306, XATS2JS_new_cofs(XATS2JS_lval_get(a3x3),2));
}
;
xtmp341 = null;
} // if-else
;
xtmp300 = xtmp341;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp300;
} // function // merge(85)
;
{
{
// ./../../../xanadu/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a3x1)
{
let xtmp354;
;
// ./../../../xanadu/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a4x1, a4x2)
{
let xtmp350;
let xtmp351;
let xtmp352;
let xtmp353;
;
;
{
xtmp351 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp351 = 1;
} while(false);
if(xtmp351 > 0 ) break;
do {
if(1!==a4x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp351 = 2;
} while(false);
if(xtmp351 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp351) {
case 1:
xtmp350 = a4x2;
break;
case 2:
xtmp352 = a4x1[2];
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3389(line=243, offs=1) -- 3446(line=244, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp353 = gint_add_sint_sint_3439_(a4x2, 1);
}
;
xtmp350 = loop_2130_(xtmp352, xtmp353);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp350;
} // function // loop(53)
;
{
xtmp354 = loop_2130_(a3x1, 0);
}
;
return xtmp354;
} // function // list_vt_length(52)
;
xtmp346 = list_vt_length_2328_(a2x1);
}
;
xtmp345 = amain_8048_(a2x1, xtmp346);
}
;
return xtmp345;
} // function // list_vt_mergesort(76)
;
xtmp275 = list_vt_mergesort_4006_(xtmp261);
}
;
;
} // val(H0Pvar(theWords(104)))
;
// ./JS_spelling.dats: 1333(line=89, offs=1) -- 1367(line=90, offs=31)
{
{
xtmp355 = XATS2JS_fcast(xtmp275);
}
;
;
} // val(H0Pvar(theWords(137)))
;
{
// ./../../../xanadu/prelude/DATS/synougat.dats: 5725(line=469, offs=1) -- 5804(line=477, offs=13)
function
println_2_1857_(a2x1, a2x2)
{
let xtmp359;
let xtmp398;
;
;
{
// ./../../../xanadu/prelude/DATS/synougat.dats: 3359(line=277, offs=1) -- 3469(line=286, offs=12)
function
print_2_464_(a3x1, a3x2)
{
let xtmp362;
let xtmp363;
let xtmp397;
;
;
// ./../../../xanadu/prelude/DATS/synougat.dats: 3412(line=284, offs=3) -- 3438(line=284, offs=29)
{
{
// ./../../../xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// { // val-binding
// ./../../../xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 690(line=62, offs=1) -- 745(line=64, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = string_print_4753_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp362 = gl_print1_2233_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(362)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(362)));
} // val(H0Pnil())
;
// ./../../../xanadu/prelude/DATS/synougat.dats: 3441(line=285, offs=3) -- 3467(line=285, offs=29)
{
{
// ./../../../xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// { // val-binding
// ./../../../xanadu/prelude/DATS/list.dats: 7521(line=651, offs=1) -- 7577(line=654, offs=23)
// { // val-binding
// ./../../../xanadu/prelude/DATS/gseq.dats: 1915(line=160, offs=1) -- 2258(line=192, offs=8)
function
gseq_print_1299_(a6x1)
{
let xtmp365;
let xtmp367;
let xtmp395;
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 1956(line=165, offs=1) -- 1989(line=166, offs=25)
{
{
// ./../../../xanadu/prelude/DATS/list.dats: 7581(line=656, offs=1) -- 7645(line=659, offs=35)
function
gseq_print$beg_1344_()
{
let xtmp366;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 690(line=62, offs=1) -- 745(line=64, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp366 = string_print_4753_("(");
}
;
return xtmp366;
} // function // gseq_print$beg(100)
;
xtmp365 = gseq_print$beg_1344_();
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(365)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(365)));
} // val(H0Pnil())
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 1993(line=168, offs=1) -- 2191(line=187, offs=7)
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 2045(line=174, offs=1) -- 2174(line=185, offs=8)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 14990(line=1224, offs=1) -- 15182(line=1240, offs=8)
function
gseq_iforeach_5147_(a7x1)
{
let xtmp369;
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 15031(line=1228, offs=1) -- 15162(line=1237, offs=25)
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 14634(line=1194, offs=1) -- 14935(line=1220, offs=8)
function
gseq_iforall_5100_(a8x1)
{
let xtmp371;
let xtmp372;
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 14677(line=1199, offs=1) -- 14693(line=1199, offs=17)
{
xtmp371 = XATS2JS_new_var1(0);
} // val(i0(151))
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 14694(line=1200, offs=1) -- 14712(line=1200, offs=19)
{
;
} // val(H0Pvar(p0(152)))
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
// L1DCLnone0();
{
// ./../../../xanadu/prelude/DATS/list.dats: 7884(line=677, offs=1) -- 7939(line=679, offs=41)
// { // val-binding
// ./../../../xanadu/prelude/DATS/list.dats: 3488(line=307, offs=1) -- 3691(line=323, offs=13)
function
list_forall_3143_(a10x1)
{
let xtmp394;
;
// ./../../../xanadu/prelude/DATS/list.dats: 3546(line=312, offs=1) -- 3689(line=322, offs=5)
function
loop_3549_(a11x1)
{
let xtmp375;
let xtmp376;
let xtmp377;
let xtmp378;
let xtmp379;
;
{
xtmp376 = 0;
do {
do {
if(0!==a11x1[0]) break;
xtmp376 = 1;
} while(false);
if(xtmp376 > 0 ) break;
do {
if(1!==a11x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp376 = 2;
} while(false);
if(xtmp376 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp376) {
case 1:
xtmp375 = true;
break;
case 2:
xtmp377 = a11x1[1];
xtmp378 = a11x1[2];
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
function
forall$test_3500_(a12x1)
{
let xtmp381;
let xtmp382;
let xtmp383;
let xtmp384;
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 14793(line=1211, offs=1) -- 14824(line=1212, offs=23)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/unsafe.dats: 239(line=19, offs=1) -- 292(line=21, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_get_1962_ = XATS2JS_UN_p2tr_get
;
xtmp381 = p2tr_get_1962_(xtmp371);
}
;
;
} // val(H0Pvar(i0(154)))
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 14825(line=1213, offs=1) -- 14866(line=1214, offs=33)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1976(line=146, offs=1) -- 2025(line=147, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp383 = gint_succ_sint_1861_(xtmp381);
}
;
xtmp382 = p2tr_set_1998_(xtmp371, xtmp383);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(382)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(382)));
} // val(H0Pnil())
;
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
function
iforall$test_5435_(a13x1, a13x2)
{
let xtmp387;
;
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 15114(line=1235, offs=1) -- 15148(line=1235, offs=35)
{
{
// ./../../../xanadu/prelude/DATS/gseq.dats: 2045(line=174, offs=1) -- 2174(line=185, offs=8)
function
iforeach$work_5677_(a14x1, a14x2)
{
let xtmp390;
let xtmp391;
let xtmp393;
;
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 2116(line=181, offs=3) -- 2172(line=184, offs=32)
{
{
// ./../../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2361(line=172, offs=1) -- 2416(line=173, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
xtmp391 = gint_gt_sint_sint_2209_(a14x1, 0);
}
;
if
(xtmp391)
// then
{
{
// ./../../../xanadu/prelude/DATS/list.dats: 7711(line=664, offs=1) -- 7775(line=667, offs=35)
function
gseq_print$sep_1446_()
{
let xtmp392;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 690(line=62, offs=1) -- 745(line=64, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp392 = string_print_4753_(";");
}
;
return xtmp392;
} // function // gseq_print$sep(103)
;
xtmp390 = gseq_print$sep_1446_();
}
;
} // if-then
else
{
} // if-else
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(390)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(390)));
} // val(H0Pnil())
;
{
// ./../../../xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 690(line=62, offs=1) -- 745(line=64, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = string_print_4753_
;
xtmp393 = g_print_2168_(a14x2);
}
;
return xtmp393;
} // function // iforeach$work(101)
;
xtmp387 = iforeach$work_5677_(a13x1, a13x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(387)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(387)));
} // val(H0Pnil())
;
return true;
} // function // iforall$test(105)
;
xtmp384 = iforall$test_5435_(xtmp381, a12x1);
}
;
return xtmp384;
} // function // forall$test(107)
;
xtmp379 = forall$test_3500_(xtmp377);
}
;
if
(xtmp379)
// then
{
{
xtmp375 = loop_3549_(xtmp378);
}
;
} // if-then
else
{
xtmp375 = false;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp375;
} // function // loop(112)
;
{
xtmp394 = loop_3549_(a10x1);
}
;
return xtmp394;
} // function // list_forall(111)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = list_forall_3143_
;
xtmp372 = gseq_forall_1939_(a8x1);
}
;
return xtmp372;
} // function // gseq_iforall(106)
;
xtmp369 = gseq_iforall_5100_(a7x1);
}
;
;
} // val(H0Pvar(test(147)))
;
return null;
} // function // gseq_iforeach(104)
;
xtmp367 = gseq_iforeach_5147_(a6x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(367)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(367)));
} // val(H0Pnil())
;
// ./../../../xanadu/prelude/DATS/gseq.dats: 2207(line=189, offs=1) -- 2248(line=190, offs=33)
{
{
// ./../../../xanadu/prelude/DATS/list.dats: 7646(line=660, offs=1) -- 7710(line=663, offs=35)
function
gseq_print$end_1395_()
{
let xtmp396;
{
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 690(line=62, offs=1) -- 745(line=64, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp396 = string_print_4753_(")");
}
;
return xtmp396;
} // function // gseq_print$end(116)
;
xtmp395 = gseq_print$end_1395_();
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(395)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(395)));
} // val(H0Pnil())
;
return null;
} // function // gseq_print(99)
;
// } // val-binding
const // implval/fun
g_print_2168_ = gseq_print_1299_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp363 = gl_print1_2233_(a3x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(363)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(363)));
} // val(H0Pnil())
;
{
xtmp397 = [-1];;
}
;
return xtmp397;
} // function // print_2(94)
;
xtmp359 = print_2_464_(a2x1, a2x2);
}
;
{
// ./../../../xanadu/prelude/DATS/synougat.dats: 5533(line=453, offs=1) -- 5586(line=456, offs=26)
function
println_0_1752_()
{
let xtmp399;
{
// ./../../../xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// { // val-binding
// ./../../../xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// { // val-binding
// ./../../../xanadu/prelude/DATS/CATS/JS/g_print.dats: 690(line=62, offs=1) -- 745(line=64, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = string_print_4753_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp399 = gl_print1_2233_("\n");
}
;
return xtmp399;
} // function // println_0(117)
;
xtmp398 = println_0_1752_();
}
;
return xtmp398;
} // function // println_2(93)
;
xtmp356 = println_2_1857_("theWords = ", xtmp355);
}
;
return xtmp356;
} // function // ATS_spelling_call(11)


