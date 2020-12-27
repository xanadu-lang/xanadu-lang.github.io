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
XATS2JS_string_length
  (cs)
{
  return (cs.length);
}
//
function
XATS2JS_string_vt_length
  (cs)
{
// HX: skipping
// the ending null char
  return (cs.length - 1);
}
function
XATS2JS_string_vt_length1
  (cs)
{
// HX: skipping
// the ending null char
  return (cs.length - 1);
}
//
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
len = cs.length-1;
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
len = cs.length-1;
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
function
XATS2JS_jsobj_get_at
  (obj, key)
{
  return obj[ key ];
}
function
XATS2JS_jsobj_set_at
  (obj, key, itm)
{
  return (obj[key] = itm);
}
/* ****** ****** */
// HX-2020-11-09:
// Native arrays for Xats2js
/* ****** ****** */

function
XATS2JS_jsarray_size
  ( xs )
{
  return ( xs.length );
}
function
XATS2JS_jsarray_length
  ( xs )
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
// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 105(line=8, offs=1) -- 160(line=10, offs=27)
// L1DCLnone1(H0Cnone1(...))

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 239(line=18, offs=1) -- 311(line=24, offs=24)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 315(line=26, offs=1) -- 352(line=26, offs=38)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 387(line=31, offs=1) -- 480(line=39, offs=26)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 489(line=41, offs=1) -- 582(line=49, offs=26)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 586(line=51, offs=1) -- 623(line=52, offs=30)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 624(line=53, offs=1) -- 661(line=54, offs=30)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 768(line=64, offs=1) -- 816(line=66, offs=24)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 900(line=74, offs=1) -- 950(line=76, offs=29)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 951(line=77, offs=1) -- 990(line=78, offs=32)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 999(line=80, offs=1) -- 1050(line=82, offs=29)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1051(line=83, offs=1) -- 1092(line=84, offs=34)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1121(line=87, offs=1) -- 1182(line=90, offs=30)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1249(line=95, offs=1) -- 1312(line=98, offs=30)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1313(line=99, offs=1) -- 1354(line=100, offs=34)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1363(line=102, offs=1) -- 1426(line=105, offs=30)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1427(line=106, offs=1) -- 1468(line=107, offs=34)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1547(line=115, offs=1) -- 1618(line=119, offs=33)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1619(line=120, offs=1) -- 1666(line=121, offs=40)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1701(line=126, offs=1) -- 1776(line=130, offs=37)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1777(line=131, offs=1) -- 1824(line=132, offs=40)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1859(line=137, offs=1) -- 1932(line=141, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1941(line=143, offs=1) -- 2014(line=147, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2065(line=150, offs=1) -- 2114(line=151, offs=42)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2149(line=156, offs=1) -- 2240(line=162, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2308(line=167, offs=1) -- 2399(line=173, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2467(line=178, offs=1) -- 2558(line=184, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2626(line=189, offs=1) -- 2719(line=195, offs=35)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2789(line=200, offs=1) -- 2882(line=206, offs=35)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2952(line=211, offs=1) -- 3045(line=217, offs=35)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3046(line=218, offs=1) -- 3103(line=219, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3136(line=224, offs=1) -- 3242(line=231, offs=37)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3243(line=232, offs=1) -- 3300(line=233, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3333(line=238, offs=1) -- 3427(line=244, offs=36)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3494(line=248, offs=1) -- 3588(line=254, offs=36)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3658(line=259, offs=1) -- 3752(line=265, offs=36)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3819(line=269, offs=1) -- 3913(line=275, offs=36)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3914(line=276, offs=1) -- 3971(line=277, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3980(line=279, offs=1) -- 4077(line=285, offs=39)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4078(line=286, offs=1) -- 4135(line=287, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4217(line=296, offs=1) -- 4271(line=298, offs=31)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4272(line=299, offs=1) -- 4315(line=300, offs=36)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4350(line=305, offs=1) -- 4408(line=307, offs=33)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4409(line=308, offs=1) -- 4456(line=309, offs=40)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4468(line=312, offs=1) -- 4526(line=314, offs=33)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4527(line=315, offs=1) -- 4574(line=316, offs=40)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4609(line=321, offs=1) -- 4668(line=323, offs=33)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4669(line=324, offs=1) -- 4718(line=325, offs=42)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4727(line=327, offs=1) -- 4786(line=329, offs=33)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4787(line=330, offs=1) -- 4836(line=331, offs=42)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4871(line=336, offs=1) -- 4941(line=338, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 4950(line=340, offs=1) -- 5020(line=342, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5029(line=344, offs=1) -- 5099(line=346, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5108(line=348, offs=1) -- 5179(line=350, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5188(line=352, offs=1) -- 5259(line=354, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5268(line=356, offs=1) -- 5339(line=358, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5343(line=360, offs=1) -- 5398(line=361, offs=48)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5399(line=362, offs=1) -- 5454(line=363, offs=48)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5455(line=364, offs=1) -- 5510(line=365, offs=48)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5511(line=366, offs=1) -- 5568(line=367, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5569(line=368, offs=1) -- 5626(line=369, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5627(line=370, offs=1) -- 5684(line=371, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5719(line=376, offs=1) -- 5790(line=378, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5791(line=379, offs=1) -- 5848(line=380, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5883(line=385, offs=1) -- 5954(line=387, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 5963(line=389, offs=1) -- 6034(line=391, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6043(line=393, offs=1) -- 6114(line=395, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6123(line=397, offs=1) -- 6194(line=399, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6198(line=401, offs=1) -- 6255(line=402, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6256(line=403, offs=1) -- 6313(line=404, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6314(line=405, offs=1) -- 6371(line=406, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6372(line=407, offs=1) -- 6429(line=408, offs=50)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6502(line=415, offs=1) -- 6622(line=425, offs=20)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6644(line=428, offs=1) -- 6761(line=437, offs=20)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6762(line=438, offs=1) -- 6882(line=447, offs=21)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6904(line=450, offs=1) -- 7026(line=460, offs=18)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7027(line=461, offs=1) -- 7149(line=471, offs=18)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7150(line=472, offs=1) -- 7272(line=482, offs=18)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7293(line=484, offs=1) -- 7418(line=494, offs=19)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7419(line=495, offs=1) -- 7544(line=505, offs=19)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7545(line=506, offs=1) -- 7670(line=516, offs=19)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7691(line=518, offs=1) -- 7816(line=528, offs=19)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7837(line=530, offs=1) -- 7965(line=539, offs=24)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7986(line=541, offs=1) -- 8114(line=550, offs=24)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8135(line=552, offs=1) -- 8265(line=561, offs=24)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8286(line=563, offs=1) -- 8410(line=572, offs=22)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8414(line=574, offs=1) -- 8551(line=583, offs=25)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8552(line=584, offs=1) -- 8692(line=593, offs=26)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8716(line=596, offs=1) -- 8858(line=607, offs=22)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8879(line=609, offs=1) -- 9095(line=624, offs=8)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9142(line=626, offs=1) -- 9276(line=635, offs=24)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9297(line=637, offs=1) -- 9451(line=647, offs=25)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9472(line=649, offs=1) -- 9703(line=664, offs=8)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9754(line=666, offs=1) -- 9985(line=681, offs=8)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 67(line=6, offs=1) -- 122(line=8, offs=27)
// L1DCLnone1(H0Cnone1(...))

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 143(line=10, offs=1) -- 183(line=11, offs=27)
// L1DCLnone1(H0Cnone1(...))

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 184(line=12, offs=1) -- 227(line=13, offs=30)
// L1DCLnone1(H0Cnone1(...))

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 385(line=25, offs=1) -- 453(line=30, offs=24)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 462(line=32, offs=1) -- 534(line=37, offs=27)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 543(line=39, offs=1) -- 617(line=44, offs=27)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 621(line=46, offs=1) -- 666(line=47, offs=38)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 667(line=48, offs=1) -- 714(line=49, offs=40)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 715(line=50, offs=1) -- 764(line=51, offs=42)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 846(line=60, offs=1) -- 896(line=62, offs=30)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 905(line=64, offs=1) -- 961(line=66, offs=35)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 965(line=68, offs=1) -- 1004(line=69, offs=32)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1005(line=70, offs=1) -- 1050(line=71, offs=38)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1082(line=75, offs=1) -- 1193(line=81, offs=36)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1194(line=82, offs=1) -- 1310(line=88, offs=8)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1428(line=96, offs=1) -- 1489(line=99, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1498(line=101, offs=1) -- 1570(line=105, offs=36)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1574(line=107, offs=1) -- 1621(line=108, offs=40)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1622(line=109, offs=1) -- 1675(line=110, offs=46)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1707(line=114, offs=1) -- 1838(line=122, offs=42)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 1839(line=123, offs=1) -- 1963(line=129, offs=8)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 2083(line=137, offs=1) -- 2150(line=140, offs=37)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 2159(line=142, offs=1) -- 2239(line=146, offs=41)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 2243(line=148, offs=1) -- 2296(line=149, offs=46)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 2297(line=150, offs=1) -- 2356(line=151, offs=52)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 2694(line=176, offs=1) -- 2831(line=184, offs=44)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 2832(line=185, offs=1) -- 2972(line=191, offs=8)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 3042(line=194, offs=1) -- 3153(line=200, offs=44)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 3154(line=201, offs=1) -- 3256(line=206, offs=8)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 3379(line=214, offs=1) -- 3435(line=216, offs=33)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 3444(line=218, offs=1) -- 3506(line=220, offs=38)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 3510(line=222, offs=1) -- 3555(line=223, offs=38)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 3556(line=224, offs=1) -- 3607(line=225, offs=44)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 3639(line=229, offs=1) -- 3756(line=235, offs=36)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 3757(line=236, offs=1) -- 3884(line=242, offs=8)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 4008(line=250, offs=1) -- 4075(line=253, offs=37)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 4084(line=255, offs=1) -- 4165(line=259, offs=42)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 4169(line=261, offs=1) -- 4222(line=262, offs=46)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 4223(line=263, offs=1) -- 4282(line=264, offs=52)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 4314(line=268, offs=1) -- 4454(line=276, offs=45)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 4455(line=277, offs=1) -- 4590(line=283, offs=8)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 5049(line=312, offs=1) -- 5122(line=315, offs=40)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 5131(line=317, offs=1) -- 5220(line=321, offs=47)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 5224(line=323, offs=1) -- 5283(line=324, offs=52)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 5284(line=325, offs=1) -- 5349(line=326, offs=58)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 5381(line=330, offs=1) -- 5527(line=338, offs=47)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 5528(line=339, offs=1) -- 5679(line=345, offs=8)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 5752(line=348, offs=1) -- 5872(line=354, offs=47)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 5873(line=355, offs=1) -- 5982(line=360, offs=8)
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6056(line=364, offs=1) -- 6171(line=369, offs=49)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6172(line=370, offs=1) -- 6306(line=379, offs=8)
function
XATS2JS_stream_vt_map0_cfr(a1x1, a1x2)
{
let xtmp94;
;
;
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6266(line=378, offs=1) -- 6304(line=378, offs=39)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9195(line=744, offs=1) -- 9519(line=776, offs=8)
function
stream_vt_map0_4084_(a2x1)
{
let xtmp112;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9262(line=752, offs=1) -- 9517(line=775, offs=12)
function
auxmain_9265_(a3x1)
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9441(line=770, offs=3) -- 9473(line=771, offs=24)
{
{
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6266(line=378, offs=1) -- 6304(line=378, offs=39)
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
xtmp107 = auxmain_9265_(xtmp102);
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
xtmp112 = auxmain_9265_(a2x1);
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6379(line=384, offs=1) -- 6491(line=388, offs=51)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6492(line=389, offs=1) -- 6624(line=397, offs=8)
function
XATS2JS_stream_vt_filter0_cfr(a1x1, a1x2)
{
let xtmp115;
;
;
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6585(line=396, offs=3) -- 6622(line=396, offs=40)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9900(line=813, offs=1) -- 10341(line=853, offs=8)
function
stream_vt_filter0_4286_(a2x1)
{
let xtmp133;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9973(line=821, offs=1) -- 10339(line=852, offs=8)
function
auxmain_9976_(a3x1)
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
xtmp119 = auxloop_10070_(XATS2JS_llazy_eval(a3x1));
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
auxloop_10070_(a3x1)
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
// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6585(line=396, offs=3) -- 6622(line=396, offs=40)
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
xtmp132 = auxmain_9976_(xtmp128);
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
xtmp133 = auxmain_9976_(a2x1);
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


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6930(line=417, offs=1) -- 6992(line=422, offs=25)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7073(line=428, offs=1) -- 7142(line=433, offs=26)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7143(line=434, offs=1) -- 7196(line=436, offs=37)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7225(line=439, offs=1) -- 7288(line=443, offs=30)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7367(line=449, offs=1) -- 7442(line=454, offs=31)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7568(line=464, offs=1) -- 7657(line=470, offs=35)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7658(line=471, offs=1) -- 7711(line=473, offs=37)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7743(line=477, offs=1) -- 7834(line=483, offs=33)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7902(line=489, offs=1) -- 7993(line=495, offs=33)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7994(line=496, offs=1) -- 8049(line=498, offs=39)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 8084(line=503, offs=1) -- 8192(line=510, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 8193(line=511, offs=1) -- 8248(line=513, offs=39)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 8260(line=516, offs=1) -- 8368(line=523, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 8369(line=524, offs=1) -- 8424(line=526, offs=39)
// L1DCLnone0()

// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 8459(line=531, offs=1) -- 8572(line=538, offs=34)


// ./../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 8573(line=539, offs=1) -- 8636(line=541, offs=47)
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
var xtop132;
var xtop225;
// ./HanoiTower.dats: 65(line=6, offs=1) -- 117(line=8, offs=29)
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


// ./HanoiTower.dats: 216(line=16, offs=1) -- 241(line=16, offs=26)
// L1DCLnone1(H0Cnone1(...))

// ./HanoiTower.dats: 316(line=24, offs=1) -- 1117(line=87, offs=39)
function
move12_319_(a1x1, a1x2)
{
let xtmp2;
let xtmp3;
let xtmp4;
let xtmp5;
let xtmp6;
let xtmp7;
let xtmp8;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp3 = gint_lte_sint_sint_2380_(a1x1, 0);
}
;
if
(xtmp3)
// then
{
xtmp2 = a1x2;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp4 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
{
{
xtmp6 = [-1, 1, 2];;
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp8 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
xtmp7 = move13_453_(xtmp8, a1x2);
}
;
xtmp5 = [1, xtmp6, xtmp7];
}
;
xtmp2 = move32_988_(xtmp4, xtmp5);
}
;
} // if-else
;
return xtmp2;
} // function // move12(0)
function
move13_453_(a1x1, a1x2)
{
let xtmp11;
let xtmp12;
let xtmp13;
let xtmp14;
let xtmp15;
let xtmp16;
let xtmp17;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp12 = gint_lte_sint_sint_2380_(a1x1, 0);
}
;
if
(xtmp12)
// then
{
xtmp11 = a1x2;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp13 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
{
{
xtmp15 = [-1, 1, 3];;
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp17 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
xtmp16 = move12_319_(xtmp17, a1x2);
}
;
xtmp14 = [1, xtmp15, xtmp16];
}
;
xtmp11 = move23_720_(xtmp13, xtmp14);
}
;
} // if-else
;
return xtmp11;
} // function // move13(5)
function
move21_587_(a1x1, a1x2)
{
let xtmp20;
let xtmp21;
let xtmp22;
let xtmp23;
let xtmp24;
let xtmp25;
let xtmp26;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp21 = gint_lte_sint_sint_2380_(a1x1, 0);
}
;
if
(xtmp21)
// then
{
xtmp20 = a1x2;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp22 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
{
{
xtmp24 = [-1, 2, 1];;
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp26 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
xtmp25 = move23_720_(xtmp26, a1x2);
}
;
xtmp23 = [1, xtmp24, xtmp25];
}
;
xtmp20 = move31_854_(xtmp22, xtmp23);
}
;
} // if-else
;
return xtmp20;
} // function // move21(6)
function
move23_720_(a1x1, a1x2)
{
let xtmp29;
let xtmp30;
let xtmp31;
let xtmp32;
let xtmp33;
let xtmp34;
let xtmp35;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp30 = gint_lte_sint_sint_2380_(a1x1, 0);
}
;
if
(xtmp30)
// then
{
xtmp29 = a1x2;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp31 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
{
{
xtmp33 = [-1, 2, 3];;
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp35 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
xtmp34 = move21_587_(xtmp35, a1x2);
}
;
xtmp32 = [1, xtmp33, xtmp34];
}
;
xtmp29 = move13_453_(xtmp31, xtmp32);
}
;
} // if-else
;
return xtmp29;
} // function // move23(7)
function
move31_854_(a1x1, a1x2)
{
let xtmp38;
let xtmp39;
let xtmp40;
let xtmp41;
let xtmp42;
let xtmp43;
let xtmp44;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp39 = gint_lte_sint_sint_2380_(a1x1, 0);
}
;
if
(xtmp39)
// then
{
xtmp38 = a1x2;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp40 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
{
{
xtmp42 = [-1, 3, 1];;
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp44 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
xtmp43 = move32_988_(xtmp44, a1x2);
}
;
xtmp41 = [1, xtmp42, xtmp43];
}
;
xtmp38 = move21_587_(xtmp40, xtmp41);
}
;
} // if-else
;
return xtmp38;
} // function // move31(8)
function
move32_988_(a1x1, a1x2)
{
let xtmp47;
let xtmp48;
let xtmp49;
let xtmp50;
let xtmp51;
let xtmp52;
let xtmp53;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp48 = gint_lte_sint_sint_2380_(a1x1, 0);
}
;
if
(xtmp48)
// then
{
xtmp47 = a1x2;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp49 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
{
{
xtmp51 = [-1, 3, 2];;
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp53 = gint_sub_sint_sint_3524_(a1x1, 1);
}
;
xtmp52 = move31_854_(xtmp53, a1x2);
}
;
xtmp50 = [1, xtmp51, xtmp52];
}
;
xtmp47 = move12_319_(xtmp49, xtmp50);
}
;
} // if-else
;
return xtmp47;
} // function // move32(9)


// ./HanoiTower.dats: 1142(line=91, offs=1) -- 1226(line=94, offs=40)
function
HanoiTower_play_1145_(a1x1)
{
let xtmp55;
let xtmp69;
let xtmp70;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 3350(line=297, offs=1) -- 3428(line=303, offs=8)
function
list_reverse_3062_(a2x1)
{
let xtmp57;
let xtmp68;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 2768(line=246, offs=1) -- 3006(line=267, offs=8)
function
list_rappend_2835_(a3x1, a3x2)
{
let xtmp67;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 2840(line=254, offs=1) -- 3004(line=266, offs=5)
function
loop_2843_(a4x1, a4x2)
{
let a4y1;
let a4y2;
let xtmp62;
let xtmp63;
let xtmp64;
let xtmp65;
let xtmp66;
do {
;
;
{
xtmp63 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp63 = 1;
} while(false);
if(xtmp63 > 0 ) break;
do {
if(1!==a4x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp63 = 2;
} while(false);
if(xtmp63 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp63) {
case 1:
xtmp62 = a4x2;
break;
case 2:
xtmp64 = a4x1[1];
xtmp65 = a4x1[2];
{
{
xtmp66 = [1, xtmp64, a4x2];
}
;
// tail-recursion:
// L1CMDapp(tmp(62); L1VALfcst(loop(13)); L1VALtmp(tmp(65)), L1VALtmp(tmp(66)))
a4y1 = xtmp65; a4y2 = xtmp66; a4x1 = a4y1; a4x2 = a4y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp62;
} // function // loop(13)
;
{
xtmp67 = loop_2843_(a3x1, a3x2);
}
;
return xtmp67;
} // function // list_rappend(12)
;
{
xtmp68 = [0];
}
;
xtmp57 = list_rappend_2835_(a2x1, xtmp68);
}
;
return xtmp57;
} // function // list_reverse(11)
;
{
{
xtmp70 = [0];
}
;
xtmp69 = move12_319_(a1x1, xtmp70);
}
;
xtmp55 = list_reverse_3062_(xtmp69);
}
;
return xtmp55;
} // function // HanoiTower_play(10)


// ./HanoiTower.dats: 1378(line=102, offs=9) -- 1383(line=102, offs=14)
// L1DCLnone1(H0Cnone1(...))

// ./HanoiTower.dats: 1412(line=105, offs=1) -- 1448(line=106, offs=24)
// L1DCLnone1(H0Cnone1(...))

// ./HanoiTower.dats: 1457(line=108, offs=1) -- 1495(line=109, offs=25)
// L1DCLnone1(H0Cnone1(...))

// ./HanoiTower.dats: 1516(line=111, offs=1) -- 1560(line=113, offs=33)
// L1DCLnone1(H0Cnone1(...))

// ./HanoiTower.dats: 1561(line=114, offs=1) -- 1606(line=115, offs=37)
// L1DCLnone1(H0Cnone1(...))

// ./HanoiTower.dats: 1607(line=116, offs=1) -- 1652(line=117, offs=37)
// L1DCLnone1(H0Cnone1(...))

// ./HanoiTower.dats: 1684(line=121, offs=1) -- 1716(line=123, offs=18)


// ./HanoiTower.dats: 1740(line=126, offs=1) -- 1797(line=130, offs=14)
// L1DCLnone1(H0Cnone1(...))

// ./HanoiTower.dats: 1938(line=144, offs=1) -- 2060(line=156, offs=12)
function
disc_get_at_1941_(a1x1, a1x2)
{
let xtmp73;
let xtmp82;
let xtmp83;
let xtmp84;
let xtmp96;
let xtmp97;
;
;
// ./HanoiTower.dats: 1995(line=150, offs=1) -- 2014(line=151, offs=16)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1262(line=119, offs=1) -- 1463(line=137, offs=8)
function
list_length_2365_(a2x1)
{
let xtmp81;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1328(line=127, offs=1) -- 1461(line=136, offs=5)
function
loop_1331_(a3x1, a3x2)
{
let a3y1;
let a3y2;
let xtmp77;
let xtmp78;
let xtmp79;
let xtmp80;
do {
;
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
xtmp77 = a3x2;
break;
case 2:
xtmp79 = a3x1[2];
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp80 = gint_add_sint_sint_3439_(a3x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(77); L1VALfcst(loop(17)); L1VALtmp(tmp(79)), L1VALtmp(tmp(80)))
a3y1 = xtmp79; a3y2 = xtmp80; a3x1 = a3y1; a3x2 = a3y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp77;
} // function // loop(17)
;
{
xtmp81 = loop_1331_(a2x1, 0);
}
;
return xtmp81;
} // function // list_length(16)
;
xtmp73 = list_length_2365_(a1x1);
}
;
;
} // val(H0Pvar(n0(34)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp84 = gint_add_sint_sint_3439_(xtmp73, a1x2);
}
;
xtmp83 = gint_lt_sint_sint_2125_(xtmp84, 8);
}
;
if
(xtmp83)
// then
{
xtmp82 = 0;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1517(line=141, offs=1) -- 1755(line=164, offs=8)
function
list_get_at_2442_(a2x1, a2x2)
{
let xtmp95;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1588(line=149, offs=1) -- 1730(line=163, offs=5)
function
loop_1591_(a3x1, a3x2)
{
let a3y1;
let a3y2;
let xtmp89;
let xtmp90;
let xtmp91;
let xtmp92;
let xtmp93;
let xtmp94;
do {
;
;
{
xtmp90 = 0;
do {
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp90 = 1;
} while(false);
if(xtmp90 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp90) {
case 1:
xtmp91 = a3x1[1];
xtmp92 = a3x1[2];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
xtmp93 = gint_gt_sint_sint_2209_(a3x2, 0);
}
;
if
(xtmp93)
// then
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2065(line=150, offs=1) -- 2114(line=151, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_pred_sint_1913_ = XATS2JS_gint_pred_sint
;
xtmp94 = gint_pred_sint_1913_(a3x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(89); L1VALfcst(loop(23)); L1VALtmp(tmp(92)), L1VALtmp(tmp(94)))
a3y1 = xtmp92; a3y2 = xtmp94; a3x1 = a3y1; a3x2 = a3y2; continue;
}
;
} // if-then
else
{
xtmp89 = xtmp91;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp89;
} // function // loop(23)
;
{
xtmp95 = loop_1591_(a2x1, a2x2);
}
;
return xtmp95;
} // function // list_get_at(22)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp97 = gint_add_sint_sint_3439_(xtmp73, a1x2);
}
;
xtmp96 = gint_sub_sint_sint_3524_(xtmp97, 8);
}
;
xtmp82 = list_get_at_2442_(a1x1, xtmp96);
}
;
} // if-else
;
return xtmp82;
} // function // disc_get_at(15)


// ./HanoiTower.dats: 2064(line=158, offs=1) -- 2352(line=188, offs=11)
function
print_disc_2067_(a1x1)
{
let xtmp114;
let xtmp115;
let xtmp116;
;
// ./HanoiTower.dats: 2101(line=162, offs=1) -- 2207(line=173, offs=17)
function
auxl_2104_(a2x1)
{
let xtmp100;
let xtmp101;
let xtmp102;
let xtmp103;
let xtmp104;
let xtmp105;
let xtmp106;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp101 = gint_lt_sint_sint_2125_(a2x1, 8);
}
;
if
(xtmp101)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp104 = gint_add_sint_sint_3439_(a1x1, a2x1);
}
;
xtmp103 = gint_lt_sint_sint_2125_(xtmp104, 8);
}
;
if
(xtmp103)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 264(line=26, offs=1) -- 315(line=28, offs=29)
;
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
xtmp102 = char_print_1631_(XATS2JS_char(' '));
}
;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 264(line=26, offs=1) -- 315(line=28, offs=29)
;
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
xtmp102 = char_print_1631_(XATS2JS_char('@'));
}
;
} // if-else
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp106 = gint_add_sint_sint_3439_(a2x1, 1);
}
;
xtmp105 = auxl_2104_(xtmp106);
}
;
xtmp100 = xtmp105;
} // if-then
else
{
} // if-else
;
return xtmp100;
} // function // auxl(29)
;
// ./HanoiTower.dats: 2208(line=174, offs=1) -- 2312(line=185, offs=17)
function
auxr_2211_(a2x1)
{
let xtmp108;
let xtmp109;
let xtmp110;
let xtmp111;
let xtmp112;
let xtmp113;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp109 = gint_lt_sint_sint_2125_(a2x1, 8);
}
;
if
(xtmp109)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp111 = gint_lt_sint_sint_2125_(a2x1, a1x1);
}
;
if
(xtmp111)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 264(line=26, offs=1) -- 315(line=28, offs=29)
;
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
xtmp110 = char_print_1631_(XATS2JS_char('@'));
}
;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 206(line=20, offs=1) -- 317(line=29, offs=19)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 264(line=26, offs=1) -- 315(line=28, offs=29)
;
// } // val-binding
const // implval/fun
char_print_1631_ = XATS2JS_char_print
;
xtmp110 = char_print_1631_(XATS2JS_char(' '));
}
;
} // if-else
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp113 = gint_add_sint_sint_3439_(a2x1, 1);
}
;
xtmp112 = auxr_2211_(xtmp113);
}
;
xtmp108 = xtmp112;
} // if-then
else
{
} // if-else
;
return xtmp108;
} // function // auxr(32)
;
{
xtmp114 = auxl_2104_(0);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp115 = string_print_4753_("|");
}
;
{
xtmp116 = auxr_2211_(0);
}
;
return xtmp116;
} // function // print_disc(28)


// ./HanoiTower.dats: 2379(line=190, offs=1) -- 2617(line=209, offs=12)
function
print_item_1687_(a1x1)
{
let xtmp131;
;
// ./HanoiTower.dats: 2428(line=195, offs=1) -- 2615(line=208, offs=26)
function
loop_2431_(a2x1)
{
let xtmp119;
let xtmp120;
let xtmp121;
let xtmp122;
let xtmp123;
let xtmp124;
let xtmp125;
let xtmp126;
let xtmp127;
let xtmp129;
let xtmp130;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp120 = gint_lt_sint_sint_2125_(a2x1, 8);
}
;
if
(xtmp120)
// then
{
{
{
xtmp122 = disc_get_at_1941_(a1x1[1], a2x1);
}
;
xtmp121 = print_disc_2067_(xtmp122);
}
;
{
{
xtmp124 = disc_get_at_1941_(a1x1[2], a2x1);
}
;
xtmp123 = print_disc_2067_(xtmp124);
}
;
{
{
xtmp126 = disc_get_at_1941_(a1x1[3], a2x1);
}
;
xtmp125 = print_disc_2067_(xtmp126);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 5533(line=453, offs=1) -- 5586(line=456, offs=26)
function
println_0_1752_()
{
let xtmp128;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/string.dats: 9579(line=715, offs=1) -- 9615(line=716, offs=29)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp128 = gl_print1_2233_("\n");
}
;
return xtmp128;
} // function // println_0(36)
;
xtmp127 = println_0_1752_();
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp130 = gint_add_sint_sint_3439_(a2x1, 1);
}
;
xtmp129 = loop_2431_(xtmp130);
}
;
xtmp119 = xtmp129;
} // if-then
else
{
} // if-else
;
return xtmp119;
} // function // loop(35)
;
{
xtmp131 = loop_2431_(0);
}
;
return xtmp131;
} // function // print_item(14)


// ./HanoiTower.dats: 2667(line=212, offs=1) -- 2725(line=214, offs=27)
// L1DCLnone0()

// ./HanoiTower.dats: 2746(line=216, offs=1) -- 2822(line=218, offs=39)
// L1DCLnone0()

// ./HanoiTower.dats: 2823(line=219, offs=1) -- 2926(line=221, offs=63)
// L1DCLnone0()

// ./HanoiTower.dats: 2947(line=223, offs=1) -- 3870(line=308, offs=8)
// L1DCLnone0()

// ./HanoiTower.dats: 3928(line=312, offs=1) -- 4038(line=319, offs=8)
// L1DCLnone0()

// ./HanoiTower.dats: 4039(line=320, offs=1) -- 4160(line=327, offs=8)
// L1DCLnone0()

// ./HanoiTower.dats: 4182(line=330, offs=1) -- 4225(line=330, offs=44)
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
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2182(line=184, offs=1) -- 2369(line=201, offs=8)
function
StreamDemo_make_121_(a1x1)
{
let xtmp134;
let xtmp138;
let xtmp139;
let xtmp143;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2230(line=189, offs=1) -- 2255(line=190, offs=22)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 243(line=22, offs=1) -- 304(line=26, offs=20)
function
a0ref_make_2308_(a2x1)
{
let xtmp136;
let xtmp137;
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
a0ptr_make_2347_ = XATS2JS_a0ptr_make
;
xtmp137 = a0ptr_make_2347_(a2x1);
}
;
xtmp136 = XATS2JS_fcast(xtmp137);
}
;
return xtmp136;
} // function // a0ref_make(62)
;
xtmp134 = a0ref_make_2308_(0);
}
;
;
} // val(H0Pvar(mydir(95)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2259(line=192, offs=1) -- 2308(line=194, offs=25)
// L1DCLnone0();
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 243(line=22, offs=1) -- 304(line=26, offs=20)
function
a0ref_make_2308_(a2x1)
{
let xtmp141;
let xtmp142;
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
a0ptr_make_2347_ = XATS2JS_a0ptr_make
;
xtmp142 = a0ptr_make_2347_(a2x1);
}
;
xtmp141 = XATS2JS_fcast(xtmp142);
}
;
return xtmp141;
} // function // a0ref_make(62)
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 144(line=9, offs=1) -- 1992(line=168, offs=8)
function
StreamDemo_moves_673_(a2x1)
{
let xtmp222;
let xtmp223;
let xtmp224;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 291(line=25, offs=1) -- 928(line=81, offs=6)
function
aux0_294_(a3x1, a3x2)
{
let xtmp147;
let xtmp175;
;
;
xtmp175 =
function()
{
let xtmp148;
let xtmp150;
let xtmp151;
let xtmp152;
let xtmp153;
let xtmp154;
let xtmp155;
let xtmp156;
let xtmp157;
let xtmp158;
let xtmp159;
let xtmp160;
let xtmp161;
let xtmp162;
let xtmp163;
let xtmp164;
let xtmp165;
let xtmp166;
let xtmp167;
let xtmp168;
let xtmp169;
let xtmp170;
let xtmp171;
let xtmp172;
let xtmp173;
let xtmp174;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 361(line=33, offs=1) -- 389(line=34, offs=19)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2259(line=192, offs=1) -- 2308(line=194, offs=25)
function
StreamDemo$dir_637_()
{
let xtmp149;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp149 = a0ref_get_2457_(xtmp134);
}
;
return xtmp149;
} // function // StreamDemo$dir(66)
;
xtmp148 = StreamDemo$dir_637_();
}
;
;
} // val(H0Pvar(dir(101)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp151 = gint_eq_sint_sint_2293_(xtmp148, 0);
}
;
if
(xtmp151)
// then
{
{
xtmp152 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp152 = 1;
} while(false);
if(xtmp152 > 0 ) break;
do {
if(1!==a3x2[0]) break;
//L1PCKany();
//L1PCKany();
xtmp152 = 2;
} while(false);
if(xtmp152 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp152) {
case 1:
{
{
xtmp153 = [0];
}
;
{
xtmp154 = aux0_294_(a3x1, a3x2);
}
;
xtmp150 = [0, xtmp153, xtmp154];
}
;
break;
case 2:
xtmp155 = a3x2[1];
{
{
xtmp156 = [1, xtmp155];
}
;
{
xtmp157 = aux0_294_(a3x1, a3x2);
}
;
xtmp150 = [0, xtmp156, xtmp157];
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
xtmp158 = gint_gt_sint_sint_2209_(xtmp148, 0);
}
;
if
(xtmp158)
// then
{
{
xtmp159 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp159 = 1;
} while(false);
if(xtmp159 > 0 ) break;
do {
if(1!==a3x2[0]) break;
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
{
{
xtmp160 = [0];
}
;
{
xtmp161 = aux0_294_(a3x1, a3x2);
}
;
xtmp150 = [0, xtmp160, xtmp161];
}
;
break;
case 2:
xtmp162 = a3x2[1];
xtmp163 = a3x2[2];
{
{
xtmp164 = [1, xtmp162];
}
;
{
{
xtmp166 = [1, xtmp162, a3x1];
}
;
xtmp165 = aux0_294_(xtmp166, xtmp163);
}
;
xtmp150 = [0, xtmp164, xtmp165];
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
xtmp167 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp167 = 1;
} while(false);
if(xtmp167 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp167 = 2;
} while(false);
if(xtmp167 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp167) {
case 1:
{
{
xtmp168 = [0];
}
;
{
xtmp169 = aux0_294_(a3x1, a3x2);
}
;
xtmp150 = [0, xtmp168, xtmp169];
}
;
break;
case 2:
xtmp170 = a3x1[1];
xtmp171 = a3x1[2];
{
{
xtmp172 = [1, xtmp170];
}
;
{
{
xtmp174 = [1, xtmp170, a3x2];
}
;
xtmp173 = aux0_294_(xtmp171, xtmp174);
}
;
xtmp150 = [0, xtmp172, xtmp173];
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
return xtmp150;
} // lam-function
;
xtmp147 = XATS2JS_new_lazy(xtmp175);
return xtmp147;
} // function // aux0(69)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 974(line=83, offs=1) -- 1943(line=166, offs=6)
function
aux1_977_(a3x1, a3x2, a3x3)
{
let xtmp179;
let xtmp221;
;
;
;
xtmp221 =
function()
{
let xtmp180;
let xtmp182;
let xtmp183;
let xtmp184;
let xtmp185;
let xtmp186;
let xtmp187;
let xtmp188;
let xtmp189;
let xtmp190;
let xtmp191;
let xtmp192;
let xtmp193;
let xtmp194;
let xtmp195;
let xtmp196;
let xtmp197;
let xtmp198;
let xtmp199;
let xtmp200;
let xtmp201;
let xtmp202;
let xtmp203;
let xtmp204;
let xtmp205;
let xtmp206;
let xtmp207;
let xtmp208;
let xtmp209;
let xtmp210;
let xtmp211;
let xtmp212;
let xtmp213;
let xtmp214;
let xtmp215;
let xtmp216;
let xtmp217;
let xtmp218;
let xtmp219;
let xtmp220;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 1061(line=93, offs=1) -- 1089(line=94, offs=19)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2259(line=192, offs=1) -- 2308(line=194, offs=25)
function
StreamDemo$dir_637_()
{
let xtmp181;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp181 = a0ref_get_2457_(xtmp134);
}
;
return xtmp181;
} // function // StreamDemo$dir(66)
;
xtmp180 = StreamDemo$dir_637_();
}
;
;
} // val(H0Pvar(dir(112)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp183 = gint_eq_sint_sint_2293_(xtmp180, 0);
}
;
if
(xtmp183)
// then
{
{
xtmp184 = 0;
do {
do {
if(1!==a3x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp184 = 1;
} while(false);
if(xtmp184 > 0 ) break;
do {
if(0!==a3x3[0]) break;
xtmp184 = 2;
} while(false);
if(xtmp184 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp184) {
case 1:
xtmp185 = a3x3[1];
{
{
xtmp186 = [1, xtmp185];
}
;
{
xtmp187 = aux1_977_(a3x1, a3x2, a3x3);
}
;
xtmp182 = [0, xtmp186, xtmp187];
}
;
break;
case 2:
xtmp188 = XATS2JS_lazy_eval(a3x1);
{
xtmp189 = 0;
do {
do {
if(0!==xtmp188[0]) break;
xtmp189 = 1;
} while(false);
if(xtmp189 > 0 ) break;
do {
if(1!==xtmp188[0]) break;
//L1PCKany();
//L1PCKany();
xtmp189 = 2;
} while(false);
if(xtmp189 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp189) {
case 1:
{
{
xtmp190 = [0];
}
;
{
xtmp191 = aux0_294_(a3x2, a3x3);
}
;
xtmp182 = [0, xtmp190, xtmp191];
}
;
break;
case 2:
xtmp192 = xtmp188[1];
xtmp193 = xtmp188[2];
{
{
xtmp194 = [1, xtmp192];
}
;
{
{
xtmp196 = [1, xtmp192, a3x3];
}
;
xtmp195 = aux1_977_(xtmp193, a3x2, xtmp196);
}
;
xtmp182 = [0, xtmp194, xtmp195];
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
xtmp197 = gint_gt_sint_sint_2209_(xtmp180, 0);
}
;
if
(xtmp197)
// then
{
{
xtmp198 = 0;
do {
do {
if(0!==a3x3[0]) break;
xtmp198 = 1;
} while(false);
if(xtmp198 > 0 ) break;
do {
if(1!==a3x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp198 = 2;
} while(false);
if(xtmp198 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp198) {
case 1:
xtmp199 = XATS2JS_lazy_eval(a3x1);
{
xtmp200 = 0;
do {
do {
if(0!==xtmp199[0]) break;
xtmp200 = 1;
} while(false);
if(xtmp200 > 0 ) break;
do {
if(1!==xtmp199[0]) break;
//L1PCKany();
//L1PCKany();
xtmp200 = 2;
} while(false);
if(xtmp200 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp200) {
case 1:
{
{
xtmp201 = [0];
}
;
{
xtmp202 = aux0_294_(a3x2, a3x3);
}
;
xtmp182 = [0, xtmp201, xtmp202];
}
;
break;
case 2:
xtmp203 = xtmp199[1];
xtmp204 = xtmp199[2];
{
{
xtmp205 = [1, xtmp203];
}
;
{
{
xtmp207 = [1, xtmp203, a3x2];
}
;
xtmp206 = aux1_977_(xtmp204, xtmp207, a3x3);
}
;
xtmp182 = [0, xtmp205, xtmp206];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;
case 2:
xtmp208 = a3x3[1];
xtmp209 = a3x3[2];
{
{
xtmp210 = [1, xtmp208];
}
;
{
{
xtmp212 = [1, xtmp208, a3x2];
}
;
xtmp211 = aux1_977_(a3x1, xtmp212, xtmp209);
}
;
xtmp182 = [0, xtmp210, xtmp211];
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
xtmp213 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp213 = 1;
} while(false);
if(xtmp213 > 0 ) break;
do {
if(1!==a3x2[0]) break;
//L1PCKany();
//L1PCKany();
xtmp213 = 2;
} while(false);
if(xtmp213 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp213) {
case 1:
{
{
xtmp214 = [0];
}
;
{
xtmp215 = aux1_977_(a3x1, a3x2, a3x3);
}
;
xtmp182 = [0, xtmp214, xtmp215];
}
;
break;
case 2:
xtmp216 = a3x2[1];
xtmp217 = a3x2[2];
{
{
xtmp218 = [1, xtmp216];
}
;
{
{
xtmp220 = [1, xtmp216, a3x3];
}
;
xtmp219 = aux1_977_(a3x1, xtmp217, xtmp220);
}
;
xtmp182 = [0, xtmp218, xtmp219];
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
return xtmp182;
} // lam-function
;
xtmp179 = XATS2JS_new_lazy(xtmp221);
return xtmp179;
} // function // aux1(72)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 195(line=15, offs=1) -- 234(line=18, offs=16)
{
{
xtmp222 = [0];
}
;
;
} // val(H0Pvar(ys(123)))
{
{
xtmp223 = [0];
}
;
;
} // val(H0Pvar(zs(124)))
;
{
xtmp224 = aux1_977_(a2x1, xtmp222, xtmp223);
}
;
return xtmp224;
} // function // StreamDemo_moves(68)
;
xtmp143 = StreamDemo_moves_673_(a1x1);
}
;
xtmp139 = a0ref_make_2308_(xtmp143);
}
;
xtmp138 = [-1, xtmp134, xtmp139];;
}
;
return xtmp138;
} // function // StreamDemo_make(61)
;
{
// ./HanoiTower.dats: 2947(line=223, offs=1) -- 3870(line=308, offs=8)
function
StreamDemo2_stream_553_()
{
let xtmp232;
let xtmp233;
let xtmp234;
let xtmp235;
let xtmp277;
let xtmp278;
let xtmp279;
let xtmp280;
let xtmp281;
let xtmp317;
// ./HanoiTower.dats: 2984(line=226, offs=1) -- 3124(line=242, offs=10)
{
// ./HanoiTower.dats: 3011(line=229, offs=1) -- 3122(line=241, offs=7)
function
auxlst_3014_(a2x1)
{
let xtmp227;
let xtmp228;
let xtmp229;
let xtmp230;
let xtmp231;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
xtmp228 = gint_gte_sint_sint_2466_(a2x1, 8);
}
;
if
(xtmp228)
// then
{
{
xtmp227 = [0];
}
;
} // if-then
else
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp229 = gint_add_sint_sint_3439_(a2x1, 1);
}
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp231 = gint_add_sint_sint_3439_(a2x1, 1);
}
;
xtmp230 = auxlst_3014_(xtmp231);
}
;
xtmp227 = [1, xtmp229, xtmp230];
}
;
} // if-else
;
return xtmp227;
} // function // auxlst(43)
;
{
xtmp232 = auxlst_3014_(0);
}
;
;
} // val(H0Pvar(p1(58)))
;
// ./HanoiTower.dats: 3152(line=244, offs=1) -- 3169(line=244, offs=18)
{
{
xtmp233 = [0];
}
;
;
} // val(H0Pvar(p2(61)))
;
// ./HanoiTower.dats: 3178(line=245, offs=1) -- 3195(line=245, offs=18)
{
{
xtmp234 = [0];
}
;
;
} // val(H0Pvar(p3(62)))
;
// ./HanoiTower.dats: 3207(line=247, offs=1) -- 3305(line=256, offs=16)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 1955(line=159, offs=1) -- 2035(line=165, offs=8)
function
a1ref_make_list_3492_(a2x1)
{
let xtmp237;
let xtmp238;
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 2039(line=167, offs=1) -- 2315(line=190, offs=8)
function
a1ptr_make_list_3558_(a3x1)
{
let xtmp240;
let xtmp249;
let xtmp250;
let xtmp276;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 2086(line=172, offs=1) -- 2105(line=173, offs=11)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1262(line=119, offs=1) -- 1463(line=137, offs=8)
function
list_length_2365_(a4x1)
{
let xtmp248;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1328(line=127, offs=1) -- 1461(line=136, offs=5)
function
loop_1331_(a5x1, a5x2)
{
let a5y1;
let a5y2;
let xtmp244;
let xtmp245;
let xtmp246;
let xtmp247;
do {
;
;
{
xtmp245 = 0;
do {
do {
if(0!==a5x1[0]) break;
xtmp245 = 1;
} while(false);
if(xtmp245 > 0 ) break;
do {
if(1!==a5x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp245 = 2;
} while(false);
if(xtmp245 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp245) {
case 1:
xtmp244 = a5x2;
break;
case 2:
xtmp246 = a5x1[2];
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp247 = gint_add_sint_sint_3439_(a5x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(244); L1VALfcst(loop(17)); L1VALtmp(tmp(246)), L1VALtmp(tmp(247)))
a5y1 = xtmp246; a5y2 = xtmp247; a5x1 = a5y1; a5x2 = a5y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp244;
} // function // loop(17)
;
{
xtmp248 = loop_1331_(a4x1, 0);
}
;
return xtmp248;
} // function // list_length(16)
;
xtmp240 = list_length_2365_(a3x1);
}
;
;
} // val(H0Pvar(n0(127)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 2106(line=174, offs=1) -- 2130(line=175, offs=16)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7658(line=471, offs=1) -- 7711(line=473, offs=37)
// { // val-binding
// } // val-binding
const // implval/fun
a1ptr_alloc_3160_ = XATS2JS_a1ptr_alloc
;
xtmp249 = a1ptr_alloc_3160_(xtmp240);
}
;
;
} // val(H0Pvar(A0(128)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 2131(line=176, offs=1) -- 2276(line=187, offs=18)
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 2166(line=179, offs=1) -- 2274(line=186, offs=8)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14990(line=1224, offs=1) -- 15182(line=1240, offs=8)
function
gseq_iforeach_5155_(a4x1)
{
let xtmp252;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 15031(line=1228, offs=1) -- 15162(line=1237, offs=25)
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14634(line=1194, offs=1) -- 14935(line=1220, offs=8)
function
gseq_iforall_5108_(a5x1)
{
let xtmp254;
let xtmp255;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14677(line=1199, offs=1) -- 14693(line=1199, offs=17)
{
xtmp254 = XATS2JS_new_var1(0);
} // val(i0(137))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14694(line=1200, offs=1) -- 14712(line=1200, offs=19)
{
;
} // val(H0Pvar(p0(138)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 7903(line=678, offs=1) -- 7958(line=680, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 3474(line=307, offs=1) -- 3677(line=323, offs=13)
function
list_forall_3143_(a7x1)
{
let xtmp275;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 3532(line=312, offs=1) -- 3675(line=322, offs=5)
function
loop_3535_(a8x1)
{
let a8y1;
let xtmp258;
let xtmp259;
let xtmp260;
let xtmp261;
let xtmp262;
do {
;
{
xtmp259 = 0;
do {
do {
if(0!==a8x1[0]) break;
xtmp259 = 1;
} while(false);
if(xtmp259 > 0 ) break;
do {
if(1!==a8x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp259 = 2;
} while(false);
if(xtmp259 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp259) {
case 1:
xtmp258 = true;
break;
case 2:
xtmp260 = a8x1[1];
xtmp261 = a8x1[2];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
function
forall$test_3500_(a9x1)
{
let xtmp264;
let xtmp265;
let xtmp266;
let xtmp267;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14793(line=1211, offs=1) -- 14824(line=1212, offs=23)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/unsafe.dats: 239(line=19, offs=1) -- 292(line=21, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_get_1962_ = XATS2JS_UN_p2tr_get
;
xtmp264 = p2tr_get_1962_(xtmp254);
}
;
;
} // val(H0Pvar(i0(140)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14825(line=1213, offs=1) -- 14866(line=1214, offs=33)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp266 = gint_succ_sint_1861_(xtmp264);
}
;
xtmp265 = p2tr_set_1998_(xtmp254, xtmp266);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(265)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(265)));
} // val(H0Pnil())
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
function
iforall$test_5435_(a10x1, a10x2)
{
let xtmp270;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 15114(line=1235, offs=1) -- 15148(line=1235, offs=35)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 2166(line=179, offs=1) -- 2274(line=186, offs=8)
function
iforeach$work_5677_(a11x1, a11x2)
{
let xtmp273;
let xtmp274;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/array.dats: 2203(line=182, offs=1) -- 2235(line=183, offs=25)
{
{
xtmp273 = XATS2JS_fcast(a11x1);
}
;
;
} // val(H0Pvar(i(131)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 8573(line=539, offs=1) -- 8636(line=541, offs=47)
// { // val-binding
// } // val-binding
const // implval/fun
a1ptr_set_at_raw_4387_ = XATS2JS_a1ptr_set_at_raw
;
xtmp274 = a1ptr_set_at_raw_4387_(xtmp249, xtmp273, a11x2);
}
;
return xtmp274;
} // function // iforeach$work(78)
;
xtmp270 = iforeach$work_5677_(a10x1, a10x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(270)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(270)));
} // val(H0Pnil())
;
return true;
} // function // iforall$test(82)
;
xtmp267 = iforall$test_5435_(xtmp264, a9x1);
}
;
return xtmp267;
} // function // forall$test(84)
;
xtmp262 = forall$test_3500_(xtmp260);
}
;
if
(xtmp262)
// then
{
{
// tail-recursion:
// L1CMDapp(tmp(258); L1VALfcst(loop(90)); L1VALtmp(tmp(261)))
a8y1 = xtmp261; a8x1 = a8y1; continue;
}
;
} // if-then
else
{
xtmp258 = false;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp258;
} // function // loop(90)
;
{
xtmp275 = loop_3535_(a7x1);
}
;
return xtmp275;
} // function // list_forall(89)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = list_forall_3143_
;
xtmp255 = gseq_forall_1939_(a5x1);
}
;
return xtmp255;
} // function // gseq_iforall(83)
;
xtmp252 = gseq_iforall_5108_(a4x1);
}
;
;
} // val(H0Pvar(test(133)))
;
return null;
} // function // gseq_iforeach(81)
;
xtmp250 = gseq_iforeach_5155_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(250)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(250)));
} // val(H0Pnil())
;
{
xtmp276 = XATS2JS_fcast(xtmp249);
}
;
return xtmp276;
} // function // a1ptr_make_list(75)
;
xtmp238 = a1ptr_make_list_3558_(a2x1);
}
;
xtmp237 = XATS2JS_fcast(xtmp238);
}
;
return xtmp237;
} // function // a1ref_make_list(45)
;
{
{
{
{
xtmp280 = [0];
}
;
xtmp279 = [1, xtmp234, xtmp280];
}
;
xtmp278 = [1, xtmp233, xtmp279];
}
;
xtmp277 = [1, xtmp232, xtmp278];
}
;
xtmp235 = a1ref_make_list_3492_(xtmp277);
}
;
;
} // val(H0Pvar(poles(63)))
;
// ./HanoiTower.dats: 3309(line=258, offs=1) -- 3339(line=258, offs=31)
{
{
xtmp281 = HanoiTower_play_1145_(8);
}
;
;
} // val(H0Pvar(moves(64)))
;
// ./HanoiTower.dats: 3374(line=264, offs=1) -- 3864(line=306, offs=8)
function
auxmain_3377_(a2x1)
{
let xtmp283;
let xtmp316;
;
xtmp316 =
function()
{
let xtmp284;
let xtmp285;
let xtmp286;
let xtmp287;
let xtmp288;
let xtmp289;
let xtmp301;
let xtmp302;
let xtmp303;
let xtmp304;
let xtmp305;
let xtmp306;
let xtmp307;
let xtmp308;
let xtmp309;
let xtmp310;
let xtmp311;
let xtmp312;
let xtmp313;
let xtmp314;
let xtmp315;
// ./HanoiTower.dats: 3434(line=271, offs=1) -- 3451(line=271, offs=18)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4067_ = XATS2JS_a1ref_get_at
;
xtmp284 = a1ref_get_at_4067_(xtmp235, 0);
}
;
;
} // val(H0Pvar(p1(67)))
;
// ./HanoiTower.dats: 3452(line=272, offs=1) -- 3469(line=272, offs=18)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4067_ = XATS2JS_a1ref_get_at
;
xtmp285 = a1ref_get_at_4067_(xtmp235, 1);
}
;
;
} // val(H0Pvar(p2(68)))
;
// ./HanoiTower.dats: 3470(line=273, offs=1) -- 3487(line=273, offs=18)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4067_ = XATS2JS_a1ref_get_at
;
xtmp286 = a1ref_get_at_4067_(xtmp235, 2);
}
;
;
} // val(H0Pvar(p3(69)))
;
{
xtmp288 = 0;
do {
do {
if(0!==a2x1[0]) break;
xtmp288 = 1;
} while(false);
if(xtmp288 > 0 ) break;
do {
if(1!==a2x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp288 = 2;
} while(false);
if(xtmp288 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp288) {
case 1:
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream.dats: 967(line=86, offs=1) -- 1033(line=89, offs=30)
function
stream_sing_1855_(a4x1)
{
let xtmp291;
let xtmp297;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream.dats: 715(line=65, offs=1) -- 790(line=71, offs=8)
function
stream_cons_1776_(a5x1, a5x2)
{
let xtmp294;
let xtmp296;
;
;
xtmp296 =
function()
{
let xtmp295;
{
xtmp295 = [1, a5x1, a5x2];
}
;
return xtmp295;
} // lam-function
;
xtmp294 = XATS2JS_new_lazy(xtmp296);
return xtmp294;
} // function // stream_cons(97)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream.dats: 660(line=61, offs=1) -- 714(line=64, offs=21)
function
stream_nil_1741_()
{
let xtmp298;
let xtmp300;
xtmp300 =
function()
{
let xtmp299;
{
xtmp299 = [0];
}
;
return xtmp299;
} // lam-function
;
xtmp298 = XATS2JS_new_lazy(xtmp300);
return xtmp298;
} // function // stream_nil(98)
;
xtmp297 = stream_nil_1741_();
}
;
xtmp291 = stream_cons_1776_(a4x1, xtmp297);
}
;
return xtmp291;
} // function // stream_sing(48)
;
{
xtmp301 = [-1, xtmp284, xtmp285, xtmp286];;
}
;
xtmp289 = stream_sing_1855_(xtmp301);
}
;
xtmp287 = XATS2JS_lazy_eval(xtmp289);
break;
case 2:
xtmp302 = a2x1[1];
xtmp303 = a2x1[2];
// ./HanoiTower.dats: 3594(line=287, offs=1) -- 3610(line=287, offs=17)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp304 = gint_sub_sint_sint_3524_(xtmp302[1], 1);
}
;
;
} // val(H0Pvar(i0(72)))
;
// ./HanoiTower.dats: 3611(line=288, offs=1) -- 3627(line=288, offs=17)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp305 = gint_sub_sint_sint_3524_(xtmp302[2], 1);
}
;
;
} // val(H0Pvar(j0(73)))
;
// ./HanoiTower.dats: 3628(line=289, offs=1) -- 3646(line=289, offs=19)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4067_ = XATS2JS_a1ref_get_at
;
xtmp306 = a1ref_get_at_4067_(xtmp235, xtmp304);
}
;
;
} // val(H0Pvar(pi(74)))
;
// ./HanoiTower.dats: 3647(line=290, offs=1) -- 3665(line=290, offs=19)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4067_ = XATS2JS_a1ref_get_at
;
xtmp307 = a1ref_get_at_4067_(xtmp235, xtmp305);
}
;
;
} // val(H0Pvar(pj(75)))
;
// ./HanoiTower.dats: 3669(line=292, offs=1) -- 3699(line=294, offs=16)
{
if(1!==xtmp306[0]) XATS2JS_patckerr0();
;
xtmp308 = xtmp306[1];
xtmp309 = xtmp306[2];
} // val(H0Pdapp(H0Pcon(list_cons(0)); -1; H0Pvar(x0(76)), H0Pvar(xs(77))))
;
// ./HanoiTower.dats: 3703(line=296, offs=1) -- 3731(line=297, offs=20)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 8193(line=511, offs=1) -- 8248(line=513, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_set_at_4211_ = XATS2JS_a1ref_set_at
;
xtmp310 = a1ref_set_at_4211_(xtmp235, xtmp304, xtmp309);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(310)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(310)));
} // val(H0Pnil())
;
// ./HanoiTower.dats: 3732(line=298, offs=1) -- 3775(line=299, offs=35)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 8193(line=511, offs=1) -- 8248(line=513, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_set_at_4211_ = XATS2JS_a1ref_set_at
;
{
xtmp312 = [1, xtmp308, xtmp307];
}
;
xtmp311 = a1ref_set_at_4211_(xtmp235, xtmp305, xtmp312);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(311)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(311)));
} // val(H0Pnil())
;
{
{
xtmp314 = [-1, xtmp284, xtmp285, xtmp286];;
}
;
{
xtmp315 = auxmain_3377_(xtmp303);
}
;
xtmp313 = [1, xtmp314, xtmp315];
}
;
xtmp287 = xtmp313;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp287;
} // lam-function
;
xtmp283 = XATS2JS_new_lazy(xtmp316);
return xtmp283;
} // function // auxmain(46)
;
{
xtmp317 = auxmain_3377_(xtmp281);
}
;
return xtmp317;
} // function // StreamDemo2_stream(42)
;
xtop225 = StreamDemo2_stream_553_();
}
;
xtop132 = StreamDemo_make_121_(xtop225);
}
;
;
} // val(H0Pvar(the_demo(93)))

