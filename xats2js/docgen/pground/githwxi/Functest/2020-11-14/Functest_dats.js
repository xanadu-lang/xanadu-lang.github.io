/* ****** ****** */
var
JS_Functest_arg0 =
document.getElementById("JS_Functest_arg0");
var
JS_Functest_arg1 =
document.getElementById("JS_Functest_arg1");
/* ****** ****** */
var
JS_Functest_output =
document.getElementById("JS_Functest_output");
//
/* ****** ****** */
//
function
JS_Functest_args_rand()
{
//
var MAX0 = 3;
var MAX1 = 10;
//
JS_Functest_arg0.value =
Math.floor(1+MAX0*Math.random()).toString();
JS_Functest_arg1.value =
Math.floor(1+MAX1*Math.random()).toString();
//
return;
} // end of [JS_Functest_args_rand()]
//
/* ****** ****** */
//
function
JS_Functest_arg0_int()
{
  return parseInt( JS_Functest_arg0.value, 10 );
}
function
JS_Functest_arg1_int()
{
  return parseInt( JS_Functest_arg1.value, 10 );
}
//
/* ****** ****** */  
//
function
JS_Functest_func_call()
{
//
XATS2JS_the_print_store_clear();
//
JS_Functest_main(/*entry*/);
//
JS_Functest_output.innerHTML = XATS2JS_the_print_store_join();
//
return;
//
} // end of [JS_Functest_func_call()]
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
// ./Functest.dats: 21(line=2, offs=1) -- 74(line=4, offs=29)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Functest.dats: 95(line=6, offs=1) -- 139(line=7, offs=36)
// L1DCLnone1(H0Cnone1(...))
// L1DCLnone1(H0Cnone1(...))

// ./Functest.dats: 160(line=9, offs=1) -- 202(line=12, offs=23)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); <f0(0)>; HFUNDECL@{nam=Functest(0), hdc=Functest(0), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); <f0(0)>; HFUNDECL@{nam=Functest(0), hdc=Functest(0), })))

// ./Functest.dats: 223(line=14, offs=1) -- 260(line=16, offs=24)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); <>; HFUNDECL@{nam=Functest$name(1), hdc=Functest$name(1), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); <>; HFUNDECL@{nam=Functest$name(1), hdc=Functest$name(1), })))

// ./Functest.dats: 281(line=18, offs=1) -- 328(line=21, offs=28)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); <a0(1)>; HFUNDECL@{nam=Functest$arg0(2), hdc=Functest$arg0(2), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); <a0(1)>; HFUNDECL@{nam=Functest$arg0(2), hdc=Functest$arg0(2), })))

// ./Functest.dats: 329(line=22, offs=1) -- 376(line=25, offs=28)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); <a1(2)>; HFUNDECL@{nam=Functest$arg1(3), hdc=Functest$arg1(3), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); <a1(2)>; HFUNDECL@{nam=Functest$arg1(3), hdc=Functest$arg1(3), })))

// ./Functest.dats: 398(line=28, offs=1) -- 659(line=50, offs=8)
// L1DCLnone0()
// L1DCLnone0()

