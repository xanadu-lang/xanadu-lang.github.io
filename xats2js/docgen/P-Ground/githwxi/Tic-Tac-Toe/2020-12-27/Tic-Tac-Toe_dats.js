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
/*
XATS2JS_PRELUDE_NODE
*/
/* ****** ****** */

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
  return; // gint_print_sint<>
}
function
XATS2JS_NODE_gint_print_uint
  (x0)
{
  XATS2JS_NODE_g_print(x0);
  return; // gint_print_uint<>
}
/* ****** ****** */
function
XATS2JS_NODE_gflt_print_sflt
  (x0)
{
  XATS2JS_NODE_g_print(x0);
  return; // gflt_print_sflt<>
}
function
XATS2JS_NODE_gflt_print_dflt
  (x0)
{
  XATS2JS_NODE_g_print(x0);
  return; // gflt_print_dflt<>
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
var xtop7;
var xtop11;
var xtop15;
var xtop19;
var xtop42;
// ./Tic-Tac-Toe.dats: 170(line=12, offs=1) -- 223(line=15, offs=29)
// { // include
// ./../../../../share/xats2js_prelude.hats
// ././../../../../share/xats2js_prelude.hats: 114(line=8, offs=1) -- 151(line=8, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 172(line=10, offs=1) -- 209(line=10, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 210(line=11, offs=1) -- 247(line=11, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 268(line=13, offs=1) -- 305(line=13, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 306(line=14, offs=1) -- 343(line=14, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 344(line=15, offs=1) -- 381(line=15, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 402(line=17, offs=1) -- 439(line=17, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 440(line=18, offs=1) -- 477(line=18, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 478(line=19, offs=1) -- 515(line=19, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 516(line=20, offs=1) -- 553(line=20, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 574(line=22, offs=1) -- 612(line=22, offs=39)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 613(line=23, offs=1) -- 652(line=23, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 673(line=25, offs=1) -- 710(line=25, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 711(line=26, offs=1) -- 748(line=26, offs=38)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 749(line=27, offs=1) -- 788(line=27, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 809(line=29, offs=1) -- 847(line=29, offs=39)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 868(line=31, offs=1) -- 908(line=31, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 929(line=33, offs=1) -- 969(line=33, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 970(line=34, offs=1) -- 1010(line=34, offs=41)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1011(line=35, offs=1) -- 1053(line=35, offs=43)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1074(line=37, offs=1) -- 1113(line=37, offs=40)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1134(line=39, offs=1) -- 1175(line=39, offs=42)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1199(line=42, offs=1) -- 1246(line=42, offs=48)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1250(line=44, offs=1) -- 1297(line=44, offs=48)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1301(line=46, offs=1) -- 1349(line=46, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1353(line=48, offs=1) -- 1401(line=48, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1405(line=50, offs=1) -- 1453(line=50, offs=49)
// L1DCLnone1(H0Cnone1(...))
// ././../../../../share/xats2js_prelude.hats: 1457(line=52, offs=1) -- 1506(line=52, offs=50)
// L1DCLnone1(H0Cnone1(...))
// } // end-of-include


// ./Tic-Tac-Toe.dats: 247(line=18, offs=1) -- 281(line=20, offs=19)
// L1DCLnone1(H0Cnone1(...))

// ./Tic-Tac-Toe.dats: 314(line=24, offs=9) -- 319(line=24, offs=14)
// L1DCLnone1(H0Cnone1(...))

// ./Tic-Tac-Toe.dats: 328(line=25, offs=9) -- 333(line=25, offs=14)
// L1DCLnone1(H0Cnone1(...))

// ./Tic-Tac-Toe.dats: 358(line=29, offs=1) -- 414(line=34, offs=12)
function
player_next_361_(a1x1)
{
let xtmp1;
let xtmp6;
;
{
// ./../../../../xatsopt/prelude/DATS/bool.dats: 1896(line=63, offs=1) -- 1956(line=66, offs=31)
function
bool_ifval_1758_(a2x1, a2x2, a2x3)
{
let xtmp5;
;
;
;
if
(a2x1)
// then
{
xtmp5 = a2x2;
} // if-then
else
{
xtmp5 = a2x3;
} // if-else
;
return xtmp5;
} // function // bool_ifval(1)
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp6 = gint_eq_sint_sint_2293_(a1x1, 1);
}
;
xtmp1 = bool_ifval_1758_(xtmp6, 2, 1);
}
;
return xtmp1;
} // function // player_next(0)


// ./Tic-Tac-Toe.dats: 441(line=38, offs=1) -- 465(line=39, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/array.dats: 243(line=22, offs=1) -- 304(line=26, offs=20)
function
a0ref_make_2876_(a1x1)
{
let xtmp9;
let xtmp10;
;
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
a0ptr_make_2915_ = XATS2JS_a0ptr_make
;
xtmp10 = a0ptr_make_2915_(a1x1);
}
;
xtmp9 = XATS2JS_fcast(xtmp10);
}
;
return xtmp9;
} // function // a0ref_make(4)
;
xtop7 = a0ref_make_2876_(1);
}
;
;
} // val(H0Pvar(thePlayer(5)))


// ./Tic-Tac-Toe.dats: 466(line=40, offs=1) -- 490(line=41, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/array.dats: 243(line=22, offs=1) -- 304(line=26, offs=20)
function
a0ref_make_2876_(a1x1)
{
let xtmp13;
let xtmp14;
;
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
a0ptr_make_2915_ = XATS2JS_a0ptr_make
;
xtmp14 = a0ptr_make_2915_(a1x1);
}
;
xtmp13 = XATS2JS_fcast(xtmp14);
}
;
return xtmp13;
} // function // a0ref_make(4)
;
xtop11 = a0ref_make_2876_(0);
}
;
;
} // val(H0Pvar(theWinner(7)))


// ./Tic-Tac-Toe.dats: 491(line=42, offs=1) -- 515(line=43, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/array.dats: 243(line=22, offs=1) -- 304(line=26, offs=20)
function
a0ref_make_2876_(a1x1)
{
let xtmp17;
let xtmp18;
;
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
a0ptr_make_2915_ = XATS2JS_a0ptr_make
;
xtmp18 = a0ptr_make_2915_(a1x1);
}
;
xtmp17 = XATS2JS_fcast(xtmp18);
}
;
return xtmp17;
} // function // a0ref_make(4)
;
xtop15 = a0ref_make_2876_(0);
}
;
;
} // val(H0Pvar(theNMoves(8)))


