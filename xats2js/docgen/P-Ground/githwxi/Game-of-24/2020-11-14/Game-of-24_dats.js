/* ****** ****** */
//
function
input_rand()
{
//
var MAX = 13;
//
var input1 =
document.getElementById("card1_val");
var input2 =
document.getElementById("card2_val");
var input3 =
document.getElementById("card3_val");
var input4 =
document.getElementById("card4_val");
//
input1.value = Math.floor(1+MAX*Math.random()).toString();
input2.value = Math.floor(1+MAX*Math.random()).toString();
input3.value = Math.floor(1+MAX*Math.random()).toString();
input4.value = Math.floor(1+MAX*Math.random()).toString();
//
return;
} // end of [function input_rand()]
//
/* ****** ****** */
//
function
input_play()
{
//
var
input1 =
document.getElementById("card1_val");
var
input2 =
document.getElementById("card2_val");
var
input3 =
document.getElementById("card3_val");
var
input4 =
document.getElementById("card4_val");
//
var n1 = parseInt( input1.value, 10 );
var n2 = parseInt( input2.value, 10 );
var n3 = parseInt( input3.value, 10 );
var n4 = parseInt( input4.value, 10 );
//
var
theStage = document.getElementById("theStage");
//
XATS2JS_the_print_store_clear();
//
Game_of_24_play_print(n1, n2, n3, n4);
//
theStage.innerHTML = XATS2JS_the_print_store_join();
//
return;
//
} // end of [function input_play()]
//
/* ****** ****** */

/* end of [Game-of-24.cats] */
/* ****** ****** */
// XATS2JS_PRELUDE
/* ****** ****** */

'use strict';

/* ****** ****** */
/*
Runtime for Xats2js
*/
/* ****** ****** */
var
XATS2JS_top = null
var
XATS2JS_none = null
var
XATS2JS_void = null
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
/* ****** ****** */
/*
G_print for Xats2js/Node
*/
/* ****** ****** */
//
function
XATS2JS_NODE_g_print(obj)
{
let
rep = obj.toString();
process.stdout.write(rep);
return; // XATS2JS_NODE_g_print
}
//
/* ****** ****** */
function
XATS2JS_NODE_bool_print
  (b0)
{
if(b0)
{
XATS2JS_NODE_g_print("true");
}
else
{
XATS2JS_NODE_g_print("false");
}
return; // XATS2JS_NODE_bool_print
}
/* ****** ****** */
function
XATS2JS_NODE_char_print
  (c0)
{
// c0: number
XATS2JS_NODE_g_print
(String.fromCharCode(c0));
return; // XATS2JS_NODE_char_print
}
/* ****** ****** */
function
XATS2JS_NODE_gint_print_sint
  (x0)
{
XATS2JS_NODE_g_print(x0);
return; // gint_print_sint
}
function
XATS2JS_NODE_gint_print_uint
  (x0)
{
XATS2JS_NODE_g_print(x0);
return; // gint_print_uint
}
/* ****** ****** */
function
XATS2JS_NODE_string_print
  (cs)
{
  return XATS2JS_NODE_g_print(cs);
}
/* ****** ****** */

/* end of [XATS2JS_NODE_g_print.cats] */
var xtop77;
// ./Game-of-24.dats: 61(line=6, offs=1) -- 114(line=8, offs=29)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 135(line=10, offs=1) -- 178(line=11, offs=35)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 199(line=13, offs=1) -- 243(line=14, offs=36)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 267(line=17, offs=1) -- 287(line=18, offs=13)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 288(line=19, offs=1) -- 311(line=20, offs=16)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 315(line=22, offs=1) -- 337(line=22, offs=23)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 362(line=26, offs=1) -- 717(line=51, offs=6)
// L1DCLlocal(L1DCLnone1(H0Cnone1(...)); L1DCLfundecl(LFUNDECL@{nam=rat(0); hdc=rat(0); hag=HFARGnpats(-1; H0Pvar(f0(1))); def=Some(L1VALtmp(arg[1](0))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }), L1DCLnone0(), L1DCLnone0(), L1DCLnone0(), L1DCLnone0(), L1DCLnone0(), L1DCLnone0(), L1DCLnone0())
// { // local
// ./Game-of-24.dats: 368(line=27, offs=1) -- 384(line=27, offs=17)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))
// in-of-local
// ./Game-of-24.dats: 391(line=30, offs=1) -- 418(line=31, offs=24)
// L1DCLfundecl(LFUNDECL@{nam=rat(0); hdc=rat(0); hag=HFARGnpats(-1; H0Pvar(f0(1))); def=Some(L1VALtmp(arg[1](0))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
rat_394_(a1x1)
{
return a1x1;
} // function // rat(0)

// ./Game-of-24.dats: 422(line=33, offs=1) -- 454(line=34, offs=25)
// L1DCLnone0()
// L1DCLnone0()
// ./Game-of-24.dats: 458(line=36, offs=1) -- 494(line=37, offs=29)
// L1DCLnone0()
// L1DCLnone0()
// ./Game-of-24.dats: 498(line=39, offs=1) -- 539(line=40, offs=34)
// L1DCLnone0()
// L1DCLnone0()
// ./Game-of-24.dats: 543(line=42, offs=1) -- 584(line=43, offs=34)
// L1DCLnone0()
// L1DCLnone0()
// ./Game-of-24.dats: 585(line=44, offs=1) -- 626(line=45, offs=34)
// L1DCLnone0()
// L1DCLnone0()
// ./Game-of-24.dats: 627(line=46, offs=1) -- 668(line=47, offs=34)
// L1DCLnone0()
// L1DCLnone0()
// ./Game-of-24.dats: 669(line=48, offs=1) -- 710(line=49, offs=34)
// L1DCLnone0()
// L1DCLnone0()
// } // end-of-local


// ./Game-of-24.dats: 758(line=55, offs=1) -- 882(line=62, offs=22)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 1442(line=99, offs=1) -- 1479(line=101, offs=26)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=print_expr(2), hdc=print_expr(15), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=print_expr(2), hdc=print_expr(15), })))

// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLnone0()
// L1DCLnone0()

// ./Game-of-24.dats: 1518(line=105, offs=1) -- 1781(line=120, offs=10)
// L1DCLimpdecl(LIMPDECL@{hdc=print_expr(15); hag=HFARGnpats(-1; H0Pvar(x0(3))); def=Some(L1VALtmp(tmp(2))); lev=(1); lts=(arg[1](1), tmp(2), tmp(3), tmp(4), tmp(5), tmp(6), tmp(18), tmp(19), tmp(31), tmp(32), tmp(44), tmp(45)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](1)); tmp(3); L1PCKapp(L1PCKcon(LDCONcon(Int(0)); L1VALctag(L1VALtmp(arg[1](1)))); L1PCKany()), L1PCKapp(L1PCKcon(LDCONcon(Add(1)); L1VALctag(L1VALtmp(arg[1](1)))); L1PCKany(), L1PCKany()), L1PCKapp(L1PCKcon(LDCONcon(Sub(2)); L1VALctag(L1VALtmp(arg[1](1)))); L1PCKany(), L1PCKany()), L1PCKapp(L1PCKcon(LDCONcon(Mul(3)); L1VALctag(L1VALtmp(arg[1](1)))); L1PCKany(), L1PCKany()), L1PCKapp(L1PCKcon(LDCONcon(Div(4)); L1VALctag(L1VALtmp(arg[1](1)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDcarg(tmp(4); L1VALtmp(arg[1](1)); 0), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(17); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(18))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(6), hdc=XATS2JS_gint_print_sint(18), }))))); })), L1CMDapp(tmp(2); L1VALtcst(gint_print_sint(17)(0)); L1VALtmp(tmp(4)))))), L1BLKsome(L1CMDcarg(tmp(5); L1VALtmp(arg[1](1)); 0), L1CMDcarg(tmp(6); L1VALtmp(arg[1](1)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print5(19); hag=HFARGnpats(-1; H0Pvar(x1(10)), H0Pvar(x2(11)), H0Pvar(x3(12)), H0Pvar(x4(13)), H0Pvar(x5(14))); def=Some(L1VALtmp(tmp(17))); lev=(2); lts=(arg[1](7), arg[2](8), arg[3](9), arg[4](10), arg[5](11), tmp(12), tmp(13), tmp(14), tmp(15), tmp(16), tmp(17)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(12))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(3))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(4))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(12); L1VALtcst(gl_print1(20)(2)); L1VALtmp(arg[1](7))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(12)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(12))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(13))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(6))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(13); L1VALtcst(gl_print1(20)(5)); L1VALtmp(arg[2](8))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(13)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(13))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(14))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(9))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(14); L1VALtcst(gl_print1(20)(7)); L1VALtmp(arg[3](9))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(14)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(14))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(15))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(11))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(15); L1VALtcst(gl_print1(20)(10)); L1VALtmp(arg[4](10))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(15)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(15))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(16))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(13))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(14))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(16); L1VALtcst(gl_print1(20)(12)); L1VALtmp(arg[5](11))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(16)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(16))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(17); 0; )))); })), L1CMDapp(tmp(2); L1VALtcst(print5(19)(1)); L1VALchr(CHAR_char('(')), L1VALtmp(tmp(5)), L1VALchr(CHAR_char('+')), L1VALtmp(tmp(6)), L1VALchr(CHAR_char(')')))))), L1BLKsome(L1CMDcarg(tmp(18); L1VALtmp(arg[1](1)); 0), L1CMDcarg(tmp(19); L1VALtmp(arg[1](1)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print5(19); hag=HFARGnpats(-1; H0Pvar(x1(10)), H0Pvar(x2(11)), H0Pvar(x3(12)), H0Pvar(x4(13)), H0Pvar(x5(14))); def=Some(L1VALtmp(tmp(30))); lev=(2); lts=(arg[1](20), arg[2](21), arg[3](22), arg[4](23), arg[5](24), tmp(25), tmp(26), tmp(27), tmp(28), tmp(29), tmp(30)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(25))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(18))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(25); L1VALtcst(gl_print1(20)(16)); L1VALtmp(arg[1](20))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(25)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(25))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(26))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(20))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(26); L1VALtcst(gl_print1(20)(19)); L1VALtmp(arg[2](21))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(26)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(26))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(27))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(22))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(23))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(27); L1VALtcst(gl_print1(20)(21)); L1VALtmp(arg[3](22))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(27)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(27))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(28))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(25))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(28); L1VALtcst(gl_print1(20)(24)); L1VALtmp(arg[4](23))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(28)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(28))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(29))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(27))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(28))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(29); L1VALtcst(gl_print1(20)(26)); L1VALtmp(arg[5](24))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(29)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(29))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(30); 0; )))); })), L1CMDapp(tmp(2); L1VALtcst(print5(19)(15)); L1VALchr(CHAR_char('(')), L1VALtmp(tmp(18)), L1VALchr(CHAR_char('-')), L1VALtmp(tmp(19)), L1VALchr(CHAR_char(')')))))), L1BLKsome(L1CMDcarg(tmp(31); L1VALtmp(arg[1](1)); 0), L1CMDcarg(tmp(32); L1VALtmp(arg[1](1)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print5(19); hag=HFARGnpats(-1; H0Pvar(x1(10)), H0Pvar(x2(11)), H0Pvar(x3(12)), H0Pvar(x4(13)), H0Pvar(x5(14))); def=Some(L1VALtmp(tmp(43))); lev=(2); lts=(arg[1](33), arg[2](34), arg[3](35), arg[4](36), arg[5](37), tmp(38), tmp(39), tmp(40), tmp(41), tmp(42), tmp(43)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(31))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(32))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(20)(30)); L1VALtmp(arg[1](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(39))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(39); L1VALtcst(gl_print1(20)(33)); L1VALtmp(arg[2](34))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(40))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(36))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(40); L1VALtcst(gl_print1(20)(35)); L1VALtmp(arg[3](35))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(41))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(39))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(41); L1VALtcst(gl_print1(20)(38)); L1VALtmp(arg[4](36))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(41)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(41))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(42))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(41))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(42))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(42); L1VALtcst(gl_print1(20)(40)); L1VALtmp(arg[5](37))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(42)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(42))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(43); 0; )))); })), L1CMDapp(tmp(2); L1VALtcst(print5(19)(29)); L1VALchr(CHAR_char('(')), L1VALtmp(tmp(31)), L1VALchr(CHAR_char('*')), L1VALtmp(tmp(32)), L1VALchr(CHAR_char(')')))))), L1BLKsome(L1CMDcarg(tmp(44); L1VALtmp(arg[1](1)); 0), L1CMDcarg(tmp(45); L1VALtmp(arg[1](1)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print5(19); hag=HFARGnpats(-1; H0Pvar(x1(10)), H0Pvar(x2(11)), H0Pvar(x3(12)), H0Pvar(x4(13)), H0Pvar(x5(14))); def=Some(L1VALtmp(tmp(56))); lev=(2); lts=(arg[1](46), arg[2](47), arg[3](48), arg[4](49), arg[5](50), tmp(51), tmp(52), tmp(53), tmp(54), tmp(55), tmp(56)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(51))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(45))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(46))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(51); L1VALtcst(gl_print1(20)(44)); L1VALtmp(arg[1](46))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(51)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(51))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(52))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(48))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(52); L1VALtcst(gl_print1(20)(47)); L1VALtmp(arg[2](47))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(52)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(52))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(53))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(50))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(51))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(53); L1VALtcst(gl_print1(20)(49)); L1VALtmp(arg[3](48))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(53)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(53))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(54))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(53))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(54); L1VALtcst(gl_print1(20)(52)); L1VALtmp(arg[4](49))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(54)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(54))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(55))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(55))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(56))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(55); L1VALtcst(gl_print1(20)(54)); L1VALtmp(arg[5](50))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(55)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(55))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(56); 0; )))); })), L1CMDapp(tmp(2); L1VALtcst(print5(19)(43)); L1VALchr(CHAR_char('(')), L1VALtmp(tmp(44)), L1VALchr(CHAR_char('/')), L1VALtmp(tmp(45)), L1VALchr(CHAR_char(')')))))))); })
function
print_expr_1453_(a1x1)
{
let xtmp2;
let xtmp3;
let xtmp4;
let xtmp5;
let xtmp6;
let xtmp18;
let xtmp19;
let xtmp31;
let xtmp32;
let xtmp44;
let xtmp45;
{
xtmp3 = 0;
do {
do {
if(0!==a1x1[0]) break;
//L1PCKany();
xtmp3 = 1;
} while(false);
if(xtmp3 > 0) break;
do {
if(1!==a1x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp3 = 2;
} while(false);
if(xtmp3 > 0) break;
do {
if(2!==a1x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp3 = 3;
} while(false);
if(xtmp3 > 0) break;
do {
if(3!==a1x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp3 = 4;
} while(false);
if(xtmp3 > 0) break;
do {
if(4!==a1x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp3 = 5;
} while(false);
if(xtmp3 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp3) {
case 1:
xtmp4 = a1x1[1];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(17); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(18))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(6), hdc=XATS2JS_gint_print_sint(18), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(6), hdc=XATS2JS_gint_print_sint(18), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(6), hdc=XATS2JS_gint_print_sint(18), })));
// } // val-binding
const // implval/fun
gint_print_sint_1513_ = XATS2JS_gint_print_sint
;
xtmp2 = gint_print_sint_1513_(xtmp4);
}
;
break;
case 2:
xtmp5 = a1x1[1];
xtmp6 = a1x1[2];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3844(line=325, offs=1) -- 4070(line=343, offs=12)
// L1DCLimpdecl(LIMPDECL@{hdc=print5(19); hag=HFARGnpats(-1; H0Pvar(x1(10)), H0Pvar(x2(11)), H0Pvar(x3(12)), H0Pvar(x4(13)), H0Pvar(x5(14))); def=Some(L1VALtmp(tmp(17))); lev=(2); lts=(arg[1](7), arg[2](8), arg[3](9), arg[4](10), arg[5](11), tmp(12), tmp(13), tmp(14), tmp(15), tmp(16), tmp(17)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(12))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(3))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(4))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(12); L1VALtcst(gl_print1(20)(2)); L1VALtmp(arg[1](7))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(12)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(12))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(13))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(6))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(13); L1VALtcst(gl_print1(20)(5)); L1VALtmp(arg[2](8))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(13)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(13))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(14))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(9))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(14); L1VALtcst(gl_print1(20)(7)); L1VALtmp(arg[3](9))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(14)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(14))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(15))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(11))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(15); L1VALtcst(gl_print1(20)(10)); L1VALtmp(arg[4](10))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(15)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(15))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(16))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(13))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(14))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(16); L1VALtcst(gl_print1(20)(12)); L1VALtmp(arg[5](11))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(16)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(16))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(17); 0; )))); })
function
print5_728_(a2x1, a2x2, a2x3, a2x4, a2x5)
{
let xtmp12;
let xtmp13;
let xtmp14;
let xtmp15;
let xtmp16;
let xtmp17;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3926(line=338, offs=3) -- 3952(line=338, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(12))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(3))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(4))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(12); L1VALtcst(gl_print1(20)(2)); L1VALtmp(arg[1](7))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(12)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(12))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(3))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(4))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(4))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp12 = gl_print1_2233_(a2x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(12)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(12)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3955(line=339, offs=3) -- 3981(line=339, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(13))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(6))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(13); L1VALtcst(gl_print1(20)(5)); L1VALtmp(arg[2](8))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(13)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(13))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(6))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp13 = gl_print1_2233_(a2x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(13)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(13)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3984(line=340, offs=3) -- 4010(line=340, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(14))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(9))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(14); L1VALtcst(gl_print1(20)(7)); L1VALtmp(arg[3](9))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(14)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(14))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(9))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(9))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp14 = gl_print1_2233_(a2x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(14)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(14)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4013(line=341, offs=3) -- 4039(line=341, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(15))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(11))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(15); L1VALtcst(gl_print1(20)(10)); L1VALtmp(arg[4](10))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(15)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(15))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(11))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp15 = gl_print1_2233_(a2x4);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(15)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(15)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4042(line=342, offs=3) -- 4068(line=342, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(16))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(13))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(14))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(16); L1VALtcst(gl_print1(20)(12)); L1VALtmp(arg[5](11))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(16)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(16))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(13))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(14))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(14))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp16 = gl_print1_2233_(a2x5);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(16)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(16)));
} // val(H0Pnil())
;
{
xtmp17 = [-1];;
}
;
return xtmp17;
} // function // print5(19)
;
xtmp2 = print5_728_(XATS2JS_char('('), xtmp5, XATS2JS_char('+'), xtmp6, XATS2JS_char(')'));
}
;
break;
case 3:
xtmp18 = a1x1[1];
xtmp19 = a1x1[2];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3844(line=325, offs=1) -- 4070(line=343, offs=12)
// L1DCLimpdecl(LIMPDECL@{hdc=print5(19); hag=HFARGnpats(-1; H0Pvar(x1(10)), H0Pvar(x2(11)), H0Pvar(x3(12)), H0Pvar(x4(13)), H0Pvar(x5(14))); def=Some(L1VALtmp(tmp(30))); lev=(2); lts=(arg[1](20), arg[2](21), arg[3](22), arg[4](23), arg[5](24), tmp(25), tmp(26), tmp(27), tmp(28), tmp(29), tmp(30)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(25))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(18))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(25); L1VALtcst(gl_print1(20)(16)); L1VALtmp(arg[1](20))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(25)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(25))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(26))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(20))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(26); L1VALtcst(gl_print1(20)(19)); L1VALtmp(arg[2](21))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(26)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(26))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(27))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(22))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(23))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(27); L1VALtcst(gl_print1(20)(21)); L1VALtmp(arg[3](22))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(27)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(27))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(28))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(25))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(28); L1VALtcst(gl_print1(20)(24)); L1VALtmp(arg[4](23))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(28)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(28))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(29))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(27))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(28))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(29); L1VALtcst(gl_print1(20)(26)); L1VALtmp(arg[5](24))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(29)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(29))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(30); 0; )))); })
function
print5_728_(a2x1, a2x2, a2x3, a2x4, a2x5)
{
let xtmp25;
let xtmp26;
let xtmp27;
let xtmp28;
let xtmp29;
let xtmp30;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3926(line=338, offs=3) -- 3952(line=338, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(25))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(18))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(25); L1VALtcst(gl_print1(20)(16)); L1VALtmp(arg[1](20))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(25)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(25))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(18))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(18))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp25 = gl_print1_2233_(a2x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(25)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(25)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3955(line=339, offs=3) -- 3981(line=339, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(26))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(20))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(26); L1VALtcst(gl_print1(20)(19)); L1VALtmp(arg[2](21))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(26)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(26))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(20))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp26 = gl_print1_2233_(a2x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(26)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(26)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3984(line=340, offs=3) -- 4010(line=340, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(27))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(22))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(23))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(27); L1VALtcst(gl_print1(20)(21)); L1VALtmp(arg[3](22))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(27)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(27))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(22))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(23))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(23))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp27 = gl_print1_2233_(a2x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(27)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(27)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4013(line=341, offs=3) -- 4039(line=341, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(28))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(25))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(28); L1VALtcst(gl_print1(20)(24)); L1VALtmp(arg[4](23))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(28)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(28))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(25))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp28 = gl_print1_2233_(a2x4);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(28)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(28)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4042(line=342, offs=3) -- 4068(line=342, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(29))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(27))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(28))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(29); L1VALtcst(gl_print1(20)(26)); L1VALtmp(arg[5](24))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(29)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(29))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(27))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(28))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(28))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp29 = gl_print1_2233_(a2x5);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(29)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(29)));
} // val(H0Pnil())
;
{
xtmp30 = [-1];;
}
;
return xtmp30;
} // function // print5(19)
;
xtmp2 = print5_728_(XATS2JS_char('('), xtmp18, XATS2JS_char('-'), xtmp19, XATS2JS_char(')'));
}
;
break;
case 4:
xtmp31 = a1x1[1];
xtmp32 = a1x1[2];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3844(line=325, offs=1) -- 4070(line=343, offs=12)
// L1DCLimpdecl(LIMPDECL@{hdc=print5(19); hag=HFARGnpats(-1; H0Pvar(x1(10)), H0Pvar(x2(11)), H0Pvar(x3(12)), H0Pvar(x4(13)), H0Pvar(x5(14))); def=Some(L1VALtmp(tmp(43))); lev=(2); lts=(arg[1](33), arg[2](34), arg[3](35), arg[4](36), arg[5](37), tmp(38), tmp(39), tmp(40), tmp(41), tmp(42), tmp(43)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(31))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(32))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(20)(30)); L1VALtmp(arg[1](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(39))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(39); L1VALtcst(gl_print1(20)(33)); L1VALtmp(arg[2](34))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(40))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(36))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(40); L1VALtcst(gl_print1(20)(35)); L1VALtmp(arg[3](35))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(41))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(39))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(41); L1VALtcst(gl_print1(20)(38)); L1VALtmp(arg[4](36))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(41)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(41))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(42))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(41))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(42))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(42); L1VALtcst(gl_print1(20)(40)); L1VALtmp(arg[5](37))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(42)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(42))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(43); 0; )))); })
function
print5_728_(a2x1, a2x2, a2x3, a2x4, a2x5)
{
let xtmp38;
let xtmp39;
let xtmp40;
let xtmp41;
let xtmp42;
let xtmp43;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3926(line=338, offs=3) -- 3952(line=338, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(31))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(32))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(20)(30)); L1VALtmp(arg[1](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(31))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(32))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(32))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp38 = gl_print1_2233_(a2x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3955(line=339, offs=3) -- 3981(line=339, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(39))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(39); L1VALtcst(gl_print1(20)(33)); L1VALtmp(arg[2](34))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp39 = gl_print1_2233_(a2x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3984(line=340, offs=3) -- 4010(line=340, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(40))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(36))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(40); L1VALtcst(gl_print1(20)(35)); L1VALtmp(arg[3](35))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(36))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp40 = gl_print1_2233_(a2x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4013(line=341, offs=3) -- 4039(line=341, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(41))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(39))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(41); L1VALtcst(gl_print1(20)(38)); L1VALtmp(arg[4](36))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(41)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(41))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(39))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp41 = gl_print1_2233_(a2x4);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(41)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(41)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4042(line=342, offs=3) -- 4068(line=342, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(42))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(41))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(42))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(42); L1VALtcst(gl_print1(20)(40)); L1VALtmp(arg[5](37))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(42)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(42))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(41))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(42))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(42))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp42 = gl_print1_2233_(a2x5);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(42)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(42)));
} // val(H0Pnil())
;
{
xtmp43 = [-1];;
}
;
return xtmp43;
} // function // print5(19)
;
xtmp2 = print5_728_(XATS2JS_char('('), xtmp31, XATS2JS_char('*'), xtmp32, XATS2JS_char(')'));
}
;
break;
case 5:
xtmp44 = a1x1[1];
xtmp45 = a1x1[2];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3844(line=325, offs=1) -- 4070(line=343, offs=12)
// L1DCLimpdecl(LIMPDECL@{hdc=print5(19); hag=HFARGnpats(-1; H0Pvar(x1(10)), H0Pvar(x2(11)), H0Pvar(x3(12)), H0Pvar(x4(13)), H0Pvar(x5(14))); def=Some(L1VALtmp(tmp(56))); lev=(2); lts=(arg[1](46), arg[2](47), arg[3](48), arg[4](49), arg[5](50), tmp(51), tmp(52), tmp(53), tmp(54), tmp(55), tmp(56)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(51))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(45))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(46))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(51); L1VALtcst(gl_print1(20)(44)); L1VALtmp(arg[1](46))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(51)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(51))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(52))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(48))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(52); L1VALtcst(gl_print1(20)(47)); L1VALtmp(arg[2](47))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(52)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(52))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(53))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(50))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(51))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(53); L1VALtcst(gl_print1(20)(49)); L1VALtmp(arg[3](48))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(53)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(53))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(54))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(53))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(54); L1VALtcst(gl_print1(20)(52)); L1VALtmp(arg[4](49))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(54)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(54))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(55))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(55))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(56))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(55); L1VALtcst(gl_print1(20)(54)); L1VALtmp(arg[5](50))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(55)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(55))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(56); 0; )))); })
function
print5_728_(a2x1, a2x2, a2x3, a2x4, a2x5)
{
let xtmp51;
let xtmp52;
let xtmp53;
let xtmp54;
let xtmp55;
let xtmp56;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3926(line=338, offs=3) -- 3952(line=338, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(51))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(45))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(46))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(51); L1VALtcst(gl_print1(20)(44)); L1VALtmp(arg[1](46))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(51)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(51))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(45))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(46))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(46))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp51 = gl_print1_2233_(a2x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(51)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(51)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3955(line=339, offs=3) -- 3981(line=339, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(52))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(48))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(52); L1VALtcst(gl_print1(20)(47)); L1VALtmp(arg[2](47))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(52)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(52))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(48))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp52 = gl_print1_2233_(a2x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(52)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(52)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3984(line=340, offs=3) -- 4010(line=340, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(53))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(50))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(51))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(53); L1VALtcst(gl_print1(20)(49)); L1VALtmp(arg[3](48))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(53)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(53))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(50))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(51))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(51))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp53 = gl_print1_2233_(a2x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(53)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(53)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4013(line=341, offs=3) -- 4039(line=341, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(54))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(53))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(54); L1VALtcst(gl_print1(20)(52)); L1VALtmp(arg[4](49))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(54)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(54))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(53))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp54 = gl_print1_2233_(a2x4);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(54)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(54)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4042(line=342, offs=3) -- 4068(line=342, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(55))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(55))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(56))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })), L1CMDapp(tmp(55); L1VALtcst(gl_print1(20)(54)); L1VALtmp(arg[5](50))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(55)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(55))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(55))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(56))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/char.dats: 2282(line=111, offs=1) -- 2319(line=112, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(char_print(21)(56))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// L1DCLimpdecl(LIMPDECL@{hdc=char_print(21); hag=; def=Some(L1VALfcst(XATS2JS_char_print(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 256(line=25, offs=1) -- 315(line=28, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_char_print(15), hdc=XATS2JS_char_print(22), })));
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = char_print_1631_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp55 = gl_print1_2233_(a2x5);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(55)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(55)));
} // val(H0Pnil())
;
{
xtmp56 = [-1];;
}
;
return xtmp56;
} // function // print5(19)
;
xtmp2 = print5_728_(XATS2JS_char('('), xtmp44, XATS2JS_char('/'), xtmp45, XATS2JS_char(')'));
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp2;
} // function // print_expr(15)


