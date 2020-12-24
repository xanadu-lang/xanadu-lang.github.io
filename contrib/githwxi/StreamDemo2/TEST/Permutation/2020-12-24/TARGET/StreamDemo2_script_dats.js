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
var xtop0;
var xtop93;
// ./Permutation.dats: 88(line=7, offs=1) -- 140(line=9, offs=29)
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


// ./Permutation.dats: 161(line=11, offs=1) -- 227(line=13, offs=35)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 259(line=16, offs=9) -- 262(line=16, offs=12)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 287(line=20, offs=1) -- 317(line=21, offs=23)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 318(line=22, offs=1) -- 342(line=22, offs=25)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 372(line=26, offs=1) -- 408(line=27, offs=24)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 417(line=29, offs=1) -- 455(line=30, offs=25)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 476(line=32, offs=1) -- 520(line=34, offs=33)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 521(line=35, offs=1) -- 566(line=36, offs=37)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 567(line=37, offs=1) -- 612(line=38, offs=37)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 633(line=40, offs=1) -- 662(line=41, offs=22)
// L1DCLnone1(H0Cnone1(...))

// ./Permutation.dats: 683(line=43, offs=1) -- 742(line=45, offs=28)
// L1DCLnone0()

// ./Permutation.dats: 763(line=47, offs=1) -- 829(line=49, offs=29)
// L1DCLnone0()

// ./Permutation.dats: 830(line=50, offs=1) -- 923(line=52, offs=53)
// L1DCLnone0()

// ./Permutation.dats: 945(line=55, offs=1) -- 1148(line=72, offs=8)
// L1DCLnone0()

// ./Permutation.dats: 1203(line=75, offs=1) -- 1308(line=82, offs=8)
// L1DCLnone0()

// ./Permutation.dats: 1329(line=84, offs=1) -- 1529(line=97, offs=8)
// L1DCLnone0()