// ./Tic-Tac-Toe.dats: 516(line=44, offs=1) -- 561(line=46, offs=29)
{
{
// ./../../../../xatsopt/prelude/DATS/array.dats: 1341(line=102, offs=1) -- 1431(line=109, offs=8)
function
a1ref_make_nval_3887_(a1x1, a1x2)
{
let xtmp22;
let xtmp23;
;
;
{
{
// ./../../../../xatsopt/prelude/DATS/array.dats: 1435(line=111, offs=1) -- 1897(line=155, offs=8)
function
a1ptr_make_nval_3962_(a2x1, a2x2)
{
let xtmp40;
let xtmp41;
;
;
// ./../../../../xatsopt/prelude/DATS/array.dats: 1556(line=124, offs=1) -- 1895(line=154, offs=5)
function
loop_1559_(a3x1, a3x2, a3x3)
{
let xtmp29;
let xtmp30;
let xtmp31;
let xtmp33;
let xtmp34;
let xtmp35;
let xtmp36;
let xtmp39;
;
;
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp30 = gint_lt_sint_sint_2125_(a3x2, a2x1);
}
;
if
(xtmp30)
// then
{
// ./../../../../xatsopt/prelude/DATS/array.dats: 1722(line=144, offs=1) -- 1744(line=144, offs=23)
{
{
// ./../../../../xatsopt/prelude/DATS/gbas.dats: 230(line=24, offs=1) -- 263(line=26, offs=19)
function
g_copy_1581_(a4x1)
{
;
return a4x1;
} // function // g_copy(14)
;
xtmp31 = g_copy_1581_(a3x3);
}
;
;
} // val(H0Pvar(x1(18)))
;
// ./../../../../xatsopt/prelude/DATS/array.dats: 1745(line=145, offs=1) -- 1785(line=146, offs=32)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 8573(line=539, offs=1) -- 8636(line=541, offs=47)
// { // val-binding
// } // val-binding
const // implval/fun
a1ptr_set_at_raw_4955_ = XATS2JS_a1ptr_set_at_raw
;
xtmp33 = a1ptr_set_at_raw_4955_(a3x1, a3x2, xtmp31);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(33)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(33)));
} // val(H0Pnil())
;
// ./../../../../xatsopt/prelude/DATS/array.dats: 1672(line=139, offs=1) -- 1689(line=141, offs=9)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp34 = gint_succ_sint_1861_(a3x2);
}
;
;
} // val(H0Pvar(i1(20)))
;
{
xtmp35 = loop_1559_(a3x1, xtmp34, a3x3);
}
;
xtmp29 = xtmp35;
} // if-then
else
{
// ./../../../../xatsopt/prelude/DATS/array.dats: 1815(line=150, offs=1) -- 1837(line=150, offs=23)
{
{
// ./../../../../xatsopt/prelude/DATS/gbas.dats: 175(line=18, offs=1) -- 207(line=20, offs=18)
function
g_free_1550_(a4x1)
{
let xtmp38;
;
{
xtmp38 = [-1];;
}
;
return xtmp38;
} // function // g_free(19)
;
xtmp36 = g_free_1550_(a3x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(36)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(36)));
} // val(H0Pnil())
;
{
xtmp39 = XATS2JS_fcast(a3x1);
}
;
xtmp29 = xtmp39;
} // if-else
;
return xtmp29;
} // function // loop(11)
;
// ./../../../../xatsopt/prelude/DATS/array.dats: 1492(line=117, offs=1) -- 1516(line=118, offs=16)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7658(line=471, offs=1) -- 7711(line=473, offs=37)
// { // val-binding
// } // val-binding
const // implval/fun
a1ptr_alloc_3728_ = XATS2JS_a1ptr_alloc
;
xtmp40 = a1ptr_alloc_3728_(a2x1);
}
;
;
} // val(H0Pvar(A0(22)))
;
{
xtmp41 = loop_1559_(xtmp40, 0, a2x2);
}
;
return xtmp41;
} // function // a1ptr_make_nval(10)
;
xtmp23 = a1ptr_make_nval_3962_(a1x1, a1x2);
}
;
xtmp22 = XATS2JS_fcast(xtmp23);
}
;
return xtmp22;
} // function // a1ref_make_nval(8)
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtop42 = gint_mul_sint_sint_3609_(3, 3);
}
;
xtop19 = a1ref_make_nval_3887_(xtop42, 0);
}
;
;
} // val(H0Pvar(theSquares(9)))


// ./Tic-Tac-Toe.dats: 588(line=50, offs=1) -- 658(line=53, offs=32)
function
player2string_591_(a1x1)
{
let xtmp44;
let xtmp45;
;
{
xtmp45 = 0;
do {
do {
if(1!==a1x1) break;
xtmp45 = 1;
} while(false);
if(xtmp45 > 0 ) break;
do {
if(2!==a1x1) break;
xtmp45 = 2;
} while(false);
if(xtmp45 > 0 ) break;
do {
//L1PCKany();
xtmp45 = 3;
} while(false);
if(xtmp45 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp45) {
case 1:
//L1CMDmatch(H0Pi00(1); L1VALtmp(arg[1](43)));
xtmp44 = "X";
break;
case 2:
//L1CMDmatch(H0Pi00(2); L1VALtmp(arg[1](43)));
xtmp44 = "O";
break;
case 3:
xtmp44 = "";
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp44;
} // function // player2string(25)


// ./Tic-Tac-Toe.dats: 693(line=58, offs=1) -- 747(line=60, offs=36)


// ./Tic-Tac-Toe.dats: 756(line=62, offs=1) -- 818(line=64, offs=39)


// ./Tic-Tac-Toe.dats: 819(line=65, offs=1) -- 870(line=67, offs=29)
function
theSquares_get(a1x1, a1x2)
{
let xtmp48;
let xtmp49;
let xtmp50;
;
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp50 = gint_mul_sint_sint_3609_(3, a1x1);
}
;
xtmp49 = gint_add_sint_sint_3439_(xtmp50, a1x2);
}
;
xtmp48 = a1ref_get_at_4635_(xtop19, xtmp49);
}
;
return xtmp48;
} // function // theSquares_get(26)


// ./Tic-Tac-Toe.dats: 871(line=68, offs=1) -- 947(line=71, offs=38)
function
theSquares_get_text(a1x1, a1x2)
{
let xtmp53;
let xtmp54;
;
;
{
{
xtmp54 = theSquares_get(a1x1, a1x2);
}
;
xtmp53 = player2string_591_(xtmp54);
}
;
return xtmp53;
} // function // theSquares_get_text(27)


// ./Tic-Tac-Toe.dats: 982(line=76, offs=1) -- 1027(line=78, offs=28)


// ./Tic-Tac-Toe.dats: 1028(line=79, offs=1) -- 1065(line=80, offs=30)
function
thePlayer_get()
{
let xtmp55;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp55 = a0ref_get_3025_(xtop7);
}
;
return xtmp55;
} // function // thePlayer_get(32)


// ./Tic-Tac-Toe.dats: 1077(line=83, offs=1) -- 1122(line=85, offs=28)


// ./Tic-Tac-Toe.dats: 1123(line=86, offs=1) -- 1160(line=87, offs=30)
function
theWinner_get()
{
let xtmp56;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp56 = a0ref_get_3025_(xtop11);
}
;
return xtmp56;
} // function // theWinner_get(35)


// ./Tic-Tac-Toe.dats: 1172(line=90, offs=1) -- 1220(line=92, offs=31)


