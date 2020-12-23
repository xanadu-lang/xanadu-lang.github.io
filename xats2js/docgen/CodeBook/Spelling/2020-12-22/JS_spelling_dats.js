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
ATS_theWords_print1();
let output1 =
XATS2JS_the_print_store_join();
XATS2JS_the_print_store_clear();
alert(output1);
//
ATS_theWords_print2();
let output2 =
XATS2JS_the_print_store_join();
XATS2JS_the_print_store_clear();
JS_spelling_output.innerHTML = output2;
//
}

/* ****** ****** */

/* end of [JS_spelling.cats] */

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
// ././../../../share/xats2js_prelude.hats: 1457(line=52, offs=1) -- 1506(line=52, offs=50)
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
// ./../../../xatsopt/prelude/DATS/gseq.dats: 3390(line=283, offs=1) -- 3560(line=296, offs=13)
function
gseq_exists_1894_(a2x1)
{
let xtmp4;
let xtmp5;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 3437(line=288, offs=3) -- 3495(line=290, offs=27)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/string.dats: 9995(line=742, offs=1) -- 10040(line=743, offs=38)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8879(line=609, offs=1) -- 9095(line=624, offs=8)
function
string_forall_6387_(a4x1)
{
let xtmp7;
let xtmp8;
;
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8924(line=614, offs=1) -- 9018(line=618, offs=26)
;
{
xtmp8 =
function(a5x1)
{
let xtmp10;
;
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 3437(line=288, offs=3) -- 3495(line=290, offs=27)
function
forall$test_3500_(a6x1)
{
let xtmp12;
let xtmp13;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 315(line=26, offs=1) -- 352(line=26, offs=38)
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
// ./../../../xatsopt/prelude/DATS/gord.dats: 121(line=12, offs=1) -- 172(line=15, offs=21)
function
g_eq_1500_(a8x1, a8x2)
{
let xtmp18;
let xtmp19;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
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
// ./../../../xatsopt/prelude/DATS/string.dats: 9995(line=742, offs=1) -- 10040(line=743, offs=38)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8879(line=609, offs=1) -- 9095(line=624, offs=8)
function
string_forall_6387_(a3x1)
{
let xtmp24;
let xtmp25;
;
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8924(line=614, offs=1) -- 9018(line=618, offs=26)
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

var xtop0;
var xtop4;
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
// ././../../../share/xats2js_prelude.hats: 1457(line=52, offs=1) -- 1506(line=52, offs=50)
// L1DCLnone1(H0Cnone1(...))
// } // end-of-include


// ./JS_spelling.dats: 94(line=6, offs=1) -- 125(line=6, offs=32)
// L1DCLnone1(H0Cnone1(...))

// ./JS_spelling.dats: 146(line=8, offs=1) -- 189(line=9, offs=35)
// L1DCLnone1(H0Cnone1(...))

// ./JS_spelling.dats: 218(line=12, offs=1) -- 260(line=13, offs=39)


// ./JS_spelling.dats: 269(line=15, offs=1) -- 311(line=16, offs=39)


// ./JS_spelling.dats: 320(line=18, offs=1) -- 362(line=19, offs=39)


// ./JS_spelling.dats: 383(line=21, offs=1) -- 485(line=27, offs=8)
// L1DCLnone0()

// ./JS_spelling.dats: 486(line=28, offs=1) -- 551(line=30, offs=33)
// L1DCLnone0()

// ./JS_spelling.dats: 572(line=32, offs=1) -- 643(line=34, offs=39)
// L1DCLnone0()

// ./JS_spelling.dats: 664(line=36, offs=1) -- 718(line=39, offs=27)
{
{
// ./../../../xatsopt/prelude/DATS/array.dats: 243(line=22, offs=1) -- 304(line=26, offs=20)
function
a0ref_make_2308_(a1x1)
{
let xtmp2;
let xtmp3;
;
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 6993(line=423, offs=1) -- 7044(line=425, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
a0ptr_make_2347_ = XATS2JS_a0ptr_make
;
xtmp3 = a0ptr_make_2347_(a1x1);
}
;
xtmp2 = XATS2JS_fcast(xtmp3);
}
;
return xtmp2;
} // function // a0ref_make(10)
;
{
xtop4 = [0];
}
;
xtop0 = a0ref_make_2308_(xtop4);
}
;
;
} // val(H0Pvar(theWords_r(4)))


// ./JS_spelling.dats: 747(line=42, offs=1) -- 788(line=43, offs=38)


// ./JS_spelling.dats: 809(line=45, offs=1) -- 1333(line=84, offs=8)
function
ATS_spelling_call()
{
let xtmp5;
let xtmp34;
let xtmp83;
let xtmp103;
let xtmp386;
let xtmp400;
let xtmp454;
let xtmp455;
let xtmp456;
// ./JS_spelling.dats: 846(line=49, offs=1) -- 881(line=51, offs=22)
{
{
// ./JS_spelling.dats: 383(line=21, offs=1) -- 485(line=27, offs=8)
function
spelling$char_183_()
{
let xtmp6;
let xtmp7;
let xtmp33;
// ./JS_spelling.dats: 419(line=24, offs=1) -- 446(line=25, offs=19)
{
{
xtmp6 = JS_spelling_arg0();
}
;
;
} // val(H0Pvar(cs(3)))
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 1576(line=54, offs=1) -- 1730(line=68, offs=8)
function
char_lower_2160_(a3x1)
{
let xtmp9;
let xtmp10;
let xtmp15;
let xtmp22;
let xtmp23;
let xtmp26;
let xtmp27;
let xtmp30;
;
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 173(line=16, offs=1) -- 224(line=19, offs=21)
function
g_lt_1444_(a4x1, a4x2)
{
let xtmp13;
let xtmp14;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp14 = g_cmp_1644_(a4x1, a4x2);
}
;
xtmp13 = gint_lt_sint_sint_2125_(xtmp14, 0);
}
;
return xtmp13;
} // function // g_lt(15)
;
xtmp10 = g_lt_1444_(a3x1, XATS2JS_char('A'));
}
;
if
(xtmp10)
// then
{
xtmp9 = a3x1;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 225(line=20, offs=1) -- 276(line=23, offs=21)
function
g_gt_1472_(a4x1, a4x2)
{
let xtmp18;
let xtmp19;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp19 = g_cmp_1644_(a4x1, a4x2);
}
;
xtmp18 = gint_gt_sint_sint_2209_(xtmp19, 0);
}
;
return xtmp18;
} // function // g_gt(21)
;
xtmp15 = g_gt_1472_(a3x1, XATS2JS_char('Z'));
}
;
if
(xtmp15)
// then
{
xtmp9 = a3x1;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 768(line=64, offs=1) -- 816(line=66, offs=24)
function
char_make_sint_1462_(a4x1)
{
let xtmp21;
;
{
xtmp21 = XATS2JS_fcast(a4x1);
}
;
return xtmp21;
} // function // char_make_sint(24)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a4x1)
{
let xtmp25;
;
{
xtmp25 = XATS2JS_fcast(a4x1);
}
;
return xtmp25;
} // function // sint_make_char(28)
;
xtmp23 = sint_make_char_1568_(XATS2JS_char('a'));
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a4x1)
{
let xtmp29;
;
{
xtmp29 = XATS2JS_fcast(a4x1);
}
;
return xtmp29;
} // function // sint_make_char(28)
;
xtmp27 = sint_make_char_1568_(a3x1);
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a4x1)
{
let xtmp32;
;
{
xtmp32 = XATS2JS_fcast(a4x1);
}
;
return xtmp32;
} // function // sint_make_char(28)
;
xtmp30 = sint_make_char_1568_(XATS2JS_char('A'));
}
;
xtmp26 = gint_sub_sint_sint_3524_(xtmp27, xtmp30);
}
;
xtmp22 = gint_add_sint_sint_3439_(xtmp23, xtmp26);
}
;
xtmp9 = char_make_sint_1462_(xtmp22);
}
;
} // if-else
;
} // if-else
;
return xtmp9;
} // function // char_lower(4)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7986(line=541, offs=1) -- 8114(line=550, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8054(line=547, offs=1) -- 8112(line=549, offs=31)
;
// } // val-binding
const // implval/fun
string_head_raw_3947_ = XATS2JS_string_head_raw
;
xtmp33 = string_head_raw_3947_(xtmp6);
}
;
xtmp7 = char_lower_2160_(xtmp33);
}
;
return xtmp7;
} // function // spelling$char(3)
;
xtmp5 = spelling$char_183_();
}
;
;
} // val(H0Pvar(theChar(8)))
;
// ./JS_spelling.dats: 882(line=52, offs=1) -- 919(line=54, offs=23)
{
{
// ./JS_spelling.dats: 486(line=28, offs=1) -- 551(line=30, offs=33)
function
spelling$chars_228_()
{
let xtmp35;
let xtmp82;
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10168(line=754, offs=1) -- 10437(line=778, offs=8)
function
string_lower_8456_(a3x1)
{
let xtmp37;
let xtmp63;
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10209(line=758, offs=1) -- 10228(line=758, offs=20)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8286(line=563, offs=1) -- 8410(line=572, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8350(line=569, offs=1) -- 8408(line=571, offs=33)
;
// } // val-binding
const // implval/fun
string_length_5305_ = XATS2JS_string_length
;
xtmp37 = string_length_5305_(a3x1);
}
;
;
} // val(H0Pvar(n0(19)))
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10260(line=763, offs=1) -- 10383(line=774, offs=6)
function
lower_10263_(a4x1)
{
let xtmp39;
let xtmp40;
let xtmp45;
let xtmp52;
let xtmp53;
let xtmp56;
let xtmp57;
let xtmp60;
;
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 173(line=16, offs=1) -- 224(line=19, offs=21)
function
g_lt_1444_(a5x1, a5x2)
{
let xtmp43;
let xtmp44;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp44 = g_cmp_1644_(a5x1, a5x2);
}
;
xtmp43 = gint_lt_sint_sint_2125_(xtmp44, 0);
}
;
return xtmp43;
} // function // g_lt(15)
;
xtmp40 = g_lt_1444_(a4x1, XATS2JS_char('A'));
}
;
if
(xtmp40)
// then
{
xtmp39 = a4x1;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 225(line=20, offs=1) -- 276(line=23, offs=21)
function
g_gt_1472_(a5x1, a5x2)
{
let xtmp48;
let xtmp49;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp49 = g_cmp_1644_(a5x1, a5x2);
}
;
xtmp48 = gint_gt_sint_sint_2209_(xtmp49, 0);
}
;
return xtmp48;
} // function // g_gt(21)
;
xtmp45 = g_gt_1472_(a4x1, XATS2JS_char('Z'));
}
;
if
(xtmp45)
// then
{
xtmp39 = a4x1;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 768(line=64, offs=1) -- 816(line=66, offs=24)
function
char_make_sint_1462_(a5x1)
{
let xtmp51;
;
{
xtmp51 = XATS2JS_fcast(a5x1);
}
;
return xtmp51;
} // function // char_make_sint(24)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a5x1)
{
let xtmp55;
;
{
xtmp55 = XATS2JS_fcast(a5x1);
}
;
return xtmp55;
} // function // sint_make_char(28)
;
xtmp53 = sint_make_char_1568_(XATS2JS_char('a'));
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a5x1)
{
let xtmp59;
;
{
xtmp59 = XATS2JS_fcast(a5x1);
}
;
return xtmp59;
} // function // sint_make_char(28)
;
xtmp57 = sint_make_char_1568_(a4x1);
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a5x1)
{
let xtmp62;
;
{
xtmp62 = XATS2JS_fcast(a5x1);
}
;
return xtmp62;
} // function // sint_make_char(28)
;
xtmp60 = sint_make_char_1568_(XATS2JS_char('A'));
}
;
xtmp56 = gint_sub_sint_sint_3524_(xtmp57, xtmp60);
}
;
xtmp52 = gint_add_sint_sint_3439_(xtmp53, xtmp56);
}
;
xtmp39 = char_make_sint_1462_(xtmp52);
}
;
} // if-else
;
} // if-else
;
return xtmp39;
} // function // lower(34)
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10384(line=775, offs=1) -- 10431(line=776, offs=40)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/string.dats: 8313(line=602, offs=1) -- 8400(line=609, offs=8)
function
string_tabulate_8134_(a4x1)
{
let xtmp65;
let xtmp66;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6502(line=415, offs=1) -- 6622(line=425, offs=20)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6562(line=421, offs=1) -- 6620(line=424, offs=31)
;
// } // val-binding
const // implval/fun
string_vt2t_2060_ = XATS2JS_string_vt2t
;
{
// ./../../../xatsopt/prelude/DATS/string.dats: 8404(line=611, offs=1) -- 8802(line=653, offs=8)
function
string_vt_tabulate_8188_(a5x1)
{
let xtmp79;
let xtmp80;
let xtmp81;
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8571(line=629, offs=1) -- 8594(line=630, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xatsopt/prelude/DATS/string.dats: 8598(line=632, offs=1) -- 8797(line=651, offs=5)
function
loop_8601_(a6x1, a6x2)
{
let a6y1;
let a6y2;
let xtmp70;
let xtmp71;
let xtmp72;
let xtmp76;
let xtmp77;
let xtmp78;
do {
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp71 = gint_lt_sint_sint_2125_(a6x2, a5x1);
}
;
if
(xtmp71)
// then
{
// ./../../../xatsopt/prelude/DATS/string.dats: 8718(line=646, offs=1) -- 8753(line=647, offs=27)
{
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10384(line=775, offs=1) -- 10431(line=776, offs=40)
function
tabulate$fopr_4232_(a7x1)
{
let xtmp74;
let xtmp75;
;
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8716(line=596, offs=1) -- 8858(line=607, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8780(line=602, offs=1) -- 8856(line=606, offs=22)
;
// } // val-binding
const // implval/fun
string_get_at_5545_ = XATS2JS_string_get_at
;
xtmp75 = string_get_at_5545_(a3x1, a7x1);
}
;
xtmp74 = lower_10263_(xtmp75);
}
;
return xtmp74;
} // function // tabulate$fopr(35)
;
xtmp72 = tabulate$fopr_4232_(a6x2);
}
;
;
} // val(H0Pvar(c0(30)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8754(line=648, offs=1) -- 8793(line=649, offs=31)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9297(line=637, offs=1) -- 9451(line=647, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9367(line=643, offs=1) -- 9449(line=646, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp76 = strtmp_vt_set_at_5715_(a6x1, a6x2, xtmp72);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(76)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(76)));
} // val(H0Pnil())
;
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp78 = gint_succ_sint_1861_(a6x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(77); L1VALfcst(loop(41)); L1VALtmp(arg[1](68)), L1VALtmp(tmp(78)))
a6y1 = a6x1; a6y2 = xtmp78; a6x1 = a6y1; a6x2 = a6y2; continue;
}
;
xtmp70 = xtmp77;
} // if-then
else
{
} // if-else
;
break;//return
} while( true );
return xtmp70;
} // function // loop(41)
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8488(line=620, offs=1) -- 8518(line=621, offs=22)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9142(line=626, offs=1) -- 9276(line=635, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9210(line=632, offs=1) -- 9274(line=634, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_7187_ = XATS2JS_strtmp_vt_alloc
;
xtmp79 = strtmp_vt_alloc_7187_(a5x1);
}
;
;
} // val(H0Pvar(p0(33)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8522(line=623, offs=1) -- 8532(line=623, offs=11)
{
;
} // val(H0Pvar(i0(35)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8533(line=624, offs=1) -- 8554(line=624, offs=22)
{
{
xtmp80 = loop_8601_(xtmp79, 0);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(80)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(80)));
} // val(H0Pnil())
;
{
xtmp81 = XATS2JS_fcast(xtmp79);
}
;
return xtmp81;
} // function // string_vt_tabulate(40)
;
xtmp66 = string_vt_tabulate_8188_(a4x1);
}
;
xtmp65 = string_vt2t_2060_(xtmp66);
}
;
return xtmp65;
} // function // string_tabulate(37)
;
xtmp63 = string_tabulate_8134_(xtmp37);
}
;
return xtmp63;
} // function // string_lower(7)
;
{
xtmp82 = JS_spelling_arg1();
}
;
xtmp35 = string_lower_8456_(xtmp82);
}
;
return xtmp35;
} // function // spelling$chars(6)
;
xtmp34 = spelling$chars_228_();
}
;
;
} // val(H0Pvar(theChars(17)))
;
// ./JS_spelling.dats: 923(line=56, offs=1) -- 1035(line=63, offs=19)
{
// ./JS_spelling.dats: 983(line=61, offs=1) -- 1033(line=62, offs=43)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 9900(line=813, offs=1) -- 10341(line=853, offs=8)
function
stream_vt_filter0_4289_(a2x1)
{
let xtmp102;
;
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 9973(line=821, offs=1) -- 10339(line=852, offs=8)
function
auxmain_9976_(a3x1)
{
let a3y1;
let xtmp86;
let xtmp90;
let xtmp91;
do {
;
xtmp90 =
function()
{
let xtmp87;
let xtmp88;
{
xtmp87 = auxloop_10070_(XATS2JS_llazy_eval(a3x1));
}
;
return xtmp87;
} // lam-function
;
xtmp91 =
function()
{
let xtmp87;
let xtmp88;
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a6x1)
{
;
return XATS2JS_llazy_free(a6x1);
} // function // stream_vt_free(55)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp88 = g_free_1550_(a3x1);
}
;
} // lam-function
;
xtmp86 = XATS2JS_new_llazy(xtmp90,xtmp91);
break;//return
} while( true );
return xtmp86;
} // function // auxmain(53)
function
auxloop_10070_(a3x1)
{
let a3y1;
let xtmp93;
let xtmp94;
let xtmp95;
let xtmp96;
let xtmp97;
let xtmp101;
do {
;
{
xtmp94 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp94 = 1;
} while(false);
if(xtmp94 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp94 = 2;
} while(false);
if(xtmp94 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp94) {
case 1:
{
xtmp93 = [0];
}
;
break;
case 2:
xtmp95 = a3x1[1];
xtmp96 = a3x1[2];
{
// ./JS_spelling.dats: 983(line=61, offs=1) -- 1033(line=62, offs=43)
function
filter0$test_2547_(a4x1)
{
let xtmp99;
let xtmp100;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8286(line=563, offs=1) -- 8410(line=572, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8350(line=569, offs=1) -- 8408(line=571, offs=33)
;
// } // val-binding
const // implval/fun
string_length_5305_ = XATS2JS_string_length
;
xtmp100 = string_length_5305_(a4x1);
}
;
xtmp99 = gint_gte_sint_sint_2466_(xtmp100, 6);
}
;
return xtmp99;
} // function // filter0$test(50)
;
xtmp97 = filter0$test_2547_(xtmp95);
}
;
if
(xtmp97)
// then
{
{
{
xtmp101 = auxmain_9976_(xtmp96);
}
;
xtmp93 = [1, xtmp95, xtmp101];
}
;
} // if-then
else
{
{
// tail-recursion:
// L1CMDapp(tmp(93); L1VALfcst(auxloop(56)); L1VALeval3(L1VALtmp(tmp(96))))
a3y1 = XATS2JS_llazy_eval(xtmp96); a3x1 = a3y1; continue;
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
return xtmp93;
} // function // auxloop(56)
;
{
xtmp102 = auxmain_9976_(a2x1);
}
;
return xtmp102;
} // function // stream_vt_filter0(52)
;
{
// ././spelling.dats: 622(line=52, offs=1) -- 835(line=63, offs=8)
function
spelling_107_()
{
let xtmp104;
let xtmp133;
let xtmp182;
let xtmp202;
// ././spelling.dats: 695(line=58, offs=1) -- 721(line=58, offs=27)
{
{
// ./JS_spelling.dats: 383(line=21, offs=1) -- 485(line=27, offs=8)
function
spelling$char_183_()
{
let xtmp105;
let xtmp106;
let xtmp132;
// ./JS_spelling.dats: 419(line=24, offs=1) -- 446(line=25, offs=19)
{
{
xtmp105 = JS_spelling_arg0();
}
;
;
} // val(H0Pvar(cs(3)))
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 1576(line=54, offs=1) -- 1730(line=68, offs=8)
function
char_lower_2160_(a4x1)
{
let xtmp108;
let xtmp109;
let xtmp114;
let xtmp121;
let xtmp122;
let xtmp125;
let xtmp126;
let xtmp129;
;
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 173(line=16, offs=1) -- 224(line=19, offs=21)
function
g_lt_1444_(a5x1, a5x2)
{
let xtmp112;
let xtmp113;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp113 = g_cmp_1644_(a5x1, a5x2);
}
;
xtmp112 = gint_lt_sint_sint_2125_(xtmp113, 0);
}
;
return xtmp112;
} // function // g_lt(15)
;
xtmp109 = g_lt_1444_(a4x1, XATS2JS_char('A'));
}
;
if
(xtmp109)
// then
{
xtmp108 = a4x1;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 225(line=20, offs=1) -- 276(line=23, offs=21)
function
g_gt_1472_(a5x1, a5x2)
{
let xtmp117;
let xtmp118;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp118 = g_cmp_1644_(a5x1, a5x2);
}
;
xtmp117 = gint_gt_sint_sint_2209_(xtmp118, 0);
}
;
return xtmp117;
} // function // g_gt(21)
;
xtmp114 = g_gt_1472_(a4x1, XATS2JS_char('Z'));
}
;
if
(xtmp114)
// then
{
xtmp108 = a4x1;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 768(line=64, offs=1) -- 816(line=66, offs=24)
function
char_make_sint_1462_(a5x1)
{
let xtmp120;
;
{
xtmp120 = XATS2JS_fcast(a5x1);
}
;
return xtmp120;
} // function // char_make_sint(24)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a5x1)
{
let xtmp124;
;
{
xtmp124 = XATS2JS_fcast(a5x1);
}
;
return xtmp124;
} // function // sint_make_char(28)
;
xtmp122 = sint_make_char_1568_(XATS2JS_char('a'));
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a5x1)
{
let xtmp128;
;
{
xtmp128 = XATS2JS_fcast(a5x1);
}
;
return xtmp128;
} // function // sint_make_char(28)
;
xtmp126 = sint_make_char_1568_(a4x1);
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a5x1)
{
let xtmp131;
;
{
xtmp131 = XATS2JS_fcast(a5x1);
}
;
return xtmp131;
} // function // sint_make_char(28)
;
xtmp129 = sint_make_char_1568_(XATS2JS_char('A'));
}
;
xtmp125 = gint_sub_sint_sint_3524_(xtmp126, xtmp129);
}
;
xtmp121 = gint_add_sint_sint_3439_(xtmp122, xtmp125);
}
;
xtmp108 = char_make_sint_1462_(xtmp121);
}
;
} // if-else
;
} // if-else
;
return xtmp108;
} // function // char_lower(4)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7986(line=541, offs=1) -- 8114(line=550, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8054(line=547, offs=1) -- 8112(line=549, offs=31)
;
// } // val-binding
const // implval/fun
string_head_raw_3947_ = XATS2JS_string_head_raw
;
xtmp132 = string_head_raw_3947_(xtmp105);
}
;
xtmp106 = char_lower_2160_(xtmp132);
}
;
return xtmp106;
} // function // spelling$char(3)
;
xtmp104 = spelling$char_183_();
}
;
;
} // val(H0Pvar(c0(48)))
;
// ././spelling.dats: 722(line=59, offs=1) -- 749(line=59, offs=28)
{
{
// ./JS_spelling.dats: 486(line=28, offs=1) -- 551(line=30, offs=33)
function
spelling$chars_228_()
{
let xtmp134;
let xtmp181;
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10168(line=754, offs=1) -- 10437(line=778, offs=8)
function
string_lower_8456_(a4x1)
{
let xtmp136;
let xtmp162;
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10209(line=758, offs=1) -- 10228(line=758, offs=20)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8286(line=563, offs=1) -- 8410(line=572, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8350(line=569, offs=1) -- 8408(line=571, offs=33)
;
// } // val-binding
const // implval/fun
string_length_5305_ = XATS2JS_string_length
;
xtmp136 = string_length_5305_(a4x1);
}
;
;
} // val(H0Pvar(n0(19)))
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10260(line=763, offs=1) -- 10383(line=774, offs=6)
function
lower_10263_(a5x1)
{
let xtmp138;
let xtmp139;
let xtmp144;
let xtmp151;
let xtmp152;
let xtmp155;
let xtmp156;
let xtmp159;
;
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 173(line=16, offs=1) -- 224(line=19, offs=21)
function
g_lt_1444_(a6x1, a6x2)
{
let xtmp142;
let xtmp143;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp143 = g_cmp_1644_(a6x1, a6x2);
}
;
xtmp142 = gint_lt_sint_sint_2125_(xtmp143, 0);
}
;
return xtmp142;
} // function // g_lt(15)
;
xtmp139 = g_lt_1444_(a5x1, XATS2JS_char('A'));
}
;
if
(xtmp139)
// then
{
xtmp138 = a5x1;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 225(line=20, offs=1) -- 276(line=23, offs=21)
function
g_gt_1472_(a6x1, a6x2)
{
let xtmp147;
let xtmp148;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp148 = g_cmp_1644_(a6x1, a6x2);
}
;
xtmp147 = gint_gt_sint_sint_2209_(xtmp148, 0);
}
;
return xtmp147;
} // function // g_gt(21)
;
xtmp144 = g_gt_1472_(a5x1, XATS2JS_char('Z'));
}
;
if
(xtmp144)
// then
{
xtmp138 = a5x1;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 768(line=64, offs=1) -- 816(line=66, offs=24)
function
char_make_sint_1462_(a6x1)
{
let xtmp150;
;
{
xtmp150 = XATS2JS_fcast(a6x1);
}
;
return xtmp150;
} // function // char_make_sint(24)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a6x1)
{
let xtmp154;
;
{
xtmp154 = XATS2JS_fcast(a6x1);
}
;
return xtmp154;
} // function // sint_make_char(28)
;
xtmp152 = sint_make_char_1568_(XATS2JS_char('a'));
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a6x1)
{
let xtmp158;
;
{
xtmp158 = XATS2JS_fcast(a6x1);
}
;
return xtmp158;
} // function // sint_make_char(28)
;
xtmp156 = sint_make_char_1568_(a5x1);
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 820(line=68, offs=1) -- 868(line=70, offs=24)
function
sint_make_char_1568_(a6x1)
{
let xtmp161;
;
{
xtmp161 = XATS2JS_fcast(a6x1);
}
;
return xtmp161;
} // function // sint_make_char(28)
;
xtmp159 = sint_make_char_1568_(XATS2JS_char('A'));
}
;
xtmp155 = gint_sub_sint_sint_3524_(xtmp156, xtmp159);
}
;
xtmp151 = gint_add_sint_sint_3439_(xtmp152, xtmp155);
}
;
xtmp138 = char_make_sint_1462_(xtmp151);
}
;
} // if-else
;
} // if-else
;
return xtmp138;
} // function // lower(34)
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10384(line=775, offs=1) -- 10431(line=776, offs=40)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/string.dats: 8313(line=602, offs=1) -- 8400(line=609, offs=8)
function
string_tabulate_8134_(a5x1)
{
let xtmp164;
let xtmp165;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6502(line=415, offs=1) -- 6622(line=425, offs=20)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6562(line=421, offs=1) -- 6620(line=424, offs=31)
;
// } // val-binding
const // implval/fun
string_vt2t_2060_ = XATS2JS_string_vt2t
;
{
// ./../../../xatsopt/prelude/DATS/string.dats: 8404(line=611, offs=1) -- 8802(line=653, offs=8)
function
string_vt_tabulate_8188_(a6x1)
{
let xtmp178;
let xtmp179;
let xtmp180;
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8571(line=629, offs=1) -- 8594(line=630, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xatsopt/prelude/DATS/string.dats: 8598(line=632, offs=1) -- 8797(line=651, offs=5)
function
loop_8601_(a7x1, a7x2)
{
let a7y1;
let a7y2;
let xtmp169;
let xtmp170;
let xtmp171;
let xtmp175;
let xtmp176;
let xtmp177;
do {
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2241(line=163, offs=1) -- 2296(line=164, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lt_sint_sint_2125_ = XATS2JS_gint_lt_sint_sint
;
xtmp170 = gint_lt_sint_sint_2125_(a7x2, a6x1);
}
;
if
(xtmp170)
// then
{
// ./../../../xatsopt/prelude/DATS/string.dats: 8718(line=646, offs=1) -- 8753(line=647, offs=27)
{
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 10384(line=775, offs=1) -- 10431(line=776, offs=40)
function
tabulate$fopr_4232_(a8x1)
{
let xtmp173;
let xtmp174;
;
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8716(line=596, offs=1) -- 8858(line=607, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8780(line=602, offs=1) -- 8856(line=606, offs=22)
;
// } // val-binding
const // implval/fun
string_get_at_5545_ = XATS2JS_string_get_at
;
xtmp174 = string_get_at_5545_(a4x1, a8x1);
}
;
xtmp173 = lower_10263_(xtmp174);
}
;
return xtmp173;
} // function // tabulate$fopr(35)
;
xtmp171 = tabulate$fopr_4232_(a7x2);
}
;
;
} // val(H0Pvar(c0(30)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8754(line=648, offs=1) -- 8793(line=649, offs=31)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9297(line=637, offs=1) -- 9451(line=647, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9367(line=643, offs=1) -- 9449(line=646, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp175 = strtmp_vt_set_at_5715_(a7x1, a7x2, xtmp171);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(175)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(175)));
} // val(H0Pnil())
;
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp177 = gint_succ_sint_1861_(a7x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(176); L1VALfcst(loop(41)); L1VALtmp(arg[1](167)), L1VALtmp(tmp(177)))
a7y1 = a7x1; a7y2 = xtmp177; a7x1 = a7y1; a7x2 = a7y2; continue;
}
;
xtmp169 = xtmp176;
} // if-then
else
{
} // if-else
;
break;//return
} while( true );
return xtmp169;
} // function // loop(41)
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8488(line=620, offs=1) -- 8518(line=621, offs=22)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9142(line=626, offs=1) -- 9276(line=635, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9210(line=632, offs=1) -- 9274(line=634, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_7187_ = XATS2JS_strtmp_vt_alloc
;
xtmp178 = strtmp_vt_alloc_7187_(a6x1);
}
;
;
} // val(H0Pvar(p0(33)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8522(line=623, offs=1) -- 8532(line=623, offs=11)
{
;
} // val(H0Pvar(i0(35)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 8533(line=624, offs=1) -- 8554(line=624, offs=22)
{
{
xtmp179 = loop_8601_(xtmp178, 0);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(179)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(179)));
} // val(H0Pnil())
;
{
xtmp180 = XATS2JS_fcast(xtmp178);
}
;
return xtmp180;
} // function // string_vt_tabulate(40)
;
xtmp165 = string_vt_tabulate_8188_(a5x1);
}
;
xtmp164 = string_vt2t_2060_(xtmp165);
}
;
return xtmp164;
} // function // string_tabulate(37)
;
xtmp162 = string_tabulate_8134_(xtmp136);
}
;
return xtmp162;
} // function // string_lower(7)
;
{
xtmp181 = JS_spelling_arg1();
}
;
xtmp134 = string_lower_8456_(xtmp181);
}
;
return xtmp134;
} // function // spelling$chars(6)
;
xtmp133 = spelling$chars_228_();
}
;
;
} // val(H0Pvar(cs(49)))
;
// ././spelling.dats: 750(line=60, offs=1) -- 833(line=62, offs=49)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 9900(line=813, offs=1) -- 10341(line=853, offs=8)
function
stream_vt_filter0_4289_(a3x1)
{
let xtmp201;
;
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 9973(line=821, offs=1) -- 10339(line=852, offs=8)
function
auxmain_9976_(a4x1)
{
let a4y1;
let xtmp185;
let xtmp189;
let xtmp190;
do {
;
xtmp189 =
function()
{
let xtmp186;
let xtmp187;
{
xtmp186 = auxloop_10070_(XATS2JS_llazy_eval(a4x1));
}
;
return xtmp186;
} // lam-function
;
xtmp190 =
function()
{
let xtmp186;
let xtmp187;
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a7x1)
{
;
return XATS2JS_llazy_free(a7x1);
} // function // stream_vt_free(55)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp187 = g_free_1550_(a4x1);
}
;
} // lam-function
;
xtmp185 = XATS2JS_new_llazy(xtmp189,xtmp190);
break;//return
} while( true );
return xtmp185;
} // function // auxmain(53)
function
auxloop_10070_(a4x1)
{
let a4y1;
let xtmp192;
let xtmp193;
let xtmp194;
let xtmp195;
let xtmp196;
let xtmp200;
do {
;
{
xtmp193 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp193 = 1;
} while(false);
if(xtmp193 > 0 ) break;
do {
if(1!==a4x1[0]) break;
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
{
xtmp192 = [0];
}
;
break;
case 2:
xtmp194 = a4x1[1];
xtmp195 = a4x1[2];
{
// ././spelling.dats: 750(line=60, offs=1) -- 833(line=62, offs=49)
function
filter0$test_2547_(a5x1)
{
let xtmp198;
let xtmp199;
;
{
xtmp199 = wtest1_349_(a5x1, xtmp104);
}
;
if
(xtmp199)
// then
{
{
xtmp198 = wtest2_484_(a5x1, xtmp133);
}
;
} // if-then
else
{
xtmp198 = false;
} // if-else
;
return xtmp198;
} // function // filter0$test(50)
;
xtmp196 = filter0$test_2547_(xtmp194);
}
;
if
(xtmp196)
// then
{
{
{
xtmp200 = auxmain_9976_(xtmp195);
}
;
xtmp192 = [1, xtmp194, xtmp200];
}
;
} // if-then
else
{
{
// tail-recursion:
// L1CMDapp(tmp(192); L1VALfcst(auxloop(56)); L1VALeval3(L1VALtmp(tmp(195))))
a4y1 = XATS2JS_llazy_eval(xtmp195); a4x1 = a4y1; continue;
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
return xtmp192;
} // function // auxloop(56)
;
{
xtmp201 = auxmain_9976_(a3x1);
}
;
return xtmp201;
} // function // stream_vt_filter0(52)
;
{
// ./JS_spelling.dats: 572(line=32, offs=1) -- 643(line=34, offs=39)
function
spelling$words_276_()
{
let xtmp203;
let xtmp385;
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 8549(line=621, offs=1) -- 8750(line=634, offs=8)
function
string_split_lines_8197_(a4x1)
{
let xtmp205;
let xtmp222;
let xtmp371;
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 8596(line=625, offs=1) -- 8615(line=625, offs=20)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 8616(line=626, offs=1) -- 8638(line=626, offs=23)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 8639(line=627, offs=1) -- 8678(line=628, offs=32)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 9195(line=744, offs=1) -- 9519(line=776, offs=8)
function
stream_vt_map0_4087_(a5x1)
{
let xtmp221;
;
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 9262(line=752, offs=1) -- 9517(line=775, offs=12)
function
auxmain_9265_(a6x1)
{
let xtmp208;
let xtmp219;
let xtmp220;
;
xtmp219 =
function()
{
let xtmp209;
let xtmp210;
let xtmp211;
let xtmp212;
let xtmp213;
let xtmp214;
let xtmp215;
let xtmp216;
let xtmp217;
xtmp210 = XATS2JS_llazy_eval(a6x1);
{
xtmp211 = 0;
do {
do {
if(0!==xtmp210[0]) break;
xtmp211 = 1;
} while(false);
if(xtmp211 > 0 ) break;
do {
if(1!==xtmp210[0]) break;
//L1PCKany();
//L1PCKany();
xtmp211 = 2;
} while(false);
if(xtmp211 > 0 ) break;
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
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 9441(line=770, offs=3) -- 9473(line=771, offs=24)
{
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 8639(line=627, offs=1) -- 8678(line=628, offs=32)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6502(line=415, offs=1) -- 6622(line=425, offs=20)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 6562(line=421, offs=1) -- 6620(line=424, offs=31)
;
// } // val-binding
const // implval/fun
string_vt2t_2060_ = XATS2JS_string_vt2t
;
// } // val-binding
const // implval/fun
map0$fopr_2343_ = string_vt2t_2060_
;
xtmp214 = map0$fopr_2343_(xtmp212);
}
;
;
} // val(H0Pvar(y0(57)))
;
{
{
xtmp216 = auxmain_9265_(xtmp213);
}
;
xtmp215 = [1, xtmp214, xtmp216];
}
;
xtmp209 = xtmp215;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp209;
} // lam-function
;
xtmp220 =
function()
{
let xtmp209;
let xtmp210;
let xtmp211;
let xtmp212;
let xtmp213;
let xtmp214;
let xtmp215;
let xtmp216;
let xtmp217;
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a9x1)
{
;
return XATS2JS_llazy_free(a9x1);
} // function // stream_vt_free(55)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp217 = g_free_1550_(a6x1);
}
;
} // lam-function
;
xtmp208 = XATS2JS_new_llazy(xtmp219,xtmp220);
return xtmp208;
} // function // auxmain(63)
;
{
xtmp221 = auxmain_9265_(a5x1);
}
;
return xtmp221;
} // function // stream_vt_map0(62)
;
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 8948(line=647, offs=1) -- 9840(line=728, offs=8)
function
cstream_vt_split_lines_8464_(a5x1)
{
let xtmp370;
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 9028(line=656, offs=1) -- 9072(line=660, offs=21)
function
iseol_9031_(a6x1)
{
let xtmp225;
;
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 121(line=12, offs=1) -- 172(line=15, offs=21)
function
g_eq_1500_(a7x1, a7x2)
{
let xtmp228;
let xtmp229;
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
{
// ./../../../xatsopt/prelude/DATS/char.dats: 2035(line=94, offs=1) -- 2067(line=95, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1183(line=91, offs=1) -- 1220(line=92, offs=30)
// { // val-binding
// } // val-binding
const // implval/fun
char_cmp_2060_ = XATS2JS_char_cmp
;
// } // val-binding
const // implval/fun
g_cmp_1644_ = char_cmp_2060_
;
xtmp229 = g_cmp_1644_(a7x1, a7x2);
}
;
xtmp228 = gint_eq_sint_sint_2293_(xtmp229, 0);
}
;
return xtmp228;
} // function // g_eq(66)
;
xtmp225 = g_eq_1500_(a6x1, XATS2JS_char('\n'));
}
;
return xtmp225;
} // function // iseol(65)
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 9073(line=661, offs=1) -- 9811(line=726, offs=9)
function
auxmain0_9076_(a6x1)
{
let xtmp231;
let xtmp275;
let xtmp276;
;
xtmp275 =
function()
{
let xtmp232;
let xtmp233;
let xtmp234;
let xtmp235;
let xtmp236;
let xtmp237;
let xtmp238;
let xtmp264;
let xtmp265;
let xtmp266;
let xtmp270;
let xtmp271;
xtmp233 = XATS2JS_llazy_eval(a6x1);
{
xtmp234 = 0;
do {
do {
if(0!==xtmp233[0]) break;
xtmp234 = 1;
} while(false);
if(xtmp234 > 0 ) break;
do {
if(1!==xtmp233[0]) break;
//L1PCKany();
//L1PCKany();
xtmp234 = 2;
} while(false);
if(xtmp234 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp234) {
case 1:
{
xtmp232 = [0];
}
;
break;
case 2:
xtmp235 = xtmp233[1];
xtmp236 = xtmp233[2];
{
xtmp237 = iseol_9031_(xtmp235);
}
;
if
(xtmp237)
// then
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 9297(line=681, offs=3) -- 9321(line=681, offs=27)
{
{
// ./../../../xatsopt/prelude/DATS/string.dats: 1592(line=56, offs=1) -- 1660(line=59, offs=23)
function
string_vt_nil_3244_()
{
let xtmp239;
let xtmp263;
{
// ./../../../xatsopt/prelude/DATS/string.dats: 7491(line=533, offs=1) -- 7942(line=577, offs=8)
function
string_vt_make_list_vt_7749_(a9x1)
{
let xtmp251;
let xtmp252;
let xtmp261;
let xtmp262;
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7668(line=550, offs=1) -- 7691(line=551, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xatsopt/prelude/DATS/string.dats: 7695(line=553, offs=1) -- 7937(line=575, offs=5)
function
loop_7698_(a10x1, a10x2, a10x3)
{
let a10y1;
let a10y2;
let a10y3;
let xtmp244;
let xtmp245;
let xtmp246;
let xtmp247;
let xtmp248;
let xtmp249;
let xtmp250;
do {
;
;
;
{
xtmp245 = 0;
do {
do {
if(0!==a10x3[0]) break;
xtmp245 = 1;
} while(false);
if(xtmp245 > 0 ) break;
do {
if(1!==a10x3[0]) break;
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
{
xtmp244 = [-1];;
}
;
break;
case 2:
xtmp246 = a10x3[1];
xtmp247 = a10x3[2];
// ./../../../xatsopt/prelude/DATS/string.dats: 7894(line=572, offs=1) -- 7933(line=573, offs=31)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9297(line=637, offs=1) -- 9451(line=647, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9367(line=643, offs=1) -- 9449(line=646, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp248 = strtmp_vt_set_at_5715_(a10x1, a10x2, xtmp246);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(248)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(248)));
} // val(H0Pnil())
;
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp250 = gint_succ_sint_1861_(a10x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(249); L1VALfcst(loop(72)); L1VALtmp(arg[1](241)), L1VALtmp(tmp(250)), L1VALtmp(tmp(247)))
a10y1 = a10x1; a10y2 = xtmp250; a10y3 = xtmp247; a10x1 = a10y1; a10x2 = a10y2; a10x3 = a10y3; continue;
}
;
xtmp244 = xtmp249;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp244;
} // function // loop(72)
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7573(line=541, offs=1) -- 7620(line=543, offs=21)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9142(line=626, offs=1) -- 9276(line=635, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9210(line=632, offs=1) -- 9274(line=634, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_7187_ = XATS2JS_strtmp_vt_alloc
;
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a10x1)
{
let xtmp260;
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a11x1, a11x2)
{
let a11y1;
let a11y2;
let xtmp256;
let xtmp257;
let xtmp258;
let xtmp259;
do {
;
;
{
xtmp257 = 0;
do {
do {
if(0!==a11x1[0]) break;
xtmp257 = 1;
} while(false);
if(xtmp257 > 0 ) break;
do {
if(1!==a11x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp257 = 2;
} while(false);
if(xtmp257 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp257) {
case 1:
xtmp256 = a11x2;
break;
case 2:
xtmp258 = a11x1[2];
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp259 = gint_add_sint_sint_3439_(a11x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(256); L1VALfcst(loop(74)); L1VALtmp(tmp(258)), L1VALtmp(tmp(259)))
a11y1 = xtmp258; a11y2 = xtmp259; a11x1 = a11y1; a11x2 = a11y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp256;
} // function // loop(74)
;
{
xtmp260 = loop_2130_(a10x1, 0);
}
;
return xtmp260;
} // function // list_vt_length(73)
;
xtmp252 = list_vt_length_2328_(a9x1);
}
;
xtmp251 = strtmp_vt_alloc_7187_(xtmp252);
}
;
;
} // val(H0Pvar(p0(77)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7621(line=544, offs=1) -- 7651(line=545, offs=22)
{
{
xtmp261 = loop_7698_(xtmp251, 0, a9x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(261)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(261)));
} // val(H0Pnil())
;
{
xtmp262 = XATS2JS_fcast(xtmp251);
}
;
return xtmp262;
} // function // string_vt_make_list_vt(71)
;
{
xtmp263 = [0];
}
;
xtmp239 = string_vt_make_list_vt_7749_(xtmp263);
}
;
return xtmp239;
} // function // string_vt_nil(70)
;
xtmp238 = string_vt_nil_3244_();
}
;
;
} // val(H0Pvar(l1(67)))
;
{
{
xtmp265 = auxmain0_9076_(xtmp236);
}
;
xtmp264 = [1, xtmp238, xtmp265];
}
;
xtmp232 = xtmp264;
} // if-then
else
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 9333(line=685, offs=1) -- 9358(line=686, offs=17)
{
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 332(line=32, offs=1) -- 401(line=35, offs=32)
function
list_vt_sing_1720_(a8x1)
{
let xtmp268;
let xtmp269;
;
{
{
xtmp269 = [0];
}
;
xtmp268 = [1, a8x1, xtmp269];
}
;
return xtmp268;
} // function // list_vt_sing(75)
;
xtmp266 = list_vt_sing_1720_(xtmp235);
}
;
;
} // val(H0Pvar(rs(83)))
;
{
xtmp270 = auxmain1_9388_(xtmp236, xtmp266);
}
;
xtmp232 = xtmp270;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp232;
} // lam-function
;
xtmp276 =
function()
{
let xtmp232;
let xtmp233;
let xtmp234;
let xtmp235;
let xtmp236;
let xtmp237;
let xtmp238;
let xtmp264;
let xtmp265;
let xtmp266;
let xtmp270;
let xtmp271;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 211(line=19, offs=1) -- 250(line=21, offs=27)
function
free1_111_(a8x1)
{
let xtmp273;
;
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1837(line=143, offs=1) -- 1892(line=145, offs=41)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1784(line=139, offs=1) -- 1833(line=141, offs=31)
function
stream_vt_free_2236_(a10x1)
{
;
return XATS2JS_llazy_free(a10x1);
} // function // stream_vt_free(55)
;
// } // val-binding
const // implval/fun
g_free_1550_ = stream_vt_free_2236_
;
xtmp273 = g_free_1550_(a8x1);
}
;
return xtmp273;
} // function // free1(76)
;
xtmp271 = free1_111_(a6x1);
}
;
} // lam-function
;
xtmp231 = XATS2JS_new_llazy(xtmp275,xtmp276);
return xtmp231;
} // function // auxmain0(69)
function
auxmain1_9388_(a6x1, a6x2)
{
let xtmp279;
let xtmp280;
let xtmp281;
let xtmp282;
let xtmp295;
let xtmp319;
let xtmp327;
let xtmp328;
let xtmp329;
let xtmp330;
let xtmp343;
let xtmp367;
let xtmp368;
let xtmp369;
;
;
xtmp280 = XATS2JS_llazy_eval(a6x1);
{
xtmp281 = 0;
do {
do {
if(0!==xtmp280[0]) break;
xtmp281 = 1;
} while(false);
if(xtmp281 > 0 ) break;
do {
if(1!==xtmp280[0]) break;
//L1PCKany();
//L1PCKany();
xtmp281 = 2;
} while(false);
if(xtmp281 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp281) {
case 1:
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 9535(line=704, offs=1) -- 9563(line=705, offs=20)
{
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3691(line=301, offs=1) -- 3769(line=304, offs=38)
function
list_vt_reverse_2756_(a7x1)
{
let xtmp284;
let xtmp294;
;
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3792(line=308, offs=1) -- 4163(line=339, offs=10)
function
list_vt_rappend_2826_(a8x1, a8x2)
{
let xtmp293;
;
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3872(line=317, offs=1) -- 4138(line=337, offs=5)
function
loop_3875_(a9x1, a9x2)
{
let a9y1;
let a9y2;
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
if(0!==a9x1[0]) break;
xtmp290 = 1;
} while(false);
if(xtmp290 > 0 ) break;
do {
if(1!==a9x1[0]) break;
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
xtmp289 = a9x2;
break;
case 2:
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 4035(line=332, offs=3) -- 4050(line=332, offs=18)
{
xtmp291 = a9x1[2];
;
} // val(H0Pvar(xs1(96)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 4053(line=333, offs=3) -- 4075(line=333, offs=25)
{
XATS2JS_lval_set(XATS2JS_new_cofs(a9x1,2), a9x2);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
// tail-recursion:
// L1CMDapp(tmp(292); L1VALfcst(loop(80)); L1VALtmp(tmp(291)), L1VALtmp(arg[1](287)))
a9y1 = xtmp291; a9y2 = a9x1; a9x1 = a9y1; a9x2 = a9y2; continue;
}
;
xtmp289 = xtmp292;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp289;
} // function // loop(80)
;
{
xtmp293 = loop_3875_(a8x1, a8x2);
}
;
return xtmp293;
} // function // list_vt_rappend(79)
;
{
xtmp294 = [0];
}
;
xtmp284 = list_vt_rappend_2826_(a7x1, xtmp294);
}
;
return xtmp284;
} // function // list_vt_reverse(78)
;
xtmp282 = list_vt_reverse_2756_(a6x2);
}
;
;
} // val(H0Pvar(rs(89)))
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 9564(line=706, offs=1) -- 9599(line=707, offs=27)
{
{
// ./../../../xatsopt/prelude/DATS/string.dats: 7491(line=533, offs=1) -- 7942(line=577, offs=8)
function
string_vt_make_list_vt_7749_(a7x1)
{
let xtmp307;
let xtmp308;
let xtmp317;
let xtmp318;
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7668(line=550, offs=1) -- 7691(line=551, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xatsopt/prelude/DATS/string.dats: 7695(line=553, offs=1) -- 7937(line=575, offs=5)
function
loop_7698_(a8x1, a8x2, a8x3)
{
let a8y1;
let a8y2;
let a8y3;
let xtmp300;
let xtmp301;
let xtmp302;
let xtmp303;
let xtmp304;
let xtmp305;
let xtmp306;
do {
;
;
;
{
xtmp301 = 0;
do {
do {
if(0!==a8x3[0]) break;
xtmp301 = 1;
} while(false);
if(xtmp301 > 0 ) break;
do {
if(1!==a8x3[0]) break;
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
{
xtmp300 = [-1];;
}
;
break;
case 2:
xtmp302 = a8x3[1];
xtmp303 = a8x3[2];
// ./../../../xatsopt/prelude/DATS/string.dats: 7894(line=572, offs=1) -- 7933(line=573, offs=31)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9297(line=637, offs=1) -- 9451(line=647, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9367(line=643, offs=1) -- 9449(line=646, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp304 = strtmp_vt_set_at_5715_(a8x1, a8x2, xtmp302);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(304)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(304)));
} // val(H0Pnil())
;
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp306 = gint_succ_sint_1861_(a8x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(305); L1VALfcst(loop(72)); L1VALtmp(arg[1](297)), L1VALtmp(tmp(306)), L1VALtmp(tmp(303)))
a8y1 = a8x1; a8y2 = xtmp306; a8y3 = xtmp303; a8x1 = a8y1; a8x2 = a8y2; a8x3 = a8y3; continue;
}
;
xtmp300 = xtmp305;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp300;
} // function // loop(72)
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7573(line=541, offs=1) -- 7620(line=543, offs=21)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9142(line=626, offs=1) -- 9276(line=635, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9210(line=632, offs=1) -- 9274(line=634, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_7187_ = XATS2JS_strtmp_vt_alloc
;
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a8x1)
{
let xtmp316;
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a9x1, a9x2)
{
let a9y1;
let a9y2;
let xtmp312;
let xtmp313;
let xtmp314;
let xtmp315;
do {
;
;
{
xtmp313 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp313 = 1;
} while(false);
if(xtmp313 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp313 = 2;
} while(false);
if(xtmp313 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp313) {
case 1:
xtmp312 = a9x2;
break;
case 2:
xtmp314 = a9x1[2];
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp315 = gint_add_sint_sint_3439_(a9x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(312); L1VALfcst(loop(74)); L1VALtmp(tmp(314)), L1VALtmp(tmp(315)))
a9y1 = xtmp314; a9y2 = xtmp315; a9x1 = a9y1; a9x2 = a9y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp312;
} // function // loop(74)
;
{
xtmp316 = loop_2130_(a8x1, 0);
}
;
return xtmp316;
} // function // list_vt_length(73)
;
xtmp308 = list_vt_length_2328_(a7x1);
}
;
xtmp307 = strtmp_vt_alloc_7187_(xtmp308);
}
;
;
} // val(H0Pvar(p0(77)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7621(line=544, offs=1) -- 7651(line=545, offs=22)
{
{
xtmp317 = loop_7698_(xtmp307, 0, a7x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(317)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(317)));
} // val(H0Pnil())
;
{
xtmp318 = XATS2JS_fcast(xtmp307);
}
;
return xtmp318;
} // function // string_vt_make_list_vt(71)
;
xtmp295 = string_vt_make_list_vt_7749_(xtmp282);
}
;
;
} // val(H0Pvar(l1(97)))
;
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1484(line=121, offs=1) -- 1561(line=124, offs=37)
function
strmcon_vt_sing_2027_(a7x1)
{
let xtmp321;
let xtmp322;
;
{
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 1210(line=99, offs=1) -- 1271(line=102, offs=25)
function
stream_vt_nil_1837_()
{
let xtmp323;
let xtmp325;
let xtmp326;
xtmp325 =
function()
{
let xtmp324;
{
xtmp324 = [0];
}
;
return xtmp324;
} // lam-function
;
xtmp326 =
function()
{
let xtmp324;
} // lam-function
;
xtmp323 = XATS2JS_new_llazy(xtmp325,xtmp326);
return xtmp323;
} // function // stream_vt_nil(82)
;
xtmp322 = stream_vt_nil_1837_();
}
;
xtmp321 = [1, a7x1, xtmp322];
}
;
return xtmp321;
} // function // strmcon_vt_sing(81)
;
xtmp319 = strmcon_vt_sing_2027_(xtmp295);
}
;
xtmp279 = xtmp319;
break;
case 2:
xtmp327 = xtmp280[1];
xtmp328 = xtmp280[2];
{
xtmp329 = iseol_9031_(xtmp327);
}
;
if
(xtmp329)
// then
{
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 9655(line=715, offs=1) -- 9683(line=716, offs=20)
{
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3691(line=301, offs=1) -- 3769(line=304, offs=38)
function
list_vt_reverse_2756_(a7x1)
{
let xtmp332;
let xtmp342;
;
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3792(line=308, offs=1) -- 4163(line=339, offs=10)
function
list_vt_rappend_2826_(a8x1, a8x2)
{
let xtmp341;
;
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3872(line=317, offs=1) -- 4138(line=337, offs=5)
function
loop_3875_(a9x1, a9x2)
{
let a9y1;
let a9y2;
let xtmp337;
let xtmp338;
let xtmp339;
let xtmp340;
do {
;
;
{
xtmp338 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp338 = 1;
} while(false);
if(xtmp338 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp338 = 2;
} while(false);
if(xtmp338 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp338) {
case 1:
xtmp337 = a9x2;
break;
case 2:
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 4035(line=332, offs=3) -- 4050(line=332, offs=18)
{
xtmp339 = a9x1[2];
;
} // val(H0Pvar(xs1(96)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 4053(line=333, offs=3) -- 4075(line=333, offs=25)
{
XATS2JS_lval_set(XATS2JS_new_cofs(a9x1,2), a9x2);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
// tail-recursion:
// L1CMDapp(tmp(340); L1VALfcst(loop(80)); L1VALtmp(tmp(339)), L1VALtmp(arg[1](335)))
a9y1 = xtmp339; a9y2 = a9x1; a9x1 = a9y1; a9x2 = a9y2; continue;
}
;
xtmp337 = xtmp340;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp337;
} // function // loop(80)
;
{
xtmp341 = loop_3875_(a8x1, a8x2);
}
;
return xtmp341;
} // function // list_vt_rappend(79)
;
{
xtmp342 = [0];
}
;
xtmp332 = list_vt_rappend_2826_(a7x1, xtmp342);
}
;
return xtmp332;
} // function // list_vt_reverse(78)
;
xtmp330 = list_vt_reverse_2756_(a6x2);
}
;
;
} // val(H0Pvar(rs(101)))
;
// ./../../../xatsopt/xatslib/githwxi/DATS/mygist.dats: 9684(line=717, offs=1) -- 9719(line=718, offs=27)
{
{
// ./../../../xatsopt/prelude/DATS/string.dats: 7491(line=533, offs=1) -- 7942(line=577, offs=8)
function
string_vt_make_list_vt_7749_(a7x1)
{
let xtmp355;
let xtmp356;
let xtmp365;
let xtmp366;
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7668(line=550, offs=1) -- 7691(line=551, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xatsopt/prelude/DATS/string.dats: 7695(line=553, offs=1) -- 7937(line=575, offs=5)
function
loop_7698_(a8x1, a8x2, a8x3)
{
let a8y1;
let a8y2;
let a8y3;
let xtmp348;
let xtmp349;
let xtmp350;
let xtmp351;
let xtmp352;
let xtmp353;
let xtmp354;
do {
;
;
;
{
xtmp349 = 0;
do {
do {
if(0!==a8x3[0]) break;
xtmp349 = 1;
} while(false);
if(xtmp349 > 0 ) break;
do {
if(1!==a8x3[0]) break;
//L1PCKany();
//L1PCKany();
xtmp349 = 2;
} while(false);
if(xtmp349 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp349) {
case 1:
{
xtmp348 = [-1];;
}
;
break;
case 2:
xtmp350 = a8x3[1];
xtmp351 = a8x3[2];
// ./../../../xatsopt/prelude/DATS/string.dats: 7894(line=572, offs=1) -- 7933(line=573, offs=31)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9297(line=637, offs=1) -- 9451(line=647, offs=25)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9367(line=643, offs=1) -- 9449(line=646, offs=38)
;
// } // val-binding
const // implval/fun
strtmp_vt_set_at_5715_ = XATS2JS_strtmp_vt_set_at
;
xtmp352 = strtmp_vt_set_at_5715_(a8x1, a8x2, xtmp350);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(352)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(352)));
} // val(H0Pnil())
;
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp354 = gint_succ_sint_1861_(a8x2);
}
;
// tail-recursion:
// L1CMDapp(tmp(353); L1VALfcst(loop(72)); L1VALtmp(arg[1](345)), L1VALtmp(tmp(354)), L1VALtmp(tmp(351)))
a8y1 = a8x1; a8y2 = xtmp354; a8y3 = xtmp351; a8x1 = a8y1; a8x2 = a8y2; a8x3 = a8y3; continue;
}
;
xtmp348 = xtmp353;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp348;
} // function // loop(72)
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7573(line=541, offs=1) -- 7620(line=543, offs=21)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9142(line=626, offs=1) -- 9276(line=635, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 9210(line=632, offs=1) -- 9274(line=634, offs=37)
;
// } // val-binding
const // implval/fun
strtmp_vt_alloc_7187_ = XATS2JS_strtmp_vt_alloc
;
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a8x1)
{
let xtmp364;
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a9x1, a9x2)
{
let a9y1;
let a9y2;
let xtmp360;
let xtmp361;
let xtmp362;
let xtmp363;
do {
;
;
{
xtmp361 = 0;
do {
do {
if(0!==a9x1[0]) break;
xtmp361 = 1;
} while(false);
if(xtmp361 > 0 ) break;
do {
if(1!==a9x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp361 = 2;
} while(false);
if(xtmp361 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp361) {
case 1:
xtmp360 = a9x2;
break;
case 2:
xtmp362 = a9x1[2];
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp363 = gint_add_sint_sint_3439_(a9x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(360); L1VALfcst(loop(74)); L1VALtmp(tmp(362)), L1VALtmp(tmp(363)))
a9y1 = xtmp362; a9y2 = xtmp363; a9x1 = a9y1; a9x2 = a9y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp360;
} // function // loop(74)
;
{
xtmp364 = loop_2130_(a8x1, 0);
}
;
return xtmp364;
} // function // list_vt_length(73)
;
xtmp356 = list_vt_length_2328_(a7x1);
}
;
xtmp355 = strtmp_vt_alloc_7187_(xtmp356);
}
;
;
} // val(H0Pvar(p0(77)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 7621(line=544, offs=1) -- 7651(line=545, offs=22)
{
{
xtmp365 = loop_7698_(xtmp355, 0, a7x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(365)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(365)));
} // val(H0Pnil())
;
{
xtmp366 = XATS2JS_fcast(xtmp355);
}
;
return xtmp366;
} // function // string_vt_make_list_vt(71)
;
xtmp343 = string_vt_make_list_vt_7749_(xtmp330);
}
;
;
} // val(H0Pvar(l1(102)))
;
{
{
xtmp368 = auxmain0_9076_(xtmp328);
}
;
xtmp367 = [1, xtmp343, xtmp368];
}
;
xtmp279 = xtmp367;
} // if-then
else
{
{
{
xtmp369 = [1, xtmp327, a6x2];
}
;
xtmp279 = auxmain1_9388_(xtmp328, xtmp369);
}
;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
return xtmp279;
} // function // auxmain1(77)
;
{
xtmp370 = auxmain0_9076_(a5x1);
}
;
return xtmp370;
} // function // cstream_vt_split_lines(64)
;
{
// ./../../../xatsopt/prelude/DATS/string.dats: 5837(line=390, offs=1) -- 6124(line=418, offs=8)
function
string_streamize_6812_(a5x1)
{
let xtmp373;
let xtmp384;
;
// ./../../../xatsopt/prelude/DATS/string.dats: 5906(line=398, offs=1) -- 5934(line=399, offs=20)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8286(line=563, offs=1) -- 8410(line=572, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8350(line=569, offs=1) -- 8408(line=571, offs=33)
;
// } // val-binding
const // implval/fun
string_length_5305_ = XATS2JS_string_length
;
xtmp373 = string_length_5305_(a5x1);
}
;
;
} // val(H0Pvar(n0(104)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 5935(line=400, offs=1) -- 6122(line=417, offs=8)
function
auxmain_5938_(a6x1)
{
let xtmp375;
let xtmp382;
let xtmp383;
;
xtmp382 =
function()
{
let xtmp376;
let xtmp377;
let xtmp378;
let xtmp379;
let xtmp380;
let xtmp381;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
xtmp377 = gint_gte_sint_sint_2466_(a6x1, xtmp373);
}
;
if
(xtmp377)
// then
{
{
xtmp376 = [0];
}
;
} // if-then
else
{
// ./../../../xatsopt/prelude/DATS/string.dats: 6030(line=412, offs=1) -- 6045(line=412, offs=16)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8716(line=596, offs=1) -- 8858(line=607, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8780(line=602, offs=1) -- 8856(line=606, offs=22)
;
// } // val-binding
const // implval/fun
string_get_at_5545_ = XATS2JS_string_get_at
;
xtmp378 = string_get_at_5545_(a5x1, a6x1);
}
;
;
} // val(H0Pvar(ci(107)))
;
// ./../../../xatsopt/prelude/DATS/string.dats: 6046(line=413, offs=1) -- 6063(line=413, offs=18)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp379 = gint_succ_sint_1861_(a6x1);
}
;
;
} // val(H0Pvar(i0(108)))
;
{
{
xtmp381 = auxmain_5938_(xtmp379);
}
;
xtmp380 = [1, xtmp378, xtmp381];
}
;
xtmp376 = xtmp380;
} // if-else
;
return xtmp376;
} // lam-function
;
xtmp383 =
function()
{
let xtmp376;
let xtmp377;
let xtmp378;
let xtmp379;
let xtmp380;
let xtmp381;
} // lam-function
;
xtmp375 = XATS2JS_new_llazy(xtmp382,xtmp383);
return xtmp375;
} // function // auxmain(84)
;
{
xtmp384 = auxmain_5938_(0);
}
;
return xtmp384;
} // function // string_streamize(83)
;
xtmp371 = string_streamize_6812_(a4x1);
}
;
xtmp222 = cstream_vt_split_lines_8464_(xtmp371);
}
;
xtmp205 = stream_vt_map0_4087_(xtmp222);
}
;
return xtmp205;
} // function // string_split_lines(9)
;
{
xtmp385 = JS_spelling_dict();
}
;
xtmp203 = string_split_lines_8197_(xtmp385);
}
;
return xtmp203;
} // function // spelling$words(8)
;
xtmp202 = spelling$words_276_();
}
;
xtmp182 = stream_vt_filter0_4289_(xtmp202);
}
;
return xtmp182;
} // function // spelling(58)
;
xtmp103 = spelling_107_();
}
;
xtmp83 = stream_vt_filter0_4289_(xtmp103);
}
;
;
} // val(H0Pvar(theWords(36)))
;
// ./JS_spelling.dats: 1036(line=64, offs=1) -- 1068(line=66, offs=18)
{
{
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 5034(line=402, offs=1) -- 5419(line=433, offs=8)
function
stream_vt_listize_3070_(a2x1)
{
let xtmp398;
let xtmp399;
;
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 5084(line=407, offs=1) -- 5331(line=427, offs=5)
function
loop_5087_(a3x1, a3x2)
{
let a3y1;
let a3y2;
let xtmp390;
let xtmp391;
let xtmp392;
let xtmp393;
let xtmp394;
let xtmp395;
let xtmp396;
let xtmp397;
do {
;
;
xtmp391 = XATS2JS_llazy_eval(a3x1);
{
xtmp392 = 0;
do {
do {
if(0!==xtmp391[0]) break;
xtmp392 = 1;
} while(false);
if(xtmp392 > 0 ) break;
do {
if(1!==xtmp391[0]) break;
//L1PCKany();
//L1PCKany();
xtmp392 = 2;
} while(false);
if(xtmp392 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp392) {
case 1:
{
xtmp393 = [0];
}
;
XATS2JS_lval_set(a3x2, xtmp393);
xtmp390 = null;
break;
case 2:
xtmp394 = xtmp391[1];
xtmp395 = xtmp391[2];
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 5254(line=422, offs=3) -- 5292(line=423, offs=30)
{
{
xtmp396 = [1, xtmp394, XATS2JS_top];
}
;
XATS2JS_lval_set(a3x2, xtmp396);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
xtmp397 = loop_5087_(xtmp395, XATS2JS_new_cofs(XATS2JS_lval_get(a3x2),2));
}
;
xtmp390 = null;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp390;
} // function // loop(86)
;
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 5362(line=431, offs=1) -- 5380(line=431, offs=19)
{
xtmp398 = XATS2JS_new_var0();
} // val(r0(116))
;
// ./../../../xatsopt/prelude/DATS/stream_vt.dats: 5381(line=432, offs=1) -- 5402(line=432, offs=22)
{
{
xtmp399 = loop_5087_(a2x1, xtmp398);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(399)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(399)));
} // val(H0Pnil())
;
return XATS2JS_lval_get(xtmp398);
} // function // stream_vt_listize(85)
;
xtmp386 = stream_vt_listize_3070_(xtmp83);
}
;
;
} // val(H0Pvar(theWords(109)))
;
// ./JS_spelling.dats: 1069(line=67, offs=1) -- 1276(line=80, offs=20)
{
// ./JS_spelling.dats: 1112(line=71, offs=1) -- 1240(line=79, offs=8)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 7968(line=651, offs=1) -- 9055(line=748, offs=13)
function
list_vt_mergesort_4006_(a2x1)
{
let xtmp444;
let xtmp445;
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8021(line=656, offs=1) -- 8044(line=657, offs=16)
// L1DCLnone1(H0Cnone1(...));
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8048(line=659, offs=1) -- 8989(line=744, offs=6)
function
amain_8051_(a3x1, a3x2)
{
let a3y1;
let a3y2;
let xtmp404;
let xtmp405;
let xtmp406;
let xtmp407;
let xtmp408;
let xtmp409;
let xtmp410;
let xtmp411;
let xtmp412;
let xtmp413;
do {
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp405 = gint_lte_sint_sint_2380_(a3x2, 1);
}
;
if
(xtmp405)
// then
{
xtmp404 = a3x1;
} // if-then
else
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8171(line=673, offs=3) -- 8186(line=673, offs=18)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3914(line=276, offs=1) -- 3971(line=277, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_div_sint_sint_3694_ = XATS2JS_gint_div_sint_sint
;
xtmp406 = gint_div_sint_sint_3694_(a3x2, 2);
}
;
;
} // val(H0Pvar(n2(125)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8189(line=674, offs=3) -- 8205(line=674, offs=19)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp407 = gint_sub_sint_sint_3524_(a3x2, xtmp406);
}
;
;
} // val(H0Pvar(n1(126)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8208(line=675, offs=3) -- 8219(line=675, offs=14)
{
xtmp408 = XATS2JS_new_var1(a3x1);
} // val(ys(127))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8222(line=676, offs=3) -- 8244(line=676, offs=25)
{
{
xtmp409 = split_8303_(xtmp408, xtmp407);
}
;
;
} // val(H0Pvar(zs(128)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8247(line=677, offs=3) -- 8269(line=677, offs=25)
{
{
xtmp410 = amain_8051_(XATS2JS_lval_get(xtmp408), xtmp407);
}
;
;
} // val(H0Pvar(ys(130)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8272(line=678, offs=3) -- 8294(line=678, offs=25)
{
{
xtmp411 = amain_8051_(xtmp409, xtmp406);
}
;
;
} // val(H0Pvar(zs(131)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8117(line=667, offs=3) -- 8127(line=667, offs=13)
{
xtmp412 = XATS2JS_new_var0();
} // val(xs(132))
;
{
xtmp413 = merge_8467_(xtmp410, xtmp411, xtmp412);
}
;
xtmp404 = XATS2JS_lval_get(xtmp412);
} // if-else
;
break;//return
} while( true );
return xtmp404;
} // function // amain(91)
function
split_8303_(a3x1, a3x2)
{
let a3y1;
let a3y2;
let xtmp416;
let xtmp417;
let xtmp418;
let xtmp419;
let xtmp420;
let xtmp421;
do {
;
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2883(line=207, offs=1) -- 2940(line=208, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gte_sint_sint_2466_ = XATS2JS_gint_gte_sint_sint
;
xtmp417 = gint_gte_sint_sint_2466_(a3x2, 2);
}
;
if
(xtmp417)
// then
{
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3589(line=255, offs=1) -- 3646(line=256, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_sub_sint_sint_3524_ = XATS2JS_gint_sub_sint_sint
;
xtmp418 = gint_sub_sint_sint_3524_(a3x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(416); L1VALfcst(split(96)); L1VALcofs(L1VALflat(L1VALtmp(arg[1](414))); 1), L1VALtmp(tmp(418)))
a3y1 = XATS2JS_new_cofs(XATS2JS_lval_get(a3x1),2); a3y2 = xtmp418; a3x1 = a3y1; a3x2 = a3y2; continue;
}
;
} // if-then
else
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8392(line=693, offs=1) -- 8405(line=693, offs=14)
{
xtmp419 = XATS2JS_lval_get(a3x1);
xtmp420 = xtmp419[2];
;
} // val(H0Pvar(zs(136)))
;
{
xtmp421 = [0];
}
;
XATS2JS_lval_set(XATS2JS_new_cofs(XATS2JS_lval_get(a3x1),2), xtmp421);
xtmp416 = xtmp420;
} // if-else
;
break;//return
} while( true );
return xtmp416;
} // function // split(96)
function
merge_8467_(a3x1, a3x2, a3x3)
{
let a3y1;
let a3y2;
let a3y3;
let xtmp425;
let xtmp426;
let xtmp427;
let xtmp428;
let xtmp429;
let xtmp430;
let xtmp431;
let xtmp432;
let xtmp440;
let xtmp441;
let xtmp442;
let xtmp443;
do {
;
;
;
{
xtmp426 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp426 = 1;
} while(false);
if(xtmp426 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp426 = 2;
} while(false);
if(xtmp426 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp426) {
case 1:
XATS2JS_lval_set(a3x3, a3x2);
xtmp425 = null;
break;
case 2:
xtmp427 = a3x1[1];
xtmp428 = a3x1[2];
{
xtmp429 = 0;
do {
do {
if(0!==a3x2[0]) break;
xtmp429 = 1;
} while(false);
if(xtmp429 > 0 ) break;
do {
if(1!==a3x2[0]) break;
//L1PCKany();
//L1PCKany();
xtmp429 = 2;
} while(false);
if(xtmp429 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp429) {
case 1:
XATS2JS_lval_set(a3x3, a3x1);
xtmp425 = null;
break;
case 2:
xtmp430 = a3x2[1];
xtmp431 = a3x2[2];
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8689(line=719, offs=1) -- 8718(line=720, offs=26)
{
{
// ./../../../xatsopt/prelude/DATS/gord.dats: 1483(line=122, offs=1) -- 1520(line=124, offs=23)
// { // val-binding
// ./JS_spelling.dats: 1112(line=71, offs=1) -- 1240(line=79, offs=8)
function
g_cmp_1644_(a5x1, a5x2)
{
let xtmp435;
let xtmp436;
let xtmp437;
let xtmp438;
let xtmp439;
;
;
// ./JS_spelling.dats: 1148(line=74, offs=1) -- 1187(line=76, offs=30)
{
{
// ./../../../xatsopt/prelude/DATS/gint.dats: 2377(line=100, offs=1) -- 2419(line=101, offs=35)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3243(line=232, offs=1) -- 3300(line=233, offs=50)
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
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8286(line=563, offs=1) -- 8410(line=572, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8350(line=569, offs=1) -- 8408(line=571, offs=33)
;
// } // val-binding
const // implval/fun
string_length_5305_ = XATS2JS_string_length
;
xtmp436 = string_length_5305_(a5x1);
}
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8286(line=563, offs=1) -- 8410(line=572, offs=22)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 8350(line=569, offs=1) -- 8408(line=571, offs=33)
;
// } // val-binding
const // implval/fun
string_length_5305_ = XATS2JS_string_length
;
xtmp437 = string_length_5305_(a5x2);
}
;
xtmp435 = g_cmp_1644_(xtmp436, xtmp437);
}
;
;
} // val(H0Pvar(sgn(120)))
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3046(line=218, offs=1) -- 3103(line=219, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_neq_sint_sint_2555_ = XATS2JS_gint_neq_sint_sint
;
xtmp439 = gint_neq_sint_sint_2555_(xtmp435, 0);
}
;
if
(xtmp439)
// then
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 1619(line=120, offs=1) -- 1666(line=121, offs=40)
// { // val-binding
// } // val-binding
const // implval/fun
gint_neg_sint_1705_ = XATS2JS_gint_neg_sint
;
xtmp438 = gint_neg_sint_1705_(xtmp435);
}
;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7691(line=518, offs=1) -- 7816(line=528, offs=19)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 7749(line=524, offs=1) -- 7814(line=527, offs=31)
;
// } // val-binding
const // implval/fun
string_cmp_4681_ = XATS2JS_string_cmp
;
xtmp438 = string_cmp_4681_(a5x1, a5x2);
}
;
} // if-else
;
return xtmp438;
} // function // g_cmp(18)
;
// } // val-binding
const // implval/fun
gl_cmp00_2530_ = g_cmp_1644_
;
xtmp432 = gl_cmp00_2530_(xtmp427, xtmp430);
}
;
;
} // val(H0Pvar(sgn(144)))
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2720(line=196, offs=1) -- 2777(line=197, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_lte_sint_sint_2380_ = XATS2JS_gint_lte_sint_sint
;
xtmp441 = gint_lte_sint_sint_2380_(xtmp432, 0);
}
;
if
(xtmp441)
// then
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8745(line=726, offs=1) -- 8756(line=726, offs=12)
{
;
} // val(H0Pvar(nd(146)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8757(line=727, offs=1) -- 8769(line=727, offs=13)
{
;
} // val(H0Pvar(ys(147)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8770(line=728, offs=1) -- 8788(line=728, offs=19)
{
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
XATS2JS_lval_set(a3x3, a3x1);
{
xtmp442 = merge_8467_(xtmp428, a3x2, XATS2JS_new_cofs(XATS2JS_lval_get(a3x3),2));
}
;
xtmp440 = null;
} // if-then
else
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8850(line=735, offs=1) -- 8861(line=735, offs=12)
{
;
} // val(H0Pvar(nd(148)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8862(line=736, offs=1) -- 8874(line=736, offs=13)
{
;
} // val(H0Pvar(zs(149)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 8875(line=737, offs=1) -- 8893(line=737, offs=19)
{
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
XATS2JS_lval_set(a3x3, a3x2);
{
xtmp443 = merge_8467_(a3x1, xtmp431, XATS2JS_new_cofs(XATS2JS_lval_get(a3x3),2));
}
;
xtmp440 = null;
} // if-else
;
xtmp425 = xtmp440;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp425;
} // function // merge(97)
;
{
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 2057(line=166, offs=1) -- 2297(line=186, offs=16)
function
list_vt_length_2328_(a3x1)
{
let xtmp453;
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 2127(line=172, offs=1) -- 2288(line=185, offs=5)
function
loop_2130_(a4x1, a4x2)
{
let a4y1;
let a4y2;
let xtmp449;
let xtmp450;
let xtmp451;
let xtmp452;
do {
;
;
{
xtmp450 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp450 = 1;
} while(false);
if(xtmp450 > 0 ) break;
do {
if(1!==a4x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp450 = 2;
} while(false);
if(xtmp450 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp450) {
case 1:
xtmp449 = a4x2;
break;
case 2:
xtmp451 = a4x1[2];
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp452 = gint_add_sint_sint_3439_(a4x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(449); L1VALfcst(loop(74)); L1VALtmp(tmp(451)), L1VALtmp(tmp(452)))
a4y1 = xtmp451; a4y2 = xtmp452; a4x1 = a4y1; a4x2 = a4y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp449;
} // function // loop(74)
;
{
xtmp453 = loop_2130_(a3x1, 0);
}
;
return xtmp453;
} // function // list_vt_length(73)
;
xtmp445 = list_vt_length_2328_(a2x1);
}
;
xtmp444 = amain_8051_(a2x1, xtmp445);
}
;
return xtmp444;
} // function // list_vt_mergesort(90)
;
xtmp400 = list_vt_mergesort_4006_(xtmp386);
}
;
;
} // val(H0Pvar(theWords(117)))
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7443(line=455, offs=1) -- 7492(line=457, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_set_2496_ = XATS2JS_a0ref_set
;
{
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3691(line=301, offs=1) -- 3769(line=304, offs=38)
function
list_vt_reverse_2756_(a2x1)
{
let xtmp458;
let xtmp468;
;
{
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3792(line=308, offs=1) -- 4163(line=339, offs=10)
function
list_vt_rappend_2826_(a3x1, a3x2)
{
let xtmp467;
;
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 3872(line=317, offs=1) -- 4138(line=337, offs=5)
function
loop_3875_(a4x1, a4x2)
{
let a4y1;
let a4y2;
let xtmp463;
let xtmp464;
let xtmp465;
let xtmp466;
do {
;
;
{
xtmp464 = 0;
do {
do {
if(0!==a4x1[0]) break;
xtmp464 = 1;
} while(false);
if(xtmp464 > 0 ) break;
do {
if(1!==a4x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp464 = 2;
} while(false);
if(xtmp464 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp464) {
case 1:
xtmp463 = a4x2;
break;
case 2:
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 4035(line=332, offs=3) -- 4050(line=332, offs=18)
{
xtmp465 = a4x1[2];
;
} // val(H0Pvar(xs1(96)))
;
// ./../../../xatsopt/prelude/DATS/list_vt.dats: 4053(line=333, offs=3) -- 4075(line=333, offs=25)
{
XATS2JS_lval_set(XATS2JS_new_cofs(a4x1,2), a4x2);
//L1PCKxpat(H0Pnil(); L1VALnone0());
//L1CMDmatch(H0Pnil(); L1VALnone0());
} // val(H0Pnil())
;
{
// tail-recursion:
// L1CMDapp(tmp(466); L1VALfcst(loop(80)); L1VALtmp(tmp(465)), L1VALtmp(arg[1](461)))
a4y1 = xtmp465; a4y2 = a4x1; a4x1 = a4y1; a4x2 = a4y2; continue;
}
;
xtmp463 = xtmp466;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp463;
} // function // loop(80)
;
{
xtmp467 = loop_3875_(a3x1, a3x2);
}
;
return xtmp467;
} // function // list_vt_rappend(79)
;
{
xtmp468 = [0];
}
;
xtmp458 = list_vt_rappend_2826_(a2x1, xtmp468);
}
;
return xtmp458;
} // function // list_vt_reverse(78)
;
xtmp456 = list_vt_reverse_2756_(xtmp400);
}
;
xtmp455 = XATS2JS_fcast(xtmp456);
}
;
xtmp454 = a0ref_set_2496_(xtop0, xtmp455);
}
;
return xtmp454;
} // function // ATS_spelling_call(14)


// ./JS_spelling.dats: 1393(line=88, offs=1) -- 1436(line=89, offs=40)


// ./JS_spelling.dats: 1445(line=91, offs=1) -- 1488(line=92, offs=40)


// ./JS_spelling.dats: 1510(line=95, offs=1) -- 1595(line=99, offs=8)
function
ATS_theWords_print1()
{
let xtmp469;
let xtmp513;
// ./JS_spelling.dats: 1546(line=98, offs=1) -- 1591(line=98, offs=46)
{
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 5725(line=469, offs=1) -- 5804(line=477, offs=13)
function
println_2_1857_(a2x1, a2x2)
{
let xtmp472;
let xtmp511;
;
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3359(line=277, offs=1) -- 3469(line=286, offs=12)
function
print_2_464_(a3x1, a3x2)
{
let xtmp475;
let xtmp476;
let xtmp510;
;
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3412(line=284, offs=3) -- 3438(line=284, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp475 = gl_print1_2233_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(475)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(475)));
} // val(H0Pnil())
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3441(line=285, offs=3) -- 3467(line=285, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/list.dats: 7540(line=652, offs=1) -- 7596(line=655, offs=23)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/gseq.dats: 1915(line=160, offs=1) -- 2258(line=192, offs=8)
function
gseq_print_1299_(a6x1)
{
let xtmp478;
let xtmp480;
let xtmp508;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 1956(line=165, offs=1) -- 1989(line=166, offs=25)
{
{
// ./../../../xatsopt/prelude/DATS/list.dats: 7600(line=657, offs=1) -- 7664(line=660, offs=35)
function
gseq_print$beg_1344_()
{
let xtmp479;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp479 = string_print_4753_("(");
}
;
return xtmp479;
} // function // gseq_print$beg(116)
;
xtmp478 = gseq_print$beg_1344_();
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(478)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(478)));
} // val(H0Pnil())
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 1993(line=168, offs=1) -- 2191(line=187, offs=7)
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 2045(line=174, offs=1) -- 2174(line=185, offs=8)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14990(line=1224, offs=1) -- 15182(line=1240, offs=8)
function
gseq_iforeach_5155_(a7x1)
{
let xtmp482;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 15031(line=1228, offs=1) -- 15162(line=1237, offs=25)
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14634(line=1194, offs=1) -- 14935(line=1220, offs=8)
function
gseq_iforall_5108_(a8x1)
{
let xtmp484;
let xtmp485;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14677(line=1199, offs=1) -- 14693(line=1199, offs=17)
{
xtmp484 = XATS2JS_new_var1(0);
} // val(i0(165))
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14694(line=1200, offs=1) -- 14712(line=1200, offs=19)
{
;
} // val(H0Pvar(p0(166)))
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/list.dats: 7903(line=678, offs=1) -- 7958(line=680, offs=41)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/list.dats: 3474(line=307, offs=1) -- 3677(line=323, offs=13)
function
list_forall_3143_(a10x1)
{
let xtmp507;
;
// ./../../../xatsopt/prelude/DATS/list.dats: 3532(line=312, offs=1) -- 3675(line=322, offs=5)
function
loop_3535_(a11x1)
{
let a11y1;
let xtmp488;
let xtmp489;
let xtmp490;
let xtmp491;
let xtmp492;
do {
;
{
xtmp489 = 0;
do {
do {
if(0!==a11x1[0]) break;
xtmp489 = 1;
} while(false);
if(xtmp489 > 0 ) break;
do {
if(1!==a11x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp489 = 2;
} while(false);
if(xtmp489 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp489) {
case 1:
xtmp488 = true;
break;
case 2:
xtmp490 = a11x1[1];
xtmp491 = a11x1[2];
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
function
forall$test_3500_(a12x1)
{
let xtmp494;
let xtmp495;
let xtmp496;
let xtmp497;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14793(line=1211, offs=1) -- 14824(line=1212, offs=23)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 239(line=19, offs=1) -- 292(line=21, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_get_1962_ = XATS2JS_UN_p2tr_get
;
xtmp494 = p2tr_get_1962_(xtmp484);
}
;
;
} // val(H0Pvar(i0(168)))
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14825(line=1213, offs=1) -- 14866(line=1214, offs=33)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp496 = gint_succ_sint_1861_(xtmp494);
}
;
xtmp495 = p2tr_set_1998_(xtmp484, xtmp496);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(495)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(495)));
} // val(H0Pnil())
;
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
function
iforall$test_5435_(a13x1, a13x2)
{
let xtmp500;
;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 15114(line=1235, offs=1) -- 15148(line=1235, offs=35)
{
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 2045(line=174, offs=1) -- 2174(line=185, offs=8)
function
iforeach$work_5677_(a14x1, a14x2)
{
let xtmp503;
let xtmp504;
let xtmp506;
;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 2116(line=181, offs=3) -- 2172(line=184, offs=32)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2400(line=174, offs=1) -- 2455(line=175, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_gt_sint_sint_2209_ = XATS2JS_gint_gt_sint_sint
;
xtmp504 = gint_gt_sint_sint_2209_(a14x1, 0);
}
;
if
(xtmp504)
// then
{
{
// ./../../../xatsopt/prelude/DATS/list.dats: 7730(line=665, offs=1) -- 7794(line=668, offs=35)
function
gseq_print$sep_1446_()
{
let xtmp505;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp505 = string_print_4753_(";");
}
;
return xtmp505;
} // function // gseq_print$sep(118)
;
xtmp503 = gseq_print$sep_1446_();
}
;
} // if-then
else
{
} // if-else
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(503)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(503)));
} // val(H0Pnil())
;
{
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
// } // val-binding
const // implval/fun
g_print_2168_ = string_print_4753_
;
xtmp506 = g_print_2168_(a14x2);
}
;
return xtmp506;
} // function // iforeach$work(117)
;
xtmp500 = iforeach$work_5677_(a13x1, a13x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(500)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(500)));
} // val(H0Pnil())
;
return true;
} // function // iforall$test(120)
;
xtmp497 = iforall$test_5435_(xtmp494, a12x1);
}
;
return xtmp497;
} // function // forall$test(122)
;
xtmp492 = forall$test_3500_(xtmp490);
}
;
if
(xtmp492)
// then
{
{
// tail-recursion:
// L1CMDapp(tmp(488); L1VALfcst(loop(127)); L1VALtmp(tmp(491)))
a11y1 = xtmp491; a11x1 = a11y1; continue;
}
;
} // if-then
else
{
xtmp488 = false;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp488;
} // function // loop(127)
;
{
xtmp507 = loop_3535_(a10x1);
}
;
return xtmp507;
} // function // list_forall(126)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = list_forall_3143_
;
xtmp485 = gseq_forall_1939_(a8x1);
}
;
return xtmp485;
} // function // gseq_iforall(121)
;
xtmp482 = gseq_iforall_5108_(a7x1);
}
;
;
} // val(H0Pvar(test(161)))
;
return null;
} // function // gseq_iforeach(119)
;
xtmp480 = gseq_iforeach_5155_(a6x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(480)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(480)));
} // val(H0Pnil())
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 2207(line=189, offs=1) -- 2248(line=190, offs=33)
{
{
// ./../../../xatsopt/prelude/DATS/list.dats: 7665(line=661, offs=1) -- 7729(line=664, offs=35)
function
gseq_print$end_1395_()
{
let xtmp509;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
;
// } // val-binding
const // implval/fun
string_print_4753_ = XATS2JS_string_print
;
xtmp509 = string_print_4753_(")");
}
;
return xtmp509;
} // function // gseq_print$end(130)
;
xtmp508 = gseq_print$end_1395_();
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(508)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(508)));
} // val(H0Pnil())
;
return null;
} // function // gseq_print(115)
;
// } // val-binding
const // implval/fun
g_print_2168_ = gseq_print_1299_
;
// } // val-binding
const // implval/fun
gl_print1_2233_ = g_print_2168_
;
xtmp476 = gl_print1_2233_(a3x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(476)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(476)));
} // val(H0Pnil())
;
{
xtmp510 = [-1];;
}
;
return xtmp510;
} // function // print_2(110)
;
xtmp472 = print_2_464_(a2x1, a2x2);
}
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 5533(line=453, offs=1) -- 5586(line=456, offs=26)
function
println_0_1752_()
{
let xtmp512;
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp512 = gl_print1_2233_("\n");
}
;
return xtmp512;
} // function // println_0(131)
;
xtmp511 = println_0_1752_();
}
;
return xtmp511;
} // function // println_2(109)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp513 = a0ref_get_2457_(xtop0);
}
;
xtmp469 = println_2_1857_("theWords = ", xtmp513);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(469)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(469)));
} // val(H0Pnil())
;
return null;
} // function // ATS_theWords_print1(107)


