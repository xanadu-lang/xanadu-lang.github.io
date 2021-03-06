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
XATS2JS_gflt_print_sflt
  (x0)
{
XATS2JS_g_print(x0);
return; // gint_print_sflt
}
function
XATS2JS_gflt_print_dflt
  (x0)
{
XATS2JS_g_print(x0);
return; // gint_print_dflt
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
JSBasics for Xats2js
*/
/* ****** ****** */
// HX-2020-11-09:
// Native arrays for Xats2js
/* ****** ****** */

function
XATS2JS_jsarray_size
  (xs)
{
  return ( xs.length );
}
function
XATS2JS_jsarray_length
  (xs)
{
  return ( xs.length );
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
  return ( xs[i0] = x0 );
}

/* ****** ****** */
//
// HX-2020-11-28:
// Native objmaps for Xats2js
//
/* ****** ****** */

function
XATS2JS_jsobjmap_keys
   (obj)
{
return Object.keys(obj);
} // XATS2JS_jsobjmap_keys

/* ****** ****** */

function
XATS2JS_jsobjmap_keyq
   (obj, key)
{
return obj.hasOwnProperty(key);
} // XATS2JS_jsobjmap_keyq

/* ****** ****** */

function
XATS2JS_jsobjmap_make_nil
  ()
{
  return {} ;
} // XATS2JS_jsobjmap_make_nil

/* ****** ****** */

function
XATS2JS_jsobjmap_search_opt
   (obj, key)
{
//
let itm0 = obj[key];
//
if(itm0===undefined)
{
  return XATS2JS_optn_vt_nil();
} else {
  return XATS2JS_optn_vt_cons(itm0);
} // end of [if]
//
} // [ XATS2JS_jsobjmap_search_opt ]

/* ****** ****** */

function
XATS2JS_jsobjmap_insert_any
   (obj, key, itm1)
{
  obj[key] = itm1; return;
} // [XATS2JS_jsobjmap_insert_any]

function
XATS2JS_jsobjmap_remove_any
   (obj, key)
{
  delete object[key]; return ;
} // [XATS2JS_jsobjmap_remove_any]

/* ****** ****** */

function
XATS2JS_jsobjmap_insert_opt
   (obj, key, itm1)
{
//
let itm0 = obj[key];
//
if(itm0===undefined)
{
  obj[key] = itm1;
  return XATS2JS_optn_vt_nil();
} else {
  obj[key] = itm1;
  return XATS2JS_optn_vt_cons(itm0);
} // end of [if]
//
} // [ XATS2JS_jsobjmap_insert_opt ]

function
XATS2JS_jsobjmap_remove_opt
   (obj, key)
{
//
let itm0 = obj[key];
//
if(itm0===undefined)
{
  return XATS2JS_optn_vt_nil();
} else {
  delete object[key];
  return XATS2JS_optn_vt_cons(itm0);
} // end of [if]
//
} // [ XATS2JS_jsobjmap_remove_opt ]

/* ****** ****** */

/* end of [XATS2JS_jsbasics.cats] */
// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 105(line=8, offs=1) -- 160(line=10, offs=27)
// L1DCLnone1(H0Cnone1(...))

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 239(line=18, offs=1) -- 311(line=24, offs=24)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 315(line=26, offs=1) -- 352(line=26, offs=38)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 387(line=31, offs=1) -- 480(line=39, offs=26)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 489(line=41, offs=1) -- 582(line=49, offs=26)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 586(line=51, offs=1) -- 623(line=52, offs=30)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 624(line=53, offs=1) -- 661(line=54, offs=30)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 768(line=64, offs=1) -- 816(line=66, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 900(line=74, offs=1) -- 950(line=76, offs=29)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 951(line=77, offs=1) -- 990(line=78, offs=32)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 999(line=80, offs=1) -- 1050(line=82, offs=29)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1051(line=83, offs=1) -- 1092(line=84, offs=34)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1121(line=87, offs=1) -- 1182(line=90, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1249(line=95, offs=1) -- 1312(line=98, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1313(line=99, offs=1) -- 1354(line=100, offs=34)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1363(line=102, offs=1) -- 1426(line=105, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1427(line=106, offs=1) -- 1468(line=107, offs=34)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1547(line=115, offs=1) -- 1618(line=119, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1619(line=120, offs=1) -- 1666(line=121, offs=40)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1701(line=126, offs=1) -- 1776(line=130, offs=37)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1777(line=131, offs=1) -- 1824(line=132, offs=40)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1859(line=137, offs=1) -- 1932(line=141, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 1941(line=143, offs=1) -- 2014(line=147, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2065(line=150, offs=1) -- 2114(line=151, offs=42)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2149(line=156, offs=1) -- 2240(line=162, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2308(line=167, offs=1) -- 2399(line=173, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2467(line=178, offs=1) -- 2558(line=184, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2626(line=189, offs=1) -- 2719(line=195, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2789(line=200, offs=1) -- 2882(line=206, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 2952(line=211, offs=1) -- 3045(line=217, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3046(line=218, offs=1) -- 3103(line=219, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3136(line=224, offs=1) -- 3242(line=231, offs=37)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3243(line=232, offs=1) -- 3300(line=233, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3333(line=238, offs=1) -- 3427(line=244, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3494(line=248, offs=1) -- 3588(line=254, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3658(line=259, offs=1) -- 3752(line=265, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3819(line=269, offs=1) -- 3913(line=275, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3914(line=276, offs=1) -- 3971(line=277, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 3980(line=279, offs=1) -- 4077(line=285, offs=39)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4078(line=286, offs=1) -- 4135(line=287, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4217(line=296, offs=1) -- 4271(line=298, offs=31)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4272(line=299, offs=1) -- 4315(line=300, offs=36)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4350(line=305, offs=1) -- 4408(line=307, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4409(line=308, offs=1) -- 4456(line=309, offs=40)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4468(line=312, offs=1) -- 4526(line=314, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4527(line=315, offs=1) -- 4574(line=316, offs=40)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4609(line=321, offs=1) -- 4668(line=323, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4669(line=324, offs=1) -- 4718(line=325, offs=42)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4727(line=327, offs=1) -- 4786(line=329, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4787(line=330, offs=1) -- 4836(line=331, offs=42)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4871(line=336, offs=1) -- 4941(line=338, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 4950(line=340, offs=1) -- 5020(line=342, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5029(line=344, offs=1) -- 5099(line=346, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5108(line=348, offs=1) -- 5179(line=350, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5188(line=352, offs=1) -- 5259(line=354, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5268(line=356, offs=1) -- 5339(line=358, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5343(line=360, offs=1) -- 5398(line=361, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5399(line=362, offs=1) -- 5454(line=363, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5455(line=364, offs=1) -- 5510(line=365, offs=48)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5511(line=366, offs=1) -- 5568(line=367, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5569(line=368, offs=1) -- 5626(line=369, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5627(line=370, offs=1) -- 5684(line=371, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5719(line=376, offs=1) -- 5790(line=378, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5791(line=379, offs=1) -- 5848(line=380, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5883(line=385, offs=1) -- 5954(line=387, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 5963(line=389, offs=1) -- 6034(line=391, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6043(line=393, offs=1) -- 6114(line=395, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6123(line=397, offs=1) -- 6194(line=399, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6198(line=401, offs=1) -- 6255(line=402, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6256(line=403, offs=1) -- 6313(line=404, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6314(line=405, offs=1) -- 6371(line=406, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6372(line=407, offs=1) -- 6429(line=408, offs=50)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6502(line=415, offs=1) -- 6622(line=425, offs=20)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6644(line=428, offs=1) -- 6761(line=437, offs=20)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6762(line=438, offs=1) -- 6882(line=447, offs=21)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 6904(line=450, offs=1) -- 7026(line=460, offs=18)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7027(line=461, offs=1) -- 7149(line=471, offs=18)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7150(line=472, offs=1) -- 7272(line=482, offs=18)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7293(line=484, offs=1) -- 7418(line=494, offs=19)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7419(line=495, offs=1) -- 7544(line=505, offs=19)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7545(line=506, offs=1) -- 7670(line=516, offs=19)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7691(line=518, offs=1) -- 7816(line=528, offs=19)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7837(line=530, offs=1) -- 7965(line=539, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 7986(line=541, offs=1) -- 8114(line=550, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8135(line=552, offs=1) -- 8265(line=561, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8286(line=563, offs=1) -- 8428(line=574, offs=22)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8449(line=576, offs=1) -- 8665(line=591, offs=8)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8712(line=593, offs=1) -- 8846(line=602, offs=24)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 8867(line=604, offs=1) -- 9021(line=614, offs=25)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9042(line=616, offs=1) -- 9253(line=630, offs=8)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/basics.dats: 9304(line=632, offs=1) -- 9515(line=646, offs=8)
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


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1082(line=75, offs=1) -- 1193(line=81, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1194(line=82, offs=1) -- 1310(line=88, offs=8)
function
XATS2JS_optn_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp20;
let xtmp21;
let xtmp22;
;
;
;
{
xtmp21 = 0;
do {
do {
if(0!==L1VALeval0(L1VALtmp(arg[1](17)))[0]) break;
xtmp21 = 1;
} while(false);
if(xtmp21 > 0 ) break;
do {
if(1!==L1VALeval0(L1VALtmp(arg[1](17)))[0]) break;
//L1PCKany();
xtmp21 = 2;
} while(false);
if(xtmp21 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp21) {
case 1:
{
xtmp20 = a1x2();
}
;
break;
case 2:
xtmp22 = L1VALeval0(L1VALtmp(arg[1](17)))[1];
{
xtmp20 = a1x3(xtmp22);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp20;
} // function // XATS2JS_optn_uncons_cfr(5)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1428(line=96, offs=1) -- 1489(line=99, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1498(line=101, offs=1) -- 1570(line=105, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1574(line=107, offs=1) -- 1621(line=108, offs=40)
function
XATS2JS_list_nil()
{
let xtmp23;
{
xtmp23 = [0];
}
;
return xtmp23;
} // function // XATS2JS_list_nil(6)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1622(line=109, offs=1) -- 1675(line=110, offs=46)
function
XATS2JS_list_cons(a1x1, a1x2)
{
let xtmp26;
;
;
{
xtmp26 = [1, a1x1, a1x2];
}
;
return xtmp26;
} // function // XATS2JS_list_cons(7)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1707(line=114, offs=1) -- 1838(line=122, offs=42)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 1839(line=123, offs=1) -- 1963(line=129, offs=8)
function
XATS2JS_list_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp30;
let xtmp31;
let xtmp32;
let xtmp33;
;
;
;
{
xtmp31 = 0;
do {
do {
if(0!==L1VALeval0(L1VALtmp(arg[1](27)))[0]) break;
xtmp31 = 1;
} while(false);
if(xtmp31 > 0 ) break;
do {
if(1!==L1VALeval0(L1VALtmp(arg[1](27)))[0]) break;
//L1PCKany();
//L1PCKany();
xtmp31 = 2;
} while(false);
if(xtmp31 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp31) {
case 1:
{
xtmp30 = a1x2();
}
;
break;
case 2:
xtmp32 = L1VALeval0(L1VALtmp(arg[1](27)))[1];
xtmp33 = L1VALeval0(L1VALtmp(arg[1](27)))[2];
{
xtmp30 = a1x3(xtmp32, xtmp33);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp30;
} // function // XATS2JS_list_uncons_cfr(8)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2083(line=137, offs=1) -- 2150(line=140, offs=37)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2159(line=142, offs=1) -- 2239(line=146, offs=41)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2243(line=148, offs=1) -- 2296(line=149, offs=46)
function
XATS2JS_strmcon_nil()
{
let xtmp34;
{
xtmp34 = [0];
}
;
return xtmp34;
} // function // XATS2JS_strmcon_nil(9)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2297(line=150, offs=1) -- 2356(line=151, offs=52)
function
XATS2JS_strmcon_cons(a1x1, a1x2)
{
let xtmp37;
;
;
{
xtmp37 = [1, a1x1, a1x2];
}
;
return xtmp37;
} // function // XATS2JS_strmcon_cons(10)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2694(line=176, offs=1) -- 2831(line=184, offs=44)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 2832(line=185, offs=1) -- 2972(line=191, offs=8)
function
XATS2JS_stream_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp41;
let xtmp42;
let xtmp43;
let xtmp44;
let xtmp45;
;
;
;
xtmp42 = XATS2JS_lazy_eval(a1x1);
{
xtmp43 = 0;
do {
do {
if(0!==xtmp42[0]) break;
xtmp43 = 1;
} while(false);
if(xtmp43 > 0 ) break;
do {
if(1!==xtmp42[0]) break;
//L1PCKany();
//L1PCKany();
xtmp43 = 2;
} while(false);
if(xtmp43 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp43) {
case 1:
{
xtmp41 = a1x2();
}
;
break;
case 2:
xtmp44 = xtmp42[1];
xtmp45 = xtmp42[2];
{
xtmp41 = a1x3(xtmp44, xtmp45);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp41;
} // function // XATS2JS_stream_uncons_cfr(11)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3042(line=194, offs=1) -- 3153(line=200, offs=44)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3154(line=201, offs=1) -- 3256(line=206, offs=8)
function
XATS2JS_streax_uncons_cfr(a1x1, a1x2)
{
let xtmp48;
let xtmp49;
let xtmp50;
let xtmp51;
let xtmp52;
;
;
xtmp49 = XATS2JS_lazy_eval(a1x1);
{
xtmp50 = 0;
do {
do {
if(0!==xtmp49[0]) break;
//L1PCKany();
//L1PCKany();
xtmp50 = 1;
} while(false);
if(xtmp50 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp50) {
case 1:
xtmp51 = xtmp49[1];
xtmp52 = xtmp49[2];
{
xtmp48 = a1x2(xtmp51, xtmp52);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp48;
} // function // XATS2JS_streax_uncons_cfr(12)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3379(line=214, offs=1) -- 3435(line=216, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3444(line=218, offs=1) -- 3506(line=220, offs=38)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3510(line=222, offs=1) -- 3555(line=223, offs=38)
function
XATS2JS_optn_vt_nil()
{
let xtmp53;
{
xtmp53 = [0];
}
;
return xtmp53;
} // function // XATS2JS_optn_vt_nil(13)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3556(line=224, offs=1) -- 3607(line=225, offs=44)
function
XATS2JS_optn_vt_cons(a1x1)
{
let xtmp55;
;
{
xtmp55 = [1, a1x1];
}
;
return xtmp55;
} // function // XATS2JS_optn_vt_cons(14)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3639(line=229, offs=1) -- 3756(line=235, offs=36)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 3757(line=236, offs=1) -- 3884(line=242, offs=8)
function
XATS2JS_optn_vt_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp59;
let xtmp60;
let xtmp61;
;
;
;
{
xtmp60 = 0;
do {
do {
if(0!==L1VALeval0(L1VALtmp(arg[1](56)))[0]) break;
xtmp60 = 1;
} while(false);
if(xtmp60 > 0 ) break;
do {
if(1!==L1VALeval0(L1VALtmp(arg[1](56)))[0]) break;
//L1PCKany();
xtmp60 = 2;
} while(false);
if(xtmp60 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp60) {
case 1:
{
xtmp59 = a1x2();
}
;
break;
case 2:
xtmp61 = L1VALeval0(L1VALtmp(arg[1](56)))[1];
{
xtmp59 = a1x3(xtmp61);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp59;
} // function // XATS2JS_optn_vt_uncons_cfr(15)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4008(line=250, offs=1) -- 4075(line=253, offs=37)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4084(line=255, offs=1) -- 4165(line=259, offs=42)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4169(line=261, offs=1) -- 4222(line=262, offs=46)
function
XATS2JS_list_vt_nil()
{
let xtmp62;
{
xtmp62 = [0];
}
;
return xtmp62;
} // function // XATS2JS_list_vt_nil(16)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4223(line=263, offs=1) -- 4282(line=264, offs=52)
function
XATS2JS_list_vt_cons(a1x1, a1x2)
{
let xtmp65;
;
;
{
xtmp65 = [1, a1x1, a1x2];
}
;
return xtmp65;
} // function // XATS2JS_list_vt_cons(17)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4314(line=268, offs=1) -- 4454(line=276, offs=45)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 4455(line=277, offs=1) -- 4590(line=283, offs=8)
function
XATS2JS_list_vt_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp69;
let xtmp70;
let xtmp71;
let xtmp72;
;
;
;
{
xtmp70 = 0;
do {
do {
if(0!==L1VALeval0(L1VALtmp(arg[1](66)))[0]) break;
xtmp70 = 1;
} while(false);
if(xtmp70 > 0 ) break;
do {
if(1!==L1VALeval0(L1VALtmp(arg[1](66)))[0]) break;
//L1PCKany();
//L1PCKany();
xtmp70 = 2;
} while(false);
if(xtmp70 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp70) {
case 1:
{
xtmp69 = a1x2();
}
;
break;
case 2:
xtmp71 = L1VALeval0(L1VALtmp(arg[1](66)))[1];
xtmp72 = L1VALeval0(L1VALtmp(arg[1](66)))[2];
{
xtmp69 = a1x3(xtmp71, xtmp72);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp69;
} // function // XATS2JS_list_vt_uncons_cfr(18)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 5049(line=312, offs=1) -- 5122(line=315, offs=40)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 5131(line=317, offs=1) -- 5220(line=321, offs=47)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 5224(line=323, offs=1) -- 5283(line=324, offs=52)
function
XATS2JS_strmcon_vt_nil()
{
let xtmp73;
{
xtmp73 = [0];
}
;
return xtmp73;
} // function // XATS2JS_strmcon_vt_nil(19)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 5284(line=325, offs=1) -- 5349(line=326, offs=58)
function
XATS2JS_strmcon_vt_cons(a1x1, a1x2)
{
let xtmp76;
;
;
{
xtmp76 = [1, a1x1, a1x2];
}
;
return xtmp76;
} // function // XATS2JS_strmcon_vt_cons(20)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 5381(line=330, offs=1) -- 5527(line=338, offs=47)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 5528(line=339, offs=1) -- 5679(line=345, offs=8)
function
XATS2JS_stream_vt_uncons_cfr(a1x1, a1x2, a1x3)
{
let xtmp80;
let xtmp81;
let xtmp82;
let xtmp83;
let xtmp84;
;
;
;
xtmp81 = XATS2JS_llazy_eval(a1x1);
{
xtmp82 = 0;
do {
do {
if(0!==xtmp81[0]) break;
xtmp82 = 1;
} while(false);
if(xtmp82 > 0 ) break;
do {
if(1!==xtmp81[0]) break;
//L1PCKany();
//L1PCKany();
xtmp82 = 2;
} while(false);
if(xtmp82 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp82) {
case 1:
{
xtmp80 = a1x2();
}
;
break;
case 2:
xtmp83 = xtmp81[1];
xtmp84 = xtmp81[2];
{
xtmp80 = a1x3(xtmp83, xtmp84);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp80;
} // function // XATS2JS_stream_vt_uncons_cfr(21)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 5752(line=348, offs=1) -- 5872(line=354, offs=47)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 5873(line=355, offs=1) -- 5982(line=360, offs=8)
function
XATS2JS_streax_vt_uncons_cfr(a1x1, a1x2)
{
let xtmp87;
let xtmp88;
let xtmp89;
let xtmp90;
let xtmp91;
;
;
xtmp88 = XATS2JS_llazy_eval(a1x1);
{
xtmp89 = 0;
do {
do {
if(0!==xtmp88[0]) break;
//L1PCKany();
//L1PCKany();
xtmp89 = 1;
} while(false);
if(xtmp89 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp89) {
case 1:
xtmp90 = xtmp88[1];
xtmp91 = xtmp88[2];
{
xtmp87 = a1x2(xtmp90, xtmp91);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp87;
} // function // XATS2JS_streax_vt_uncons_cfr(22)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6056(line=364, offs=1) -- 6171(line=369, offs=49)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6172(line=370, offs=1) -- 6306(line=379, offs=8)
function
XATS2JS_stream_vt_map0_cfr(a1x1, a1x2)
{
let xtmp94;
;
;
// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6266(line=378, offs=1) -- 6304(line=378, offs=39)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9181(line=740, offs=1) -- 9505(line=772, offs=8)
function
stream_vt_map0_4084_(a2x1)
{
let xtmp112;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9248(line=748, offs=1) -- 9503(line=771, offs=12)
function
auxmain_9251_(a3x1)
{
let xtmp97;
let xtmp110;
let xtmp111;
;
xtmp110 =
function()
{
let xtmp98;
let xtmp99;
let xtmp100;
let xtmp101;
let xtmp102;
let xtmp103;
let xtmp106;
let xtmp107;
let xtmp108;
xtmp99 = XATS2JS_llazy_eval(a3x1);
{
xtmp100 = 0;
do {
do {
if(0!==xtmp99[0]) break;
xtmp100 = 1;
} while(false);
if(xtmp100 > 0 ) break;
do {
if(1!==xtmp99[0]) break;
//L1PCKany();
//L1PCKany();
xtmp100 = 2;
} while(false);
if(xtmp100 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp100) {
case 1:
{
xtmp98 = [0];
}
;
break;
case 2:
xtmp101 = xtmp99[1];
xtmp102 = xtmp99[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9427(line=766, offs=3) -- 9459(line=767, offs=24)
{
{
// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6266(line=378, offs=1) -- 6304(line=378, offs=39)
function
map0$fopr_2343_(a5x1)
{
let xtmp105;
;
{
xtmp105 = a1x2(a5x1);
}
;
return xtmp105;
} // function // map0$fopr(24)
;
xtmp103 = map0$fopr_2343_(xtmp101);
}
;
;
} // val(H0Pvar(y0(95)))
;
{
{
xtmp107 = auxmain_9251_(xtmp102);
}
;
xtmp106 = [1, xtmp103, xtmp107];
}
;
xtmp98 = xtmp106;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp98;
} // lam-function
;
xtmp111 =
function()
{
let xtmp98;
let xtmp99;
let xtmp100;
let xtmp101;
let xtmp102;
let xtmp103;
let xtmp106;
let xtmp107;
let xtmp108;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(28)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp108 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp97 = XATS2JS_new_llazy(xtmp110,xtmp111);
return xtmp97;
} // function // auxmain(26)
;
{
xtmp112 = auxmain_9251_(a2x1);
}
;
return xtmp112;
} // function // stream_vt_map0(25)
;
xtmp94 = stream_vt_map0_4084_(a1x1);
}
;
return xtmp94;
} // function // XATS2JS_stream_vt_map0_cfr(23)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6379(line=384, offs=1) -- 6491(line=388, offs=51)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6492(line=389, offs=1) -- 6624(line=397, offs=8)
function
XATS2JS_stream_vt_filter0_cfr(a1x1, a1x2)
{
let xtmp115;
;
;
// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6585(line=396, offs=3) -- 6622(line=396, offs=40)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9886(line=809, offs=1) -- 10327(line=849, offs=8)
function
stream_vt_filter0_4286_(a2x1)
{
let xtmp133;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9959(line=817, offs=1) -- 10325(line=848, offs=8)
function
auxmain_9962_(a3x1)
{
let a3y1;
let xtmp118;
let xtmp122;
let xtmp123;
do {
;
xtmp122 =
function()
{
let xtmp119;
let xtmp120;
{
xtmp119 = auxloop_10056_(XATS2JS_llazy_eval(a3x1));
}
;
return xtmp119;
} // lam-function
;
xtmp123 =
function()
{
let xtmp119;
let xtmp120;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(28)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp120 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp118 = XATS2JS_new_llazy(xtmp122,xtmp123);
break;//return
} while( true );
return xtmp118;
} // function // auxmain(32)
function
auxloop_10056_(a3x1)
{
let a3y1;
let xtmp125;
let xtmp126;
let xtmp127;
let xtmp128;
let xtmp129;
let xtmp132;
do {
;
{
xtmp126 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp126 = 1;
} while(false);
if(xtmp126 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp126 = 2;
} while(false);
if(xtmp126 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp126) {
case 1:
{
xtmp125 = [0];
}
;
break;
case 2:
xtmp127 = a3x1[1];
xtmp128 = a3x1[2];
{
// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6585(line=396, offs=3) -- 6622(line=396, offs=40)
function
filter0$test_2547_(a4x1)
{
let xtmp131;
;
{
xtmp131 = a1x2(a4x1);
}
;
return xtmp131;
} // function // filter0$test(30)
;
xtmp129 = filter0$test_2547_(xtmp127);
}
;
if
(xtmp129)
// then
{
{
{
xtmp132 = auxmain_9962_(xtmp128);
}
;
xtmp125 = [1, xtmp127, xtmp132];
}
;
} // if-then
else
{
{
// tail-recursion:
// L1CMDapp(tmp(125); L1VALfcst(auxloop(33)); L1VALeval3(L1VALtmp(tmp(128))))
a3y1 = XATS2JS_llazy_eval(xtmp128); a3x1 = a3y1; continue;
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
return xtmp125;
} // function // auxloop(33)
;
{
xtmp133 = auxmain_9962_(a2x1);
}
;
return xtmp133;
} // function // stream_vt_filter0(31)
;
xtmp115 = stream_vt_filter0_4286_(a1x1);
}
;
return xtmp115;
} // function // XATS2JS_stream_vt_filter0_cfr(29)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6930(line=417, offs=1) -- 6992(line=422, offs=25)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7073(line=428, offs=1) -- 7142(line=433, offs=26)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7143(line=434, offs=1) -- 7196(line=436, offs=37)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7225(line=439, offs=1) -- 7288(line=443, offs=30)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7367(line=449, offs=1) -- 7442(line=454, offs=31)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7568(line=464, offs=1) -- 7657(line=470, offs=35)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7658(line=471, offs=1) -- 7711(line=473, offs=37)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7743(line=477, offs=1) -- 7834(line=483, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7902(line=489, offs=1) -- 7993(line=495, offs=33)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 7994(line=496, offs=1) -- 8049(line=498, offs=39)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 8084(line=503, offs=1) -- 8192(line=510, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 8193(line=511, offs=1) -- 8248(line=513, offs=39)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 8260(line=516, offs=1) -- 8368(line=523, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 8369(line=524, offs=1) -- 8424(line=526, offs=39)
// L1DCLnone0()

// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 8459(line=531, offs=1) -- 8572(line=538, offs=34)


// ./../../xanadu/prelude/DATS/CATS/JS/prelude.dats: 8573(line=539, offs=1) -- 8636(line=541, offs=47)
// L1DCLnone0()

/* ****** ****** */
{
document.title =
the_StreamDemo2_title();
}
//
{
let
myelmnt =
document.getElementById
("StreamDemo2_stream_name");
myelmnt.innerHTML =
the_StreamDemo2_stream_name();
}
//
{
let
myelmnt =
document.getElementById
("StreamDemo2_input_descript");
myelmnt.innerHTML =
the_StreamDemo2_input_descript();
}
//
/* ****** ****** */
function
the_StreamDemo2_display_update()
{
let
output =
XATS2JS_the_print_store_join();
XATS2JS_the_print_store_clear();
the_StreamDemo2_display.innerHTML = output;
}
let
the_StreamDemo2_display =
document.getElementById("StreamDemo2_display");
/* ****** ****** */
//
function
button_disable(button)
{
  button.disabled=true; return;
}
function
button_enable(button)
{
  button.disabled=false; return;
}
//
let
StreamDemo2_button_start =
document.getElementById("StreamDemo2_button_start");
let
StreamDemo2_button_reset =
document.getElementById("StreamDemo2_button_reset");
let
StreamDemo2_button_pause =
document.getElementById("StreamDemo2_button_pause");
let
StreamDemo2_button_next1 =
document.getElementById("StreamDemo2_button_next1");
let
StreamDemo2_button_prev1 =
document.getElementById("StreamDemo2_button_prev1");
let
StreamDemo2_button_resume =
document.getElementById("StreamDemo2_button_resume");
//
/* ****** ****** */
//
function
StreamDemo2_control_init()
{
button_enable(StreamDemo2_button_start);
button_enable(StreamDemo2_button_next1);
//
button_disable(StreamDemo2_button_reset);
button_disable(StreamDemo2_button_prev1);
button_disable(StreamDemo2_button_pause);
button_disable(StreamDemo2_button_resume);
//
} // end of [StreamDemo2_control_init]
//
{
let _void_ = StreamDemo2_control_init();
}
//
/* ****** ****** */

var
the_StreamDemo2_auto = 0;
var
the_StreamDemo2_delay = 100;

/* ****** ****** */

function
StreamDemo2_control_auto()
{
if
(the_StreamDemo2_auto > 0)
{
let opt =
the_StreamDemo2_next1();
the_StreamDemo2_xprint(opt);
the_StreamDemo2_display_update();
//
let
my_ftimeout = function()
{
if
(
false===
the_StreamDemo2_pauseq(opt)
)
{
  StreamDemo2_control_auto( );
}
else
{
  alert("StreamDemo2_Paused!");
  StreamDemo2_control_pause( );
}
} ; // end of [my_ftimeout]
setTimeout
(my_ftimeout, the_StreamDemo2_delay);
}
} // end of [StreamDemo2_control_auto]

/* ****** ****** */

function
StreamDemo2_control_start()
{
/*
alert("StreamDemo2_control_start");
*/
//
the_StreamDemo2_auto = 1;
StreamDemo2_control_auto();
//
button_enable(StreamDemo2_button_reset);
button_enable(StreamDemo2_button_pause);
//
button_disable(StreamDemo2_button_start);
button_disable(StreamDemo2_button_next1);
button_disable(StreamDemo2_button_prev1);
button_disable(StreamDemo2_button_resume);
//
} // end of [StreamDemo2_control_start]

/* ****** ****** */

function
StreamDemo2_control_reset()
{
/*
alert("StreamDemo2_control_reset");
*/
//
the_StreamDemo2_auto = 0;
//
let
text = "The stream is reset!";
XATS2JS_the_print_store_clear();
the_StreamDemo2_display.innerHTML = text;
//
let _void1_ = the_StreamDemo2_reset();
//
let _void2_ = StreamDemo2_control_init();
//
} // end of [StreamDemo2_control_reset]

/* ****** ****** */

function
StreamDemo2_control_pause()
{
/*
alert("StreamDemo2_control_pause");
*/
//
the_StreamDemo2_auto = 0;
//
button_enable(StreamDemo2_button_reset);
button_enable(StreamDemo2_button_next1);
button_enable(StreamDemo2_button_prev1);
button_enable(StreamDemo2_button_resume);
//
button_disable(StreamDemo2_button_pause);
//
} // end of [StreamDemo2_control_pause]

/* ****** ****** */

function
StreamDemo2_control_next1()
{
/*
alert("StreamDemo2_control_next1");
*/
//
let opt =
the_StreamDemo2_next1();
the_StreamDemo2_xprint(opt);
the_StreamDemo2_display_update();
//
button_enable(StreamDemo2_button_reset);
button_enable(StreamDemo2_button_prev1);
//
if
(
true===
the_StreamDemo2_pauseq(opt)
)
{
setTimeout
(function(){alert("StreamDemo2_Paused!");}, 0);
}
} // end of [StreamDemo2_control_next1]

/* ****** ****** */

function
StreamDemo2_control_prev1()
{
/*
alert("StreamDemo2_control_prev1");
*/
//
let opt =
the_StreamDemo2_prev1();
the_StreamDemo2_xprint(opt);
the_StreamDemo2_display_update();
//
button_enable(StreamDemo2_button_reset);
button_enable(StreamDemo2_button_next1);
//
} // end of [StreamDemo2_control_prev1]

/* ****** ****** */

function
StreamDemo2_control_resume()
{
/*
alert("StreamDemo2_control_resume");
*/
//
the_StreamDemo2_auto = 1;
StreamDemo2_control_auto();
//
button_enable(StreamDemo2_button_reset);
button_enable(StreamDemo2_button_pause);
//
button_disable(StreamDemo2_button_next1);
button_disable(StreamDemo2_button_prev1);
button_disable(StreamDemo2_button_resume);
//
} // end of [StreamDemo2_control_resume]

/* ****** ****** */

/* end of [StreamDemo2.cats] */
var xtop0;
var xtop93;
// ./Fibonacci.dats: 21(line=2, offs=1) -- 73(line=4, offs=29)
// { // include
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 114(line=8, offs=1) -- 151(line=8, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 172(line=10, offs=1) -- 209(line=10, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 210(line=11, offs=1) -- 247(line=11, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 268(line=13, offs=1) -- 305(line=13, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 306(line=14, offs=1) -- 343(line=14, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 344(line=15, offs=1) -- 381(line=15, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 402(line=17, offs=1) -- 439(line=17, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 440(line=18, offs=1) -- 477(line=18, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 478(line=19, offs=1) -- 515(line=19, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 516(line=20, offs=1) -- 553(line=20, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 574(line=22, offs=1) -- 612(line=22, offs=39)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 613(line=23, offs=1) -- 652(line=23, offs=40)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 673(line=25, offs=1) -- 710(line=25, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 711(line=26, offs=1) -- 748(line=26, offs=38)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 749(line=27, offs=1) -- 788(line=27, offs=40)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 809(line=29, offs=1) -- 847(line=29, offs=39)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 868(line=31, offs=1) -- 908(line=31, offs=41)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 929(line=33, offs=1) -- 969(line=33, offs=41)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 970(line=34, offs=1) -- 1010(line=34, offs=41)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1011(line=35, offs=1) -- 1053(line=35, offs=43)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1074(line=37, offs=1) -- 1113(line=37, offs=40)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1134(line=39, offs=1) -- 1175(line=39, offs=42)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1199(line=42, offs=1) -- 1246(line=42, offs=48)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1250(line=44, offs=1) -- 1297(line=44, offs=48)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1301(line=46, offs=1) -- 1349(line=46, offs=49)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1353(line=48, offs=1) -- 1401(line=48, offs=49)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1405(line=50, offs=1) -- 1453(line=50, offs=49)
// L1DCLnone1(H0Cnone1(...))
// /home/hwxi/Research/xanadu-lang/xats2js/share/xats2js_prelude.hats: 1457(line=52, offs=1) -- 1506(line=52, offs=50)
// L1DCLnone1(H0Cnone1(...))
// } // end-of-include


// ./Fibonacci.dats: 102(line=7, offs=1) -- 138(line=8, offs=24)
// L1DCLnone1(H0Cnone1(...))

// ./Fibonacci.dats: 147(line=10, offs=1) -- 185(line=11, offs=25)
// L1DCLnone1(H0Cnone1(...))

// ./Fibonacci.dats: 206(line=13, offs=1) -- 250(line=15, offs=33)
// L1DCLnone1(H0Cnone1(...))

// ./Fibonacci.dats: 251(line=16, offs=1) -- 296(line=17, offs=37)
// L1DCLnone1(H0Cnone1(...))

// ./Fibonacci.dats: 297(line=18, offs=1) -- 342(line=19, offs=37)
// L1DCLnone1(H0Cnone1(...))

// ./Fibonacci.dats: 363(line=21, offs=1) -- 387(line=21, offs=25)
// L1DCLnone1(H0Cnone1(...))

// ./Fibonacci.dats: 408(line=23, offs=1) -- 465(line=25, offs=26)
// L1DCLnone0()

// ./Fibonacci.dats: 486(line=27, offs=1) -- 555(line=29, offs=32)
// L1DCLnone0()

// ./Fibonacci.dats: 556(line=30, offs=1) -- 660(line=32, offs=64)
// L1DCLnone0()

// ./Fibonacci.dats: 681(line=34, offs=1) -- 816(line=42, offs=26)
// L1DCLnone0()

// ./Fibonacci.dats: 873(line=44, offs=1) -- 978(line=51, offs=8)
// L1DCLnone0()

// ./Fibonacci.dats: 999(line=53, offs=1) -- 1040(line=54, offs=34)
// L1DCLnone0()

// ./Fibonacci.dats: 1061(line=56, offs=1) -- 1104(line=56, offs=44)
// { // include
// ./../../../StreamDemo2/StreamDemo2_.dats
// ././../../../StreamDemo2/StreamDemo2_.dats: 332(line=20, offs=1) -- 388(line=22, offs=31)

// ././../../../StreamDemo2/StreamDemo2_.dats: 397(line=24, offs=1) -- 459(line=26, offs=37)

// ././../../../StreamDemo2/StreamDemo2_.dats: 468(line=28, offs=1) -- 530(line=30, offs=37)

// ././../../../StreamDemo2/StreamDemo2_.dats: 565(line=35, offs=1) -- 623(line=37, offs=33)

// ././../../../StreamDemo2/StreamDemo2_.dats: 632(line=39, offs=1) -- 696(line=41, offs=33)

// ././../../../StreamDemo2/StreamDemo2_.dats: 705(line=43, offs=1) -- 772(line=45, offs=33)

// ././../../../StreamDemo2/StreamDemo2_.dats: 807(line=50, offs=1) -- 871(line=52, offs=38)

// ././../../../StreamDemo2/StreamDemo2_.dats: 883(line=55, offs=1) -- 947(line=57, offs=38)

// ././../../../StreamDemo2/StreamDemo2_.dats: 971(line=60, offs=1) -- 1332(line=81, offs=6)
// { // local
// ././../../../StreamDemo2/StreamDemo2_.dats: 979(line=61, offs=3) -- 1048(line=64, offs=35)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2255(line=188, offs=1) -- 2442(line=205, offs=8)
function
StreamDemo_make_121_(a1x1)
{
let xtmp2;
let xtmp6;
let xtmp7;
let xtmp11;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2303(line=193, offs=1) -- 2328(line=194, offs=22)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 243(line=22, offs=1) -- 304(line=26, offs=20)
function
a0ref_make_2308_(a2x1)
{
let xtmp4;
let xtmp5;
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
a0ptr_make_2347_ = XATS2JS_a0ptr_make
;
xtmp5 = a0ptr_make_2347_(a2x1);
}
;
xtmp4 = XATS2JS_fcast(xtmp5);
}
;
return xtmp4;
} // function // a0ref_make(18)
;
xtmp2 = a0ref_make_2308_(0);
}
;
;
} // val(H0Pvar(mydir(19)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2332(line=196, offs=1) -- 2381(line=198, offs=25)
// L1DCLnone0();
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 243(line=22, offs=1) -- 304(line=26, offs=20)
function
a0ref_make_2308_(a2x1)
{
let xtmp9;
let xtmp10;
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
a0ptr_make_2347_ = XATS2JS_a0ptr_make
;
xtmp10 = a0ptr_make_2347_(a2x1);
}
;
xtmp9 = XATS2JS_fcast(xtmp10);
}
;
return xtmp9;
} // function // a0ref_make(18)
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 217(line=13, offs=1) -- 2065(line=172, offs=8)
function
StreamDemo_moves_673_(a2x1)
{
let xtmp90;
let xtmp91;
let xtmp92;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 364(line=29, offs=1) -- 1001(line=85, offs=6)
function
aux0_367_(a3x1, a3x2)
{
let xtmp15;
let xtmp43;
;
;
xtmp43 =
function()
{
let xtmp16;
let xtmp18;
let xtmp19;
let xtmp20;
let xtmp21;
let xtmp22;
let xtmp23;
let xtmp24;
let xtmp25;
let xtmp26;
let xtmp27;
let xtmp28;
let xtmp29;
let xtmp30;
let xtmp31;
let xtmp32;
let xtmp33;
let xtmp34;
let xtmp35;
let xtmp36;
let xtmp37;
let xtmp38;
let xtmp39;
let xtmp40;
let xtmp41;
let xtmp42;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 434(line=37, offs=1) -- 462(line=38, offs=19)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2332(line=196, offs=1) -- 2381(line=198, offs=25)
function
StreamDemo$dir_637_()
{
let xtmp17;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp17 = a0ref_get_2457_(xtmp2);
}
;
return xtmp17;
} // function // StreamDemo$dir(22)
;
xtmp16 = StreamDemo$dir_637_();
}
;
;
} // val(H0Pvar(dir(25)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp19 = gint_eq_sint_sint_2293_(xtmp16, 0);
}
;
if
(xtmp19)
// then
{
{
xtmp20 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp20 = 1;
} while(false);
if(xtmp20 > 0 ) break;
do {
if(1!==a3x2[0]) break;
//L1PCKany();
//L1PCKany();
xtmp20 = 2;
} while(false);
if(xtmp20 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp20) {
case 1:
{
{
xtmp21 = [0];
}
;
{
xtmp22 = aux0_367_(a3x1, a3x2);
}
;
xtmp18 = [0, xtmp21, xtmp22];
}
;
break;
case 2:
xtmp23 = a3x2[1];
{
{
xtmp24 = [1, xtmp23];
}
;
{
xtmp25 = aux0_367_(a3x1, a3x2);
}
;
xtmp18 = [0, xtmp24, xtmp25];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
xtmp26 = gint_gt_sint_sint_2209_(xtmp16, 0);
}
;
if
(xtmp26)
// then
{
{
xtmp27 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp27 = 1;
} while(false);
if(xtmp27 > 0 ) break;
do {
if(1!==a3x2[0]) break;
//L1PCKany();
//L1PCKany();
xtmp27 = 2;
} while(false);
if(xtmp27 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp27) {
case 1:
{
{
xtmp28 = [0];
}
;
{
xtmp29 = aux0_367_(a3x1, a3x2);
}
;
xtmp18 = [0, xtmp28, xtmp29];
}
;
break;
case 2:
xtmp30 = a3x2[1];
xtmp31 = a3x2[2];
{
{
xtmp32 = [1, xtmp30];
}
;
{
{
xtmp34 = [1, xtmp30, a3x1];
}
;
xtmp33 = aux0_367_(xtmp34, xtmp31);
}
;
xtmp18 = [0, xtmp32, xtmp33];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
} // if-then
else
{
{
xtmp35 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp35 = 1;
} while(false);
if(xtmp35 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp35 = 2;
} while(false);
if(xtmp35 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp35) {
case 1:
{
{
xtmp36 = [0];
}
;
{
xtmp37 = aux0_367_(a3x1, a3x2);
}
;
xtmp18 = [0, xtmp36, xtmp37];
}
;
break;
case 2:
xtmp38 = a3x1[1];
xtmp39 = a3x1[2];
{
{
xtmp40 = [1, xtmp38];
}
;
{
{
xtmp42 = [1, xtmp38, a3x2];
}
;
xtmp41 = aux0_367_(xtmp39, xtmp42);
}
;
xtmp18 = [0, xtmp40, xtmp41];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
} // if-else
;
} // if-else
;
return xtmp18;
} // lam-function
;
xtmp15 = XATS2JS_new_lazy(xtmp43);
return xtmp15;
} // function // aux0(25)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 1047(line=87, offs=1) -- 2016(line=170, offs=6)
function
aux1_1050_(a3x1, a3x2, a3x3)
{
let xtmp47;
let xtmp89;
;
;
;
xtmp89 =
function()
{
let xtmp48;
let xtmp50;
let xtmp51;
let xtmp52;
let xtmp53;
let xtmp54;
let xtmp55;
let xtmp56;
let xtmp57;
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
let xtmp77;
let xtmp78;
let xtmp79;
let xtmp80;
let xtmp81;
let xtmp82;
let xtmp83;
let xtmp84;
let xtmp85;
let xtmp86;
let xtmp87;
let xtmp88;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 1134(line=97, offs=1) -- 1162(line=98, offs=19)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2332(line=196, offs=1) -- 2381(line=198, offs=25)
function
StreamDemo$dir_637_()
{
let xtmp49;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp49 = a0ref_get_2457_(xtmp2);
}
;
return xtmp49;
} // function // StreamDemo$dir(22)
;
xtmp48 = StreamDemo$dir_637_();
}
;
;
} // val(H0Pvar(dir(38)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp51 = gint_eq_sint_sint_2293_(xtmp48, 0);
}
;
if
(xtmp51)
// then
{
{
xtmp52 = 0;
do {
do {
if(1!==a3x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp52 = 1;
} while(false);
if(xtmp52 > 0 ) break;
do {
if(0!==a3x3[0]) break;
xtmp52 = 2;
} while(false);
if(xtmp52 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp52) {
case 1:
xtmp53 = a3x3[1];
{
{
xtmp54 = [1, xtmp53];
}
;
{
xtmp55 = aux1_1050_(a3x1, a3x2, a3x3);
}
;
xtmp50 = [0, xtmp54, xtmp55];
}
;
break;
case 2:
xtmp56 = XATS2JS_lazy_eval(a3x1);
{
xtmp57 = 0;
do {
do {
if(0!==xtmp56[0]) break;
xtmp57 = 1;
} while(false);
if(xtmp57 > 0 ) break;
do {
if(1!==xtmp56[0]) break;
//L1PCKany();
//L1PCKany();
xtmp57 = 2;
} while(false);
if(xtmp57 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp57) {
case 1:
{
{
xtmp58 = [0];
}
;
{
xtmp59 = aux0_367_(a3x2, a3x3);
}
;
xtmp50 = [0, xtmp58, xtmp59];
}
;
break;
case 2:
xtmp60 = xtmp56[1];
xtmp61 = xtmp56[2];
{
{
xtmp62 = [1, xtmp60];
}
;
{
{
xtmp64 = [1, xtmp60, a3x3];
}
;
xtmp63 = aux1_1050_(xtmp61, a3x2, xtmp64);
}
;
xtmp50 = [0, xtmp62, xtmp63];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
xtmp65 = gint_gt_sint_sint_2209_(xtmp48, 0);
}
;
if
(xtmp65)
// then
{
{
xtmp66 = 0;
do {
do {
if(0!==a3x3[0]) break;
xtmp66 = 1;
} while(false);
if(xtmp66 > 0 ) break;
do {
if(1!==a3x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp66 = 2;
} while(false);
if(xtmp66 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp66) {
case 1:
xtmp67 = XATS2JS_lazy_eval(a3x1);
{
xtmp68 = 0;
do {
do {
if(0!==xtmp67[0]) break;
xtmp68 = 1;
} while(false);
if(xtmp68 > 0 ) break;
do {
if(1!==xtmp67[0]) break;
//L1PCKany();
//L1PCKany();
xtmp68 = 2;
} while(false);
if(xtmp68 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp68) {
case 1:
{
{
xtmp69 = [0];
}
;
{
xtmp70 = aux0_367_(a3x2, a3x3);
}
;
xtmp50 = [0, xtmp69, xtmp70];
}
;
break;
case 2:
xtmp71 = xtmp67[1];
xtmp72 = xtmp67[2];
{
{
xtmp73 = [1, xtmp71];
}
;
{
{
xtmp75 = [1, xtmp71, a3x2];
}
;
xtmp74 = aux1_1050_(xtmp72, xtmp75, a3x3);
}
;
xtmp50 = [0, xtmp73, xtmp74];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;
case 2:
xtmp76 = a3x3[1];
xtmp77 = a3x3[2];
{
{
xtmp78 = [1, xtmp76];
}
;
{
{
xtmp80 = [1, xtmp76, a3x2];
}
;
xtmp79 = aux1_1050_(a3x1, xtmp80, xtmp77);
}
;
xtmp50 = [0, xtmp78, xtmp79];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
} // if-then
else
{
{
xtmp81 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp81 = 1;
} while(false);
if(xtmp81 > 0 ) break;
do {
if(1!==a3x2[0]) break;
//L1PCKany();
//L1PCKany();
xtmp81 = 2;
} while(false);
if(xtmp81 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp81) {
case 1:
{
{
xtmp82 = [0];
}
;
{
xtmp83 = aux1_1050_(a3x1, a3x2, a3x3);
}
;
xtmp50 = [0, xtmp82, xtmp83];
}
;
break;
case 2:
xtmp84 = a3x2[1];
xtmp85 = a3x2[2];
{
{
xtmp86 = [1, xtmp84];
}
;
{
{
xtmp88 = [1, xtmp84, a3x3];
}
;
xtmp87 = aux1_1050_(a3x1, xtmp85, xtmp88);
}
;
xtmp50 = [0, xtmp86, xtmp87];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
} // if-else
;
} // if-else
;
return xtmp50;
} // lam-function
;
xtmp47 = XATS2JS_new_lazy(xtmp89);
return xtmp47;
} // function // aux1(31)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 268(line=19, offs=1) -- 307(line=22, offs=16)
{
{
xtmp90 = [0];
}
;
;
} // val(H0Pvar(ys(49)))
{
{
xtmp91 = [0];
}
;
;
} // val(H0Pvar(zs(50)))
;
{
xtmp92 = aux1_1050_(a2x1, xtmp90, xtmp91);
}
;
return xtmp92;
} // function // StreamDemo_moves(24)
;
xtmp11 = StreamDemo_moves_673_(a1x1);
}
;
xtmp7 = a0ref_make_2308_(xtmp11);
}
;
xtmp6 = [-1, xtmp2, xtmp7];;
}
;
return xtmp6;
} // function // StreamDemo_make(17)
;
{
// ./Fibonacci.dats: 681(line=34, offs=1) -- 816(line=42, offs=26)
function
StreamDemo2_stream_626_()
{
let xtmp101;
// ./Fibonacci.dats: 744(line=38, offs=1) -- 814(line=41, offs=41)
function
fibo_747_(a2x1, a2x2)
{
let xtmp96;
let xtmp100;
;
;
xtmp100 =
function()
{
let xtmp97;
let xtmp98;
let xtmp99;
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp99 = gint_add_sint_sint_3439_(a2x1, a2x2);
}
;
xtmp98 = fibo_747_(a2x2, xtmp99);
}
;
xtmp97 = [1, a2x1, xtmp98];
}
;
return xtmp97;
} // lam-function
;
xtmp96 = XATS2JS_new_lazy(xtmp100);
return xtmp96;
} // function // fibo(4)
;
{
xtmp101 = fibo_747_(0, 1);
}
;
return xtmp101;
} // function // StreamDemo2_stream(3)
;
xtop93 = StreamDemo2_stream_626_();
}
;
xtop0 = StreamDemo_make_121_(xtop93);
}
;
;
} // val(H0Pvar(the_demo(17)))

// in-of-local
// ././../../../StreamDemo2/StreamDemo2_.dats: 1090(line=68, offs=1) -- 1159(line=70, offs=40)
function
the_StreamDemo2_reset()
{
let xtmp102;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2980(line=247, offs=1) -- 3240(line=263, offs=8)
function
StreamDemo_reset_433_(a2x1)
{
let xtmp114;
let xtmp118;
let xtmp119;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3093(line=255, offs=1) -- 3221(line=262, offs=5)
function
loop_3096_(a3x1)
{
let xtmp105;
let xtmp112;
let xtmp113;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3120(line=258, offs=1) -- 3154(line=258, offs=35)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2497(line=209, offs=1) -- 2701(line=224, offs=15)
function
StreamDemo_get_elt_202_(a4x1)
{
let xtmp107;
let xtmp108;
let xtmp109;
let xtmp110;
let xtmp111;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2553(line=214, offs=1) -- 2583(line=215, offs=23)
// L1DCLnone1(H0Cnone1(...));
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2587(line=217, offs=1) -- 2619(line=218, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp107 = a0ref_get_2457_(a4x1[2]);
}
;
;
} // val(H0Pvar(xs(56)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2620(line=219, offs=1) -- 2651(line=220, offs=27)
{
xtmp108 = XATS2JS_lazy_eval(xtmp107);
if(0!==xtmp108[0]) XATS2JS_patckerr0();
;
xtmp109 = xtmp108[1];
xtmp110 = xtmp108[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(4)); -1; H0Pvar(x0(57)), H0Pvar(xs(58))))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2652(line=221, offs=1) -- 2688(line=222, offs=28)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp111 = a0ref_set_2496_(a4x1[2], xtmp110);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(111)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(111)));
} // val(H0Pnil())
;
return xtmp109;
} // function // StreamDemo_get_elt(35)
;
xtmp105 = StreamDemo_get_elt_202_(a3x1);
}
;
;
} // val(H0Pvar(opt(54)))
;
{
xtmp113 = 0;
do {
do {
if(0!==xtmp105[0]) break;
xtmp113 = 1;
} while(false);
if(xtmp113 > 0 ) break;
do {
if(1!==xtmp105[0]) break;
xtmp113 = 2;
} while(false);
if(xtmp113 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp113) {
case 1:
{
xtmp112 = [-1];;
}
;
break;
case 2:
{
xtmp112 = loop_3096_(a3x1);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp112;
} // function // loop(34)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3028(line=251, offs=1) -- 3066(line=252, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2827(line=234, offs=1) -- 2914(line=240, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp117;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp117 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp117;
} // function // StreamDemo_set_dir(38)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp118 = gint_sub_sint_sint_3524_(0, 1);
}
;
xtmp114 = StreamDemo_set_dir_343_(a2x1, xtmp118);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(114)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(114)));
} // val(H0Pnil())
;
{
xtmp119 = loop_3096_(a2x1);
}
;
return xtmp119;
} // function // StreamDemo_reset(33)
;
xtmp102 = StreamDemo_reset_433_(xtop0);
}
;
return xtmp102;
} // function // the_StreamDemo2_reset(9)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1163(line=72, offs=1) -- 1232(line=74, offs=40)
function
the_StreamDemo2_next1()
{
let xtmp120;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3304(line=267, offs=1) -- 3422(line=273, offs=8)
function
StreamDemo_next1_492_(a2x1)
{
let xtmp122;
let xtmp126;
let xtmp127;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3352(line=271, offs=1) -- 3390(line=272, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2827(line=234, offs=1) -- 2914(line=240, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp125;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp125 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp125;
} // function // StreamDemo_set_dir(38)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp126 = gint_add_sint_sint_3439_(0, 1);
}
;
xtmp122 = StreamDemo_set_dir_343_(a2x1, xtmp126);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(122)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(122)));
} // val(H0Pnil())
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2497(line=209, offs=1) -- 2701(line=224, offs=15)
function
StreamDemo_get_elt_202_(a3x1)
{
let xtmp129;
let xtmp130;
let xtmp131;
let xtmp132;
let xtmp133;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2553(line=214, offs=1) -- 2583(line=215, offs=23)
// L1DCLnone1(H0Cnone1(...));
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2587(line=217, offs=1) -- 2619(line=218, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp129 = a0ref_get_2457_(a3x1[2]);
}
;
;
} // val(H0Pvar(xs(56)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2620(line=219, offs=1) -- 2651(line=220, offs=27)
{
xtmp130 = XATS2JS_lazy_eval(xtmp129);
if(0!==xtmp130[0]) XATS2JS_patckerr0();
;
xtmp131 = xtmp130[1];
xtmp132 = xtmp130[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(4)); -1; H0Pvar(x0(57)), H0Pvar(xs(58))))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2652(line=221, offs=1) -- 2688(line=222, offs=28)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp133 = a0ref_set_2496_(a3x1[2], xtmp132);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(133)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(133)));
} // val(H0Pnil())
;
return xtmp131;
} // function // StreamDemo_get_elt(35)
;
xtmp127 = StreamDemo_get_elt_202_(a2x1);
}
;
return xtmp127;
} // function // StreamDemo_next1(41)
;
xtmp120 = StreamDemo_next1_492_(xtop0);
}
;
return xtmp120;
} // function // the_StreamDemo2_next1(10)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1236(line=76, offs=1) -- 1305(line=78, offs=40)
function
the_StreamDemo2_prev1()
{
let xtmp134;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3426(line=275, offs=1) -- 3544(line=281, offs=8)
function
StreamDemo_prev1_554_(a2x1)
{
let xtmp136;
let xtmp140;
let xtmp141;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3474(line=279, offs=1) -- 3512(line=280, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2827(line=234, offs=1) -- 2914(line=240, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp139;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp139 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp139;
} // function // StreamDemo_set_dir(38)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp140 = gint_sub_sint_sint_3524_(0, 1);
}
;
xtmp136 = StreamDemo_set_dir_343_(a2x1, xtmp140);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(136)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(136)));
} // val(H0Pnil())
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2497(line=209, offs=1) -- 2701(line=224, offs=15)
function
StreamDemo_get_elt_202_(a3x1)
{
let xtmp143;
let xtmp144;
let xtmp145;
let xtmp146;
let xtmp147;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2553(line=214, offs=1) -- 2583(line=215, offs=23)
// L1DCLnone1(H0Cnone1(...));
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2587(line=217, offs=1) -- 2619(line=218, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp143 = a0ref_get_2457_(a3x1[2]);
}
;
;
} // val(H0Pvar(xs(56)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2620(line=219, offs=1) -- 2651(line=220, offs=27)
{
xtmp144 = XATS2JS_lazy_eval(xtmp143);
if(0!==xtmp144[0]) XATS2JS_patckerr0();
;
xtmp145 = xtmp144[1];
xtmp146 = xtmp144[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(4)); -1; H0Pvar(x0(57)), H0Pvar(xs(58))))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2652(line=221, offs=1) -- 2688(line=222, offs=28)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp147 = a0ref_set_2496_(a3x1[2], xtmp146);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(147)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(147)));
} // val(H0Pnil())
;
return xtmp145;
} // function // StreamDemo_get_elt(35)
;
xtmp141 = StreamDemo_get_elt_202_(a2x1);
}
;
return xtmp141;
} // function // StreamDemo_prev1(42)
;
xtmp134 = StreamDemo_prev1_554_(xtop0);
}
;
return xtmp134;
} // function // the_StreamDemo2_prev1(11)

// } // end-of-local

// ././../../../StreamDemo2/StreamDemo2_.dats: 1371(line=83, offs=1) -- 1426(line=84, offs=48)
function
the_StreamDemo2_title()
{
let xtmp148;
{
// ./Fibonacci.dats: 408(line=23, offs=1) -- 465(line=25, offs=26)
function
StreamDemo2_title_170_()
{
return "StreamDemo2-Fibonacci";
} // function // StreamDemo2_title(0)
;
xtmp148 = StreamDemo2_title_170_();
}
;
return xtmp148;
} // function // the_StreamDemo2_title(12)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1427(line=85, offs=1) -- 1494(line=86, offs=60)
function
the_StreamDemo2_stream_name()
{
let xtmp149;
{
// ./Fibonacci.dats: 486(line=27, offs=1) -- 555(line=29, offs=32)
function
StreamDemo2_stream_name_307_()
{
return "Enumerating Fibonacci Numbers";
} // function // StreamDemo2_stream_name(1)
;
xtmp149 = StreamDemo2_stream_name_307_();
}
;
return xtmp149;
} // function // the_StreamDemo2_stream_name(13)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1495(line=87, offs=1) -- 1568(line=88, offs=66)
function
the_StreamDemo2_input_descript()
{
let xtmp150;
{
// ./Fibonacci.dats: 556(line=30, offs=1) -- 660(line=32, offs=64)
function
StreamDemo2_input_descript_462_()
{
return "The stream of Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, ...";
} // function // StreamDemo2_input_descript(2)
;
xtmp150 = StreamDemo2_input_descript_462_();
}
;
return xtmp150;
} // function // the_StreamDemo2_input_descript(14)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1589(line=90, offs=1) -- 1652(line=91, offs=56)
function
the_StreamDemo2_pauseq(a1x1)
{
let xtmp152;
;
{
// ./Fibonacci.dats: 999(line=53, offs=1) -- 1040(line=54, offs=34)
function
StreamDemo2_pauseq_710_(a2x1)
{
;
return false;
} // function // StreamDemo2_pauseq(8)
;
xtmp152 = StreamDemo2_pauseq_710_(a1x1);
}
;
return xtmp152;
} // function // the_StreamDemo2_pauseq(15)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1653(line=92, offs=1) -- 1716(line=93, offs=56)
function
the_StreamDemo2_xprint(a1x1)
{
let xtmp155;
;
{
// ./Fibonacci.dats: 873(line=44, offs=1) -- 978(line=51, offs=8)
function
StreamDemo2_xprint_849_(a2x1)
{
let xtmp157;
let xtmp158;
let xtmp159;
;
{
xtmp158 = 0;
do {
do {
if(0!==a2x1[0]) break;
xtmp158 = 1;
} while(false);
if(xtmp158 > 0 ) break;
do {
if(1!==a2x1[0]) break;
//L1PCKany();
xtmp158 = 2;
} while(false);
if(xtmp158 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp158) {
case 1:
{
xtmp157 = [-1];;
}
;
break;
case 2:
xtmp159 = a2x1[1];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3264(line=268, offs=1) -- 3332(line=273, offs=17)
function
print_1_409_(a3x1)
{
let xtmp161;
let xtmp162;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3304(line=272, offs=3) -- 3330(line=272, offs=29)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 825(line=82, offs=1) -- 865(line=84, offs=26)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 412(line=39, offs=1) -- 470(line=41, offs=31)
;
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
xtmp161 = gl_print1_2233_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(161)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(161)));
} // val(H0Pnil())
;
{
xtmp162 = [-1];;
}
;
return xtmp162;
} // function // print_1(7)
;
xtmp157 = print_1_409_(xtmp159);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp157;
} // function // StreamDemo2_xprint(6)
;
xtmp155 = StreamDemo2_xprint_849_(a1x1);
}
;
return xtmp155;
} // function // the_StreamDemo2_xprint(16)

// } // end-of-include