// ./Tic-Tac-Toe.dats: 1221(line=93, offs=1) -- 1477(line=119, offs=8)
function
theStatus_get()
{
let xtmp57;
let xtmp58;
let xtmp59;
let xtmp176;
let xtmp177;
let xtmp178;
let xtmp179;
let xtmp296;
let xtmp297;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3046(line=218, offs=1) -- 3103(line=219, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_neq_sint_sint_2555_ = XATS2JS_gint_neq_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp59 = a0ref_get_3025_(xtop11);
}
;
xtmp58 = gint_neq_sint_sint_2555_(xtmp59, 0);
}
;
if
(xtmp58)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 3749(line=215, offs=1) -- 3828(line=221, offs=8)
function
string_append_5931_(a2x1, a2x2)
{
let xtmp62;
let xtmp63;
;
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6502(line=415, offs=1) -- 6622(line=425, offs=20)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6562(line=421, offs=1) -- 6620(line=424, offs=31)
;
// } // val-binding
const // implval/fun
string_vt2t_2060_ = XATS2JS_string_vt2t
;
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 3832(line=223, offs=1) -- 3994(line=235, offs=8)
function
string_append_vt_5999_(a3x1, a3x2)
{
let xtmp66;
let xtmp78;
let xtmp115;
let xtmp152;
;
;
// ./../../../../xatsopt/prelude/DATS/string.dats: 3879(line=228, offs=1) -- 3955(line=231, offs=24)
{
{
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2487(line=200, offs=1) -- 2894(line=233, offs=10)
function
list_vt_append_2551_(a4x1, a4x2)
{
let xtmp76;
let xtmp77;
;
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2599(line=212, offs=1) -- 2869(line=231, offs=5)
function
loop_2602_(a5x1, a5x2)
{
let a5y1;
let a5y2;
let xtmp71;
let xtmp72;
let xtmp73;
let xtmp74;
let xtmp75;
do {
;
;
xtmp72 = XATS2JS_lval_get(a5x1);
{
xtmp73 = 0;
do {
do {
if(0!==xtmp72[0]) break;
xtmp73 = 1;
} while(false);
if(xtmp73 > 0 ) break;
do {
if(1!==xtmp72[0]) break;
//L1PCKany();
//L1PCKany();
xtmp73 = 2;
} while(false);
if(xtmp73 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp73) {
case 1:
XATS2JS_lval_set(a5x1, a5x2);
xtmp71 = null;
break;
case 2:
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2775(line=227, offs=3) -- 2798(line=227, offs=26)
{
{
xtmp74 = loop_2602_(XATS2JS_new_cofs(XATS2JS_lval_get(a5x1),2), a5x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(74)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(74)));
} // val(H0Pnil())
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2808(line=229, offs=7) -- 2828(line=229, offs=27)
{
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp75 = [-1];;
}
;
xtmp71 = xtmp75;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp71;
} // function // loop(44)
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2542(line=206, offs=1) -- 2553(line=206, offs=12)
{
xtmp76 = XATS2JS_new_var1(a4x1);
} // val(xs(47))
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2554(line=207, offs=1) -- 2575(line=207, offs=22)
{
{
xtmp77 = loop_2602_(xtmp76, a4x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(77)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(77)));
} // val(H0Pnil())
;
return XATS2JS_lval_get(xtmp76);
} // function // list_vt_append(43)
;
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 5653(line=380, offs=1) -- 5723(line=383, offs=32)
function
string_listize_6692_(a4x1)
{
let xtmp80;
let xtmp81;
;
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4539(line=373, offs=1) -- 4657(line=382, offs=8)
function
gseq_listize_2279_(a5x1)
{
let xtmp83;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4622(line=381, offs=3) -- 4655(line=381, offs=36)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6119(line=503, offs=1) -- 6544(line=537, offs=13)
function
gseq_map_list_2870_(a6x1)
{
let xtmp85;
let xtmp86;
let xtmp112;
let xtmp113;
let xtmp114;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6170(line=508, offs=1) -- 6194(line=510, offs=12)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6195(line=511, offs=1) -- 6216(line=512, offs=14)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6220(line=514, offs=1) -- 6403(line=528, offs=8)
// L1DCLnone0();
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6421(line=530, offs=1) -- 6431(line=530, offs=11)
{
xtmp85 = XATS2JS_new_var0();
} // val(r0(57))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6432(line=531, offs=1) -- 6478(line=532, offs=38)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3024(line=252, offs=1) -- 3331(line=279, offs=14)
function
gseq_foldl_1774_(a7x1, a7x2)
{
let xtmp89;
let xtmp90;
;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3081(line=258, offs=1) -- 3096(line=258, offs=16)
{
xtmp89 = XATS2JS_new_var1(a7x2);
} // val(r0(61))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3100(line=260, offs=1) -- 3118(line=260, offs=19)
{
;
} // val(H0Pvar(p0(62)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3122(line=262, offs=1) -- 3326(line=277, offs=7)
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3170(line=267, offs=1) -- 3299(line=276, offs=8)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4137(line=339, offs=1) -- 4317(line=355, offs=8)
function
gseq_foreach_1981_(a8x1)
{
let xtmp92;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4177(line=343, offs=1) -- 4297(line=352, offs=24)
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4220(line=347, offs=1) -- 4295(line=351, offs=8)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 9995(line=742, offs=1) -- 10040(line=743, offs=38)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8879(line=609, offs=1) -- 9095(line=624, offs=8)
function
string_forall_6387_(a10x1)
{
let xtmp94;
let xtmp95;
;
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8924(line=614, offs=1) -- 9018(line=618, offs=26)
;
{
xtmp95 =
function(a11x1)
{
let xtmp97;
;
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4220(line=347, offs=1) -- 4295(line=351, offs=8)
function
forall$test_3500_(a12x1)
{
let xtmp99;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4254(line=350, offs=1) -- 4283(line=350, offs=30)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3170(line=267, offs=1) -- 3299(line=276, offs=8)
function
foreach$work_3642_(a13x1)
{
let xtmp101;
let xtmp102;
let xtmp103;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3205(line=270, offs=1) -- 3234(line=270, offs=30)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 239(line=19, offs=1) -- 292(line=21, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_get_1962_ = XATS2JS_UN_p2tr_get
;
xtmp101 = p2tr_get_1962_(xtmp89);
}
;
;
} // val(H0Pvar(r0(64)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6220(line=514, offs=1) -- 6403(line=528, offs=8)
function
foldl$fopr_3795_(a14x1, a14x2)
{
let xtmp106;
let xtmp108;
let xtmp109;
let xtmp110;
let xtmp111;
;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6265(line=519, offs=1) -- 6294(line=520, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4622(line=381, offs=3) -- 4655(line=381, offs=36)
function
map$fopr_2300_(a15x1)
{
;
return a15x1;
} // function // map$fopr(48)
;
xtmp106 = map$fopr_2300_(a14x2);
}
;
;
} // val(H0Pvar(y0(54)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6295(line=521, offs=1) -- 6325(line=522, offs=21)
{
{
xtmp108 = [1, xtmp106, XATS2JS_top];
}
;
;
} // val(H0Pvar(r1(55)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6326(line=523, offs=1) -- 6346(line=523, offs=21)
{
xtmp109 = XATS2JS_new_cofs(xtmp108,2);
;
} // val(H0Pvar(p1(56)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
xtmp111 = XATS2JS_fcast(xtmp108);
}
;
xtmp110 = p2tr_set_1998_(a14x1, xtmp111);
}
;
return xtmp109;
} // function // foldl$fopr(50)
;
xtmp103 = foldl$fopr_3795_(xtmp101, a13x1);
}
;
xtmp102 = p2tr_set_1998_(xtmp89, xtmp103);
}
;
return xtmp102;
} // function // foreach$work(53)
;
xtmp99 = foreach$work_3642_(a12x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(99)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(99)));
} // val(H0Pnil())
;
return true;
} // function // forall$test(56)
;
xtmp97 = forall$test_3500_(a11x1);
}
;
return xtmp97;
} // lam-function
;
xtmp94 = XATS2JS_string_forall_cfr(a10x1, xtmp95);
}
;
return xtmp94;
} // function // string_forall(58)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = string_forall_6387_
;
xtmp92 = gseq_forall_1939_(a8x1);
}
;
;
} // val(H0Pvar(test(66)))
;
return null;
} // function // gseq_foreach(55)
;
xtmp90 = gseq_foreach_1981_(a7x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(90)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(90)));
} // val(H0Pnil())
;
return XATS2JS_lval_get(xtmp89);
} // function // gseq_foldl(52)
;
xtmp86 = gseq_foldl_1774_(a6x1, xtmp85);
}
;
;
} // val(H0Pvar(pz(58)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
xtmp113 = [0];
}
;
xtmp112 = p2tr_set_1998_(xtmp86, xtmp113);
}
;
{
xtmp114 = XATS2JS_fcast(XATS2JS_lval_get(xtmp85));
}
;
return xtmp114;
} // function // gseq_map_list(49)
;
xtmp83 = gseq_map_list_2870_(a5x1);
}
;
return xtmp83;
} // function // gseq_listize(47)
;
xtmp81 = gseq_listize_2279_(a4x1);
}
;
xtmp80 = XATS2JS_fcast(xtmp81);
}
;
return xtmp80;
} // function // string_listize(45)
;
xtmp78 = string_listize_6692_(a3x1);
}
;
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 5653(line=380, offs=1) -- 5723(line=383, offs=32)
function
string_listize_6692_(a4x1)
{
let xtmp117;
let xtmp118;
;
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4539(line=373, offs=1) -- 4657(line=382, offs=8)
function
gseq_listize_2279_(a5x1)
{
let xtmp120;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4622(line=381, offs=3) -- 4655(line=381, offs=36)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6119(line=503, offs=1) -- 6544(line=537, offs=13)
function
gseq_map_list_2870_(a6x1)
{
let xtmp122;
let xtmp123;
let xtmp149;
let xtmp150;
let xtmp151;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6170(line=508, offs=1) -- 6194(line=510, offs=12)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6195(line=511, offs=1) -- 6216(line=512, offs=14)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6220(line=514, offs=1) -- 6403(line=528, offs=8)
// L1DCLnone0();
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6421(line=530, offs=1) -- 6431(line=530, offs=11)
{
xtmp122 = XATS2JS_new_var0();
} // val(r0(57))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6432(line=531, offs=1) -- 6478(line=532, offs=38)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3024(line=252, offs=1) -- 3331(line=279, offs=14)
function
gseq_foldl_1774_(a7x1, a7x2)
{
let xtmp126;
let xtmp127;
;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3081(line=258, offs=1) -- 3096(line=258, offs=16)
{
xtmp126 = XATS2JS_new_var1(a7x2);
} // val(r0(61))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3100(line=260, offs=1) -- 3118(line=260, offs=19)
{
;
} // val(H0Pvar(p0(62)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3122(line=262, offs=1) -- 3326(line=277, offs=7)
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3170(line=267, offs=1) -- 3299(line=276, offs=8)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4137(line=339, offs=1) -- 4317(line=355, offs=8)
function
gseq_foreach_1981_(a8x1)
{
let xtmp129;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4177(line=343, offs=1) -- 4297(line=352, offs=24)
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4220(line=347, offs=1) -- 4295(line=351, offs=8)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 9995(line=742, offs=1) -- 10040(line=743, offs=38)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8879(line=609, offs=1) -- 9095(line=624, offs=8)
function
string_forall_6387_(a10x1)
{
let xtmp131;
let xtmp132;
;
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8924(line=614, offs=1) -- 9018(line=618, offs=26)
;
{
xtmp132 =
function(a11x1)
{
let xtmp134;
;
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4220(line=347, offs=1) -- 4295(line=351, offs=8)
function
forall$test_3500_(a12x1)
{
let xtmp136;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4254(line=350, offs=1) -- 4283(line=350, offs=30)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3170(line=267, offs=1) -- 3299(line=276, offs=8)
function
foreach$work_3642_(a13x1)
{
let xtmp138;
let xtmp139;
let xtmp140;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3205(line=270, offs=1) -- 3234(line=270, offs=30)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 239(line=19, offs=1) -- 292(line=21, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_get_1962_ = XATS2JS_UN_p2tr_get
;
xtmp138 = p2tr_get_1962_(xtmp126);
}
;
;
} // val(H0Pvar(r0(64)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6220(line=514, offs=1) -- 6403(line=528, offs=8)
function
foldl$fopr_3795_(a14x1, a14x2)
{
let xtmp143;
let xtmp145;
let xtmp146;
let xtmp147;
let xtmp148;
;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6265(line=519, offs=1) -- 6294(line=520, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4622(line=381, offs=3) -- 4655(line=381, offs=36)
function
map$fopr_2300_(a15x1)
{
;
return a15x1;
} // function // map$fopr(48)
;
xtmp143 = map$fopr_2300_(a14x2);
}
;
;
} // val(H0Pvar(y0(54)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6295(line=521, offs=1) -- 6325(line=522, offs=21)
{
{
xtmp145 = [1, xtmp143, XATS2JS_top];
}
;
;
} // val(H0Pvar(r1(55)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6326(line=523, offs=1) -- 6346(line=523, offs=21)
{
xtmp146 = XATS2JS_new_cofs(xtmp145,2);
;
} // val(H0Pvar(p1(56)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
xtmp148 = XATS2JS_fcast(xtmp145);
}
;
xtmp147 = p2tr_set_1998_(a14x1, xtmp148);
}
;
return xtmp146;
} // function // foldl$fopr(50)
;
xtmp140 = foldl$fopr_3795_(xtmp138, a13x1);
}
;
xtmp139 = p2tr_set_1998_(xtmp126, xtmp140);
}
;
return xtmp139;
} // function // foreach$work(53)
;
xtmp136 = foreach$work_3642_(a12x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(136)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(136)));
} // val(H0Pnil())
;
return true;
} // function // forall$test(56)
;
xtmp134 = forall$test_3500_(a11x1);
}
;
return xtmp134;
} // lam-function
;
xtmp131 = XATS2JS_string_forall_cfr(a10x1, xtmp132);
}
;
return xtmp131;
} // function // string_forall(58)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = string_forall_6387_
;
xtmp129 = gseq_forall_1939_(a8x1);
}
;
;
} // val(H0Pvar(test(66)))
;
return null;
} // function // gseq_foreach(55)
;
xtmp127 = gseq_foreach_1981_(a7x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(127)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(127)));
} // val(H0Pnil())
;
return XATS2JS_lval_get(xtmp126);
} // function // gseq_foldl(52)
;
xtmp123 = gseq_foldl_1774_(a6x1, xtmp122);
}
;
;
} // val(H0Pvar(pz(58)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
xtmp150 = [0];
}
;
xtmp149 = p2tr_set_1998_(xtmp123, xtmp150);
}
;
{
xtmp151 = XATS2JS_fcast(XATS2JS_lval_get(xtmp122));
}
;
return xtmp151;
} // function // gseq_map_list(49)
;
xtmp120 = gseq_map_list_2870_(a5x1);
}
;
return xtmp120;
} // function // gseq_listize(47)
;
xtmp118 = gseq_listize_2279_(a4x1);
}
;
xtmp117 = XATS2JS_fcast(xtmp118);
}
;
return xtmp117;
} // function // string_listize(45)
;
xtmp115 = string_listize_6692_(a3x2);
}
;
xtmp66 = list_vt_append_2551_(xtmp78, xtmp115);
}
;
;
} // val(H0Pvar(zs(39)))
;
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 7491(line=533, offs=1) -- 7942(line=577, offs=8)
function
string_vt_make_list_vt_7749_(a4x1)
{
let xtmp164;
let xtmp165;
let xtmp174;
let xtmp175;
;
// ./../../../../xatsopt/prelude/DATS/string.dats: 7668(line=550, offs=1) -- 7691(line=551, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/string.dats: 7695(line=553, offs=1) -- 7937(line=575, offs=5)
function
loop_7698_(a5x1, a5x2, a5x3)
{
let a5y1;
let a5y2;
let a5y3;
let xtmp157;
let xtmp158;
let xtmp159;
let xtmp160;
let xtmp161;
let xtmp162;
let xtmp163;
do {
;
;
;
{
xtmp158 = 0;
do {
do {
if(0!==a5x3[0]) break;
xtmp158 = 1;
} while(false);
if(xtmp158 > 0 ) break;
do {
if(1!==a5x3[0]) break;
//L1PCKany();
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
xtmp159 = a5x3[1];
xtmp160 = a5x3[2];
// ./../../../../xatsopt/prelude/DATS/string.dats: 7894(line=572, offs=1) -- 7933(line=573, offs=31)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9297(line=637, offs=1) -- 9451(line=647, offs=25)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9367(line=643, offs=1) -- 9449(line=646, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp161 = strtmp_vt_set_at_5715_(a5x1, a5x2, xtmp159);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(161)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(161)));
} // val(H0Pnil())
;
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp163 = gint_succ_sint_1861_(a5x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(162); L1VALfcst(loop(63)); L1VALtmp(arg[1](154)), L1VALtmp(tmp(163)), L1VALtmp(tmp(160)))
a5y1 = a5x1; a5y2 = xtmp163; a5y3 = xtmp160; a5x1 = a5y1; a5x2 = a5y2; a5x3 = a5y3; continue;
}
;
xtmp157 = xtmp162;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp157;
} // function // loop(63)
;
// ./../../../../xatsopt/prelude/DATS/string.dats: 7573(line=541, offs=1) -- 7620(line=543, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9142(line=626, offs=1) -- 9276(line=635, offs=24)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9210(line=632, offs=1) -- 9274(line=634, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_7187_ = XATS2JS_strtmp_vt_alloc
;
{
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a5x1)
{
let xtmp173;
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a6x1, a6x2)
{
let a6y1;
let a6y2;
let xtmp169;
let xtmp170;
let xtmp171;
let xtmp172;
do {
;
;
{
xtmp170 = 0;
do {
do {
if(0!==a6x1[0]) break;
xtmp170 = 1;
} while(false);
if(xtmp170 > 0 ) break;
do {
if(1!==a6x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp170 = 2;
} while(false);
if(xtmp170 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp170) {
case 1:
xtmp169 = a6x2;
break;
case 2:
xtmp171 = a6x1[2];
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp172 = gint_add_sint_sint_3439_(a6x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(169); L1VALfcst(loop(69)); L1VALtmp(tmp(171)), L1VALtmp(tmp(172)))
a6y1 = xtmp171; a6y2 = xtmp172; a6x1 = a6y1; a6x2 = a6y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp169;
} // function // loop(69)
;
{
xtmp173 = loop_2130_(a5x1, 0);
}
;
return xtmp173;
} // function // list_vt_length(68)
;
xtmp165 = list_vt_length_2328_(a4x1);
}
;
xtmp164 = strtmp_vt_alloc_7187_(xtmp165);
}
;
;
} // val(H0Pvar(p0(79)))
;
// ./../../../../xatsopt/prelude/DATS/string.dats: 7621(line=544, offs=1) -- 7651(line=545, offs=22)
{
{
xtmp174 = loop_7698_(xtmp164, 0, a4x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(174)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(174)));
} // val(H0Pnil())
;
{
xtmp175 = XATS2JS_fcast(xtmp164);
}
;
return xtmp175;
} // function // string_vt_make_list_vt(62)
;
xtmp152 = string_vt_make_list_vt_7749_(xtmp66);
}
;
return xtmp152;
} // function // string_append_vt(42)
;
xtmp63 = string_append_vt_5999_(a2x1, a2x2);
}
;
xtmp62 = string_vt2t_2060_(xtmp63);
}
;
return xtmp62;
} // function // string_append(39)
;
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp177 = a0ref_get_3025_(xtop11);
}
;
xtmp176 = player2string_591_(xtmp177);
}
;
xtmp57 = string_append_5931_("The Winner: ", xtmp176);
}
;
} // if-then
else
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp179 = a0ref_get_3025_(xtop15);
}
;
xtmp178 = gint_gte_sint_sint_2466_(xtmp179, 9);
}
;
if
(xtmp178)
// then
{
xtmp57 = "Game Over: No Winner!!!";
} // if-then
else
{
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 3749(line=215, offs=1) -- 3828(line=221, offs=8)
function
string_append_5931_(a2x1, a2x2)
{
let xtmp182;
let xtmp183;
;
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6502(line=415, offs=1) -- 6622(line=425, offs=20)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6562(line=421, offs=1) -- 6620(line=424, offs=31)
;
// } // val-binding
const // implval/fun
string_vt2t_2060_ = XATS2JS_string_vt2t
;
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 3832(line=223, offs=1) -- 3994(line=235, offs=8)
function
string_append_vt_5999_(a3x1, a3x2)
{
let xtmp186;
let xtmp198;
let xtmp235;
let xtmp272;
;
;
// ./../../../../xatsopt/prelude/DATS/string.dats: 3879(line=228, offs=1) -- 3955(line=231, offs=24)
{
{
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2487(line=200, offs=1) -- 2894(line=233, offs=10)
function
list_vt_append_2551_(a4x1, a4x2)
{
let xtmp196;
let xtmp197;
;
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2599(line=212, offs=1) -- 2869(line=231, offs=5)
function
loop_2602_(a5x1, a5x2)
{
let a5y1;
let a5y2;
let xtmp191;
let xtmp192;
let xtmp193;
let xtmp194;
let xtmp195;
do {
;
;
xtmp192 = XATS2JS_lval_get(a5x1);
{
xtmp193 = 0;
do {
do {
if(0!==xtmp192[0]) break;
xtmp193 = 1;
} while(false);
if(xtmp193 > 0 ) break;
do {
if(1!==xtmp192[0]) break;
//L1PCKany();
//L1PCKany();
xtmp193 = 2;
} while(false);
if(xtmp193 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp193) {
case 1:
XATS2JS_lval_set(a5x1, a5x2);
xtmp191 = null;
break;
case 2:
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2775(line=227, offs=3) -- 2798(line=227, offs=26)
{
{
xtmp194 = loop_2602_(XATS2JS_new_cofs(XATS2JS_lval_get(a5x1),2), a5x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(194)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(194)));
} // val(H0Pnil())
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2808(line=229, offs=7) -- 2828(line=229, offs=27)
{
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp195 = [-1];;
}
;
xtmp191 = xtmp195;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp191;
} // function // loop(44)
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2542(line=206, offs=1) -- 2553(line=206, offs=12)
{
xtmp196 = XATS2JS_new_var1(a4x1);
} // val(xs(47))
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2554(line=207, offs=1) -- 2575(line=207, offs=22)
{
{
xtmp197 = loop_2602_(xtmp196, a4x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(197)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(197)));
} // val(H0Pnil())
;
return XATS2JS_lval_get(xtmp196);
} // function // list_vt_append(43)
;
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 5653(line=380, offs=1) -- 5723(line=383, offs=32)
function
string_listize_6692_(a4x1)
{
let xtmp200;
let xtmp201;
;
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4539(line=373, offs=1) -- 4657(line=382, offs=8)
function
gseq_listize_2279_(a5x1)
{
let xtmp203;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4622(line=381, offs=3) -- 4655(line=381, offs=36)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6119(line=503, offs=1) -- 6544(line=537, offs=13)
function
gseq_map_list_2870_(a6x1)
{
let xtmp205;
let xtmp206;
let xtmp232;
let xtmp233;
let xtmp234;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6170(line=508, offs=1) -- 6194(line=510, offs=12)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6195(line=511, offs=1) -- 6216(line=512, offs=14)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6220(line=514, offs=1) -- 6403(line=528, offs=8)
// L1DCLnone0();
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6421(line=530, offs=1) -- 6431(line=530, offs=11)
{
xtmp205 = XATS2JS_new_var0();
} // val(r0(57))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6432(line=531, offs=1) -- 6478(line=532, offs=38)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3024(line=252, offs=1) -- 3331(line=279, offs=14)
function
gseq_foldl_1774_(a7x1, a7x2)
{
let xtmp209;
let xtmp210;
;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3081(line=258, offs=1) -- 3096(line=258, offs=16)
{
xtmp209 = XATS2JS_new_var1(a7x2);
} // val(r0(61))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3100(line=260, offs=1) -- 3118(line=260, offs=19)
{
;
} // val(H0Pvar(p0(62)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3122(line=262, offs=1) -- 3326(line=277, offs=7)
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3170(line=267, offs=1) -- 3299(line=276, offs=8)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4137(line=339, offs=1) -- 4317(line=355, offs=8)
function
gseq_foreach_1981_(a8x1)
{
let xtmp212;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4177(line=343, offs=1) -- 4297(line=352, offs=24)
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4220(line=347, offs=1) -- 4295(line=351, offs=8)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 9995(line=742, offs=1) -- 10040(line=743, offs=38)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8879(line=609, offs=1) -- 9095(line=624, offs=8)
function
string_forall_6387_(a10x1)
{
let xtmp214;
let xtmp215;
;
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8924(line=614, offs=1) -- 9018(line=618, offs=26)
;
{
xtmp215 =
function(a11x1)
{
let xtmp217;
;
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4220(line=347, offs=1) -- 4295(line=351, offs=8)
function
forall$test_3500_(a12x1)
{
let xtmp219;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4254(line=350, offs=1) -- 4283(line=350, offs=30)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3170(line=267, offs=1) -- 3299(line=276, offs=8)
function
foreach$work_3642_(a13x1)
{
let xtmp221;
let xtmp222;
let xtmp223;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3205(line=270, offs=1) -- 3234(line=270, offs=30)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 239(line=19, offs=1) -- 292(line=21, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_get_1962_ = XATS2JS_UN_p2tr_get
;
xtmp221 = p2tr_get_1962_(xtmp209);
}
;
;
} // val(H0Pvar(r0(64)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6220(line=514, offs=1) -- 6403(line=528, offs=8)
function
foldl$fopr_3795_(a14x1, a14x2)
{
let xtmp226;
let xtmp228;
let xtmp229;
let xtmp230;
let xtmp231;
;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6265(line=519, offs=1) -- 6294(line=520, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4622(line=381, offs=3) -- 4655(line=381, offs=36)
function
map$fopr_2300_(a15x1)
{
;
return a15x1;
} // function // map$fopr(48)
;
xtmp226 = map$fopr_2300_(a14x2);
}
;
;
} // val(H0Pvar(y0(54)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6295(line=521, offs=1) -- 6325(line=522, offs=21)
{
{
xtmp228 = [1, xtmp226, XATS2JS_top];
}
;
;
} // val(H0Pvar(r1(55)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6326(line=523, offs=1) -- 6346(line=523, offs=21)
{
xtmp229 = XATS2JS_new_cofs(xtmp228,2);
;
} // val(H0Pvar(p1(56)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
xtmp231 = XATS2JS_fcast(xtmp228);
}
;
xtmp230 = p2tr_set_1998_(a14x1, xtmp231);
}
;
return xtmp229;
} // function // foldl$fopr(50)
;
xtmp223 = foldl$fopr_3795_(xtmp221, a13x1);
}
;
xtmp222 = p2tr_set_1998_(xtmp209, xtmp223);
}
;
return xtmp222;
} // function // foreach$work(53)
;
xtmp219 = foreach$work_3642_(a12x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(219)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(219)));
} // val(H0Pnil())
;
return true;
} // function // forall$test(56)
;
xtmp217 = forall$test_3500_(a11x1);
}
;
return xtmp217;
} // lam-function
;
xtmp214 = XATS2JS_string_forall_cfr(a10x1, xtmp215);
}
;
return xtmp214;
} // function // string_forall(58)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = string_forall_6387_
;
xtmp212 = gseq_forall_1939_(a8x1);
}
;
;
} // val(H0Pvar(test(66)))
;
return null;
} // function // gseq_foreach(55)
;
xtmp210 = gseq_foreach_1981_(a7x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(210)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(210)));
} // val(H0Pnil())
;
return XATS2JS_lval_get(xtmp209);
} // function // gseq_foldl(52)
;
xtmp206 = gseq_foldl_1774_(a6x1, xtmp205);
}
;
;
} // val(H0Pvar(pz(58)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
xtmp233 = [0];
}
;
xtmp232 = p2tr_set_1998_(xtmp206, xtmp233);
}
;
{
xtmp234 = XATS2JS_fcast(XATS2JS_lval_get(xtmp205));
}
;
return xtmp234;
} // function // gseq_map_list(49)
;
xtmp203 = gseq_map_list_2870_(a5x1);
}
;
return xtmp203;
} // function // gseq_listize(47)
;
xtmp201 = gseq_listize_2279_(a4x1);
}
;
xtmp200 = XATS2JS_fcast(xtmp201);
}
;
return xtmp200;
} // function // string_listize(45)
;
xtmp198 = string_listize_6692_(a3x1);
}
;
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 5653(line=380, offs=1) -- 5723(line=383, offs=32)
function
string_listize_6692_(a4x1)
{
let xtmp237;
let xtmp238;
;
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4539(line=373, offs=1) -- 4657(line=382, offs=8)
function
gseq_listize_2279_(a5x1)
{
let xtmp240;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4622(line=381, offs=3) -- 4655(line=381, offs=36)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6119(line=503, offs=1) -- 6544(line=537, offs=13)
function
gseq_map_list_2870_(a6x1)
{
let xtmp242;
let xtmp243;
let xtmp269;
let xtmp270;
let xtmp271;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6170(line=508, offs=1) -- 6194(line=510, offs=12)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6195(line=511, offs=1) -- 6216(line=512, offs=14)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6220(line=514, offs=1) -- 6403(line=528, offs=8)
// L1DCLnone0();
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6421(line=530, offs=1) -- 6431(line=530, offs=11)
{
xtmp242 = XATS2JS_new_var0();
} // val(r0(57))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6432(line=531, offs=1) -- 6478(line=532, offs=38)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3024(line=252, offs=1) -- 3331(line=279, offs=14)
function
gseq_foldl_1774_(a7x1, a7x2)
{
let xtmp246;
let xtmp247;
;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3081(line=258, offs=1) -- 3096(line=258, offs=16)
{
xtmp246 = XATS2JS_new_var1(a7x2);
} // val(r0(61))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3100(line=260, offs=1) -- 3118(line=260, offs=19)
{
;
} // val(H0Pvar(p0(62)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3122(line=262, offs=1) -- 3326(line=277, offs=7)
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3170(line=267, offs=1) -- 3299(line=276, offs=8)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4137(line=339, offs=1) -- 4317(line=355, offs=8)
function
gseq_foreach_1981_(a8x1)
{
let xtmp249;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4177(line=343, offs=1) -- 4297(line=352, offs=24)
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4220(line=347, offs=1) -- 4295(line=351, offs=8)
// L1DCLnone0();
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 9995(line=742, offs=1) -- 10040(line=743, offs=38)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8879(line=609, offs=1) -- 9095(line=624, offs=8)
function
string_forall_6387_(a10x1)
{
let xtmp251;
let xtmp252;
;
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8924(line=614, offs=1) -- 9018(line=618, offs=26)
;
{
xtmp252 =
function(a11x1)
{
let xtmp254;
;
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4220(line=347, offs=1) -- 4295(line=351, offs=8)
function
forall$test_3500_(a12x1)
{
let xtmp256;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4254(line=350, offs=1) -- 4283(line=350, offs=30)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3170(line=267, offs=1) -- 3299(line=276, offs=8)
function
foreach$work_3642_(a13x1)
{
let xtmp258;
let xtmp259;
let xtmp260;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 3205(line=270, offs=1) -- 3234(line=270, offs=30)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 239(line=19, offs=1) -- 292(line=21, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_get_1962_ = XATS2JS_UN_p2tr_get
;
xtmp258 = p2tr_get_1962_(xtmp246);
}
;
;
} // val(H0Pvar(r0(64)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6220(line=514, offs=1) -- 6403(line=528, offs=8)
function
foldl$fopr_3795_(a14x1, a14x2)
{
let xtmp263;
let xtmp265;
let xtmp266;
let xtmp267;
let xtmp268;
;
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6265(line=519, offs=1) -- 6294(line=520, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 4622(line=381, offs=3) -- 4655(line=381, offs=36)
function
map$fopr_2300_(a15x1)
{
;
return a15x1;
} // function // map$fopr(48)
;
xtmp263 = map$fopr_2300_(a14x2);
}
;
;
} // val(H0Pvar(y0(54)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6295(line=521, offs=1) -- 6325(line=522, offs=21)
{
{
xtmp265 = [1, xtmp263, XATS2JS_top];
}
;
;
} // val(H0Pvar(r1(55)))
;
// ./../../../../xatsopt/prelude/DATS/gseq.dats: 6326(line=523, offs=1) -- 6346(line=523, offs=21)
{
xtmp266 = XATS2JS_new_cofs(xtmp265,2);
;
} // val(H0Pvar(p1(56)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
xtmp268 = XATS2JS_fcast(xtmp265);
}
;
xtmp267 = p2tr_set_1998_(a14x1, xtmp268);
}
;
return xtmp266;
} // function // foldl$fopr(50)
;
xtmp260 = foldl$fopr_3795_(xtmp258, a13x1);
}
;
xtmp259 = p2tr_set_1998_(xtmp246, xtmp260);
}
;
return xtmp259;
} // function // foreach$work(53)
;
xtmp256 = foreach$work_3642_(a12x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(256)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(256)));
} // val(H0Pnil())
;
return true;
} // function // forall$test(56)
;
xtmp254 = forall$test_3500_(a11x1);
}
;
return xtmp254;
} // lam-function
;
xtmp251 = XATS2JS_string_forall_cfr(a10x1, xtmp252);
}
;
return xtmp251;
} // function // string_forall(58)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = string_forall_6387_
;
xtmp249 = gseq_forall_1939_(a8x1);
}
;
;
} // val(H0Pvar(test(66)))
;
return null;
} // function // gseq_foreach(55)
;
xtmp247 = gseq_foreach_1981_(a7x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(247)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(247)));
} // val(H0Pnil())
;
return XATS2JS_lval_get(xtmp246);
} // function // gseq_foldl(52)
;
xtmp243 = gseq_foldl_1774_(a6x1, xtmp242);
}
;
;
} // val(H0Pvar(pz(58)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
xtmp270 = [0];
}
;
xtmp269 = p2tr_set_1998_(xtmp243, xtmp270);
}
;
{
xtmp271 = XATS2JS_fcast(XATS2JS_lval_get(xtmp242));
}
;
return xtmp271;
} // function // gseq_map_list(49)
;
xtmp240 = gseq_map_list_2870_(a5x1);
}
;
return xtmp240;
} // function // gseq_listize(47)
;
xtmp238 = gseq_listize_2279_(a4x1);
}
;
xtmp237 = XATS2JS_fcast(xtmp238);
}
;
return xtmp237;
} // function // string_listize(45)
;
xtmp235 = string_listize_6692_(a3x2);
}
;
xtmp186 = list_vt_append_2551_(xtmp198, xtmp235);
}
;
;
} // val(H0Pvar(zs(39)))
;
{
// ./../../../../xatsopt/prelude/DATS/string.dats: 7491(line=533, offs=1) -- 7942(line=577, offs=8)
function
string_vt_make_list_vt_7749_(a4x1)
{
let xtmp284;
let xtmp285;
let xtmp294;
let xtmp295;
;
// ./../../../../xatsopt/prelude/DATS/string.dats: 7668(line=550, offs=1) -- 7691(line=551, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../../xatsopt/prelude/DATS/string.dats: 7695(line=553, offs=1) -- 7937(line=575, offs=5)
function
loop_7698_(a5x1, a5x2, a5x3)
{
let a5y1;
let a5y2;
let a5y3;
let xtmp277;
let xtmp278;
let xtmp279;
let xtmp280;
let xtmp281;
let xtmp282;
let xtmp283;
do {
;
;
;
{
xtmp278 = 0;
do {
do {
if(0!==a5x3[0]) break;
xtmp278 = 1;
} while(false);
if(xtmp278 > 0 ) break;
do {
if(1!==a5x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp278 = 2;
} while(false);
if(xtmp278 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp278) {
case 1:
{
xtmp277 = [-1];;
}
;
break;
case 2:
xtmp279 = a5x3[1];
xtmp280 = a5x3[2];
// ./../../../../xatsopt/prelude/DATS/string.dats: 7894(line=572, offs=1) -- 7933(line=573, offs=31)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9297(line=637, offs=1) -- 9451(line=647, offs=25)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9367(line=643, offs=1) -- 9449(line=646, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp281 = strtmp_vt_set_at_5715_(a5x1, a5x2, xtmp279);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(281)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(281)));
} // val(H0Pnil())
;
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp283 = gint_succ_sint_1861_(a5x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(282); L1VALfcst(loop(63)); L1VALtmp(arg[1](274)), L1VALtmp(tmp(283)), L1VALtmp(tmp(280)))
a5y1 = a5x1; a5y2 = xtmp283; a5y3 = xtmp280; a5x1 = a5y1; a5x2 = a5y2; a5x3 = a5y3; continue;
}
;
xtmp277 = xtmp282;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp277;
} // function // loop(63)
;
// ./../../../../xatsopt/prelude/DATS/string.dats: 7573(line=541, offs=1) -- 7620(line=543, offs=21)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9142(line=626, offs=1) -- 9276(line=635, offs=24)
// { // val-binding
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9210(line=632, offs=1) -- 9274(line=634, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_7187_ = XATS2JS_strtmp_vt_alloc
;
{
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a5x1)
{
let xtmp293;
;
// ./../../../../xatsopt/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a6x1, a6x2)
{
let a6y1;
let a6y2;
let xtmp289;
let xtmp290;
let xtmp291;
let xtmp292;
do {
;
;
{
xtmp290 = 0;
do {
do {
if(0!==a6x1[0]) break;
xtmp290 = 1;
} while(false);
if(xtmp290 > 0 ) break;
do {
if(1!==a6x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp290 = 2;
} while(false);
if(xtmp290 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp290) {
case 1:
xtmp289 = a6x2;
break;
case 2:
xtmp291 = a6x1[2];
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp292 = gint_add_sint_sint_3439_(a6x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(289); L1VALfcst(loop(69)); L1VALtmp(tmp(291)), L1VALtmp(tmp(292)))
a6y1 = xtmp291; a6y2 = xtmp292; a6x1 = a6y1; a6x2 = a6y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp289;
} // function // loop(69)
;
{
xtmp293 = loop_2130_(a5x1, 0);
}
;
return xtmp293;
} // function // list_vt_length(68)
;
xtmp285 = list_vt_length_2328_(a4x1);
}
;
xtmp284 = strtmp_vt_alloc_7187_(xtmp285);
}
;
;
} // val(H0Pvar(p0(79)))
;
// ./../../../../xatsopt/prelude/DATS/string.dats: 7621(line=544, offs=1) -- 7651(line=545, offs=22)
{
{
xtmp294 = loop_7698_(xtmp284, 0, a4x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(294)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(294)));
} // val(H0Pnil())
;
{
xtmp295 = XATS2JS_fcast(xtmp284);
}
;
return xtmp295;
} // function // string_vt_make_list_vt(62)
;
xtmp272 = string_vt_make_list_vt_7749_(xtmp186);
}
;
return xtmp272;
} // function // string_append_vt(42)
;
xtmp183 = string_append_vt_5999_(a2x1, a2x2);
}
;
xtmp182 = string_vt2t_2060_(xtmp183);
}
;
return xtmp182;
} // function // string_append(39)
;
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp297 = a0ref_get_3025_(xtop7);
}
;
xtmp296 = player2string_591_(xtmp297);
}
;
xtmp57 = string_append_5931_("Next Player: ", xtmp296);
}
;
} // if-else
;
} // if-else
;
return xtmp57;
} // function // theStatus_get(36)