// ./Permutation.dats: 1550(line=99, offs=1) -- 1593(line=99, offs=44)
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
let xtmp2;
let xtmp6;
let xtmp7;
let xtmp11;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2230(line=189, offs=1) -- 2255(line=190, offs=22)
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
} // function // a0ref_make(24)
;
xtmp2 = a0ref_make_2308_(0);
}
;
;
} // val(H0Pvar(mydir(21)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2259(line=192, offs=1) -- 2308(line=194, offs=25)
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
} // function // a0ref_make(24)
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 144(line=9, offs=1) -- 1992(line=168, offs=8)
function
StreamDemo_moves_673_(a2x1)
{
let xtmp90;
let xtmp91;
let xtmp92;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 291(line=25, offs=1) -- 928(line=81, offs=6)
function
aux0_294_(a3x1, a3x2)
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
// ././../../../StreamDemo/DATS/StreamDemo.dats: 361(line=33, offs=1) -- 389(line=34, offs=19)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2259(line=192, offs=1) -- 2308(line=194, offs=25)
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
} // function // StreamDemo$dir(28)
;
xtmp16 = StreamDemo$dir_637_();
}
;
;
} // val(H0Pvar(dir(27)))
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
xtmp22 = aux0_294_(a3x1, a3x2);
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
xtmp25 = aux0_294_(a3x1, a3x2);
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
xtmp29 = aux0_294_(a3x1, a3x2);
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
xtmp33 = aux0_294_(xtmp34, xtmp31);
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
xtmp37 = aux0_294_(a3x1, a3x2);
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
xtmp41 = aux0_294_(xtmp39, xtmp42);
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
} // function // aux0(31)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 974(line=83, offs=1) -- 1943(line=166, offs=6)
function
aux1_977_(a3x1, a3x2, a3x3)
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
// ././../../../StreamDemo/DATS/StreamDemo.dats: 1061(line=93, offs=1) -- 1089(line=94, offs=19)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2259(line=192, offs=1) -- 2308(line=194, offs=25)
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
} // function // StreamDemo$dir(28)
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
xtmp55 = aux1_977_(a3x1, a3x2, a3x3);
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
xtmp59 = aux0_294_(a3x2, a3x3);
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
xtmp63 = aux1_977_(xtmp61, a3x2, xtmp64);
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
xtmp70 = aux0_294_(a3x2, a3x3);
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
xtmp74 = aux1_977_(xtmp72, xtmp75, a3x3);
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
xtmp79 = aux1_977_(a3x1, xtmp80, xtmp77);
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
xtmp83 = aux1_977_(a3x1, a3x2, a3x3);
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
xtmp87 = aux1_977_(a3x1, xtmp85, xtmp88);
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
} // function // aux1(37)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 195(line=15, offs=1) -- 234(line=18, offs=16)
{
{
xtmp90 = [0];
}
;
;
} // val(H0Pvar(ys(50)))
{
{
xtmp91 = [0];
}
;
;
} // val(H0Pvar(zs(51)))
;
{
xtmp92 = aux1_977_(a2x1, xtmp90, xtmp91);
}
;
return xtmp92;
} // function // StreamDemo_moves(30)
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
} // function // StreamDemo_make(23)
;
{
// ./Permutation.dats: 945(line=55, offs=1) -- 1148(line=72, offs=8)
function
StreamDemo2_stream_553_()
{
let xtmp99;
let xtmp100;
let xtmp116;
// ./Permutation.dats: 985(line=59, offs=1) -- 1104(line=68, offs=19)
{
// ./Permutation.dats: 1012(line=61, offs=1) -- 1102(line=67, offs=33)
function
auxlst_1015_(a2x1)
{
let xtmp95;
let xtmp96;
let xtmp97;
let xtmp98;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp96 = gint_lt_sint_sint_2125_(a2x1, 6);
}
;
if
(xtmp96)
// then
{
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp98 = gint_add_sint_sint_3439_(a2x1, 1);
}
;
xtmp97 = auxlst_1015_(xtmp98);
}
;
xtmp95 = [1, a2x1, xtmp97];
}
;
} // if-then
else
{
{
xtmp95 = [0];
}
;
} // if-else
;
return xtmp95;
} // function // auxlst(4)
;
{
xtmp99 = auxlst_1015_(0);
}
;
;
} // val(H0Pvar(xs(0)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 297(line=24, offs=1) -- 722(line=60, offs=8)
function
stream_vt2t_1340_(a2x1)
{
let xtmp114;
let xtmp115;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 374(line=32, offs=1) -- 720(line=59, offs=8)
function
auxmain_377_(a3x1)
{
let xtmp103;
let xtmp113;
;
xtmp113 =
function()
{
let xtmp104;
let xtmp105;
let xtmp106;
let xtmp107;
let xtmp108;
let xtmp109;
let xtmp110;
let xtmp111;
let xtmp112;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 421(line=38, offs=1) -- 461(line=39, offs=32)
{
{
xtmp104 = XATS2JS_fcast(a3x1);
}
;
;
} // val(H0Pvar(xs(55)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 462(line=40, offs=1) -- 474(line=40, offs=13)
{
xtmp105 = XATS2JS_llazy_eval(xtmp104);
;
} // val(H0Pvar(r0(56)))
;
{
xtmp107 = 0;
do {
do {
if(0!==xtmp105[0]) break;
xtmp107 = 1;
} while(false);
if(xtmp107 > 0 ) break;
do {
if(1!==xtmp105[0]) break;
//L1PCKany();
//L1PCKany();
xtmp107 = 2;
} while(false);
if(xtmp107 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp107) {
case 1:
{
xtmp106 = [0];
}
;
break;
case 2:
xtmp108 = xtmp105[1];
xtmp109 = xtmp105[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 586(line=52, offs=3) -- 619(line=53, offs=25)
{
{
xtmp110 = XATS2JS_fcast(xtmp109);
}
;
;
} // val(H0Pvar(xs(61)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 622(line=54, offs=3) -- 656(line=55, offs=26)
{
{
xtmp111 = auxmain_377_(xtmp110);
}
;
XATS2JS_lval_set(XATS2JS_new_cofs(xtmp105,2), xtmp111);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp112 = XATS2JS_fcast(xtmp105);
}
;
xtmp106 = xtmp112;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp106;
} // lam-function
;
xtmp103 = XATS2JS_new_lazy(xtmp113);
return xtmp103;
} // function // auxmain(40)
;
{
{
xtmp115 = XATS2JS_fcast(a2x1);
}
;
xtmp114 = auxmain_377_(xtmp115);
}
;
return xtmp114;
} // function // stream_vt2t(7)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 17871(line=1451, offs=1) -- 18120(line=1469, offs=13)
function
gseq_permutize_6292_(a2x1)
{
let xtmp118;
let xtmp135;
let xtmp277;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 17919(line=1456, offs=1) -- 17952(line=1457, offs=25)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 8041(line=687, offs=1) -- 8098(line=689, offs=43)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 3937(line=348, offs=1) -- 3986(line=350, offs=31)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 5337(line=469, offs=1) -- 5445(line=478, offs=8)
function
list_copy_vt_3914_(a5x1)
{
let xtmp120;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 5412(line=477, offs=1) -- 5443(line=477, offs=32)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4363(line=384, offs=1) -- 4802(line=421, offs=22)
function
list_map_vt_3610_(a6x1)
{
let xtmp133;
let xtmp134;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4405(line=388, offs=1) -- 4429(line=389, offs=17)
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4430(line=390, offs=1) -- 4464(line=391, offs=27)
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4468(line=393, offs=1) -- 4724(line=415, offs=5)
function
loop_4471_(a7x1, a7x2)
{
let a7y1;
let a7y2;
let xtmp124;
let xtmp125;
let xtmp126;
let xtmp127;
let xtmp128;
let xtmp129;
let xtmp131;
let xtmp132;
do {
;
;
{
xtmp125 = 0;
do {
do {
if(0!==a7x1[0]) break;
xtmp125 = 1;
} while(false);
if(xtmp125 > 0 ) break;
do {
if(1!==a7x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp125 = 2;
} while(false);
if(xtmp125 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp125) {
case 1:
{
xtmp126 = [0];
}
;
XATS2JS_lval_set(a7x2, xtmp126);
xtmp124 = null;
break;
case 2:
xtmp127 = a7x1[1];
xtmp128 = a7x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4621(line=408, offs=1) -- 4650(line=409, offs=21)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 5412(line=477, offs=1) -- 5443(line=477, offs=32)
function
map$fopr_2300_(a8x1)
{
;
return a8x1;
} // function // map$fopr(46)
;
xtmp129 = map$fopr_2300_(xtmp127);
}
;
;
} // val(H0Pvar(y0(73)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4651(line=410, offs=1) -- 4687(line=411, offs=28)
{
{
xtmp131 = [1, xtmp129, XATS2JS_top];
}
;
XATS2JS_lval_set(a7x2, xtmp131);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp132 = loop_4471_(xtmp128, XATS2JS_new_cofs(XATS2JS_lval_get(a7x2),2));
}
;
xtmp124 = null;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp124;
} // function // loop(48)
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4755(line=419, offs=1) -- 4774(line=419, offs=20)
{
xtmp133 = XATS2JS_new_var0();
} // val(r0(75))
;
{
xtmp134 = loop_4471_(a6x1, xtmp133);
}
;
return XATS2JS_lval_get(xtmp133);
} // function // list_map_vt(47)
;
xtmp120 = list_map_vt_3610_(a5x1);
}
;
return xtmp120;
} // function // list_copy_vt(45)
;
// } // val-binding
const // implval/fun
list_listize_3278_ = list_copy_vt_3914_
;
// } // val-binding
const // implval/fun
gseq_listize_2279_ = list_listize_3278_
;
xtmp118 = gseq_listize_2279_(a2x1);
}
;
;
} // val(H0Pvar(y0(63)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 17953(line=1458, offs=1) -- 17987(line=1459, offs=26)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9111(line=752, offs=1) -- 10078(line=834, offs=13)
function
list_vt_permutize_4100_(a3x1)
{
let xtmp267;
let xtmp268;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9164(line=757, offs=1) -- 9197(line=758, offs=26)
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9201(line=760, offs=1) -- 10008(line=830, offs=9)
function
auxmain1_9204_(a4x1, a4x2)
{
let xtmp139;
let xtmp140;
let xtmp141;
let xtmp142;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
xtmp140 = gint_gte_sint_sint_2466_(a4x2, 2);
}
;
if
(xtmp140)
// then
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9289(line=769, offs=1) -- 9311(line=770, offs=19)
{
{
xtmp141 = [0];
}
;
;
} // val(H0Pvar(ys(81)))
;
{
xtmp142 = auxmain2_9373_(a4x1, xtmp141, a4x2, 0);
}
;
xtmp139 = xtmp142;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1408(line=117, offs=1) -- 1483(line=120, offs=36)
function
stream_vt_sing_1984_(a5x1)
{
let xtmp144;
let xtmp165;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1272(line=103, offs=1) -- 1381(line=113, offs=8)
function
stream_vt_cons_1889_(a6x1, a6x2)
{
let xtmp147;
let xtmp163;
let xtmp164;
;
;
xtmp163 =
function()
{
let xtmp148;
let xtmp149;
let xtmp161;
{
xtmp148 = [1, a6x1, a6x2];
}
;
return xtmp148;
} // lam-function
;
xtmp164 =
function()
{
let xtmp148;
let xtmp149;
let xtmp161;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 10328(line=853, offs=1) -- 10387(line=856, offs=31)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1225(line=100, offs=1) -- 1474(line=120, offs=13)
function
list_vt_free_2092_(a9x1)
{
let xtmp160;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1290(line=106, offs=1) -- 1452(line=119, offs=5)
function
loop_1293_(a10x1)
{
let a10y1;
let xtmp152;
let xtmp153;
let xtmp154;
let xtmp155;
let xtmp156;
let xtmp159;
do {
;
{
xtmp153 = 0;
do {
do {
if(0!==a10x1[0]) break;
xtmp153 = 1;
} while(false);
if(xtmp153 > 0 ) break;
do {
if(1!==a10x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp153 = 2;
} while(false);
if(xtmp153 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp153) {
case 1:
{
xtmp152 = [-1];;
}
;
break;
case 2:
xtmp154 = a10x1[1];
xtmp155 = a10x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1412(line=117, offs=3) -- 1434(line=117, offs=25)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 175(line=18, offs=1) -- 207(line=20, offs=18)
function
g_free_1550_(a11x1)
{
let xtmp158;
;
{
xtmp158 = [-1];;
}
;
return xtmp158;
} // function // g_free(54)
;
xtmp156 = g_free_1550_(xtmp154);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(156)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(156)));
} // val(H0Pnil())
;
{
// tail-recursion:
// L1CMDapp(tmp(159); L1VALfcst(loop(56)); L1VALtmp(tmp(155)))
a10y1 = xtmp155; a10x1 = a10y1; continue;
}
;
xtmp152 = xtmp159;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp152;
} // function // loop(56)
;
{
xtmp160 = loop_1293_(a9x1);
}
;
return xtmp160;
} // function // list_vt_free(55)
;
// } // val-binding
const // implval/fun
g_free_1550_ = list_vt_free_2092_
;
xtmp149 = g_free_1550_(a6x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a9x1)
{
;
return XATS2JS_llazy_free(a9x1);
} // function // stream_vt_free(57)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp161 = g_free_1550_(a6x2);
}
;
} // lam-function
;
xtmp147 = XATS2JS_new_llazy(xtmp163,xtmp164);
return xtmp147;
} // function // stream_vt_cons(53)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1210(line=99, offs=1) -- 1271(line=102, offs=25)
function
stream_vt_nil_1837_()
{
let xtmp166;
let xtmp168;
let xtmp169;
xtmp168 =
function()
{
let xtmp167;
{
xtmp167 = [0];
}
;
return xtmp167;
} // lam-function
;
xtmp169 =
function()
{
let xtmp167;
} // lam-function
;
xtmp166 = XATS2JS_new_llazy(xtmp168,xtmp169);
return xtmp166;
} // function // stream_vt_nil(58)
;
xtmp165 = stream_vt_nil_1837_();
}
;
xtmp144 = stream_vt_cons_1889_(a5x1, xtmp165);
}
;
return xtmp144;
} // function // stream_vt_sing(52)
;
xtmp139 = stream_vt_sing_1984_(a4x1);
}
;
} // if-else
;
return xtmp139;
} // function // auxmain1(50)
function
auxmain2_9373_(a4x1, a4x2, a4x3, a4x4)
{
let xtmp174;
let xtmp265;
let xtmp266;
;
;
;
;
xtmp265 =
function()
{
let xtmp175;
let xtmp176;
let xtmp177;
let xtmp189;
let xtmp190;
let xtmp191;
let xtmp192;
let xtmp193;
let xtmp194;
let xtmp222;
let xtmp223;
let xtmp242;
let xtmp243;
let xtmp244;
let xtmp245;
let xtmp246;
{
xtmp176 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp176 = 1;
} while(false);
if(xtmp176 > 0 ) break;
do {
if(1!==a4x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp176 = 2;
} while(false);
if(xtmp176 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp176) {
case 1:
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9548(line=794, offs=1) -- 9576(line=795, offs=20)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1225(line=100, offs=1) -- 1474(line=120, offs=13)
function
list_vt_free_2092_(a6x1)
{
let xtmp188;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1290(line=106, offs=1) -- 1452(line=119, offs=5)
function
loop_1293_(a7x1)
{
let a7y1;
let xtmp180;
let xtmp181;
let xtmp182;
let xtmp183;
let xtmp184;
let xtmp187;
do {
;
{
xtmp181 = 0;
do {
do {
if(0!==a7x1[0]) break;
xtmp181 = 1;
} while(false);
if(xtmp181 > 0 ) break;
do {
if(1!==a7x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp181 = 2;
} while(false);
if(xtmp181 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp181) {
case 1:
{
xtmp180 = [-1];;
}
;
break;
case 2:
xtmp182 = a7x1[1];
xtmp183 = a7x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1412(line=117, offs=3) -- 1434(line=117, offs=25)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 175(line=18, offs=1) -- 207(line=20, offs=18)
function
g_free_1550_(a8x1)
{
let xtmp186;
;
{
xtmp186 = [-1];;
}
;
return xtmp186;
} // function // g_free(54)
;
xtmp184 = g_free_1550_(xtmp182);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(184)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(184)));
} // val(H0Pnil())
;
{
// tail-recursion:
// L1CMDapp(tmp(187); L1VALfcst(loop(56)); L1VALtmp(tmp(183)))
a7y1 = xtmp183; a7x1 = a7y1; continue;
}
;
xtmp180 = xtmp187;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp180;
} // function // loop(56)
;
{
xtmp188 = loop_1293_(a6x1);
}
;
return xtmp188;
} // function // list_vt_free(55)
;
xtmp177 = list_vt_free_2092_(a4x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(177)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(177)));
} // val(H0Pnil())
;
{
xtmp189 = [0];
}
;
xtmp175 = xtmp189;
break;
case 2:
xtmp190 = a4x1[1];
xtmp191 = a4x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9611(line=800, offs=1) -- 9625(line=800, offs=15)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp192 = gint_add_sint_sint_3439_(a4x3, a4x4);
}
;
;
} // val(H0Pvar(n0(99)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9626(line=801, offs=1) -- 9643(line=801, offs=18)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2065(line=150, offs=1) -- 2114(line=151, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_pred_sint_1913_ = XATS2JS_gint_pred_sint
;
xtmp193 = gint_pred_sint_1913_(xtmp192);
}
;
;
} // val(H0Pvar(n1(100)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9644(line=802, offs=1) -- 9716(line=807, offs=17)
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9680(line=805, offs=1) -- 9714(line=806, offs=26)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 4635(line=377, offs=1) -- 5015(line=408, offs=10)
function
list_vt_rappend11_3020_(a6x1, a6x2)
{
let xtmp221;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 4717(line=386, offs=1) -- 4990(line=406, offs=5)
function
loop_4720_(a7x1, a7x2)
{
let a7y1;
let a7y2;
let xtmp199;
let xtmp200;
let xtmp215;
let xtmp216;
let xtmp217;
let xtmp219;
let xtmp220;
do {
;
;
{
xtmp200 = 0;
do {
do {
if(0!==a7x1[0]) break;
xtmp200 = 1;
} while(false);
if(xtmp200 > 0 ) break;
do {
if(1!==a7x1[0]) break;
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
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1527(line=124, offs=1) -- 1906(line=155, offs=8)
function
list_vt_copy_2165_(a8x1)
{
let xtmp213;
let xtmp214;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1569(line=128, offs=1) -- 1852(line=150, offs=5)
function
loop_1572_(a9x1, a9x2)
{
let a9y1;
let a9y2;
let xtmp204;
let xtmp205;
let xtmp206;
let xtmp207;
let xtmp208;
let xtmp209;
let xtmp211;
let xtmp212;
do {
;
;
{
xtmp205 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp205 = 1;
} while(false);
if(xtmp205 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp205 = 2;
} while(false);
if(xtmp205 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp205) {
case 1:
{
xtmp206 = [0];
}
;
XATS2JS_lval_set(a9x2, xtmp206);
xtmp204 = null;
break;
case 2:
xtmp207 = a9x1[1];
xtmp208 = a9x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1752(line=144, offs=3) -- 1774(line=144, offs=25)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 230(line=24, offs=1) -- 263(line=26, offs=19)
function
g_copy_1581_(a10x1)
{
;
return a10x1;
} // function // g_copy(66)
;
xtmp209 = g_copy_1581_(xtmp207);
}
;
;
} // val(H0Pvar(x0(114)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1777(line=145, offs=3) -- 1815(line=146, offs=30)
{
{
xtmp211 = [1, xtmp209, XATS2JS_top];
}
;
XATS2JS_lval_set(a9x2, xtmp211);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp212 = loop_1572_(xtmp208, XATS2JS_new_cofs(XATS2JS_lval_get(a9x2),2));
}
;
xtmp204 = null;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp204;
} // function // loop(65)
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 1860(line=153, offs=1) -- 1878(line=153, offs=19)
{
xtmp213 = XATS2JS_new_var0();
} // val(r0(116))
;
{
xtmp214 = loop_1572_(a8x1, xtmp213);
}
;
return XATS2JS_lval_get(xtmp213);
} // function // list_vt_copy(64)
;
xtmp199 = list_vt_copy_2165_(a7x2);
}
;
break;
case 2:
xtmp215 = a7x1[1];
xtmp216 = a7x1[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 4901(line=402, offs=1) -- 4923(line=402, offs=23)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 230(line=24, offs=1) -- 263(line=26, offs=19)
function
g_copy_1581_(a8x1)
{
;
return a8x1;
} // function // g_copy(66)
;
xtmp217 = g_copy_1581_(xtmp215);
}
;
;
} // val(H0Pvar(x0(119)))
;
{
{
xtmp220 = [1, xtmp217, a7x2];
}
;
// tail-recursion:
// L1CMDapp(tmp(219); L1VALfcst(loop(63)); L1VALtmp(tmp(216)), L1VALtmp(tmp(220)))
a7y1 = xtmp216; a7y2 = xtmp220; a7x1 = a7y1; a7x2 = a7y2; continue;
}
;
xtmp199 = xtmp219;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp199;
} // function // loop(63)
;
{
xtmp221 = loop_4720_(a6x1, a6x2);
}
;
return xtmp221;
} // function // list_vt_rappend11(62)
;
xtmp194 = list_vt_rappend11_3020_(a4x2, xtmp191);
}
;
;
} // val(H0Pvar(xy(102)))
;
{
xtmp222 = auxmain1_9204_(xtmp194, xtmp193);
}
;
;
} // val(H0Pvar(res1(101)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9717(line=808, offs=1) -- 9872(line=817, offs=23)
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9774(line=812, offs=1) -- 9790(line=812, offs=17)
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9791(line=813, offs=1) -- 9808(line=813, offs=18)
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9809(line=814, offs=1) -- 9870(line=816, offs=44)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9195(line=744, offs=1) -- 9519(line=776, offs=8)
function
stream_vt_map0_4087_(a6x1)
{
let xtmp241;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9262(line=752, offs=1) -- 9517(line=775, offs=12)
function
auxmain_9265_(a7x1)
{
let xtmp226;
let xtmp239;
let xtmp240;
;
xtmp239 =
function()
{
let xtmp227;
let xtmp228;
let xtmp229;
let xtmp230;
let xtmp231;
let xtmp232;
let xtmp235;
let xtmp236;
let xtmp237;
xtmp228 = XATS2JS_llazy_eval(a7x1);
{
xtmp229 = 0;
do {
do {
if(0!==xtmp228[0]) break;
xtmp229 = 1;
} while(false);
if(xtmp229 > 0 ) break;
do {
if(1!==xtmp228[0]) break;
//L1PCKany();
//L1PCKany();
xtmp229 = 2;
} while(false);
if(xtmp229 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp229) {
case 1:
{
xtmp227 = [0];
}
;
break;
case 2:
xtmp230 = xtmp228[1];
xtmp231 = xtmp228[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9441(line=770, offs=3) -- 9473(line=771, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9809(line=814, offs=1) -- 9870(line=816, offs=44)
function
map0$fopr_2343_(a9x1)
{
let xtmp234;
;
{
xtmp234 = [1, xtmp190, a9x1];
}
;
return xtmp234;
} // function // map0$fopr(67)
;
xtmp232 = map0$fopr_2343_(xtmp230);
}
;
;
} // val(H0Pvar(y0(127)))
;
{
{
xtmp236 = auxmain_9265_(xtmp231);
}
;
xtmp235 = [1, xtmp232, xtmp236];
}
;
xtmp227 = xtmp235;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp227;
} // lam-function
;
xtmp240 =
function()
{
let xtmp227;
let xtmp228;
let xtmp229;
let xtmp230;
let xtmp231;
let xtmp232;
let xtmp235;
let xtmp236;
let xtmp237;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a10x1)
{
;
return XATS2JS_llazy_free(a10x1);
} // function // stream_vt_free(57)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp237 = g_free_1550_(a7x1);
}
;
} // lam-function
;
xtmp226 = XATS2JS_new_llazy(xtmp239,xtmp240);
return xtmp226;
} // function // auxmain(69)
;
{
xtmp241 = auxmain_9265_(a6x1);
}
;
return xtmp241;
} // function // stream_vt_map0(68)
;
xtmp223 = stream_vt_map0_4087_(xtmp222);
}
;
;
} // val(H0Pvar(res1(120)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9882(line=820, offs=3) -- 9915(line=822, offs=23)
{
{
xtmp242 = [1, xtmp190, a4x2];
}
;
;
} // val(H0Pvar(ys(128)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 9918(line=823, offs=3) -- 9961(line=825, offs=31)
{
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp244 = gint_sub_sint_sint_3524_(a4x3, 1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp245 = gint_add_sint_sint_3439_(a4x4, 1);
}
;
xtmp243 = auxmain2_9373_(xtmp191, xtmp242, xtmp244, xtmp245);
}
;
;
} // val(H0Pvar(res2(129)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 6283(line=506, offs=1) -- 6526(line=527, offs=8)
function
stream_vt_append_3419_(a6x1, a6x2)
{
let xtmp264;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 6361(line=514, offs=1) -- 6524(line=526, offs=12)
function
append_6364_(a7x1, a7x2)
{
let xtmp251;
let xtmp262;
let xtmp263;
;
;
xtmp262 =
function()
{
let xtmp252;
let xtmp253;
let xtmp254;
let xtmp255;
let xtmp256;
let xtmp257;
let xtmp258;
let xtmp260;
xtmp253 = XATS2JS_llazy_eval(a7x1);
{
xtmp254 = 0;
do {
do {
if(0!==xtmp253[0]) break;
xtmp254 = 1;
} while(false);
if(xtmp254 > 0 ) break;
do {
if(1!==xtmp253[0]) break;
//L1PCKany();
//L1PCKany();
xtmp254 = 2;
} while(false);
if(xtmp254 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp254) {
case 1:
xtmp252 = XATS2JS_llazy_eval(a7x2);
break;
case 2:
xtmp255 = xtmp253[1];
xtmp256 = xtmp253[2];
{
{
xtmp257 = append_6364_(xtmp256, a7x2);
}
;
xtmp252 = [1, xtmp255, xtmp257];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp252;
} // lam-function
;
xtmp263 =
function()
{
let xtmp252;
let xtmp253;
let xtmp254;
let xtmp255;
let xtmp256;
let xtmp257;
let xtmp258;
let xtmp260;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a10x1)
{
;
return XATS2JS_llazy_free(a10x1);
} // function // stream_vt_free(57)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp258 = g_free_1550_(a7x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a10x1)
{
;
return XATS2JS_llazy_free(a10x1);
} // function // stream_vt_free(57)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp260 = g_free_1550_(a7x2);
}
;
} // lam-function
;
xtmp251 = XATS2JS_new_llazy(xtmp262,xtmp263);
return xtmp251;
} // function // append(73)
;
{
xtmp264 = append_6364_(a6x1, a6x2);
}
;
return xtmp264;
} // function // stream_vt_append(72)
;
xtmp246 = stream_vt_append_3419_(xtmp223, xtmp243);
}
;
xtmp175 = XATS2JS_llazy_eval(xtmp246);
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp175;
} // lam-function
;
xtmp266 =
function()
{
let xtmp175;
let xtmp176;
let xtmp177;
let xtmp189;
let xtmp190;
let xtmp191;
let xtmp192;
let xtmp193;
let xtmp194;
let xtmp222;
let xtmp223;
let xtmp242;
let xtmp243;
let xtmp244;
let xtmp245;
let xtmp246;
} // lam-function
;
xtmp174 = XATS2JS_new_llazy(xtmp265,xtmp266);
return xtmp174;
} // function // auxmain2(59)
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a4x1)
{
let xtmp276;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a5x1, a5x2)
{
let a5y1;
let a5y2;
let xtmp272;
let xtmp273;
let xtmp274;
let xtmp275;
do {
;
;
{
xtmp273 = 0;
do {
do {
if(0!==a5x1[0]) break;
xtmp273 = 1;
} while(false);
if(xtmp273 > 0 ) break;
do {
if(1!==a5x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp273 = 2;
} while(false);
if(xtmp273 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp273) {
case 1:
xtmp272 = a5x2;
break;
case 2:
xtmp274 = a5x1[2];
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp275 = gint_add_sint_sint_3439_(a5x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(272); L1VALfcst(loop(75)); L1VALtmp(tmp(274)), L1VALtmp(tmp(275)))
a5y1 = xtmp274; a5y2 = xtmp275; a5x1 = a5y1; a5x2 = a5y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp272;
} // function // loop(75)
;
{
xtmp276 = loop_2130_(a4x1, 0);
}
;
return xtmp276;
} // function // list_vt_length(74)
;
xtmp268 = list_vt_length_2328_(a3x1);
}
;
xtmp267 = auxmain1_9204_(a3x1, xtmp268);
}
;
return xtmp267;
} // function // list_vt_permutize(49)
;
xtmp135 = list_vt_permutize_4100_(xtmp118);
}
;
;
} // val(H0Pvar(ys(76)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 18037(line=1466, offs=3) -- 18061(line=1466, offs=27)
// L1DCLnone1(H0Cnone1(...));
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 18064(line=1467, offs=3) -- 18114(line=1467, offs=53)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9195(line=744, offs=1) -- 9519(line=776, offs=8)
function
stream_vt_map0_4087_(a3x1)
{
let xtmp322;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9262(line=752, offs=1) -- 9517(line=775, offs=12)
function
auxmain_9265_(a4x1)
{
let xtmp280;
let xtmp320;
let xtmp321;
;
xtmp320 =
function()
{
let xtmp281;
let xtmp282;
let xtmp283;
let xtmp284;
let xtmp285;
let xtmp286;
let xtmp316;
let xtmp317;
let xtmp318;
xtmp282 = XATS2JS_llazy_eval(a4x1);
{
xtmp283 = 0;
do {
do {
if(0!==xtmp282[0]) break;
xtmp283 = 1;
} while(false);
if(xtmp283 > 0 ) break;
do {
if(1!==xtmp282[0]) break;
//L1PCKany();
//L1PCKany();
xtmp283 = 2;
} while(false);
if(xtmp283 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp283) {
case 1:
{
xtmp281 = [0];
}
;
break;
case 2:
xtmp284 = xtmp282[1];
xtmp285 = xtmp282[2];
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 9441(line=770, offs=3) -- 9473(line=771, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 18064(line=1467, offs=3) -- 18114(line=1467, offs=53)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 5511(line=454, offs=1) -- 5628(line=464, offs=8)
function
gseq_unlist_vt_2563_(a7x1)
{
let xtmp288;
let xtmp301;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 5556(line=459, offs=1) -- 5588(line=460, offs=24)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 3691(line=301, offs=1) -- 3769(line=304, offs=38)
function
list_vt_reverse_2756_(a8x1)
{
let xtmp290;
let xtmp300;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 3792(line=308, offs=1) -- 4163(line=339, offs=10)
function
list_vt_rappend_2826_(a9x1, a9x2)
{
let xtmp299;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 3872(line=317, offs=1) -- 4138(line=337, offs=5)
function
loop_3875_(a10x1, a10x2)
{
let a10y1;
let a10y2;
let xtmp295;
let xtmp296;
let xtmp297;
let xtmp298;
do {
;
;
{
xtmp296 = 0;
do {
do {
if(0!==a10x1[0]) break;
xtmp296 = 1;
} while(false);
if(xtmp296 > 0 ) break;
do {
if(1!==a10x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp296 = 2;
} while(false);
if(xtmp296 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp296) {
case 1:
xtmp295 = a10x2;
break;
case 2:
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 4035(line=332, offs=3) -- 4050(line=332, offs=18)
{
xtmp297 = a10x1[2];
;
} // val(H0Pvar(xs1(150)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list_vt.dats: 4053(line=333, offs=3) -- 4075(line=333, offs=25)
{
XATS2JS_lval_set(XATS2JS_new_cofs(a10x1,2), a10x2);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
// tail-recursion:
// L1CMDapp(tmp(298); L1VALfcst(loop(79)); L1VALtmp(tmp(297)), L1VALtmp(arg[1](293)))
a10y1 = xtmp297; a10y2 = a10x1; a10x1 = a10y1; a10x2 = a10y2; continue;
}
;
xtmp295 = xtmp298;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp295;
} // function // loop(79)
;
{
xtmp299 = loop_3875_(a9x1, a9x2);
}
;
return xtmp299;
} // function // list_vt_rappend(78)
;
{
xtmp300 = [0];
}
;
xtmp290 = list_vt_rappend_2826_(a8x1, xtmp300);
}
;
return xtmp290;
} // function // list_vt_reverse(77)
;
xtmp288 = list_vt_reverse_2756_(a7x1);
}
;
;
} // val(H0Pvar(xx(143)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 5659(line=466, offs=1) -- 5890(line=486, offs=8)
function
gseq_unrlist_vt_2617_(a8x1)
{
let xtmp313;
let xtmp314;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 5705(line=471, offs=1) -- 5852(line=483, offs=5)
function
loop_5708_(a9x1, a9x2)
{
let xtmp305;
let xtmp306;
let xtmp307;
let xtmp308;
let xtmp309;
;
;
{
xtmp306 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp306 = 1;
} while(false);
if(xtmp306 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp306 = 2;
} while(false);
if(xtmp306 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp306) {
case 1:
xtmp305 = a9x2;
break;
case 2:
xtmp307 = a9x1[1];
xtmp308 = a9x1[2];
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 6926(line=605, offs=1) -- 6994(line=609, offs=31)
function
gseq_cons_297_(a10x1, a10x2)
{
let xtmp312;
;
;
{
xtmp312 = [1, a10x1, a10x2];
}
;
return xtmp312;
} // function // gseq_cons(82)
;
xtmp309 = gseq_cons_297_(xtmp307, a9x2);
}
;
xtmp305 = loop_5708_(xtmp308, xtmp309);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp305;
} // function // loop(81)
;
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 6865(line=600, offs=1) -- 6925(line=604, offs=24)
function
gseq_nil_262_()
{
let xtmp315;
{
xtmp315 = [0];
}
;
return xtmp315;
} // function // gseq_nil(83)
;
xtmp314 = gseq_nil_262_();
}
;
xtmp313 = loop_5708_(a8x1, xtmp314);
}
;
return xtmp313;
} // function // gseq_unrlist_vt(80)
;
xtmp301 = gseq_unrlist_vt_2617_(xtmp288);
}
;
return xtmp301;
} // function // gseq_unlist_vt(76)
;
// } // val-binding
const // implval/fun
map0$fopr_2343_ = gseq_unlist_vt_2563_
;
xtmp286 = map0$fopr_2343_(xtmp284);
}
;
;
} // val(H0Pvar(y0(127)))
;
{
{
xtmp317 = auxmain_9265_(xtmp285);
}
;
xtmp316 = [1, xtmp286, xtmp317];
}
;
xtmp281 = xtmp316;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp281;
} // lam-function
;
xtmp321 =
function()
{
let xtmp281;
let xtmp282;
let xtmp283;
let xtmp284;
let xtmp285;
let xtmp286;
let xtmp316;
let xtmp317;
let xtmp318;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a7x1)
{
;
return XATS2JS_llazy_free(a7x1);
} // function // stream_vt_free(57)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp318 = g_free_1550_(a4x1);
}
;
} // lam-function
;
xtmp280 = XATS2JS_new_llazy(xtmp320,xtmp321);
return xtmp280;
} // function // auxmain(69)
;
{
xtmp322 = auxmain_9265_(a3x1);
}
;
return xtmp322;
} // function // stream_vt_map0(68)
;
xtmp277 = stream_vt_map0_4087_(xtmp135);
}
;
return xtmp277;
} // function // gseq_permutize(8)
;
xtmp116 = gseq_permutize_6292_(xtmp99);
}
;
xtmp100 = stream_vt2t_1340_(xtmp116);
}
;
return xtmp100;
} // function // StreamDemo2_stream(3)
;
xtop93 = StreamDemo2_stream_553_();
}
;
xtop0 = StreamDemo_make_121_(xtop93);
}
;
;
} // val(H0Pvar(the_demo(19)))

