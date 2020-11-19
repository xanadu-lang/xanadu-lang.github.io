/* ****** ****** */
//
// For testing the factorial function
//
/* ****** ****** */
var
JS_factorial_arg0 =
document.getElementById("JS_factorial_arg0");
/* ****** ****** */
var
JS_factorial_output =
document.getElementById("JS_factorial_output");
//
/* ****** ****** */
//
function
JS_factorial_args_rand()
{
//
var MAX0 = 10;
//
JS_factorial_arg0.value =
Math.floor((1+MAX0)*Math.random()).toString();
//
return;
} // end of [JS_factorial_args_rand()]
//
/* ****** ****** */
//
function
JS_factorial_arg0_int()
{
  return parseInt( JS_factorial_arg0.value, 10 );
}
//
/* ****** ****** */  
//
function
JS_factorial_func_call()
{
//
XATS2JS_the_print_store_clear();
//
JS_factorial_main(/*entry*/);
//
JS_factorial_output.innerHTML = XATS2JS_the_print_store_join();
//
return;
//
} // end of [JS_factorial_func_call()]
//
/* ****** ****** */
//
// For testing the ackermann function
//
/* ****** ****** */
var
JS_ackermann_arg0 =
document.getElementById("JS_ackermann_arg0");
var
JS_ackermann_arg1 =
document.getElementById("JS_ackermann_arg1");
/* ****** ****** */
var
JS_ackermann_output =
document.getElementById("JS_ackermann_output");
//
/* ****** ****** */
//
function
JS_ackermann_args_rand()
{
//
var MAX0 = 3;
var MAX1 = 10;
//
JS_ackermann_arg0.value =
Math.floor((1+MAX0)*Math.random()).toString();
JS_ackermann_arg1.value =
Math.floor((1+MAX1)*Math.random()).toString();
//
return;
} // end of [JS_ackermann_args_rand()]
//
/* ****** ****** */
//
function
JS_ackermann_arg0_int()
{
  return parseInt( JS_ackermann_arg0.value, 10 );
}
function
JS_ackermann_arg1_int()
{
  return parseInt( JS_ackermann_arg1.value, 10 );
}
//
/* ****** ****** */  
//
function
JS_ackermann_func_call()
{
//
XATS2JS_the_print_store_clear();
//
JS_ackermann_main(/*entry*/);
//
JS_ackermann_output.innerHTML = XATS2JS_the_print_store_join();
//
return;
//
} // end of [JS_ackermann_func_call()]
//
/* ****** ****** */

/* end of [Functest.cats] */
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
// ./JS_Functest.dats: 21(line=2, offs=1) -- 47(line=2, offs=27)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./JS_Functest.dats: 68(line=4, offs=1) -- 121(line=6, offs=29)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./JS_Functest.dats: 142(line=8, offs=1) -- 200(line=11, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_main(0), hdc=JS_factorial_main(0), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_main(0), hdc=JS_factorial_main(0), })))

// ./JS_Functest.dats: 201(line=12, offs=1) -- 259(line=15, offs=29)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_main(1), hdc=JS_ackermann_main(1), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_main(1), hdc=JS_ackermann_main(1), })))

// ./JS_Functest.dats: 281(line=18, offs=1) -- 349(line=21, offs=31)
// L1DCLfundecl(LFUNDECL@{nam=factorial(2); hdc=factorial(2); hag=HFARGnpats(-1; H0Pvar(n(3))); def=Some(L1VALtmp(tmp(1))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_gt_sint_sint(3); hag=; def=Some(L1VALfcst(XATS2JS_gint_gt_sint_sint(4))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(2); L1VALtcst(gint_gt_sint_sint(3)(0)); L1VALtmp(arg[1](0)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(2)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_mul_sint_sint(5); hag=; def=Some(L1VALfcst(XATS2JS_gint_mul_sint_sint(6))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(4); L1VALtcst(gint_sub_sint_sint(7)(2)); L1VALtmp(arg[1](0)), L1VALint(INT1(1))))), L1CMDapp(tmp(3); L1VALfcst(factorial(2)); L1VALtmp(tmp(4))))), L1CMDapp(tmp(1); L1VALtcst(gint_mul_sint_sint(5)(1)); L1VALtmp(arg[1](0)), L1VALtmp(tmp(3)))))); L1BLKsome(L1CMDmov(tmp(1); L1VALint(INT1(1)))))); })
function
factorial_284_(a1x1)
{
let xtmp1;
let xtmp2;
let xtmp3;
let xtmp4;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2361(line=172, offs=1) -- 2416(line=173, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_gt_sint_sint(3); hag=; def=Some(L1VALfcst(XATS2JS_gint_gt_sint_sint(4))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
xtmp2 = gint_gt_sint_sint_2209_(a1x1, 0);
}
;
if
(xtmp2)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3714(line=264, offs=1) -- 3771(line=265, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_mul_sint_sint(5); hag=; def=Some(L1VALfcst(XATS2JS_gint_mul_sint_sint(6))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(2); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp4 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
xtmp3 = factorial_284_(xtmp4);
}
;
xtmp1 = gint_mul_sint_sint_3609_(a1x1, xtmp3);
}
;
} // if-then
else
{
xtmp1 = 1;
} // if-else
;
return xtmp1;
} // function // factorial(2)