// in-of-local
// ././../../../StreamDemo2/StreamDemo2_.dats: 1090(line=68, offs=1) -- 1159(line=70, offs=40)
function
the_StreamDemo2_reset()
{
let xtmp318;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2907(line=243, offs=1) -- 3167(line=259, offs=8)
function
StreamDemo_reset_433_(a2x1)
{
let xtmp330;
let xtmp334;
let xtmp335;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3020(line=251, offs=1) -- 3148(line=258, offs=5)
function
loop_3023_(a3x1)
{
let xtmp321;
let xtmp328;
let xtmp329;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3047(line=254, offs=1) -- 3081(line=254, offs=35)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2424(line=205, offs=1) -- 2628(line=220, offs=15)
function
StreamDemo_get_elt_202_(a4x1)
{
let xtmp323;
let xtmp324;
let xtmp325;
let xtmp326;
let xtmp327;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2480(line=210, offs=1) -- 2510(line=211, offs=23)
// L1DCLnone1(H0Cnone1(...));
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2514(line=213, offs=1) -- 2546(line=214, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp323 = a0ref_get_2457_(a4x1[2]);
}
;
;
} // val(H0Pvar(xs(154)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2547(line=215, offs=1) -- 2578(line=216, offs=27)
{
xtmp324 = XATS2JS_lazy_eval(xtmp323);
if(0!==xtmp324[0]) XATS2JS_patckerr0();
;
xtmp325 = xtmp324[1];
xtmp326 = xtmp324[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(5)); -1; H0Pvar(x0(155)), H0Pvar(xs(156))))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2579(line=217, offs=1) -- 2615(line=218, offs=28)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp327 = a0ref_set_2496_(a4x1[2], xtmp326);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(327)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(327)));
} // val(H0Pnil())
;
return xtmp325;
} // function // StreamDemo_get_elt(102)
;
xtmp321 = StreamDemo_get_elt_202_(a3x1);
}
;
;
} // val(H0Pvar(opt(152)))
;
{
xtmp329 = 0;
do {
do {
if(0!==xtmp321[0]) break;
xtmp329 = 1;
} while(false);
if(xtmp329 > 0 ) break;
do {
if(1!==xtmp321[0]) break;
xtmp329 = 2;
} while(false);
if(xtmp329 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp329) {
case 1:
{
xtmp328 = [-1];;
}
;
break;
case 2:
{
xtmp328 = loop_3023_(a3x1);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp328;
} // function // loop(101)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2955(line=247, offs=1) -- 2993(line=248, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2754(line=230, offs=1) -- 2841(line=236, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp333;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp333 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp333;
} // function // StreamDemo_set_dir(105)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp334 = gint_sub_sint_sint_3524_(0, 1);
}
;
xtmp330 = StreamDemo_set_dir_343_(a2x1, xtmp334);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(330)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(330)));
} // val(H0Pnil())
;
{
xtmp335 = loop_3023_(a2x1);
}
;
return xtmp335;
} // function // StreamDemo_reset(100)
;
xtmp318 = StreamDemo_reset_433_(xtop132);
}
;
return xtmp318;
} // function // the_StreamDemo2_reset(53)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1163(line=72, offs=1) -- 1232(line=74, offs=40)
function
the_StreamDemo2_next1()
{
let xtmp336;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3231(line=263, offs=1) -- 3349(line=269, offs=8)
function
StreamDemo_next1_492_(a2x1)
{
let xtmp338;
let xtmp342;
let xtmp343;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3279(line=267, offs=1) -- 3317(line=268, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2754(line=230, offs=1) -- 2841(line=236, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp341;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp341 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp341;
} // function // StreamDemo_set_dir(105)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp342 = gint_add_sint_sint_3439_(0, 1);
}
;
xtmp338 = StreamDemo_set_dir_343_(a2x1, xtmp342);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(338)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(338)));
} // val(H0Pnil())
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2424(line=205, offs=1) -- 2628(line=220, offs=15)
function
StreamDemo_get_elt_202_(a3x1)
{
let xtmp345;
let xtmp346;
let xtmp347;
let xtmp348;
let xtmp349;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2480(line=210, offs=1) -- 2510(line=211, offs=23)
// L1DCLnone1(H0Cnone1(...));
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2514(line=213, offs=1) -- 2546(line=214, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp345 = a0ref_get_2457_(a3x1[2]);
}
;
;
} // val(H0Pvar(xs(154)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2547(line=215, offs=1) -- 2578(line=216, offs=27)
{
xtmp346 = XATS2JS_lazy_eval(xtmp345);
if(0!==xtmp346[0]) XATS2JS_patckerr0();
;
xtmp347 = xtmp346[1];
xtmp348 = xtmp346[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(5)); -1; H0Pvar(x0(155)), H0Pvar(xs(156))))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2579(line=217, offs=1) -- 2615(line=218, offs=28)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp349 = a0ref_set_2496_(a3x1[2], xtmp348);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(349)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(349)));
} // val(H0Pnil())
;
return xtmp347;
} // function // StreamDemo_get_elt(102)
;
xtmp343 = StreamDemo_get_elt_202_(a2x1);
}
;
return xtmp343;
} // function // StreamDemo_next1(106)
;
xtmp336 = StreamDemo_next1_492_(xtop132);
}
;
return xtmp336;
} // function // the_StreamDemo2_next1(54)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1236(line=76, offs=1) -- 1305(line=78, offs=40)
function
the_StreamDemo2_prev1()
{
let xtmp350;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3353(line=271, offs=1) -- 3471(line=277, offs=8)
function
StreamDemo_prev1_554_(a2x1)
{
let xtmp352;
let xtmp356;
let xtmp357;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3401(line=275, offs=1) -- 3439(line=276, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2754(line=230, offs=1) -- 2841(line=236, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp355;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp355 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp355;
} // function // StreamDemo_set_dir(105)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp356 = gint_sub_sint_sint_3524_(0, 1);
}
;
xtmp352 = StreamDemo_set_dir_343_(a2x1, xtmp356);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(352)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(352)));
} // val(H0Pnil())
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2424(line=205, offs=1) -- 2628(line=220, offs=15)
function
StreamDemo_get_elt_202_(a3x1)
{
let xtmp359;
let xtmp360;
let xtmp361;
let xtmp362;
let xtmp363;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2480(line=210, offs=1) -- 2510(line=211, offs=23)
// L1DCLnone1(H0Cnone1(...));
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2514(line=213, offs=1) -- 2546(line=214, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp359 = a0ref_get_2457_(a3x1[2]);
}
;
;
} // val(H0Pvar(xs(154)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2547(line=215, offs=1) -- 2578(line=216, offs=27)
{
xtmp360 = XATS2JS_lazy_eval(xtmp359);
if(0!==xtmp360[0]) XATS2JS_patckerr0();
;
xtmp361 = xtmp360[1];
xtmp362 = xtmp360[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(5)); -1; H0Pvar(x0(155)), H0Pvar(xs(156))))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2579(line=217, offs=1) -- 2615(line=218, offs=28)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp363 = a0ref_set_2496_(a3x1[2], xtmp362);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(363)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(363)));
} // val(H0Pnil())
;
return xtmp361;
} // function // StreamDemo_get_elt(102)
;
xtmp357 = StreamDemo_get_elt_202_(a2x1);
}
;
return xtmp357;
} // function // StreamDemo_prev1(107)
;
xtmp350 = StreamDemo_prev1_554_(xtop132);
}
;
return xtmp350;
} // function // the_StreamDemo2_prev1(55)