// ./Tic-Tac-Toe.dats: 1502(line=123, offs=1) -- 2233(line=209, offs=16)
function
theState_winner_1505_()
{
let xtmp319;
let xtmp320;
let xtmp321;
let xtmp322;
let xtmp323;
let xtmp324;
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
let xtmp338;
let xtmp339;
let xtmp340;
let xtmp341;
let xtmp342;
let xtmp343;
// ./Tic-Tac-Toe.dats: 1541(line=127, offs=1) -- 1716(line=146, offs=6)
function
check_1544_(a2x1, a2x2, a2x3, a2x4, a2x5, a2x6)
{
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
let xtmp316;
let xtmp317;
let xtmp318;
;
;
;
;
;
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 624(line=53, offs=1) -- 661(line=54, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
bool_mul_1575_ = XATS2JS_bool_mul
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp308 = gint_mul_sint_sint_3609_(3, a2x1);
}
;
xtmp307 = gint_add_sint_sint_3439_(xtmp308, a2x2);
}
;
xtmp306 = a1ref_get_at_4635_(xtop19, xtmp307);
}
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp311 = gint_mul_sint_sint_3609_(3, a2x3);
}
;
xtmp310 = gint_add_sint_sint_3439_(xtmp311, a2x4);
}
;
xtmp309 = a1ref_get_at_4635_(xtop19, xtmp310);
}
;
xtmp305 = gint_eq_sint_sint_2293_(xtmp306, xtmp309);
}
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp315 = gint_mul_sint_sint_3609_(3, a2x1);
}
;
xtmp314 = gint_add_sint_sint_3439_(xtmp315, a2x2);
}
;
xtmp313 = a1ref_get_at_4635_(xtop19, xtmp314);
}
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp318 = gint_mul_sint_sint_3609_(3, a2x5);
}
;
xtmp317 = gint_add_sint_sint_3439_(xtmp318, a2x6);
}
;
xtmp316 = a1ref_get_at_4635_(xtop19, xtmp317);
}
;
xtmp312 = gint_eq_sint_sint_2293_(xtmp313, xtmp316);
}
;
xtmp304 = bool_mul_1575_(xtmp305, xtmp312);
}
;
return xtmp304;
} // function // check(74)
;
{
xtmp320 = check_1544_(0, 0, 0, 1, 0, 2);
}
;
if
(xtmp320)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp322 = gint_mul_sint_sint_3609_(3, 0);
}
;
xtmp321 = gint_add_sint_sint_3439_(xtmp322, 0);
}
;
xtmp319 = a1ref_get_at_4635_(xtop19, xtmp321);
}
;
} // if-then
else
{
{
xtmp323 = check_1544_(1, 0, 1, 1, 1, 2);
}
;
if
(xtmp323)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp325 = gint_mul_sint_sint_3609_(3, 1);
}
;
xtmp324 = gint_add_sint_sint_3439_(xtmp325, 0);
}
;
xtmp319 = a1ref_get_at_4635_(xtop19, xtmp324);
}
;
} // if-then
else
{
{
xtmp326 = check_1544_(2, 0, 2, 1, 2, 2);
}
;
if
(xtmp326)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp328 = gint_mul_sint_sint_3609_(3, 2);
}
;
xtmp327 = gint_add_sint_sint_3439_(xtmp328, 0);
}
;
xtmp319 = a1ref_get_at_4635_(xtop19, xtmp327);
}
;
} // if-then
else
{
{
xtmp329 = check_1544_(0, 0, 1, 0, 2, 0);
}
;
if
(xtmp329)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp331 = gint_mul_sint_sint_3609_(3, 0);
}
;
xtmp330 = gint_add_sint_sint_3439_(xtmp331, 0);
}
;
xtmp319 = a1ref_get_at_4635_(xtop19, xtmp330);
}
;
} // if-then
else
{
{
xtmp332 = check_1544_(0, 1, 1, 1, 2, 1);
}
;
if
(xtmp332)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp334 = gint_mul_sint_sint_3609_(3, 0);
}
;
xtmp333 = gint_add_sint_sint_3439_(xtmp334, 1);
}
;
xtmp319 = a1ref_get_at_4635_(xtop19, xtmp333);
}
;
} // if-then
else
{
{
xtmp335 = check_1544_(0, 2, 1, 2, 2, 2);
}
;
if
(xtmp335)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp337 = gint_mul_sint_sint_3609_(3, 0);
}
;
xtmp336 = gint_add_sint_sint_3439_(xtmp337, 2);
}
;
xtmp319 = a1ref_get_at_4635_(xtop19, xtmp336);
}
;
} // if-then
else
{
{
xtmp338 = check_1544_(0, 0, 1, 1, 2, 2);
}
;
if
(xtmp338)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp340 = gint_mul_sint_sint_3609_(3, 1);
}
;
xtmp339 = gint_add_sint_sint_3439_(xtmp340, 1);
}
;
xtmp319 = a1ref_get_at_4635_(xtop19, xtmp339);
}
;
} // if-then
else
{
{
xtmp341 = check_1544_(0, 2, 1, 1, 2, 0);
}
;
if
(xtmp341)
// then
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7835(line=484, offs=1) -- 7890(line=486, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_get_at_4635_ = XATS2JS_a1ref_get_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp343 = gint_mul_sint_sint_3609_(3, 1);
}
;
xtmp342 = gint_add_sint_sint_3439_(xtmp343, 1);
}
;
xtmp319 = a1ref_get_at_4635_(xtop19, xtmp342);
}
;
} // if-then
else
{
xtmp319 = 0;
} // if-else
;
} // if-else
;
} // if-else
;
} // if-else
;
} // if-else
;
} // if-else
;
} // if-else
;
} // if-else
;
return xtmp319;
} // function // theState_winner(73)