// ./JS_Functest.dats: 372(line=25, offs=1) -- 548(line=44, offs=15)
// L1DCLfundecl(LFUNDECL@{nam=ackermann(4); hdc=ackermann(9); hag=HFARGnpats(-1; H0Pvar(m(5)), H0Pvar(n(6))); def=Some(L1VALtmp(tmp(16))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=acker(7); hdc=acker(10); hag=HFARGnpats(-1; H0Pvar(m(8)), H0Pvar(n(9))); def=Some(L1VALtmp(tmp(9))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(10); L1VALtcst(gint_eq_sint_sint(11)(3)); L1VALtmp(arg[1](7)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(10)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(13); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(14))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(9); L1VALtcst(gint_add_sint_sint(13)(4)); L1VALtmp(arg[2](8)), L1VALint(INT1(1)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(11); L1VALtcst(gint_eq_sint_sint(11)(5)); L1VALtmp(arg[2](8)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(11)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(12); L1VALtcst(gint_sub_sint_sint(7)(6)); L1VALtmp(arg[1](7)), L1VALint(INT1(1))))), L1CMDapp(tmp(9); L1VALfcst(acker(10)); L1VALtmp(tmp(12)), L1VALint(INT1(1)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(13); L1VALtcst(gint_sub_sint_sint(7)(7)); L1VALtmp(arg[1](7)), L1VALint(INT1(1))))), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(15); L1VALtcst(gint_sub_sint_sint(7)(8)); L1VALtmp(arg[2](8)), L1VALint(INT1(1))))), L1CMDapp(tmp(14); L1VALfcst(acker(10)); L1VALtmp(arg[1](7)), L1VALtmp(tmp(15))))), L1CMDapp(tmp(9); L1VALfcst(acker(10)); L1VALtmp(tmp(13)), L1VALtmp(tmp(14)))))))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(16); L1VALfcst(acker(10)); L1VALtmp(arg[1](5)), L1VALtmp(arg[2](6)))))); })
function
ackermann_375_(a1x1, a1x2)
{
let xtmp16;
// ./JS_Functest.dats: 437(line=32, offs=1) -- 546(line=43, offs=6)
// L1DCLfundecl(LFUNDECL@{nam=acker(7); hdc=acker(10); hag=HFARGnpats(-1; H0Pvar(m(8)), H0Pvar(n(9))); def=Some(L1VALtmp(tmp(9))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(10); L1VALtcst(gint_eq_sint_sint(11)(3)); L1VALtmp(arg[1](7)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(10)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(13); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(14))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(9); L1VALtcst(gint_add_sint_sint(13)(4)); L1VALtmp(arg[2](8)), L1VALint(INT1(1)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(11); L1VALtcst(gint_eq_sint_sint(11)(5)); L1VALtmp(arg[2](8)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(11)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(12); L1VALtcst(gint_sub_sint_sint(7)(6)); L1VALtmp(arg[1](7)), L1VALint(INT1(1))))), L1CMDapp(tmp(9); L1VALfcst(acker(10)); L1VALtmp(tmp(12)), L1VALint(INT1(1)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(13); L1VALtcst(gint_sub_sint_sint(7)(7)); L1VALtmp(arg[1](7)), L1VALint(INT1(1))))), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(15); L1VALtcst(gint_sub_sint_sint(7)(8)); L1VALtmp(arg[2](8)), L1VALint(INT1(1))))), L1CMDapp(tmp(14); L1VALfcst(acker(10)); L1VALtmp(arg[1](7)), L1VALtmp(tmp(15))))), L1CMDapp(tmp(9); L1VALfcst(acker(10)); L1VALtmp(tmp(13)), L1VALtmp(tmp(14)))))))))); })
function
acker_440_(a2x1, a2x2)
{
let xtmp9;
let xtmp10;
let xtmp11;
let xtmp12;
let xtmp13;
let xtmp14;
let xtmp15;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2520(line=183, offs=1) -- 2575(line=184, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp10 = gint_eq_sint_sint_2293_(a2x1, 0);
}
;
if
(xtmp10)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3389(line=243, offs=1) -- 3446(line=244, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(13); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(14))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp9 = gint_add_sint_sint_3439_(a2x2, 1);
}
;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2520(line=183, offs=1) -- 2575(line=184, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp11 = gint_eq_sint_sint_2293_(a2x2, 0);
}
;
if
(xtmp11)
// then
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp12 = gint_sub_sint_sint_3524_(a2x1, 1);
}
;
xtmp9 = acker_440_(xtmp12, 1);
}
;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp13 = gint_sub_sint_sint_3524_(a2x1, 1);
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp15 = gint_sub_sint_sint_3524_(a2x2, 1);
}
;
xtmp14 = acker_440_(a2x1, xtmp15);
}
;
xtmp9 = acker_440_(xtmp13, xtmp14);
}
;
} // if-else
;
} // if-else
;
return xtmp9;
} // function // acker(10)
;
{
xtmp16 = acker_440_(a1x1, a1x2);
}
;
return xtmp16;
} // function // ackermann(9)