// ./Functest.dats: 703(line=54, offs=1) -- 879(line=73, offs=15)
// L1DCLfundecl(LFUNDECL@{nam=ackermann(9); hdc=ackermann(5); hag=HFARGnpats(-1; H0Pvar(m(10)), H0Pvar(n(11))); def=Some(L1VALtmp(tmp(11))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLfundecl(LFUNDECL@{nam=acker(12); hdc=acker(6); hag=HFARGnpats(-1; H0Pvar(m(13)), H0Pvar(n(14))); def=Some(L1VALtmp(tmp(4))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(5); L1VALtcst(gint_eq_sint_sint(7)(0)); L1VALtmp(arg[1](2)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(5)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(9); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(10))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(4); L1VALtcst(gint_add_sint_sint(9)(1)); L1VALtmp(arg[2](3)), L1VALint(INT1(1)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(6); L1VALtcst(gint_eq_sint_sint(7)(2)); L1VALtmp(arg[2](3)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(6)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(7); L1VALtcst(gint_sub_sint_sint(11)(3)); L1VALtmp(arg[1](2)), L1VALint(INT1(1))))), L1CMDapp(tmp(4); L1VALfcst(acker(6)); L1VALtmp(tmp(7)), L1VALint(INT1(1)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(8); L1VALtcst(gint_sub_sint_sint(11)(4)); L1VALtmp(arg[1](2)), L1VALint(INT1(1))))), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(10); L1VALtcst(gint_sub_sint_sint(11)(5)); L1VALtmp(arg[2](3)), L1VALint(INT1(1))))), L1CMDapp(tmp(9); L1VALfcst(acker(6)); L1VALtmp(arg[1](2)), L1VALtmp(tmp(10))))), L1CMDapp(tmp(4); L1VALfcst(acker(6)); L1VALtmp(tmp(8)), L1VALtmp(tmp(9)))))))))); })), L1CMDblk(L1BLKsome(L1CMDapp(tmp(11); L1VALfcst(acker(6)); L1VALtmp(arg[1](0)), L1VALtmp(arg[2](1)))))); })
function
ackermann_706_(a1x1, a1x2)
{
let xtmp11;
// ./Functest.dats: 768(line=61, offs=1) -- 877(line=72, offs=6)
// L1DCLfundecl(LFUNDECL@{nam=acker(12); hdc=acker(6); hag=HFARGnpats(-1; H0Pvar(m(13)), H0Pvar(n(14))); def=Some(L1VALtmp(tmp(4))); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(5); L1VALtcst(gint_eq_sint_sint(7)(0)); L1VALtmp(arg[1](2)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(5)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(9); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(10))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(4); L1VALtcst(gint_add_sint_sint(9)(1)); L1VALtmp(arg[2](3)), L1VALint(INT1(1)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(6); L1VALtcst(gint_eq_sint_sint(7)(2)); L1VALtmp(arg[2](3)), L1VALint(INT1(0))))), L1CMDif0(L1VALtmp(tmp(6)); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(7); L1VALtcst(gint_sub_sint_sint(11)(3)); L1VALtmp(arg[1](2)), L1VALint(INT1(1))))), L1CMDapp(tmp(4); L1VALfcst(acker(6)); L1VALtmp(tmp(7)), L1VALint(INT1(1)))))); L1BLKsome(L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(8); L1VALtcst(gint_sub_sint_sint(11)(4)); L1VALtmp(arg[1](2)), L1VALint(INT1(1))))), L1CMDblk(L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(10); L1VALtcst(gint_sub_sint_sint(11)(5)); L1VALtmp(arg[2](3)), L1VALint(INT1(1))))), L1CMDapp(tmp(9); L1VALfcst(acker(6)); L1VALtmp(arg[1](2)), L1VALtmp(tmp(10))))), L1CMDapp(tmp(4); L1VALfcst(acker(6)); L1VALtmp(tmp(8)), L1VALtmp(tmp(9)))))))))); })
function
acker_771_(a2x1, a2x2)
{
let xtmp4;
let xtmp5;
let xtmp6;
let xtmp7;
let xtmp8;
let xtmp9;
let xtmp10;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2520(line=183, offs=1) -- 2575(line=184, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp5 = gint_eq_sint_sint_2293_(a2x1, 0);
}
;
if
(xtmp5)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3389(line=243, offs=1) -- 3446(line=244, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_add_sint_sint(9); hag=; def=Some(L1VALfcst(XATS2JS_gint_add_sint_sint(10))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp4 = gint_add_sint_sint_3439_(a2x2, 1);
}
;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2520(line=183, offs=1) -- 2575(line=184, offs=48)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_eq_sint_sint(7); hag=; def=Some(L1VALfcst(XATS2JS_gint_eq_sint_sint(8))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp6 = gint_eq_sint_sint_2293_(a2x2, 0);
}
;
if
(xtmp6)
// then
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp7 = gint_sub_sint_sint_3524_(a2x1, 1);
}
;
xtmp4 = acker_771_(xtmp7, 1);
}
;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp8 = gint_sub_sint_sint_3524_(a2x1, 1);
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3550(line=253, offs=1) -- 3607(line=254, offs=50)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_sub_sint_sint(11); hag=; def=Some(L1VALfcst(XATS2JS_gint_sub_sint_sint(12))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp10 = gint_sub_sint_sint_3524_(a2x2, 1);
}
;
xtmp9 = acker_771_(a2x1, xtmp10);
}
;
xtmp4 = acker_771_(xtmp8, xtmp9);
}
;
} // if-else
;
} // if-else
;
return xtmp4;
} // function // acker(6)
;
{
xtmp11 = acker_771_(a1x1, a1x2);
}
;
return xtmp11;
} // function // ackermann(5)