// ./Game-of-24.dats: 1806(line=124, offs=1) -- 2075(line=138, offs=10)
// L1DCLfundecl(LFUNDECL@{nam=expr_eval(25); hdc=expr_eval(23); hag=HFARGnpats(-1; H0Pvar(x0(26))); def=Some(L1VALtmp(tmp(58))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](57)); tmp(59); L1PCKapp(L1PCKcon(LDCONcon(Int(0)); L1VALctag(L1VALtmp(arg[1](57)))); L1PCKany()), L1PCKapp(L1PCKcon(LDCONcon(Add(1)); L1VALctag(L1VALtmp(arg[1](57)))); L1PCKany(), L1PCKany()), L1PCKapp(L1PCKcon(LDCONcon(Sub(2)); L1VALctag(L1VALtmp(arg[1](57)))); L1PCKany(), L1PCKany()), L1PCKapp(L1PCKcon(LDCONcon(Mul(3)); L1VALctag(L1VALtmp(arg[1](57)))); L1PCKany(), L1PCKany()), L1PCKapp(L1PCKcon(LDCONcon(Div(4)); L1VALctag(L1VALtmp(arg[1](57)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDcarg(tmp(60); L1VALtmp(arg[1](57)); 0), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_i(1); hag=; def=Some(L1VALtcst(gflt_i_dflt(2)(58))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_i_dflt(2); hag=; def=Some(L1VALfcst(XATS2JS_gflt_i_dflt(24))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(58); L1VALtcst(g_i(1)(57)); L1VALtmp(tmp(60)))))), L1BLKsome(L1CMDcarg(tmp(61); L1VALtmp(arg[1](57)); 0), L1CMDcarg(tmp(62); L1VALtmp(arg[1](57)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_add(7); hag=; def=Some(L1VALtcst(gflt_add_dflt_dflt(8)(60))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_add_dflt_dflt(8); hag=; def=Some(L1VALfcst(XATS2JS_gflt_add_dflt_dflt(25))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(63); L1VALfcst(expr_eval(23)); L1VALtmp(tmp(61))))), L1CMDblk(L1BLKsome(L1CMDapp(tmp(64); L1VALfcst(expr_eval(23)); L1VALtmp(tmp(62))))), L1CMDapp(tmp(58); L1VALtcst(g_add(7)(59)); L1VALtmp(tmp(63)), L1VALtmp(tmp(64)))))), L1BLKsome(L1CMDcarg(tmp(65); L1VALtmp(arg[1](57)); 0), L1CMDcarg(tmp(66); L1VALtmp(arg[1](57)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_sub(9); hag=; def=Some(L1VALtcst(gflt_sub_dflt_dflt(10)(62))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_sub_dflt_dflt(10); hag=; def=Some(L1VALfcst(XATS2JS_gflt_sub_dflt_dflt(26))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(67); L1VALfcst(expr_eval(23)); L1VALtmp(tmp(65))))), L1CMDblk(L1BLKsome(L1CMDapp(tmp(68); L1VALfcst(expr_eval(23)); L1VALtmp(tmp(66))))), L1CMDapp(tmp(58); L1VALtcst(g_sub(9)(61)); L1VALtmp(tmp(67)), L1VALtmp(tmp(68)))))), L1BLKsome(L1CMDcarg(tmp(69); L1VALtmp(arg[1](57)); 0), L1CMDcarg(tmp(70); L1VALtmp(arg[1](57)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_mul(11); hag=; def=Some(L1VALtcst(gflt_mul_dflt_dflt(12)(64))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_mul_dflt_dflt(12); hag=; def=Some(L1VALfcst(XATS2JS_gflt_mul_dflt_dflt(27))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(71); L1VALfcst(expr_eval(23)); L1VALtmp(tmp(69))))), L1CMDblk(L1BLKsome(L1CMDapp(tmp(72); L1VALfcst(expr_eval(23)); L1VALtmp(tmp(70))))), L1CMDapp(tmp(58); L1VALtcst(g_mul(11)(63)); L1VALtmp(tmp(71)), L1VALtmp(tmp(72)))))), L1BLKsome(L1CMDcarg(tmp(73); L1VALtmp(arg[1](57)); 0), L1CMDcarg(tmp(74); L1VALtmp(arg[1](57)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_div(13); hag=; def=Some(L1VALtcst(gflt_div_dflt_dflt(14)(66))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_div_dflt_dflt(14); hag=; def=Some(L1VALfcst(XATS2JS_gflt_div_dflt_dflt(28))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(75); L1VALfcst(expr_eval(23)); L1VALtmp(tmp(73))))), L1CMDblk(L1BLKsome(L1CMDapp(tmp(76); L1VALfcst(expr_eval(23)); L1VALtmp(tmp(74))))), L1CMDapp(tmp(58); L1VALtcst(g_div(13)(65)); L1VALtmp(tmp(75)), L1VALtmp(tmp(76)))))))); })
function
expr_eval_1809_(a1x1)
{
let xtmp58;
let xtmp59;
let xtmp60;
let xtmp61;
let xtmp62;
let xtmp63;
let xtmp64;
let xtmp65;
let xtmp66;
let xtmp67;
let xtmp68;
let xtmp69;
let xtmp70;
let xtmp71;
let xtmp72;
let xtmp73;
let xtmp74;
let xtmp75;
let xtmp76;
{
xtmp59 = 0;
do {
do {
if(0!==a1x1[0]) break;
//L1PCKany();
xtmp59 = 1;
} while(false);
if(xtmp59 > 0) break;
do {
if(1!==a1x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp59 = 2;
} while(false);
if(xtmp59 > 0) break;
do {
if(2!==a1x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp59 = 3;
} while(false);
if(xtmp59 > 0) break;
do {
if(3!==a1x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp59 = 4;
} while(false);
if(xtmp59 > 0) break;
do {
if(4!==a1x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp59 = 5;
} while(false);
if(xtmp59 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp59) {
case 1:
xtmp60 = a1x1[1];
{
// ./Game-of-24.dats: 422(line=33, offs=1) -- 454(line=34, offs=25)
// L1DCLimpdecl(LIMPDECL@{hdc=g_i(1); hag=; def=Some(L1VALtcst(gflt_i_dflt(2)(58))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_i_dflt(2); hag=; def=Some(L1VALfcst(XATS2JS_gflt_i_dflt(24))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 4233(line=297, offs=1) -- 4276(line=298, offs=36)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_i_dflt(2); hag=; def=Some(L1VALfcst(XATS2JS_gflt_i_dflt(24))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_i_dflt_1529_ = XATS2JS_gflt_i_dflt
;
// } // val-binding
const // implval/fun
g_i_1553_ = gflt_i_dflt_1529_
;
xtmp58 = g_i_1553_(xtmp60);
}
;
break;
case 2:
xtmp61 = a1x1[1];
xtmp62 = a1x1[2];
{
// ./Game-of-24.dats: 543(line=42, offs=1) -- 584(line=43, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_add(7); hag=; def=Some(L1VALtcst(gflt_add_dflt_dflt(8)(60))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_add_dflt_dflt(8); hag=; def=Some(L1VALfcst(XATS2JS_gflt_add_dflt_dflt(25))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 6159(line=399, offs=1) -- 6216(line=400, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_add_dflt_dflt(8); hag=; def=Some(L1VALfcst(XATS2JS_gflt_add_dflt_dflt(25))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_add_dflt_dflt_3024_ = XATS2JS_gflt_add_dflt_dflt
;
// } // val-binding
const // implval/fun
g_add_1860_ = gflt_add_dflt_dflt_3024_
;
{
xtmp63 = expr_eval_1809_(xtmp61);
}
;
{
xtmp64 = expr_eval_1809_(xtmp62);
}
;
xtmp58 = g_add_1860_(xtmp63, xtmp64);
}
;
break;
case 3:
xtmp65 = a1x1[1];
xtmp66 = a1x1[2];
{
// ./Game-of-24.dats: 585(line=44, offs=1) -- 626(line=45, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_sub(9); hag=; def=Some(L1VALtcst(gflt_sub_dflt_dflt(10)(62))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_sub_dflt_dflt(10); hag=; def=Some(L1VALfcst(XATS2JS_gflt_sub_dflt_dflt(26))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 6217(line=401, offs=1) -- 6274(line=402, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_sub_dflt_dflt(10); hag=; def=Some(L1VALfcst(XATS2JS_gflt_sub_dflt_dflt(26))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_sub_dflt_dflt_3067_ = XATS2JS_gflt_sub_dflt_dflt
;
// } // val-binding
const // implval/fun
g_sub_1892_ = gflt_sub_dflt_dflt_3067_
;
{
xtmp67 = expr_eval_1809_(xtmp65);
}
;
{
xtmp68 = expr_eval_1809_(xtmp66);
}
;
xtmp58 = g_sub_1892_(xtmp67, xtmp68);
}
;
break;
case 4:
xtmp69 = a1x1[1];
xtmp70 = a1x1[2];
{
// ./Game-of-24.dats: 627(line=46, offs=1) -- 668(line=47, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_mul(11); hag=; def=Some(L1VALtcst(gflt_mul_dflt_dflt(12)(64))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_mul_dflt_dflt(12); hag=; def=Some(L1VALfcst(XATS2JS_gflt_mul_dflt_dflt(27))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 6275(line=403, offs=1) -- 6332(line=404, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_mul_dflt_dflt(12); hag=; def=Some(L1VALfcst(XATS2JS_gflt_mul_dflt_dflt(27))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_mul_dflt_dflt_3110_ = XATS2JS_gflt_mul_dflt_dflt
;
// } // val-binding
const // implval/fun
g_mul_1950_ = gflt_mul_dflt_dflt_3110_
;
{
xtmp71 = expr_eval_1809_(xtmp69);
}
;
{
xtmp72 = expr_eval_1809_(xtmp70);
}
;
xtmp58 = g_mul_1950_(xtmp71, xtmp72);
}
;
break;
case 5:
xtmp73 = a1x1[1];
xtmp74 = a1x1[2];
{
// ./Game-of-24.dats: 669(line=48, offs=1) -- 710(line=49, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_div(13); hag=; def=Some(L1VALtcst(gflt_div_dflt_dflt(14)(66))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_div_dflt_dflt(14); hag=; def=Some(L1VALfcst(XATS2JS_gflt_div_dflt_dflt(28))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 6333(line=405, offs=1) -- 6390(line=406, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_div_dflt_dflt(14); hag=; def=Some(L1VALfcst(XATS2JS_gflt_div_dflt_dflt(28))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_div_dflt_dflt_3153_ = XATS2JS_gflt_div_dflt_dflt
;
// } // val-binding
const // implval/fun
g_div_1982_ = gflt_div_dflt_dflt_3153_
;
{
xtmp75 = expr_eval_1809_(xtmp73);
}
;
{
xtmp76 = expr_eval_1809_(xtmp74);
}
;
xtmp58 = g_div_1982_(xtmp75, xtmp76);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp58;
} // function // expr_eval(23)


// ./Game-of-24.dats: 2100(line=142, offs=1) -- 2123(line=143, offs=20)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(EPSILON(36)), def=Some(L1VALtmp(tmp(77))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(77); L1VALfcst(rat(0)); L1VALflt(FLOAT1(1E-6))))), L1CMDpatck(L1PCKany()))})
{
{
xtop77 = rat_394_(1E-6);
}
;
;
} // val(H0Pvar(EPSILON(36)))


// ./Game-of-24.dats: 2127(line=145, offs=1) -- 2189(line=148, offs=29)
// L1DCLfundecl(LFUNDECL@{nam=expr_iseqz(37); hdc=expr_iseqz(29); hag=HFARGnpats(-1; H0Pvar(x0(38))); def=Some(L1VALtmp(tmp(79))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_lt(30); hag=HFARGnpats(-1; H0Pvar(x(39)), H0Pvar(y(40))); def=Some(L1VALtmp(tmp(82))); lev=(2); lts=(arg[1](80), arg[2](81), tmp(82), tmp(83)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_cmp(5); hag=; def=Some(L1VALtcst(gflt_cmp_dflt_dflt(6)(70))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_cmp_dflt_dflt(6); hag=; def=Some(L1VALfcst(XATS2JS_gflt_cmp_dflt_dflt(33))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(83); L1VALtcst(g_cmp(5)(69)); L1VALtmp(arg[1](80)), L1VALtmp(arg[2](81))))), L1CMDapp(tmp(82); L1VALtcst(gint_lt_sint_sint(31)(68)); L1VALtmp(tmp(83)), L1VALint(INT1(0)))))); })), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_abs(3); hag=; def=Some(L1VALtcst(gflt_abs_dflt(4)(72))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_abs_dflt(4); hag=; def=Some(L1VALfcst(XATS2JS_gflt_abs_dflt(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(85); L1VALfcst(expr_eval(23)); L1VALtmp(arg[1](78))))), L1CMDapp(tmp(84); L1VALtcst(g_abs(3)(71)); L1VALtmp(tmp(85))))), L1CMDapp(tmp(79); L1VALtcst(g_lt(30)(67)); L1VALtmp(tmp(84)), L1VALtmp(tmp(77)))))); })
function
expr_iseqz_2130_(a1x1)
{
let xtmp79;
let xtmp84;
let xtmp85;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gord.dats: 173(line=16, offs=1) -- 224(line=19, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=g_lt(30); hag=HFARGnpats(-1; H0Pvar(x(39)), H0Pvar(y(40))); def=Some(L1VALtmp(tmp(82))); lev=(2); lts=(arg[1](80), arg[2](81), tmp(82), tmp(83)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_cmp(5); hag=; def=Some(L1VALtcst(gflt_cmp_dflt_dflt(6)(70))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_cmp_dflt_dflt(6); hag=; def=Some(L1VALfcst(XATS2JS_gflt_cmp_dflt_dflt(33))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(83); L1VALtcst(g_cmp(5)(69)); L1VALtmp(arg[1](80)), L1VALtmp(arg[2](81))))), L1CMDapp(tmp(82); L1VALtcst(gint_lt_sint_sint(31)(68)); L1VALtmp(tmp(83)), L1VALint(INT1(0)))))); })
function
g_lt_1444_(a2x1, a2x2)
{
let xtmp82;
let xtmp83;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2202(line=161, offs=1) -- 2257(line=162, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
{
// ./Game-of-24.dats: 498(line=39, offs=1) -- 539(line=40, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_cmp(5); hag=; def=Some(L1VALtcst(gflt_cmp_dflt_dflt(6)(70))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_cmp_dflt_dflt(6); hag=; def=Some(L1VALfcst(XATS2JS_gflt_cmp_dflt_dflt(33))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 5752(line=377, offs=1) -- 5809(line=378, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_cmp_dflt_dflt(6); hag=; def=Some(L1VALfcst(XATS2JS_gflt_cmp_dflt_dflt(33))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_cmp_dflt_dflt_2714_ = XATS2JS_gflt_cmp_dflt_dflt
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = gflt_cmp_dflt_dflt_2714_
;
xtmp83 = g_cmp_1644_(a2x1, a2x2);
}
;
xtmp82 = gint_lt_sint_sint_2125_(xtmp83, 0);
}
;
return xtmp82;
} // function // g_lt(30)
;
{
// ./Game-of-24.dats: 458(line=36, offs=1) -- 494(line=37, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_abs(3); hag=; def=Some(L1VALtcst(gflt_abs_dflt(4)(72))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_abs_dflt(4); hag=; def=Some(L1VALfcst(XATS2JS_gflt_abs_dflt(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 4488(line=313, offs=1) -- 4535(line=314, offs=40)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_abs_dflt(4); hag=; def=Some(L1VALfcst(XATS2JS_gflt_abs_dflt(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_abs_dflt_1851_ = XATS2JS_gflt_abs_dflt
;
// } // val-binding
const // implval/fun
g_abs_1751_ = gflt_abs_dflt_1851_
;
{
xtmp85 = expr_eval_1809_(a1x1);
}
;
xtmp84 = g_abs_1751_(xtmp85);
}
;
xtmp79 = g_lt_1444_(xtmp84, xtop77);
}
;
return xtmp79;
} // function // expr_iseqz(29)


// ./Game-of-24.dats: 2193(line=150, offs=1) -- 2223(line=150, offs=31)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 2227(line=152, offs=1) -- 2299(line=156, offs=34)
// L1DCLfundecl(LFUNDECL@{nam=expr_iseq24(41); hdc=expr_iseq24(35); hag=HFARGnpats(-1; H0Pvar(x0(42))); def=Some(L1VALtmp(tmp(87))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_lt(30); hag=HFARGnpats(-1; H0Pvar(x(39)), H0Pvar(y(40))); def=Some(L1VALtmp(tmp(90))); lev=(2); lts=(arg[1](88), arg[2](89), tmp(90), tmp(91)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_cmp(5); hag=; def=Some(L1VALtcst(gflt_cmp_dflt_dflt(6)(76))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_cmp_dflt_dflt(6); hag=; def=Some(L1VALfcst(XATS2JS_gflt_cmp_dflt_dflt(33))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(91); L1VALtcst(g_cmp(5)(75)); L1VALtmp(arg[1](88)), L1VALtmp(arg[2](89))))), L1CMDapp(tmp(90); L1VALtcst(gint_lt_sint_sint(31)(74)); L1VALtmp(tmp(91)), L1VALint(INT1(0)))))); })), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_abs(3); hag=; def=Some(L1VALtcst(gflt_abs_dflt(4)(78))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_abs_dflt(4); hag=; def=Some(L1VALfcst(XATS2JS_gflt_abs_dflt(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_sub(9); hag=; def=Some(L1VALtcst(gflt_sub_dflt_dflt(10)(80))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_sub_dflt_dflt(10); hag=; def=Some(L1VALfcst(XATS2JS_gflt_sub_dflt_dflt(26))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(94); L1VALfcst(expr_eval(23)); L1VALtmp(arg[1](86))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_i(1); hag=; def=Some(L1VALtcst(gflt_i_dflt(2)(82))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_i_dflt(2); hag=; def=Some(L1VALfcst(XATS2JS_gflt_i_dflt(24))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(95); L1VALtcst(g_i(1)(81)); L1VALint(INT1(24))))), L1CMDapp(tmp(93); L1VALtcst(g_sub(9)(79)); L1VALtmp(tmp(94)), L1VALtmp(tmp(95))))), L1CMDapp(tmp(92); L1VALtcst(g_abs(3)(77)); L1VALtmp(tmp(93))))), L1CMDapp(tmp(87); L1VALtcst(g_lt(30)(73)); L1VALtmp(tmp(92)), L1VALtmp(tmp(77)))))); })
function
expr_iseq24_2230_(a1x1)
{
let xtmp87;
let xtmp92;
let xtmp93;
let xtmp94;
let xtmp95;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gord.dats: 173(line=16, offs=1) -- 224(line=19, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=g_lt(30); hag=HFARGnpats(-1; H0Pvar(x(39)), H0Pvar(y(40))); def=Some(L1VALtmp(tmp(90))); lev=(2); lts=(arg[1](88), arg[2](89), tmp(90), tmp(91)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_cmp(5); hag=; def=Some(L1VALtcst(gflt_cmp_dflt_dflt(6)(76))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_cmp_dflt_dflt(6); hag=; def=Some(L1VALfcst(XATS2JS_gflt_cmp_dflt_dflt(33))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(91); L1VALtcst(g_cmp(5)(75)); L1VALtmp(arg[1](88)), L1VALtmp(arg[2](89))))), L1CMDapp(tmp(90); L1VALtcst(gint_lt_sint_sint(31)(74)); L1VALtmp(tmp(91)), L1VALint(INT1(0)))))); })
function
g_lt_1444_(a2x1, a2x2)
{
let xtmp90;
let xtmp91;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2202(line=161, offs=1) -- 2257(line=162, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
{
// ./Game-of-24.dats: 498(line=39, offs=1) -- 539(line=40, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_cmp(5); hag=; def=Some(L1VALtcst(gflt_cmp_dflt_dflt(6)(76))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_cmp_dflt_dflt(6); hag=; def=Some(L1VALfcst(XATS2JS_gflt_cmp_dflt_dflt(33))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 5752(line=377, offs=1) -- 5809(line=378, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_cmp_dflt_dflt(6); hag=; def=Some(L1VALfcst(XATS2JS_gflt_cmp_dflt_dflt(33))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_cmp_dflt_dflt_2714_ = XATS2JS_gflt_cmp_dflt_dflt
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = gflt_cmp_dflt_dflt_2714_
;
xtmp91 = g_cmp_1644_(a2x1, a2x2);
}
;
xtmp90 = gint_lt_sint_sint_2125_(xtmp91, 0);
}
;
return xtmp90;
} // function // g_lt(30)
;
{
// ./Game-of-24.dats: 458(line=36, offs=1) -- 494(line=37, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_abs(3); hag=; def=Some(L1VALtcst(gflt_abs_dflt(4)(78))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_abs_dflt(4); hag=; def=Some(L1VALfcst(XATS2JS_gflt_abs_dflt(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 4488(line=313, offs=1) -- 4535(line=314, offs=40)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_abs_dflt(4); hag=; def=Some(L1VALfcst(XATS2JS_gflt_abs_dflt(34))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_abs_dflt_1851_ = XATS2JS_gflt_abs_dflt
;
// } // val-binding
const // implval/fun
g_abs_1751_ = gflt_abs_dflt_1851_
;
{
// ./Game-of-24.dats: 585(line=44, offs=1) -- 626(line=45, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_sub(9); hag=; def=Some(L1VALtcst(gflt_sub_dflt_dflt(10)(80))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_sub_dflt_dflt(10); hag=; def=Some(L1VALfcst(XATS2JS_gflt_sub_dflt_dflt(26))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 6217(line=401, offs=1) -- 6274(line=402, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_sub_dflt_dflt(10); hag=; def=Some(L1VALfcst(XATS2JS_gflt_sub_dflt_dflt(26))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_sub_dflt_dflt_3067_ = XATS2JS_gflt_sub_dflt_dflt
;
// } // val-binding
const // implval/fun
g_sub_1892_ = gflt_sub_dflt_dflt_3067_
;
{
xtmp94 = expr_eval_1809_(a1x1);
}
;
{
// ./Game-of-24.dats: 422(line=33, offs=1) -- 454(line=34, offs=25)
// L1DCLimpdecl(LIMPDECL@{hdc=g_i(1); hag=; def=Some(L1VALtcst(gflt_i_dflt(2)(82))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gflt_i_dflt(2); hag=; def=Some(L1VALfcst(XATS2JS_gflt_i_dflt(24))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 4233(line=297, offs=1) -- 4276(line=298, offs=36)
// L1DCLimpdecl(LIMPDECL@{hdc=gflt_i_dflt(2); hag=; def=Some(L1VALfcst(XATS2JS_gflt_i_dflt(24))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gflt_i_dflt_1529_ = XATS2JS_gflt_i_dflt
;
// } // val-binding
const // implval/fun
g_i_1553_ = gflt_i_dflt_1529_
;
xtmp95 = g_i_1553_(24);
}
;
xtmp93 = g_sub_1892_(xtmp94, xtmp95);
}
;
xtmp92 = g_abs_1751_(xtmp93);
}
;
xtmp87 = g_lt_1444_(xtmp92, xtop77);
}
;
return xtmp87;
} // function // expr_iseq24(35)


// ./Game-of-24.dats: 2324(line=160, offs=1) -- 2703(line=188, offs=15)
// L1DCLfundecl(LFUNDECL@{nam=fopr_expr_expr(43); hdc=fopr_expr_expr(36); hag=HFARGnpats(-1; H0Pvar(x1(44)), H0Pvar(x2(45))); def=Some(L1VALtmp(tmp(111))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(46)), def=Some(L1VALtmp(tmp(98))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(98); L1VALcon(LDCONcon(list_nil(5))); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(48)), def=Some(L1VALtmp(tmp(99))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(100); L1VALfcst(expr_iseqz(29)); L1VALtmp(arg[1](96))))), L1CMDif0(L1VALtmp(tmp(100)); L1BLKsome(L1CMDmov(tmp(99); L1VALtmp(tmp(98)))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(101); L1VALcon(LDCONcon(Div(4))); L1VALtmp(arg[2](97)), L1VALtmp(arg[1](96))))), L1CMDapp(tmp(99); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(101)), L1VALtmp(tmp(98))))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(50)), def=Some(L1VALtmp(tmp(102))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(103); L1VALfcst(expr_iseqz(29)); L1VALtmp(arg[2](97))))), L1CMDif0(L1VALtmp(tmp(103)); L1BLKsome(L1CMDmov(tmp(102); L1VALtmp(tmp(99)))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(104); L1VALcon(LDCONcon(Div(4))); L1VALtmp(arg[1](96)), L1VALtmp(arg[2](97))))), L1CMDapp(tmp(102); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(104)), L1VALtmp(tmp(99))))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(51)), def=Some(L1VALtmp(tmp(105))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(106); L1VALcon(LDCONcon(Mul(3))); L1VALtmp(arg[1](96)), L1VALtmp(arg[2](97))))), L1CMDapp(tmp(105); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(106)), L1VALtmp(tmp(102))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(52)), def=Some(L1VALtmp(tmp(107))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(108); L1VALcon(LDCONcon(Sub(2))); L1VALtmp(arg[2](97)), L1VALtmp(arg[1](96))))), L1CMDapp(tmp(107); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(108)), L1VALtmp(tmp(105))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(53)), def=Some(L1VALtmp(tmp(109))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(110); L1VALcon(LDCONcon(Sub(2))); L1VALtmp(arg[1](96)), L1VALtmp(arg[2](97))))), L1CMDapp(tmp(109); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(110)), L1VALtmp(tmp(107))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(54)), def=Some(L1VALtmp(tmp(111))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(112); L1VALcon(LDCONcon(Add(1))); L1VALtmp(arg[1](96)), L1VALtmp(arg[2](97))))), L1CMDapp(tmp(111); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(112)), L1VALtmp(tmp(109))))), L1CMDpatck(L1PCKany()))}))); })
function
fopr_expr_expr_2327_(a1x1, a1x2)
{
let xtmp98;
let xtmp99;
let xtmp100;
let xtmp101;
let xtmp102;
let xtmp103;
let xtmp104;
let xtmp105;
let xtmp106;
let xtmp107;
let xtmp108;
let xtmp109;
let xtmp110;
let xtmp111;
let xtmp112;
// ./Game-of-24.dats: 2400(line=169, offs=1) -- 2419(line=170, offs=11)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(46)), def=Some(L1VALtmp(tmp(98))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(98); L1VALcon(LDCONcon(list_nil(5))); ))), L1CMDpatck(L1PCKany()))})
{
{
xtmp98 = [0];
}
;
;
} // val(H0Pvar(xs(46)))
;
// ./Game-of-24.dats: 2423(line=172, offs=1) -- 2489(line=176, offs=32)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(48)), def=Some(L1VALtmp(tmp(99))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(100); L1VALfcst(expr_iseqz(29)); L1VALtmp(arg[1](96))))), L1CMDif0(L1VALtmp(tmp(100)); L1BLKsome(L1CMDmov(tmp(99); L1VALtmp(tmp(98)))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(101); L1VALcon(LDCONcon(Div(4))); L1VALtmp(arg[2](97)), L1VALtmp(arg[1](96))))), L1CMDapp(tmp(99); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(101)), L1VALtmp(tmp(98))))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp100 = expr_iseqz_2130_(a1x1);
}
;
if
(xtmp100)
// then
{
xtmp99 = xtmp98;
} // if-then
else
{
{
{
xtmp101 = [4, a1x2, a1x1];
}
;
xtmp99 = [1, xtmp101, xtmp98];
}
;
} // if-else
;
;
} // val(H0Pvar(xs(48)))
;
// ./Game-of-24.dats: 2493(line=178, offs=1) -- 2554(line=182, offs=32)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(50)), def=Some(L1VALtmp(tmp(102))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(103); L1VALfcst(expr_iseqz(29)); L1VALtmp(arg[2](97))))), L1CMDif0(L1VALtmp(tmp(103)); L1BLKsome(L1CMDmov(tmp(102); L1VALtmp(tmp(99)))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(104); L1VALcon(LDCONcon(Div(4))); L1VALtmp(arg[1](96)), L1VALtmp(arg[2](97))))), L1CMDapp(tmp(102); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(104)), L1VALtmp(tmp(99))))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp103 = expr_iseqz_2130_(a1x2);
}
;
if
(xtmp103)
// then
{
xtmp102 = xtmp99;
} // if-then
else
{
{
{
xtmp104 = [4, a1x1, a1x2];
}
;
xtmp102 = [1, xtmp104, xtmp99];
}
;
} // if-else
;
;
} // val(H0Pvar(xs(50)))
;
// ./Game-of-24.dats: 2558(line=184, offs=1) -- 2593(line=184, offs=36)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(51)), def=Some(L1VALtmp(tmp(105))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(106); L1VALcon(LDCONcon(Mul(3))); L1VALtmp(arg[1](96)), L1VALtmp(arg[2](97))))), L1CMDapp(tmp(105); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(106)), L1VALtmp(tmp(102))))), L1CMDpatck(L1PCKany()))})
{
{
{
xtmp106 = [3, a1x1, a1x2];
}
;
xtmp105 = [1, xtmp106, xtmp102];
}
;
;
} // val(H0Pvar(xs(51)))
;
// ./Game-of-24.dats: 2594(line=185, offs=1) -- 2629(line=185, offs=36)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(52)), def=Some(L1VALtmp(tmp(107))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(108); L1VALcon(LDCONcon(Sub(2))); L1VALtmp(arg[2](97)), L1VALtmp(arg[1](96))))), L1CMDapp(tmp(107); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(108)), L1VALtmp(tmp(105))))), L1CMDpatck(L1PCKany()))})
{
{
{
xtmp108 = [2, a1x2, a1x1];
}
;
xtmp107 = [1, xtmp108, xtmp105];
}
;
;
} // val(H0Pvar(xs(52)))
;
// ./Game-of-24.dats: 2630(line=186, offs=1) -- 2665(line=186, offs=36)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(53)), def=Some(L1VALtmp(tmp(109))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(110); L1VALcon(LDCONcon(Sub(2))); L1VALtmp(arg[1](96)), L1VALtmp(arg[2](97))))), L1CMDapp(tmp(109); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(110)), L1VALtmp(tmp(107))))), L1CMDpatck(L1PCKany()))})
{
{
{
xtmp110 = [2, a1x1, a1x2];
}
;
xtmp109 = [1, xtmp110, xtmp107];
}
;
;
} // val(H0Pvar(xs(53)))
;
// ./Game-of-24.dats: 2666(line=187, offs=1) -- 2701(line=187, offs=36)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(54)), def=Some(L1VALtmp(tmp(111))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(112); L1VALcon(LDCONcon(Add(1))); L1VALtmp(arg[1](96)), L1VALtmp(arg[2](97))))), L1CMDapp(tmp(111); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(112)), L1VALtmp(tmp(109))))), L1CMDpatck(L1PCKany()))})
{
{
{
xtmp112 = [1, a1x1, a1x2];
}
;
xtmp111 = [1, xtmp112, xtmp109];
}
;
;
} // val(H0Pvar(xs(54)))
;
return xtmp111;
} // function // fopr_expr_expr(36)