// in-of-local
// ././../../../StreamDemo2/StreamDemo2_.dats: 1090(line=68, offs=1) -- 1159(line=70, offs=40)
function
the_StreamDemo2_reset()
{
let xtmp323;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2907(line=243, offs=1) -- 3167(line=259, offs=8)
function
StreamDemo_reset_433_(a2x1)
{
let xtmp335;
let xtmp339;
let xtmp340;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3020(line=251, offs=1) -- 3148(line=258, offs=5)
function
loop_3023_(a3x1)
{
let xtmp326;
let xtmp333;
let xtmp334;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3047(line=254, offs=1) -- 3081(line=254, offs=35)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2424(line=205, offs=1) -- 2628(line=220, offs=15)
function
StreamDemo_get_elt_202_(a4x1)
{
let xtmp328;
let xtmp329;
let xtmp330;
let xtmp331;
let xtmp332;
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
xtmp328 = a0ref_get_2457_(a4x1[2]);
}
;
;
} // val(H0Pvar(xs(164)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2547(line=215, offs=1) -- 2578(line=216, offs=27)
{
xtmp329 = XATS2JS_lazy_eval(xtmp328);
if(0!==xtmp329[0]) XATS2JS_patckerr0();
;
xtmp330 = xtmp329[1];
xtmp331 = xtmp329[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(4)); -1; H0Pvar(x0(165)), H0Pvar(xs(166))))
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
xtmp332 = a0ref_set_2496_(a4x1[2], xtmp331);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(332)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(332)));
} // val(H0Pnil())
;
return xtmp330;
} // function // StreamDemo_get_elt(86)
;
xtmp326 = StreamDemo_get_elt_202_(a3x1);
}
;
;
} // val(H0Pvar(opt(162)))
;
{
xtmp334 = 0;
do {
do {
if(0!==xtmp326[0]) break;
xtmp334 = 1;
} while(false);
if(xtmp334 > 0 ) break;
do {
if(1!==xtmp326[0]) break;
xtmp334 = 2;
} while(false);
if(xtmp334 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp334) {
case 1:
{
xtmp333 = [-1];;
}
;
break;
case 2:
{
xtmp333 = loop_3023_(a3x1);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp333;
} // function // loop(85)
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2955(line=247, offs=1) -- 2993(line=248, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2754(line=230, offs=1) -- 2841(line=236, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp338;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp338 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp338;
} // function // StreamDemo_set_dir(89)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp339 = gint_sub_sint_sint_3524_(0, 1);
}
;
xtmp335 = StreamDemo_set_dir_343_(a2x1, xtmp339);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(335)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(335)));
} // val(H0Pnil())
;
{
xtmp340 = loop_3023_(a2x1);
}
;
return xtmp340;
} // function // StreamDemo_reset(84)
;
xtmp323 = StreamDemo_reset_433_(xtop0);
}
;
return xtmp323;
} // function // the_StreamDemo2_reset(15)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1163(line=72, offs=1) -- 1232(line=74, offs=40)
function
the_StreamDemo2_next1()
{
let xtmp341;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3231(line=263, offs=1) -- 3349(line=269, offs=8)
function
StreamDemo_next1_492_(a2x1)
{
let xtmp343;
let xtmp347;
let xtmp348;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3279(line=267, offs=1) -- 3317(line=268, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2754(line=230, offs=1) -- 2841(line=236, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp346;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp346 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp346;
} // function // StreamDemo_set_dir(89)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp347 = gint_add_sint_sint_3439_(0, 1);
}
;
xtmp343 = StreamDemo_set_dir_343_(a2x1, xtmp347);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(343)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(343)));
} // val(H0Pnil())
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2424(line=205, offs=1) -- 2628(line=220, offs=15)
function
StreamDemo_get_elt_202_(a3x1)
{
let xtmp350;
let xtmp351;
let xtmp352;
let xtmp353;
let xtmp354;
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
xtmp350 = a0ref_get_2457_(a3x1[2]);
}
;
;
} // val(H0Pvar(xs(164)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2547(line=215, offs=1) -- 2578(line=216, offs=27)
{
xtmp351 = XATS2JS_lazy_eval(xtmp350);
if(0!==xtmp351[0]) XATS2JS_patckerr0();
;
xtmp352 = xtmp351[1];
xtmp353 = xtmp351[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(4)); -1; H0Pvar(x0(165)), H0Pvar(xs(166))))
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
xtmp354 = a0ref_set_2496_(a3x1[2], xtmp353);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(354)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(354)));
} // val(H0Pnil())
;
return xtmp352;
} // function // StreamDemo_get_elt(86)
;
xtmp348 = StreamDemo_get_elt_202_(a2x1);
}
;
return xtmp348;
} // function // StreamDemo_next1(90)
;
xtmp341 = StreamDemo_next1_492_(xtop0);
}
;
return xtmp341;
} // function // the_StreamDemo2_next1(16)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1236(line=76, offs=1) -- 1305(line=78, offs=40)
function
the_StreamDemo2_prev1()
{
let xtmp355;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3353(line=271, offs=1) -- 3471(line=277, offs=8)
function
StreamDemo_prev1_554_(a2x1)
{
let xtmp357;
let xtmp361;
let xtmp362;
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 3401(line=275, offs=1) -- 3439(line=276, offs=30)
{
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2754(line=230, offs=1) -- 2841(line=236, offs=8)
function
StreamDemo_set_dir_343_(a3x1, a3x2)
{
let xtmp360;
;
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
xtmp360 = a0ref_set_2496_(a3x1[1], a3x2);
}
;
return xtmp360;
} // function // StreamDemo_set_dir(89)
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp361 = gint_sub_sint_sint_3524_(0, 1);
}
;
xtmp357 = StreamDemo_set_dir_343_(a2x1, xtmp361);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(357)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(357)));
} // val(H0Pnil())
;
{
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2424(line=205, offs=1) -- 2628(line=220, offs=15)
function
StreamDemo_get_elt_202_(a3x1)
{
let xtmp364;
let xtmp365;
let xtmp366;
let xtmp367;
let xtmp368;
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
xtmp364 = a0ref_get_2457_(a3x1[2]);
}
;
;
} // val(H0Pvar(xs(164)))
;
// ././../../../StreamDemo/DATS/StreamDemo.dats: 2547(line=215, offs=1) -- 2578(line=216, offs=27)
{
xtmp365 = XATS2JS_lazy_eval(xtmp364);
if(0!==xtmp365[0]) XATS2JS_patckerr0();
;
xtmp366 = xtmp365[1];
xtmp367 = xtmp365[2];
} // val(H0Pdapp(H0Pcon(strxcon_cons(4)); -1; H0Pvar(x0(165)), H0Pvar(xs(166))))
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
xtmp368 = a0ref_set_2496_(a3x1[2], xtmp367);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(368)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(368)));
} // val(H0Pnil())
;
return xtmp366;
} // function // StreamDemo_get_elt(86)
;
xtmp362 = StreamDemo_get_elt_202_(a2x1);
}
;
return xtmp362;
} // function // StreamDemo_prev1(91)
;
xtmp355 = StreamDemo_prev1_554_(xtop0);
}
;
return xtmp355;
} // function // the_StreamDemo2_prev1(17)