// ./JS_Functest.dats: 596(line=48, offs=1) -- 902(line=75, offs=6)
// L1DCLlocal(L1DCLnone0(), L1DCLnone0(); L1DCLimpdecl(LIMPDECL@{hdc=JS_factorial_main(0); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(17))); lev=(1); lts=(tmp(17)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest(18); hag=HFARGnpats(-1; H0Pvar(f0(11))); def=Some(L1VALtmp(tmp(22))); lev=(2); lts=(arg[1](18), tmp(19), tmp(20), tmp(21), tmp(22)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(12)), def=Some(L1VALtmp(tmp(19))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("factorial"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(19); L1VALtcst(Functest$name(15)(10)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(13)), def=Some(L1VALtmp(tmp(20))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_factorial_arg0_int(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_arg0_int(10), hdc=JS_factorial_arg0_int(17), }))))); })), L1CMDapp(tmp(20); L1VALtcst(Functest$arg0(16)(11)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(14)), def=Some(L1VALtmp(tmp(21))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(21); L1VALtmp(arg[1](18)); L1VALtmp(tmp(20))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println5(19); hag=HFARGnpats(-1; H0Pvar(x1(15)), H0Pvar(x2(16)), H0Pvar(x3(17)), H0Pvar(x4(18)), H0Pvar(x5(19))); def=Some(L1VALtmp(tmp(40))); lev=(3); lts=(arg[1](23), arg[2](24), arg[3](25), arg[4](26), arg[5](27), tmp(28), tmp(40)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print5(20); hag=HFARGnpats(-1; H0Pvar(x1(20)), H0Pvar(x2(21)), H0Pvar(x3(22)), H0Pvar(x4(23)), H0Pvar(x5(24))); def=Some(L1VALtmp(tmp(39))); lev=(4); lts=(arg[1](29), arg[2](30), arg[3](31), arg[4](32), arg[5](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(16))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(21)(14)); L1VALtmp(arg[1](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(18))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(19))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(21)(17)); L1VALtmp(arg[2](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(21))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(22))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(21)(20)); L1VALtmp(arg[3](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(24))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(25))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(21)(23)); L1VALtmp(arg[4](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(27))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(28))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(21)(26)); L1VALtmp(arg[5](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(39); 0; )))); })), L1CMDapp(tmp(28); L1VALtcst(print5(20)(13)); L1VALtmp(arg[1](23)), L1VALtmp(arg[2](24)), L1VALtmp(arg[3](25)), L1VALtmp(arg[4](26)), L1VALtmp(arg[5](27))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(tmp(41)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(41); L1VALtcst(gl_print1(21)(30)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(40); L1VALtcst(println0(27)(29)); )))); })), L1CMDapp(tmp(22); L1VALtcst(println5(19)(12)); L1VALtmp(tmp(19)), L1VALstr(STRING_closed("(")), L1VALtmp(tmp(20)), L1VALstr(STRING_closed(") = ")), L1VALtmp(tmp(21)))))); })), L1CMDapp(tmp(17); L1VALtcst(Functest(18)(9)); L1VALfcst(factorial(2)))))); }))
// { // local
// ./JS_Functest.dats: 624(line=52, offs=1) -- 663(line=53, offs=32)
// L1DCLnone0()
// L1DCLnone0()
// ./JS_Functest.dats: 686(line=57, offs=1) -- 805(line=66, offs=8)
// L1DCLnone0()
// L1DCLnone0()
// in-of-local
// ./JS_Functest.dats: 848(line=72, offs=1) -- 897(line=73, offs=42)
// L1DCLimpdecl(LIMPDECL@{hdc=JS_factorial_main(0); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(17))); lev=(1); lts=(tmp(17)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest(18); hag=HFARGnpats(-1; H0Pvar(f0(11))); def=Some(L1VALtmp(tmp(22))); lev=(2); lts=(arg[1](18), tmp(19), tmp(20), tmp(21), tmp(22)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(12)), def=Some(L1VALtmp(tmp(19))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("factorial"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(19); L1VALtcst(Functest$name(15)(10)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(13)), def=Some(L1VALtmp(tmp(20))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_factorial_arg0_int(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_arg0_int(10), hdc=JS_factorial_arg0_int(17), }))))); })), L1CMDapp(tmp(20); L1VALtcst(Functest$arg0(16)(11)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(14)), def=Some(L1VALtmp(tmp(21))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(21); L1VALtmp(arg[1](18)); L1VALtmp(tmp(20))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println5(19); hag=HFARGnpats(-1; H0Pvar(x1(15)), H0Pvar(x2(16)), H0Pvar(x3(17)), H0Pvar(x4(18)), H0Pvar(x5(19))); def=Some(L1VALtmp(tmp(40))); lev=(3); lts=(arg[1](23), arg[2](24), arg[3](25), arg[4](26), arg[5](27), tmp(28), tmp(40)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print5(20); hag=HFARGnpats(-1; H0Pvar(x1(20)), H0Pvar(x2(21)), H0Pvar(x3(22)), H0Pvar(x4(23)), H0Pvar(x5(24))); def=Some(L1VALtmp(tmp(39))); lev=(4); lts=(arg[1](29), arg[2](30), arg[3](31), arg[4](32), arg[5](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(16))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(21)(14)); L1VALtmp(arg[1](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(18))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(19))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(21)(17)); L1VALtmp(arg[2](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(21))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(22))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(21)(20)); L1VALtmp(arg[3](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(24))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(25))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(21)(23)); L1VALtmp(arg[4](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(27))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(28))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(21)(26)); L1VALtmp(arg[5](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(39); 0; )))); })), L1CMDapp(tmp(28); L1VALtcst(print5(20)(13)); L1VALtmp(arg[1](23)), L1VALtmp(arg[2](24)), L1VALtmp(arg[3](25)), L1VALtmp(arg[4](26)), L1VALtmp(arg[5](27))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(tmp(41)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(41); L1VALtcst(gl_print1(21)(30)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(40); L1VALtcst(println0(27)(29)); )))); })), L1CMDapp(tmp(22); L1VALtcst(println5(19)(12)); L1VALtmp(tmp(19)), L1VALstr(STRING_closed("(")), L1VALtmp(tmp(20)), L1VALstr(STRING_closed(") = ")), L1VALtmp(tmp(21)))))); })), L1CMDapp(tmp(17); L1VALtcst(Functest(18)(9)); L1VALfcst(factorial(2)))))); })
function
JS_factorial_main()
{
let xtmp17;
{
// ././Functest.dats: 381(line=29, offs=1) -- 590(line=49, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest(18); hag=HFARGnpats(-1; H0Pvar(f0(11))); def=Some(L1VALtmp(tmp(22))); lev=(2); lts=(arg[1](18), tmp(19), tmp(20), tmp(21), tmp(22)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(12)), def=Some(L1VALtmp(tmp(19))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("factorial"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(19); L1VALtcst(Functest$name(15)(10)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(13)), def=Some(L1VALtmp(tmp(20))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_factorial_arg0_int(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_arg0_int(10), hdc=JS_factorial_arg0_int(17), }))))); })), L1CMDapp(tmp(20); L1VALtcst(Functest$arg0(16)(11)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(14)), def=Some(L1VALtmp(tmp(21))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(21); L1VALtmp(arg[1](18)); L1VALtmp(tmp(20))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println5(19); hag=HFARGnpats(-1; H0Pvar(x1(15)), H0Pvar(x2(16)), H0Pvar(x3(17)), H0Pvar(x4(18)), H0Pvar(x5(19))); def=Some(L1VALtmp(tmp(40))); lev=(3); lts=(arg[1](23), arg[2](24), arg[3](25), arg[4](26), arg[5](27), tmp(28), tmp(40)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print5(20); hag=HFARGnpats(-1; H0Pvar(x1(20)), H0Pvar(x2(21)), H0Pvar(x3(22)), H0Pvar(x4(23)), H0Pvar(x5(24))); def=Some(L1VALtmp(tmp(39))); lev=(4); lts=(arg[1](29), arg[2](30), arg[3](31), arg[4](32), arg[5](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(16))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(21)(14)); L1VALtmp(arg[1](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(18))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(19))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(21)(17)); L1VALtmp(arg[2](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(21))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(22))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(21)(20)); L1VALtmp(arg[3](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(24))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(25))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(21)(23)); L1VALtmp(arg[4](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(27))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(28))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(21)(26)); L1VALtmp(arg[5](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(39); 0; )))); })), L1CMDapp(tmp(28); L1VALtcst(print5(20)(13)); L1VALtmp(arg[1](23)), L1VALtmp(arg[2](24)), L1VALtmp(arg[3](25)), L1VALtmp(arg[4](26)), L1VALtmp(arg[5](27))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(tmp(41)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(41); L1VALtcst(gl_print1(21)(30)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(40); L1VALtcst(println0(27)(29)); )))); })), L1CMDapp(tmp(22); L1VALtcst(println5(19)(12)); L1VALtmp(tmp(19)), L1VALstr(STRING_closed("(")), L1VALtmp(tmp(20)), L1VALstr(STRING_closed(") = ")), L1VALtmp(tmp(21)))))); })
function
Functest_114_(a2x1)
{
let xtmp19;
let xtmp20;
let xtmp21;
let xtmp22;
// ././Functest.dats: 444(line=37, offs=1) -- 470(line=38, offs=16)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(12)), def=Some(L1VALtmp(tmp(19))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("factorial"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(19); L1VALtcst(Functest$name(15)(10)); ))), L1CMDpatck(L1PCKany()))})
{
{
// ./JS_Functest.dats: 624(line=52, offs=1) -- 663(line=53, offs=32)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("factorial"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
function
Functest$name_171_()
{
return "factorial";
} // function // Functest$name(15)
;
xtmp19 = Functest$name_171_();
}
;
;
} // val(H0Pvar(name(12)))
;
// ././Functest.dats: 474(line=40, offs=1) -- 504(line=41, offs=20)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(13)), def=Some(L1VALtmp(tmp(20))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_factorial_arg0_int(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_arg0_int(10), hdc=JS_factorial_arg0_int(17), }))))); })), L1CMDapp(tmp(20); L1VALtcst(Functest$arg0(16)(11)); ))), L1CMDpatck(L1PCKany()))})
{
{
// ./JS_Functest.dats: 686(line=57, offs=1) -- 805(line=66, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_factorial_arg0_int(17))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_arg0_int(10), hdc=JS_factorial_arg0_int(17), }))))); })
// { // val-binding
// ./JS_Functest.dats: 751(line=63, offs=1) -- 803(line=65, offs=41)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_arg0_int(10), hdc=JS_factorial_arg0_int(17), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_factorial_arg0_int(10), hdc=JS_factorial_arg0_int(17), })));
// } // val-binding
const // implval/fun
Functest$arg0_235_ = JS_factorial_arg0_int
;
xtmp20 = Functest$arg0_235_();
}
;
;
} // val(H0Pvar(arg0(13)))
;
// ././Functest.dats: 519(line=45, offs=3) -- 536(line=45, offs=20)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(14)), def=Some(L1VALtmp(tmp(21))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(21); L1VALtmp(arg[1](18)); L1VALtmp(tmp(20))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp21 = a2x1(xtmp20);
}
;
;
} // val(H0Pvar(r0(14)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 6096(line=512, offs=1) -- 6215(line=527, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=println5(19); hag=HFARGnpats(-1; H0Pvar(x1(15)), H0Pvar(x2(16)), H0Pvar(x3(17)), H0Pvar(x4(18)), H0Pvar(x5(19))); def=Some(L1VALtmp(tmp(40))); lev=(3); lts=(arg[1](23), arg[2](24), arg[3](25), arg[4](26), arg[5](27), tmp(28), tmp(40)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print5(20); hag=HFARGnpats(-1; H0Pvar(x1(20)), H0Pvar(x2(21)), H0Pvar(x3(22)), H0Pvar(x4(23)), H0Pvar(x5(24))); def=Some(L1VALtmp(tmp(39))); lev=(4); lts=(arg[1](29), arg[2](30), arg[3](31), arg[4](32), arg[5](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(16))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(21)(14)); L1VALtmp(arg[1](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(18))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(19))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(21)(17)); L1VALtmp(arg[2](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(21))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(22))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(21)(20)); L1VALtmp(arg[3](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(24))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(25))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(21)(23)); L1VALtmp(arg[4](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(27))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(28))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(21)(26)); L1VALtmp(arg[5](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(39); 0; )))); })), L1CMDapp(tmp(28); L1VALtcst(print5(20)(13)); L1VALtmp(arg[1](23)), L1VALtmp(arg[2](24)), L1VALtmp(arg[3](25)), L1VALtmp(arg[4](26)), L1VALtmp(arg[5](27))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(tmp(41)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(41); L1VALtcst(gl_print1(21)(30)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(40); L1VALtcst(println0(27)(29)); )))); })
function
println5_2108_(a3x1, a3x2, a3x3, a3x4, a3x5)
{
let xtmp28;
let xtmp40;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3844(line=325, offs=1) -- 4070(line=343, offs=12)
// L1DCLimpdecl(LIMPDECL@{hdc=print5(20); hag=HFARGnpats(-1; H0Pvar(x1(20)), H0Pvar(x2(21)), H0Pvar(x3(22)), H0Pvar(x4(23)), H0Pvar(x5(24))); def=Some(L1VALtmp(tmp(39))); lev=(4); lts=(arg[1](29), arg[2](30), arg[3](31), arg[4](32), arg[5](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(16))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(21)(14)); L1VALtmp(arg[1](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(18))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(19))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(21)(17)); L1VALtmp(arg[2](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(21))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(22))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(21)(20)); L1VALtmp(arg[3](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(24))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(25))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(21)(23)); L1VALtmp(arg[4](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(27))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(28))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(21)(26)); L1VALtmp(arg[5](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(39); 0; )))); })
function
print5_728_(a4x1, a4x2, a4x3, a4x4, a4x5)
{
let xtmp34;
let xtmp35;
let xtmp36;
let xtmp37;
let xtmp38;
let xtmp39;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3926(line=338, offs=3) -- 3952(line=338, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(16))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(21)(14)); L1VALtmp(arg[1](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(15))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(16))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(16))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp34 = gl_print1_2233_(a4x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3955(line=339, offs=3) -- 3981(line=339, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(18))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(19))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(21)(17)); L1VALtmp(arg[2](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(18))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(19))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(19))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp35 = gl_print1_2233_(a4x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3984(line=340, offs=3) -- 4010(line=340, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(21))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(22))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(21)(20)); L1VALtmp(arg[3](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(21))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(22))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(22))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })));
// } // val-binding
const // implval/fun
gint_print_sint_1513_ = XATS2JS_gint_print_sint
;
// } // val-binding
const // implval/fun
g_print_2168_ = gint_print_sint_1513_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp36 = gl_print1_2233_(a4x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4013(line=341, offs=3) -- 4039(line=341, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(24))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(25))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(21)(23)); L1VALtmp(arg[4](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(24))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(25))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(25))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp37 = gl_print1_2233_(a4x4);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4042(line=342, offs=3) -- 4068(line=342, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(27))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(28))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(21)(26)); L1VALtmp(arg[5](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(27))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(28))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(28))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })));
// } // val-binding
const // implval/fun
gint_print_sint_1513_ = XATS2JS_gint_print_sint
;
// } // val-binding
const // implval/fun
g_print_2168_ = gint_print_sint_1513_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp38 = gl_print1_2233_(a4x5);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38)));
} // val(H0Pnil())
;
{
xtmp39 = [-1];;
}
;
return xtmp39;
} // function // print5(20)
;
xtmp28 = print5_728_(a3x1, a3x2, a3x3, a3x4, a3x5);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5485(line=453, offs=1) -- 5537(line=456, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(tmp(41)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(41); L1VALtcst(gl_print1(21)(30)); L1VALstr(STRING_closed("\n")))))); })
function
println0_1733_()
{
let xtmp41;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp41 = gl_print1_2233_("\n");
}
;
return xtmp41;
} // function // println0(27)
;
xtmp40 = println0_1733_();
}
;
return xtmp40;
} // function // println5(19)
;
xtmp22 = println5_2108_(xtmp19, "(", xtmp20, ") = ", xtmp21);
}
;
return xtmp22;
} // function // Functest(18)
;
xtmp17 = Functest_114_(factorial_284_);
}
;
return xtmp17;
} // function // JS_factorial_main(0)