// } // end-of-local

// ././../../../StreamDemo2/StreamDemo2_.dats: 1371(line=83, offs=1) -- 1426(line=84, offs=48)
function
the_StreamDemo2_title()
{
let xtmp364;
{
// ./HanoiTower.dats: 2667(line=212, offs=1) -- 2725(line=214, offs=27)
function
StreamDemo2_title_97_()
{
return "StreamDemo2-HanoiTower";
} // function // StreamDemo2_title(39)
;
xtmp364 = StreamDemo2_title_97_();
}
;
return xtmp364;
} // function // the_StreamDemo2_title(56)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1427(line=85, offs=1) -- 1494(line=86, offs=60)
function
the_StreamDemo2_stream_name()
{
let xtmp365;
{
// ./HanoiTower.dats: 2746(line=216, offs=1) -- 2822(line=218, offs=39)
function
StreamDemo2_stream_name_234_()
{
return "Solving the HanoiTower Puzzle";
} // function // StreamDemo2_stream_name(40)
;
xtmp365 = StreamDemo2_stream_name_234_();
}
;
return xtmp365;
} // function // the_StreamDemo2_stream_name(57)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1495(line=87, offs=1) -- 1568(line=88, offs=66)
function
the_StreamDemo2_input_descript()
{
let xtmp366;
{
// ./HanoiTower.dats: 2823(line=219, offs=1) -- 2926(line=221, offs=63)
function
StreamDemo2_input_descript_389_()
{
return "The stream of moves for solving the HanoiTower puzzle of 8 discs";
} // function // StreamDemo2_input_descript(41)
;
xtmp366 = StreamDemo2_input_descript_389_();
}
;
return xtmp366;
} // function // the_StreamDemo2_input_descript(58)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1589(line=90, offs=1) -- 1652(line=91, offs=56)
function
the_StreamDemo2_pauseq(a1x1)
{
let xtmp368;
;
{
// ./HanoiTower.dats: 4039(line=320, offs=1) -- 4160(line=327, offs=8)
function
StreamDemo2_pauseq_637_(a2x1)
{
let xtmp370;
let xtmp371;
let xtmp372;
let xtmp373;
;
{
xtmp371 = 0;
do {
do {
if(1!==a2x1[0]) break;
//L1PCKany();
xtmp371 = 1;
} while(false);
if(xtmp371 > 0 ) break;
do {
if(0!==a2x1[0]) break;
xtmp371 = 2;
} while(false);
if(xtmp371 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp371) {
case 1:
xtmp372 = a2x1[1];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1262(line=119, offs=1) -- 1463(line=137, offs=8)
function
list_length_2365_(a3x1)
{
let xtmp381;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 1328(line=127, offs=1) -- 1461(line=136, offs=5)
function
loop_1331_(a4x1, a4x2)
{
let a4y1;
let a4y2;
let xtmp377;
let xtmp378;
let xtmp379;
let xtmp380;
do {
;
;
{
xtmp378 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp378 = 1;
} while(false);
if(xtmp378 > 0 ) break;
do {
if(1!==a4x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp378 = 2;
} while(false);
if(xtmp378 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp378) {
case 1:
xtmp377 = a4x2;
break;
case 2:
xtmp379 = a4x1[2];
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp380 = gint_add_sint_sint_3439_(a4x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(377); L1VALfcst(loop(17)); L1VALtmp(tmp(379)), L1VALtmp(tmp(380)))
a4y1 = xtmp379; a4y2 = xtmp380; a4x1 = a4y1; a4x2 = a4y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp377;
} // function // loop(17)
;
{
xtmp381 = loop_1331_(a3x1, 0);
}
;
return xtmp381;
} // function // list_length(16)
;
xtmp373 = list_length_2365_(xtmp372[2]);
}
;
xtmp370 = gint_eq_sint_sint_2293_(xtmp373, 8);
}
;
break;
case 2:
xtmp370 = false;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp370;
} // function // StreamDemo2_pauseq(51)
;
xtmp368 = StreamDemo2_pauseq_637_(a1x1);
}
;
return xtmp368;
} // function // the_StreamDemo2_pauseq(59)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1653(line=92, offs=1) -- 1716(line=93, offs=56)
function
the_StreamDemo2_xprint(a1x1)
{
let xtmp383;
;
{
// ./HanoiTower.dats: 3928(line=312, offs=1) -- 4038(line=319, offs=8)
function
StreamDemo2_xprint_776_(a2x1)
{
let xtmp385;
let xtmp386;
let xtmp387;
;
{
xtmp386 = 0;
do {
do {
if(0!==a2x1[0]) break;
xtmp386 = 1;
} while(false);
if(xtmp386 > 0 ) break;
do {
if(1!==a2x1[0]) break;
//L1PCKany();
xtmp386 = 2;
} while(false);
if(xtmp386 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp386) {
case 1:
{
xtmp385 = [-1];;
}
;
break;
case 2:
xtmp387 = a2x1[1];
{
xtmp385 = print_item_1687_(xtmp387);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp385;
} // function // StreamDemo2_xprint(50)
;
xtmp383 = StreamDemo2_xprint_776_(a1x1);
}
;
return xtmp383;
} // function // the_StreamDemo2_xprint(60)

// } // end-of-include