// ./Game-of-24.dats: 2726(line=192, offs=1) -- 2751(line=193, offs=18)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Game-of-24.dats: 2774(line=197, offs=1) -- 3204(line=233, offs=14)
// L1DCLfundecl(LFUNDECL@{nam=node_childlst(55); hdc=node_childlst(37); hag=HFARGnpats(-1; H0Pvar(xs(56))); def=Some(L1VALtmp(tmp(114))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_maplist0(41); hag=HFARGnpats(-1; H0Pvar(xs(63))); def=Some(L1VALtmp(tmp(181))); lev=(2); lts=(arg[1](115), tmp(181)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain0(64); hdc=auxmain0(42); hag=HFARGnpats(-1; H0Pvar(xs(65))); def=Some(L1VALtmp(tmp(117))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(121); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(118))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(118); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(arg[1](116))))))); }), L1CMDlam(tmp(122); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(85))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](120)))); lev=(6); lts=(arg[1](120)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(119); L1VALtcst(g_free(43)(84)); L1VALtmp(arg[1](116)))))); }), L1CMDllazy(tmp(117); L1VALtmp(tmp(121)); L1VALtmp(tmp(122)))); }, LFUNDECL@{nam=auxmain1(68); hdc=auxmain1(45); hag=HFARGnpats(-1; H0Pvar(xs(69)), H0Pvar(ys(70))); def=Some(L1VALtmp(tmp(125))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(145); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(126))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[2](124)); tmp(127); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[2](124)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[2](124)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(126); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(arg[1](123))))))), L1BLKsome(L1CMDcarg(tmp(128); L1VALtmp(arg[2](124)); 0), L1CMDcarg(tmp(129); L1VALtmp(arg[2](124)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(130); L1VALfcst(auxmain1(45)); L1VALtmp(arg[1](123)), L1VALtmp(tmp(129))))), L1CMDapp(tmp(126); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(128)), L1VALtmp(tmp(130)))))))); }), L1CMDlam(tmp(146); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(87))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](132)))); lev=(6); lts=(arg[1](132)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(131); L1VALtcst(g_free(43)(86)); L1VALtmp(arg[1](123))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(list_vt_free(46)(89))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_vt_free(46); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(76))); def=Some(L1VALtmp(tmp(144))); lev=(6); lts=(arg[1](134), tmp(144)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(77); hdc=loop(47); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(78))); def=Some(L1VALtmp(tmp(136))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](135)); tmp(137); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[1](135)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[1](135)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(136); 0; )))), L1BLKsome(L1CMDcarg(tmp(138); L1VALtmp(arg[1](135)); 0), L1CMDcarg(tmp(139); L1VALtmp(arg[1](135)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(140))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=HFARGnpats(-1; H0Pvar(x(81))); def=Some(L1VALtmp(tmp(142))); lev=(8); lts=(arg[1](141), tmp(142)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(142); 0; )))); })), L1CMDapp(tmp(140); L1VALtcst(g_free(43)(90)); L1VALtmp(tmp(138))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(140)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(140))))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(143); L1VALfcst(loop(47)); L1VALtmp(tmp(139))))), L1CMDmov(tmp(136); L1VALtmp(tmp(143)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(144); L1VALfcst(loop(47)); L1VALtmp(arg[1](134)))))); }))); })), L1CMDapp(tmp(133); L1VALtcst(g_free(43)(88)); L1VALtmp(arg[2](124)))))); }), L1CMDllazy(tmp(125); L1VALtmp(tmp(145)); L1VALtmp(tmp(146)))); }, LFUNDECL@{nam=auxloop2(66); hdc=auxloop2(48); hag=HFARGnpats(-1; H0Pvar(xs(82))); def=Some(L1VALtmp(tmp(148))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](147)); tmp(149); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](147)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](147)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(148); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(150); L1VALtmp(arg[1](147)); 0), L1CMDcarg(tmp(151); L1VALtmp(arg[1](147)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(ys(86)), def=Some(L1VALtmp(tmp(152))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=maplist0$fopr(38); hag=HFARGnpats(-1; H0Pvar(pp(57))); def=Some(L1VALtmp(tmp(159))); lev=(4); lts=(arg[1](153), tmp(154), tmp(155), tmp(156), tmp(157), tmp(158), tmp(159), tmp(175)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xx(58)), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDtarg(tmp(154); L1VALtmp(arg[1](153)); 0), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(59)), def=Some(L1VALtmp(tmp(155))), def_blk=L1BLKsome(L1CMDtarg(tmp(155); L1VALtmp(arg[1](153)); 1), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x1(60)), H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x2(61)), H0Pany())), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(tmp(154)))); L1PCKany(), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALcarg(L1VALtmp(tmp(154)); 1))); L1PCKany(), L1PCKany()))), L1CMDcarg(tmp(156); L1VALtmp(tmp(154)); 0), L1CMDcarg(tmp(157); L1VALtmp(tmp(154)); 1), L1CMDcarg(tmp(158); L1VALtmp(tmp(157)); 0))})), L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_map_vt(40); hag=HFARGnpats(-1; H0Pvar(xs(87))); def=Some(L1VALflat(L1VALtmp(tmp(173)))); lev=(5); lts=(arg[1](160), tmp(173), tmp(174)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(88); hdc=loop(49); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(89)), H0Pvar(r0(90))); def=Some(L1VALtmp(tmp(163))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](161)); tmp(164); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](161)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](161)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(165); L1VALcon(LDCONcon(list_vt_nil(7))); ))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(165))), L1CMDmov(tmp(163); L1VALnone0())), L1BLKsome(L1CMDcarg(tmp(166); L1VALtmp(arg[1](161)); 0), L1CMDcarg(tmp(167); L1VALtmp(arg[1](161)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(93)), def=Some(L1VALtmp(tmp(168))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })), L1CMDapp(tmp(168); L1VALtcst(map$fopr(39)(93)); L1VALtmp(tmp(166))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALnone0()), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(171); L1VALcon(LDCONcon(list_vt_cons(8))); L1VALtmp(tmp(168)), L1VALtop(IDENT_alp(_))))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(171))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALnone0())), L1CMDmatch(H0Pnil(); L1VALnone0()))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(172); L1VALfcst(loop(49)); L1VALtmp(tmp(167)), L1VALcofs(L1VALflat(L1VALtmp(arg[2](162))); 1)))), L1CMDmov(tmp(163); L1VALnone0())))); })), L1CMDdcl(L1DCLvardecl(LVARDECL@{, hdv=r0(94), ini=None(), hdv_tmp=tmp(173), ini_blk=L1BLKnone()})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(174); L1VALfcst(loop(49)); L1VALtmp(arg[1](160)), L1VALtmp(tmp(173)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(175); L1VALfcst(fopr_expr_expr(36)); L1VALtmp(tmp(156)), L1VALtmp(tmp(158))))), L1CMDapp(tmp(159); L1VALtcst(list_map_vt(40)(92)); L1VALtmp(tmp(175)))))); })), L1CMDapp(tmp(152); L1VALtcst(maplist0$fopr(38)(91)); L1VALtmp(tmp(150))))), L1CMDpatck(L1PCKany()))})), L1CMDcase(1; L1VALtmp(tmp(152)); tmp(177); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(tmp(152)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(tmp(152)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(176); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(tmp(151))))))), L1BLKsome(L1CMDcarg(tmp(178); L1VALtmp(tmp(152)); 0), L1CMDcarg(tmp(179); L1VALtmp(tmp(152)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(180); L1VALfcst(auxmain1(45)); L1VALtmp(tmp(151)), L1VALtmp(tmp(179))))), L1CMDapp(tmp(176); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(178)), L1VALtmp(tmp(180))))))), L1CMDmov(tmp(148); L1VALtmp(tmp(176)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(181); L1VALfcst(auxmain0(42)); L1VALtmp(arg[1](115)))))); })), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_nchoose2(50); hag=HFARGnpats(-1; H0Pvar(xs(97)), H0Pvar(n0(98))); def=Some(L1VALtmp(tmp(277))); lev=(2); lts=(arg[1](183), arg[2](184), tmp(268), tmp(277), tmp(278)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(99); hdc=auxmain(51); hag=HFARGnpats(-1; H0Pvar(xs(100)), H0Pvar(m0(101)), H0Pvar(n0(102))); def=Some(L1VALtmp(tmp(188))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(266); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(189))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(52); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(53))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(190); L1VALtcst(gint_eq_sint_sint(52)(95)); L1VALtmp(arg[2](186)), L1VALtmp(arg[3](187))))), L1CMDif0(L1VALtmp(tmp(190)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=strmcon_vt_sing(54); hag=HFARGnpats(-1; H0Pvar(x0(103))); def=Some(L1VALtmp(tmp(192))); lev=(5); lts=(arg[1](191), tmp(192), tmp(193)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_nil(55); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(194))); lev=(6); lts=(tmp(194), tmp(196), tmp(197)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDlam(tmp(196); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(195))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(195); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))); }), L1CMDlam(tmp(197); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(194); L1VALtmp(tmp(196)); L1VALtmp(tmp(197)))); })), L1CMDapp(tmp(193); L1VALtcst(stream_vt_nil(55)(97)); ))), L1CMDapp(tmp(192); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(arg[1](191)), L1VALtmp(tmp(193)))))); })), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(199); L1VALcon(LDCONcon(list_nil(5))); ))), L1CMDtup(tmp(198); 0; L1VALtmp(arg[1](185)), L1VALtmp(tmp(199))))), L1CMDapp(tmp(189); L1VALtcst(strmcon_vt_sing(54)(96)); L1VALtmp(tmp(198)))))); L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](185)); tmp(200); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](185)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](185)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(189); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(201); L1VALtmp(arg[1](185)); 0), L1CMDcarg(tmp(202); L1VALtmp(arg[1](185)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(m1(106)), def=Some(L1VALtmp(tmp(203))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(203); L1VALtcst(gint_sub_sint_sint(56)(98)); L1VALtmp(arg[2](186)), L1VALint(INT1(1))))), L1CMDpatck(L1PCKany()))}, LVALDECL@{, pat=H0Pvar(n1(107)), def=Some(L1VALtmp(tmp(204))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(204); L1VALtcst(gint_sub_sint_sint(56)(99)); L1VALtmp(arg[3](187)), L1VALint(INT1(1))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(rs1(108)), def=Some(L1VALtmp(tmp(205))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(224))); lev=(5); lts=(arg[1](206), tmp(224)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(208))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(222); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(209))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(210); L1VALtmp(arg[1](207))), L1CMDcase(1; L1VALtmp(tmp(210)); tmp(211); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(210)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(210)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(209); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(212); L1VALtmp(tmp(210)); 0), L1CMDcarg(tmp(213); L1VALtmp(tmp(210)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(214))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(109))); def=Some(L1VALtmp(tmp(216))); lev=(8); lts=(arg[1](215), tmp(216), tmp(217)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(217); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](215)); 0)))), L1CMDtup(tmp(216); 0; L1VALtmp(tmp(217)), L1VALtarg(L1VALtmp(arg[1](215)); 1))))); })), L1CMDapp(tmp(214); L1VALtcst(map0$fopr(58)(101)); L1VALtmp(tmp(212))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(219); L1VALfcst(auxmain(60)); L1VALtmp(tmp(213))))), L1CMDapp(tmp(218); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(214)), L1VALtmp(tmp(219))))), L1CMDmov(tmp(209); L1VALtmp(tmp(218)))))); }), L1CMDlam(tmp(223); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(103))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](221)))); lev=(9); lts=(arg[1](221)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(220); L1VALtcst(g_free(43)(102)); L1VALtmp(arg[1](207)))))); }), L1CMDllazy(tmp(208); L1VALtmp(tmp(222)); L1VALtmp(tmp(223)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(224); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](206)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(225); L1VALfcst(auxmain(51)); L1VALtmp(tmp(202)), L1VALtmp(tmp(203)), L1VALtmp(tmp(204))))), L1CMDapp(tmp(205); L1VALtcst(stream_vt_map0(59)(100)); L1VALtmp(tmp(225))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(rs2(116)), def=Some(L1VALtmp(tmp(226))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(245))); lev=(5); lts=(arg[1](227), tmp(245)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(229))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(243); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(230))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(231); L1VALtmp(arg[1](228))), L1CMDcase(1; L1VALtmp(tmp(231)); tmp(232); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(231)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(231)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(230); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(233); L1VALtmp(tmp(231)); 0), L1CMDcarg(tmp(234); L1VALtmp(tmp(231)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(235))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(117))); def=Some(L1VALtmp(tmp(237))); lev=(8); lts=(arg[1](236), tmp(237), tmp(238)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(238); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](236)); 1)))), L1CMDtup(tmp(237); 0; L1VALtarg(L1VALtmp(arg[1](236)); 0), L1VALtmp(tmp(238)))))); })), L1CMDapp(tmp(235); L1VALtcst(map0$fopr(58)(105)); L1VALtmp(tmp(233))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(240); L1VALfcst(auxmain(60)); L1VALtmp(tmp(234))))), L1CMDapp(tmp(239); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(235)), L1VALtmp(tmp(240))))), L1CMDmov(tmp(230); L1VALtmp(tmp(239)))))); }), L1CMDlam(tmp(244); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(107))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](242)))); lev=(9); lts=(arg[1](242)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(241); L1VALtcst(g_free(43)(106)); L1VALtmp(arg[1](228)))))); }), L1CMDllazy(tmp(229); L1VALtmp(tmp(243)); L1VALtmp(tmp(244)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(245); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](227)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(246); L1VALfcst(auxmain(51)); L1VALtmp(tmp(202)), L1VALtmp(tmp(203)), L1VALtmp(arg[3](187))))), L1CMDapp(tmp(226); L1VALtcst(stream_vt_map0(59)(104)); L1VALtmp(tmp(246))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_append(61); hag=HFARGnpats(-1; H0Pvar(xs(118)), H0Pvar(ys(119))); def=Some(L1VALtmp(tmp(265))); lev=(5); lts=(arg[1](248), arg[2](249), tmp(265)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=append(120); hdc=append(62); hag=HFARGnpats(-1; H0Pvar(xs(121)), H0Pvar(ys(122))); def=Some(L1VALtmp(tmp(252))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(263); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(253))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(254); L1VALtmp(arg[1](250))), L1CMDcase(1; L1VALtmp(tmp(254)); tmp(255); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(254)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(254)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(253); L1VALeval3(L1VALtmp(arg[2](251))))), L1BLKsome(L1CMDcarg(tmp(256); L1VALtmp(tmp(254)); 0), L1CMDcarg(tmp(257); L1VALtmp(tmp(254)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(258); L1VALfcst(append(62)); L1VALtmp(tmp(257)), L1VALtmp(arg[2](251))))), L1CMDapp(tmp(253); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(256)), L1VALtmp(tmp(258)))))))); }), L1CMDlam(tmp(264); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(110))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](260)))); lev=(9); lts=(arg[1](260)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(259); L1VALtcst(g_free(43)(109)); L1VALtmp(arg[1](250))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(112))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](262)))); lev=(9); lts=(arg[1](262)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(261); L1VALtcst(g_free(43)(111)); L1VALtmp(arg[2](251)))))); }), L1CMDllazy(tmp(252); L1VALtmp(tmp(263)); L1VALtmp(tmp(264)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(265); L1VALfcst(append(62)); L1VALtmp(arg[1](248)), L1VALtmp(arg[2](249)))))); })), L1CMDapp(tmp(247); L1VALtcst(stream_vt_append(61)(108)); L1VALtmp(tmp(205)), L1VALtmp(tmp(226))))), L1CMDmov(tmp(189); L1VALeval3(L1VALtmp(tmp(247))))))))); }), L1CMDlam(tmp(267); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(188); L1VALtmp(tmp(266)); L1VALtmp(tmp(267)))); })), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(m0(125)), def=Some(L1VALtmp(tmp(268))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_length(63); hag=HFARGnpats(-1; H0Pvar(xs(126))); def=Some(L1VALtmp(tmp(276))); lev=(3); lts=(arg[1](269), tmp(276)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(127); hdc=loop(64); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(128)), H0Pvar(j0(129))); def=Some(L1VALtmp(tmp(272))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](270)); tmp(273); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](270)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](270)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(272); L1VALtmp(arg[2](271)))), L1BLKsome(L1CMDcarg(tmp(274); L1VALtmp(arg[1](270)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(65); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(66))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(275); L1VALtcst(gint_add_sint_sint(65)(114)); L1VALtmp(arg[2](271)), L1VALint(INT1(1))))), L1CMDapp(tmp(272); L1VALfcst(loop(64)); L1VALtmp(tmp(274)), L1VALtmp(tmp(275)))))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(276); L1VALfcst(loop(64)); L1VALtmp(arg[1](269)), L1VALint(INT1(0)))))); })), L1CMDapp(tmp(268); L1VALtcst(list_length(63)(113)); L1VALtmp(arg[1](183))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(278); L1VALtcst(gint_lt_sint_sint(31)(115)); L1VALtmp(tmp(268)), L1VALtmp(arg[2](184))))), L1CMDif0(L1VALtmp(tmp(278)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_nil(55); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(279))); lev=(3); lts=(tmp(279), tmp(281), tmp(282)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDlam(tmp(281); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(280))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(280); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))); }), L1CMDlam(tmp(282); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(279); L1VALtmp(tmp(281)); L1VALtmp(tmp(282)))); })), L1CMDapp(tmp(277); L1VALtcst(stream_vt_nil(55)(116)); )))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(277); L1VALfcst(auxmain(51)); L1VALtmp(arg[1](183)), L1VALtmp(tmp(268)), L1VALtmp(arg[2](184)))))))); })), L1CMDapp(tmp(182); L1VALtcst(list_nchoose2(50)(94)); L1VALtmp(arg[1](113)), L1VALint(INT1(2))))), L1CMDapp(tmp(114); L1VALtcst(stream_vt_maplist0(41)(83)); L1VALtmp(tmp(182)))))); })
function
node_childlst_2777_(a1x1)
{
let xtmp114;
let xtmp182;
// ./Game-of-24.dats: 2880(line=208, offs=1) -- 2897(line=209, offs=10)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...));
// ./Game-of-24.dats: 2898(line=210, offs=1) -- 2919(line=211, offs=14)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...));
// ./Game-of-24.dats: 2920(line=212, offs=1) -- 2947(line=213, offs=20)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...));
// ./Game-of-24.dats: 2948(line=214, offs=1) -- 3180(line=232, offs=8)
// L1DCLnone0()
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9865(line=814, offs=1) -- 10636(line=879, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_maplist0(41); hag=HFARGnpats(-1; H0Pvar(xs(63))); def=Some(L1VALtmp(tmp(181))); lev=(2); lts=(arg[1](115), tmp(181)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain0(64); hdc=auxmain0(42); hag=HFARGnpats(-1; H0Pvar(xs(65))); def=Some(L1VALtmp(tmp(117))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(121); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(118))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(118); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(arg[1](116))))))); }), L1CMDlam(tmp(122); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(85))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](120)))); lev=(6); lts=(arg[1](120)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(119); L1VALtcst(g_free(43)(84)); L1VALtmp(arg[1](116)))))); }), L1CMDllazy(tmp(117); L1VALtmp(tmp(121)); L1VALtmp(tmp(122)))); }, LFUNDECL@{nam=auxmain1(68); hdc=auxmain1(45); hag=HFARGnpats(-1; H0Pvar(xs(69)), H0Pvar(ys(70))); def=Some(L1VALtmp(tmp(125))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(145); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(126))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[2](124)); tmp(127); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[2](124)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[2](124)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(126); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(arg[1](123))))))), L1BLKsome(L1CMDcarg(tmp(128); L1VALtmp(arg[2](124)); 0), L1CMDcarg(tmp(129); L1VALtmp(arg[2](124)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(130); L1VALfcst(auxmain1(45)); L1VALtmp(arg[1](123)), L1VALtmp(tmp(129))))), L1CMDapp(tmp(126); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(128)), L1VALtmp(tmp(130)))))))); }), L1CMDlam(tmp(146); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(87))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](132)))); lev=(6); lts=(arg[1](132)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(131); L1VALtcst(g_free(43)(86)); L1VALtmp(arg[1](123))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(list_vt_free(46)(89))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_vt_free(46); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(76))); def=Some(L1VALtmp(tmp(144))); lev=(6); lts=(arg[1](134), tmp(144)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(77); hdc=loop(47); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(78))); def=Some(L1VALtmp(tmp(136))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](135)); tmp(137); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[1](135)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[1](135)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(136); 0; )))), L1BLKsome(L1CMDcarg(tmp(138); L1VALtmp(arg[1](135)); 0), L1CMDcarg(tmp(139); L1VALtmp(arg[1](135)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(140))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=HFARGnpats(-1; H0Pvar(x(81))); def=Some(L1VALtmp(tmp(142))); lev=(8); lts=(arg[1](141), tmp(142)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(142); 0; )))); })), L1CMDapp(tmp(140); L1VALtcst(g_free(43)(90)); L1VALtmp(tmp(138))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(140)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(140))))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(143); L1VALfcst(loop(47)); L1VALtmp(tmp(139))))), L1CMDmov(tmp(136); L1VALtmp(tmp(143)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(144); L1VALfcst(loop(47)); L1VALtmp(arg[1](134)))))); }))); })), L1CMDapp(tmp(133); L1VALtcst(g_free(43)(88)); L1VALtmp(arg[2](124)))))); }), L1CMDllazy(tmp(125); L1VALtmp(tmp(145)); L1VALtmp(tmp(146)))); }, LFUNDECL@{nam=auxloop2(66); hdc=auxloop2(48); hag=HFARGnpats(-1; H0Pvar(xs(82))); def=Some(L1VALtmp(tmp(148))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](147)); tmp(149); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](147)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](147)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(148); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(150); L1VALtmp(arg[1](147)); 0), L1CMDcarg(tmp(151); L1VALtmp(arg[1](147)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(ys(86)), def=Some(L1VALtmp(tmp(152))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=maplist0$fopr(38); hag=HFARGnpats(-1; H0Pvar(pp(57))); def=Some(L1VALtmp(tmp(159))); lev=(4); lts=(arg[1](153), tmp(154), tmp(155), tmp(156), tmp(157), tmp(158), tmp(159), tmp(175)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xx(58)), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDtarg(tmp(154); L1VALtmp(arg[1](153)); 0), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(59)), def=Some(L1VALtmp(tmp(155))), def_blk=L1BLKsome(L1CMDtarg(tmp(155); L1VALtmp(arg[1](153)); 1), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x1(60)), H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x2(61)), H0Pany())), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(tmp(154)))); L1PCKany(), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALcarg(L1VALtmp(tmp(154)); 1))); L1PCKany(), L1PCKany()))), L1CMDcarg(tmp(156); L1VALtmp(tmp(154)); 0), L1CMDcarg(tmp(157); L1VALtmp(tmp(154)); 1), L1CMDcarg(tmp(158); L1VALtmp(tmp(157)); 0))})), L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_map_vt(40); hag=HFARGnpats(-1; H0Pvar(xs(87))); def=Some(L1VALflat(L1VALtmp(tmp(173)))); lev=(5); lts=(arg[1](160), tmp(173), tmp(174)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(88); hdc=loop(49); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(89)), H0Pvar(r0(90))); def=Some(L1VALtmp(tmp(163))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](161)); tmp(164); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](161)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](161)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(165); L1VALcon(LDCONcon(list_vt_nil(7))); ))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(165))), L1CMDmov(tmp(163); L1VALnone0())), L1BLKsome(L1CMDcarg(tmp(166); L1VALtmp(arg[1](161)); 0), L1CMDcarg(tmp(167); L1VALtmp(arg[1](161)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(93)), def=Some(L1VALtmp(tmp(168))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })), L1CMDapp(tmp(168); L1VALtcst(map$fopr(39)(93)); L1VALtmp(tmp(166))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALnone0()), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(171); L1VALcon(LDCONcon(list_vt_cons(8))); L1VALtmp(tmp(168)), L1VALtop(IDENT_alp(_))))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(171))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALnone0())), L1CMDmatch(H0Pnil(); L1VALnone0()))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(172); L1VALfcst(loop(49)); L1VALtmp(tmp(167)), L1VALcofs(L1VALflat(L1VALtmp(arg[2](162))); 1)))), L1CMDmov(tmp(163); L1VALnone0())))); })), L1CMDdcl(L1DCLvardecl(LVARDECL@{, hdv=r0(94), ini=None(), hdv_tmp=tmp(173), ini_blk=L1BLKnone()})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(174); L1VALfcst(loop(49)); L1VALtmp(arg[1](160)), L1VALtmp(tmp(173)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(175); L1VALfcst(fopr_expr_expr(36)); L1VALtmp(tmp(156)), L1VALtmp(tmp(158))))), L1CMDapp(tmp(159); L1VALtcst(list_map_vt(40)(92)); L1VALtmp(tmp(175)))))); })), L1CMDapp(tmp(152); L1VALtcst(maplist0$fopr(38)(91)); L1VALtmp(tmp(150))))), L1CMDpatck(L1PCKany()))})), L1CMDcase(1; L1VALtmp(tmp(152)); tmp(177); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(tmp(152)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(tmp(152)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(176); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(tmp(151))))))), L1BLKsome(L1CMDcarg(tmp(178); L1VALtmp(tmp(152)); 0), L1CMDcarg(tmp(179); L1VALtmp(tmp(152)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(180); L1VALfcst(auxmain1(45)); L1VALtmp(tmp(151)), L1VALtmp(tmp(179))))), L1CMDapp(tmp(176); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(178)), L1VALtmp(tmp(180))))))), L1CMDmov(tmp(148); L1VALtmp(tmp(176)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(181); L1VALfcst(auxmain0(42)); L1VALtmp(arg[1](115)))))); })
function
stream_vt_maplist0_3913_(a2x1)
{
let xtmp181;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9937(line=822, offs=1) -- 10634(line=878, offs=9)
// L1DCLfundecl(LFUNDECL@{nam=auxmain0(64); hdc=auxmain0(42); hag=HFARGnpats(-1; H0Pvar(xs(65))); def=Some(L1VALtmp(tmp(117))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(121); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(118))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(118); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(arg[1](116))))))); }), L1CMDlam(tmp(122); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(85))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](120)))); lev=(6); lts=(arg[1](120)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(119); L1VALtcst(g_free(43)(84)); L1VALtmp(arg[1](116)))))); }), L1CMDllazy(tmp(117); L1VALtmp(tmp(121)); L1VALtmp(tmp(122)))); }, LFUNDECL@{nam=auxmain1(68); hdc=auxmain1(45); hag=HFARGnpats(-1; H0Pvar(xs(69)), H0Pvar(ys(70))); def=Some(L1VALtmp(tmp(125))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(145); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(126))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[2](124)); tmp(127); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[2](124)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[2](124)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(126); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(arg[1](123))))))), L1BLKsome(L1CMDcarg(tmp(128); L1VALtmp(arg[2](124)); 0), L1CMDcarg(tmp(129); L1VALtmp(arg[2](124)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(130); L1VALfcst(auxmain1(45)); L1VALtmp(arg[1](123)), L1VALtmp(tmp(129))))), L1CMDapp(tmp(126); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(128)), L1VALtmp(tmp(130)))))))); }), L1CMDlam(tmp(146); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(87))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](132)))); lev=(6); lts=(arg[1](132)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(131); L1VALtcst(g_free(43)(86)); L1VALtmp(arg[1](123))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(list_vt_free(46)(89))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_vt_free(46); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(76))); def=Some(L1VALtmp(tmp(144))); lev=(6); lts=(arg[1](134), tmp(144)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(77); hdc=loop(47); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(78))); def=Some(L1VALtmp(tmp(136))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](135)); tmp(137); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[1](135)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[1](135)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(136); 0; )))), L1BLKsome(L1CMDcarg(tmp(138); L1VALtmp(arg[1](135)); 0), L1CMDcarg(tmp(139); L1VALtmp(arg[1](135)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(140))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=HFARGnpats(-1; H0Pvar(x(81))); def=Some(L1VALtmp(tmp(142))); lev=(8); lts=(arg[1](141), tmp(142)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(142); 0; )))); })), L1CMDapp(tmp(140); L1VALtcst(g_free(43)(90)); L1VALtmp(tmp(138))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(140)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(140))))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(143); L1VALfcst(loop(47)); L1VALtmp(tmp(139))))), L1CMDmov(tmp(136); L1VALtmp(tmp(143)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(144); L1VALfcst(loop(47)); L1VALtmp(arg[1](134)))))); }))); })), L1CMDapp(tmp(133); L1VALtcst(g_free(43)(88)); L1VALtmp(arg[2](124)))))); }), L1CMDllazy(tmp(125); L1VALtmp(tmp(145)); L1VALtmp(tmp(146)))); }, LFUNDECL@{nam=auxloop2(66); hdc=auxloop2(48); hag=HFARGnpats(-1; H0Pvar(xs(82))); def=Some(L1VALtmp(tmp(148))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](147)); tmp(149); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](147)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](147)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(148); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(150); L1VALtmp(arg[1](147)); 0), L1CMDcarg(tmp(151); L1VALtmp(arg[1](147)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(ys(86)), def=Some(L1VALtmp(tmp(152))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=maplist0$fopr(38); hag=HFARGnpats(-1; H0Pvar(pp(57))); def=Some(L1VALtmp(tmp(159))); lev=(4); lts=(arg[1](153), tmp(154), tmp(155), tmp(156), tmp(157), tmp(158), tmp(159), tmp(175)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xx(58)), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDtarg(tmp(154); L1VALtmp(arg[1](153)); 0), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(59)), def=Some(L1VALtmp(tmp(155))), def_blk=L1BLKsome(L1CMDtarg(tmp(155); L1VALtmp(arg[1](153)); 1), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x1(60)), H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x2(61)), H0Pany())), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(tmp(154)))); L1PCKany(), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALcarg(L1VALtmp(tmp(154)); 1))); L1PCKany(), L1PCKany()))), L1CMDcarg(tmp(156); L1VALtmp(tmp(154)); 0), L1CMDcarg(tmp(157); L1VALtmp(tmp(154)); 1), L1CMDcarg(tmp(158); L1VALtmp(tmp(157)); 0))})), L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_map_vt(40); hag=HFARGnpats(-1; H0Pvar(xs(87))); def=Some(L1VALflat(L1VALtmp(tmp(173)))); lev=(5); lts=(arg[1](160), tmp(173), tmp(174)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(88); hdc=loop(49); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(89)), H0Pvar(r0(90))); def=Some(L1VALtmp(tmp(163))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](161)); tmp(164); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](161)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](161)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(165); L1VALcon(LDCONcon(list_vt_nil(7))); ))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(165))), L1CMDmov(tmp(163); L1VALnone0())), L1BLKsome(L1CMDcarg(tmp(166); L1VALtmp(arg[1](161)); 0), L1CMDcarg(tmp(167); L1VALtmp(arg[1](161)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(93)), def=Some(L1VALtmp(tmp(168))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })), L1CMDapp(tmp(168); L1VALtcst(map$fopr(39)(93)); L1VALtmp(tmp(166))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALnone0()), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(171); L1VALcon(LDCONcon(list_vt_cons(8))); L1VALtmp(tmp(168)), L1VALtop(IDENT_alp(_))))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(171))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALnone0())), L1CMDmatch(H0Pnil(); L1VALnone0()))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(172); L1VALfcst(loop(49)); L1VALtmp(tmp(167)), L1VALcofs(L1VALflat(L1VALtmp(arg[2](162))); 1)))), L1CMDmov(tmp(163); L1VALnone0())))); })), L1CMDdcl(L1DCLvardecl(LVARDECL@{, hdv=r0(94), ini=None(), hdv_tmp=tmp(173), ini_blk=L1BLKnone()})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(174); L1VALfcst(loop(49)); L1VALtmp(arg[1](160)), L1VALtmp(tmp(173)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(175); L1VALfcst(fopr_expr_expr(36)); L1VALtmp(tmp(156)), L1VALtmp(tmp(158))))), L1CMDapp(tmp(159); L1VALtcst(list_map_vt(40)(92)); L1VALtmp(tmp(175)))))); })), L1CMDapp(tmp(152); L1VALtcst(maplist0$fopr(38)(91)); L1VALtmp(tmp(150))))), L1CMDpatck(L1PCKany()))})), L1CMDcase(1; L1VALtmp(tmp(152)); tmp(177); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(tmp(152)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(tmp(152)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(176); L1VALfcst(auxloop2(48)); L1VALeval3(L1VALtmp(tmp(151))))))), L1BLKsome(L1CMDcarg(tmp(178); L1VALtmp(tmp(152)); 0), L1CMDcarg(tmp(179); L1VALtmp(tmp(152)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(180); L1VALfcst(auxmain1(45)); L1VALtmp(tmp(151)), L1VALtmp(tmp(179))))), L1CMDapp(tmp(176); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(178)), L1VALtmp(tmp(180))))))), L1CMDmov(tmp(148); L1VALtmp(tmp(176)))))); })
function
auxmain0_9940_(a3x1)
{
let xtmp117;
let xtmp121;
let xtmp122;
xtmp121 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp118;
let xtmp119;
// XEMIT01_FTMPDECS: END
{
xtmp118 = auxloop2_10268_(XATS2JS_llazy_eval(a3x1));
}
;
return xtmp118;
} // lam-function
;
xtmp122 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp118;
let xtmp119;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(85))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](120)))); lev=(6); lts=(arg[1](120)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](120)))); lev=(6); lts=(arg[1](120)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a6x1)
{
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp119 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp117 = XATS2JS_new_llazy(xtmp121,xtmp122);
return xtmp117;
} // function // auxmain0(42)
function
auxmain1_10039_(a3x1, a3x2)
{
let xtmp125;
let xtmp145;
let xtmp146;
xtmp145 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp126;
let xtmp127;
let xtmp128;
let xtmp129;
let xtmp130;
let xtmp131;
let xtmp133;
// XEMIT01_FTMPDECS: END
{
xtmp127 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp127 = 1;
} while(false);
if(xtmp127 > 0) break;
do {
if(1!==a3x2[0]) break;
//L1PCKany();
//L1PCKany();
xtmp127 = 2;
} while(false);
if(xtmp127 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp127) {
case 1:
{
xtmp126 = auxloop2_10268_(XATS2JS_llazy_eval(a3x1));
}
;
break;
case 2:
xtmp128 = a3x2[1];
xtmp129 = a3x2[2];
{
{
xtmp130 = auxmain1_10039_(a3x1, xtmp129);
}
;
xtmp126 = [1, xtmp128, xtmp130];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp126;
} // lam-function
;
xtmp146 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp126;
let xtmp127;
let xtmp128;
let xtmp129;
let xtmp130;
let xtmp131;
let xtmp133;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(87))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](132)))); lev=(6); lts=(arg[1](132)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](132)))); lev=(6); lts=(arg[1](132)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a6x1)
{
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp131 = g_free_1550_(a3x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 10184(line=840, offs=1) -- 10243(line=843, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(list_vt_free(46)(89))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_vt_free(46); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(76))); def=Some(L1VALtmp(tmp(144))); lev=(6); lts=(arg[1](134), tmp(144)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(77); hdc=loop(47); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(78))); def=Some(L1VALtmp(tmp(136))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](135)); tmp(137); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[1](135)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[1](135)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(136); 0; )))), L1BLKsome(L1CMDcarg(tmp(138); L1VALtmp(arg[1](135)); 0), L1CMDcarg(tmp(139); L1VALtmp(arg[1](135)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(140))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=HFARGnpats(-1; H0Pvar(x(81))); def=Some(L1VALtmp(tmp(142))); lev=(8); lts=(arg[1](141), tmp(142)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(142); 0; )))); })), L1CMDapp(tmp(140); L1VALtcst(g_free(43)(90)); L1VALtmp(tmp(138))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(140)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(140))))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(143); L1VALfcst(loop(47)); L1VALtmp(tmp(139))))), L1CMDmov(tmp(136); L1VALtmp(tmp(143)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(144); L1VALfcst(loop(47)); L1VALtmp(arg[1](134)))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1084(line=88, offs=1) -- 1333(line=108, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=list_vt_free(46); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(76))); def=Some(L1VALtmp(tmp(144))); lev=(6); lts=(arg[1](134), tmp(144)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(77); hdc=loop(47); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(78))); def=Some(L1VALtmp(tmp(136))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](135)); tmp(137); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[1](135)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[1](135)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(136); 0; )))), L1BLKsome(L1CMDcarg(tmp(138); L1VALtmp(arg[1](135)); 0), L1CMDcarg(tmp(139); L1VALtmp(arg[1](135)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(140))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=HFARGnpats(-1; H0Pvar(x(81))); def=Some(L1VALtmp(tmp(142))); lev=(8); lts=(arg[1](141), tmp(142)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(142); 0; )))); })), L1CMDapp(tmp(140); L1VALtcst(g_free(43)(90)); L1VALtmp(tmp(138))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(140)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(140))))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(143); L1VALfcst(loop(47)); L1VALtmp(tmp(139))))), L1CMDmov(tmp(136); L1VALtmp(tmp(143)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(144); L1VALfcst(loop(47)); L1VALtmp(arg[1](134)))))); })
function
list_vt_free_1944_(a6x1)
{
let xtmp144;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1149(line=94, offs=1) -- 1311(line=107, offs=5)
// L1DCLfundecl(LFUNDECL@{nam=loop(77); hdc=loop(47); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(78))); def=Some(L1VALtmp(tmp(136))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](135)); tmp(137); L1PCKapp(L1PCKcon(LDCONcon(list_vt_nil(7)); L1VALctag(L1VALtmp(arg[1](135)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_vt_cons(8)); L1VALctag(L1VALtmp(arg[1](135)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(136); 0; )))), L1BLKsome(L1CMDcarg(tmp(138); L1VALtmp(arg[1](135)); 0), L1CMDcarg(tmp(139); L1VALtmp(arg[1](135)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(140))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=HFARGnpats(-1; H0Pvar(x(81))); def=Some(L1VALtmp(tmp(142))); lev=(8); lts=(arg[1](141), tmp(142)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(142); 0; )))); })), L1CMDapp(tmp(140); L1VALtcst(g_free(43)(90)); L1VALtmp(tmp(138))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(140)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(140))))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(143); L1VALfcst(loop(47)); L1VALtmp(tmp(139))))), L1CMDmov(tmp(136); L1VALtmp(tmp(143)))))); })
function
loop_1152_(a7x1)
{
let xtmp136;
let xtmp137;
let xtmp138;
let xtmp139;
let xtmp140;
let xtmp143;
{
xtmp137 = 0;
do {
do {
if(0!==a7x1[0]) break;
xtmp137 = 1;
} while(false);
if(xtmp137 > 0) break;
do {
if(1!==a7x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp137 = 2;
} while(false);
if(xtmp137 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp137) {
case 1:
{
xtmp136 = [-1];;
}
;
break;
case 2:
xtmp138 = a7x1[1];
xtmp139 = a7x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1271(line=105, offs=3) -- 1293(line=105, offs=25)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(140))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=HFARGnpats(-1; H0Pvar(x(81))); def=Some(L1VALtmp(tmp(142))); lev=(8); lts=(arg[1](141), tmp(142)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(142); 0; )))); })), L1CMDapp(tmp(140); L1VALtcst(g_free(43)(90)); L1VALtmp(tmp(138))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(140)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(140))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 175(line=18, offs=1) -- 207(line=20, offs=18)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=HFARGnpats(-1; H0Pvar(x(81))); def=Some(L1VALtmp(tmp(142))); lev=(8); lts=(arg[1](141), tmp(142)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDtup(tmp(142); 0; )))); })
function
g_free_1550_(a8x1)
{
let xtmp142;
{
xtmp142 = [-1];;
}
;
return xtmp142;
} // function // g_free(43)
;
xtmp140 = g_free_1550_(xtmp138);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(140)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(140)));
} // val(H0Pnil())
;
{
xtmp143 = loop_1152_(xtmp139);
}
;
xtmp136 = xtmp143;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp136;
} // function // loop(47)
;
{
xtmp144 = loop_1152_(a6x1);
}
;
return xtmp144;
} // function // list_vt_free(46)
;
// } // val-binding
const // implval/fun
g_free_1550_ = list_vt_free_1944_
;
xtmp133 = g_free_1550_(a3x2);
}
;
} // lam-function
;
xtmp125 = XATS2JS_new_llazy(xtmp145,xtmp146);
return xtmp125;
} // function // auxmain1(45)
function
auxloop2_10268_(a3x1)
{
let xtmp148;
let xtmp149;
let xtmp150;
let xtmp151;
let xtmp152;
let xtmp176;
let xtmp177;
let xtmp178;
let xtmp179;
let xtmp180;
{
xtmp149 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp149 = 1;
} while(false);
if(xtmp149 > 0) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp149 = 2;
} while(false);
if(xtmp149 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp149) {
case 1:
{
xtmp148 = [0];
}
;
break;
case 2:
xtmp150 = a3x1[1];
xtmp151 = a3x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 10413(line=866, offs=3) -- 10451(line=868, offs=28)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(ys(86)), def=Some(L1VALtmp(tmp(152))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=maplist0$fopr(38); hag=HFARGnpats(-1; H0Pvar(pp(57))); def=Some(L1VALtmp(tmp(159))); lev=(4); lts=(arg[1](153), tmp(154), tmp(155), tmp(156), tmp(157), tmp(158), tmp(159), tmp(175)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xx(58)), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDtarg(tmp(154); L1VALtmp(arg[1](153)); 0), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(59)), def=Some(L1VALtmp(tmp(155))), def_blk=L1BLKsome(L1CMDtarg(tmp(155); L1VALtmp(arg[1](153)); 1), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x1(60)), H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x2(61)), H0Pany())), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(tmp(154)))); L1PCKany(), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALcarg(L1VALtmp(tmp(154)); 1))); L1PCKany(), L1PCKany()))), L1CMDcarg(tmp(156); L1VALtmp(tmp(154)); 0), L1CMDcarg(tmp(157); L1VALtmp(tmp(154)); 1), L1CMDcarg(tmp(158); L1VALtmp(tmp(157)); 0))})), L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_map_vt(40); hag=HFARGnpats(-1; H0Pvar(xs(87))); def=Some(L1VALflat(L1VALtmp(tmp(173)))); lev=(5); lts=(arg[1](160), tmp(173), tmp(174)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(88); hdc=loop(49); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(89)), H0Pvar(r0(90))); def=Some(L1VALtmp(tmp(163))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](161)); tmp(164); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](161)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](161)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(165); L1VALcon(LDCONcon(list_vt_nil(7))); ))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(165))), L1CMDmov(tmp(163); L1VALnone0())), L1BLKsome(L1CMDcarg(tmp(166); L1VALtmp(arg[1](161)); 0), L1CMDcarg(tmp(167); L1VALtmp(arg[1](161)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(93)), def=Some(L1VALtmp(tmp(168))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })), L1CMDapp(tmp(168); L1VALtcst(map$fopr(39)(93)); L1VALtmp(tmp(166))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALnone0()), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(171); L1VALcon(LDCONcon(list_vt_cons(8))); L1VALtmp(tmp(168)), L1VALtop(IDENT_alp(_))))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(171))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALnone0())), L1CMDmatch(H0Pnil(); L1VALnone0()))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(172); L1VALfcst(loop(49)); L1VALtmp(tmp(167)), L1VALcofs(L1VALflat(L1VALtmp(arg[2](162))); 1)))), L1CMDmov(tmp(163); L1VALnone0())))); })), L1CMDdcl(L1DCLvardecl(LVARDECL@{, hdv=r0(94), ini=None(), hdv_tmp=tmp(173), ini_blk=L1BLKnone()})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(174); L1VALfcst(loop(49)); L1VALtmp(arg[1](160)), L1VALtmp(tmp(173)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(175); L1VALfcst(fopr_expr_expr(36)); L1VALtmp(tmp(156)), L1VALtmp(tmp(158))))), L1CMDapp(tmp(159); L1VALtcst(list_map_vt(40)(92)); L1VALtmp(tmp(175)))))); })), L1CMDapp(tmp(152); L1VALtcst(maplist0$fopr(38)(91)); L1VALtmp(tmp(150))))), L1CMDpatck(L1PCKany()))})
{
{
// ./Game-of-24.dats: 2948(line=214, offs=1) -- 3180(line=232, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=maplist0$fopr(38); hag=HFARGnpats(-1; H0Pvar(pp(57))); def=Some(L1VALtmp(tmp(159))); lev=(4); lts=(arg[1](153), tmp(154), tmp(155), tmp(156), tmp(157), tmp(158), tmp(159), tmp(175)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xx(58)), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDtarg(tmp(154); L1VALtmp(arg[1](153)); 0), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(59)), def=Some(L1VALtmp(tmp(155))), def_blk=L1BLKsome(L1CMDtarg(tmp(155); L1VALtmp(arg[1](153)); 1), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x1(60)), H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x2(61)), H0Pany())), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(tmp(154)))); L1PCKany(), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALcarg(L1VALtmp(tmp(154)); 1))); L1PCKany(), L1PCKany()))), L1CMDcarg(tmp(156); L1VALtmp(tmp(154)); 0), L1CMDcarg(tmp(157); L1VALtmp(tmp(154)); 1), L1CMDcarg(tmp(158); L1VALtmp(tmp(157)); 0))})), L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_map_vt(40); hag=HFARGnpats(-1; H0Pvar(xs(87))); def=Some(L1VALflat(L1VALtmp(tmp(173)))); lev=(5); lts=(arg[1](160), tmp(173), tmp(174)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(88); hdc=loop(49); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(89)), H0Pvar(r0(90))); def=Some(L1VALtmp(tmp(163))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](161)); tmp(164); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](161)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](161)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(165); L1VALcon(LDCONcon(list_vt_nil(7))); ))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(165))), L1CMDmov(tmp(163); L1VALnone0())), L1BLKsome(L1CMDcarg(tmp(166); L1VALtmp(arg[1](161)); 0), L1CMDcarg(tmp(167); L1VALtmp(arg[1](161)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(93)), def=Some(L1VALtmp(tmp(168))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })), L1CMDapp(tmp(168); L1VALtcst(map$fopr(39)(93)); L1VALtmp(tmp(166))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALnone0()), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(171); L1VALcon(LDCONcon(list_vt_cons(8))); L1VALtmp(tmp(168)), L1VALtop(IDENT_alp(_))))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(171))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALnone0())), L1CMDmatch(H0Pnil(); L1VALnone0()))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(172); L1VALfcst(loop(49)); L1VALtmp(tmp(167)), L1VALcofs(L1VALflat(L1VALtmp(arg[2](162))); 1)))), L1CMDmov(tmp(163); L1VALnone0())))); })), L1CMDdcl(L1DCLvardecl(LVARDECL@{, hdv=r0(94), ini=None(), hdv_tmp=tmp(173), ini_blk=L1BLKnone()})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(174); L1VALfcst(loop(49)); L1VALtmp(arg[1](160)), L1VALtmp(tmp(173)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(175); L1VALfcst(fopr_expr_expr(36)); L1VALtmp(tmp(156)), L1VALtmp(tmp(158))))), L1CMDapp(tmp(159); L1VALtcst(list_map_vt(40)(92)); L1VALtmp(tmp(175)))))); })
function
maplist0$fopr_3051_(a4x1)
{
let xtmp154;
let xtmp155;
let xtmp156;
let xtmp157;
let xtmp158;
let xtmp159;
let xtmp175;
// ./Game-of-24.dats: 2997(line=219, offs=1) -- 3010(line=219, offs=14)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xx(58)), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDtarg(tmp(154); L1VALtmp(arg[1](153)); 0), L1CMDpatck(L1PCKany()))})
{
xtmp154 = a4x1[1];
;
} // val(H0Pvar(xx(58)))
;
// ./Game-of-24.dats: 3011(line=220, offs=1) -- 3024(line=220, offs=14)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(59)), def=Some(L1VALtmp(tmp(155))), def_blk=L1BLKsome(L1CMDtarg(tmp(155); L1VALtmp(arg[1](153)); 1), L1CMDpatck(L1PCKany()))})
{
xtmp155 = a4x1[2];
;
} // val(H0Pvar(xs(59)))
;
// ./Game-of-24.dats: 3025(line=221, offs=1) -- 3069(line=224, offs=25)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x1(60)), H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x2(61)), H0Pany())), def=Some(L1VALtmp(tmp(154))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(tmp(154)))); L1PCKany(), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALcarg(L1VALtmp(tmp(154)); 1))); L1PCKany(), L1PCKany()))), L1CMDcarg(tmp(156); L1VALtmp(tmp(154)); 0), L1CMDcarg(tmp(157); L1VALtmp(tmp(154)); 1), L1CMDcarg(tmp(158); L1VALtmp(tmp(157)); 0))})
{
if(1!==xtmp154[0]) XATS2JS_patckerr0();
if(1!==xtmp154[2][0]) XATS2JS_patckerr0();
;
xtmp156 = xtmp154[1];
xtmp157 = xtmp154[2];
xtmp158 = xtmp157[1];
} // val(H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x1(60)), H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x2(61)), H0Pany())))
;
// ./Game-of-24.dats: 3126(line=229, offs=1) -- 3174(line=230, offs=41)
// L1DCLnone0()
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4377(line=384, offs=1) -- 4816(line=421, offs=22)
// L1DCLimpdecl(LIMPDECL@{hdc=list_map_vt(40); hag=HFARGnpats(-1; H0Pvar(xs(87))); def=Some(L1VALflat(L1VALtmp(tmp(173)))); lev=(5); lts=(arg[1](160), tmp(173), tmp(174)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(88); hdc=loop(49); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(89)), H0Pvar(r0(90))); def=Some(L1VALtmp(tmp(163))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](161)); tmp(164); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](161)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](161)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(165); L1VALcon(LDCONcon(list_vt_nil(7))); ))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(165))), L1CMDmov(tmp(163); L1VALnone0())), L1BLKsome(L1CMDcarg(tmp(166); L1VALtmp(arg[1](161)); 0), L1CMDcarg(tmp(167); L1VALtmp(arg[1](161)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(93)), def=Some(L1VALtmp(tmp(168))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })), L1CMDapp(tmp(168); L1VALtcst(map$fopr(39)(93)); L1VALtmp(tmp(166))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALnone0()), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(171); L1VALcon(LDCONcon(list_vt_cons(8))); L1VALtmp(tmp(168)), L1VALtop(IDENT_alp(_))))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(171))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALnone0())), L1CMDmatch(H0Pnil(); L1VALnone0()))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(172); L1VALfcst(loop(49)); L1VALtmp(tmp(167)), L1VALcofs(L1VALflat(L1VALtmp(arg[2](162))); 1)))), L1CMDmov(tmp(163); L1VALnone0())))); })), L1CMDdcl(L1DCLvardecl(LVARDECL@{, hdv=r0(94), ini=None(), hdv_tmp=tmp(173), ini_blk=L1BLKnone()})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(174); L1VALfcst(loop(49)); L1VALtmp(arg[1](160)), L1VALtmp(tmp(173)))))); })
function
list_map_vt_3610_(a5x1)
{
let xtmp173;
let xtmp174;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4419(line=388, offs=1) -- 4443(line=389, offs=17)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4444(line=390, offs=1) -- 4478(line=391, offs=27)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4482(line=393, offs=1) -- 4738(line=415, offs=5)
// L1DCLfundecl(LFUNDECL@{nam=loop(88); hdc=loop(49); hag=HFARGnone1(...), HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(89)), H0Pvar(r0(90))); def=Some(L1VALtmp(tmp(163))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](161)); tmp(164); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](161)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](161)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(165); L1VALcon(LDCONcon(list_vt_nil(7))); ))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(165))), L1CMDmov(tmp(163); L1VALnone0())), L1BLKsome(L1CMDcarg(tmp(166); L1VALtmp(arg[1](161)); 0), L1CMDcarg(tmp(167); L1VALtmp(arg[1](161)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(93)), def=Some(L1VALtmp(tmp(168))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })), L1CMDapp(tmp(168); L1VALtcst(map$fopr(39)(93)); L1VALtmp(tmp(166))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALnone0()), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(171); L1VALcon(LDCONcon(list_vt_cons(8))); L1VALtmp(tmp(168)), L1VALtop(IDENT_alp(_))))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(171))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALnone0())), L1CMDmatch(H0Pnil(); L1VALnone0()))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(172); L1VALfcst(loop(49)); L1VALtmp(tmp(167)), L1VALcofs(L1VALflat(L1VALtmp(arg[2](162))); 1)))), L1CMDmov(tmp(163); L1VALnone0())))); })
function
loop_4485_(a6x1, a6x2)
{
let xtmp163;
let xtmp164;
let xtmp165;
let xtmp166;
let xtmp167;
let xtmp168;
let xtmp171;
let xtmp172;
{
xtmp164 = 0;
do {
do {
if(0!==a6x1[0]) break;
xtmp164 = 1;
} while(false);
if(xtmp164 > 0) break;
do {
if(1!==a6x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp164 = 2;
} while(false);
if(xtmp164 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp164) {
case 1:
{
xtmp165 = [0];
}
;
XATS2JS_lval_set(a6x2, xtmp165);
xtmp163 = null;
break;
case 2:
xtmp166 = a6x1[1];
xtmp167 = a6x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4635(line=408, offs=1) -- 4664(line=409, offs=21)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(93)), def=Some(L1VALtmp(tmp(168))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })), L1CMDapp(tmp(168); L1VALtcst(map$fopr(39)(93)); L1VALtmp(tmp(166))))), L1CMDpatck(L1PCKany()))})
{
{
// ./Game-of-24.dats: 3126(line=229, offs=1) -- 3174(line=230, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=map$fopr(39); hag=HFARGnpats(-1; H0Pvar(x0(62))); def=Some(L1VALtmp(tmp(170))); lev=(7); lts=(arg[1](169), tmp(170)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(170); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(arg[1](169)), L1VALtmp(tmp(155)))))); })
function
map$fopr_2300_(a7x1)
{
let xtmp170;
{
xtmp170 = [1, a7x1, xtmp155];
}
;
return xtmp170;
} // function // map$fopr(39)
;
xtmp168 = map$fopr_2300_(xtmp166);
}
;
;
} // val(H0Pvar(y0(93)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4665(line=410, offs=1) -- 4701(line=411, offs=28)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALnone0()), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(171); L1VALcon(LDCONcon(list_vt_cons(8))); L1VALtmp(tmp(168)), L1VALtop(IDENT_alp(_))))), L1CMDassgn(L1VALtmp(arg[2](162)); L1VALtmp(tmp(171))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALnone0())), L1CMDmatch(H0Pnil(); L1VALnone0()))})
{
{
xtmp171 = [1, xtmp168, XATS2JS_top];
}
;
XATS2JS_lval_set(a6x2, xtmp171);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp172 = loop_4485_(xtmp167, XATS2JS_new_cofs(XATS2JS_lval_get(a6x2),2));
}
;
xtmp163 = null;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp163;
} // function // loop(49)
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4769(line=419, offs=1) -- 4788(line=419, offs=20)
// L1DCLvardecl(LVARDECL@{, hdv=r0(94), ini=None(), hdv_tmp=tmp(173), ini_blk=L1BLKnone()})
{
xtmp173 = XATS2JS_new_var0();
} // val(r0(94))
;
{
xtmp174 = loop_4485_(a5x1, xtmp173);
}
;
return XATS2JS_lval_get(xtmp173);
} // function // list_map_vt(40)
;
{
xtmp175 = fopr_expr_expr_2327_(xtmp156, xtmp158);
}
;
xtmp159 = list_map_vt_3610_(xtmp175);
}
;
return xtmp159;
} // function // maplist0$fopr(38)
;
xtmp152 = maplist0$fopr_3051_(xtmp150);
}
;
;
} // val(H0Pvar(ys(86)))
;
{
xtmp177 = 0;
do {
do {
if(0!==xtmp152[0]) break;
xtmp177 = 1;
} while(false);
if(xtmp177 > 0) break;
do {
if(1!==xtmp152[0]) break;
//L1PCKany();
//L1PCKany();
xtmp177 = 2;
} while(false);
if(xtmp177 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp177) {
case 1:
{
xtmp176 = auxloop2_10268_(XATS2JS_llazy_eval(xtmp151));
}
;
break;
case 2:
xtmp178 = xtmp152[1];
xtmp179 = xtmp152[2];
{
{
xtmp180 = auxmain1_10039_(xtmp151, xtmp179);
}
;
xtmp176 = [1, xtmp178, xtmp180];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
xtmp148 = xtmp176;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp148;
} // function // auxloop2(48)
;
{
xtmp181 = auxmain0_9940_(a2x1);
}
;
return xtmp181;
} // function // stream_vt_maplist0(41)
;
{
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 5611(line=376, offs=1) -- 6407(line=455, offs=9)
// L1DCLimpdecl(LIMPDECL@{hdc=list_nchoose2(50); hag=HFARGnpats(-1; H0Pvar(xs(97)), H0Pvar(n0(98))); def=Some(L1VALtmp(tmp(277))); lev=(2); lts=(arg[1](183), arg[2](184), tmp(268), tmp(277), tmp(278)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(99); hdc=auxmain(51); hag=HFARGnpats(-1; H0Pvar(xs(100)), H0Pvar(m0(101)), H0Pvar(n0(102))); def=Some(L1VALtmp(tmp(188))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(266); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(189))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(52); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(53))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(190); L1VALtcst(gint_eq_sint_sint(52)(95)); L1VALtmp(arg[2](186)), L1VALtmp(arg[3](187))))), L1CMDif0(L1VALtmp(tmp(190)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=strmcon_vt_sing(54); hag=HFARGnpats(-1; H0Pvar(x0(103))); def=Some(L1VALtmp(tmp(192))); lev=(5); lts=(arg[1](191), tmp(192), tmp(193)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_nil(55); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(194))); lev=(6); lts=(tmp(194), tmp(196), tmp(197)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDlam(tmp(196); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(195))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(195); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))); }), L1CMDlam(tmp(197); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(194); L1VALtmp(tmp(196)); L1VALtmp(tmp(197)))); })), L1CMDapp(tmp(193); L1VALtcst(stream_vt_nil(55)(97)); ))), L1CMDapp(tmp(192); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(arg[1](191)), L1VALtmp(tmp(193)))))); })), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(199); L1VALcon(LDCONcon(list_nil(5))); ))), L1CMDtup(tmp(198); 0; L1VALtmp(arg[1](185)), L1VALtmp(tmp(199))))), L1CMDapp(tmp(189); L1VALtcst(strmcon_vt_sing(54)(96)); L1VALtmp(tmp(198)))))); L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](185)); tmp(200); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](185)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](185)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(189); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(201); L1VALtmp(arg[1](185)); 0), L1CMDcarg(tmp(202); L1VALtmp(arg[1](185)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(m1(106)), def=Some(L1VALtmp(tmp(203))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(203); L1VALtcst(gint_sub_sint_sint(56)(98)); L1VALtmp(arg[2](186)), L1VALint(INT1(1))))), L1CMDpatck(L1PCKany()))}, LVALDECL@{, pat=H0Pvar(n1(107)), def=Some(L1VALtmp(tmp(204))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(204); L1VALtcst(gint_sub_sint_sint(56)(99)); L1VALtmp(arg[3](187)), L1VALint(INT1(1))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(rs1(108)), def=Some(L1VALtmp(tmp(205))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(224))); lev=(5); lts=(arg[1](206), tmp(224)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(208))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(222); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(209))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(210); L1VALtmp(arg[1](207))), L1CMDcase(1; L1VALtmp(tmp(210)); tmp(211); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(210)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(210)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(209); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(212); L1VALtmp(tmp(210)); 0), L1CMDcarg(tmp(213); L1VALtmp(tmp(210)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(214))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(109))); def=Some(L1VALtmp(tmp(216))); lev=(8); lts=(arg[1](215), tmp(216), tmp(217)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(217); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](215)); 0)))), L1CMDtup(tmp(216); 0; L1VALtmp(tmp(217)), L1VALtarg(L1VALtmp(arg[1](215)); 1))))); })), L1CMDapp(tmp(214); L1VALtcst(map0$fopr(58)(101)); L1VALtmp(tmp(212))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(219); L1VALfcst(auxmain(60)); L1VALtmp(tmp(213))))), L1CMDapp(tmp(218); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(214)), L1VALtmp(tmp(219))))), L1CMDmov(tmp(209); L1VALtmp(tmp(218)))))); }), L1CMDlam(tmp(223); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(103))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](221)))); lev=(9); lts=(arg[1](221)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(220); L1VALtcst(g_free(43)(102)); L1VALtmp(arg[1](207)))))); }), L1CMDllazy(tmp(208); L1VALtmp(tmp(222)); L1VALtmp(tmp(223)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(224); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](206)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(225); L1VALfcst(auxmain(51)); L1VALtmp(tmp(202)), L1VALtmp(tmp(203)), L1VALtmp(tmp(204))))), L1CMDapp(tmp(205); L1VALtcst(stream_vt_map0(59)(100)); L1VALtmp(tmp(225))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(rs2(116)), def=Some(L1VALtmp(tmp(226))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(245))); lev=(5); lts=(arg[1](227), tmp(245)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(229))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(243); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(230))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(231); L1VALtmp(arg[1](228))), L1CMDcase(1; L1VALtmp(tmp(231)); tmp(232); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(231)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(231)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(230); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(233); L1VALtmp(tmp(231)); 0), L1CMDcarg(tmp(234); L1VALtmp(tmp(231)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(235))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(117))); def=Some(L1VALtmp(tmp(237))); lev=(8); lts=(arg[1](236), tmp(237), tmp(238)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(238); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](236)); 1)))), L1CMDtup(tmp(237); 0; L1VALtarg(L1VALtmp(arg[1](236)); 0), L1VALtmp(tmp(238)))))); })), L1CMDapp(tmp(235); L1VALtcst(map0$fopr(58)(105)); L1VALtmp(tmp(233))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(240); L1VALfcst(auxmain(60)); L1VALtmp(tmp(234))))), L1CMDapp(tmp(239); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(235)), L1VALtmp(tmp(240))))), L1CMDmov(tmp(230); L1VALtmp(tmp(239)))))); }), L1CMDlam(tmp(244); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(107))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](242)))); lev=(9); lts=(arg[1](242)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(241); L1VALtcst(g_free(43)(106)); L1VALtmp(arg[1](228)))))); }), L1CMDllazy(tmp(229); L1VALtmp(tmp(243)); L1VALtmp(tmp(244)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(245); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](227)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(246); L1VALfcst(auxmain(51)); L1VALtmp(tmp(202)), L1VALtmp(tmp(203)), L1VALtmp(arg[3](187))))), L1CMDapp(tmp(226); L1VALtcst(stream_vt_map0(59)(104)); L1VALtmp(tmp(246))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_append(61); hag=HFARGnpats(-1; H0Pvar(xs(118)), H0Pvar(ys(119))); def=Some(L1VALtmp(tmp(265))); lev=(5); lts=(arg[1](248), arg[2](249), tmp(265)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=append(120); hdc=append(62); hag=HFARGnpats(-1; H0Pvar(xs(121)), H0Pvar(ys(122))); def=Some(L1VALtmp(tmp(252))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(263); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(253))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(254); L1VALtmp(arg[1](250))), L1CMDcase(1; L1VALtmp(tmp(254)); tmp(255); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(254)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(254)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(253); L1VALeval3(L1VALtmp(arg[2](251))))), L1BLKsome(L1CMDcarg(tmp(256); L1VALtmp(tmp(254)); 0), L1CMDcarg(tmp(257); L1VALtmp(tmp(254)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(258); L1VALfcst(append(62)); L1VALtmp(tmp(257)), L1VALtmp(arg[2](251))))), L1CMDapp(tmp(253); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(256)), L1VALtmp(tmp(258)))))))); }), L1CMDlam(tmp(264); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(110))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](260)))); lev=(9); lts=(arg[1](260)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(259); L1VALtcst(g_free(43)(109)); L1VALtmp(arg[1](250))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(112))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](262)))); lev=(9); lts=(arg[1](262)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(261); L1VALtcst(g_free(43)(111)); L1VALtmp(arg[2](251)))))); }), L1CMDllazy(tmp(252); L1VALtmp(tmp(263)); L1VALtmp(tmp(264)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(265); L1VALfcst(append(62)); L1VALtmp(arg[1](248)), L1VALtmp(arg[2](249)))))); })), L1CMDapp(tmp(247); L1VALtcst(stream_vt_append(61)(108)); L1VALtmp(tmp(205)), L1VALtmp(tmp(226))))), L1CMDmov(tmp(189); L1VALeval3(L1VALtmp(tmp(247))))))))); }), L1CMDlam(tmp(267); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(188); L1VALtmp(tmp(266)); L1VALtmp(tmp(267)))); })), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(m0(125)), def=Some(L1VALtmp(tmp(268))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_length(63); hag=HFARGnpats(-1; H0Pvar(xs(126))); def=Some(L1VALtmp(tmp(276))); lev=(3); lts=(arg[1](269), tmp(276)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(127); hdc=loop(64); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(128)), H0Pvar(j0(129))); def=Some(L1VALtmp(tmp(272))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](270)); tmp(273); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](270)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](270)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(272); L1VALtmp(arg[2](271)))), L1BLKsome(L1CMDcarg(tmp(274); L1VALtmp(arg[1](270)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(65); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(66))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(275); L1VALtcst(gint_add_sint_sint(65)(114)); L1VALtmp(arg[2](271)), L1VALint(INT1(1))))), L1CMDapp(tmp(272); L1VALfcst(loop(64)); L1VALtmp(tmp(274)), L1VALtmp(tmp(275)))))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(276); L1VALfcst(loop(64)); L1VALtmp(arg[1](269)), L1VALint(INT1(0)))))); })), L1CMDapp(tmp(268); L1VALtcst(list_length(63)(113)); L1VALtmp(arg[1](183))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(278); L1VALtcst(gint_lt_sint_sint(31)(115)); L1VALtmp(tmp(268)), L1VALtmp(arg[2](184))))), L1CMDif0(L1VALtmp(tmp(278)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_nil(55); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(279))); lev=(3); lts=(tmp(279), tmp(281), tmp(282)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDlam(tmp(281); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(280))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(280); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))); }), L1CMDlam(tmp(282); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(279); L1VALtmp(tmp(281)); L1VALtmp(tmp(282)))); })), L1CMDapp(tmp(277); L1VALtcst(stream_vt_nil(55)(116)); )))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(277); L1VALfcst(auxmain(51)); L1VALtmp(arg[1](183)), L1VALtmp(tmp(268)), L1VALtmp(arg[2](184)))))))); })
function
list_nchoose2_4834_(a2x1, a2x2)
{
let xtmp268;
let xtmp277;
let xtmp278;
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 5767(line=396, offs=1) -- 5799(line=398, offs=19)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 5803(line=400, offs=1) -- 6372(line=453, offs=8)
// L1DCLfundecl(LFUNDECL@{nam=auxmain(99); hdc=auxmain(51); hag=HFARGnpats(-1; H0Pvar(xs(100)), H0Pvar(m0(101)), H0Pvar(n0(102))); def=Some(L1VALtmp(tmp(188))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(266); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(189))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(52); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(53))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(190); L1VALtcst(gint_eq_sint_sint(52)(95)); L1VALtmp(arg[2](186)), L1VALtmp(arg[3](187))))), L1CMDif0(L1VALtmp(tmp(190)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=strmcon_vt_sing(54); hag=HFARGnpats(-1; H0Pvar(x0(103))); def=Some(L1VALtmp(tmp(192))); lev=(5); lts=(arg[1](191), tmp(192), tmp(193)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_nil(55); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(194))); lev=(6); lts=(tmp(194), tmp(196), tmp(197)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDlam(tmp(196); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(195))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(195); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))); }), L1CMDlam(tmp(197); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(194); L1VALtmp(tmp(196)); L1VALtmp(tmp(197)))); })), L1CMDapp(tmp(193); L1VALtcst(stream_vt_nil(55)(97)); ))), L1CMDapp(tmp(192); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(arg[1](191)), L1VALtmp(tmp(193)))))); })), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(199); L1VALcon(LDCONcon(list_nil(5))); ))), L1CMDtup(tmp(198); 0; L1VALtmp(arg[1](185)), L1VALtmp(tmp(199))))), L1CMDapp(tmp(189); L1VALtcst(strmcon_vt_sing(54)(96)); L1VALtmp(tmp(198)))))); L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](185)); tmp(200); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](185)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](185)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(189); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(201); L1VALtmp(arg[1](185)); 0), L1CMDcarg(tmp(202); L1VALtmp(arg[1](185)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(m1(106)), def=Some(L1VALtmp(tmp(203))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(203); L1VALtcst(gint_sub_sint_sint(56)(98)); L1VALtmp(arg[2](186)), L1VALint(INT1(1))))), L1CMDpatck(L1PCKany()))}, LVALDECL@{, pat=H0Pvar(n1(107)), def=Some(L1VALtmp(tmp(204))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(204); L1VALtcst(gint_sub_sint_sint(56)(99)); L1VALtmp(arg[3](187)), L1VALint(INT1(1))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(rs1(108)), def=Some(L1VALtmp(tmp(205))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(224))); lev=(5); lts=(arg[1](206), tmp(224)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(208))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(222); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(209))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(210); L1VALtmp(arg[1](207))), L1CMDcase(1; L1VALtmp(tmp(210)); tmp(211); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(210)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(210)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(209); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(212); L1VALtmp(tmp(210)); 0), L1CMDcarg(tmp(213); L1VALtmp(tmp(210)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(214))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(109))); def=Some(L1VALtmp(tmp(216))); lev=(8); lts=(arg[1](215), tmp(216), tmp(217)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(217); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](215)); 0)))), L1CMDtup(tmp(216); 0; L1VALtmp(tmp(217)), L1VALtarg(L1VALtmp(arg[1](215)); 1))))); })), L1CMDapp(tmp(214); L1VALtcst(map0$fopr(58)(101)); L1VALtmp(tmp(212))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(219); L1VALfcst(auxmain(60)); L1VALtmp(tmp(213))))), L1CMDapp(tmp(218); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(214)), L1VALtmp(tmp(219))))), L1CMDmov(tmp(209); L1VALtmp(tmp(218)))))); }), L1CMDlam(tmp(223); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(103))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](221)))); lev=(9); lts=(arg[1](221)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(220); L1VALtcst(g_free(43)(102)); L1VALtmp(arg[1](207)))))); }), L1CMDllazy(tmp(208); L1VALtmp(tmp(222)); L1VALtmp(tmp(223)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(224); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](206)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(225); L1VALfcst(auxmain(51)); L1VALtmp(tmp(202)), L1VALtmp(tmp(203)), L1VALtmp(tmp(204))))), L1CMDapp(tmp(205); L1VALtcst(stream_vt_map0(59)(100)); L1VALtmp(tmp(225))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(rs2(116)), def=Some(L1VALtmp(tmp(226))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(245))); lev=(5); lts=(arg[1](227), tmp(245)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(229))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(243); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(230))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(231); L1VALtmp(arg[1](228))), L1CMDcase(1; L1VALtmp(tmp(231)); tmp(232); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(231)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(231)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(230); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(233); L1VALtmp(tmp(231)); 0), L1CMDcarg(tmp(234); L1VALtmp(tmp(231)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(235))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(117))); def=Some(L1VALtmp(tmp(237))); lev=(8); lts=(arg[1](236), tmp(237), tmp(238)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(238); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](236)); 1)))), L1CMDtup(tmp(237); 0; L1VALtarg(L1VALtmp(arg[1](236)); 0), L1VALtmp(tmp(238)))))); })), L1CMDapp(tmp(235); L1VALtcst(map0$fopr(58)(105)); L1VALtmp(tmp(233))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(240); L1VALfcst(auxmain(60)); L1VALtmp(tmp(234))))), L1CMDapp(tmp(239); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(235)), L1VALtmp(tmp(240))))), L1CMDmov(tmp(230); L1VALtmp(tmp(239)))))); }), L1CMDlam(tmp(244); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(107))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](242)))); lev=(9); lts=(arg[1](242)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(241); L1VALtcst(g_free(43)(106)); L1VALtmp(arg[1](228)))))); }), L1CMDllazy(tmp(229); L1VALtmp(tmp(243)); L1VALtmp(tmp(244)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(245); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](227)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(246); L1VALfcst(auxmain(51)); L1VALtmp(tmp(202)), L1VALtmp(tmp(203)), L1VALtmp(arg[3](187))))), L1CMDapp(tmp(226); L1VALtcst(stream_vt_map0(59)(104)); L1VALtmp(tmp(246))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_append(61); hag=HFARGnpats(-1; H0Pvar(xs(118)), H0Pvar(ys(119))); def=Some(L1VALtmp(tmp(265))); lev=(5); lts=(arg[1](248), arg[2](249), tmp(265)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=append(120); hdc=append(62); hag=HFARGnpats(-1; H0Pvar(xs(121)), H0Pvar(ys(122))); def=Some(L1VALtmp(tmp(252))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(263); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(253))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(254); L1VALtmp(arg[1](250))), L1CMDcase(1; L1VALtmp(tmp(254)); tmp(255); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(254)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(254)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(253); L1VALeval3(L1VALtmp(arg[2](251))))), L1BLKsome(L1CMDcarg(tmp(256); L1VALtmp(tmp(254)); 0), L1CMDcarg(tmp(257); L1VALtmp(tmp(254)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(258); L1VALfcst(append(62)); L1VALtmp(tmp(257)), L1VALtmp(arg[2](251))))), L1CMDapp(tmp(253); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(256)), L1VALtmp(tmp(258)))))))); }), L1CMDlam(tmp(264); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(110))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](260)))); lev=(9); lts=(arg[1](260)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(259); L1VALtcst(g_free(43)(109)); L1VALtmp(arg[1](250))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(112))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](262)))); lev=(9); lts=(arg[1](262)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(261); L1VALtcst(g_free(43)(111)); L1VALtmp(arg[2](251)))))); }), L1CMDllazy(tmp(252); L1VALtmp(tmp(263)); L1VALtmp(tmp(264)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(265); L1VALfcst(append(62)); L1VALtmp(arg[1](248)), L1VALtmp(arg[2](249)))))); })), L1CMDapp(tmp(247); L1VALtcst(stream_vt_append(61)(108)); L1VALtmp(tmp(205)), L1VALtmp(tmp(226))))), L1CMDmov(tmp(189); L1VALeval3(L1VALtmp(tmp(247))))))))); }), L1CMDlam(tmp(267); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(188); L1VALtmp(tmp(266)); L1VALtmp(tmp(267)))); })
function
auxmain_5806_(a3x1, a3x2, a3x3)
{
let xtmp188;
let xtmp266;
let xtmp267;
xtmp266 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp189;
let xtmp190;
let xtmp198;
let xtmp199;
let xtmp200;
let xtmp201;
let xtmp202;
let xtmp203;
let xtmp204;
let xtmp205;
let xtmp225;
let xtmp226;
let xtmp246;
let xtmp247;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2520(line=183, offs=1) -- 2575(line=184, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(52); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(53))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp190 = gint_eq_sint_sint_2293_(a3x2, a3x3);
}
;
if
(xtmp190)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 472(line=40, offs=1) -- 549(line=43, offs=37)
// L1DCLimpdecl(LIMPDECL@{hdc=strmcon_vt_sing(54); hag=HFARGnpats(-1; H0Pvar(x0(103))); def=Some(L1VALtmp(tmp(192))); lev=(5); lts=(arg[1](191), tmp(192), tmp(193)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_nil(55); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(194))); lev=(6); lts=(tmp(194), tmp(196), tmp(197)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDlam(tmp(196); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(195))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(195); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))); }), L1CMDlam(tmp(197); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(194); L1VALtmp(tmp(196)); L1VALtmp(tmp(197)))); })), L1CMDapp(tmp(193); L1VALtcst(stream_vt_nil(55)(97)); ))), L1CMDapp(tmp(192); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(arg[1](191)), L1VALtmp(tmp(193)))))); })
function
strmcon_vt_sing_1591_(a5x1)
{
let xtmp192;
let xtmp193;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 198(line=18, offs=1) -- 259(line=21, offs=25)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_nil(55); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(194))); lev=(6); lts=(tmp(194), tmp(196), tmp(197)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDlam(tmp(196); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(195))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(195); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))); }), L1CMDlam(tmp(197); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(194); L1VALtmp(tmp(196)); L1VALtmp(tmp(197)))); })
function
stream_vt_nil_1417_()
{
let xtmp194;
let xtmp196;
let xtmp197;
xtmp196 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp195;
// XEMIT01_FTMPDECS: END
{
xtmp195 = [0];
}
;
return xtmp195;
} // lam-function
;
xtmp197 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp195;
// XEMIT01_FTMPDECS: END
} // lam-function
;
xtmp194 = XATS2JS_new_llazy(xtmp196,xtmp197);
return xtmp194;
} // function // stream_vt_nil(55)
;
xtmp193 = stream_vt_nil_1417_();
}
;
xtmp192 = [1, a5x1, xtmp193];
}
;
return xtmp192;
} // function // strmcon_vt_sing(54)
;
{
{
xtmp199 = [0];
}
;
xtmp198 = [-1, a3x1, xtmp199];;
}
;
xtmp189 = strmcon_vt_sing_1591_(xtmp198);
}
;
} // if-then
else
{
{
xtmp200 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp200 = 1;
} while(false);
if(xtmp200 > 0) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp200 = 2;
} while(false);
if(xtmp200 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp200) {
case 1:
{
xtmp189 = [0];
}
;
break;
case 2:
xtmp201 = a3x1[1];
xtmp202 = a3x1[2];
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 6015(line=424, offs=1) -- 6042(line=425, offs=14)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(m1(106)), def=Some(L1VALtmp(tmp(203))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(203); L1VALtcst(gint_sub_sint_sint(56)(98)); L1VALtmp(arg[2](186)), L1VALint(INT1(1))))), L1CMDpatck(L1PCKany()))}, LVALDECL@{, pat=H0Pvar(n1(107)), def=Some(L1VALtmp(tmp(204))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(204); L1VALtcst(gint_sub_sint_sint(56)(99)); L1VALtmp(arg[3](187)), L1VALint(INT1(1))))), L1CMDpatck(L1PCKany()))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp203 = gint_sub_sint_sint_3524_(a3x2, 1);
}
;
;
} // val(H0Pvar(m1(106)))
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(56); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(57))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp204 = gint_sub_sint_sint_3524_(a3x3, 1);
}
;
;
} // val(H0Pvar(n1(107)))
;
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 6046(line=427, offs=1) -- 6168(line=437, offs=15)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(rs1(108)), def=Some(L1VALtmp(tmp(205))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(224))); lev=(5); lts=(arg[1](206), tmp(224)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(208))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(222); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(209))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(210); L1VALtmp(arg[1](207))), L1CMDcase(1; L1VALtmp(tmp(210)); tmp(211); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(210)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(210)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(209); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(212); L1VALtmp(tmp(210)); 0), L1CMDcarg(tmp(213); L1VALtmp(tmp(210)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(214))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(109))); def=Some(L1VALtmp(tmp(216))); lev=(8); lts=(arg[1](215), tmp(216), tmp(217)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(217); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](215)); 0)))), L1CMDtup(tmp(216); 0; L1VALtmp(tmp(217)), L1VALtarg(L1VALtmp(arg[1](215)); 1))))); })), L1CMDapp(tmp(214); L1VALtcst(map0$fopr(58)(101)); L1VALtmp(tmp(212))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(219); L1VALfcst(auxmain(60)); L1VALtmp(tmp(213))))), L1CMDapp(tmp(218); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(214)), L1VALtmp(tmp(219))))), L1CMDmov(tmp(209); L1VALtmp(tmp(218)))))); }), L1CMDlam(tmp(223); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(103))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](221)))); lev=(9); lts=(arg[1](221)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(220); L1VALtcst(g_free(43)(102)); L1VALtmp(arg[1](207)))))); }), L1CMDllazy(tmp(208); L1VALtmp(tmp(222)); L1VALtmp(tmp(223)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(224); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](206)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(225); L1VALfcst(auxmain(51)); L1VALtmp(tmp(202)), L1VALtmp(tmp(203)), L1VALtmp(tmp(204))))), L1CMDapp(tmp(205); L1VALtcst(stream_vt_map0(59)(100)); L1VALtmp(tmp(225))))), L1CMDpatck(L1PCKany()))})
{
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 6103(line=434, offs=1) -- 6166(line=436, offs=30)
// L1DCLnone0()
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7601(line=618, offs=1) -- 7925(line=650, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(224))); lev=(5); lts=(arg[1](206), tmp(224)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(208))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(222); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(209))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(210); L1VALtmp(arg[1](207))), L1CMDcase(1; L1VALtmp(tmp(210)); tmp(211); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(210)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(210)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(209); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(212); L1VALtmp(tmp(210)); 0), L1CMDcarg(tmp(213); L1VALtmp(tmp(210)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(214))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(109))); def=Some(L1VALtmp(tmp(216))); lev=(8); lts=(arg[1](215), tmp(216), tmp(217)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(217); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](215)); 0)))), L1CMDtup(tmp(216); 0; L1VALtmp(tmp(217)), L1VALtarg(L1VALtmp(arg[1](215)); 1))))); })), L1CMDapp(tmp(214); L1VALtcst(map0$fopr(58)(101)); L1VALtmp(tmp(212))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(219); L1VALfcst(auxmain(60)); L1VALtmp(tmp(213))))), L1CMDapp(tmp(218); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(214)), L1VALtmp(tmp(219))))), L1CMDmov(tmp(209); L1VALtmp(tmp(218)))))); }), L1CMDlam(tmp(223); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(103))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](221)))); lev=(9); lts=(arg[1](221)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(220); L1VALtcst(g_free(43)(102)); L1VALtmp(arg[1](207)))))); }), L1CMDllazy(tmp(208); L1VALtmp(tmp(222)); L1VALtmp(tmp(223)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(224); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](206)))))); })
function
stream_vt_map0_3467_(a5x1)
{
let xtmp224;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7668(line=626, offs=1) -- 7923(line=649, offs=12)
// L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(208))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(222); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(209))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(210); L1VALtmp(arg[1](207))), L1CMDcase(1; L1VALtmp(tmp(210)); tmp(211); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(210)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(210)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(209); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(212); L1VALtmp(tmp(210)); 0), L1CMDcarg(tmp(213); L1VALtmp(tmp(210)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(214))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(109))); def=Some(L1VALtmp(tmp(216))); lev=(8); lts=(arg[1](215), tmp(216), tmp(217)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(217); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](215)); 0)))), L1CMDtup(tmp(216); 0; L1VALtmp(tmp(217)), L1VALtarg(L1VALtmp(arg[1](215)); 1))))); })), L1CMDapp(tmp(214); L1VALtcst(map0$fopr(58)(101)); L1VALtmp(tmp(212))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(219); L1VALfcst(auxmain(60)); L1VALtmp(tmp(213))))), L1CMDapp(tmp(218); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(214)), L1VALtmp(tmp(219))))), L1CMDmov(tmp(209); L1VALtmp(tmp(218)))))); }), L1CMDlam(tmp(223); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(103))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](221)))); lev=(9); lts=(arg[1](221)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(220); L1VALtcst(g_free(43)(102)); L1VALtmp(arg[1](207)))))); }), L1CMDllazy(tmp(208); L1VALtmp(tmp(222)); L1VALtmp(tmp(223)))); })
function
auxmain_7671_(a6x1)
{
let xtmp208;
let xtmp222;
let xtmp223;
xtmp222 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp209;
let xtmp210;
let xtmp211;
let xtmp212;
let xtmp213;
let xtmp214;
let xtmp218;
let xtmp219;
let xtmp220;
// XEMIT01_FTMPDECS: END
xtmp210 = XATS2JS_llazy_eval(a6x1);
{
xtmp211 = 0;
do {
do {
if(0!==xtmp210[0]) break;
xtmp211 = 1;
} while(false);
if(xtmp211 > 0) break;
do {
if(1!==xtmp210[0]) break;
//L1PCKany();
//L1PCKany();
xtmp211 = 2;
} while(false);
if(xtmp211 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp211) {
case 1:
{
xtmp209 = [0];
}
;
break;
case 2:
xtmp212 = xtmp210[1];
xtmp213 = xtmp210[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7847(line=644, offs=3) -- 7879(line=645, offs=24)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(214))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(109))); def=Some(L1VALtmp(tmp(216))); lev=(8); lts=(arg[1](215), tmp(216), tmp(217)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(217); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](215)); 0)))), L1CMDtup(tmp(216); 0; L1VALtmp(tmp(217)), L1VALtarg(L1VALtmp(arg[1](215)); 1))))); })), L1CMDapp(tmp(214); L1VALtcst(map0$fopr(58)(101)); L1VALtmp(tmp(212))))), L1CMDpatck(L1PCKany()))})
{
{
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 6103(line=434, offs=1) -- 6166(line=436, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(109))); def=Some(L1VALtmp(tmp(216))); lev=(8); lts=(arg[1](215), tmp(216), tmp(217)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(217); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](215)); 0)))), L1CMDtup(tmp(216); 0; L1VALtmp(tmp(217)), L1VALtarg(L1VALtmp(arg[1](215)); 1))))); })
function
map0$fopr_2343_(a8x1)
{
let xtmp216;
let xtmp217;
{
{
xtmp217 = [1, xtmp201, a8x1[1]];
}
;
xtmp216 = [-1, xtmp217, a8x1[2]];;
}
;
return xtmp216;
} // function // map0$fopr(58)
;
xtmp214 = map0$fopr_2343_(xtmp212);
}
;
;
} // val(H0Pvar(y0(115)))
;
{
{
xtmp219 = auxmain_7671_(xtmp213);
}
;
xtmp218 = [1, xtmp214, xtmp219];
}
;
xtmp209 = xtmp218;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp209;
} // lam-function
;
xtmp223 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp209;
let xtmp210;
let xtmp211;
let xtmp212;
let xtmp213;
let xtmp214;
let xtmp218;
let xtmp219;
let xtmp220;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(103))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](221)))); lev=(9); lts=(arg[1](221)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](221)))); lev=(9); lts=(arg[1](221)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a9x1)
{
return XATS2JS_llazy_free(a9x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp220 = g_free_1550_(a6x1);
}
;
} // lam-function
;
xtmp208 = XATS2JS_new_llazy(xtmp222,xtmp223);
return xtmp208;
} // function // auxmain(60)
;
{
xtmp224 = auxmain_7671_(a5x1);
}
;
return xtmp224;
} // function // stream_vt_map0(59)
;
{
xtmp225 = auxmain_5806_(xtmp202, xtmp203, xtmp204);
}
;
xtmp205 = stream_vt_map0_3467_(xtmp225);
}
;
;
} // val(H0Pvar(rs1(108)))
;
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 6169(line=438, offs=1) -- 6291(line=448, offs=15)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(rs2(116)), def=Some(L1VALtmp(tmp(226))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(245))); lev=(5); lts=(arg[1](227), tmp(245)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(229))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(243); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(230))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(231); L1VALtmp(arg[1](228))), L1CMDcase(1; L1VALtmp(tmp(231)); tmp(232); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(231)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(231)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(230); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(233); L1VALtmp(tmp(231)); 0), L1CMDcarg(tmp(234); L1VALtmp(tmp(231)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(235))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(117))); def=Some(L1VALtmp(tmp(237))); lev=(8); lts=(arg[1](236), tmp(237), tmp(238)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(238); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](236)); 1)))), L1CMDtup(tmp(237); 0; L1VALtarg(L1VALtmp(arg[1](236)); 0), L1VALtmp(tmp(238)))))); })), L1CMDapp(tmp(235); L1VALtcst(map0$fopr(58)(105)); L1VALtmp(tmp(233))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(240); L1VALfcst(auxmain(60)); L1VALtmp(tmp(234))))), L1CMDapp(tmp(239); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(235)), L1VALtmp(tmp(240))))), L1CMDmov(tmp(230); L1VALtmp(tmp(239)))))); }), L1CMDlam(tmp(244); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(107))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](242)))); lev=(9); lts=(arg[1](242)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(241); L1VALtcst(g_free(43)(106)); L1VALtmp(arg[1](228)))))); }), L1CMDllazy(tmp(229); L1VALtmp(tmp(243)); L1VALtmp(tmp(244)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(245); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](227)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(246); L1VALfcst(auxmain(51)); L1VALtmp(tmp(202)), L1VALtmp(tmp(203)), L1VALtmp(arg[3](187))))), L1CMDapp(tmp(226); L1VALtcst(stream_vt_map0(59)(104)); L1VALtmp(tmp(246))))), L1CMDpatck(L1PCKany()))})
{
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 6226(line=445, offs=1) -- 6289(line=447, offs=30)
// L1DCLnone0()
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7601(line=618, offs=1) -- 7925(line=650, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_map0(59); hag=HFARGnpats(-1; H0Pvar(xs(110))); def=Some(L1VALtmp(tmp(245))); lev=(5); lts=(arg[1](227), tmp(245)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(229))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(243); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(230))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(231); L1VALtmp(arg[1](228))), L1CMDcase(1; L1VALtmp(tmp(231)); tmp(232); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(231)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(231)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(230); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(233); L1VALtmp(tmp(231)); 0), L1CMDcarg(tmp(234); L1VALtmp(tmp(231)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(235))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(117))); def=Some(L1VALtmp(tmp(237))); lev=(8); lts=(arg[1](236), tmp(237), tmp(238)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(238); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](236)); 1)))), L1CMDtup(tmp(237); 0; L1VALtarg(L1VALtmp(arg[1](236)); 0), L1VALtmp(tmp(238)))))); })), L1CMDapp(tmp(235); L1VALtcst(map0$fopr(58)(105)); L1VALtmp(tmp(233))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(240); L1VALfcst(auxmain(60)); L1VALtmp(tmp(234))))), L1CMDapp(tmp(239); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(235)), L1VALtmp(tmp(240))))), L1CMDmov(tmp(230); L1VALtmp(tmp(239)))))); }), L1CMDlam(tmp(244); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(107))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](242)))); lev=(9); lts=(arg[1](242)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(241); L1VALtcst(g_free(43)(106)); L1VALtmp(arg[1](228)))))); }), L1CMDllazy(tmp(229); L1VALtmp(tmp(243)); L1VALtmp(tmp(244)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(245); L1VALfcst(auxmain(60)); L1VALtmp(arg[1](227)))))); })
function
stream_vt_map0_3467_(a5x1)
{
let xtmp245;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7668(line=626, offs=1) -- 7923(line=649, offs=12)
// L1DCLfundecl(LFUNDECL@{nam=auxmain(111); hdc=auxmain(60); hag=HFARGnpats(-1; H0Pvar(xs(112))); def=Some(L1VALtmp(tmp(229))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(243); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(230))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(231); L1VALtmp(arg[1](228))), L1CMDcase(1; L1VALtmp(tmp(231)); tmp(232); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(231)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(231)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(230); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(233); L1VALtmp(tmp(231)); 0), L1CMDcarg(tmp(234); L1VALtmp(tmp(231)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(235))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(117))); def=Some(L1VALtmp(tmp(237))); lev=(8); lts=(arg[1](236), tmp(237), tmp(238)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(238); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](236)); 1)))), L1CMDtup(tmp(237); 0; L1VALtarg(L1VALtmp(arg[1](236)); 0), L1VALtmp(tmp(238)))))); })), L1CMDapp(tmp(235); L1VALtcst(map0$fopr(58)(105)); L1VALtmp(tmp(233))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(240); L1VALfcst(auxmain(60)); L1VALtmp(tmp(234))))), L1CMDapp(tmp(239); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(235)), L1VALtmp(tmp(240))))), L1CMDmov(tmp(230); L1VALtmp(tmp(239)))))); }), L1CMDlam(tmp(244); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(107))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](242)))); lev=(9); lts=(arg[1](242)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(241); L1VALtcst(g_free(43)(106)); L1VALtmp(arg[1](228)))))); }), L1CMDllazy(tmp(229); L1VALtmp(tmp(243)); L1VALtmp(tmp(244)))); })
function
auxmain_7671_(a6x1)
{
let xtmp229;
let xtmp243;
let xtmp244;
xtmp243 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp230;
let xtmp231;
let xtmp232;
let xtmp233;
let xtmp234;
let xtmp235;
let xtmp239;
let xtmp240;
let xtmp241;
// XEMIT01_FTMPDECS: END
xtmp231 = XATS2JS_llazy_eval(a6x1);
{
xtmp232 = 0;
do {
do {
if(0!==xtmp231[0]) break;
xtmp232 = 1;
} while(false);
if(xtmp232 > 0) break;
do {
if(1!==xtmp231[0]) break;
//L1PCKany();
//L1PCKany();
xtmp232 = 2;
} while(false);
if(xtmp232 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp232) {
case 1:
{
xtmp230 = [0];
}
;
break;
case 2:
xtmp233 = xtmp231[1];
xtmp234 = xtmp231[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7847(line=644, offs=3) -- 7879(line=645, offs=24)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(y0(115)), def=Some(L1VALtmp(tmp(235))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(117))); def=Some(L1VALtmp(tmp(237))); lev=(8); lts=(arg[1](236), tmp(237), tmp(238)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(238); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](236)); 1)))), L1CMDtup(tmp(237); 0; L1VALtarg(L1VALtmp(arg[1](236)); 0), L1VALtmp(tmp(238)))))); })), L1CMDapp(tmp(235); L1VALtcst(map0$fopr(58)(105)); L1VALtmp(tmp(233))))), L1CMDpatck(L1PCKany()))})
{
{
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 6226(line=445, offs=1) -- 6289(line=447, offs=30)
// L1DCLimpdecl(LIMPDECL@{hdc=map0$fopr(58); hag=HFARGnpats(-1; H0Pvar(rr(117))); def=Some(L1VALtmp(tmp(237))); lev=(8); lts=(arg[1](236), tmp(237), tmp(238)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(238); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(201)), L1VALtarg(L1VALtmp(arg[1](236)); 1)))), L1CMDtup(tmp(237); 0; L1VALtarg(L1VALtmp(arg[1](236)); 0), L1VALtmp(tmp(238)))))); })
function
map0$fopr_2343_(a8x1)
{
let xtmp237;
let xtmp238;
{
{
xtmp238 = [1, xtmp201, a8x1[2]];
}
;
xtmp237 = [-1, a8x1[1], xtmp238];;
}
;
return xtmp237;
} // function // map0$fopr(58)
;
xtmp235 = map0$fopr_2343_(xtmp233);
}
;
;
} // val(H0Pvar(y0(115)))
;
{
{
xtmp240 = auxmain_7671_(xtmp234);
}
;
xtmp239 = [1, xtmp235, xtmp240];
}
;
xtmp230 = xtmp239;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp230;
} // lam-function
;
xtmp244 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp230;
let xtmp231;
let xtmp232;
let xtmp233;
let xtmp234;
let xtmp235;
let xtmp239;
let xtmp240;
let xtmp241;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(107))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](242)))); lev=(9); lts=(arg[1](242)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](242)))); lev=(9); lts=(arg[1](242)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a9x1)
{
return XATS2JS_llazy_free(a9x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp241 = g_free_1550_(a6x1);
}
;
} // lam-function
;
xtmp229 = XATS2JS_new_llazy(xtmp243,xtmp244);
return xtmp229;
} // function // auxmain(60)
;
{
xtmp245 = auxmain_7671_(a5x1);
}
;
return xtmp245;
} // function // stream_vt_map0(59)
;
{
xtmp246 = auxmain_5806_(xtmp202, xtmp203, a3x3);
}
;
xtmp226 = stream_vt_map0_3467_(xtmp246);
}
;
;
} // val(H0Pvar(rs2(116)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 4701(line=382, offs=1) -- 4944(line=403, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_append(61); hag=HFARGnpats(-1; H0Pvar(xs(118)), H0Pvar(ys(119))); def=Some(L1VALtmp(tmp(265))); lev=(5); lts=(arg[1](248), arg[2](249), tmp(265)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=append(120); hdc=append(62); hag=HFARGnpats(-1; H0Pvar(xs(121)), H0Pvar(ys(122))); def=Some(L1VALtmp(tmp(252))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(263); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(253))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(254); L1VALtmp(arg[1](250))), L1CMDcase(1; L1VALtmp(tmp(254)); tmp(255); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(254)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(254)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(253); L1VALeval3(L1VALtmp(arg[2](251))))), L1BLKsome(L1CMDcarg(tmp(256); L1VALtmp(tmp(254)); 0), L1CMDcarg(tmp(257); L1VALtmp(tmp(254)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(258); L1VALfcst(append(62)); L1VALtmp(tmp(257)), L1VALtmp(arg[2](251))))), L1CMDapp(tmp(253); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(256)), L1VALtmp(tmp(258)))))))); }), L1CMDlam(tmp(264); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(110))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](260)))); lev=(9); lts=(arg[1](260)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(259); L1VALtcst(g_free(43)(109)); L1VALtmp(arg[1](250))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(112))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](262)))); lev=(9); lts=(arg[1](262)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(261); L1VALtcst(g_free(43)(111)); L1VALtmp(arg[2](251)))))); }), L1CMDllazy(tmp(252); L1VALtmp(tmp(263)); L1VALtmp(tmp(264)))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(265); L1VALfcst(append(62)); L1VALtmp(arg[1](248)), L1VALtmp(arg[2](249)))))); })
function
stream_vt_append_2799_(a5x1, a5x2)
{
let xtmp265;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 4779(line=390, offs=1) -- 4942(line=402, offs=12)
// L1DCLfundecl(LFUNDECL@{nam=append(120); hdc=append(62); hag=HFARGnpats(-1; H0Pvar(xs(121)), H0Pvar(ys(122))); def=Some(L1VALtmp(tmp(252))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(263); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(253))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(254); L1VALtmp(arg[1](250))), L1CMDcase(1; L1VALtmp(tmp(254)); tmp(255); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(254)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(254)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(253); L1VALeval3(L1VALtmp(arg[2](251))))), L1BLKsome(L1CMDcarg(tmp(256); L1VALtmp(tmp(254)); 0), L1CMDcarg(tmp(257); L1VALtmp(tmp(254)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(258); L1VALfcst(append(62)); L1VALtmp(tmp(257)), L1VALtmp(arg[2](251))))), L1CMDapp(tmp(253); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(256)), L1VALtmp(tmp(258)))))))); }), L1CMDlam(tmp(264); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(110))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](260)))); lev=(9); lts=(arg[1](260)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(259); L1VALtcst(g_free(43)(109)); L1VALtmp(arg[1](250))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(112))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](262)))); lev=(9); lts=(arg[1](262)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(261); L1VALtcst(g_free(43)(111)); L1VALtmp(arg[2](251)))))); }), L1CMDllazy(tmp(252); L1VALtmp(tmp(263)); L1VALtmp(tmp(264)))); })
function
append_4782_(a6x1, a6x2)
{
let xtmp252;
let xtmp263;
let xtmp264;
xtmp263 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp253;
let xtmp254;
let xtmp255;
let xtmp256;
let xtmp257;
let xtmp258;
let xtmp259;
let xtmp261;
// XEMIT01_FTMPDECS: END
xtmp254 = XATS2JS_llazy_eval(a6x1);
{
xtmp255 = 0;
do {
do {
if(0!==xtmp254[0]) break;
xtmp255 = 1;
} while(false);
if(xtmp255 > 0) break;
do {
if(1!==xtmp254[0]) break;
//L1PCKany();
//L1PCKany();
xtmp255 = 2;
} while(false);
if(xtmp255 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp255) {
case 1:
xtmp253 = XATS2JS_llazy_eval(a6x2);
break;
case 2:
xtmp256 = xtmp254[1];
xtmp257 = xtmp254[2];
{
{
xtmp258 = append_4782_(xtmp257, a6x2);
}
;
xtmp253 = [1, xtmp256, xtmp258];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp253;
} // lam-function
;
xtmp264 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp253;
let xtmp254;
let xtmp255;
let xtmp256;
let xtmp257;
let xtmp258;
let xtmp259;
let xtmp261;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(110))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](260)))); lev=(9); lts=(arg[1](260)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](260)))); lev=(9); lts=(arg[1](260)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a9x1)
{
return XATS2JS_llazy_free(a9x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp259 = g_free_1550_(a6x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(112))); lev=(8); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](262)))); lev=(9); lts=(arg[1](262)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](262)))); lev=(9); lts=(arg[1](262)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a9x1)
{
return XATS2JS_llazy_free(a9x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp261 = g_free_1550_(a6x2);
}
;
} // lam-function
;
xtmp252 = XATS2JS_new_llazy(xtmp263,xtmp264);
return xtmp252;
} // function // append(62)
;
{
xtmp265 = append_4782_(a5x1, a5x2);
}
;
return xtmp265;
} // function // stream_vt_append(61)
;
xtmp247 = stream_vt_append_2799_(xtmp205, xtmp226);
}
;
xtmp189 = XATS2JS_llazy_eval(xtmp247);
break;
default: XATS2JS_matcherr0();
} // case-switch
;
} // if-else
;
return xtmp189;
} // lam-function
;
xtmp267 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp189;
let xtmp190;
let xtmp198;
let xtmp199;
let xtmp200;
let xtmp201;
let xtmp202;
let xtmp203;
let xtmp204;
let xtmp205;
let xtmp225;
let xtmp226;
let xtmp246;
let xtmp247;
// XEMIT01_FTMPDECS: END
} // lam-function
;
xtmp188 = XATS2JS_new_llazy(xtmp266,xtmp267);
return xtmp188;
} // function // auxmain(51)
;
// /home/hwxi/Research/ATS-Xanadu/xatslib/githwxi/DATS/mygist.dats: 5663(line=382, offs=1) -- 5687(line=384, offs=16)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(m0(125)), def=Some(L1VALtmp(tmp(268))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=list_length(63); hag=HFARGnpats(-1; H0Pvar(xs(126))); def=Some(L1VALtmp(tmp(276))); lev=(3); lts=(arg[1](269), tmp(276)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(127); hdc=loop(64); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(128)), H0Pvar(j0(129))); def=Some(L1VALtmp(tmp(272))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](270)); tmp(273); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](270)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](270)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(272); L1VALtmp(arg[2](271)))), L1BLKsome(L1CMDcarg(tmp(274); L1VALtmp(arg[1](270)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(65); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(66))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(275); L1VALtcst(gint_add_sint_sint(65)(114)); L1VALtmp(arg[2](271)), L1VALint(INT1(1))))), L1CMDapp(tmp(272); L1VALfcst(loop(64)); L1VALtmp(tmp(274)), L1VALtmp(tmp(275)))))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(276); L1VALfcst(loop(64)); L1VALtmp(arg[1](269)), L1VALint(INT1(0)))))); })), L1CMDapp(tmp(268); L1VALtcst(list_length(63)(113)); L1VALtmp(arg[1](183))))), L1CMDpatck(L1PCKany()))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1262(line=119, offs=1) -- 1463(line=137, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=list_length(63); hag=HFARGnpats(-1; H0Pvar(xs(126))); def=Some(L1VALtmp(tmp(276))); lev=(3); lts=(arg[1](269), tmp(276)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(127); hdc=loop(64); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(128)), H0Pvar(j0(129))); def=Some(L1VALtmp(tmp(272))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](270)); tmp(273); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](270)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](270)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(272); L1VALtmp(arg[2](271)))), L1BLKsome(L1CMDcarg(tmp(274); L1VALtmp(arg[1](270)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(65); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(66))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(275); L1VALtcst(gint_add_sint_sint(65)(114)); L1VALtmp(arg[2](271)), L1VALint(INT1(1))))), L1CMDapp(tmp(272); L1VALfcst(loop(64)); L1VALtmp(tmp(274)), L1VALtmp(tmp(275)))))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(276); L1VALfcst(loop(64)); L1VALtmp(arg[1](269)), L1VALint(INT1(0)))))); })
function
list_length_2365_(a3x1)
{
let xtmp276;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1328(line=127, offs=1) -- 1461(line=136, offs=5)
// L1DCLfundecl(LFUNDECL@{nam=loop(127); hdc=loop(64); hag=HFARGnone1(...), HFARGnpats(-1; H0Pvar(xs(128)), H0Pvar(j0(129))); def=Some(L1VALtmp(tmp(272))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](270)); tmp(273); L1PCKapp(L1PCKcon(LDCONcon(list_nil(5)); L1VALctag(L1VALtmp(arg[1](270)))); ), L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](270)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(272); L1VALtmp(arg[2](271)))), L1BLKsome(L1CMDcarg(tmp(274); L1VALtmp(arg[1](270)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(65); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(66))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(275); L1VALtcst(gint_add_sint_sint(65)(114)); L1VALtmp(arg[2](271)), L1VALint(INT1(1))))), L1CMDapp(tmp(272); L1VALfcst(loop(64)); L1VALtmp(tmp(274)), L1VALtmp(tmp(275)))))))); })
function
loop_1331_(a4x1, a4x2)
{
let xtmp272;
let xtmp273;
let xtmp274;
let xtmp275;
{
xtmp273 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp273 = 1;
} while(false);
if(xtmp273 > 0) break;
do {
if(1!==a4x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp273 = 2;
} while(false);
if(xtmp273 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp273) {
case 1:
xtmp272 = a4x2;
break;
case 2:
xtmp274 = a4x1[2];
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3389(line=243, offs=1) -- 3446(line=244, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(65); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(66))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp275 = gint_add_sint_sint_3439_(a4x2, 1);
}
;
xtmp272 = loop_1331_(xtmp274, xtmp275);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp272;
} // function // loop(64)
;
{
xtmp276 = loop_1331_(a3x1, 0);
}
;
return xtmp276;
} // function // list_length(63)
;
xtmp268 = list_length_2365_(a2x1);
}
;
;
} // val(H0Pvar(m0(125)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2202(line=161, offs=1) -- 2257(line=162, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_lt_sint_sint(31); hag=; def=Some(L1VALfcst(XATS2JS_gint_lt_sint_sint(32))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp278 = gint_lt_sint_sint_2125_(xtmp268, a2x2);
}
;
if
(xtmp278)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 198(line=18, offs=1) -- 259(line=21, offs=25)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_nil(55); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(279))); lev=(3); lts=(tmp(279), tmp(281), tmp(282)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDlam(tmp(281); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(280))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(280); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))); }), L1CMDlam(tmp(282); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(); }), L1CMDllazy(tmp(279); L1VALtmp(tmp(281)); L1VALtmp(tmp(282)))); })
function
stream_vt_nil_1417_()
{
let xtmp279;
let xtmp281;
let xtmp282;
xtmp281 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp280;
// XEMIT01_FTMPDECS: END
{
xtmp280 = [0];
}
;
return xtmp280;
} // lam-function
;
xtmp282 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp280;
// XEMIT01_FTMPDECS: END
} // lam-function
;
xtmp279 = XATS2JS_new_llazy(xtmp281,xtmp282);
return xtmp279;
} // function // stream_vt_nil(55)
;
xtmp277 = stream_vt_nil_1417_();
}
;
} // if-then
else
{
{
xtmp277 = auxmain_5806_(a2x1, xtmp268, a2x2);
}
;
} // if-else
;
return xtmp277;
} // function // list_nchoose2(50)
;
xtmp182 = list_nchoose2_4834_(a1x1, 2);
}
;
xtmp114 = stream_vt_maplist0_3913_(xtmp182);
}
;
return xtmp114;
} // function // node_childlst(37)