// } // end-of-local

// ././../../../StreamDemo2/StreamDemo2_.dats: 1371(line=83, offs=1) -- 1426(line=84, offs=48)
function
the_StreamDemo2_title()
{
let xtmp369;
{
// ./Permutation.dats: 683(line=43, offs=1) -- 742(line=45, offs=28)
function
StreamDemo2_title_97_()
{
return "StreamDemo2-Permutation";
} // function // StreamDemo2_title(0)
;
xtmp369 = StreamDemo2_title_97_();
}
;
return xtmp369;
} // function // the_StreamDemo2_title(18)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1427(line=85, offs=1) -- 1494(line=86, offs=60)
function
the_StreamDemo2_stream_name()
{
let xtmp370;
{
// ./Permutation.dats: 763(line=47, offs=1) -- 829(line=49, offs=29)
function
StreamDemo2_stream_name_234_()
{
return "Enumerating permutations";
} // function // StreamDemo2_stream_name(1)
;
xtmp370 = StreamDemo2_stream_name_234_();
}
;
return xtmp370;
} // function // the_StreamDemo2_stream_name(19)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1495(line=87, offs=1) -- 1568(line=88, offs=66)
function
the_StreamDemo2_input_descript()
{
let xtmp371;
{
// ./Permutation.dats: 830(line=50, offs=1) -- 923(line=52, offs=53)
function
StreamDemo2_input_descript_389_()
{
return "The stream of permutations of (0, 1, 2, 3, 4, 5)";
} // function // StreamDemo2_input_descript(2)
;
xtmp371 = StreamDemo2_input_descript_389_();
}
;
return xtmp371;
} // function // the_StreamDemo2_input_descript(20)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1589(line=90, offs=1) -- 1652(line=91, offs=56)
function
the_StreamDemo2_pauseq(a1x1)
{
let xtmp373;
;
{
// ./Permutation.dats: 1329(line=84, offs=1) -- 1529(line=97, offs=8)
function
StreamDemo2_pauseq_637_(a2x1)
{
let xtmp375;
let xtmp376;
let xtmp377;
let xtmp378;
;
{
xtmp376 = 0;
do {
do {
if(0!==a2x1[0]) break;
xtmp376 = 1;
} while(false);
if(xtmp376 > 0 ) break;
do {
if(1!==a2x1[0]) break;
//L1PCKany();
xtmp376 = 2;
} while(false);
if(xtmp376 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp376) {
case 1:
xtmp375 = false;
break;
case 2:
xtmp377 = a2x1[1];
// ./Permutation.dats: 1436(line=92, offs=5) -- 1479(line=93, offs=36)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 10668(line=868, offs=1) -- 10778(line=876, offs=8)
function
gseq_sortedq_4162_(a3x1)
{
let xtmp380;
let xtmp392;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 10708(line=872, offs=1) -- 10743(line=873, offs=27)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 8159(line=693, offs=1) -- 8220(line=695, offs=47)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4042(line=355, offs=1) -- 4240(line=373, offs=16)
function
list_streamize_3413_(a5x1)
{
let xtmp391;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 4109(line=361, offs=1) -- 4238(line=372, offs=8)
function
auxmain_4112_(a6x1)
{
let xtmp383;
let xtmp389;
let xtmp390;
;
xtmp389 =
function()
{
let xtmp384;
let xtmp385;
let xtmp386;
let xtmp387;
let xtmp388;
{
xtmp385 = 0;
do {
do {
if(0!==a6x1[0]) break;
xtmp385 = 1;
} while(false);
if(xtmp385 > 0 ) break;
do {
if(1!==a6x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp385 = 2;
} while(false);
if(xtmp385 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp385) {
case 1:
{
xtmp384 = [0];
}
;
break;
case 2:
xtmp386 = a6x1[1];
xtmp387 = a6x1[2];
{
{
xtmp388 = auxmain_4112_(xtmp387);
}
;
xtmp384 = [1, xtmp386, xtmp388];
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp384;
} // lam-function
;
xtmp390 =
function()
{
let xtmp384;
let xtmp385;
let xtmp386;
let xtmp387;
let xtmp388;
} // lam-function
;
xtmp383 = XATS2JS_new_llazy(xtmp389,xtmp390);
return xtmp383;
} // function // auxmain(94)
;
{
xtmp391 = auxmain_4112_(a5x1);
}
;
return xtmp391;
} // function // list_streamize(93)
;
// } // val-binding
const // implval/fun
gseq_streamize_2383_ = list_streamize_3413_
;
xtmp380 = gseq_streamize_2383_(a3x1);
}
;
;
} // val(H0Pvar(xs(173)))
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7740(line=626, offs=1) -- 8148(line=658, offs=8)
function
stream_vt_sortedq_3766_(a4x1)
{
let xtmp417;
let xtmp418;
let xtmp419;
let xtmp420;
let xtmp421;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7896(line=640, offs=1) -- 8146(line=657, offs=5)
function
loop_7899_(a5x1, a5x2)
{
let a5y1;
let a5y2;
let xtmp396;
let xtmp397;
let xtmp398;
let xtmp399;
let xtmp402;
let xtmp403;
let xtmp404;
let xtmp405;
let xtmp408;
let xtmp409;
let xtmp412;
let xtmp415;
do {
;
;
xtmp397 = XATS2JS_llazy_eval(a5x2);
{
xtmp398 = 0;
do {
do {
if(0!==xtmp397[0]) break;
xtmp398 = 1;
} while(false);
if(xtmp398 > 0 ) break;
do {
if(1!==xtmp397[0]) break;
//L1PCKany();
//L1PCKany();
xtmp398 = 2;
} while(false);
if(xtmp398 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp398) {
case 1:
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 7984(line=648, offs=5) -- 8006(line=648, offs=27)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 175(line=18, offs=1) -- 207(line=20, offs=18)
function
g_free_1550_(a6x1)
{
let xtmp401;
;
{
xtmp401 = [-1];;
}
;
return xtmp401;
} // function // g_free(54)
;
xtmp399 = g_free_1550_(a5x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(399)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(399)));
} // val(H0Pnil())
;
xtmp396 = true;
break;
case 2:
xtmp402 = xtmp397[1];
xtmp403 = xtmp397[2];
{
// ./Permutation.dats: 1436(line=92, offs=5) -- 1479(line=93, offs=36)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
// } // val-binding
const // implval/fun
g_lte_1531_ = gint_gte_sint_sint_2466_
;
xtmp404 = g_lte_1531_(a5x1, xtmp402);
}
;
if
(xtmp404)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 175(line=18, offs=1) -- 207(line=20, offs=18)
function
g_free_1550_(a6x1)
{
let xtmp407;
;
{
xtmp407 = [-1];;
}
;
return xtmp407;
} // function // g_free(54)
;
xtmp405 = g_free_1550_(a5x1);
}
;
{
// tail-recursion:
// L1CMDapp(tmp(408); L1VALfcst(loop(96)); L1VALtmp(tmp(402)), L1VALtmp(tmp(403)))
a5y1 = xtmp402; a5y2 = xtmp403; a5x1 = a5y1; a5x2 = a5y2; continue;
}
;
xtmp396 = xtmp408;
} // if-then
else
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 175(line=18, offs=1) -- 207(line=20, offs=18)
function
g_free_1550_(a6x1)
{
let xtmp411;
;
{
xtmp411 = [-1];;
}
;
return xtmp411;
} // function // g_free(54)
;
xtmp409 = g_free_1550_(a5x1);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 175(line=18, offs=1) -- 207(line=20, offs=18)
function
g_free_1550_(a6x1)
{
let xtmp414;
;
{
xtmp414 = [-1];;
}
;
return xtmp414;
} // function // g_free(54)
;
xtmp412 = g_free_1550_(xtmp402);
}
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a7x1)
{
;
return XATS2JS_llazy_free(a7x1);
} // function // stream_vt_free(57)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp415 = g_free_1550_(xtmp403);
}
;
xtmp396 = false;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp396;
} // function // loop(96)
;
xtmp418 = XATS2JS_llazy_eval(a4x1);
{
xtmp419 = 0;
do {
do {
if(0!==xtmp418[0]) break;
xtmp419 = 1;
} while(false);
if(xtmp419 > 0 ) break;
do {
if(1!==xtmp418[0]) break;
//L1PCKany();
//L1PCKany();
xtmp419 = 2;
} while(false);
if(xtmp419 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp419) {
case 1:
xtmp417 = true;
break;
case 2:
xtmp420 = xtmp418[1];
xtmp421 = xtmp418[2];
{
xtmp417 = loop_7899_(xtmp420, xtmp421);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp417;
} // function // stream_vt_sortedq(95)
;
xtmp392 = stream_vt_sortedq_3766_(xtmp380);
}
;
return xtmp392;
} // function // gseq_sortedq(14)
;
xtmp378 = gseq_sortedq_4162_(xtmp377);
}
;
xtmp375 = xtmp378;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp375;
} // function // StreamDemo2_pauseq(11)
;
xtmp373 = StreamDemo2_pauseq_637_(a1x1);
}
;
return xtmp373;
} // function // the_StreamDemo2_pauseq(21)

// ././../../../StreamDemo2/StreamDemo2_.dats: 1653(line=92, offs=1) -- 1716(line=93, offs=56)
function
the_StreamDemo2_xprint(a1x1)
{
let xtmp423;
;
{
// ./Permutation.dats: 1203(line=75, offs=1) -- 1308(line=82, offs=8)
function
StreamDemo2_xprint_776_(a2x1)
{
let xtmp425;
let xtmp426;
let xtmp427;
;
{
xtmp426 = 0;
do {
do {
if(0!==a2x1[0]) break;
xtmp426 = 1;
} while(false);
if(xtmp426 > 0 ) break;
do {
if(1!==a2x1[0]) break;
//L1PCKany();
xtmp426 = 2;
} while(false);
if(xtmp426 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp426) {
case 1:
{
xtmp425 = [-1];;
}
;
break;
case 2:
xtmp427 = a2x1[1];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3264(line=268, offs=1) -- 3332(line=273, offs=17)
function
print_1_409_(a3x1)
{
let xtmp429;
let xtmp463;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/synougat.dats: 3304(line=272, offs=3) -- 3330(line=272, offs=29)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 7540(line=652, offs=1) -- 7596(line=655, offs=23)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 1915(line=160, offs=1) -- 2258(line=192, offs=8)
function
gseq_print_1299_(a6x1)
{
let xtmp431;
let xtmp433;
let xtmp461;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 1956(line=165, offs=1) -- 1989(line=166, offs=25)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 7600(line=657, offs=1) -- 7664(line=660, offs=35)
function
gseq_print$beg_1344_()
{
let xtmp432;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp432 = string_print_4753_("(");
}
;
return xtmp432;
} // function // gseq_print$beg(100)
;
xtmp431 = gseq_print$beg_1344_();
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(431)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(431)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 1993(line=168, offs=1) -- 2191(line=187, offs=7)
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 2045(line=174, offs=1) -- 2174(line=185, offs=8)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14990(line=1224, offs=1) -- 15182(line=1240, offs=8)
function
gseq_iforeach_5155_(a7x1)
{
let xtmp435;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 15031(line=1228, offs=1) -- 15162(line=1237, offs=25)
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14634(line=1194, offs=1) -- 14935(line=1220, offs=8)
function
gseq_iforall_5108_(a8x1)
{
let xtmp437;
let xtmp438;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14677(line=1199, offs=1) -- 14693(line=1199, offs=17)
{
xtmp437 = XATS2JS_new_var1(0);
} // val(i0(198))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14694(line=1200, offs=1) -- 14712(line=1200, offs=19)
{
;
} // val(H0Pvar(p0(199)))
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
// L1DCLnone0();
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 7903(line=678, offs=1) -- 7958(line=680, offs=41)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 3474(line=307, offs=1) -- 3677(line=323, offs=13)
function
list_forall_3143_(a10x1)
{
let xtmp460;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 3532(line=312, offs=1) -- 3675(line=322, offs=5)
function
loop_3535_(a11x1)
{
let a11y1;
let xtmp441;
let xtmp442;
let xtmp443;
let xtmp444;
let xtmp445;
do {
;
{
xtmp442 = 0;
do {
do {
if(0!==a11x1[0]) break;
xtmp442 = 1;
} while(false);
if(xtmp442 > 0 ) break;
do {
if(1!==a11x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp442 = 2;
} while(false);
if(xtmp442 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp442) {
case 1:
xtmp441 = true;
break;
case 2:
xtmp443 = a11x1[1];
xtmp444 = a11x1[2];
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
function
forall$test_3500_(a12x1)
{
let xtmp447;
let xtmp448;
let xtmp449;
let xtmp450;
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
xtmp447 = p2tr_get_1962_(xtmp437);
}
;
;
} // val(H0Pvar(i0(201)))
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
xtmp449 = gint_succ_sint_1861_(xtmp447);
}
;
xtmp448 = p2tr_set_1998_(xtmp437, xtmp449);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(448)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(448)));
} // val(H0Pnil())
;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
function
iforall$test_5435_(a13x1, a13x2)
{
let xtmp453;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 15114(line=1235, offs=1) -- 15148(line=1235, offs=35)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 2045(line=174, offs=1) -- 2174(line=185, offs=8)
function
iforeach$work_5677_(a14x1, a14x2)
{
let xtmp456;
let xtmp457;
let xtmp459;
;
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 2116(line=181, offs=3) -- 2172(line=184, offs=32)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
xtmp457 = gint_gt_sint_sint_2209_(a14x1, 0);
}
;
if
(xtmp457)
// then
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 7730(line=665, offs=1) -- 7794(line=668, offs=35)
function
gseq_print$sep_1446_()
{
let xtmp458;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp458 = string_print_4753_(";");
}
;
return xtmp458;
} // function // gseq_print$sep(104)
;
xtmp456 = gseq_print$sep_1446_();
}
;
} // if-then
else
{
} // if-else
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(456)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(456)));
} // val(H0Pnil())
;
{
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
xtmp459 = g_print_2168_(a14x2);
}
;
return xtmp459;
} // function // iforeach$work(103)
;
xtmp453 = iforeach$work_5677_(a13x1, a13x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(453)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(453)));
} // val(H0Pnil())
;
return true;
} // function // iforall$test(106)
;
xtmp450 = iforall$test_5435_(xtmp447, a12x1);
}
;
return xtmp450;
} // function // forall$test(108)
;
xtmp445 = forall$test_3500_(xtmp443);
}
;
if
(xtmp445)
// then
{
{
// tail-recursion:
// L1CMDapp(tmp(441); L1VALfcst(loop(114)); L1VALtmp(tmp(444)))
a11y1 = xtmp444; a11x1 = a11y1; continue;
}
;
} // if-then
else
{
xtmp441 = false;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp441;
} // function // loop(114)
;
{
xtmp460 = loop_3535_(a10x1);
}
;
return xtmp460;
} // function // list_forall(113)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = list_forall_3143_
;
xtmp438 = gseq_forall_1939_(a8x1);
}
;
return xtmp438;
} // function // gseq_iforall(107)
;
xtmp435 = gseq_iforall_5108_(a7x1);
}
;
;
} // val(H0Pvar(test(194)))
;
return null;
} // function // gseq_iforeach(105)
;
xtmp433 = gseq_iforeach_5155_(a6x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(433)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(433)));
} // val(H0Pnil())
;
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq.dats: 2207(line=189, offs=1) -- 2248(line=190, offs=33)
{
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/list.dats: 7665(line=661, offs=1) -- 7729(line=664, offs=35)
function
gseq_print$end_1395_()
{
let xtmp462;
{
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// /home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp462 = string_print_4753_(")");
}
;
return xtmp462;
} // function // gseq_print$end(120)
;
xtmp461 = gseq_print$end_1395_();
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(461)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(461)));
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
xtmp429 = gl_print1_2233_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(429)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(429)));
} // val(H0Pnil())
;
{
xtmp463 = [-1];;
}
;
return xtmp463;
} // function // print_1(10)
;
xtmp425 = print_1_409_(xtmp427);
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp425;
} // function // StreamDemo2_xprint(9)
;
xtmp423 = StreamDemo2_xprint_776_(a1x1);
}
;
return xtmp423;
} // function // the_StreamDemo2_xprint(22)

// } // end-of-include