// ./JS_spelling.dats: 1628(line=100, offs=1) -- 1906(line=123, offs=8)
function
ATS_theWords_print2()
{
let xtmp514;
let xtmp523;
let xtmp524;
let xtmp525;
let xtmp546;
let xtmp585;
// ./JS_spelling.dats: 1667(line=104, offs=1) -- 1696(line=105, offs=21)
{
{
// ./../../../xatsopt/prelude/DATS/list.dats: 1262(line=119, offs=1) -- 1463(line=137, offs=8)
function
list_length_2365_(a2x1)
{
let xtmp522;
;
// ./../../../xatsopt/prelude/DATS/list.dats: 1328(line=127, offs=1) -- 1461(line=136, offs=5)
function
loop_1331_(a3x1, a3x2)
{
let a3y1;
let a3y2;
let xtmp518;
let xtmp519;
let xtmp520;
let xtmp521;
do {
;
;
{
xtmp519 = 0;
do {
do {
if(0!==a3x1[0]) break;
xtmp519 = 1;
} while(false);
if(xtmp519 > 0 ) break;
do {
if(1!==a3x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp519 = 2;
} while(false);
if(xtmp519 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp519) {
case 1:
xtmp518 = a3x2;
break;
case 2:
xtmp520 = a3x1[2];
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp521 = gint_add_sint_sint_3439_(a3x2, 1);
}
;
// tail-recursion:
// L1CMDapp(tmp(518); L1VALfcst(loop(135)); L1VALtmp(tmp(520)), L1VALtmp(tmp(521)))
a3y1 = xtmp520; a3y2 = xtmp521; a3x1 = a3y1; a3x2 = a3y2; continue;
}
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp518;
} // function // loop(135)
;
{
xtmp522 = loop_1331_(a2x1, 0);
}
;
return xtmp522;
} // function // list_length(134)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp523 = a0ref_get_2457_(xtop0);
}
;
xtmp514 = list_length_2365_(xtmp523);
}
;
;
} // val(H0Pvar(ln(175)))
;
// ./JS_spelling.dats: 1700(line=107, offs=1) -- 1788(line=115, offs=26)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2559(line=185, offs=1) -- 2614(line=186, offs=48)
// { // val-binding
// } // val-binding
const // implval/fun
gint_eq_sint_sint_2293_ = XATS2JS_gint_eq_sint_sint
;
xtmp525 = gint_eq_sint_sint_2293_(xtmp514, 1);
}
;
if
(xtmp525)
// then
{
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 5610(line=459, offs=1) -- 5673(line=465, offs=14)
function
println_1_1800_(a2x1)
{
let xtmp527;
let xtmp531;
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3264(line=268, offs=1) -- 3332(line=273, offs=17)
function
print_1_409_(a3x1)
{
let xtmp529;
let xtmp530;
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3304(line=272, offs=3) -- 3330(line=272, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp529 = gl_print1_2233_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(529)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(529)));
} // val(H0Pnil())
;
{
xtmp530 = [-1];;
}
;
return xtmp530;
} // function // print_1(137)
;
xtmp527 = print_1_409_(a2x1);
}
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 5533(line=453, offs=1) -- 5586(line=456, offs=26)
function
println_0_1752_()
{
let xtmp532;
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp532 = gl_print1_2233_("\n");
}
;
return xtmp532;
} // function // println_0(131)
;
xtmp531 = println_0_1752_();
}
;
return xtmp531;
} // function // println_1(136)
;
xtmp524 = println_1_1800_("Found 1 word:");
}
;
} // if-then
else
{
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 5856(line=481, offs=1) -- 5950(line=492, offs=13)
function
println_3_1931_(a2x1, a2x2, a2x3)
{
let xtmp536;
let xtmp544;
;
;
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3496(line=290, offs=1) -- 3645(line=302, offs=12)
function
print_3_536_(a3x1, a3x2, a3x3)
{
let xtmp540;
let xtmp541;
let xtmp542;
let xtmp543;
;
;
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3559(line=299, offs=3) -- 3585(line=299, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp540 = gl_print1_2233_(a3x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(540)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(540)));
} // val(H0Pnil())
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3588(line=300, offs=3) -- 3614(line=300, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 412(line=39, offs=1) -- 470(line=41, offs=31)
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
xtmp541 = gl_print1_2233_(a3x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(541)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(541)));
} // val(H0Pnil())
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3617(line=301, offs=3) -- 3643(line=301, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp542 = gl_print1_2233_(a3x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(542)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(542)));
} // val(H0Pnil())
;
{
xtmp543 = [-1];;
}
;
return xtmp543;
} // function // print_3(139)
;
xtmp536 = print_3_536_(a2x1, a2x2, a2x3);
}
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 5533(line=453, offs=1) -- 5586(line=456, offs=26)
function
println_0_1752_()
{
let xtmp545;
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp545 = gl_print1_2233_("\n");
}
;
return xtmp545;
} // function // println_0(131)
;
xtmp544 = println_0_1752_();
}
;
return xtmp544;
} // function // println_3(138)
;
xtmp524 = println_3_1931_("Found ", xtmp514, " words:");
}
;
} // if-else
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(524)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(524)));
} // val(H0Pnil())
;
// ./JS_spelling.dats: 1792(line=117, offs=1) -- 1902(line=122, offs=23)
{
// ./JS_spelling.dats: 1834(line=120, offs=3) -- 1900(line=121, offs=59)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14990(line=1224, offs=1) -- 15182(line=1240, offs=8)
function
gseq_iforeach_5155_(a2x1)
{
let xtmp548;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 15031(line=1228, offs=1) -- 15162(line=1237, offs=25)
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14634(line=1194, offs=1) -- 14935(line=1220, offs=8)
function
gseq_iforall_5108_(a3x1)
{
let xtmp550;
let xtmp551;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14677(line=1199, offs=1) -- 14693(line=1199, offs=17)
{
xtmp550 = XATS2JS_new_var1(0);
} // val(i0(165))
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14694(line=1200, offs=1) -- 14712(line=1200, offs=19)
{
;
} // val(H0Pvar(p0(166)))
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
// L1DCLnone0();
{
// ./../../../xatsopt/prelude/DATS/list.dats: 7903(line=678, offs=1) -- 7958(line=680, offs=41)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/list.dats: 3474(line=307, offs=1) -- 3677(line=323, offs=13)
function
list_forall_3143_(a5x1)
{
let xtmp584;
;
// ./../../../xatsopt/prelude/DATS/list.dats: 3532(line=312, offs=1) -- 3675(line=322, offs=5)
function
loop_3535_(a6x1)
{
let a6y1;
let xtmp554;
let xtmp555;
let xtmp556;
let xtmp557;
let xtmp558;
do {
;
{
xtmp555 = 0;
do {
do {
if(0!==a6x1[0]) break;
xtmp555 = 1;
} while(false);
if(xtmp555 > 0 ) break;
do {
if(1!==a6x1[0]) break;
//L1PCKany();
//L1PCKany();
xtmp555 = 2;
} while(false);
if(xtmp555 > 0 ) break;
} while(false);
} // case-patck0
switch
(xtmp555) {
case 1:
xtmp554 = true;
break;
case 2:
xtmp556 = a6x1[1];
xtmp557 = a6x1[2];
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14726(line=1205, offs=1) -- 14868(line=1215, offs=8)
function
forall$test_3500_(a7x1)
{
let xtmp560;
let xtmp561;
let xtmp562;
let xtmp563;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14793(line=1211, offs=1) -- 14824(line=1212, offs=23)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 239(line=19, offs=1) -- 292(line=21, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_get_1962_ = XATS2JS_UN_p2tr_get
;
xtmp560 = p2tr_get_1962_(xtmp550);
}
;
;
} // val(H0Pvar(i0(168)))
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 14825(line=1213, offs=1) -- 14866(line=1214, offs=33)
{
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/unsafe.dats: 401(line=30, offs=1) -- 454(line=32, offs=35)
// { // val-binding
// } // val-binding
const // implval/fun
p2tr_set_1998_ = XATS2JS_UN_p2tr_set
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 2015(line=148, offs=1) -- 2064(line=149, offs=42)
// { // val-binding
// } // val-binding
const // implval/fun
gint_succ_sint_1861_ = XATS2JS_gint_succ_sint
;
xtmp562 = gint_succ_sint_1861_(xtmp560);
}
;
xtmp561 = p2tr_set_1998_(xtmp550, xtmp562);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(561)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(561)));
} // val(H0Pnil())
;
{
// ./../../../xatsopt/prelude/DATS/gseq.dats: 15075(line=1232, offs=1) -- 15160(line=1236, offs=8)
function
iforall$test_5435_(a8x1, a8x2)
{
let xtmp566;
;
;
// ./../../../xatsopt/prelude/DATS/gseq.dats: 15114(line=1235, offs=1) -- 15148(line=1235, offs=35)
{
{
// ./JS_spelling.dats: 1834(line=120, offs=3) -- 1900(line=121, offs=59)
function
iforeach$work_5677_(a9x1, a9x2)
{
let xtmp569;
let xtmp583;
;
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 5856(line=481, offs=1) -- 5950(line=492, offs=13)
function
println_3_1931_(a10x1, a10x2, a10x3)
{
let xtmp573;
let xtmp581;
;
;
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3496(line=290, offs=1) -- 3645(line=302, offs=12)
function
print_3_536_(a11x1, a11x2, a11x3)
{
let xtmp577;
let xtmp578;
let xtmp579;
let xtmp580;
;
;
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3559(line=299, offs=3) -- 3585(line=299, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/gint.dats: 1899(line=71, offs=1) -- 1940(line=72, offs=34)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 344(line=33, offs=1) -- 472(line=42, offs=24)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 412(line=39, offs=1) -- 470(line=41, offs=31)
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
xtmp577 = gl_print1_2233_(a11x1);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(577)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(577)));
} // val(H0Pnil())
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3588(line=300, offs=3) -- 3614(line=300, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp578 = gl_print1_2233_(a11x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(578)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(578)));
} // val(H0Pnil())
;
// ./../../../xatsopt/prelude/DATS/synougat.dats: 3617(line=301, offs=3) -- 3643(line=301, offs=29)
{
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp579 = gl_print1_2233_(a11x3);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(579)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(579)));
} // val(H0Pnil())
;
{
xtmp580 = [-1];;
}
;
return xtmp580;
} // function // print_3(139)
;
xtmp573 = print_3_536_(a10x1, a10x2, a10x3);
}
;
{
// ./../../../xatsopt/prelude/DATS/synougat.dats: 5533(line=453, offs=1) -- 5586(line=456, offs=26)
function
println_0_1752_()
{
let xtmp582;
{
// ./../../../xatsopt/prelude/DATS/gbas.dats: 889(line=95, offs=1) -- 929(line=97, offs=26)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/string.dats: 9665(line=721, offs=1) -- 9701(line=722, offs=29)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 915(line=80, offs=1) -- 1034(line=89, offs=21)
// { // val-binding
// ./../../../xatsopt/prelude/DATS/CATS/JS/g_print.dats: 977(line=86, offs=1) -- 1032(line=88, offs=31)
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
xtmp582 = gl_print1_2233_("\n");
}
;
return xtmp582;
} // function // println_0(131)
;
xtmp581 = println_0_1752_();
}
;
return xtmp581;
} // function // println_3(138)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/basics.dats: 3428(line=245, offs=1) -- 3485(line=246, offs=50)
// { // val-binding
// } // val-binding
const // implval/fun
gint_add_sint_sint_3439_ = XATS2JS_gint_add_sint_sint
;
xtmp583 = gint_add_sint_sint_3439_(a9x1, 1);
}
;
xtmp569 = println_3_1931_(xtmp583, ":", a9x2);
}
;
return xtmp569;
} // function // iforeach$work(117)
;
xtmp566 = iforeach$work_5677_(a8x1, a8x2);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(566)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(566)));
} // val(H0Pnil())
;
return true;
} // function // iforall$test(120)
;
xtmp563 = iforall$test_5435_(xtmp560, a7x1);
}
;
return xtmp563;
} // function // forall$test(122)
;
xtmp558 = forall$test_3500_(xtmp556);
}
;
if
(xtmp558)
// then
{
{
// tail-recursion:
// L1CMDapp(tmp(554); L1VALfcst(loop(127)); L1VALtmp(tmp(557)))
a6y1 = xtmp557; a6x1 = a6y1; continue;
}
;
} // if-then
else
{
xtmp554 = false;
} // if-else
;
break;
default: XATS2JS_matcherr0();
} // case-switch
;
break;//return
} while( true );
return xtmp554;
} // function // loop(127)
;
{
xtmp584 = loop_3535_(a5x1);
}
;
return xtmp584;
} // function // list_forall(126)
;
// } // val-binding
const // implval/fun
gseq_forall_1939_ = list_forall_3143_
;
xtmp551 = gseq_forall_1939_(a3x1);
}
;
return xtmp551;
} // function // gseq_iforall(121)
;
xtmp548 = gseq_iforall_5108_(a2x1);
}
;
;
} // val(H0Pvar(test(161)))
;
return null;
} // function // gseq_iforeach(119)
;
{
// ./../../../xatsopt/prelude/DATS/CATS/JS/prelude.dats: 7289(line=444, offs=1) -- 7338(line=446, offs=33)
// { // val-binding
// } // val-binding
const // implval/fun
a0ref_get_2457_ = XATS2JS_a0ref_get
;
xtmp585 = a0ref_get_2457_(xtop0);
}
;
xtmp546 = gseq_iforeach_5155_(xtmp585);
}
;
//L1PCKxpat(H0Pnil(); L1VALtmp(tmp(546)));
//L1CMDmatch(H0Pnil(); L1VALtmp(tmp(546)));
} // val(H0Pnil())
;
return null;
} // function // ATS_theWords_print2(108)