// ./Functest.dats: 926(line=76, offs=1) -- 965(line=77, offs=32)
// L1DCLnone0()
// L1DCLnone0()

// ./Functest.dats: 987(line=80, offs=1) -- 1104(line=89, offs=8)
// L1DCLnone0()
// L1DCLnone0()

// ./Functest.dats: 1105(line=90, offs=1) -- 1222(line=99, offs=8)
// L1DCLnone0()
// L1DCLnone0()

// ./Functest.dats: 1247(line=103, offs=1) -- 1295(line=105, offs=37)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_main(17), hdc=JS_Functest_main(15), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_main(17), hdc=JS_Functest_main(15), })))

// ./Functest.dats: 1296(line=106, offs=1) -- 1344(line=107, offs=41)
// L1DCLimpdecl(LIMPDECL@{hdc=JS_Functest_main(15); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(12))); lev=(1); lts=(tmp(12)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest(0); hag=HFARGnpats(-1; H0Pvar(f0(4))); def=Some(L1VALtmp(tmp(18))); lev=(2); lts=(arg[1](13), tmp(14), tmp(15), tmp(16), tmp(17), tmp(18)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(5)), def=Some(L1VALtmp(tmp(14))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(1); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(14); L1VALtcst(Functest$name(1)(7)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(6)), def=Some(L1VALtmp(tmp(15))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(2); hag=; def=Some(L1VALfcst(JS_Functest_arg0_int(13))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg0_int(15), hdc=JS_Functest_arg0_int(13), }))))); })), L1CMDapp(tmp(15); L1VALtcst(Functest$arg0(2)(8)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg1(7)), def=Some(L1VALtmp(tmp(16))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(3); hag=; def=Some(L1VALfcst(JS_Functest_arg1_int(14))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg1_int(16), hdc=JS_Functest_arg1_int(14), }))))); })), L1CMDapp(tmp(16); L1VALtcst(Functest$arg1(3)(9)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(8)), def=Some(L1VALtmp(tmp(17))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(17); L1VALtmp(arg[1](13)); L1VALtmp(tmp(15)), L1VALtmp(tmp(16))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println7(4); hag=HFARGnpats(-1; H0Pvar(x1(18)), H0Pvar(x2(19)), H0Pvar(x3(20)), H0Pvar(x4(21)), H0Pvar(x5(22)), H0Pvar(x6(23)), H0Pvar(x7(24))); def=Some(L1VALtmp(tmp(42))); lev=(3); lts=(arg[1](19), arg[2](20), arg[3](21), arg[4](22), arg[5](23), arg[6](24), arg[7](25), tmp(26), tmp(42)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print7(16); hag=HFARGnpats(-1; H0Pvar(x1(25)), H0Pvar(x2(26)), H0Pvar(x3(27)), H0Pvar(x4(28)), H0Pvar(x5(29)), H0Pvar(x6(30)), H0Pvar(x7(31))); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(arg[1](27), arg[2](28), arg[3](29), arg[4](30), arg[5](31), arg[6](32), arg[7](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39), tmp(40), tmp(41)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(13))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(14))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(17)(12)); L1VALtmp(arg[1](27))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(16))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(17))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(17)(15)); L1VALtmp(arg[2](28))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(19))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(20))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(17)(18)); L1VALtmp(arg[3](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(23))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(17)(21)); L1VALtmp(arg[4](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(25))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(26))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(17)(24)); L1VALtmp(arg[5](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(39))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(28))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(29))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(39); L1VALtcst(gl_print1(17)(27)); L1VALtmp(arg[6](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(40))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(40); L1VALtcst(gl_print1(17)(30)); L1VALtmp(arg[7](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(41); 0; )))); })), L1CMDapp(tmp(26); L1VALtcst(print7(16)(11)); L1VALtmp(arg[1](19)), L1VALtmp(arg[2](20)), L1VALtmp(arg[3](21)), L1VALtmp(arg[4](22)), L1VALtmp(arg[5](23)), L1VALtmp(arg[6](24)), L1VALtmp(arg[7](25))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(23); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(43))); lev=(4); lts=(tmp(43)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(35))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(36))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(43); L1VALtcst(gl_print1(17)(34)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(42); L1VALtcst(println0(23)(33)); )))); })), L1CMDapp(tmp(18); L1VALtcst(println7(4)(10)); L1VALtmp(tmp(14)), L1VALstr(STRING_closed("(")), L1VALtmp(tmp(15)), L1VALstr(STRING_closed(", ")), L1VALtmp(tmp(16)), L1VALstr(STRING_closed(") = ")), L1VALtmp(tmp(17)))))); })), L1CMDapp(tmp(12); L1VALtcst(Functest(0)(6)); L1VALfcst(ackermann(5)))))); })
function
JS_Functest_main()
{
let xtmp12;
{
// ./Functest.dats: 398(line=28, offs=1) -- 659(line=50, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest(0); hag=HFARGnpats(-1; H0Pvar(f0(4))); def=Some(L1VALtmp(tmp(18))); lev=(2); lts=(arg[1](13), tmp(14), tmp(15), tmp(16), tmp(17), tmp(18)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(5)), def=Some(L1VALtmp(tmp(14))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(1); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(14); L1VALtcst(Functest$name(1)(7)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(6)), def=Some(L1VALtmp(tmp(15))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(2); hag=; def=Some(L1VALfcst(JS_Functest_arg0_int(13))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg0_int(15), hdc=JS_Functest_arg0_int(13), }))))); })), L1CMDapp(tmp(15); L1VALtcst(Functest$arg0(2)(8)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg1(7)), def=Some(L1VALtmp(tmp(16))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(3); hag=; def=Some(L1VALfcst(JS_Functest_arg1_int(14))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg1_int(16), hdc=JS_Functest_arg1_int(14), }))))); })), L1CMDapp(tmp(16); L1VALtcst(Functest$arg1(3)(9)); ))), L1CMDpatck(L1PCKany()))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(8)), def=Some(L1VALtmp(tmp(17))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(17); L1VALtmp(arg[1](13)); L1VALtmp(tmp(15)), L1VALtmp(tmp(16))))), L1CMDpatck(L1PCKany()))})), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println7(4); hag=HFARGnpats(-1; H0Pvar(x1(18)), H0Pvar(x2(19)), H0Pvar(x3(20)), H0Pvar(x4(21)), H0Pvar(x5(22)), H0Pvar(x6(23)), H0Pvar(x7(24))); def=Some(L1VALtmp(tmp(42))); lev=(3); lts=(arg[1](19), arg[2](20), arg[3](21), arg[4](22), arg[5](23), arg[6](24), arg[7](25), tmp(26), tmp(42)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print7(16); hag=HFARGnpats(-1; H0Pvar(x1(25)), H0Pvar(x2(26)), H0Pvar(x3(27)), H0Pvar(x4(28)), H0Pvar(x5(29)), H0Pvar(x6(30)), H0Pvar(x7(31))); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(arg[1](27), arg[2](28), arg[3](29), arg[4](30), arg[5](31), arg[6](32), arg[7](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39), tmp(40), tmp(41)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(13))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(14))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(17)(12)); L1VALtmp(arg[1](27))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(16))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(17))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(17)(15)); L1VALtmp(arg[2](28))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(19))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(20))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(17)(18)); L1VALtmp(arg[3](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(23))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(17)(21)); L1VALtmp(arg[4](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(25))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(26))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(17)(24)); L1VALtmp(arg[5](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(39))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(28))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(29))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(39); L1VALtcst(gl_print1(17)(27)); L1VALtmp(arg[6](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(40))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(40); L1VALtcst(gl_print1(17)(30)); L1VALtmp(arg[7](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(41); 0; )))); })), L1CMDapp(tmp(26); L1VALtcst(print7(16)(11)); L1VALtmp(arg[1](19)), L1VALtmp(arg[2](20)), L1VALtmp(arg[3](21)), L1VALtmp(arg[4](22)), L1VALtmp(arg[5](23)), L1VALtmp(arg[6](24)), L1VALtmp(arg[7](25))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(23); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(43))); lev=(4); lts=(tmp(43)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(35))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(36))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(43); L1VALtcst(gl_print1(17)(34)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(42); L1VALtcst(println0(23)(33)); )))); })), L1CMDapp(tmp(18); L1VALtcst(println7(4)(10)); L1VALtmp(tmp(14)), L1VALstr(STRING_closed("(")), L1VALtmp(tmp(15)), L1VALstr(STRING_closed(", ")), L1VALtmp(tmp(16)), L1VALstr(STRING_closed(") = ")), L1VALtmp(tmp(17)))))); })
function
Functest_179_(a2x1)
{
let xtmp14;
let xtmp15;
let xtmp16;
let xtmp17;
let xtmp18;
// ./Functest.dats: 464(line=36, offs=1) -- 490(line=37, offs=16)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(name(5)), def=Some(L1VALtmp(tmp(14))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(1); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })), L1CMDapp(tmp(14); L1VALtcst(Functest$name(1)(7)); ))), L1CMDpatck(L1PCKany()))})
{
{
// ./Functest.dats: 926(line=76, offs=1) -- 965(line=77, offs=32)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest$name(1); hag=HFARGnpats(-1; ); def=Some(L1VALstr(STRING_closed("ackermann"))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(); })
function
Functest$name_236_()
{
return "ackermann";
} // function // Functest$name(1)
;
xtmp14 = Functest$name_236_();
}
;
;
} // val(H0Pvar(name(5)))
;
// ./Functest.dats: 494(line=39, offs=1) -- 524(line=40, offs=20)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg0(6)), def=Some(L1VALtmp(tmp(15))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(2); hag=; def=Some(L1VALfcst(JS_Functest_arg0_int(13))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg0_int(15), hdc=JS_Functest_arg0_int(13), }))))); })), L1CMDapp(tmp(15); L1VALtcst(Functest$arg0(2)(8)); ))), L1CMDpatck(L1PCKany()))})
{
{
// ./Functest.dats: 987(line=80, offs=1) -- 1104(line=89, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg0(2); hag=; def=Some(L1VALfcst(JS_Functest_arg0_int(13))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg0_int(15), hdc=JS_Functest_arg0_int(13), }))))); })
// { // val-binding
// ./Functest.dats: 1051(line=86, offs=1) -- 1102(line=88, offs=40)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg0_int(15), hdc=JS_Functest_arg0_int(13), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg0_int(15), hdc=JS_Functest_arg0_int(13), })));
// } // val-binding
const // implval/fun
Functest$arg0_300_ = JS_Functest_arg0_int
;
xtmp15 = Functest$arg0_300_();
}
;
;
} // val(H0Pvar(arg0(6)))
;
// ./Functest.dats: 525(line=41, offs=1) -- 555(line=42, offs=20)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(arg1(7)), def=Some(L1VALtmp(tmp(16))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(3); hag=; def=Some(L1VALfcst(JS_Functest_arg1_int(14))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg1_int(16), hdc=JS_Functest_arg1_int(14), }))))); })), L1CMDapp(tmp(16); L1VALtcst(Functest$arg1(3)(9)); ))), L1CMDpatck(L1PCKany()))})
{
{
// ./Functest.dats: 1105(line=90, offs=1) -- 1222(line=99, offs=8)
// L1DCLimpdecl(LIMPDECL@{hdc=Functest$arg1(3); hag=; def=Some(L1VALfcst(JS_Functest_arg1_int(14))); lev=(3); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg1_int(16), hdc=JS_Functest_arg1_int(14), }))))); })
// { // val-binding
// ./Functest.dats: 1169(line=96, offs=1) -- 1220(line=98, offs=40)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg1_int(16), hdc=JS_Functest_arg1_int(14), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=JS_Functest_arg1_int(16), hdc=JS_Functest_arg1_int(14), })));
// } // val-binding
const // implval/fun
Functest$arg1_348_ = JS_Functest_arg1_int
;
xtmp16 = Functest$arg1_348_();
}
;
;
} // val(H0Pvar(arg1(7)))
;
// ./Functest.dats: 570(line=46, offs=3) -- 593(line=46, offs=26)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pvar(r0(8)), def=Some(L1VALtmp(tmp(17))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDapp(tmp(17); L1VALtmp(arg[1](13)); L1VALtmp(tmp(15)), L1VALtmp(tmp(16))))), L1CMDpatck(L1PCKany()))})
{
{
xtmp17 = a2x1(xtmp15, xtmp16);
}
;
;
} // val(H0Pvar(r0(8)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 6449(line=551, offs=1) -- 6593(line=567, offs=13)
// L1DCLimpdecl(LIMPDECL@{hdc=println7(4); hag=HFARGnpats(-1; H0Pvar(x1(18)), H0Pvar(x2(19)), H0Pvar(x3(20)), H0Pvar(x4(21)), H0Pvar(x5(22)), H0Pvar(x6(23)), H0Pvar(x7(24))); def=Some(L1VALtmp(tmp(42))); lev=(3); lts=(arg[1](19), arg[2](20), arg[3](21), arg[4](22), arg[5](23), arg[6](24), arg[7](25), tmp(26), tmp(42)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=print7(16); hag=HFARGnpats(-1; H0Pvar(x1(25)), H0Pvar(x2(26)), H0Pvar(x3(27)), H0Pvar(x4(28)), H0Pvar(x5(29)), H0Pvar(x6(30)), H0Pvar(x7(31))); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(arg[1](27), arg[2](28), arg[3](29), arg[4](30), arg[5](31), arg[6](32), arg[7](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39), tmp(40), tmp(41)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(13))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(14))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(17)(12)); L1VALtmp(arg[1](27))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(16))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(17))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(17)(15)); L1VALtmp(arg[2](28))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(19))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(20))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(17)(18)); L1VALtmp(arg[3](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(23))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(17)(21)); L1VALtmp(arg[4](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(25))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(26))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(17)(24)); L1VALtmp(arg[5](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(39))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(28))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(29))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(39); L1VALtcst(gl_print1(17)(27)); L1VALtmp(arg[6](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(40))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(40); L1VALtcst(gl_print1(17)(30)); L1VALtmp(arg[7](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(41); 0; )))); })), L1CMDapp(tmp(26); L1VALtcst(print7(16)(11)); L1VALtmp(arg[1](19)), L1VALtmp(arg[2](20)), L1VALtmp(arg[3](21)), L1VALtmp(arg[4](22)), L1VALtmp(arg[5](23)), L1VALtmp(arg[6](24)), L1VALtmp(arg[7](25))))), L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=println0(23); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(43))); lev=(4); lts=(tmp(43)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(35))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(36))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(43); L1VALtcst(gl_print1(17)(34)); L1VALstr(STRING_closed("\n")))))); })), L1CMDapp(tmp(42); L1VALtcst(println0(23)(33)); )))); })
function
println7_2377_(a3x1, a3x2, a3x3, a3x4, a3x5, a3x6, a3x7)
{
let xtmp26;
let xtmp42;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4389(line=372, offs=1) -- 4690(line=393, offs=16)
// L1DCLimpdecl(LIMPDECL@{hdc=print7(16); hag=HFARGnpats(-1; H0Pvar(x1(25)), H0Pvar(x2(26)), H0Pvar(x3(27)), H0Pvar(x4(28)), H0Pvar(x5(29)), H0Pvar(x6(30)), H0Pvar(x7(31))); def=Some(L1VALtmp(tmp(41))); lev=(4); lts=(arg[1](27), arg[2](28), arg[3](29), arg[4](30), arg[5](31), arg[6](32), arg[7](33), tmp(34), tmp(35), tmp(36), tmp(37), tmp(38), tmp(39), tmp(40), tmp(41)); hag_blk=L1BLKsome(L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany()), L1CMDpatck(L1PCKany())); def_blk=L1BLKsome(L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(13))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(14))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(17)(12)); L1VALtmp(arg[1](27))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(16))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(17))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(17)(15)); L1VALtmp(arg[2](28))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(19))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(20))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(17)(18)); L1VALtmp(arg[3](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(23))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(17)(21)); L1VALtmp(arg[4](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(25))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(26))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(17)(24)); L1VALtmp(arg[5](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(39))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(28))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(29))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(39); L1VALtcst(gl_print1(17)(27)); L1VALtmp(arg[6](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39))))})), L1CMDdcl(L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(40))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(40); L1VALtcst(gl_print1(17)(30)); L1VALtmp(arg[7](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40))))})), L1CMDblk(L1BLKsome(L1CMDtup(tmp(41); 0; )))); })
function
print7_993_(a4x1, a4x2, a4x3, a4x4, a4x5, a4x6, a4x7)
{
let xtmp34;
let xtmp35;
let xtmp36;
let xtmp37;
let xtmp38;
let xtmp39;
let xtmp40;
let xtmp41;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4488(line=386, offs=3) -- 4514(line=386, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(34))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(13))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(14))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(34); L1VALtcst(gl_print1(17)(12)); L1VALtmp(arg[1](27))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(34)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(34))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(13))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(14))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(14))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })));
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4517(line=387, offs=3) -- 4543(line=387, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(35))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(16))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(17))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(35); L1VALtcst(gl_print1(17)(15)); L1VALtmp(arg[2](28))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(35)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(35))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(16))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(17))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(17))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })));
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4546(line=388, offs=3) -- 4572(line=388, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(36))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(19))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(20))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(36); L1VALtcst(gl_print1(17)(18)); L1VALtmp(arg[3](29))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(19))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(20))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(20))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), })));
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4575(line=389, offs=3) -- 4601(line=389, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(37))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(23))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(37); L1VALtcst(gl_print1(17)(21)); L1VALtmp(arg[4](30))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(37)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(37))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(22))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(23))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(23))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })));
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4604(line=390, offs=3) -- 4630(line=390, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(38))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(25))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(26))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(38); L1VALtcst(gl_print1(17)(24)); L1VALtmp(arg[5](31))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(38)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(38))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(25))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(26))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(26))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), })));
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4633(line=391, offs=3) -- 4659(line=391, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(39))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(28))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(29))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(39); L1VALtcst(gl_print1(17)(27)); L1VALtmp(arg[6](32))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(28))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(29))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(29))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })));
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
xtmp39 = gl_print1_2233_(a4x6);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(39)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(39)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 4662(line=392, offs=3) -- 4688(line=392, offs=29)
// L1DCLvaldecl(LVALDECL@{, pat=H0Pnil(), def=Some(L1VALtmp(tmp(40))), def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })), L1CMDapp(tmp(40); L1VALtcst(gl_print1(17)(30)); L1VALtmp(arg[7](33))))), L1CMDpatck(L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)))), L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40))))})
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(31))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(gint_print_sint(21)(32))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// L1DCLimpdecl(LIMPDECL@{hdc=gint_print_sint(21); hag=; def=Some(L1VALfcst(XATS2JS_gint_print_sint(22))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 404(line=38, offs=1) -- 470(line=41, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_gint_print_sint(33), hdc=XATS2JS_gint_print_sint(22), })));
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
xtmp40 = gl_print1_2233_(a4x7);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(40)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(40)));
} // val(H0Pnil())
;
{
xtmp41 = [-1];;
}
;
return xtmp41;
} // function // print7(16)
;
xtmp26 = print7_993_(a3x1, a3x2, a3x3, a3x4, a3x5, a3x6, a3x7);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5485(line=453, offs=1) -- 5537(line=456, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=println0(23); hag=HFARGnpats(-1; ); def=Some(L1VALtmp(tmp(43))); lev=(4); lts=(tmp(43)); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDblk(L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(35))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(36))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })), L1CMDapp(tmp(43); L1VALtcst(gl_print1(17)(34)); L1VALstr(STRING_closed("\n")))))); })
function
println0_1733_()
{
let xtmp43;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// L1DCLimpdecl(LIMPDECL@{hdc=gl_print1(17); hag=; def=Some(L1VALtcst(g_print(18)(35))); lev=(5); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(36))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 8281(line=614, offs=1) -- 8317(line=615, offs=29)
// L1DCLimpdecl(LIMPDECL@{hdc=g_print(18); hag=; def=Some(L1VALtcst(string_print(19)(36))); lev=(6); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); }))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 628(line=56, offs=1) -- 747(line=65, offs=21)
// L1DCLimpdecl(LIMPDECL@{hdc=string_print(19); hag=; def=Some(L1VALfcst(XATS2JS_string_print(20))); lev=(7); lts=(); hag_blk=L1BLKsome(); def_blk=L1BLKsome(L1CMDdcl(L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), }))))); })
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 682(line=61, offs=1) -- 745(line=64, offs=31)
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })))
// L1DCLnone1(H0Cextern(#EXTERN; H0Cfundecl(FUN(FNKfn1); DECMODnone(); ; HFUNDECL@{nam=XATS2JS_string_print(32), hdc=XATS2JS_string_print(20), })));
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
xtmp43 = gl_print1_2233_("\n");
}
;
return xtmp43;
} // function // println0(23)
;
xtmp42 = println0_1733_();
}
;
return xtmp42;
} // function // println7(4)
;
xtmp18 = println7_2377_(xtmp14, "(", xtmp15, ", ", xtmp16, ") = ", xtmp17);
}
;
return xtmp18;
} // function // Functest(0)
;
xtmp12 = Functest_179_(ackermann_706_);
}
;
return xtmp12;
} // function // JS_Functest_main(15)