// } // end-of-local


// ./JS_Functest.dats: 943(line=79, offs=1) -- 1370(line=117, offs=6)
// L1DCLlocal(L1DCLnone0(), L1DCLnone0(), L1DCLnone0(); L1DCLimpdecl(LIMPDECL@{hdc=JS_ackermann_main(1); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(42))); lev=(1); lts=(tmp(42)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest(18); hag=HFARGnpats(-1; H0Pvar(f0(29))); def=Some(L1VALtmp(tmp(48))); lev=(2); lts=(arg[1](43), tmp(44), tmp(45), tmp(46), tmp(47), tmp(48)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(30)), def=Some(L1VALtmp(tmp(44))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(44); L1VALtcst(Functest$name(15)(34)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(31)), def=Some(L1VALtmp(tmp(45))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_ackermann_arg0_int(28))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg0_int(27), hdc=JS_ackermann_arg0_int(28), }))))); })), L1CMDapp(tmp(45); L1VALtcst(Functest$arg0(16)(35)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg1(32)), def=Some(L1VALtmp(tmp(46))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(29); hag=; def=Some(L1VALfcst(JS_ackermann_arg1_int(30))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg1_int(28), hdc=JS_ackermann_arg1_int(30), }))))); })), L1CMDapp(tmp(46); L1VALtcst(Functest$arg1(29)(36)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(33)), def=Some(L1VALtmp(tmp(47))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(47); L1VALtmp(arg[1](43)); L1VALtmp(tmp(45)), L1VALtmp(tmp(46))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println7(31); hag=HFARGnpats(-1; H0Pvar(x1(34)), H0Pvar(x2(35)), H0Pvar(x3(36)), H0Pvar(x4(37)), H0Pvar(x5(38)), H0Pvar(x6(39)), H0Pvar(x7(40))); def=Some(L1VALtmp(tmp(72))); lev=(3); lts=(arg[1](49), arg[2](50), arg[3](51), arg[4](52), arg[5](53), arg[6](54), arg[7](55), tmp(56), tmp(72)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print7(32); hag=HFARGnpats(-1; H0Pvar(x1(41)), H0Pvar(x2(42)), H0Pvar(x3(43)), H0Pvar(x4(44)), H0Pvar(x5(45)), H0Pvar(x6(46)), H0Pvar(x7(47))); def=Some(L1VALtmp(tmp(71))); lev=(4); lts=(arg[1](57), arg[2](58), arg[3](59), arg[4](60), arg[5](61), arg[6](62), arg[7](63), tmp(64), tmp(65), tmp(66), tmp(67), tmp(68), tmp(69), tmp(70), tmp(71)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(64))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(40))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(41))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(64); L1VALtcst(gl_print1(21)(39)); L1VALtmp(arg[1](57))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(64)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(64))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(65))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(43))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(44))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(65); L1VALtcst(gl_print1(21)(42)); L1VALtmp(arg[2](58))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(65)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(65))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(66))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(46))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(47))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(66); L1VALtcst(gl_print1(21)(45)); L1VALtmp(arg[3](59))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(66)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(66))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(67))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(49))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(50))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(67); L1VALtcst(gl_print1(21)(48)); L1VALtmp(arg[4](60))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(67)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(67))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(68))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(52))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(53))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(68); L1VALtcst(gl_print1(21)(51)); L1VALtmp(arg[5](61))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(68)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(68))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(69))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(55))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(56))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(69); L1VALtcst(gl_print1(21)(54)); L1VALtmp(arg[6](62))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(69)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(69))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(70))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(58))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(59))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(70); L1VALtcst(gl_print1(21)(57)); L1VALtmp(arg[7](63))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(70)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(70))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(71); 0; )))); })), L1CMDapp(tmp(56); L1VALtcst(print7(32)(38)); L1VALtmp(arg[1](49)), L1VALtmp(arg[2](50)), L1VALtmp(arg[3](51)), L1VALtmp(arg[4](52)), L1VALtmp(arg[5](53)), L1VALtmp(arg[6](54)), L1VALtmp(arg[7](55))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(73))); lev=(4); lts=(tmp(73)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(62))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(63))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(73); L1VALtcst(gl_print1(21)(61)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(72); L1VALtcst(println0(27)(60)); )))); })), L1CMDapp(tmp(48); L1VALtcst(println7(31)(37)); L1VALtmp(tmp(44)), L1VALstr(STRING_closed("(")), L1VALtmp(tmp(45)), L1VALstr(STRING_closed(", ")), L1VALtmp(tmp(46)), L1VALstr(STRING_closed(") = ")), L1VALtmp(tmp(47)))))); })), L1CMDapp(tmp(42); L1VALtcst(Functest(18)(33)); L1VALfcst(ackermann(9)))))); }))
// { // local
// ./JS_Functest.dats: 971(line=83, offs=1) -- 1010(line=84, offs=32)
// L1DCLnone0()
// L1DCLnone0()
// ./JS_Functest.dats: 1033(line=88, offs=1) -- 1152(line=97, offs=8)
// L1DCLnone0()
// L1DCLnone0()
// ./JS_Functest.dats: 1154(line=99, offs=1) -- 1273(line=108, offs=8)
// L1DCLnone0()
// L1DCLnone0()
// in-of-local
// ./JS_Functest.dats: 1316(line=114, offs=1) -- 1365(line=115, offs=42)
// L1DCLimpdecl(LIMPDECL@{hdc=JS_ackermann_main(1); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(42))); lev=(1); lts=(tmp(42)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest(18); hag=HFARGnpats(-1; H0Pvar(f0(29))); def=Some(L1VALtmp(tmp(48))); lev=(2); lts=(arg[1](43), tmp(44), tmp(45), tmp(46), tmp(47), tmp(48)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(30)), def=Some(L1VALtmp(tmp(44))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(44); L1VALtcst(Functest$name(15)(34)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(31)), def=Some(L1VALtmp(tmp(45))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_ackermann_arg0_int(28))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg0_int(27), hdc=JS_ackermann_arg0_int(28), }))))); })), L1CMDapp(tmp(45); L1VALtcst(Functest$arg0(16)(35)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg1(32)), def=Some(L1VALtmp(tmp(46))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(29); hag=; def=Some(L1VALfcst(JS_ackermann_arg1_int(30))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg1_int(28), hdc=JS_ackermann_arg1_int(30), }))))); })), L1CMDapp(tmp(46); L1VALtcst(Functest$arg1(29)(36)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(33)), def=Some(L1VALtmp(tmp(47))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(47); L1VALtmp(arg[1](43)); L1VALtmp(tmp(45)), L1VALtmp(tmp(46))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println7(31); hag=HFARGnpats(-1; H0Pvar(x1(34)), H0Pvar(x2(35)), H0Pvar(x3(36)), H0Pvar(x4(37)), H0Pvar(x5(38)), H0Pvar(x6(39)), H0Pvar(x7(40))); def=Some(L1VALtmp(tmp(72))); lev=(3); lts=(arg[1](49), arg[2](50), arg[3](51), arg[4](52), arg[5](53), arg[6](54), arg[7](55), tmp(56), tmp(72)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print7(32); hag=HFARGnpats(-1; H0Pvar(x1(41)), H0Pvar(x2(42)), H0Pvar(x3(43)), H0Pvar(x4(44)), H0Pvar(x5(45)), H0Pvar(x6(46)), H0Pvar(x7(47))); def=Some(L1VALtmp(tmp(71))); lev=(4); lts=(arg[1](57), arg[2](58), arg[3](59), arg[4](60), arg[5](61), arg[6](62), arg[7](63), tmp(64), tmp(65), tmp(66), tmp(67), tmp(68), tmp(69), tmp(70), tmp(71)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(64))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(40))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(41))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(64); L1VALtcst(gl_print1(21)(39)); L1VALtmp(arg[1](57))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(64)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(64))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(65))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(43))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(44))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(65); L1VALtcst(gl_print1(21)(42)); L1VALtmp(arg[2](58))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(65)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(65))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(66))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(46))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(47))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(66); L1VALtcst(gl_print1(21)(45)); L1VALtmp(arg[3](59))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(66)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(66))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(67))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(49))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(50))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(67); L1VALtcst(gl_print1(21)(48)); L1VALtmp(arg[4](60))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(67)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(67))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(68))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(52))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(53))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(68); L1VALtcst(gl_print1(21)(51)); L1VALtmp(arg[5](61))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(68)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(68))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(69))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(55))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(56))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(69); L1VALtcst(gl_print1(21)(54)); L1VALtmp(arg[6](62))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(69)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(69))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(70))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(58))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(59))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(70); L1VALtcst(gl_print1(21)(57)); L1VALtmp(arg[7](63))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(70)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(70))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(71); 0; )))); })), L1CMDapp(tmp(56); L1VALtcst(print7(32)(38)); L1VALtmp(arg[1](49)), L1VALtmp(arg[2](50)), L1VALtmp(arg[3](51)), L1VALtmp(arg[4](52)), L1VALtmp(arg[5](53)), L1VALtmp(arg[6](54)), L1VALtmp(arg[7](55))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(73))); lev=(4); lts=(tmp(73)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(62))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(63))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(73); L1VALtcst(gl_print1(21)(61)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(72); L1VALtcst(println0(27)(60)); )))); })), L1CMDapp(tmp(48); L1VALtcst(println7(31)(37)); L1VALtmp(tmp(44)), L1VALstr(STRING_closed("(")), L1VALtmp(tmp(45)), L1VALstr(STRING_closed(", ")), L1VALtmp(tmp(46)), L1VALstr(STRING_closed(") = ")), L1VALtmp(tmp(47)))))); })), L1CMDapp(tmp(42); L1VALtcst(Functest(18)(33)); L1VALfcst(ackermann(9)))))); })
function
JS_ackermann_main()
{
let xtmp42;
{
// ././Functest.dats: 634(line=53, offs=1) -- 895(line=75, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest(18); hag=HFARGnpats(-1; H0Pvar(f0(29))); def=Some(L1VALtmp(tmp(48))); lev=(2); lts=(arg[1](43), tmp(44), tmp(45), tmp(46), tmp(47), tmp(48)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(30)), def=Some(L1VALtmp(tmp(44))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(44); L1VALtcst(Functest$name(15)(34)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(31)), def=Some(L1VALtmp(tmp(45))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_ackermann_arg0_int(28))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg0_int(27), hdc=JS_ackermann_arg0_int(28), }))))); })), L1CMDapp(tmp(45); L1VALtcst(Functest$arg0(16)(35)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg1(32)), def=Some(L1VALtmp(tmp(46))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(29); hag=; def=Some(L1VALfcst(JS_ackermann_arg1_int(30))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg1_int(28), hdc=JS_ackermann_arg1_int(30), }))))); })), L1CMDapp(tmp(46); L1VALtcst(Functest$arg1(29)(36)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(33)), def=Some(L1VALtmp(tmp(47))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(47); L1VALtmp(arg[1](43)); L1VALtmp(tmp(45)), L1VALtmp(tmp(46))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println7(31); hag=HFARGnpats(-1; H0Pvar(x1(34)), H0Pvar(x2(35)), H0Pvar(x3(36)), H0Pvar(x4(37)), H0Pvar(x5(38)), H0Pvar(x6(39)), H0Pvar(x7(40))); def=Some(L1VALtmp(tmp(72))); lev=(3); lts=(arg[1](49), arg[2](50), arg[3](51), arg[4](52), arg[5](53), arg[6](54), arg[7](55), tmp(56), tmp(72)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print7(32); hag=HFARGnpats(-1; H0Pvar(x1(41)), H0Pvar(x2(42)), H0Pvar(x3(43)), H0Pvar(x4(44)), H0Pvar(x5(45)), H0Pvar(x6(46)), H0Pvar(x7(47))); def=Some(L1VALtmp(tmp(71))); lev=(4); lts=(arg[1](57), arg[2](58), arg[3](59), arg[4](60), arg[5](61), arg[6](62), arg[7](63), tmp(64), tmp(65), tmp(66), tmp(67), tmp(68), tmp(69), tmp(70), tmp(71)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(64))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(40))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(41))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(64); L1VALtcst(gl_print1(21)(39)); L1VALtmp(arg[1](57))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(64)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(64))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(65))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(43))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(44))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(65); L1VALtcst(gl_print1(21)(42)); L1VALtmp(arg[2](58))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(65)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(65))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(66))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(46))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(47))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(66); L1VALtcst(gl_print1(21)(45)); L1VALtmp(arg[3](59))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(66)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(66))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(67))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(49))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(50))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(67); L1VALtcst(gl_print1(21)(48)); L1VALtmp(arg[4](60))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(67)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(67))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(68))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(52))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(53))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(68); L1VALtcst(gl_print1(21)(51)); L1VALtmp(arg[5](61))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(68)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(68))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(69))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(55))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(56))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(69); L1VALtcst(gl_print1(21)(54)); L1VALtmp(arg[6](62))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(69)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(69))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(70))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(58))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(59))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(70); L1VALtcst(gl_print1(21)(57)); L1VALtmp(arg[7](63))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(70)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(70))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(71); 0; )))); })), L1CMDapp(tmp(56); L1VALtcst(print7(32)(38)); L1VALtmp(arg[1](49)), L1VALtmp(arg[2](50)), L1VALtmp(arg[3](51)), L1VALtmp(arg[4](52)), L1VALtmp(arg[5](53)), L1VALtmp(arg[6](54)), L1VALtmp(arg[7](55))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(73))); lev=(4); lts=(tmp(73)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(62))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(63))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(73); L1VALtcst(gl_print1(21)(61)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(72); L1VALtcst(println0(27)(60)); )))); })), L1CMDapp(tmp(48); L1VALtcst(println7(31)(37)); L1VALtmp(tmp(44)), L1VALstr(STRING_closed("(")), L1VALtmp(tmp(45)), L1VALstr(STRING_closed(", ")), L1VALtmp(tmp(46)), L1VALstr(STRING_closed(") = ")), L1VALtmp(tmp(47)))))); })
function
Functest_114_(a2x1)
{
let xtmp44;
let xtmp45;
let xtmp46;
let xtmp47;
let xtmp48;
// ././Functest.dats: 700(line=61, offs=1) -- 726(line=62, offs=16)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(30)), def=Some(L1VALtmp(tmp(44))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(44); L1VALtcst(Functest$name(15)(34)); ))), L1CMDpatck(L1PCKany()))})
{
{
// ./JS_Functest.dats: 971(line=83, offs=1) -- 1010(line=84, offs=32)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(15); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
function
Functest$name_171_()
{
return "ackermann";
} // function // Functest$name(15)
;
xtmp44 = Functest$name_171_();
}
;
;
} // val(H0Pvar(name(30)))
;
// ././Functest.dats: 730(line=64, offs=1) -- 760(line=65, offs=20)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(31)), def=Some(L1VALtmp(tmp(45))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_ackermann_arg0_int(28))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg0_int(27), hdc=JS_ackermann_arg0_int(28), }))))); })), L1CMDapp(tmp(45); L1VALtcst(Functest$arg0(16)(35)); ))), L1CMDpatck(L1PCKany()))})
{
{
// ./JS_Functest.dats: 1033(line=88, offs=1) -- 1152(line=97, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(16); hag=; def=Some(L1VALfcst(JS_ackermann_arg0_int(28))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg0_int(27), hdc=JS_ackermann_arg0_int(28), }))))); })
// { // val-binding
// ./JS_Functest.dats: 1098(line=94, offs=1) -- 1150(line=96, offs=41)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg0_int(27), hdc=JS_ackermann_arg0_int(28), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg0_int(27), hdc=JS_ackermann_arg0_int(28), })));
// } // val-binding
const // implval/fun
Functest$arg0_235_ = JS_ackermann_arg0_int
;
xtmp45 = Functest$arg0_235_();
}
;
;
} // val(H0Pvar(arg0(31)))
;
// ././Functest.dats: 761(line=66, offs=1) -- 791(line=67, offs=20)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg1(32)), def=Some(L1VALtmp(tmp(46))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(29); hag=; def=Some(L1VALfcst(JS_ackermann_arg1_int(30))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg1_int(28), hdc=JS_ackermann_arg1_int(30), }))))); })), L1CMDapp(tmp(46); L1VALtcst(Functest$arg1(29)(36)); ))), L1CMDpatck(L1PCKany()))})
{
{
// ./JS_Functest.dats: 1154(line=99, offs=1) -- 1273(line=108, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(29); hag=; def=Some(L1VALfcst(JS_ackermann_arg1_int(30))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg1_int(28), hdc=JS_ackermann_arg1_int(30), }))))); })
// { // val-binding
// ./JS_Functest.dats: 1219(line=105, offs=1) -- 1271(line=107, offs=41)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg1_int(28), hdc=JS_ackermann_arg1_int(30), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_ackermann_arg1_int(28), hdc=JS_ackermann_arg1_int(30), })));
// } // val-binding
const // implval/fun
Functest$arg1_283_ = JS_ackermann_arg1_int
;
xtmp46 = Functest$arg1_283_();
}
;
;
} // val(H0Pvar(arg1(32)))
;
// ././Functest.dats: 806(line=71, offs=3) -- 829(line=71, offs=26)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(33)), def=Some(L1VALtmp(tmp(47))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(47); L1VALtmp(arg[1](43)); L1VALtmp(tmp(45)), L1VALtmp(tmp(46))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp47 = a2x1(xtmp45, xtmp46);
}
;
;
} // val(H0Pvar(r0(33)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 6449(line=551, offs=1) -- 6593(line=567, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=println7(31); hag=HFARGnpats(-1; H0Pvar(x1(34)), H0Pvar(x2(35)), H0Pvar(x3(36)), H0Pvar(x4(37)), H0Pvar(x5(38)), H0Pvar(x6(39)), H0Pvar(x7(40))); def=Some(L1VALtmp(tmp(72))); lev=(3); lts=(arg[1](49), arg[2](50), arg[3](51), arg[4](52), arg[5](53), arg[6](54), arg[7](55), tmp(56), tmp(72)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print7(32); hag=HFARGnpats(-1; H0Pvar(x1(41)), H0Pvar(x2(42)), H0Pvar(x3(43)), H0Pvar(x4(44)), H0Pvar(x5(45)), H0Pvar(x6(46)), H0Pvar(x7(47))); def=Some(L1VALtmp(tmp(71))); lev=(4); lts=(arg[1](57), arg[2](58), arg[3](59), arg[4](60), arg[5](61), arg[6](62), arg[7](63), tmp(64), tmp(65), tmp(66), tmp(67), tmp(68), tmp(69), tmp(70), tmp(71)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(64))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(40))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(41))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(64); L1VALtcst(gl_print1(21)(39)); L1VALtmp(arg[1](57))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(64)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(64))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(65))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(43))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(44))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(65); L1VALtcst(gl_print1(21)(42)); L1VALtmp(arg[2](58))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(65)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(65))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(66))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(46))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(47))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(66); L1VALtcst(gl_print1(21)(45)); L1VALtmp(arg[3](59))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(66)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(66))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(67))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(49))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(50))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(67); L1VALtcst(gl_print1(21)(48)); L1VALtmp(arg[4](60))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(67)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(67))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(68))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(52))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(53))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(68); L1VALtcst(gl_print1(21)(51)); L1VALtmp(arg[5](61))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(68)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(68))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(69))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(55))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(56))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(69); L1VALtcst(gl_print1(21)(54)); L1VALtmp(arg[6](62))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(69)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(69))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(70))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(58))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(59))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(70); L1VALtcst(gl_print1(21)(57)); L1VALtmp(arg[7](63))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(70)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(70))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(71); 0; )))); })), L1CMDapp(tmp(56); L1VALtcst(print7(32)(38)); L1VALtmp(arg[1](49)), L1VALtmp(arg[2](50)), L1VALtmp(arg[3](51)), L1VALtmp(arg[4](52)), L1VALtmp(arg[5](53)), L1VALtmp(arg[6](54)), L1VALtmp(arg[7](55))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(73))); lev=(4); lts=(tmp(73)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(62))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(63))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(73); L1VALtcst(gl_print1(21)(61)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(72); L1VALtcst(println0(27)(60)); )))); })
function
println7_2377_(a3x1, a3x2, a3x3, a3x4, a3x5, a3x6, a3x7)
{
let xtmp56;
let xtmp72;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4389(line=372, offs=1) -- 4690(line=393, offs=16)
// L1DCLimpdecl(LIMPDECL@{hdc=print7(32); hag=HFARGnpats(-1; H0Pvar(x1(41)), H0Pvar(x2(42)), H0Pvar(x3(43)), H0Pvar(x4(44)), H0Pvar(x5(45)), H0Pvar(x6(46)), H0Pvar(x7(47))); def=Some(L1VALtmp(tmp(71))); lev=(4); lts=(arg[1](57), arg[2](58), arg[3](59), arg[4](60), arg[5](61), arg[6](62), arg[7](63), tmp(64), tmp(65), tmp(66), tmp(67), tmp(68), tmp(69), tmp(70), tmp(71)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(64))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(40))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(41))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(64); L1VALtcst(gl_print1(21)(39)); L1VALtmp(arg[1](57))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(64)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(64))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(65))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(43))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(44))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(65); L1VALtcst(gl_print1(21)(42)); L1VALtmp(arg[2](58))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(65)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(65))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(66))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(46))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(47))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(66); L1VALtcst(gl_print1(21)(45)); L1VALtmp(arg[3](59))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(66)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(66))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(67))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(49))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(50))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(67); L1VALtcst(gl_print1(21)(48)); L1VALtmp(arg[4](60))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(67)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(67))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(68))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(52))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(53))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(68); L1VALtcst(gl_print1(21)(51)); L1VALtmp(arg[5](61))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(68)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(68))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(69))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(55))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(56))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(69); L1VALtcst(gl_print1(21)(54)); L1VALtmp(arg[6](62))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(69)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(69))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(70))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(58))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(59))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(70); L1VALtcst(gl_print1(21)(57)); L1VALtmp(arg[7](63))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(70)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(70))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(71); 0; )))); })
function
print7_993_(a4x1, a4x2, a4x3, a4x4, a4x5, a4x6, a4x7)
{
let xtmp64;
let xtmp65;
let xtmp66;
let xtmp67;
let xtmp68;
let xtmp69;
let xtmp70;
let xtmp71;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4488(line=386, offs=3) -- 4514(line=386, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(64))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(40))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(41))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(64); L1VALtcst(gl_print1(21)(39)); L1VALtmp(arg[1](57))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(64)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(64))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(40))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(41))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(41))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp64 = gl_print1_2233_(a4x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(64)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(64)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4517(line=387, offs=3) -- 4543(line=387, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(65))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(43))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(44))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(65); L1VALtcst(gl_print1(21)(42)); L1VALtmp(arg[2](58))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(65)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(65))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(43))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(44))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(44))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp65 = gl_print1_2233_(a4x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(65)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(65)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4546(line=388, offs=3) -- 4572(line=388, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(66))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(46))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(47))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(66); L1VALtcst(gl_print1(21)(45)); L1VALtmp(arg[3](59))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(66)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(66))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(46))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(47))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(47))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })));
// } // val-binding
const // implval/fun
gint_print_sint_1513_ = XATS2JS_gint_print_sint
;
// } // val-binding
const // implval/fun
g_print_2168_ = gint_print_sint_1513_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp66 = gl_print1_2233_(a4x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(66)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(66)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4575(line=389, offs=3) -- 4601(line=389, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(67))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(49))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(50))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(67); L1VALtcst(gl_print1(21)(48)); L1VALtmp(arg[4](60))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(67)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(67))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(49))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(50))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(50))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp67 = gl_print1_2233_(a4x4);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(67)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(67)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4604(line=390, offs=3) -- 4630(line=390, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(68))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(52))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(53))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(68); L1VALtcst(gl_print1(21)(51)); L1VALtmp(arg[5](61))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(68)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(68))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(52))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(53))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(53))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })));
// } // val-binding
const // implval/fun
gint_print_sint_1513_ = XATS2JS_gint_print_sint
;
// } // val-binding
const // implval/fun
g_print_2168_ = gint_print_sint_1513_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp68 = gl_print1_2233_(a4x5);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(68)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(68)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4633(line=391, offs=3) -- 4659(line=391, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(69))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(55))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(56))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(69); L1VALtcst(gl_print1(21)(54)); L1VALtmp(arg[6](62))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(69)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(69))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(55))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(56))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(56))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp69 = gl_print1_2233_(a4x6);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(69)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(69)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4662(line=392, offs=3) -- 4688(line=392, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(70))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(58))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(59))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })), L1CMDapp(tmp(70); L1VALtcst(gl_print1(21)(57)); L1VALtmp(arg[7](63))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(70)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(70))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(58))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(59))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(gint_print_sint(25)(59))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(25); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(26))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(26), hdc=XATS2JS_gint_print_sint(26), })));
// } // val-binding
const // implval/fun
gint_print_sint_1513_ = XATS2JS_gint_print_sint
;
// } // val-binding
const // implval/fun
g_print_2168_ = gint_print_sint_1513_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp70 = gl_print1_2233_(a4x7);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(70)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(70)));
} // val(H0Pnil())
;
{
xtmp71 = [-1];;
}
;
return xtmp71;
} // function // print7(32)
;
xtmp56 = print7_993_(a3x1, a3x2, a3x3, a3x4, a3x5, a3x6, a3x7);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5485(line=453, offs=1) -- 5537(line=456, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=println0(27); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(73))); lev=(4); lts=(tmp(73)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(62))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(63))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })), L1CMDapp(tmp(73); L1VALtcst(gl_print1(21)(61)); L1VALstr(STRING_closed("\n")))))); })
function
println0_1733_()
{
let xtmp73;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(21); hag=; def=Some(L1VALtcst(g_print(22)(62))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(63))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(22); hag=; def=Some(L1VALtcst(string_print(23)(63))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(23); hag=; def=Some(L1VALfcst(XATS2JS_string_print(24))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(25), hdc=XATS2JS_string_print(24), })));
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
xtmp73 = gl_print1_2233_("\n");
}
;
return xtmp73;
} // function // println0(27)
;
xtmp72 = println0_1733_();
}
;
return xtmp72;
} // function // println7(31)
;
xtmp48 = println7_2377_(xtmp44, "(", xtmp45, ", ", xtmp46, ") = ", xtmp47);
}
;
return xtmp48;
} // function // Functest(18)
;
xtmp42 = Functest_114_(ackermann_375_);
}
;
return xtmp42;
} // function // JS_ackermann_main(1)

// } // end-of-local