// ./Tic-Tac-Toe.dats: 2294(line=214, offs=1) -- 2332(line=216, offs=19)


// ./Tic-Tac-Toe.dats: 2336(line=218, offs=1) -- 2600(line=229, offs=21)
function
theState_update_2297_(a1x1)
{
let xtmp345;
let xtmp346;
let xtmp347;
let xtmp348;
let xtmp349;
let xtmp350;
let xtmp351;
let xtmp352;
let xtmp353;
let xtmp354;
let xtmp355;
let xtmp356;
let xtmp357;
if(0!==a1x1[0]) XATS2JS_patckerr0();
;
xtmp345 = a1x1[1];
xtmp346 = a1x1[2];
// ./Tic-Tac-Toe.dats: 2383(line=221, offs=3) -- 2403(line=221, offs=23)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp347 = a0ref_get_3025_(xtop7);
}
;
;
} // val(H0Pvar(p1(98)))
;
// ./Tic-Tac-Toe.dats: 2406(line=222, offs=3) -- 2430(line=222, offs=27)
{
{
xtmp348 = player_next_361_(xtmp347);
}
;
;
} // val(H0Pvar(p2(99)))
;
// ./Tic-Tac-Toe.dats: 2433(line=223, offs=3) -- 2459(line=223, offs=29)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_3064_ = XATS2JS_a0ref_set
;
xtmp349 = a0ref_set_3064_(xtop7, xtmp348);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(349)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(349)));
} // val(H0Pnil())
;
// ./Tic-Tac-Toe.dats: 2462(line=224, offs=3) -- 2494(line=224, offs=35)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 8193(line=511, offs=1) -- 8248(line=513, offs=39)
// { // val-binding
// } // val-binding
const // implval/fun
a1ref_set_at_4779_ = XATS2JS_a1ref_set_at
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3753(line=266, offs=1) -- 3810(line=267, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_mul_sint_sint_3609_ = XATS2JS_gint_mul_sint_sint
;
xtmp352 = gint_mul_sint_sint_3609_(3, xtmp345);
}
;
xtmp351 = gint_add_sint_sint_3439_(xtmp352, xtmp346);
}
;
xtmp350 = a1ref_set_at_4779_(xtop19, xtmp351, xtmp347);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(350)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(350)));
} // val(H0Pnil())
;
// ./Tic-Tac-Toe.dats: 2497(line=225, offs=3) -- 2536(line=225, offs=42)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_3064_ = XATS2JS_a0ref_set
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp355 = a0ref_get_3025_(xtop15);
}
;
xtmp354 = gint_add_sint_sint_3439_(xtmp355, 1);
}
;
xtmp353 = a0ref_set_3064_(xtop15, xtmp354);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(353)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(353)));
} // val(H0Pnil())
;
// ./Tic-Tac-Toe.dats: 2539(line=226, offs=3) -- 2580(line=226, offs=44)
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_3064_ = XATS2JS_a0ref_set
;
{
xtmp357 = theState_winner_1505_();
}
;
xtmp356 = a0ref_set_3064_(xtop11, xtmp357);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(356)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(356)));
} // val(H0Pnil())
;
return null;
} // function // theState_update(77)