// ./Game-of-24.dats: 3487(line=258, offs=1) -- 3594(line=265, offs=15)
// L1DCLfundecl(LFUNDECL@{nam=nodes_childlst(131); hdc=nodes_childlst(67); hag=HFARGnpats(-1; H0Pvar(xss(132))); def=Some(L1VALtmp(tmp(284))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_mapstrm0(69); hag=HFARGnpats(-1; H0Pvar(xs(133))); def=Some(L1VALtmp(tmp(320))); lev=(2); lts=(arg[1](285), tmp(320)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain0(134); hdc=auxmain0(70); hag=HFARGnpats(-1; H0Pvar(xs(135))); def=Some(L1VALtmp(tmp(287))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(291); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(288))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(288); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(arg[1](286))))))); }), L1CMDlam(tmp(292); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(119))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](290)))); lev=(6); lts=(arg[1](290)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(289); L1VALtcst(g_free(43)(118)); L1VALtmp(arg[1](286)))))); }), L1CMDllazy(tmp(287); L1VALtmp(tmp(291)); L1VALtmp(tmp(292)))); }, LFUNDECL@{nam=auxmain1(137); hdc=auxmain1(71); hag=HFARGnpats(-1; H0Pvar(xs(138)), H0Pvar(ys(139))); def=Some(L1VALtmp(tmp(295))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(306); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(296))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(297); L1VALtmp(arg[2](294))), L1CMDcase(1; L1VALtmp(tmp(297)); tmp(298); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(297)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(297)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(296); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(arg[1](293))))))), L1BLKsome(L1CMDcarg(tmp(299); L1VALtmp(tmp(297)); 0), L1CMDcarg(tmp(300); L1VALtmp(tmp(297)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(301); L1VALfcst(auxmain1(71)); L1VALtmp(arg[1](293)), L1VALtmp(tmp(300))))), L1CMDapp(tmp(296); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(299)), L1VALtmp(tmp(301)))))))); }), L1CMDlam(tmp(307); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(121))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](303)))); lev=(6); lts=(arg[1](303)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(302); L1VALtcst(g_free(43)(120)); L1VALtmp(arg[1](293))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(123))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](305)))); lev=(6); lts=(arg[1](305)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(304); L1VALtcst(g_free(43)(122)); L1VALtmp(arg[2](294)))))); }), L1CMDllazy(tmp(295); L1VALtmp(tmp(306)); L1VALtmp(tmp(307)))); }, LFUNDECL@{nam=auxloop2(136); hdc=auxloop2(72); hag=HFARGnpats(-1; H0Pvar(xs(142))); def=Some(L1VALtmp(tmp(309))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](308)); tmp(310); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](308)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](308)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(309); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(311); L1VALtmp(arg[1](308)); 0), L1CMDcarg(tmp(312); L1VALtmp(arg[1](308)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(ys(145)), def=Some(L1VALtmp(tmp(313))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=mapstrm0$fopr(68); hag=; def=Some(L1VALfcst(node_childlst(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(313); L1VALtcst(mapstrm0$fopr(68)(124)); L1VALtmp(tmp(311))))), L1CMDpatck(L1PCKany()))})), L1CMDeval3(tmp(315); L1VALtmp(tmp(313))), L1CMDcase(1; L1VALtmp(tmp(315)); tmp(316); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(315)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(315)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(314); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(tmp(312))))))), L1BLKsome(L1CMDcarg(tmp(317); L1VALtmp(tmp(315)); 0), L1CMDcarg(tmp(318); L1VALtmp(tmp(315)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(319); L1VALfcst(auxmain1(71)); L1VALtmp(tmp(312)), L1VALtmp(tmp(318))))), L1CMDapp(tmp(314); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(317)), L1VALtmp(tmp(319))))))), L1CMDmov(tmp(309); L1VALtmp(tmp(314)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(320); L1VALfcst(auxmain0(70)); L1VALtmp(arg[1](285)))))); })), L1CMDapp(tmp(284); L1VALtcst(stream_vt_mapstrm0(69)(117)); L1VALtmp(arg[1](283)))))); })
function
nodes_childlst_3490_(a1x1)
{
let xtmp284;
// ./Game-of-24.dats: 3549(line=264, offs=1) -- 3592(line=264, offs=44)
// L1DCLnone0()
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 10693(line=883, offs=1) -- 11481(line=949, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_mapstrm0(69); hag=HFARGnpats(-1; H0Pvar(xs(133))); def=Some(L1VALtmp(tmp(320))); lev=(2); lts=(arg[1](285), tmp(320)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain0(134); hdc=auxmain0(70); hag=HFARGnpats(-1; H0Pvar(xs(135))); def=Some(L1VALtmp(tmp(287))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(291); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(288))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(288); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(arg[1](286))))))); }), L1CMDlam(tmp(292); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(119))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](290)))); lev=(6); lts=(arg[1](290)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(289); L1VALtcst(g_free(43)(118)); L1VALtmp(arg[1](286)))))); }), L1CMDllazy(tmp(287); L1VALtmp(tmp(291)); L1VALtmp(tmp(292)))); }, LFUNDECL@{nam=auxmain1(137); hdc=auxmain1(71); hag=HFARGnpats(-1; H0Pvar(xs(138)), H0Pvar(ys(139))); def=Some(L1VALtmp(tmp(295))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(306); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(296))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(297); L1VALtmp(arg[2](294))), L1CMDcase(1; L1VALtmp(tmp(297)); tmp(298); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(297)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(297)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(296); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(arg[1](293))))))), L1BLKsome(L1CMDcarg(tmp(299); L1VALtmp(tmp(297)); 0), L1CMDcarg(tmp(300); L1VALtmp(tmp(297)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(301); L1VALfcst(auxmain1(71)); L1VALtmp(arg[1](293)), L1VALtmp(tmp(300))))), L1CMDapp(tmp(296); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(299)), L1VALtmp(tmp(301)))))))); }), L1CMDlam(tmp(307); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(121))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](303)))); lev=(6); lts=(arg[1](303)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(302); L1VALtcst(g_free(43)(120)); L1VALtmp(arg[1](293))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(123))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](305)))); lev=(6); lts=(arg[1](305)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(304); L1VALtcst(g_free(43)(122)); L1VALtmp(arg[2](294)))))); }), L1CMDllazy(tmp(295); L1VALtmp(tmp(306)); L1VALtmp(tmp(307)))); }, LFUNDECL@{nam=auxloop2(136); hdc=auxloop2(72); hag=HFARGnpats(-1; H0Pvar(xs(142))); def=Some(L1VALtmp(tmp(309))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](308)); tmp(310); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](308)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](308)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(309); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(311); L1VALtmp(arg[1](308)); 0), L1CMDcarg(tmp(312); L1VALtmp(arg[1](308)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(ys(145)), def=Some(L1VALtmp(tmp(313))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=mapstrm0$fopr(68); hag=; def=Some(L1VALfcst(node_childlst(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(313); L1VALtcst(mapstrm0$fopr(68)(124)); L1VALtmp(tmp(311))))), L1CMDpatck(L1PCKany()))})), L1CMDeval3(tmp(315); L1VALtmp(tmp(313))), L1CMDcase(1; L1VALtmp(tmp(315)); tmp(316); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(315)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(315)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(314); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(tmp(312))))))), L1BLKsome(L1CMDcarg(tmp(317); L1VALtmp(tmp(315)); 0), L1CMDcarg(tmp(318); L1VALtmp(tmp(315)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(319); L1VALfcst(auxmain1(71)); L1VALtmp(tmp(312)), L1VALtmp(tmp(318))))), L1CMDapp(tmp(314); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(317)), L1VALtmp(tmp(319))))))), L1CMDmov(tmp(309); L1VALtmp(tmp(314)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(320); L1VALfcst(auxmain0(70)); L1VALtmp(arg[1](285)))))); })
function
stream_vt_mapstrm0_3992_(a2x1)
{
let xtmp320;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 10765(line=891, offs=1) -- 11479(line=948, offs=9)
// L1DCLfundecl(LFUNDECL@{nam=auxmain0(134); hdc=auxmain0(70); hag=HFARGnpats(-1; H0Pvar(xs(135))); def=Some(L1VALtmp(tmp(287))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(291); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(288))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(288); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(arg[1](286))))))); }), L1CMDlam(tmp(292); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(119))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](290)))); lev=(6); lts=(arg[1](290)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(289); L1VALtcst(g_free(43)(118)); L1VALtmp(arg[1](286)))))); }), L1CMDllazy(tmp(287); L1VALtmp(tmp(291)); L1VALtmp(tmp(292)))); }, LFUNDECL@{nam=auxmain1(137); hdc=auxmain1(71); hag=HFARGnpats(-1; H0Pvar(xs(138)), H0Pvar(ys(139))); def=Some(L1VALtmp(tmp(295))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(306); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(296))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDeval3(tmp(297); L1VALtmp(arg[2](294))), L1CMDcase(1; L1VALtmp(tmp(297)); tmp(298); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(297)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(297)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(296); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(arg[1](293))))))), L1BLKsome(L1CMDcarg(tmp(299); L1VALtmp(tmp(297)); 0), L1CMDcarg(tmp(300); L1VALtmp(tmp(297)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(301); L1VALfcst(auxmain1(71)); L1VALtmp(arg[1](293)), L1VALtmp(tmp(300))))), L1CMDapp(tmp(296); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(299)), L1VALtmp(tmp(301)))))))); }), L1CMDlam(tmp(307); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(121))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](303)))); lev=(6); lts=(arg[1](303)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(302); L1VALtcst(g_free(43)(120)); L1VALtmp(arg[1](293))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(123))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](305)))); lev=(6); lts=(arg[1](305)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(304); L1VALtcst(g_free(43)(122)); L1VALtmp(arg[2](294)))))); }), L1CMDllazy(tmp(295); L1VALtmp(tmp(306)); L1VALtmp(tmp(307)))); }, LFUNDECL@{nam=auxloop2(136); hdc=auxloop2(72); hag=HFARGnpats(-1; H0Pvar(xs(142))); def=Some(L1VALtmp(tmp(309))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](308)); tmp(310); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](308)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](308)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(309); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(311); L1VALtmp(arg[1](308)); 0), L1CMDcarg(tmp(312); L1VALtmp(arg[1](308)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(ys(145)), def=Some(L1VALtmp(tmp(313))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=mapstrm0$fopr(68); hag=; def=Some(L1VALfcst(node_childlst(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(313); L1VALtcst(mapstrm0$fopr(68)(124)); L1VALtmp(tmp(311))))), L1CMDpatck(L1PCKany()))})), L1CMDeval3(tmp(315); L1VALtmp(tmp(313))), L1CMDcase(1; L1VALtmp(tmp(315)); tmp(316); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(315)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(315)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(314); L1VALfcst(auxloop2(72)); L1VALeval3(L1VALtmp(tmp(312))))))), L1BLKsome(L1CMDcarg(tmp(317); L1VALtmp(tmp(315)); 0), L1CMDcarg(tmp(318); L1VALtmp(tmp(315)); 1), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(319); L1VALfcst(auxmain1(71)); L1VALtmp(tmp(312)), L1VALtmp(tmp(318))))), L1CMDapp(tmp(314); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(317)), L1VALtmp(tmp(319))))))), L1CMDmov(tmp(309); L1VALtmp(tmp(314)))))); })
function
auxmain0_10768_(a3x1)
{
let xtmp287;
let xtmp291;
let xtmp292;
xtmp291 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp288;
let xtmp289;
// XEMIT01_FTMPDECS: END
{
xtmp288 = auxloop2_11106_(XATS2JS_llazy_eval(a3x1));
}
;
return xtmp288;
} // lam-function
;
xtmp292 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp288;
let xtmp289;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(119))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](290)))); lev=(6); lts=(arg[1](290)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](290)))); lev=(6); lts=(arg[1](290)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a6x1)
{
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp289 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp287 = XATS2JS_new_llazy(xtmp291,xtmp292);
return xtmp287;
} // function // auxmain0(70)
function
auxmain1_10867_(a3x1, a3x2)
{
let xtmp295;
let xtmp306;
let xtmp307;
xtmp306 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp296;
let xtmp297;
let xtmp298;
let xtmp299;
let xtmp300;
let xtmp301;
let xtmp302;
let xtmp304;
// XEMIT01_FTMPDECS: END
xtmp297 = XATS2JS_llazy_eval(a3x2);
{
xtmp298 = 0;
do {
do {
if(0!==xtmp297[0]) break;
xtmp298 = 1;
} while(false);
if(xtmp298 > 0) break;
do {
if(1!==xtmp297[0]) break;
//L1PCKany();
//L1PCKany();
xtmp298 = 2;
} while(false);
if(xtmp298 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp298) {
case 1:
{
xtmp296 = auxloop2_11106_(XATS2JS_llazy_eval(a3x1));
}
;
break;
case 2:
xtmp299 = xtmp297[1];
xtmp300 = xtmp297[2];
{
{
xtmp301 = auxmain1_10867_(a3x1, xtmp300);
}
;
xtmp296 = [1, xtmp299, xtmp301];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp296;
} // lam-function
;
xtmp307 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp296;
let xtmp297;
let xtmp298;
let xtmp299;
let xtmp300;
let xtmp301;
let xtmp302;
let xtmp304;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(121))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](303)))); lev=(6); lts=(arg[1](303)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](303)))); lev=(6); lts=(arg[1](303)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a6x1)
{
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp302 = g_free_1550_(a3x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(123))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](305)))); lev=(6); lts=(arg[1](305)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](305)))); lev=(6); lts=(arg[1](305)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a6x1)
{
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp304 = g_free_1550_(a3x2);
}
;
} // lam-function
;
xtmp295 = XATS2JS_new_llazy(xtmp306,xtmp307);
return xtmp295;
} // function // auxmain1(71)
function
auxloop2_11106_(a3x1)
{
let xtmp309;
let xtmp310;
let xtmp311;
let xtmp312;
let xtmp313;
let xtmp314;
let xtmp315;
let xtmp316;
let xtmp317;
let xtmp318;
let xtmp319;
{
xtmp310 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp310 = 1;
} while(false);
if(xtmp310 > 0) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp310 = 2;
} while(false);
if(xtmp310 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp310) {
case 1:
{
xtmp309 = [0];
}
;
break;
case 2:
xtmp311 = a3x1[1];
xtmp312 = a3x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 11251(line=936, offs=3) -- 11289(line=938, offs=28)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(ys(145)), def=Some(L1VALtmp(tmp(313))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=mapstrm0$fopr(68); hag=; def=Some(L1VALfcst(node_childlst(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(313); L1VALtcst(mapstrm0$fopr(68)(124)); L1VALtmp(tmp(311))))), L1CMDpatck(L1PCKany()))})
{
{
// ./Game-of-24.dats: 3549(line=264, offs=1) -- 3592(line=264, offs=44)
// L1DCLimpdecl(LIMPDECL@{hdc=mapstrm0$fopr(68); hag=; def=Some(L1VALfcst(node_childlst(37))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
mapstrm0$fopr_3245_ = node_childlst_2777_
;
xtmp313 = mapstrm0$fopr_3245_(xtmp311);
}
;
;
} // val(H0Pvar(ys(145)))
;
xtmp315 = XATS2JS_llazy_eval(xtmp313);
{
xtmp316 = 0;
do {
do {
if(0!==xtmp315[0]) break;
xtmp316 = 1;
} while(false);
if(xtmp316 > 0) break;
do {
if(1!==xtmp315[0]) break;
//L1PCKany();
//L1PCKany();
xtmp316 = 2;
} while(false);
if(xtmp316 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp316) {
case 1:
{
xtmp314 = auxloop2_11106_(XATS2JS_llazy_eval(xtmp312));
}
;
break;
case 2:
xtmp317 = xtmp315[1];
xtmp318 = xtmp315[2];
{
{
xtmp319 = auxmain1_10867_(xtmp312, xtmp318);
}
;
xtmp314 = [1, xtmp317, xtmp319];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
xtmp309 = xtmp314;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp309;
} // function // auxloop2(72)
;
{
xtmp320 = auxmain0_10768_(a2x1);
}
;
return xtmp320;
} // function // stream_vt_mapstrm0(69)
;
xtmp284 = stream_vt_mapstrm0_3992_(a1x1);
}
;
return xtmp284;
} // function // nodes_childlst(67)