// ./Tic-Tac-Toe.dats: 2663(line=234, offs=1) -- 2704(line=236, offs=32)


// ./Tic-Tac-Toe.dats: 2739(line=241, offs=1) -- 2799(line=243, offs=37)


// ./Tic-Tac-Toe.dats: 2883(line=253, offs=1) -- 3216(line=296, offs=15)
function
Square_handle_click(a1x1, a1x2)
{
let xtmp360;
let xtmp361;
let xtmp362;
let xtmp363;
let xtmp364;
let xtmp365;
let xtmp366;
let xtmp367;
;
;
// ./Tic-Tac-Toe.dats: 2929(line=257, offs=1) -- 2957(line=257, offs=29)
{
{
xtmp360 = theSquares_get(a1x1, a1x2);
}
;
;
} // val(H0Pvar(x(104)))
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3046(line=218, offs=1) -- 3103(line=219, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_neq_sint_sint_2555_ = XATS2JS_gint_neq_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp363 = a0ref_get_3025_(xtop11);
}
;
xtmp362 = gint_neq_sint_sint_2555_(xtmp363, 0);
}
;
if
(xtmp362)
// then
{
{
xtmp361 = alert("The game is over!!!");
}
;
} // if-then
else
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_3025_ = XATS2JS_a0ref_get
;
xtmp365 = a0ref_get_3025_(xtop15);
}
;
xtmp364 = gint_gte_sint_sint_2466_(xtmp365, 9);
}
;
if
(xtmp364)
// then
{
{
xtmp361 = alert("The game is over!!!");
}
;
} // if-then
else
{
{
// ./../../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp366 = gint_lte_sint_sint_2380_(xtmp360, 0);
}
;
if
(xtmp366)
// then
{
{
{
xtmp367 = [0, a1x1, a1x2];
}
;
xtmp361 = theState_update_2297_(xtmp367);
}
;
} // if-then
else
{
{
xtmp361 = alert("The square is already filled!!!");
}
;
} // if-else
;
} // if-else
;
} // if-else
;
return xtmp361;
} // function // Square_handle_click(83)