// ./Game-of-24.dats: 3617(line=269, offs=1) -- 4159(line=311, offs=5)
// L1DCLfundecl(LFUNDECL@{nam=play(148); hdc=play(73); hag=HFARGnpats(-1; H0Pvar(n1(149)), H0Pvar(n2(150)), H0Pvar(n3(151)), H0Pvar(n4(152))); def=Some(L1VALtmp(tmp(337))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(153)), def=Some(L1VALtmp(tmp(325))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(325); L1VALcon(LDCONcon(list_nil(5))); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(154)), def=Some(L1VALtmp(tmp(326))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(327); L1VALcon(LDCONcon(Int(0))); L1VALtmp(arg[4](324))))), L1CMDapp(tmp(326); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(327)), L1VALtmp(tmp(325))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(155)), def=Some(L1VALtmp(tmp(328))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(329); L1VALcon(LDCONcon(Int(0))); L1VALtmp(arg[3](323))))), L1CMDapp(tmp(328); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(329)), L1VALtmp(tmp(326))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(156)), def=Some(L1VALtmp(tmp(330))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(331); L1VALcon(LDCONcon(Int(0))); L1VALtmp(arg[2](322))))), L1CMDapp(tmp(330); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(331)), L1VALtmp(tmp(328))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(157)), def=Some(L1VALtmp(tmp(332))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(333); L1VALcon(LDCONcon(Int(0))); L1VALtmp(arg[1](321))))), L1CMDapp(tmp(332); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(333)), L1VALtmp(tmp(330))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xss(158)), def=Some(L1VALtmp(tmp(334))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(334); L1VALfcst(node_childlst(37)); L1VALtmp(tmp(332))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xss(159)), def=Some(L1VALtmp(tmp(335))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(335); L1VALfcst(nodes_childlst(67)); L1VALtmp(tmp(334))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xss(160)), def=Some(L1VALtmp(tmp(336))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(336); L1VALfcst(nodes_childlst(67)); L1VALtmp(tmp(335))))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone1(H0Cnone1(...))), L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_mapoptn0(75); hag=HFARGnpats(-1; H0Pvar(xs(165))); def=Some(L1VALtmp(tmp(360))); lev=(2); lts=(arg[1](338), tmp(360)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(166); hdc=auxmain(76); hag=HFARGnpats(-1; H0Pvar(xs(167))); def=Some(L1VALtmp(tmp(340))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(344); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(341))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(341); L1VALfcst(auxloop(77)); L1VALeval3(L1VALtmp(arg[1](339))))))); }), L1CMDlam(tmp(345); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(127))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](343)))); lev=(6); lts=(arg[1](343)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(342); L1VALtcst(g_free(43)(126)); L1VALtmp(arg[1](339)))))); }), L1CMDllazy(tmp(340); L1VALtmp(tmp(344)); L1VALtmp(tmp(345)))); }, LFUNDECL@{nam=auxloop(168); hdc=auxloop(77); hag=HFARGnpats(-1; H0Pvar(xs(169))); def=Some(L1VALtmp(tmp(347))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](346)); tmp(348); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](346)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](346)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(347); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(349); L1VALtmp(arg[1](346)); 0), L1CMDcarg(tmp(350); L1VALtmp(arg[1](346)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(opt(172)), def=Some(L1VALtmp(tmp(351))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=mapoptn0$fopr(74); hag=HFARGnpats(-1; H0Pvar(xs(161))); def=Some(L1VALtmp(tmp(354))); lev=(4); lts=(arg[1](352), tmp(353), tmp(354), tmp(355)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x0(162)), H0Pany()), def=Some(L1VALtmp(arg[1](352))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](352)))); L1PCKany(), L1PCKany())), L1CMDcarg(tmp(353); L1VALtmp(arg[1](352)); 0))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(355); L1VALfcst(expr_iseq24(35)); L1VALtmp(tmp(353))))), L1CMDif0(L1VALtmp(tmp(355)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_cons(11))); L1VALtmp(tmp(353)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_nil(12))); )))))); })), L1CMDapp(tmp(351); L1VALtcst(mapoptn0$fopr(74)(128)); L1VALtmp(tmp(349))))), L1CMDpatck(L1PCKany()))})), L1CMDcase(1; L1VALtmp(tmp(351)); tmp(357); L1PCKapp(L1PCKcon(LDCONcon(optn_vt_nil(12)); L1VALctag(L1VALtmp(tmp(351)))); ), L1PCKapp(L1PCKcon(LDCONcon(optn_vt_cons(11)); L1VALctag(L1VALtmp(tmp(351)))); L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(356); L1VALfcst(auxloop(77)); L1VALeval3(L1VALtmp(tmp(350))))))), L1BLKsome(L1CMDcarg(tmp(358); L1VALtmp(tmp(351)); 0), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(359); L1VALfcst(auxmain(76)); L1VALtmp(tmp(350))))), L1CMDapp(tmp(356); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(358)), L1VALtmp(tmp(359))))))), L1CMDmov(tmp(347); L1VALtmp(tmp(356)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(360); L1VALfcst(auxmain(76)); L1VALtmp(arg[1](338)))))); })), L1CMDapp(tmp(337); L1VALtcst(stream_vt_mapoptn0(75)(125)); L1VALtmp(tmp(336)))))); })
function
play_3620_(a1x1, a1x2, a1x3, a1x4)
{
let xtmp325;
let xtmp326;
let xtmp327;
let xtmp328;
let xtmp329;
let xtmp330;
let xtmp331;
let xtmp332;
let xtmp333;
let xtmp334;
let xtmp335;
let xtmp336;
let xtmp337;
// ./Game-of-24.dats: 4010(line=306, offs=1) -- 4029(line=306, offs=20)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(153)), def=Some(L1VALtmp(tmp(325))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(325); L1VALcon(LDCONcon(list_nil(5))); ))), L1CMDpatck(L1PCKany()))})
{
{
xtmp325 = [0];
}
;
;
} // val(H0Pvar(xs(153)))
;
// ./Game-of-24.dats: 4030(line=307, offs=1) -- 4061(line=307, offs=32)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(154)), def=Some(L1VALtmp(tmp(326))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(327); L1VALcon(LDCONcon(Int(0))); L1VALtmp(arg[4](324))))), L1CMDapp(tmp(326); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(327)), L1VALtmp(tmp(325))))), L1CMDpatck(L1PCKany()))})
{
{
{
xtmp327 = [0, a1x4];
}
;
xtmp326 = [1, xtmp327, xtmp325];
}
;
;
} // val(H0Pvar(xs(154)))
;
// ./Game-of-24.dats: 4062(line=308, offs=1) -- 4093(line=308, offs=32)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(155)), def=Some(L1VALtmp(tmp(328))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(329); L1VALcon(LDCONcon(Int(0))); L1VALtmp(arg[3](323))))), L1CMDapp(tmp(328); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(329)), L1VALtmp(tmp(326))))), L1CMDpatck(L1PCKany()))})
{
{
{
xtmp329 = [0, a1x3];
}
;
xtmp328 = [1, xtmp329, xtmp326];
}
;
;
} // val(H0Pvar(xs(155)))
;
// ./Game-of-24.dats: 4094(line=309, offs=1) -- 4125(line=309, offs=32)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(156)), def=Some(L1VALtmp(tmp(330))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(331); L1VALcon(LDCONcon(Int(0))); L1VALtmp(arg[2](322))))), L1CMDapp(tmp(330); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(331)), L1VALtmp(tmp(328))))), L1CMDpatck(L1PCKany()))})
{
{
{
xtmp331 = [0, a1x2];
}
;
xtmp330 = [1, xtmp331, xtmp328];
}
;
;
} // val(H0Pvar(xs(156)))
;
// ./Game-of-24.dats: 4126(line=310, offs=1) -- 4157(line=310, offs=32)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(157)), def=Some(L1VALtmp(tmp(332))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(333); L1VALcon(LDCONcon(Int(0))); L1VALtmp(arg[1](321))))), L1CMDapp(tmp(332); L1VALcon(LDCONcon(list_cons(6))); L1VALtmp(tmp(333)), L1VALtmp(tmp(330))))), L1CMDpatck(L1PCKany()))})
{
{
{
xtmp333 = [0, a1x1];
}
;
xtmp332 = [1, xtmp333, xtmp330];
}
;
;
} // val(H0Pvar(xs(157)))
;
// ./Game-of-24.dats: 3693(line=278, offs=1) -- 3720(line=279, offs=24)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xss(158)), def=Some(L1VALtmp(tmp(334))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(334); L1VALfcst(node_childlst(37)); L1VALtmp(tmp(332))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp334 = node_childlst_2777_(xtmp332);
}
;
;
} // val(H0Pvar(xss(158)))
;
// ./Game-of-24.dats: 3721(line=280, offs=1) -- 3750(line=281, offs=26)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xss(159)), def=Some(L1VALtmp(tmp(335))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(335); L1VALfcst(nodes_childlst(67)); L1VALtmp(tmp(334))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp335 = nodes_childlst_3490_(xtmp334);
}
;
;
} // val(H0Pvar(xss(159)))
;
// ./Game-of-24.dats: 3751(line=282, offs=1) -- 3780(line=283, offs=26)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xss(160)), def=Some(L1VALtmp(tmp(336))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(336); L1VALfcst(nodes_childlst(67)); L1VALtmp(tmp(335))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp336 = nodes_childlst_3490_(xtmp335);
}
;
;
} // val(H0Pvar(xss(160)))
;
// ./Game-of-24.dats: 3828(line=289, offs=1) -- 3845(line=289, offs=18)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...));
// ./Game-of-24.dats: 3846(line=290, offs=1) -- 3867(line=290, offs=22)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...));
// ./Game-of-24.dats: 3868(line=291, offs=1) -- 3993(line=301, offs=8)
// L1DCLnone0()
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9282(line=766, offs=1) -- 9808(line=810, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_mapoptn0(75); hag=HFARGnpats(-1; H0Pvar(xs(165))); def=Some(L1VALtmp(tmp(360))); lev=(2); lts=(arg[1](338), tmp(360)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=auxmain(166); hdc=auxmain(76); hag=HFARGnpats(-1; H0Pvar(xs(167))); def=Some(L1VALtmp(tmp(340))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(344); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(341))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(341); L1VALfcst(auxloop(77)); L1VALeval3(L1VALtmp(arg[1](339))))))); }), L1CMDlam(tmp(345); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(127))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](343)))); lev=(6); lts=(arg[1](343)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(342); L1VALtcst(g_free(43)(126)); L1VALtmp(arg[1](339)))))); }), L1CMDllazy(tmp(340); L1VALtmp(tmp(344)); L1VALtmp(tmp(345)))); }, LFUNDECL@{nam=auxloop(168); hdc=auxloop(77); hag=HFARGnpats(-1; H0Pvar(xs(169))); def=Some(L1VALtmp(tmp(347))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](346)); tmp(348); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](346)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](346)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(347); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(349); L1VALtmp(arg[1](346)); 0), L1CMDcarg(tmp(350); L1VALtmp(arg[1](346)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(opt(172)), def=Some(L1VALtmp(tmp(351))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=mapoptn0$fopr(74); hag=HFARGnpats(-1; H0Pvar(xs(161))); def=Some(L1VALtmp(tmp(354))); lev=(4); lts=(arg[1](352), tmp(353), tmp(354), tmp(355)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x0(162)), H0Pany()), def=Some(L1VALtmp(arg[1](352))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](352)))); L1PCKany(), L1PCKany())), L1CMDcarg(tmp(353); L1VALtmp(arg[1](352)); 0))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(355); L1VALfcst(expr_iseq24(35)); L1VALtmp(tmp(353))))), L1CMDif0(L1VALtmp(tmp(355)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_cons(11))); L1VALtmp(tmp(353)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_nil(12))); )))))); })), L1CMDapp(tmp(351); L1VALtcst(mapoptn0$fopr(74)(128)); L1VALtmp(tmp(349))))), L1CMDpatck(L1PCKany()))})), L1CMDcase(1; L1VALtmp(tmp(351)); tmp(357); L1PCKapp(L1PCKcon(LDCONcon(optn_vt_nil(12)); L1VALctag(L1VALtmp(tmp(351)))); ), L1PCKapp(L1PCKcon(LDCONcon(optn_vt_cons(11)); L1VALctag(L1VALtmp(tmp(351)))); L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(356); L1VALfcst(auxloop(77)); L1VALeval3(L1VALtmp(tmp(350))))))), L1BLKsome(L1CMDcarg(tmp(358); L1VALtmp(tmp(351)); 0), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(359); L1VALfcst(auxmain(76)); L1VALtmp(tmp(350))))), L1CMDapp(tmp(356); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(358)), L1VALtmp(tmp(359))))))), L1CMDmov(tmp(347); L1VALtmp(tmp(356)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(360); L1VALfcst(auxmain(76)); L1VALtmp(arg[1](338)))))); })
function
stream_vt_mapoptn0_3834_(a2x1)
{
let xtmp360;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9353(line=774, offs=1) -- 9806(line=809, offs=8)
// L1DCLfundecl(LFUNDECL@{nam=auxmain(166); hdc=auxmain(76); hag=HFARGnpats(-1; H0Pvar(xs(167))); def=Some(L1VALtmp(tmp(340))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDlam(tmp(344); L1LAMEXP@{hag=HFARGnone0(); def=Some(L1VALtmp(tmp(341))); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(341); L1VALfcst(auxloop(77)); L1VALeval3(L1VALtmp(arg[1](339))))))); }), L1CMDlam(tmp(345); L1LAMEXP@{hag=HFARGnone0(); def=None(); hag_blk=L1BLKnone(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(127))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](343)))); lev=(6); lts=(arg[1](343)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(342); L1VALtcst(g_free(43)(126)); L1VALtmp(arg[1](339)))))); }), L1CMDllazy(tmp(340); L1VALtmp(tmp(344)); L1VALtmp(tmp(345)))); }, LFUNDECL@{nam=auxloop(168); hdc=auxloop(77); hag=HFARGnpats(-1; H0Pvar(xs(169))); def=Some(L1VALtmp(tmp(347))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDcase(1; L1VALtmp(arg[1](346)); tmp(348); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(arg[1](346)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(arg[1](346)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(347); L1VALcon(LDCONcon(strmcon_vt_nil(10))); )))), L1BLKsome(L1CMDcarg(tmp(349); L1VALtmp(arg[1](346)); 0), L1CMDcarg(tmp(350); L1VALtmp(arg[1](346)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(opt(172)), def=Some(L1VALtmp(tmp(351))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=mapoptn0$fopr(74); hag=HFARGnpats(-1; H0Pvar(xs(161))); def=Some(L1VALtmp(tmp(354))); lev=(4); lts=(arg[1](352), tmp(353), tmp(354), tmp(355)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x0(162)), H0Pany()), def=Some(L1VALtmp(arg[1](352))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](352)))); L1PCKany(), L1PCKany())), L1CMDcarg(tmp(353); L1VALtmp(arg[1](352)); 0))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(355); L1VALfcst(expr_iseq24(35)); L1VALtmp(tmp(353))))), L1CMDif0(L1VALtmp(tmp(355)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_cons(11))); L1VALtmp(tmp(353)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_nil(12))); )))))); })), L1CMDapp(tmp(351); L1VALtcst(mapoptn0$fopr(74)(128)); L1VALtmp(tmp(349))))), L1CMDpatck(L1PCKany()))})), L1CMDcase(1; L1VALtmp(tmp(351)); tmp(357); L1PCKapp(L1PCKcon(LDCONcon(optn_vt_nil(12)); L1VALctag(L1VALtmp(tmp(351)))); ), L1PCKapp(L1PCKcon(LDCONcon(optn_vt_cons(11)); L1VALctag(L1VALtmp(tmp(351)))); L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(356); L1VALfcst(auxloop(77)); L1VALeval3(L1VALtmp(tmp(350))))))), L1BLKsome(L1CMDcarg(tmp(358); L1VALtmp(tmp(351)); 0), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(359); L1VALfcst(auxmain(76)); L1VALtmp(tmp(350))))), L1CMDapp(tmp(356); L1VALcon(LDCONcon(strmcon_vt_cons(9))); L1VALtmp(tmp(358)), L1VALtmp(tmp(359))))))), L1CMDmov(tmp(347); L1VALtmp(tmp(356)))))); })
function
auxmain_9356_(a3x1)
{
let xtmp340;
let xtmp344;
let xtmp345;
xtmp344 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp341;
let xtmp342;
// XEMIT01_FTMPDECS: END
{
xtmp341 = auxloop_9450_(XATS2JS_llazy_eval(a3x1));
}
;
return xtmp341;
} // lam-function
;
xtmp345 =
function()
{
// XEMIT01_FTMPDECS: BEG
let xtmp341;
let xtmp342;
// XEMIT01_FTMPDECS: END
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(127))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](343)))); lev=(6); lts=(arg[1](343)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](343)))); lev=(6); lts=(arg[1](343)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a6x1)
{
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp342 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp340 = XATS2JS_new_llazy(xtmp344,xtmp345);
return xtmp340;
} // function // auxmain(76)
function
auxloop_9450_(a3x1)
{
let xtmp347;
let xtmp348;
let xtmp349;
let xtmp350;
let xtmp351;
let xtmp356;
let xtmp357;
let xtmp358;
let xtmp359;
{
xtmp348 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp348 = 1;
} while(false);
if(xtmp348 > 0) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp348 = 2;
} while(false);
if(xtmp348 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp348) {
case 1:
{
xtmp347 = [0];
}
;
break;
case 2:
xtmp349 = a3x1[1];
xtmp350 = a3x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9594(line=798, offs=3) -- 9633(line=800, offs=28)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(opt(172)), def=Some(L1VALtmp(tmp(351))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=mapoptn0$fopr(74); hag=HFARGnpats(-1; H0Pvar(xs(161))); def=Some(L1VALtmp(tmp(354))); lev=(4); lts=(arg[1](352), tmp(353), tmp(354), tmp(355)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x0(162)), H0Pany()), def=Some(L1VALtmp(arg[1](352))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](352)))); L1PCKany(), L1PCKany())), L1CMDcarg(tmp(353); L1VALtmp(arg[1](352)); 0))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(355); L1VALfcst(expr_iseq24(35)); L1VALtmp(tmp(353))))), L1CMDif0(L1VALtmp(tmp(355)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_cons(11))); L1VALtmp(tmp(353)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_nil(12))); )))))); })), L1CMDapp(tmp(351); L1VALtcst(mapoptn0$fopr(74)(128)); L1VALtmp(tmp(349))))), L1CMDpatck(L1PCKany()))})
{
{
// ./Game-of-24.dats: 3868(line=291, offs=1) -- 3993(line=301, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=mapoptn0$fopr(74); hag=HFARGnpats(-1; H0Pvar(xs(161))); def=Some(L1VALtmp(tmp(354))); lev=(4); lts=(arg[1](352), tmp(353), tmp(354), tmp(355)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x0(162)), H0Pany()), def=Some(L1VALtmp(arg[1](352))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](352)))); L1PCKany(), L1PCKany())), L1CMDcarg(tmp(353); L1VALtmp(arg[1](352)); 0))})), L1CMDblk(L1BLKsome(L1CMDapp(tmp(355); L1VALfcst(expr_iseq24(35)); L1VALtmp(tmp(353))))), L1CMDif0(L1VALtmp(tmp(355)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_cons(11))); L1VALtmp(tmp(353)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(354); L1VALcon(LDCONcon(optn_vt_nil(12))); )))))); })
function
mapoptn0$fopr_2859_(a4x1)
{
let xtmp353;
let xtmp354;
let xtmp355;
// ./Game-of-24.dats: 3909(line=295, offs=1) -- 3935(line=296, offs=22)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x0(162)), H0Pany()), def=Some(L1VALtmp(arg[1](352))), def_blk=L1BLKsome(L1CMDpatck(L1PCKapp(L1PCKcon(LDCONcon(list_cons(6)); L1VALctag(L1VALtmp(arg[1](352)))); L1PCKany(), L1PCKany())), L1CMDcarg(tmp(353); L1VALtmp(arg[1](352)); 0))})
{
if(1!==a4x1[0]) XATS2JS_patckerr0();
;
xtmp353 = a4x1[1];
} // val(H0Pdapp(H0Pcon(list_cons(6)); -1; H0Pvar(x0(162)), H0Pany()))
;
{
xtmp355 = expr_iseq24_2230_(xtmp353);
}
;
if
(xtmp355)
// then
{
{
xtmp354 = [1, xtmp353];
}
;
} // if-then
else
{
{
xtmp354 = [0];
}
;
} // if-else
;
return xtmp354;
} // function // mapoptn0$fopr(74)
;
xtmp351 = mapoptn0$fopr_2859_(xtmp349);
}
;
;
} // val(H0Pvar(opt(172)))
;
{
xtmp357 = 0;
do {
do {
if(0!==xtmp351[0]) break;
xtmp357 = 1;
} while(false);
if(xtmp357 > 0) break;
do {
if(1!==xtmp351[0]) break;
//L1PCKany();
xtmp357 = 2;
} while(false);
if(xtmp357 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp357) {
case 1:
{
xtmp356 = auxloop_9450_(XATS2JS_llazy_eval(xtmp350));
}
;
break;
case 2:
xtmp358 = xtmp351[1];
{
{
xtmp359 = auxmain_9356_(xtmp350);
}
;
xtmp356 = [1, xtmp358, xtmp359];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
xtmp347 = xtmp356;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp347;
} // function // auxloop(77)
;
{
xtmp360 = auxmain_9356_(a2x1);
}
;
return xtmp360;
} // function // stream_vt_mapoptn0(75)
;
xtmp337 = stream_vt_mapoptn0_3834_(xtmp336);
}
;
return xtmp337;
} // function // play(73)


// ./Game-of-24.dats: 4204(line=315, offs=1) -- 4294(line=319, offs=38)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=Game_of_24_play_print(174), hdc=Game_of_24_play_print(78), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=Game_of_24_play_print(174), hdc=Game_of_24_play_print(78), })))

// ./Game-of-24.dats: 4319(line=323, offs=1) -- 4648(line=348, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Game_of_24_play_print(78); hag=HFARGnpats(-1; H0Pvar(n1(175)), H0Pvar(n2(176)), H0Pvar(n3(177)), H0Pvar(n4(178))); def=Some(L1VALtmp(tmp(366))); lev=(1); lts=(arg[1](361), arg[2](362), arg[3](363), arg[4](364), tmp(365), tmp(366), tmp(367), tmp(368), tmp(376), tmp(377), tmp(378), tmp(386)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(179)), def=Some(L1VALtmp(tmp(365))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(365); L1VALfcst(play(73)); L1VALtmp(arg[1](361)), L1VALtmp(arg[2](362)), L1VALtmp(arg[3](363)), L1VALtmp(arg[4](364))))), L1CMDpatck(L1PCKany()))})), L1CMDeval3(tmp(367); L1VALtmp(tmp(365))), L1CMDcase(1; L1VALtmp(tmp(367)); tmp(368); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(367)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(367)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(374))); lev=(2); lts=(arg[1](369), tmp(370), tmp(374)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(373))); lev=(3); lts=(arg[1](371), tmp(372), tmp(373)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(372))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(132))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(133))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(372); L1VALtcst(gl_print1(20)(131)); L1VALtmp(arg[1](371))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(372)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(372))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(373); 0; )))); })), L1CMDapp(tmp(370); L1VALtcst(print1(80)(130)); L1VALtmp(arg[1](369))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(375))); lev=(3); lts=(tmp(375)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(136))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(137))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(375); L1VALtcst(gl_print1(20)(135)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(374); L1VALtcst(println0(83)(134)); )))); })), L1CMDapp(tmp(366); L1VALtcst(println1(79)(129)); L1VALstr(STRING_closed("No solution is found!")))))), L1BLKsome(L1CMDcarg(tmp(376); L1VALtmp(tmp(367)); 0), L1CMDcarg(tmp(377); L1VALtmp(tmp(367)); 1), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(384))); lev=(2); lts=(arg[1](379), tmp(380), tmp(384)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(383))); lev=(3); lts=(arg[1](381), tmp(382), tmp(383)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(382))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(141))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(382); L1VALtcst(gl_print1(20)(140)); L1VALtmp(arg[1](381))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(382)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(382))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(383); 0; )))); })), L1CMDapp(tmp(380); L1VALtcst(print1(80)(139)); L1VALtmp(arg[1](379))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(385))); lev=(3); lts=(tmp(385)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(144))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(145))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(385); L1VALtcst(gl_print1(20)(143)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(384); L1VALtcst(println0(83)(142)); )))); })), L1CMDapp(tmp(378); L1VALtcst(println1(79)(138)); L1VALtmp(tmp(376))))), L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_foreach0(85); hag=HFARGnpats(-1; H0Pvar(xs(186))); def=Some(L1VALnone0()); lev=(2); lts=(arg[1](387), tmp(388)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(187)), def=Some(L1VALtmp(tmp(388))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_forall0(87); hag=HFARGnpats(-1; H0Pvar(xs(189))); def=Some(L1VALtmp(tmp(411))); lev=(3); lts=(arg[1](389), tmp(411)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(190); hdc=loop(88); hag=HFARGnpats(-1; H0Pvar(xs(191))); def=Some(L1VALtmp(tmp(391))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDeval3(tmp(392); L1VALtmp(arg[1](390))), L1CMDcase(1; L1VALtmp(tmp(392)); tmp(393); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(392)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(392)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(391); L1VALbtf(IDENT_alp(true)))), L1BLKsome(L1CMDcarg(tmp(394); L1VALtmp(tmp(392)); 0), L1CMDcarg(tmp(395); L1VALtmp(tmp(392)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(194)), def=Some(L1VALtmp(tmp(396))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=forall0$test(86); hag=HFARGnpats(-1; H0Pvar(x0(188))); def=Some(L1VALbtf(IDENT_alp(true))); lev=(5); lts=(arg[1](397), tmp(398)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(398))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })), L1CMDapp(tmp(398); L1VALtcst(foreach0$work(84)(149)); L1VALtmp(arg[1](397))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398))))}))); })), L1CMDapp(tmp(396); L1VALtcst(forall0$test(86)(148)); L1VALtmp(tmp(394))))), L1CMDpatck(L1PCKany()))})), L1CMDif0(L1VALtmp(tmp(396)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(408); L1VALfcst(loop(88)); L1VALtmp(tmp(395)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(159))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](410)))); lev=(6); lts=(arg[1](410)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(409); L1VALtcst(g_free(43)(158)); L1VALtmp(tmp(395))))), L1CMDmov(tmp(408); L1VALbtf(IDENT_alp(false))))), L1CMDmov(tmp(391); L1VALtmp(tmp(408)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(411); L1VALfcst(loop(88)); L1VALtmp(arg[1](389)))))); })), L1CMDapp(tmp(388); L1VALtcst(stream_vt_forall0(87)(147)); L1VALtmp(arg[1](387))))), L1CMDpatck(L1PCKany()))}))); })), L1CMDapp(tmp(386); L1VALtcst(stream_vt_foreach0(85)(146)); L1VALtmp(tmp(377))))), L1CMDmov(tmp(366); L1VALtmp(tmp(386)))))); })
function
Game_of_24_play_print(a1x1, a1x2, a1x3, a1x4)
{
let xtmp365;
let xtmp366;
let xtmp367;
let xtmp368;
let xtmp376;
let xtmp377;
let xtmp378;
let xtmp386;
// ./Game-of-24.dats: 4374(line=327, offs=1) -- 4403(line=328, offs=21)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(xs(179)), def=Some(L1VALtmp(tmp(365))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(365); L1VALfcst(play(73)); L1VALtmp(arg[1](361)), L1VALtmp(arg[2](362)), L1VALtmp(arg[3](363)), L1VALtmp(arg[4](364))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp365 = play_3620_(a1x1, a1x2, a1x3, a1x4);
}
;
;
} // val(H0Pvar(xs(179)))
;
xtmp367 = XATS2JS_llazy_eval(xtmp365);
{
xtmp368 = 0;
do {
do {
if(0!==xtmp367[0]) break;
xtmp368 = 1;
} while(false);
if(xtmp368 > 0) break;
do {
if(1!==xtmp367[0]) break;
//L1PCKany();
//L1PCKany();
xtmp368 = 2;
} while(false);
if(xtmp368 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp368) {
case 1:
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5561(line=459, offs=1) -- 5621(line=465, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(374))); lev=(2); lts=(arg[1](369), tmp(370), tmp(374)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(373))); lev=(3); lts=(arg[1](371), tmp(372), tmp(373)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(372))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(132))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(133))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(372); L1VALtcst(gl_print1(20)(131)); L1VALtmp(arg[1](371))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(372)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(372))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(373); 0; )))); })), L1CMDapp(tmp(370); L1VALtcst(print1(80)(130)); L1VALtmp(arg[1](369))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(375))); lev=(3); lts=(tmp(375)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(136))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(137))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(375); L1VALtcst(gl_print1(20)(135)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(374); L1VALtcst(println0(83)(134)); )))); })
function
println1_1780_(a2x1)
{
let xtmp370;
let xtmp374;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3225(line=268, offs=1) -- 3292(line=273, offs=16)
// L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(373))); lev=(3); lts=(arg[1](371), tmp(372), tmp(373)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(372))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(132))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(133))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(372); L1VALtcst(gl_print1(20)(131)); L1VALtmp(arg[1](371))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(372)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(372))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(373); 0; )))); })
function
print1_408_(a3x1)
{
let xtmp372;
let xtmp373;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3264(line=272, offs=3) -- 3290(line=272, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(372))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(132))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(133))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(372); L1VALtcst(gl_print1(20)(131)); L1VALtmp(arg[1](371))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(372)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(372))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(132))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(133))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(133))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), })));
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
xtmp372 = gl_print1_2233_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(372)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(372)));
} // val(H0Pnil())
;
{
xtmp373 = [-1];;
}
;
return xtmp373;
} // function // print1(80)
;
xtmp370 = print1_408_(a2x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5485(line=453, offs=1) -- 5537(line=456, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(375))); lev=(3); lts=(tmp(375)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(136))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(137))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(375); L1VALtcst(gl_print1(20)(135)); L1VALstr(STRING_closed("\n")))))); })
function
println0_1733_()
{
let xtmp375;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(136))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(137))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(137))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), })));
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
xtmp375 = gl_print1_2233_("\n");
}
;
return xtmp375;
} // function // println0(83)
;
xtmp374 = println0_1733_();
}
;
return xtmp374;
} // function // println1(79)
;
xtmp366 = println1_1780_("No solution is found!");
}
;
break;
case 2:
xtmp376 = xtmp367[1];
xtmp377 = xtmp367[2];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5561(line=459, offs=1) -- 5621(line=465, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(384))); lev=(2); lts=(arg[1](379), tmp(380), tmp(384)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(383))); lev=(3); lts=(arg[1](381), tmp(382), tmp(383)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(382))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(141))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(382); L1VALtcst(gl_print1(20)(140)); L1VALtmp(arg[1](381))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(382)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(382))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(383); 0; )))); })), L1CMDapp(tmp(380); L1VALtcst(print1(80)(139)); L1VALtmp(arg[1](379))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(385))); lev=(3); lts=(tmp(385)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(144))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(145))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(385); L1VALtcst(gl_print1(20)(143)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(384); L1VALtcst(println0(83)(142)); )))); })
function
println1_1780_(a2x1)
{
let xtmp380;
let xtmp384;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3225(line=268, offs=1) -- 3292(line=273, offs=16)
// L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(383))); lev=(3); lts=(arg[1](381), tmp(382), tmp(383)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(382))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(141))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(382); L1VALtcst(gl_print1(20)(140)); L1VALtmp(arg[1](381))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(382)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(382))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(383); 0; )))); })
function
print1_408_(a3x1)
{
let xtmp382;
let xtmp383;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3264(line=272, offs=3) -- 3290(line=272, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(382))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(141))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(382); L1VALtcst(gl_print1(20)(140)); L1VALtmp(arg[1](381))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(382)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(382))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(141))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp382 = gl_print1_2233_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(382)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(382)));
} // val(H0Pnil())
;
{
xtmp383 = [-1];;
}
;
return xtmp383;
} // function // print1(80)
;
xtmp380 = print1_408_(a2x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5485(line=453, offs=1) -- 5537(line=456, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(385))); lev=(3); lts=(tmp(385)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(144))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(145))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(385); L1VALtcst(gl_print1(20)(143)); L1VALstr(STRING_closed("\n")))))); })
function
println0_1733_()
{
let xtmp385;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(144))); lev=(4); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(145))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(145))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), })));
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
xtmp385 = gl_print1_2233_("\n");
}
;
return xtmp385;
} // function // println0(83)
;
xtmp384 = println0_1733_();
}
;
return xtmp384;
} // function // println1(79)
;
xtmp378 = println1_1780_(xtmp376);
}
;
// ./Game-of-24.dats: 4561(line=343, offs=1) -- 4606(line=344, offs=38)
// L1DCLnone0()
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7341(line=596, offs=1) -- 7539(line=614, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_foreach0(85); hag=HFARGnpats(-1; H0Pvar(xs(186))); def=Some(L1VALnone0()); lev=(2); lts=(arg[1](387), tmp(388)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(187)), def=Some(L1VALtmp(tmp(388))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_forall0(87); hag=HFARGnpats(-1; H0Pvar(xs(189))); def=Some(L1VALtmp(tmp(411))); lev=(3); lts=(arg[1](389), tmp(411)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(190); hdc=loop(88); hag=HFARGnpats(-1; H0Pvar(xs(191))); def=Some(L1VALtmp(tmp(391))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDeval3(tmp(392); L1VALtmp(arg[1](390))), L1CMDcase(1; L1VALtmp(tmp(392)); tmp(393); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(392)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(392)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(391); L1VALbtf(IDENT_alp(true)))), L1BLKsome(L1CMDcarg(tmp(394); L1VALtmp(tmp(392)); 0), L1CMDcarg(tmp(395); L1VALtmp(tmp(392)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(194)), def=Some(L1VALtmp(tmp(396))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=forall0$test(86); hag=HFARGnpats(-1; H0Pvar(x0(188))); def=Some(L1VALbtf(IDENT_alp(true))); lev=(5); lts=(arg[1](397), tmp(398)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(398))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })), L1CMDapp(tmp(398); L1VALtcst(foreach0$work(84)(149)); L1VALtmp(arg[1](397))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398))))}))); })), L1CMDapp(tmp(396); L1VALtcst(forall0$test(86)(148)); L1VALtmp(tmp(394))))), L1CMDpatck(L1PCKany()))})), L1CMDif0(L1VALtmp(tmp(396)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(408); L1VALfcst(loop(88)); L1VALtmp(tmp(395)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(159))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](410)))); lev=(6); lts=(arg[1](410)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(409); L1VALtcst(g_free(43)(158)); L1VALtmp(tmp(395))))), L1CMDmov(tmp(408); L1VALbtf(IDENT_alp(false))))), L1CMDmov(tmp(391); L1VALtmp(tmp(408)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(411); L1VALfcst(loop(88)); L1VALtmp(arg[1](389)))))); })), L1CMDapp(tmp(388); L1VALtcst(stream_vt_forall0(87)(147)); L1VALtmp(arg[1](387))))), L1CMDpatck(L1PCKany()))}))); })
function
stream_vt_foreach0_3346_(a2x1)
{
let xtmp388;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7395(line=601, offs=1) -- 7516(line=610, offs=25)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(187)), def=Some(L1VALtmp(tmp(388))), def_blk=L1BLKsome(L1CMDdcl(L1DCLnone0()), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_forall0(87); hag=HFARGnpats(-1; H0Pvar(xs(189))); def=Some(L1VALtmp(tmp(411))); lev=(3); lts=(arg[1](389), tmp(411)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(190); hdc=loop(88); hag=HFARGnpats(-1; H0Pvar(xs(191))); def=Some(L1VALtmp(tmp(391))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDeval3(tmp(392); L1VALtmp(arg[1](390))), L1CMDcase(1; L1VALtmp(tmp(392)); tmp(393); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(392)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(392)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(391); L1VALbtf(IDENT_alp(true)))), L1BLKsome(L1CMDcarg(tmp(394); L1VALtmp(tmp(392)); 0), L1CMDcarg(tmp(395); L1VALtmp(tmp(392)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(194)), def=Some(L1VALtmp(tmp(396))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=forall0$test(86); hag=HFARGnpats(-1; H0Pvar(x0(188))); def=Some(L1VALbtf(IDENT_alp(true))); lev=(5); lts=(arg[1](397), tmp(398)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(398))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })), L1CMDapp(tmp(398); L1VALtcst(foreach0$work(84)(149)); L1VALtmp(arg[1](397))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398))))}))); })), L1CMDapp(tmp(396); L1VALtcst(forall0$test(86)(148)); L1VALtmp(tmp(394))))), L1CMDpatck(L1PCKany()))})), L1CMDif0(L1VALtmp(tmp(396)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(408); L1VALfcst(loop(88)); L1VALtmp(tmp(395)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(159))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](410)))); lev=(6); lts=(arg[1](410)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(409); L1VALtcst(g_free(43)(158)); L1VALtmp(tmp(395))))), L1CMDmov(tmp(408); L1VALbtf(IDENT_alp(false))))), L1CMDmov(tmp(391); L1VALtmp(tmp(408)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(411); L1VALfcst(loop(88)); L1VALtmp(arg[1](389)))))); })), L1CMDapp(tmp(388); L1VALtcst(stream_vt_forall0(87)(147)); L1VALtmp(arg[1](387))))), L1CMDpatck(L1PCKany()))})
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7439(line=605, offs=1) -- 7514(line=609, offs=8)
// L1DCLnone0()
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 6983(line=567, offs=1) -- 7285(line=592, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_forall0(87); hag=HFARGnpats(-1; H0Pvar(xs(189))); def=Some(L1VALtmp(tmp(411))); lev=(3); lts=(arg[1](389), tmp(411)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=loop(190); hdc=loop(88); hag=HFARGnpats(-1; H0Pvar(xs(191))); def=Some(L1VALtmp(tmp(391))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDeval3(tmp(392); L1VALtmp(arg[1](390))), L1CMDcase(1; L1VALtmp(tmp(392)); tmp(393); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(392)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(392)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(391); L1VALbtf(IDENT_alp(true)))), L1BLKsome(L1CMDcarg(tmp(394); L1VALtmp(tmp(392)); 0), L1CMDcarg(tmp(395); L1VALtmp(tmp(392)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(194)), def=Some(L1VALtmp(tmp(396))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=forall0$test(86); hag=HFARGnpats(-1; H0Pvar(x0(188))); def=Some(L1VALbtf(IDENT_alp(true))); lev=(5); lts=(arg[1](397), tmp(398)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(398))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })), L1CMDapp(tmp(398); L1VALtcst(foreach0$work(84)(149)); L1VALtmp(arg[1](397))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398))))}))); })), L1CMDapp(tmp(396); L1VALtcst(forall0$test(86)(148)); L1VALtmp(tmp(394))))), L1CMDpatck(L1PCKany()))})), L1CMDif0(L1VALtmp(tmp(396)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(408); L1VALfcst(loop(88)); L1VALtmp(tmp(395)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(159))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](410)))); lev=(6); lts=(arg[1](410)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(409); L1VALtcst(g_free(43)(158)); L1VALtmp(tmp(395))))), L1CMDmov(tmp(408); L1VALbtf(IDENT_alp(false))))), L1CMDmov(tmp(391); L1VALtmp(tmp(408)))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(411); L1VALfcst(loop(88)); L1VALtmp(arg[1](389)))))); })
function
stream_vt_forall0_3295_(a3x1)
{
let xtmp411;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7050(line=573, offs=1) -- 7263(line=591, offs=5)
// L1DCLfundecl(LFUNDECL@{nam=loop(190); hdc=loop(88); hag=HFARGnpats(-1; H0Pvar(xs(191))); def=Some(L1VALtmp(tmp(391))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDeval3(tmp(392); L1VALtmp(arg[1](390))), L1CMDcase(1; L1VALtmp(tmp(392)); tmp(393); L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_nil(10)); L1VALctag(L1VALtmp(tmp(392)))); ), L1PCKapp(L1PCKcon(LDCONcon(strmcon_vt_cons(9)); L1VALctag(L1VALtmp(tmp(392)))); L1PCKany(), L1PCKany()); L1BLKsome(L1CMDmov(tmp(391); L1VALbtf(IDENT_alp(true)))), L1BLKsome(L1CMDcarg(tmp(394); L1VALtmp(tmp(392)); 0), L1CMDcarg(tmp(395); L1VALtmp(tmp(392)); 1), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(194)), def=Some(L1VALtmp(tmp(396))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=forall0$test(86); hag=HFARGnpats(-1; H0Pvar(x0(188))); def=Some(L1VALbtf(IDENT_alp(true))); lev=(5); lts=(arg[1](397), tmp(398)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(398))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })), L1CMDapp(tmp(398); L1VALtcst(foreach0$work(84)(149)); L1VALtmp(arg[1](397))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398))))}))); })), L1CMDapp(tmp(396); L1VALtcst(forall0$test(86)(148)); L1VALtmp(tmp(394))))), L1CMDpatck(L1PCKany()))})), L1CMDif0(L1VALtmp(tmp(396)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(408); L1VALfcst(loop(88)); L1VALtmp(tmp(395)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(159))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](410)))); lev=(6); lts=(arg[1](410)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(409); L1VALtcst(g_free(43)(158)); L1VALtmp(tmp(395))))), L1CMDmov(tmp(408); L1VALbtf(IDENT_alp(false))))), L1CMDmov(tmp(391); L1VALtmp(tmp(408)))))); })
function
loop_7053_(a4x1)
{
let xtmp391;
let xtmp392;
let xtmp393;
let xtmp394;
let xtmp395;
let xtmp396;
let xtmp408;
let xtmp409;
xtmp392 = XATS2JS_llazy_eval(a4x1);
{
xtmp393 = 0;
do {
do {
if(0!==xtmp392[0]) break;
xtmp393 = 1;
} while(false);
if(xtmp393 > 0) break;
do {
if(1!==xtmp392[0]) break;
//L1PCKany();
//L1PCKany();
xtmp393 = 2;
} while(false);
if(xtmp393 > 0) break;
} while(false);
} // case-patck0
switch
(xtmp393) {
case 1:
xtmp391 = true;
break;
case 2:
xtmp394 = xtmp392[1];
xtmp395 = xtmp392[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7169(line=584, offs=3) -- 7201(line=585, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(test(194)), def=Some(L1VALtmp(tmp(396))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=forall0$test(86); hag=HFARGnpats(-1; H0Pvar(x0(188))); def=Some(L1VALbtf(IDENT_alp(true))); lev=(5); lts=(arg[1](397), tmp(398)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(398))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })), L1CMDapp(tmp(398); L1VALtcst(foreach0$work(84)(149)); L1VALtmp(arg[1](397))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398))))}))); })), L1CMDapp(tmp(396); L1VALtcst(forall0$test(86)(148)); L1VALtmp(tmp(394))))), L1CMDpatck(L1PCKany()))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7439(line=605, offs=1) -- 7514(line=609, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=forall0$test(86); hag=HFARGnpats(-1; H0Pvar(x0(188))); def=Some(L1VALbtf(IDENT_alp(true))); lev=(5); lts=(arg[1](397), tmp(398)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(398))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })), L1CMDapp(tmp(398); L1VALtcst(foreach0$work(84)(149)); L1VALtmp(arg[1](397))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398))))}))); })
function
forall0$test_3538_(a5x1)
{
let xtmp398;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7473(line=608, offs=1) -- 7502(line=608, offs=30)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(398))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })), L1CMDapp(tmp(398); L1VALtcst(foreach0$work(84)(149)); L1VALtmp(arg[1](397))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398))))})
{
{
// ./Game-of-24.dats: 4561(line=343, offs=1) -- 4606(line=344, offs=38)
// L1DCLimpdecl(LIMPDECL@{hdc=foreach0$work(84); hag=HFARGnpats(-1; H0Pvar(x0(185))); def=Some(L1VALtmp(tmp(400))); lev=(6); lts=(arg[1](399), tmp(400)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })), L1CMDapp(tmp(400); L1VALtcst(println1(79)(150)); L1VALtmp(arg[1](399)))))); })
function
foreach0$work_3681_(a6x1)
{
let xtmp400;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5561(line=459, offs=1) -- 5621(line=465, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=println1(79); hag=HFARGnpats(-1; H0Pvar(x1(180))); def=Some(L1VALtmp(tmp(406))); lev=(7); lts=(arg[1](401), tmp(402), tmp(406)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })), L1CMDapp(tmp(402); L1VALtcst(print1(80)(151)); L1VALtmp(arg[1](401))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(406); L1VALtcst(println0(83)(154)); )))); })
function
println1_1780_(a7x1)
{
let xtmp402;
let xtmp406;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3225(line=268, offs=1) -- 3292(line=273, offs=16)
// L1DCLimpdecl(LIMPDECL@{hdc=print1(80); hag=HFARGnpats(-1; H0Pvar(x1(181))); def=Some(L1VALtmp(tmp(405))); lev=(8); lts=(arg[1](403), tmp(404), tmp(405)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(405); 0; )))); })
function
print1_408_(a8x1)
{
let xtmp404;
let xtmp405;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3264(line=272, offs=3) -- 3290(line=272, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(404))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })), L1CMDapp(tmp(404); L1VALtcst(gl_print1(20)(152)); L1VALtmp(arg[1](403))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(153))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); }))); })
// { // val-binding
// ./Game-of-24.dats: 1480(line=102, offs=1) -- 1514(line=103, offs=27)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALfcst(print_expr(15))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
g_print_2168_ = print_expr_1453_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp404 = gl_print1_2233_(a8x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(404)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(404)));
} // val(H0Pnil())
;
{
xtmp405 = [-1];;
}
;
return xtmp405;
} // function // print1(80)
;
xtmp402 = print1_408_(a7x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5485(line=453, offs=1) -- 5537(line=456, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=println0(83); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(407))); lev=(8); lts=(tmp(407)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })), L1CMDapp(tmp(407); L1VALtcst(gl_print1(20)(155)); L1VALstr(STRING_closed("\n")))))); })
function
println0_1733_()
{
let xtmp407;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(20); hag=; def=Some(L1VALtcst(g_print(16)(156))); lev=(9); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(16); hag=; def=Some(L1VALtcst(string_print(81)(157))); lev=(10); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(81); hag=; def=Some(L1VALfcst(XATS2JS_string_print(82))); lev=(11); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(182), hdc=XATS2JS_string_print(82), })));
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
xtmp407 = gl_print1_2233_("\n");
}
;
return xtmp407;
} // function // println0(83)
;
xtmp406 = println0_1733_();
}
;
return xtmp406;
} // function // println1(79)
;
xtmp400 = println1_1780_(a6x1);
}
;
return xtmp400;
} // function // foreach0$work(84)
;
xtmp398 = foreach0$work_3681_(a5x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(398)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(398)));
} // val(H0Pnil())
;
return true;
} // function // forall0$test(86)
;
xtmp396 = forall0$test_3538_(xtmp394);
}
;
;
} // val(H0Pvar(test(194)))
;
if
(xtmp396)
// then
{
{
xtmp408 = loop_7053_(xtmp395);
}
;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 825(line=62, offs=1) -- 880(line=64, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=g_free(43); hag=; def=Some(L1VALtcst(stream_vt_free(44)(159))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](410)))); lev=(6); lts=(arg[1](410)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 772(line=58, offs=1) -- 821(line=60, offs=31)
// L1DCLimpdecl(LIMPDECL@{hdc=stream_vt_free(44); hag=HFARGnpats(-1; H0Pvar(xs(67))); def=Some(L1VALfree3(L1VALtmp(arg[1](410)))); lev=(6); lts=(arg[1](410)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(); })
function
stream_vt_free_1774_(a6x1)
{
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(44)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_1774_
;
xtmp409 = g_free_1550_(xtmp395);
}
;
xtmp408 = false;
} // if-else
;
xtmp391 = xtmp408;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp391;
} // function // loop(88)
;
{
xtmp411 = loop_7053_(a3x1);
}
;
return xtmp411;
} // function // stream_vt_forall0(87)
;
xtmp388 = stream_vt_forall0_3295_(a2x1);
}
;
;
} // val(H0Pvar(test(187)))
;
return null;
} // function // stream_vt_foreach0(85)
;
xtmp386 = stream_vt_foreach0_3346_(xtmp377);
}
;
xtmp366 = xtmp386;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp366;
} // function // Game_of_24_play_print(78)


