// Sun Dec 14 01:41:02 PM EST 2025
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX-2024-06-22:
// ATS3-XANADU/srcgen2/xats2js/srcgen1
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.

'use strict';

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
let XATSTOP0 = undefined
//
////////////////////////////////////////////////////////////////////////.
//
let XATSINT0 = (i0) => i0
let XATSFLT0 = (f0) => f0
//
let XATSINT1 = (i0) => i0
let XATSBOOL = (b0) => b0
let XATSFLT1 = (f0) => f0
/*
let XATSSFLT = (sf) => sf
let XATSDFLT = (df) => df
*/
let XATSSTRN = (cs) => cs
//
let XATSCNUL = (  ) => (0)
let XATSCHR1 = (  ) => (0)
let XATSCHAR =
    (ch) => ch.charCodeAt(0)
let XATSCHR2 =
    (ch) => ch.charCodeAt(0)
//
let XATSCHR3 = (ch) => {
    var c1 // current one
    c1 = ch.charCodeAt(1)
    if (c1 < 48||c1 > 55)
    {
      return c1 ; // ascii
    } else {
	var i1 = 2;
	var d1 = (c1 - 48);
	while (i1 < ch.length) {
	    c1 = ch.charCodeAt(i1);
	    if (c1===39) // SQUOTE=39
	    {
		return d1; // ascii
	    } else {
		d1 = 8*d1 + (c1 - 48)
	    }
	}
	return d1 ; // ascii code of [ch]
    }
}
//
////////////////////////////////////////////////////////////////////////.
/*
HX: this is historic:
let XATSVAR0 = () => [null]
let XATSVAR1 = (init) => [init]
let XATSFLAT = (addr) => addr[0]
*/
////////////////////////////////////////////////////////////////////////.

let XATSDAPP = (dapp) => dapp
let XATSCAPP = (_, capp) => capp
let XATSCAST = (_, args) => args[0]

////////////////////////////////////////////////////////////////////////.
//
let XATSPCON =
  (pcon, argi) => pcon[argi+1]
//
let XATSPFLT = (pflt) => pflt
let XATSPROJ = (proj) => proj
let XATSP0RJ = (p0rj) => p0rj
let XATSP1RJ = (_, p1rj) => p1rj
let XATSP1CN = (_, p1cn) => p1cn
//
////////////////////////////////////////////////////////////////////////.
//
let XATSTRCD = (knd0) => knd0
//
let XATSTUP0 = (tpl0) => tpl0
let XATSTUP1 = (knd0, tpl1) => tpl1
let XATSRCD2 = (knd0, rcd2) => rcd2
//
////////////////////////////////////////////////////////////////////////.
//
let XATSROOT = (x) => [0, x]
let XATSLPFT = (i, x) => [1+0, x, i]
let XATSLPBX = (i, x) => [1+1, x, i]
let XATSLPCN = (i, x) => [1+2, x, i+1]
//
let XATSVAR0 = (    ) => XATSROOT([null])
let XATSVAR1 = (init) => XATSROOT([init])
//
let XATSADDR = (addr) => addr // HX: no-op
let XATSFLAT = (addr) => XATS000_lvget(addr)
//
////////////////////////////////////////////////////////////////////////.
//
let XATSCTAG = (_, t) => t
//
let XATS000_inteq = (x, y) => (x===y)
let XATS000_btfeq = (x, y) => (x===y)
let XATS000_chreq = (x, y) => (x===y)
//
let XATS000_streq = (x, y) => (x == y)
//
let XATS000_ctgeq = (v, t) => (v[0] == t)
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_optn_nil()
{
  return XATSCAPP("optn_nil", [0])
}
function
XATS2JS_optn_cons(x0)
{
  return XATSCAPP("optn_cons", [1, x0])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_list_nil()
{
  return XATSCAPP("list_nil", [0])
}
function
XATS2JS_list_cons(x0, xs)
{
  return XATSCAPP("list_cons", [1, x0, xs])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_optn_vt_nil()
{
  return XATSCAPP("optn_vt_nil", [0])
}
function
XATS2JS_optn_vt_cons(x0)
{
  return XATSCAPP("optn_vt_cons", [1, x0])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_list_vt_nil()
{
  return XATSCAPP("list_vt_nil", [0])
}
function
XATS2JS_list_vt_cons(x0, xs)
{
  return XATSCAPP("list_vt_cons", [1, x0, xs])
}
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.

let XATS000_cfail = function()
  {
    throw new Error("XATS000_cfail");
  }

let XATS000_patck = function(pck)
  {
    if (!pck) {
      throw new Error("XATS000_patck");
    } // end-of-[if]
  }

////////////////////////////////////////////////////////////////////////.

let XATS000_fold = (pcon) => null
let XATS000_free = (pcon) => null

////////////////////////////////////////////////////////////////////////.
//
let XATS000_dp2tr =
  (p2tr) => XATS000_lvget(p2tr)
//
let XATS000_dl0az = (dlaz) => dlaz()
let XATS000_dl1az = (dlaz) => dlaz(1)
//
let XATS000_assgn =
  (lval, rval) => XATS000_lvset(lval, rval)
//
////////////////////////////////////////////////////////////////////////.
//
let XATS000_ftset =
  function(tpl0, idx1, rval)
  {
    let tpl1 = tpl0.slice();
    tpl1[idx1] = rval; return tpl1
  }
//
let XATS000_lvget = function(lval)
  {
    let ctag = lval[0]
    if (ctag === 0)
      return lval[1][0]
    if (ctag === 1+0)
      return XATS000_lvget(lval[1])[lval[2]]
    if (ctag === 1+1)
      return lval[1][lval[2]]
    if (ctag === 1+2)
      return lval[1][lval[2]]
  }
//
let XATS000_lvset = function(lval, rval)
  {
    let ctag = lval[0]
    if (ctag === 0) return ( lval[1][0] = rval )
    if (ctag === 1+0)
    {
      return XATS000_lvset
	(lval[1], XATS000_ftset(XATS000_lvget(lval[1]), lval[2], rval))
    }
    if (ctag === 1+1) return ( lval[1][lval[2]] = rval )
    if (ctag === 1+2) return ( lval[1][lval[2]] = rval )
  }
//
////////////////////////////////////////////////////////////////////////.
//
let XATS000_raise = (xcon) => { throw(xcon) }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
the end of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/xats2js_js1emit.js]
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// Sat Dec 13 05:23:45 PM EST 2025
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/xats2js_prelude.js]
*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Thu 05 Sep 2024 11:21:07 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_console_log
  (x0)
{
  return console.log(x0) // HX: void
}
//
////////////////////////////////////////////////////////////////////////.
//
const
XATS2JS_the_print_store = [] // HX: for prints?
//
const
XATS2JS_the_prout_store = [] // HX: for general output
//
const
XATS2JS_the_prerr_store = [] // HX: for reporting errors
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_the_print_store_clear
  ( /*void*/ )
{
  XATS2JS_the_print_store.length = 0; return
}
//
function
XATS2JS_the_print_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_print_store.join("")
  XATS2JS_the_print_store.length = 0; return cs
}
//
function
XATS2JS_the_prout_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_prout_store.join("")
  XATS2JS_the_prout_store.length = 0; return cs
}
//
function
XATS2JS_the_prerr_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_prerr_store.join("")
  XATS2JS_the_prerr_store.length = 0; return cs
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_xtop000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 09 Sep 2024 09:31:27 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_g_tostr
  ( obj )
{
  return String(obj) }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_sint$parse$fwork
  (rep0, work)
{
  let i0 = parseInt(rep0)
  if (!isNaN(i0)) { work(i0) }; return
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_dflt$parse$fwork
  (rep0, work)
{
  let f0 = parseFloat(rep0)
  if (!isNaN(f0)) { work(f0) }; return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gbas000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Sep 20 09:05:02 AM EDT 2024
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_bool_assert$errmsg
  (cond, emsg)
{
  if (!cond) {
    throw new Error("XATS2JS_bool_assert$errmsg: emsg = " + emsg)
  } ; return // HX: void is returned!
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gdbg000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 04:27:52 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_neg
  ( i1 )
{
  return ( -i1 ) // HX: neg
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_lt$sint
  (i1, i2)
{
  return (i1 < i2) // HX: lt
}
function
XATS2JS_sint_gt$sint
  (i1, i2)
{
  return (i1 > i2) // HX: gt
}
//
function
XATS2JS_sint_lte$sint
  (i1, i2)
{
  return (i1 <= i2) // HX: lte
}
function
XATS2JS_sint_gte$sint
  (i1, i2)
{
  return (i1 >= i2) // HX: gte
}
//
function
XATS2JS_sint_eq$sint
  (i1, i2)
{
  return (i1 === i2) // HX: equal
}
function
XATS2JS_sint_neq$sint
  (i1, i2)
{
  return (i1 !== i2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_add$sint
  (i1, i2)
{
  return (i1 + i2) // HX: add
}
//
function
XATS2JS_sint_sub$sint
  (i1, i2)
{
  return (i1 - i2) // HX: sub
}
//
function
XATS2JS_sint_mul$sint
  (i1, i2)
{
  return (i1 * i2) // HX: mul
}
//
function
XATS2JS_sint_div$sint
  (i1, i2)
{
  return Math.trunc(i1 / i2)
}
//
function
XATS2JS_sint_mod$sint
  (i1, i2)
{
  return (i1 % i2) // HX: mod
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_print
  ( i0 )
{
  let cs = i0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX-2025-09-27:
// for unsigned ints
// Sat Sep 27 12:38:38 PM EDT 2025
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_uint_print
  ( u0 )
{
  let cs = u0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_to$uint
  ( i0 )
{
  if (i0>=0)
  {
    return i0 // i0>=0
  } else {
    throw new Error("XATS2JS_sint_to$uint: i0 = " + i0.toString())
  } // end of [if(i0>=0)]
}
function
XATS2JS_uint_to$sint
  ( u0 )
{
  if (u0>=0)
  {
    return u0 // always?
  } else {
    throw new Error("XATS2JS_uint_to$sint: u0 = " + u0.toString())
  } // end of [if(u0>=0)]
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gint000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 05:07:38 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_bool_lt
  (b1, b2)
{
  return (b1 < b2) // HX: lt
}
function
XATS2JS_bool_gt
  (b1, b2)
{
  return (b1 > b2) // HX: gt
}
//
function
XATS2JS_bool_lte
  (b1, b2)
{
  return (b1 <= b2) // HX: lte
}
function
XATS2JS_bool_gte
  (b1, b2)
{
  return (b1 >= b2) // HX: gte
}
//
function
XATS2JS_bool_eq
  (b1, b2)
{
  return (b1 === b2) // HX: equal
}
function
XATS2JS_bool_neq
  (b1, b2)
{
  return (b1 !== b2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_bool000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 05:08:01 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_lt
  (c1, c2)
{
  return (c1 < c2) // HX: lt
}
function
XATS2JS_char_gt
  (c1, c2)
{
  return (c1 > c2) // HX: gt
}
//
function
XATS2JS_char_lte
  (c1, c2)
{
  return (c1 <= c2) // HX: lte
}
function
XATS2JS_char_gte
  (c1, c2)
{
  return (c1 >= c2) // HX: gte
}
//
function
XATS2JS_char_eq
  (c1, c2)
{
  return (c1 === c2) // HX: equal
}
function
XATS2JS_char_neq
  (c1, c2)
{
  return (c1 !== c2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_add$sint
  (c1, i2)
{
  let c2 = c1+i2
  return (c2%256) // HX: char=int8
}
//
function
XATS2JS_char_sub$char
  (c1, c2)
{
  return (c1 - c2) // HX: char=int8
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_print
  ( c0 )
{
  let cs = String.fromCharCode(c0)
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2025-01-10: from gavinz
Sun Jan 19 01:11:19 AM EST 2025
*/
function
XATS2JS_char_make_sint( i0 ) { return i0 }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_char000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 09 Sep 2024 06:14:11 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_neg
  ( df )
{
  return ( -df ) //HX:neg
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_abs
  ( df )
{
  if (df >= 0.0)
    return df
  else
    return (-df) //HX:abs
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_sqrt
  ( df )
{
  return Math.sqrt(  df  )
}
//
function
XATS2JS_dflt_cbrt
  ( df )
{
  return Math.cbrt(  df  )
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_lt$dflt
  (f1, f2)
{
  return (f1 < f2) // HX: lt
}
function
XATS2JS_dflt_gt$dflt
  (f1, f2)
{
  return (f1 > f2) // HX: gt
}
//
function
XATS2JS_dflt_lte$dflt
  (f1, f2)
{
  return (f1 <= f2) // HX: lte
}
function
XATS2JS_dflt_gte$dflt
  (f1, f2)
{
  return (f1 >= f2) // HX: gte
}
//
function
XATS2JS_dflt_eq$dflt
  (f1, f2)
{
  return (f1 === f2) // HX: eq
}
function
XATS2JS_dflt_neq$dflt
  (f1, f2)
{
  return (f1 !== f2) // HX: neq
}
//
/*
HX-2025-12-13:
Sat Dec 13 05:19:31 PM EST 2025
*/
//
function
XATS2JS_dflt_cmp$dflt
  (f1, f2)
{
  if (f1 < f2)
    return (-1) // lt
  else // f1 >= f2
    return (f1 > f2 ? 1 : 0)
  // HX: end-of-if( f1 < f2 )
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_add$dflt
  (f1, f2)
{
  return (f1 + f2) // HX: add
}
//
function
XATS2JS_dflt_sub$dflt
  (f1, f2)
{
  return (f1 - f2) // HX: sub
}
//
//
function
XATS2JS_dflt_mul$dflt
  (f1, f2)
{
  return (f1 * f2) // HX: mul
}
//
function
XATS2JS_dflt_div$dflt
  (f1, f2)
{
  return (f1 / f2) // HX: div
}
//
function
XATS2JS_dflt_mod$dflt
  (f1, f2)
{
  return (f1 % f2) // HX: mod
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_ceil
  ( df )
{
  return Math.ceil(df) // (1.2) = 2
}
function
XATS2JS_dflt_floor
  ( df )
{
  return Math.floor(df) // (1.2) = 1
}
function
XATS2JS_dflt_round
  ( df )
{
  // HX: (1.2) = 1 // (1.5) = 2
  return Math.round(df) // (-1.5) = 1
}
function
XATS2JS_dflt_trunc
  ( df )
{
  // HX: (1.2) = 1 // (1.9) = 1
  return Math.trunc(df) // (-1.2) = -1
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_print
  ( f0 )
{
  let cs = f0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gflt000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri 16 Aug 2024 05:26:45 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_cmp
  (x1, x2)
{
  var df
  var i0 = 0
  var n1 = x1.length;
  var n2 = x2.length;
  var n0 =
  (n1 <= n2) ? n1 : n2;
  while (i0 < n0) {
    df =
    x1.charCodeAt(i0)
    -
    x2.charCodeAt(i0)
    if (df !== 0) return df;
    i0 = (  i0 + 1  )
  }
  return (      n1 - n2      );
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_length
  (cs)
{
  return cs.length // HX: field
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_get$at$raw
  (cs, i0)
{
  return cs.charCodeAt(i0) // HX: ascii
}
function
XATS000_strn_get$at$raw
  (cs, i0)
{
  return XATS2JS_strn_get$at$raw(cs, i0)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_fmake_fwork
  (fwork)
{
  var cs = []
  fwork((ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_fmake_fwork
  (fwork)
{
  return XATS2JS_strn_fmake_fwork(fwork)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS000_strn_print
  ( cs )
{
  return XATS2JS_strn_print(cs)
}
function
XATS2JS_strn_print
  ( cs )
{
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2025-04-26:
Sat Apr 26 08:48:02 PM EDT 2025
*/
//
function
XATS2JS_strn_fmake0_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
function
XATS2JS_strn_fmake1_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_fmake0_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_fmake0_env$fwork(env, fwork)
}
function
XATS000_strn_fmake1_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_fmake1_env$fwork(env, fwork)
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strn000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 12 Aug 2024 09:36:59 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a0rf_lget
  ( A0 )
{
  return A0[0]
}
function
XATS2JS_a0rf_lset
  (A0, x1)
{
  A0[0] = x1; return
}
//
function
XATS2JS_a0rf_make_1val
  ( x0 )
{
  return [x0] // HX: singleton
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1rf_lget$at
  (A0, i0)
{
  return A0[i0]
}
function
XATS2JS_a1rf_lset$at
  (A0, i0, x1)
{
  A0[i0] = x1; return
}
//
function
XATS2JS_a1rf_make_ncpy
  (n0, x0)
{
  var i0 = 0
  var A0 = new Array(n0);
  while (i0 < n0) {
    A0[i0] = x0; i0 = i0 + 1
  }
  return A0 // HX: A0=[x0, x0, ..., x0]
}
//
function
XATS2JS_a1rf_make_nfun
  (n0, fopr)
{
  var i0 = 0
  var A0 = new Array(n0);
  while (i0 < n0) {
    A0[i0] = fopr(i0); i0 = i0 + 1
  }
  return A0 // HX: A0 = [fopr(0),...,fopr(n-1)]
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_axrf000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Thu 15 Aug 2024 01:42:20 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_length
  ( A0 )
{
  return A0.length
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_lget$at
  (A0, i0)
{
  return A0[i0]
}
function
XATS2JS_a1sz_lset$at
  (A0, i0, x1)
{
  A0[i0] = x1; return
}
//
////////////////////////////////////////////////////////////////////////.
/*
HX-2024-09-06:
Fri 06 Sep 2024 04:18:38 PM EDT
*/
//
function
XATS2JS_a1sz_make_none
  ( n0 )
{
  var A0 = new Array(n0)
  return A0 // HX: A0 = [?, ..., ?]
}
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2024-08-15:
Thu 15 Aug 2024 01:50:45 PM EDT
*/
//
function
XATS2JS_a1sz_make_ncpy
  (n0, x0)
{
  var i0 = 0
  var A0 = new Array(n0)
  while (i0 < n0) {
    A0[i0] = x0; i0 = i0 + 1
  }
  return A0 // HX: A0 = [x0, ..., x0]
}
//
function
XATS2JS_a1sz_make_nfun
  (n0, fopr)
{
  var i0 = 0
  var A0 = new Array(n0)
  while (i0 < n0) {
    A0[i0] = fopr(i0); i0 = i0 + 1
  }
  return A0 // HX: A0 = [fopr(0),...,fopr(n-1)]
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_fmake_fwork
  (fwork)
{
  var A0 = []
  fwork((x0) => {A0.push(x0);return}); return A0
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_axsz000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// I1Dinclude(LCSRCsome1(Game-of-24.dats)@(41(line=3,offs=1)--82(line=4,offs=33)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(244(line=17,offs=1)--291(line=19,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(292(line=20,offs=1)--339(line=22,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(340(line=23,offs=1)--387(line=25,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(414(line=29,offs=1)--461(line=31,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gdbg000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gdbg000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(488(line=35,offs=1)--541(line=37,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gbas000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(542(line=38,offs=1)--595(line=40,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gbas001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(767(line=51,offs=1)--807(line=51,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gxyz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gxyz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(854(line=56,offs=1)--894(line=56,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/unsfx00.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1035(line=64,offs=1)--1075(line=64,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gnum000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gnum000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1076(line=65,offs=1)--1116(line=65,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gord000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gord000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1117(line=66,offs=1)--1157(line=66,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gfun000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gfun000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1158(line=67,offs=1)--1198(line=67,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1199(line=68,offs=1)--1239(line=68,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1240(line=69,offs=1)--1280(line=69,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1281(line=70,offs=1)--1321(line=70,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1322(line=71,offs=1)--1362(line=71,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasz001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasz001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1363(line=72,offs=1)--1403(line=72,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gcls000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gcls000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1404(line=73,offs=1)--1444(line=73,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1445(line=74,offs=1)--1485(line=74,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gsyn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1506(line=76,offs=1)--1546(line=76,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/bool000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1547(line=77,offs=1)--1587(line=77,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/char000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1588(line=78,offs=1)--1628(line=78,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1629(line=79,offs=1)--1669(line=79,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gint001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1670(line=80,offs=1)--1710(line=80,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gflt000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1731(line=82,offs=1)--1771(line=82,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1772(line=83,offs=1)--1812(line=83,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1833(line=85,offs=1)--1873(line=85,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1874(line=86,offs=1)--1914(line=86,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axrf001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1915(line=87,offs=1)--1955(line=87,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1956(line=88,offs=1)--1996(line=88,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axsz001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1997(line=89,offs=1)--2037(line=89,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2038(line=90,offs=1)--2078(line=90,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2079(line=91,offs=1)--2119(line=91,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2120(line=92,offs=1)--2160(line=92,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2161(line=93,offs=1)--2201(line=93,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2202(line=94,offs=1)--2242(line=94,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2243(line=95,offs=1)--2283(line=95,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/optn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2284(line=96,offs=1)--2324(line=96,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/optn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2325(line=97,offs=1)--2365(line=97,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strm000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2366(line=98,offs=1)--2406(line=98,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strx000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2450(line=102,offs=1)--2495(line=102,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gbas000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2499(line=104,offs=1)--2544(line=104,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/bool000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2545(line=105,offs=1)--2590(line=105,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/char000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2594(line=107,offs=1)--2639(line=107,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gint000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2640(line=108,offs=1)--2685(line=108,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gflt000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2689(line=110,offs=1)--2734(line=110,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/strn000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2738(line=112,offs=1)--2783(line=112,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axrf000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2784(line=113,offs=1)--2829(line=113,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axsz000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2873(line=117,offs=1)--2919(line=117,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gnum000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gnum000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2920(line=118,offs=1)--2966(line=118,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gord000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gord000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2967(line=119,offs=1)--3013(line=119,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gfun000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gfun000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3014(line=120,offs=1)--3060(line=120,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gcls000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gcls000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3061(line=121,offs=1)--3107(line=121,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3108(line=122,offs=1)--3154(line=122,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3155(line=123,offs=1)--3201(line=123,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq002_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq002_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3202(line=124,offs=1)--3248(line=124,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gasz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3249(line=125,offs=1)--3295(line=125,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasz001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gasz001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3296(line=126,offs=1)--3342(line=126,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gsyn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gsyn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3363(line=128,offs=1)--3409(line=128,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3433(line=131,offs=1)--3479(line=131,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axrf000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/axrf000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3480(line=132,offs=1)--3526(line=132,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axsz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/axsz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3527(line=133,offs=1)--3573(line=133,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/tupl000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/tupl000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3577(line=135,offs=1)--3623(line=135,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3624(line=136,offs=1)--3670(line=136,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/list001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3671(line=137,offs=1)--3717(line=137,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/optn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3718(line=138,offs=1)--3764(line=138,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/optn001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3768(line=140,offs=1)--3814(line=140,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3815(line=141,offs=1)--3861(line=141,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3862(line=142,offs=1)--3908(line=142,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm002_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm002_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3909(line=143,offs=1)--3955(line=143,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strx000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3956(line=144,offs=1)--4002(line=144,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4173(line=155,offs=1)--4219(line=155,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gxyz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gxyz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4543(line=163,offs=1)--4543(line=163,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4543(line=163,offs=1)--4543(line=163,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(Game-of-24.dats)@(83(line=5,offs=1)--127(line=6,offs=36)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(197(line=15,offs=1)--249(line=16,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/xtop000.dats";35));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(296(line=21,offs=1)--344(line=22,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gbas000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(345(line=23,offs=1)--393(line=24,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gdbg000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gdbg000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(440(line=29,offs=1)--488(line=30,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/bool000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(489(line=31,offs=1)--537(line=32,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/char000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(538(line=33,offs=1)--586(line=34,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gint000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(587(line=35,offs=1)--635(line=36,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gflt000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(682(line=41,offs=1)--730(line=42,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strn000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(777(line=47,offs=1)--825(line=48,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axrf000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(826(line=49,offs=1)--874(line=50,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axsz000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1063(line=59,offs=1)--1063(line=59,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1063(line=59,offs=1)--1063(line=59,offs=1));D3Cnone0()))
// LCSRCsome1(Game-of-24.dats)@(1046(line=30,offs=1)--1067(line=31,offs=13))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rat;S2Ecst(double)))))
// LCSRCsome1(Game-of-24.dats)@(1068(line=32,offs=1)--1092(line=33,offs=16))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Cabstype(rat_type;A2TDFeqeq(S2Eimpr(LCSRCsome1(Game-of-24.dats)@(1089(line=33,offs=13)--1092(line=33,offs=16));S2Ecst(rat)))))))
// LCSRCsome1(Game-of-24.dats)@(1096(line=35,offs=1)--1119(line=35,offs=24))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(rat;S2Ecst(rat_type)))))
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1163(line=39,offs=1)--1213(line=42,offs=26)))
// I1Dimplmnt0(DIMPLone2(g_ptype(190);$list(@(vw[711],T2Pcst(rat))))):timp
// LCSRCsome1(Game-of-24.dats)@(1237(line=45,offs=1)--1264(line=45,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();<;D2PTMsome(100;D2ITMcst($list(g_lt(218))))))))
// LCSRCsome1(Game-of-24.dats)@(1265(line=46,offs=1)--1292(line=46,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();>;D2PTMsome(100;D2ITMcst($list(g_gt(219))))))))
// LCSRCsome1(Game-of-24.dats)@(1293(line=47,offs=1)--1320(line=47,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();=;D2PTMsome(100;D2ITMcst($list(g_eq(220))))))))
// LCSRCsome1(Game-of-24.dats)@(1324(line=49,offs=1)--1352(line=49,offs=29))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();+;D2PTMsome(100;D2ITMcst($list(g_add(209))))))))
// LCSRCsome1(Game-of-24.dats)@(1353(line=50,offs=1)--1381(line=50,offs=29))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();-;D2PTMsome(100;D2ITMcst($list(g_sub(210))))))))
// LCSRCsome1(Game-of-24.dats)@(1382(line=51,offs=1)--1410(line=51,offs=29))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();*;D2PTMsome(100;D2ITMcst($list(g_mul(211))))))))
// LCSRCsome1(Game-of-24.dats)@(1411(line=52,offs=1)--1439(line=52,offs=29))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();/;D2PTMsome(100;D2ITMcst($list(g_div(212))))))))
// LCSRCsome1(Game-of-24.dats)@(1443(line=54,offs=1)--1473(line=54,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();abs;D2PTMsome(100;D2ITMcst($list(g_abs(206))))))))
// LCSRCsome1(Game-of-24.dats)@(1474(line=55,offs=1)--1504(line=55,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();neg;D2PTMsome(100;D2ITMcst($list(g_neg(205))))))))
// I1Dlocal0(LCSRCsome1(Game-of-24.dats)@(1551(line=60,offs=1)--2091(line=93,offs=7)))
// LCSRCsome1(Game-of-24.dats)@(1560(line=62,offs=1)--1584(line=63,offs=16))
// I1Dnone1(I0Dnone1(LCSRCsome1(Game-of-24.dats)@(1560(line=62,offs=1)--1584(line=63,offs=16));D3Cabsimpl(T_ABSIMPL();SIMPLone1(rat_type);S2Ecst(dflt))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(1599(line=67,offs=1)--1637(line=69,offs=21)))
// I1FUNDCL
function rat_mkof_dflt_1602(arg1)
{ // fun
  let jsxtnm2 = arg1
  // I1CMP:start
  // I1CMP:return:jsxtnm2
  return jsxtnm2
} // endfun(rat_mkof_dflt_1602)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(1638(line=70,offs=1)--1703(line=73,offs=30)))
// I1FUNDCL
function rat_mkof_sint_1641(arg1)
{ // fun
  let jsxtnm3 = arg1
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(1688(line=73,offs=15)--1692(line=73,offs=19))
  // I0Etapq(I0Ecst(g_si(201));$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list())))))))
  // T1IMPallx(g_si(201);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1430(line=40,offs=1)--1557(line=50,offs=31)))
  // T1IMPallx(g_si(201)<$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list()))))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(201);$list(@(a[719],T2Pcst(dflt)))))))
  let jsxtnm8 = function (arg1) { // timp: g_si(201)
    let jsxtnm4 = arg1
    // I1CMP:start
    let jsxtnm7 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1497(line=47,offs=1)--1555(line=50,offs=29)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1505(line=48,offs=1)--1555(line=50,offs=29))
      // I1FUNDCL
      // XATS2JS_si2dflt_1510
        // FJARGdarg($list(I1BNDcons(I1TNM(5);I0Pvar(i1(4073));$list(@(i1(4073),I1Vtnm(I1TNM(5)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_si2dflt);G1Nlist($list())) // I1CMP:return
      let jsxtnm6 = XATSCAST("XATS2JS_si2dflt", [jsxtnm4])
      jsxtnm7 = jsxtnm6
    } // endlet
    // I1CMP:return:jsxtnm7
    return jsxtnm7
  } // endtimp(g_si(201))
  let jsxtnm9 = XATSDAPP(jsxtnm8(jsxtnm3))
  let jsxtnm10 = XATSDAPP(rat_mkof_dflt_1602(jsxtnm9))
  // I1CMP:return:jsxtnm10
  return jsxtnm10
} // endfun(rat_mkof_sint_1641)
// LCSRCsome1(Game-of-24.dats)@(1704(line=74,offs=1)--1735(line=74,offs=32))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();rat;D2PTMsome(0;D2ITMvar(rat_mkof_dflt(4242)))))))
// LCSRCsome1(Game-of-24.dats)@(1736(line=75,offs=1)--1767(line=75,offs=32))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();rat;D2PTMsome(0;D2ITMvar(rat_mkof_sint(4244)))))))
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1771(line=77,offs=1)--1802(line=78,offs=23)))
// I1Dimplmnt0(DIMPLone2(g_si(201);$list(@(a[719],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1806(line=80,offs=1)--1838(line=80,offs=33)))
// I1Dimplmnt0(DIMPLone2(g_abs(206);$list(@(x0[724],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1842(line=82,offs=1)--1879(line=82,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_cmp(224);$list(@(a[742],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1883(line=84,offs=1)--1920(line=84,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_add(209);$list(@(x0[727],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1921(line=85,offs=1)--1958(line=85,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_sub(210);$list(@(x0[728],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1959(line=86,offs=1)--1996(line=86,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_mul(211);$list(@(x0[729],T2Pcst(rat))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(1997(line=87,offs=1)--2034(line=87,offs=38)))
// I1Dimplmnt0(DIMPLone2(g_div(212);$list(@(x0[730],T2Pcst(rat))))):timp
// LCSRCsome1(Game-of-24.dats)@(2173(line=98,offs=1)--2291(line=101,offs=44))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Cdatatype(D1Cdatatype(T_DATATYPE(0);$list(D1TYPnode(T_IDALP(expr);$list();$optn();$list(D1TCNnode($list();T_IDALP(Int);$list();$optn(S1El1st($list(S1Eid0(int))))),D1TCNnode($list();T_IDALP(Add);$list();$optn(S1El1st($list(S1Eid0(expr),S1Eid0(expr))))),D1TCNnode($list();T_IDALP(Sub);$list();$optn(S1El1st($list(S1Eid0(expr),S1Eid0(expr))))),D1TCNnode($list();T_IDALP(Mul);$list();$optn(S1El1st($list(S1Eid0(expr),S1Eid0(expr))))),D1TCNnode($list();T_IDALP(Div);$list();$optn(S1El1st($list(S1Eid0(expr),S1Eid0(expr))))))));WD1CSnone());$list(expr)))))
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(2338(line=106,offs=1)--2729(line=135,offs=2)))
// I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr))))):timp
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(2977(line=149,offs=1)--3246(line=162,offs=33)))
// I1FUNDCL
function expr_eval_2980(arg1)
{ // fun
  let jsxtnm27 = arg1
  // I1CMP:start
  let jsxtnm84 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(28);I0Pdapp(I0Pcon(Int(31));$list(I0Pvar(i0(4260))));$list(@(i0(4260),I1Vp1cn(I0Pcon(Int(31));I1Vtnm(I1TNM(28));0)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Int",0))) { // gpt
      let jsxtnm28 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3036(line=154,offs=14)--3040(line=154,offs=18))
      // I0Etapq(I0Ecst(g_si(201));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_si(201);LCSRCsome1(Game-of-24.dats)@(1771(line=77,offs=1)--1802(line=78,offs=23)))
      // T1IMPallx(g_si(201)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(201);$list(@(a[719],T2Pcst(rat)))))))
      let jsxtnm34
      // LCSRCsome1(Game-of-24.dats)@(1792(line=78,offs=13)--1796(line=78,offs=17))
      // I0Etapq(I0Ecst(g_si(201));$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list())))))))
      // T1IMPallx(g_si(201);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1430(line=40,offs=1)--1557(line=50,offs=31)))
      // T1IMPallx(g_si(201)<$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list()))))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(201);$list(@(a[719],T2Pcst(dflt)))))))
      let jsxtnm33 = function (arg1) { // timp: g_si(201)
        let jsxtnm29 = arg1
        // I1CMP:start
        let jsxtnm32 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1497(line=47,offs=1)--1555(line=50,offs=29)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1505(line=48,offs=1)--1555(line=50,offs=29))
          // I1FUNDCL
          // XATS2JS_si2dflt_1510
            // FJARGdarg($list(I1BNDcons(I1TNM(30);I0Pvar(i1(4073));$list(@(i1(4073),I1Vtnm(I1TNM(30)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_si2dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm31 = XATSCAST("XATS2JS_si2dflt", [jsxtnm29])
          jsxtnm32 = jsxtnm31
        } // endlet
        // I1CMP:return:jsxtnm32
        return jsxtnm32
      } // endtimp(g_si(201))
      jsxtnm34 = jsxtnm33
      let jsxtnm35 = XATSDAPP(jsxtnm34(XATSP1CN("Int", jsxtnm28[0+1])))
      jsxtnm84 = jsxtnm35
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(36);I0Pdapp(I0Pcon(Add(32));$list(I0Pvar(x1(4261)),I0Pvar(x2(4262))));$list(@(x1(4261),I1Vp1cn(I0Pcon(Add(32));I1Vtnm(I1TNM(36));0)),@(x2(4262),I1Vp1cn(I0Pcon(Add(32));I1Vtnm(I1TNM(36));1)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Add",1))) { // gpt
      let jsxtnm36 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3083(line=156,offs=17)--3084(line=156,offs=18))
      // I0Etapq(I0Ecst(g_add(209));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_add(209);LCSRCsome1(Game-of-24.dats)@(1883(line=84,offs=1)--1920(line=84,offs=38)))
      // T1IMPallx(g_add(209)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_add(209);$list(@(x0[727],T2Pcst(rat)))))))
      let jsxtnm44
      // LCSRCsome1(Game-of-24.dats)@(1905(line=84,offs=23)--1918(line=84,offs=36))
      // I0Etapq(I0Ecst(dflt_add$dflt(921));$list(T2JAG($list())))
      // T1IMPallx(dflt_add$dflt(921);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3554(line=222,offs=1)--3718(line=234,offs=2)))
      // T1IMPallx(dflt_add$dflt(921)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_add$dflt(921);$list()))))
      let jsxtnm43 = function (arg1, arg2) { // timp: dflt_add$dflt(921)
        let jsxtnm37 = arg1
        let jsxtnm38 = arg2
        // I1CMP:start
        let jsxtnm42 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3644(line=230,offs=1)--3716(line=233,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3652(line=231,offs=1)--3716(line=233,offs=39))
          // I1FUNDCL
          // XATS2JS_dflt_add$dflt_3655
            // FJARGdarg($list(I1BNDcons(I1TNM(39);I0Pvar(f1(4124));$list(@(f1(4124),I1Vtnm(I1TNM(39))))),I1BNDcons(I1TNM(40);I0Pvar(f2(4125));$list(@(f2(4125),I1Vtnm(I1TNM(40)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_add$dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm41 = XATSDAPP(XATS2JS_dflt_add$dflt(jsxtnm37, jsxtnm38))
          jsxtnm42 = jsxtnm41
        } // endlet
        // I1CMP:return:jsxtnm42
        return jsxtnm42
      } // endtimp(dflt_add$dflt(921))
      jsxtnm44 = jsxtnm43
      let jsxtnm45 = XATSDAPP(expr_eval_2980(XATSP1CN("Add", jsxtnm36[0+1])))
      let jsxtnm46 = XATSDAPP(expr_eval_2980(XATSP1CN("Add", jsxtnm36[1+1])))
      let jsxtnm47 = XATSDAPP(jsxtnm44(jsxtnm45, jsxtnm46))
      jsxtnm84 = jsxtnm47
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(48);I0Pdapp(I0Pcon(Sub(33));$list(I0Pvar(x1(4263)),I0Pvar(x2(4264))));$list(@(x1(4263),I1Vp1cn(I0Pcon(Sub(33));I1Vtnm(I1TNM(48));0)),@(x2(4264),I1Vp1cn(I0Pcon(Sub(33));I1Vtnm(I1TNM(48));1)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Sub",2))) { // gpt
      let jsxtnm48 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3132(line=158,offs=17)--3133(line=158,offs=18))
      // I0Etapq(I0Ecst(g_sub(210));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_sub(210);LCSRCsome1(Game-of-24.dats)@(1921(line=85,offs=1)--1958(line=85,offs=38)))
      // T1IMPallx(g_sub(210)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_sub(210);$list(@(x0[728],T2Pcst(rat)))))))
      let jsxtnm56
      // LCSRCsome1(Game-of-24.dats)@(1943(line=85,offs=23)--1956(line=85,offs=36))
      // I0Etapq(I0Ecst(dflt_sub$dflt(922));$list(T2JAG($list())))
      // T1IMPallx(dflt_sub$dflt(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3722(line=236,offs=1)--3886(line=248,offs=2)))
      // T1IMPallx(dflt_sub$dflt(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_sub$dflt(922);$list()))))
      let jsxtnm55 = function (arg1, arg2) { // timp: dflt_sub$dflt(922)
        let jsxtnm49 = arg1
        let jsxtnm50 = arg2
        // I1CMP:start
        let jsxtnm54 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3812(line=244,offs=1)--3884(line=247,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3820(line=245,offs=1)--3884(line=247,offs=39))
          // I1FUNDCL
          // XATS2JS_dflt_sub$dflt_3823
            // FJARGdarg($list(I1BNDcons(I1TNM(51);I0Pvar(f1(4129));$list(@(f1(4129),I1Vtnm(I1TNM(51))))),I1BNDcons(I1TNM(52);I0Pvar(f2(4130));$list(@(f2(4130),I1Vtnm(I1TNM(52)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_sub$dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm53 = XATSDAPP(XATS2JS_dflt_sub$dflt(jsxtnm49, jsxtnm50))
          jsxtnm54 = jsxtnm53
        } // endlet
        // I1CMP:return:jsxtnm54
        return jsxtnm54
      } // endtimp(dflt_sub$dflt(922))
      jsxtnm56 = jsxtnm55
      let jsxtnm57 = XATSDAPP(expr_eval_2980(XATSP1CN("Sub", jsxtnm48[0+1])))
      let jsxtnm58 = XATSDAPP(expr_eval_2980(XATSP1CN("Sub", jsxtnm48[1+1])))
      let jsxtnm59 = XATSDAPP(jsxtnm56(jsxtnm57, jsxtnm58))
      jsxtnm84 = jsxtnm59
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(60);I0Pdapp(I0Pcon(Mul(34));$list(I0Pvar(x1(4265)),I0Pvar(x2(4266))));$list(@(x1(4265),I1Vp1cn(I0Pcon(Mul(34));I1Vtnm(I1TNM(60));0)),@(x2(4266),I1Vp1cn(I0Pcon(Mul(34));I1Vtnm(I1TNM(60));1)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Mul",3))) { // gpt
      let jsxtnm60 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3181(line=160,offs=17)--3182(line=160,offs=18))
      // I0Etapq(I0Ecst(g_mul(211));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_mul(211);LCSRCsome1(Game-of-24.dats)@(1959(line=86,offs=1)--1996(line=86,offs=38)))
      // T1IMPallx(g_mul(211)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_mul(211);$list(@(x0[729],T2Pcst(rat)))))))
      let jsxtnm68
      // LCSRCsome1(Game-of-24.dats)@(1981(line=86,offs=23)--1994(line=86,offs=36))
      // I0Etapq(I0Ecst(dflt_mul$dflt(923));$list(T2JAG($list())))
      // T1IMPallx(dflt_mul$dflt(923);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3890(line=250,offs=1)--4054(line=262,offs=2)))
      // T1IMPallx(dflt_mul$dflt(923)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_mul$dflt(923);$list()))))
      let jsxtnm67 = function (arg1, arg2) { // timp: dflt_mul$dflt(923)
        let jsxtnm61 = arg1
        let jsxtnm62 = arg2
        // I1CMP:start
        let jsxtnm66 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3980(line=258,offs=1)--4052(line=261,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3988(line=259,offs=1)--4052(line=261,offs=39))
          // I1FUNDCL
          // XATS2JS_dflt_mul$dflt_3991
            // FJARGdarg($list(I1BNDcons(I1TNM(63);I0Pvar(f1(4134));$list(@(f1(4134),I1Vtnm(I1TNM(63))))),I1BNDcons(I1TNM(64);I0Pvar(f2(4135));$list(@(f2(4135),I1Vtnm(I1TNM(64)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_mul$dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm65 = XATSDAPP(XATS2JS_dflt_mul$dflt(jsxtnm61, jsxtnm62))
          jsxtnm66 = jsxtnm65
        } // endlet
        // I1CMP:return:jsxtnm66
        return jsxtnm66
      } // endtimp(dflt_mul$dflt(923))
      jsxtnm68 = jsxtnm67
      let jsxtnm69 = XATSDAPP(expr_eval_2980(XATSP1CN("Mul", jsxtnm60[0+1])))
      let jsxtnm70 = XATSDAPP(expr_eval_2980(XATSP1CN("Mul", jsxtnm60[1+1])))
      let jsxtnm71 = XATSDAPP(jsxtnm68(jsxtnm69, jsxtnm70))
      jsxtnm84 = jsxtnm71
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(72);I0Pdapp(I0Pcon(Div(35));$list(I0Pvar(x1(4267)),I0Pvar(x2(4268))));$list(@(x1(4267),I1Vp1cn(I0Pcon(Div(35));I1Vtnm(I1TNM(72));0)),@(x2(4268),I1Vp1cn(I0Pcon(Div(35));I1Vtnm(I1TNM(72));1)))))
    if (XATS000_ctgeq(jsxtnm27, XATSCTAG("Div",4))) { // gpt
      let jsxtnm72 = jsxtnm27
      // LCSRCsome1(Game-of-24.dats)@(3230(line=162,offs=17)--3231(line=162,offs=18))
      // I0Etapq(I0Ecst(g_div(212));$list(T2JAG($list(T2Pcst(rat_type)))))
      // T1IMPallx(g_div(212);LCSRCsome1(Game-of-24.dats)@(1997(line=87,offs=1)--2034(line=87,offs=38)))
      // T1IMPallx(g_div(212)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_div(212);$list(@(x0[730],T2Pcst(rat)))))))
      let jsxtnm80
      // LCSRCsome1(Game-of-24.dats)@(2019(line=87,offs=23)--2032(line=87,offs=36))
      // I0Etapq(I0Ecst(dflt_div$dflt(924));$list(T2JAG($list())))
      // T1IMPallx(dflt_div$dflt(924);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(4058(line=264,offs=1)--4222(line=276,offs=2)))
      // T1IMPallx(dflt_div$dflt(924)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_div$dflt(924);$list()))))
      let jsxtnm79 = function (arg1, arg2) { // timp: dflt_div$dflt(924)
        let jsxtnm73 = arg1
        let jsxtnm74 = arg2
        // I1CMP:start
        let jsxtnm78 // let
        { // let
          // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(4148(line=272,offs=1)--4220(line=275,offs=39)))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(4156(line=273,offs=1)--4220(line=275,offs=39))
          // I1FUNDCL
          // XATS2JS_dflt_div$dflt_4159
            // FJARGdarg($list(I1BNDcons(I1TNM(75);I0Pvar(f1(4139));$list(@(f1(4139),I1Vtnm(I1TNM(75))))),I1BNDcons(I1TNM(76);I0Pvar(f2(4140));$list(@(f2(4140),I1Vtnm(I1TNM(76)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_div$dflt);G1Nlist($list())) // I1CMP:return
          let jsxtnm77 = XATSDAPP(XATS2JS_dflt_div$dflt(jsxtnm73, jsxtnm74))
          jsxtnm78 = jsxtnm77
        } // endlet
        // I1CMP:return:jsxtnm78
        return jsxtnm78
      } // endtimp(dflt_div$dflt(924))
      jsxtnm80 = jsxtnm79
      let jsxtnm81 = XATSDAPP(expr_eval_2980(XATSP1CN("Div", jsxtnm72[0+1])))
      let jsxtnm82 = XATSDAPP(expr_eval_2980(XATSP1CN("Div", jsxtnm72[1+1])))
      let jsxtnm83 = XATSDAPP(jsxtnm80(jsxtnm81, jsxtnm82))
      jsxtnm84 = jsxtnm83
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm84
  return jsxtnm84
} // endfun(expr_eval_2980)
// LCSRCsome1(Game-of-24.dats)@(3250(line=164,offs=1)--3286(line=164,offs=37))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();eval;D2PTMsome(1000;D2ITMvar(expr_eval(4258)))))))
// I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(3470(line=176,offs=1)--3493(line=177,offs=20)))
// I1VALDCL
let jsxtnm86
let jsxtnm85 = XATSDAPP(rat_mkof_dflt_1602(XATSFLT1(1E-6)))
jsxtnm86 = jsxtnm85
XATS000_patck(true)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(3497(line=179,offs=1)--3559(line=182,offs=29)))
// I1FUNDCL
function expr_iseqz_3500(arg1)
{ // fun
  let jsxtnm87 = arg1
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(3550(line=182,offs=20)--3551(line=182,offs=21))
  // I0Etapq(I0Ecst(g_lt(218));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_lt(218);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1521(line=50,offs=1)--1579(line=54,offs=23)))
  // T1IMPallx(g_lt(218)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list(@(x0[5002],T2Pcst(rat_type)));I1Dimplmnt0(DIMPLone2(g_lt(218);$list(@(a[736],T2Pvar(x0[5002])))))))
  let jsxtnm107 = function (arg1, arg2) { // timp: g_lt(218)
    let jsxtnm88 = arg1
    let jsxtnm89 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1575(line=54,offs=19)--1576(line=54,offs=20))
    // I0Etapq(I0Ecst(sint_lt$sint(850));$list(T2JAG($list())))
    // T1IMPallx(sint_lt$sint(850);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1612(line=56,offs=1)--1773(line=68,offs=2)))
    // T1IMPallx(sint_lt$sint(850)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lt$sint(850);$list()))))
    let jsxtnm96 = function (arg1, arg2) { // timp: sint_lt$sint(850)
      let jsxtnm90 = arg1
      let jsxtnm91 = arg2
      // I1CMP:start
      let jsxtnm95 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1700(line=64,offs=1)--1771(line=67,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1708(line=65,offs=1)--1771(line=67,offs=39))
        // I1FUNDCL
        // XATS2JS_sint_lt$sint_1711
          // FJARGdarg($list(I1BNDcons(I1TNM(92);I0Pvar(i1(4016));$list(@(i1(4016),I1Vtnm(I1TNM(92))))),I1BNDcons(I1TNM(93);I0Pvar(i2(4017));$list(@(i2(4017),I1Vtnm(I1TNM(93)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lt$sint);G1Nlist($list())) // I1CMP:return
        let jsxtnm94 = XATSDAPP(XATS2JS_sint_lt$sint(jsxtnm90, jsxtnm91))
        jsxtnm95 = jsxtnm94
      } // endlet
      // I1CMP:return:jsxtnm95
      return jsxtnm95
    } // endtimp(sint_lt$sint(850))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1557(line=54,offs=1)--1562(line=54,offs=6))
    // I0Etapq(I0Ecst(g_cmp(224));$list(T2JAG($list(T2Pvar(x0[5002])))))
    // T1IMPallx(g_cmp(224);LCSRCsome1(Game-of-24.dats)@(1842(line=82,offs=1)--1879(line=82,offs=38)))
    // T1IMPallx(g_cmp(224)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_cmp(224);$list(@(a[742],T2Pcst(rat)))))))
    let jsxtnm104
    // LCSRCsome1(Game-of-24.dats)@(1864(line=82,offs=23)--1877(line=82,offs=36))
    // I0Etapq(I0Ecst(dflt_cmp$dflt(918));$list(T2JAG($list())))
    // T1IMPallx(dflt_cmp$dflt(918);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3343(line=205,offs=1)--3507(line=217,offs=2)))
    // T1IMPallx(dflt_cmp$dflt(918)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_cmp$dflt(918);$list()))))
    let jsxtnm103 = function (arg1, arg2) { // timp: dflt_cmp$dflt(918)
      let jsxtnm97 = arg1
      let jsxtnm98 = arg2
      // I1CMP:start
      let jsxtnm102 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3433(line=213,offs=1)--3505(line=216,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3441(line=214,offs=1)--3505(line=216,offs=39))
        // I1FUNDCL
        // XATS2JS_dflt_cmp$dflt_3444
          // FJARGdarg($list(I1BNDcons(I1TNM(99);I0Pvar(f1(4119));$list(@(f1(4119),I1Vtnm(I1TNM(99))))),I1BNDcons(I1TNM(100);I0Pvar(f2(4120));$list(@(f2(4120),I1Vtnm(I1TNM(100)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_cmp$dflt);G1Nlist($list())) // I1CMP:return
        let jsxtnm101 = XATSDAPP(XATS2JS_dflt_cmp$dflt(jsxtnm97, jsxtnm98))
        jsxtnm102 = jsxtnm101
      } // endlet
      // I1CMP:return:jsxtnm102
      return jsxtnm102
    } // endtimp(dflt_cmp$dflt(918))
    jsxtnm104 = jsxtnm103
    let jsxtnm105 = XATSDAPP(jsxtnm104(jsxtnm88, jsxtnm89))
    let jsxtnm106 = XATSDAPP(jsxtnm96(jsxtnm105, XATSINT1(0)))
    // I1CMP:return:jsxtnm106
    return jsxtnm106
  } // endtimp(g_lt(218))
  // LCSRCsome1(Game-of-24.dats)@(3531(line=182,offs=1)--3534(line=182,offs=4))
  // I0Etapq(I0Ecst(g_abs(206));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_abs(206);LCSRCsome1(Game-of-24.dats)@(1806(line=80,offs=1)--1838(line=80,offs=33)))
  // T1IMPallx(g_abs(206)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_abs(206);$list(@(x0[724],T2Pcst(rat)))))))
  let jsxtnm113
  // LCSRCsome1(Game-of-24.dats)@(1828(line=80,offs=23)--1836(line=80,offs=31))
  // I0Etapq(I0Ecst(dflt_abs(894));$list(T2JAG($list())))
  // T1IMPallx(dflt_abs(894);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1766(line=70,offs=1)--1901(line=81,offs=31)))
  // T1IMPallx(dflt_abs(894)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_abs(894);$list()))))
  let jsxtnm112 = function (arg1) { // timp: dflt_abs(894)
    let jsxtnm108 = arg1
    // I1CMP:start
    let jsxtnm111 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1842(line=78,offs=1)--1899(line=81,offs=29)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1850(line=79,offs=1)--1899(line=81,offs=29))
      // I1FUNDCL
      // XATS2JS_dflt_abs_1853
        // FJARGdarg($list(I1BNDcons(I1TNM(109);I0Pvar(f1(4079));$list(@(f1(4079),I1Vtnm(I1TNM(109)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_abs);G1Nlist($list())) // I1CMP:return
      let jsxtnm110 = XATSDAPP(XATS2JS_dflt_abs(jsxtnm108))
      jsxtnm111 = jsxtnm110
    } // endlet
    // I1CMP:return:jsxtnm111
    return jsxtnm111
  } // endtimp(dflt_abs(894))
  jsxtnm113 = jsxtnm112
  let jsxtnm114 = XATSDAPP(expr_eval_2980(jsxtnm87))
  let jsxtnm115 = XATSDAPP(jsxtnm113(jsxtnm114))
  let jsxtnm116 = XATSDAPP(jsxtnm107(jsxtnm115, jsxtnm86))
  // I1CMP:return:jsxtnm116
  return jsxtnm116
} // endfun(expr_iseqz_3500)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(3563(line=184,offs=1)--3636(line=188,offs=34)))
// I1FUNDCL
function expr_iseq24_3566(arg1)
{ // fun
  let jsxtnm117 = arg1
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(3627(line=188,offs=25)--3628(line=188,offs=26))
  // I0Etapq(I0Ecst(g_lt(218));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_lt(218);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1521(line=50,offs=1)--1579(line=54,offs=23)))
  // T1IMPallx(g_lt(218)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list(@(x0[5002],T2Pcst(rat_type)));I1Dimplmnt0(DIMPLone2(g_lt(218);$list(@(a[736],T2Pvar(x0[5002])))))))
  let jsxtnm137 = function (arg1, arg2) { // timp: g_lt(218)
    let jsxtnm118 = arg1
    let jsxtnm119 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1575(line=54,offs=19)--1576(line=54,offs=20))
    // I0Etapq(I0Ecst(sint_lt$sint(850));$list(T2JAG($list())))
    // T1IMPallx(sint_lt$sint(850);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1612(line=56,offs=1)--1773(line=68,offs=2)))
    // T1IMPallx(sint_lt$sint(850)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lt$sint(850);$list()))))
    let jsxtnm126 = function (arg1, arg2) { // timp: sint_lt$sint(850)
      let jsxtnm120 = arg1
      let jsxtnm121 = arg2
      // I1CMP:start
      let jsxtnm125 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1700(line=64,offs=1)--1771(line=67,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1708(line=65,offs=1)--1771(line=67,offs=39))
        // I1FUNDCL
        // XATS2JS_sint_lt$sint_1711
          // FJARGdarg($list(I1BNDcons(I1TNM(122);I0Pvar(i1(4016));$list(@(i1(4016),I1Vtnm(I1TNM(122))))),I1BNDcons(I1TNM(123);I0Pvar(i2(4017));$list(@(i2(4017),I1Vtnm(I1TNM(123)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lt$sint);G1Nlist($list())) // I1CMP:return
        let jsxtnm124 = XATSDAPP(XATS2JS_sint_lt$sint(jsxtnm120, jsxtnm121))
        jsxtnm125 = jsxtnm124
      } // endlet
      // I1CMP:return:jsxtnm125
      return jsxtnm125
    } // endtimp(sint_lt$sint(850))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gord000.dats)@(1557(line=54,offs=1)--1562(line=54,offs=6))
    // I0Etapq(I0Ecst(g_cmp(224));$list(T2JAG($list(T2Pvar(x0[5002])))))
    // T1IMPallx(g_cmp(224);LCSRCsome1(Game-of-24.dats)@(1842(line=82,offs=1)--1879(line=82,offs=38)))
    // T1IMPallx(g_cmp(224)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_cmp(224);$list(@(a[742],T2Pcst(rat)))))))
    let jsxtnm134
    // LCSRCsome1(Game-of-24.dats)@(1864(line=82,offs=23)--1877(line=82,offs=36))
    // I0Etapq(I0Ecst(dflt_cmp$dflt(918));$list(T2JAG($list())))
    // T1IMPallx(dflt_cmp$dflt(918);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3343(line=205,offs=1)--3507(line=217,offs=2)))
    // T1IMPallx(dflt_cmp$dflt(918)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_cmp$dflt(918);$list()))))
    let jsxtnm133 = function (arg1, arg2) { // timp: dflt_cmp$dflt(918)
      let jsxtnm127 = arg1
      let jsxtnm128 = arg2
      // I1CMP:start
      let jsxtnm132 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3433(line=213,offs=1)--3505(line=216,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3441(line=214,offs=1)--3505(line=216,offs=39))
        // I1FUNDCL
        // XATS2JS_dflt_cmp$dflt_3444
          // FJARGdarg($list(I1BNDcons(I1TNM(129);I0Pvar(f1(4119));$list(@(f1(4119),I1Vtnm(I1TNM(129))))),I1BNDcons(I1TNM(130);I0Pvar(f2(4120));$list(@(f2(4120),I1Vtnm(I1TNM(130)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_cmp$dflt);G1Nlist($list())) // I1CMP:return
        let jsxtnm131 = XATSDAPP(XATS2JS_dflt_cmp$dflt(jsxtnm127, jsxtnm128))
        jsxtnm132 = jsxtnm131
      } // endlet
      // I1CMP:return:jsxtnm132
      return jsxtnm132
    } // endtimp(dflt_cmp$dflt(918))
    jsxtnm134 = jsxtnm133
    let jsxtnm135 = XATSDAPP(jsxtnm134(jsxtnm118, jsxtnm119))
    let jsxtnm136 = XATSDAPP(jsxtnm126(jsxtnm135, XATSINT1(0)))
    // I1CMP:return:jsxtnm136
    return jsxtnm136
  } // endtimp(g_lt(218))
  // LCSRCsome1(Game-of-24.dats)@(3598(line=187,offs=1)--3601(line=187,offs=4))
  // I0Etapq(I0Ecst(g_abs(206));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_abs(206);LCSRCsome1(Game-of-24.dats)@(1806(line=80,offs=1)--1838(line=80,offs=33)))
  // T1IMPallx(g_abs(206)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_abs(206);$list(@(x0[724],T2Pcst(rat)))))))
  let jsxtnm143
  // LCSRCsome1(Game-of-24.dats)@(1828(line=80,offs=23)--1836(line=80,offs=31))
  // I0Etapq(I0Ecst(dflt_abs(894));$list(T2JAG($list())))
  // T1IMPallx(dflt_abs(894);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1766(line=70,offs=1)--1901(line=81,offs=31)))
  // T1IMPallx(dflt_abs(894)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_abs(894);$list()))))
  let jsxtnm142 = function (arg1) { // timp: dflt_abs(894)
    let jsxtnm138 = arg1
    // I1CMP:start
    let jsxtnm141 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1842(line=78,offs=1)--1899(line=81,offs=29)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1850(line=79,offs=1)--1899(line=81,offs=29))
      // I1FUNDCL
      // XATS2JS_dflt_abs_1853
        // FJARGdarg($list(I1BNDcons(I1TNM(139);I0Pvar(f1(4079));$list(@(f1(4079),I1Vtnm(I1TNM(139)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_abs);G1Nlist($list())) // I1CMP:return
      let jsxtnm140 = XATSDAPP(XATS2JS_dflt_abs(jsxtnm138))
      jsxtnm141 = jsxtnm140
    } // endlet
    // I1CMP:return:jsxtnm141
    return jsxtnm141
  } // endtimp(dflt_abs(894))
  jsxtnm143 = jsxtnm142
  // LCSRCsome1(Game-of-24.dats)@(3616(line=188,offs=14)--3617(line=188,offs=15))
  // I0Etapq(I0Ecst(g_sub(210));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_sub(210);LCSRCsome1(Game-of-24.dats)@(1921(line=85,offs=1)--1958(line=85,offs=38)))
  // T1IMPallx(g_sub(210)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_sub(210);$list(@(x0[728],T2Pcst(rat)))))))
  let jsxtnm151
  // LCSRCsome1(Game-of-24.dats)@(1943(line=85,offs=23)--1956(line=85,offs=36))
  // I0Etapq(I0Ecst(dflt_sub$dflt(922));$list(T2JAG($list())))
  // T1IMPallx(dflt_sub$dflt(922);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3722(line=236,offs=1)--3886(line=248,offs=2)))
  // T1IMPallx(dflt_sub$dflt(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(dflt_sub$dflt(922);$list()))))
  let jsxtnm150 = function (arg1, arg2) { // timp: dflt_sub$dflt(922)
    let jsxtnm144 = arg1
    let jsxtnm145 = arg2
    // I1CMP:start
    let jsxtnm149 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3812(line=244,offs=1)--3884(line=247,offs=39)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(3820(line=245,offs=1)--3884(line=247,offs=39))
      // I1FUNDCL
      // XATS2JS_dflt_sub$dflt_3823
        // FJARGdarg($list(I1BNDcons(I1TNM(146);I0Pvar(f1(4129));$list(@(f1(4129),I1Vtnm(I1TNM(146))))),I1BNDcons(I1TNM(147);I0Pvar(f2(4130));$list(@(f2(4130),I1Vtnm(I1TNM(147)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_dflt_sub$dflt);G1Nlist($list())) // I1CMP:return
      let jsxtnm148 = XATSDAPP(XATS2JS_dflt_sub$dflt(jsxtnm144, jsxtnm145))
      jsxtnm149 = jsxtnm148
    } // endlet
    // I1CMP:return:jsxtnm149
    return jsxtnm149
  } // endtimp(dflt_sub$dflt(922))
  jsxtnm151 = jsxtnm150
  let jsxtnm152 = XATSDAPP(expr_eval_2980(jsxtnm117))
  // LCSRCsome1(Game-of-24.dats)@(3617(line=188,offs=15)--3621(line=188,offs=19))
  // I0Etapq(I0Ecst(g_si(201));$list(T2JAG($list(T2Pcst(rat_type)))))
  // T1IMPallx(g_si(201);LCSRCsome1(Game-of-24.dats)@(1771(line=77,offs=1)--1802(line=78,offs=23)))
  // T1IMPallx(g_si(201)<$list(T2JAG($list(T2Pcst(rat_type))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(201);$list(@(a[719],T2Pcst(rat)))))))
  let jsxtnm158
  // LCSRCsome1(Game-of-24.dats)@(1792(line=78,offs=13)--1796(line=78,offs=17))
  // I0Etapq(I0Ecst(g_si(201));$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list())))))))
  // T1IMPallx(g_si(201);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1430(line=40,offs=1)--1557(line=50,offs=31)))
  // T1IMPallx(g_si(201)<$list(T2JAG($list(T2Papps(T2Pcst(gflt_type);$list(T2Ptext(xats_dflt_t;$list()))))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_si(201);$list(@(a[719],T2Pcst(dflt)))))))
  let jsxtnm157 = function (arg1) { // timp: g_si(201)
    let jsxtnm153 = arg1
    // I1CMP:start
    let jsxtnm156 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1497(line=47,offs=1)--1555(line=50,offs=29)))
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats)@(1505(line=48,offs=1)--1555(line=50,offs=29))
      // I1FUNDCL
      // XATS2JS_si2dflt_1510
        // FJARGdarg($list(I1BNDcons(I1TNM(154);I0Pvar(i1(4073));$list(@(i1(4073),I1Vtnm(I1TNM(154)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_si2dflt);G1Nlist($list())) // I1CMP:return
      let jsxtnm155 = XATSCAST("XATS2JS_si2dflt", [jsxtnm153])
      jsxtnm156 = jsxtnm155
    } // endlet
    // I1CMP:return:jsxtnm156
    return jsxtnm156
  } // endtimp(g_si(201))
  jsxtnm158 = jsxtnm157
  let jsxtnm159 = XATSDAPP(jsxtnm158(XATSINT1(24)))
  let jsxtnm160 = XATSDAPP(jsxtnm151(jsxtnm152, jsxtnm159))
  let jsxtnm161 = XATSDAPP(jsxtnm143(jsxtnm160))
  let jsxtnm162 = XATSDAPP(jsxtnm137(jsxtnm161, jsxtnm86))
  // I1CMP:return:jsxtnm162
  return jsxtnm162
} // endfun(expr_iseq24_3566)
// LCSRCsome1(Game-of-24.dats)@(3640(line=190,offs=1)--3670(line=190,offs=31))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();iseqz;D2PTMsome(0;D2ITMvar(expr_iseqz(4270)))))))
// LCSRCsome1(Game-of-24.dats)@(3671(line=191,offs=1)--3703(line=191,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();iseq24;D2PTMsome(0;D2ITMvar(expr_iseq24(4272)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(3896(line=203,offs=1)--4275(line=231,offs=2)))
// I1FUNDCL
function expr_aops$expr_3899(arg1, arg2)
{ // fun
  let jsxtnm163 = arg1
  let jsxtnm164 = arg2
  // I1CMP:start
  let jsxtnm189 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(3972(line=212,offs=1)--3991(line=213,offs=11)))
    // I1VALDCL
    let jsxtnm166
    let jsxtnm165 = XATSCAPP("list_nil", [0])
    jsxtnm166 = jsxtnm165
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(3995(line=215,offs=1)--4061(line=219,offs=32)))
    // I1VALDCL
    let jsxtnm171
    let jsxtnm167 = XATSDAPP(expr_iseqz_3500(jsxtnm163))
    let jsxtnm170 // ift
    if (jsxtnm167) // ift
    {
      jsxtnm170 = jsxtnm166
    } else {
      let jsxtnm168 = XATSCAPP("Div", [4, jsxtnm164, jsxtnm163])
      let jsxtnm169 = XATSCAPP("list_cons", [1, jsxtnm168, jsxtnm166])
      jsxtnm170 = jsxtnm169
    } // end(if)
    jsxtnm171 = jsxtnm170
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4065(line=221,offs=1)--4126(line=225,offs=32)))
    // I1VALDCL
    let jsxtnm176
    let jsxtnm172 = XATSDAPP(expr_iseqz_3500(jsxtnm164))
    let jsxtnm175 // ift
    if (jsxtnm172) // ift
    {
      jsxtnm175 = jsxtnm171
    } else {
      let jsxtnm173 = XATSCAPP("Div", [4, jsxtnm163, jsxtnm164])
      let jsxtnm174 = XATSCAPP("list_cons", [1, jsxtnm173, jsxtnm171])
      jsxtnm175 = jsxtnm174
    } // end(if)
    jsxtnm176 = jsxtnm175
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4130(line=227,offs=1)--4165(line=227,offs=36)))
    // I1VALDCL
    let jsxtnm179
    let jsxtnm177 = XATSCAPP("Mul", [3, jsxtnm163, jsxtnm164])
    let jsxtnm178 = XATSCAPP("list_cons", [1, jsxtnm177, jsxtnm176])
    jsxtnm179 = jsxtnm178
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4166(line=228,offs=1)--4201(line=228,offs=36)))
    // I1VALDCL
    let jsxtnm182
    let jsxtnm180 = XATSCAPP("Sub", [2, jsxtnm164, jsxtnm163])
    let jsxtnm181 = XATSCAPP("list_cons", [1, jsxtnm180, jsxtnm179])
    jsxtnm182 = jsxtnm181
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4202(line=229,offs=1)--4237(line=229,offs=36)))
    // I1VALDCL
    let jsxtnm185
    let jsxtnm183 = XATSCAPP("Sub", [2, jsxtnm163, jsxtnm164])
    let jsxtnm184 = XATSCAPP("list_cons", [1, jsxtnm183, jsxtnm182])
    jsxtnm185 = jsxtnm184
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4238(line=230,offs=1)--4273(line=230,offs=36)))
    // I1VALDCL
    let jsxtnm188
    let jsxtnm186 = XATSCAPP("Add", [1, jsxtnm163, jsxtnm164])
    let jsxtnm187 = XATSCAPP("list_cons", [1, jsxtnm186, jsxtnm185])
    jsxtnm188 = jsxtnm187
    XATS000_patck(true)
    jsxtnm189 = jsxtnm188
  } // endlet
  // I1CMP:return:jsxtnm189
  return jsxtnm189
} // endfun(expr_aops$expr_3899)
// LCSRCsome1(Game-of-24.dats)@(4279(line=233,offs=1)--4320(line=233,offs=42))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();aops;D2PTMsome(1000;D2ITMvar(expr_aops$expr(4274)))))))
// I1Dextern(LCSRCsome1(Game-of-24.dats)@(4549(line=250,offs=1)--4614(line=254,offs=30)))
// LCSRCsome1(Game-of-24.dats)@(4557(line=251,offs=1)--4614(line=254,offs=30))
// I1FUNDCL
// list_list$concat_4567
  // FJARGdarg($list(I1BNDcons(I1TNM(190);I0Pvar(xss(4285));$list(@(xss(4285),I1Vtnm(I1TNM(190)))))))
// I1Dextern(LCSRCsome1(Game-of-24.dats)@(4615(line=255,offs=1)--4686(line=259,offs=33)))
// LCSRCsome1(Game-of-24.dats)@(4623(line=256,offs=1)--4686(line=259,offs=33))
// I1FUNDCL
// list_list$concat_vt_4633
  // FJARGdarg($list(I1BNDcons(I1TNM(191);I0Pvar(xss(4287));$list(@(xss(4287),I1Vtnm(I1TNM(191)))))))
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(4690(line=261,offs=1)--4780(line=266,offs=29)))
// I1Dimplmnt0(DIMPLone2(list_list$concat(2173);$list(@(a[7499],T2Pvar(a[7501]))))):timp
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(4784(line=268,offs=1)--5085(line=292,offs=2)))
// I1Dimplmnt0(DIMPLone2(list_list$concat_vt(2174);$list(@(a[7500],T2Pvar(a[7502]))))):timp
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(5176(line=297,offs=1)--5301(line=302,offs=43)))
// I1FUNDCL
function expr_aops$exprlst_5179(arg1, arg2)
{ // fun
  let jsxtnm208 = arg1
  let jsxtnm209 = arg2
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(5241(line=301,offs=1)--5257(line=301,offs=17))
  // I0Etapq(I0Ecst(list_list$concat(2173));$list(T2JAG($list(T2Pcst(expr)))))
  // T1IMPallx(list_list$concat(2173);LCSRCsome1(Game-of-24.dats)@(4690(line=261,offs=1)--4780(line=266,offs=29)))
  // T1IMPallx(list_list$concat(2173)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7501],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat(2173);$list(@(a[7499],T2Pvar(a[7501])))))))
  let jsxtnm258 = function (arg1) { // timp: list_list$concat(2173)
    let jsxtnm210 = arg1
    // I1CMP:start
    // LCSRCsome1(Game-of-24.dats)@(4752(line=266,offs=1)--4771(line=266,offs=20))
    // I0Etapq(I0Ecst(list_list$concat_vt(2174));$list(T2JAG($list(T2Pvar(a[7501])))))
    // T1IMPallx(list_list$concat_vt(2174);LCSRCsome1(Game-of-24.dats)@(4784(line=268,offs=1)--5085(line=292,offs=2)))
    // T1IMPallx(list_list$concat_vt(2174)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7502],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat_vt(2174);$list(@(a[7500],T2Pvar(a[7502])))))))
    let jsxtnm255 = function (arg1) { // timp: list_list$concat_vt(2174)
      let jsxtnm211 = arg1
      // I1CMP:start
      let jsxtnm254 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4869(line=276,offs=1)--4890(line=276,offs=22)))
        // I1VALDCL
        let jsxtnm213
        let jsxtnm212 = XATSCAPP("list_vt_nil", [0])
        jsxtnm213 = jsxtnm212
        XATS000_patck(true)
        // I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(4899(line=278,offs=1)--5080(line=290,offs=40)))
        // I1FUNDCL
        function loop_4902(arg1, arg2)
        { // fun
          let jsxtnm214 = arg1
          let jsxtnm215 = arg2
          // I1CMP:start
          let jsxtnm252 // cas
          do {
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(216);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
            if (XATS000_ctgeq(jsxtnm214, XATSCTAG("list_nil",0))) { // gpt
              let jsxtnm216 = jsxtnm214
              // LCSRCsome1(Game-of-24.dats)@(4994(line=287,offs=1)--5010(line=287,offs=17))
              // I0Etapq(I0Ecst(list_vt_reverse0(1684));$list(T2JAG($list(T2Pvar(a[7502])))))
              // T1IMPallx(list_vt_reverse0(1684);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5949(line=396,offs=1)--6036(line=399,offs=46)))
              // T1IMPallx(list_vt_reverse0(1684)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7134],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(1684);$list(@(x0[4433],T2Pvar(a[7134])))))))
              let jsxtnm235 = function (arg1) { // timp: list_vt_reverse0(1684)
                let jsxtnm217 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5991(line=399,offs=1)--6008(line=399,offs=18))
                // I0Etapq(I0Ecst(list_vt_rappend00(1687));$list(T2JAG($list(T2Pvar(a[7134])))))
                // T1IMPallx(list_vt_rappend00(1687);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5476(line=360,offs=1)--5880(line=392,offs=2)))
                // T1IMPallx(list_vt_rappend00(1687)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7131],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(1687);$list(@(x0[4440],T2Pvar(a[7131])))))))
                let jsxtnm232 = function (arg1, arg2) { // timp: list_vt_rappend00(1687)
                  let jsxtnm218 = arg1
                  let jsxtnm219 = arg2
                  // I1CMP:start
                  let jsxtnm231 // let
                  { // let
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5555(line=368,offs=1)--5841(line=390,offs=2)))
                    // I1FUNDCL
                    function loop_5558(arg1, arg2)
                    { // fun
                      let jsxtnm220 = arg1
                      let jsxtnm221 = arg2
                      // I1CMP:start
                      let jsxtnm229 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(222);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm220, XATSCTAG("list_vt_nil",0))) { // gpt
                          let jsxtnm222 = jsxtnm220
                          jsxtnm229 = jsxtnm221
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(223);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                        if (XATS000_ctgeq(jsxtnm220, XATSCTAG("list_vt_cons",1))) { // gpt
                          let jsxtnm223 = jsxtnm220
                          let jsxtnm228 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5729(line=384,offs=3)--5744(line=384,offs=18)))
                            // I1VALDCL
                            let jsxtnm225
                            let jsxtnm224 = XATSPCON(jsxtnm220,1)
                            jsxtnm225 = jsxtnm224
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5747(line=385,offs=3)--5769(line=385,offs=25)))
                            // I1VALDCL
                            let jsxtnm226
                            XATS000_assgn(XATSLPCN(1, jsxtnm220), jsxtnm221)
                            jsxtnm226 = []
                            XATS000_patck(true)
                            XATS000_fold(jsxtnm220)
                            let jsxtnm227 = XATSDAPP(loop_5558(jsxtnm225, jsxtnm220))
                            jsxtnm228 = jsxtnm227
                          } // endlet
                          jsxtnm229 = jsxtnm228
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm229
                      return jsxtnm229
                    } // endfun(loop_5558)
                    let jsxtnm230 = XATSDAPP(loop_5558(jsxtnm218, jsxtnm219))
                    jsxtnm231 = jsxtnm230
                  } // endlet
                  // I1CMP:return:jsxtnm231
                  return jsxtnm231
                } // endtimp(list_vt_rappend00(1687))
                let jsxtnm233 = XATSCAPP("list_vt_nil", [0])
                let jsxtnm234 = XATSDAPP(jsxtnm232(jsxtnm217, jsxtnm233))
                // I1CMP:return:jsxtnm234
                return jsxtnm234
              } // endtimp(list_vt_reverse0(1684))
              let jsxtnm236 = XATSDAPP(jsxtnm235(jsxtnm215))
              jsxtnm252 = jsxtnm236
              break // cls
            } // gpt
            // } // cls
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(237);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(xs1(4294)),I0Pvar(xss(4295))));$list(@(xs1(4294),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(237));0)),@(xss(4295),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(237));1)))))
            if (XATS000_ctgeq(jsxtnm214, XATSCTAG("list_cons",1))) { // gpt
              let jsxtnm237 = jsxtnm214
              // LCSRCsome1(Game-of-24.dats)@(5051(line=290,offs=11)--5068(line=290,offs=28))
              // I0Etapq(I0Ecst(list_rappendx0_vt(1080));$list(T2JAG($list(T2Pvar(a[7502])))))
              // T1IMPallx(list_rappendx0_vt(1080);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5834(line=385,offs=1)--6099(line=407,offs=2)))
              // T1IMPallx(list_rappendx0_vt(1080)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6333],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_rappendx0_vt(1080);$list(@(a[2972],T2Pvar(x0[6333])))))))
              let jsxtnm249 = function (arg1, arg2) { // timp: list_rappendx0_vt(1080)
                let jsxtnm238 = arg1
                let jsxtnm239 = arg2
                // I1CMP:start
                let jsxtnm248 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5913(line=393,offs=1)--6089(line=405,offs=34)))
                  // I1FUNDCL
                  function loop_5916(arg1, arg2)
                  { // fun
                    let jsxtnm240 = arg1
                    let jsxtnm241 = arg2
                    // I1CMP:start
                    let jsxtnm246 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(242);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                      if (XATS000_ctgeq(jsxtnm240, XATSCTAG("list_nil",0))) { // gpt
                        let jsxtnm242 = jsxtnm240
                        jsxtnm246 = jsxtnm241
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(243);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2232)),I0Pvar(xs(2233))));$list(@(x0(2232),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(243));0)),@(xs(2233),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(243));1)))))
                      if (XATS000_ctgeq(jsxtnm240, XATSCTAG("list_cons",1))) { // gpt
                        let jsxtnm243 = jsxtnm240
                        let jsxtnm244 = XATSCAPP("list_vt_cons", [1, XATSP1CN("list_cons", jsxtnm243[0+1]), jsxtnm241])
                        let jsxtnm245 = XATSDAPP(loop_5916(XATSP1CN("list_cons", jsxtnm243[1+1]), jsxtnm244))
                        jsxtnm246 = jsxtnm245
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm246
                    return jsxtnm246
                  } // endfun(loop_5916)
                  let jsxtnm247 = XATSDAPP(loop_5916(jsxtnm238, jsxtnm239))
                  jsxtnm248 = jsxtnm247
                } // endlet
                // I1CMP:return:jsxtnm248
                return jsxtnm248
              } // endtimp(list_rappendx0_vt(1080))
              let jsxtnm250 = XATSDAPP(jsxtnm249(XATSP1CN("list_cons", jsxtnm237[0+1]), jsxtnm215))
              let jsxtnm251 = XATSDAPP(loop_4902(XATSP1CN("list_cons", jsxtnm237[1+1]), jsxtnm250))
              jsxtnm252 = jsxtnm251
              break // cls
            } // gpt
            // } // cls
            XATS000_cfail()
          } while (false) // end-of(do)
          // I1CMP:return:jsxtnm252
          return jsxtnm252
        } // endfun(loop_4902)
        let jsxtnm253 = XATSDAPP(loop_4902(jsxtnm211, jsxtnm213))
        jsxtnm254 = jsxtnm253
      } // endlet
      // I1CMP:return:jsxtnm254
      return jsxtnm254
    } // endtimp(list_list$concat_vt(2174))
    let jsxtnm256 = XATSDAPP(jsxtnm255(jsxtnm210))
    let jsxtnm257 = XATSCAST("list_vt2t_17651", [jsxtnm256])
    // I1CMP:return:jsxtnm257
    return jsxtnm257
  } // endtimp(list_list$concat(2173))
  // LCSRCsome1(Game-of-24.dats)@(5259(line=302,offs=1)--5272(line=302,offs=14))
  // I0Etapq(I0Ecst(list_map$f1un(1117));$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(list_map$f1un(1117);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(8182(line=535,offs=1)--8263(line=539,offs=37)))
  // T1IMPallx(list_map$f1un(1117)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6396],T2Pcst(expr)),@(y0[6397],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_map$f1un(1117);$list(@(x0[3020],T2Pvar(x0[6396])),@(y0[3021],T2Pvar(y0[6397])))))))
  let jsxtnm348
  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(8227(line=539,offs=1)--8245(line=539,offs=19))
  // I0Etapq(I0Ecst(gseq_map$f1un_list(411));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6396]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[6396]))),T2JAG($list(T2Pvar(y0[6397])))))
  // T1IMPallx(gseq_map$f1un_list(411);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14088(line=966,offs=1)--14219(line=974,offs=43)))
  // T1IMPallx(gseq_map$f1un_list(411)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5252],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5253],T2Pcst(expr)),@(y0[5254],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_list(411);$list(@(xs[1221],T2Pvar(xs[5252])),@(x0[1222],T2Pvar(x0[5253])),@(y0[1223],T2Pvar(y0[5254])))))))
  let jsxtnm347 = function (arg1, arg2) { // timp: gseq_map$f1un_list(411)
    let jsxtnm259 = arg1
    let jsxtnm260 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14177(line=974,offs=1)--14196(line=974,offs=20))
    // I0Etapq(I0Ecst(gseq_map$f1un_llist(412));$list(T2JAG($list(T2Pvar(xs[5252]))),T2JAG($list(T2Pvar(x0[5253]))),T2JAG($list(T2Pvar(y0[5254])))))
    // T1IMPallx(gseq_map$f1un_llist(412);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14369(line=988,offs=1)--14531(line=1000,offs=2)))
    // T1IMPallx(gseq_map$f1un_llist(412)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5258],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5259],T2Pcst(expr)),@(y0[5260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_llist(412);$list(@(xs[1224],T2Pvar(xs[5258])),@(x0[1225],T2Pvar(x0[5259])),@(y0[1226],T2Pvar(y0[5260])))))))
    let jsxtnm344 = function (arg1, arg2) { // timp: gseq_map$f1un_llist(412)
      let jsxtnm261 = arg1
      let jsxtnm262 = arg2
      // I1CMP:start
      let jsxtnm343 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14485(line=998,offs=1)--14529(line=999,offs=36)))
        // I1Dimplmnt0(DIMPLone2(map$fopr(62);$list(@(x0[413],T2Pvar(x0[5259])),@(y0[414],T2Pvar(y0[5260]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14445(line=995,offs=1)--14459(line=995,offs=15))
        // I0Etapq(I0Ecst(gseq_map_llist(408));$list(T2JAG($list(T2Pvar(xs[5258]))),T2JAG($list(T2Pvar(x0[5259]))),T2JAG($list(T2Pvar(y0[5260])))))
        // T1IMPallx(gseq_map_llist(408);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14246(line=978,offs=1)--14365(line=986,offs=32)))
        // T1IMPallx(gseq_map_llist(408)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5255],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5256],T2Pcst(expr)),@(y0[5257],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_llist(408);$list(@(xs[1212],T2Pvar(xs[5255])),@(x0[1213],T2Pvar(x0[5256])),@(y0[1214],T2Pvar(y0[5257])))))))
        let jsxtnm341 = function (arg1) { // timp: gseq_map_llist(408)
          let jsxtnm265 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14311(line=984,offs=1)--14327(line=984,offs=17))
          // I0Etapq(I0Ecst(strm_vt_listize0(1810));$list(T2JAG($list(T2Pvar(y0[5257])))))
          // T1IMPallx(strm_vt_listize0(1810);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6447(line=405,offs=1)--6542(line=410,offs=28)))
          // T1IMPallx(strm_vt_listize0(1810)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7259],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(1810);$list(@(x0[4665],T2Pvar(x0[7259])))))))
          let jsxtnm302 = function (arg1) { // timp: strm_vt_listize0(1810)
            let jsxtnm266 = arg1
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6494(line=409,offs=1)--6510(line=409,offs=17))
            // I0Etapq(I0Ecst(list_vt_reverse0(1684));$list(T2JAG($list(T2Pvar(x0[7259])))))
            // T1IMPallx(list_vt_reverse0(1684);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5949(line=396,offs=1)--6036(line=399,offs=46)))
            // T1IMPallx(list_vt_reverse0(1684)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[7134],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(1684);$list(@(x0[4433],T2Pvar(a[7134])))))))
            let jsxtnm285 = function (arg1) { // timp: list_vt_reverse0(1684)
              let jsxtnm267 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5991(line=399,offs=1)--6008(line=399,offs=18))
              // I0Etapq(I0Ecst(list_vt_rappend00(1687));$list(T2JAG($list(T2Pvar(a[7134])))))
              // T1IMPallx(list_vt_rappend00(1687);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5476(line=360,offs=1)--5880(line=392,offs=2)))
              // T1IMPallx(list_vt_rappend00(1687)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[7131],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(1687);$list(@(x0[4440],T2Pvar(a[7131])))))))
              let jsxtnm282 = function (arg1, arg2) { // timp: list_vt_rappend00(1687)
                let jsxtnm268 = arg1
                let jsxtnm269 = arg2
                // I1CMP:start
                let jsxtnm281 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5555(line=368,offs=1)--5841(line=390,offs=2)))
                  // I1FUNDCL
                  function loop_5558(arg1, arg2)
                  { // fun
                    let jsxtnm270 = arg1
                    let jsxtnm271 = arg2
                    // I1CMP:start
                    let jsxtnm279 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(272);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm270, XATSCTAG("list_vt_nil",0))) { // gpt
                        let jsxtnm272 = jsxtnm270
                        jsxtnm279 = jsxtnm271
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(273);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                      if (XATS000_ctgeq(jsxtnm270, XATSCTAG("list_vt_cons",1))) { // gpt
                        let jsxtnm273 = jsxtnm270
                        let jsxtnm278 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5729(line=384,offs=3)--5744(line=384,offs=18)))
                          // I1VALDCL
                          let jsxtnm275
                          let jsxtnm274 = XATSPCON(jsxtnm270,1)
                          jsxtnm275 = jsxtnm274
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5747(line=385,offs=3)--5769(line=385,offs=25)))
                          // I1VALDCL
                          let jsxtnm276
                          XATS000_assgn(XATSLPCN(1, jsxtnm270), jsxtnm271)
                          jsxtnm276 = []
                          XATS000_patck(true)
                          XATS000_fold(jsxtnm270)
                          let jsxtnm277 = XATSDAPP(loop_5558(jsxtnm275, jsxtnm270))
                          jsxtnm278 = jsxtnm277
                        } // endlet
                        jsxtnm279 = jsxtnm278
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm279
                    return jsxtnm279
                  } // endfun(loop_5558)
                  let jsxtnm280 = XATSDAPP(loop_5558(jsxtnm268, jsxtnm269))
                  jsxtnm281 = jsxtnm280
                } // endlet
                // I1CMP:return:jsxtnm281
                return jsxtnm281
              } // endtimp(list_vt_rappend00(1687))
              let jsxtnm283 = XATSCAPP("list_vt_nil", [0])
              let jsxtnm284 = XATSDAPP(jsxtnm282(jsxtnm267, jsxtnm283))
              // I1CMP:return:jsxtnm284
              return jsxtnm284
            } // endtimp(list_vt_reverse0(1684))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6516(line=410,offs=2)--6533(line=410,offs=19))
            // I0Etapq(I0Ecst(strm_vt_rlistize0(1812));$list(T2JAG($list(T2Pvar(x0[7259])))))
            // T1IMPallx(strm_vt_rlistize0(1812);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6546(line=412,offs=1)--6825(line=433,offs=2)))
            // T1IMPallx(strm_vt_rlistize0(1812)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(1812);$list(@(x0[4668],T2Pvar(x0[7260])))))))
            let jsxtnm299 = function (arg1) { // timp: strm_vt_rlistize0(1812)
              let jsxtnm286 = arg1
              // I1CMP:start
              let jsxtnm298 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6623(line=420,offs=1)--6645(line=420,offs=23)))
                // I1VALDCL
                let jsxtnm288
                let jsxtnm287 = XATSCAPP("list_vt_nil", [0])
                jsxtnm288 = jsxtnm287
                XATS000_patck(true)
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6649(line=422,offs=1)--6823(line=432,offs=42)))
                // I1FUNDCL
                function loop_6652(arg1, arg2)
                { // fun
                  let jsxtnm289 = arg1
                  let jsxtnm290 = arg2
                  // I1CMP:start
                  let jsxtnm291 = XATS000_dl1az(jsxtnm289)
                  let jsxtnm296 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(292);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                    if (XATS000_ctgeq(jsxtnm291, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                      let jsxtnm292 = jsxtnm291
                      jsxtnm296 = jsxtnm290
                      break // cls
                    } // gpt
                    // } // cls
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(293);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(3685)),I0Pvar(xs(3686)))));$list(@(x1(3685),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(293));0)),@(xs(3686),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(293));1)))))
                    if (XATS000_ctgeq(jsxtnm291, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                      let jsxtnm293 = jsxtnm291
                      let jsxtnm294 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm293[0+1]), jsxtnm290])
                      let jsxtnm295 = XATSDAPP(loop_6652(XATSP1CN("strmcon_vt_cons", jsxtnm293[1+1]), jsxtnm294))
                      jsxtnm296 = jsxtnm295
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm296
                  return jsxtnm296
                } // endfun(loop_6652)
                let jsxtnm297 = XATSDAPP(loop_6652(jsxtnm286, jsxtnm288))
                jsxtnm298 = jsxtnm297
              } // endlet
              // I1CMP:return:jsxtnm298
              return jsxtnm298
            } // endtimp(strm_vt_rlistize0(1812))
            let jsxtnm300 = XATSDAPP(jsxtnm299(jsxtnm266))
            let jsxtnm301 = XATSDAPP(jsxtnm285(jsxtnm300))
            // I1CMP:return:jsxtnm301
            return jsxtnm301
          } // endtimp(strm_vt_listize0(1810))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14334(line=986,offs=1)--14348(line=986,offs=15))
          // I0Etapq(I0Ecst(gseq_map_lstrm(409));$list(T2JAG($list(T2Pvar(xs[5255]))),T2JAG($list(T2Pvar(x0[5256]))),T2JAG($list(T2Pvar(y0[5257])))))
          // T1IMPallx(gseq_map_lstrm(409);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14597(line=1004,offs=1)--14765(line=1015,offs=2)))
          // T1IMPallx(gseq_map_lstrm(409)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5261],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5262],T2Pcst(expr)),@(y0[5263],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_lstrm(409);$list(@(xs[1215],T2Pvar(xs[5261])),@(x0[1216],T2Pvar(x0[5262])),@(y0[1217],T2Pvar(y0[5263])))))))
          let jsxtnm338 = function (arg1) { // timp: gseq_map_lstrm(409)
            let jsxtnm303 = arg1
            // I1CMP:start
            let jsxtnm337 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14718(line=1013,offs=1)--14763(line=1014,offs=37)))
              // I1Dimplmnt0(DIMPLone2(map$fopr0(1217);$list(@(x0[3191],T2Pvar(x0[5262])),@(y0[3192],T2Pvar(y0[5263]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14662(line=1010,offs=1)--14674(line=1010,offs=13))
              // I0Etapq(I0Ecst(strm_vt_map0(1794));$list(T2JAG($list(T2Pvar(x0[5262]))),T2JAG($list(T2Pvar(y0[5263])))))
              // T1IMPallx(strm_vt_map0(1794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3697(line=202,offs=1)--3980(line=225,offs=2)))
              // T1IMPallx(strm_vt_map0(1794)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7246],T2Pcst(expr)),@(y0[7247],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(1794);$list(@(x0[4634],T2Pvar(x0[7246])),@(y0[4635],T2Pvar(y0[7247])))))))
              let jsxtnm321 = function (arg1) { // timp: strm_vt_map0(1794)
                let jsxtnm304 = arg1
                // I1CMP:start
                let jsxtnm320 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3775(line=210,offs=1)--3978(line=224,offs=2)))
                  // I1FUNDCL
                  function auxmain_3778(arg1)
                  { // fun
                    let jsxtnm305 = arg1
                    // I1CMP:start
                    let jsxtnm318 = function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm306 = XATS000_dl1az(jsxtnm305)
                      let jsxtnm317 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(307);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm306, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                          let jsxtnm307 = jsxtnm306
                          let jsxtnm308 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm317 = jsxtnm308
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(309);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(3650)),I0Pvar(xs(3651)))));$list(@(x1(3650),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(309));0)),@(xs(3651),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(309));1)))))
                        if (XATS000_ctgeq(jsxtnm306, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                          let jsxtnm309 = jsxtnm306
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3941(line=223,offs=2)--3950(line=223,offs=11))
                          // I0Etapq(I0Ecst(map$fopr0(1217));$list(T2JAG($list(T2Pvar(x0[7246]))),T2JAG($list(T2Pvar(y0[7247])))))
                          // T1IMPallx(map$fopr0(1217);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14718(line=1013,offs=1)--14763(line=1014,offs=37)))
                          // T1IMPallx(map$fopr0(1217)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5261],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5262],T2Pcst(expr)),@(y0[5263],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1217);$list(@(x0[3191],T2Pcst(expr)),@(y0[3192],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm313
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14747(line=1014,offs=21)--14755(line=1014,offs=29))
                          // I0Etapq(I0Ecst(map$fopr(62));$list(T2JAG($list(T2Pvar(x0[5262]))),T2JAG($list(T2Pvar(y0[5263])))))
                          // T1IMPallx(map$fopr(62);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14485(line=998,offs=1)--14529(line=999,offs=36)))
                          // T1IMPallx(map$fopr(62)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5258],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5259],T2Pcst(expr)),@(y0[5260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(62);$list(@(x0[413],T2Pcst(expr)),@(y0[414],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm312 = function (arg1) { // timp: map$fopr(62)
                            let jsxtnm310 = arg1
                            // I1CMP:start
                            let jsxtnm311 = XATSDAPP(jsxtnm262(jsxtnm310))
                            // I1CMP:return:jsxtnm311
                            return jsxtnm311
                          } // endtimp(map$fopr(62))
                          jsxtnm313 = jsxtnm312
                          let jsxtnm314 = XATSDAPP(jsxtnm313(XATSP1CN("strmcon_vt_cons", jsxtnm309[0+1])))
                          let jsxtnm315 = XATSDAPP(auxmain_3778(XATSP1CN("strmcon_vt_cons", jsxtnm309[1+1])))
                          let jsxtnm316 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm314, jsxtnm315])
                          jsxtnm317 = jsxtnm316
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm317
                      return jsxtnm317
                    } // endfun(l1azy)
                    // I1CMP:return:jsxtnm318
                    return jsxtnm318
                  } // endfun(auxmain_3778)
                  let jsxtnm319 = XATSDAPP(auxmain_3778(jsxtnm304))
                  jsxtnm320 = jsxtnm319
                } // endlet
                // I1CMP:return:jsxtnm320
                return jsxtnm320
              } // endtimp(strm_vt_map0(1794))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14684(line=1011,offs=2)--14696(line=1011,offs=14))
              // I0Etapq(I0Ecst(gseq_strmize(355));$list(T2JAG($list(T2Pvar(xs[5261]))),T2JAG($list(T2Pvar(x0[5262])))))
              // T1IMPallx(gseq_strmize(355);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4975(line=314,offs=1)--5039(line=316,offs=46)))
              // T1IMPallx(gseq_strmize(355)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6381],T2Pcst(expr)),@(x0[6381],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_strmize(355);$list(@(xs[1045],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6381])))),@(x0[1046],T2Pvar(x0[6381])))))))
              let jsxtnm334
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5023(line=316,offs=30)--5035(line=316,offs=42))
              // I0Etapq(I0Ecst(list_strmize(1092));$list(T2JAG($list(T2Pvar(x0[6381])))))
              // T1IMPallx(list_strmize(1092);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4716(line=289,offs=1)--4935(line=312,offs=2)))
              // T1IMPallx(list_strmize(1092)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6380],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_strmize(1092);$list(@(a[2991],T2Pvar(x0[6380])))))))
              let jsxtnm333 = function (arg1) { // timp: list_strmize(1092)
                let jsxtnm322 = arg1
                // I1CMP:start
                let jsxtnm332 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4790(line=298,offs=1)--4930(line=310,offs=2)))
                  // I1FUNDCL
                  function auxmain_4793(arg1)
                  { // fun
                    let jsxtnm323 = arg1
                    // I1CMP:start
                    let jsxtnm330 = function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm329 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(324);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm323, XATSCTAG("list_nil",0))) { // gpt
                          let jsxtnm324 = jsxtnm323
                          let jsxtnm325 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm329 = jsxtnm325
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(326);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2300)),I0Pvar(xs(2301))));$list(@(x0(2300),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(326));0)),@(xs(2301),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(326));1)))))
                        if (XATS000_ctgeq(jsxtnm323, XATSCTAG("list_cons",1))) { // gpt
                          let jsxtnm326 = jsxtnm323
                          let jsxtnm327 = XATSDAPP(auxmain_4793(XATSP1CN("list_cons", jsxtnm326[1+1])))
                          let jsxtnm328 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("list_cons", jsxtnm326[0+1]), jsxtnm327])
                          jsxtnm329 = jsxtnm328
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm329
                      return jsxtnm329
                    } // endfun(l1azy)
                    // I1CMP:return:jsxtnm330
                    return jsxtnm330
                  } // endfun(auxmain_4793)
                  let jsxtnm331 = XATSDAPP(auxmain_4793(jsxtnm322))
                  jsxtnm332 = jsxtnm331
                } // endlet
                // I1CMP:return:jsxtnm332
                return jsxtnm332
              } // endtimp(list_strmize(1092))
              jsxtnm334 = jsxtnm333
              let jsxtnm335 = XATSDAPP(jsxtnm334(jsxtnm303))
              let jsxtnm336 = XATSDAPP(jsxtnm321(jsxtnm335))
              jsxtnm337 = jsxtnm336
            } // endlet
            // I1CMP:return:jsxtnm337
            return jsxtnm337
          } // endtimp(gseq_map_lstrm(409))
          let jsxtnm339 = XATSDAPP(jsxtnm338(jsxtnm265))
          let jsxtnm340 = XATSDAPP(jsxtnm302(jsxtnm339))
          // I1CMP:return:jsxtnm340
          return jsxtnm340
        } // endtimp(gseq_map_llist(408))
        let jsxtnm342 = XATSDAPP(jsxtnm341(jsxtnm261))
        jsxtnm343 = jsxtnm342
      } // endlet
      // I1CMP:return:jsxtnm343
      return jsxtnm343
    } // endtimp(gseq_map$f1un_llist(412))
    let jsxtnm345 = XATSDAPP(jsxtnm344(jsxtnm259, jsxtnm260))
    let jsxtnm346 = XATSCAST("list_vt2t_17651", [jsxtnm345])
    // I1CMP:return:jsxtnm346
    return jsxtnm346
  } // endtimp(gseq_map$f1un_list(411))
  jsxtnm348 = jsxtnm347
  let jsxtnm351 = function (arg1) { // lam0(T_LAM(0))
    let jsxtnm349 = arg1
    // I1CMP:start
    let jsxtnm350 = XATSDAPP(expr_aops$expr_3899(jsxtnm208, jsxtnm349))
    // I1CMP:return:jsxtnm350
    return jsxtnm350
  } // endfun(lam0)
  let jsxtnm352 = XATSDAPP(jsxtnm348(jsxtnm209, jsxtnm351))
  let jsxtnm353 = XATSDAPP(jsxtnm258(jsxtnm352))
  // I1CMP:return:jsxtnm353
  return jsxtnm353
} // endfun(expr_aops$exprlst_5179)
// LCSRCsome1(Game-of-24.dats)@(5302(line=303,offs=1)--5346(line=303,offs=45))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();aops;D2PTMsome(1000;D2ITMvar(expr_aops$exprlst(4296)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(5350(line=305,offs=1)--5481(line=310,offs=43)))
// I1FUNDCL
function exprlst_aops$expr_5353(arg1, arg2)
{ // fun
  let jsxtnm354 = arg1
  let jsxtnm355 = arg2
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(5421(line=309,offs=1)--5437(line=309,offs=17))
  // I0Etapq(I0Ecst(list_list$concat(2173));$list(T2JAG($list(T2Pcst(expr)))))
  // T1IMPallx(list_list$concat(2173);LCSRCsome1(Game-of-24.dats)@(4690(line=261,offs=1)--4780(line=266,offs=29)))
  // T1IMPallx(list_list$concat(2173)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7501],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat(2173);$list(@(a[7499],T2Pvar(a[7501])))))))
  let jsxtnm404 = function (arg1) { // timp: list_list$concat(2173)
    let jsxtnm356 = arg1
    // I1CMP:start
    // LCSRCsome1(Game-of-24.dats)@(4752(line=266,offs=1)--4771(line=266,offs=20))
    // I0Etapq(I0Ecst(list_list$concat_vt(2174));$list(T2JAG($list(T2Pvar(a[7501])))))
    // T1IMPallx(list_list$concat_vt(2174);LCSRCsome1(Game-of-24.dats)@(4784(line=268,offs=1)--5085(line=292,offs=2)))
    // T1IMPallx(list_list$concat_vt(2174)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7502],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat_vt(2174);$list(@(a[7500],T2Pvar(a[7502])))))))
    let jsxtnm401 = function (arg1) { // timp: list_list$concat_vt(2174)
      let jsxtnm357 = arg1
      // I1CMP:start
      let jsxtnm400 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4869(line=276,offs=1)--4890(line=276,offs=22)))
        // I1VALDCL
        let jsxtnm359
        let jsxtnm358 = XATSCAPP("list_vt_nil", [0])
        jsxtnm359 = jsxtnm358
        XATS000_patck(true)
        // I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(4899(line=278,offs=1)--5080(line=290,offs=40)))
        // I1FUNDCL
        function loop_4902(arg1, arg2)
        { // fun
          let jsxtnm360 = arg1
          let jsxtnm361 = arg2
          // I1CMP:start
          let jsxtnm398 // cas
          do {
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(362);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
            if (XATS000_ctgeq(jsxtnm360, XATSCTAG("list_nil",0))) { // gpt
              let jsxtnm362 = jsxtnm360
              // LCSRCsome1(Game-of-24.dats)@(4994(line=287,offs=1)--5010(line=287,offs=17))
              // I0Etapq(I0Ecst(list_vt_reverse0(1684));$list(T2JAG($list(T2Pvar(a[7502])))))
              // T1IMPallx(list_vt_reverse0(1684);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5949(line=396,offs=1)--6036(line=399,offs=46)))
              // T1IMPallx(list_vt_reverse0(1684)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7134],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(1684);$list(@(x0[4433],T2Pvar(a[7134])))))))
              let jsxtnm381 = function (arg1) { // timp: list_vt_reverse0(1684)
                let jsxtnm363 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5991(line=399,offs=1)--6008(line=399,offs=18))
                // I0Etapq(I0Ecst(list_vt_rappend00(1687));$list(T2JAG($list(T2Pvar(a[7134])))))
                // T1IMPallx(list_vt_rappend00(1687);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5476(line=360,offs=1)--5880(line=392,offs=2)))
                // T1IMPallx(list_vt_rappend00(1687)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7131],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(1687);$list(@(x0[4440],T2Pvar(a[7131])))))))
                let jsxtnm378 = function (arg1, arg2) { // timp: list_vt_rappend00(1687)
                  let jsxtnm364 = arg1
                  let jsxtnm365 = arg2
                  // I1CMP:start
                  let jsxtnm377 // let
                  { // let
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5555(line=368,offs=1)--5841(line=390,offs=2)))
                    // I1FUNDCL
                    function loop_5558(arg1, arg2)
                    { // fun
                      let jsxtnm366 = arg1
                      let jsxtnm367 = arg2
                      // I1CMP:start
                      let jsxtnm375 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(368);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm366, XATSCTAG("list_vt_nil",0))) { // gpt
                          let jsxtnm368 = jsxtnm366
                          jsxtnm375 = jsxtnm367
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(369);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                        if (XATS000_ctgeq(jsxtnm366, XATSCTAG("list_vt_cons",1))) { // gpt
                          let jsxtnm369 = jsxtnm366
                          let jsxtnm374 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5729(line=384,offs=3)--5744(line=384,offs=18)))
                            // I1VALDCL
                            let jsxtnm371
                            let jsxtnm370 = XATSPCON(jsxtnm366,1)
                            jsxtnm371 = jsxtnm370
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5747(line=385,offs=3)--5769(line=385,offs=25)))
                            // I1VALDCL
                            let jsxtnm372
                            XATS000_assgn(XATSLPCN(1, jsxtnm366), jsxtnm367)
                            jsxtnm372 = []
                            XATS000_patck(true)
                            XATS000_fold(jsxtnm366)
                            let jsxtnm373 = XATSDAPP(loop_5558(jsxtnm371, jsxtnm366))
                            jsxtnm374 = jsxtnm373
                          } // endlet
                          jsxtnm375 = jsxtnm374
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm375
                      return jsxtnm375
                    } // endfun(loop_5558)
                    let jsxtnm376 = XATSDAPP(loop_5558(jsxtnm364, jsxtnm365))
                    jsxtnm377 = jsxtnm376
                  } // endlet
                  // I1CMP:return:jsxtnm377
                  return jsxtnm377
                } // endtimp(list_vt_rappend00(1687))
                let jsxtnm379 = XATSCAPP("list_vt_nil", [0])
                let jsxtnm380 = XATSDAPP(jsxtnm378(jsxtnm363, jsxtnm379))
                // I1CMP:return:jsxtnm380
                return jsxtnm380
              } // endtimp(list_vt_reverse0(1684))
              let jsxtnm382 = XATSDAPP(jsxtnm381(jsxtnm361))
              jsxtnm398 = jsxtnm382
              break // cls
            } // gpt
            // } // cls
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(383);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(xs1(4294)),I0Pvar(xss(4295))));$list(@(xs1(4294),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(383));0)),@(xss(4295),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(383));1)))))
            if (XATS000_ctgeq(jsxtnm360, XATSCTAG("list_cons",1))) { // gpt
              let jsxtnm383 = jsxtnm360
              // LCSRCsome1(Game-of-24.dats)@(5051(line=290,offs=11)--5068(line=290,offs=28))
              // I0Etapq(I0Ecst(list_rappendx0_vt(1080));$list(T2JAG($list(T2Pvar(a[7502])))))
              // T1IMPallx(list_rappendx0_vt(1080);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5834(line=385,offs=1)--6099(line=407,offs=2)))
              // T1IMPallx(list_rappendx0_vt(1080)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6333],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_rappendx0_vt(1080);$list(@(a[2972],T2Pvar(x0[6333])))))))
              let jsxtnm395 = function (arg1, arg2) { // timp: list_rappendx0_vt(1080)
                let jsxtnm384 = arg1
                let jsxtnm385 = arg2
                // I1CMP:start
                let jsxtnm394 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5913(line=393,offs=1)--6089(line=405,offs=34)))
                  // I1FUNDCL
                  function loop_5916(arg1, arg2)
                  { // fun
                    let jsxtnm386 = arg1
                    let jsxtnm387 = arg2
                    // I1CMP:start
                    let jsxtnm392 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(388);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                      if (XATS000_ctgeq(jsxtnm386, XATSCTAG("list_nil",0))) { // gpt
                        let jsxtnm388 = jsxtnm386
                        jsxtnm392 = jsxtnm387
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(389);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2232)),I0Pvar(xs(2233))));$list(@(x0(2232),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(389));0)),@(xs(2233),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(389));1)))))
                      if (XATS000_ctgeq(jsxtnm386, XATSCTAG("list_cons",1))) { // gpt
                        let jsxtnm389 = jsxtnm386
                        let jsxtnm390 = XATSCAPP("list_vt_cons", [1, XATSP1CN("list_cons", jsxtnm389[0+1]), jsxtnm387])
                        let jsxtnm391 = XATSDAPP(loop_5916(XATSP1CN("list_cons", jsxtnm389[1+1]), jsxtnm390))
                        jsxtnm392 = jsxtnm391
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm392
                    return jsxtnm392
                  } // endfun(loop_5916)
                  let jsxtnm393 = XATSDAPP(loop_5916(jsxtnm384, jsxtnm385))
                  jsxtnm394 = jsxtnm393
                } // endlet
                // I1CMP:return:jsxtnm394
                return jsxtnm394
              } // endtimp(list_rappendx0_vt(1080))
              let jsxtnm396 = XATSDAPP(jsxtnm395(XATSP1CN("list_cons", jsxtnm383[0+1]), jsxtnm361))
              let jsxtnm397 = XATSDAPP(loop_4902(XATSP1CN("list_cons", jsxtnm383[1+1]), jsxtnm396))
              jsxtnm398 = jsxtnm397
              break // cls
            } // gpt
            // } // cls
            XATS000_cfail()
          } while (false) // end-of(do)
          // I1CMP:return:jsxtnm398
          return jsxtnm398
        } // endfun(loop_4902)
        let jsxtnm399 = XATSDAPP(loop_4902(jsxtnm357, jsxtnm359))
        jsxtnm400 = jsxtnm399
      } // endlet
      // I1CMP:return:jsxtnm400
      return jsxtnm400
    } // endtimp(list_list$concat_vt(2174))
    let jsxtnm402 = XATSDAPP(jsxtnm401(jsxtnm356))
    let jsxtnm403 = XATSCAST("list_vt2t_17651", [jsxtnm402])
    // I1CMP:return:jsxtnm403
    return jsxtnm403
  } // endtimp(list_list$concat(2173))
  // LCSRCsome1(Game-of-24.dats)@(5439(line=310,offs=1)--5452(line=310,offs=14))
  // I0Etapq(I0Ecst(list_map$f1un(1117));$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(list_map$f1un(1117);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(8182(line=535,offs=1)--8263(line=539,offs=37)))
  // T1IMPallx(list_map$f1un(1117)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6396],T2Pcst(expr)),@(y0[6397],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_map$f1un(1117);$list(@(x0[3020],T2Pvar(x0[6396])),@(y0[3021],T2Pvar(y0[6397])))))))
  let jsxtnm494
  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(8227(line=539,offs=1)--8245(line=539,offs=19))
  // I0Etapq(I0Ecst(gseq_map$f1un_list(411));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6396]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[6396]))),T2JAG($list(T2Pvar(y0[6397])))))
  // T1IMPallx(gseq_map$f1un_list(411);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14088(line=966,offs=1)--14219(line=974,offs=43)))
  // T1IMPallx(gseq_map$f1un_list(411)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5252],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5253],T2Pcst(expr)),@(y0[5254],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_list(411);$list(@(xs[1221],T2Pvar(xs[5252])),@(x0[1222],T2Pvar(x0[5253])),@(y0[1223],T2Pvar(y0[5254])))))))
  let jsxtnm493 = function (arg1, arg2) { // timp: gseq_map$f1un_list(411)
    let jsxtnm405 = arg1
    let jsxtnm406 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14177(line=974,offs=1)--14196(line=974,offs=20))
    // I0Etapq(I0Ecst(gseq_map$f1un_llist(412));$list(T2JAG($list(T2Pvar(xs[5252]))),T2JAG($list(T2Pvar(x0[5253]))),T2JAG($list(T2Pvar(y0[5254])))))
    // T1IMPallx(gseq_map$f1un_llist(412);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14369(line=988,offs=1)--14531(line=1000,offs=2)))
    // T1IMPallx(gseq_map$f1un_llist(412)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5258],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5259],T2Pcst(expr)),@(y0[5260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_llist(412);$list(@(xs[1224],T2Pvar(xs[5258])),@(x0[1225],T2Pvar(x0[5259])),@(y0[1226],T2Pvar(y0[5260])))))))
    let jsxtnm490 = function (arg1, arg2) { // timp: gseq_map$f1un_llist(412)
      let jsxtnm407 = arg1
      let jsxtnm408 = arg2
      // I1CMP:start
      let jsxtnm489 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14485(line=998,offs=1)--14529(line=999,offs=36)))
        // I1Dimplmnt0(DIMPLone2(map$fopr(62);$list(@(x0[413],T2Pvar(x0[5259])),@(y0[414],T2Pvar(y0[5260]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14445(line=995,offs=1)--14459(line=995,offs=15))
        // I0Etapq(I0Ecst(gseq_map_llist(408));$list(T2JAG($list(T2Pvar(xs[5258]))),T2JAG($list(T2Pvar(x0[5259]))),T2JAG($list(T2Pvar(y0[5260])))))
        // T1IMPallx(gseq_map_llist(408);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14246(line=978,offs=1)--14365(line=986,offs=32)))
        // T1IMPallx(gseq_map_llist(408)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5255],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5256],T2Pcst(expr)),@(y0[5257],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_llist(408);$list(@(xs[1212],T2Pvar(xs[5255])),@(x0[1213],T2Pvar(x0[5256])),@(y0[1214],T2Pvar(y0[5257])))))))
        let jsxtnm487 = function (arg1) { // timp: gseq_map_llist(408)
          let jsxtnm411 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14311(line=984,offs=1)--14327(line=984,offs=17))
          // I0Etapq(I0Ecst(strm_vt_listize0(1810));$list(T2JAG($list(T2Pvar(y0[5257])))))
          // T1IMPallx(strm_vt_listize0(1810);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6447(line=405,offs=1)--6542(line=410,offs=28)))
          // T1IMPallx(strm_vt_listize0(1810)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7259],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(1810);$list(@(x0[4665],T2Pvar(x0[7259])))))))
          let jsxtnm448 = function (arg1) { // timp: strm_vt_listize0(1810)
            let jsxtnm412 = arg1
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6494(line=409,offs=1)--6510(line=409,offs=17))
            // I0Etapq(I0Ecst(list_vt_reverse0(1684));$list(T2JAG($list(T2Pvar(x0[7259])))))
            // T1IMPallx(list_vt_reverse0(1684);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5949(line=396,offs=1)--6036(line=399,offs=46)))
            // T1IMPallx(list_vt_reverse0(1684)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[7134],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(1684);$list(@(x0[4433],T2Pvar(a[7134])))))))
            let jsxtnm431 = function (arg1) { // timp: list_vt_reverse0(1684)
              let jsxtnm413 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5991(line=399,offs=1)--6008(line=399,offs=18))
              // I0Etapq(I0Ecst(list_vt_rappend00(1687));$list(T2JAG($list(T2Pvar(a[7134])))))
              // T1IMPallx(list_vt_rappend00(1687);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5476(line=360,offs=1)--5880(line=392,offs=2)))
              // T1IMPallx(list_vt_rappend00(1687)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[7131],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(1687);$list(@(x0[4440],T2Pvar(a[7131])))))))
              let jsxtnm428 = function (arg1, arg2) { // timp: list_vt_rappend00(1687)
                let jsxtnm414 = arg1
                let jsxtnm415 = arg2
                // I1CMP:start
                let jsxtnm427 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5555(line=368,offs=1)--5841(line=390,offs=2)))
                  // I1FUNDCL
                  function loop_5558(arg1, arg2)
                  { // fun
                    let jsxtnm416 = arg1
                    let jsxtnm417 = arg2
                    // I1CMP:start
                    let jsxtnm425 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(418);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm416, XATSCTAG("list_vt_nil",0))) { // gpt
                        let jsxtnm418 = jsxtnm416
                        jsxtnm425 = jsxtnm417
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(419);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                      if (XATS000_ctgeq(jsxtnm416, XATSCTAG("list_vt_cons",1))) { // gpt
                        let jsxtnm419 = jsxtnm416
                        let jsxtnm424 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5729(line=384,offs=3)--5744(line=384,offs=18)))
                          // I1VALDCL
                          let jsxtnm421
                          let jsxtnm420 = XATSPCON(jsxtnm416,1)
                          jsxtnm421 = jsxtnm420
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5747(line=385,offs=3)--5769(line=385,offs=25)))
                          // I1VALDCL
                          let jsxtnm422
                          XATS000_assgn(XATSLPCN(1, jsxtnm416), jsxtnm417)
                          jsxtnm422 = []
                          XATS000_patck(true)
                          XATS000_fold(jsxtnm416)
                          let jsxtnm423 = XATSDAPP(loop_5558(jsxtnm421, jsxtnm416))
                          jsxtnm424 = jsxtnm423
                        } // endlet
                        jsxtnm425 = jsxtnm424
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm425
                    return jsxtnm425
                  } // endfun(loop_5558)
                  let jsxtnm426 = XATSDAPP(loop_5558(jsxtnm414, jsxtnm415))
                  jsxtnm427 = jsxtnm426
                } // endlet
                // I1CMP:return:jsxtnm427
                return jsxtnm427
              } // endtimp(list_vt_rappend00(1687))
              let jsxtnm429 = XATSCAPP("list_vt_nil", [0])
              let jsxtnm430 = XATSDAPP(jsxtnm428(jsxtnm413, jsxtnm429))
              // I1CMP:return:jsxtnm430
              return jsxtnm430
            } // endtimp(list_vt_reverse0(1684))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6516(line=410,offs=2)--6533(line=410,offs=19))
            // I0Etapq(I0Ecst(strm_vt_rlistize0(1812));$list(T2JAG($list(T2Pvar(x0[7259])))))
            // T1IMPallx(strm_vt_rlistize0(1812);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6546(line=412,offs=1)--6825(line=433,offs=2)))
            // T1IMPallx(strm_vt_rlistize0(1812)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(1812);$list(@(x0[4668],T2Pvar(x0[7260])))))))
            let jsxtnm445 = function (arg1) { // timp: strm_vt_rlistize0(1812)
              let jsxtnm432 = arg1
              // I1CMP:start
              let jsxtnm444 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6623(line=420,offs=1)--6645(line=420,offs=23)))
                // I1VALDCL
                let jsxtnm434
                let jsxtnm433 = XATSCAPP("list_vt_nil", [0])
                jsxtnm434 = jsxtnm433
                XATS000_patck(true)
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6649(line=422,offs=1)--6823(line=432,offs=42)))
                // I1FUNDCL
                function loop_6652(arg1, arg2)
                { // fun
                  let jsxtnm435 = arg1
                  let jsxtnm436 = arg2
                  // I1CMP:start
                  let jsxtnm437 = XATS000_dl1az(jsxtnm435)
                  let jsxtnm442 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(438);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                    if (XATS000_ctgeq(jsxtnm437, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                      let jsxtnm438 = jsxtnm437
                      jsxtnm442 = jsxtnm436
                      break // cls
                    } // gpt
                    // } // cls
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(439);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(3685)),I0Pvar(xs(3686)))));$list(@(x1(3685),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(439));0)),@(xs(3686),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(439));1)))))
                    if (XATS000_ctgeq(jsxtnm437, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                      let jsxtnm439 = jsxtnm437
                      let jsxtnm440 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm439[0+1]), jsxtnm436])
                      let jsxtnm441 = XATSDAPP(loop_6652(XATSP1CN("strmcon_vt_cons", jsxtnm439[1+1]), jsxtnm440))
                      jsxtnm442 = jsxtnm441
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm442
                  return jsxtnm442
                } // endfun(loop_6652)
                let jsxtnm443 = XATSDAPP(loop_6652(jsxtnm432, jsxtnm434))
                jsxtnm444 = jsxtnm443
              } // endlet
              // I1CMP:return:jsxtnm444
              return jsxtnm444
            } // endtimp(strm_vt_rlistize0(1812))
            let jsxtnm446 = XATSDAPP(jsxtnm445(jsxtnm412))
            let jsxtnm447 = XATSDAPP(jsxtnm431(jsxtnm446))
            // I1CMP:return:jsxtnm447
            return jsxtnm447
          } // endtimp(strm_vt_listize0(1810))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14334(line=986,offs=1)--14348(line=986,offs=15))
          // I0Etapq(I0Ecst(gseq_map_lstrm(409));$list(T2JAG($list(T2Pvar(xs[5255]))),T2JAG($list(T2Pvar(x0[5256]))),T2JAG($list(T2Pvar(y0[5257])))))
          // T1IMPallx(gseq_map_lstrm(409);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14597(line=1004,offs=1)--14765(line=1015,offs=2)))
          // T1IMPallx(gseq_map_lstrm(409)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5261],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5262],T2Pcst(expr)),@(y0[5263],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_lstrm(409);$list(@(xs[1215],T2Pvar(xs[5261])),@(x0[1216],T2Pvar(x0[5262])),@(y0[1217],T2Pvar(y0[5263])))))))
          let jsxtnm484 = function (arg1) { // timp: gseq_map_lstrm(409)
            let jsxtnm449 = arg1
            // I1CMP:start
            let jsxtnm483 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14718(line=1013,offs=1)--14763(line=1014,offs=37)))
              // I1Dimplmnt0(DIMPLone2(map$fopr0(1217);$list(@(x0[3191],T2Pvar(x0[5262])),@(y0[3192],T2Pvar(y0[5263]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14662(line=1010,offs=1)--14674(line=1010,offs=13))
              // I0Etapq(I0Ecst(strm_vt_map0(1794));$list(T2JAG($list(T2Pvar(x0[5262]))),T2JAG($list(T2Pvar(y0[5263])))))
              // T1IMPallx(strm_vt_map0(1794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3697(line=202,offs=1)--3980(line=225,offs=2)))
              // T1IMPallx(strm_vt_map0(1794)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7246],T2Pcst(expr)),@(y0[7247],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(1794);$list(@(x0[4634],T2Pvar(x0[7246])),@(y0[4635],T2Pvar(y0[7247])))))))
              let jsxtnm467 = function (arg1) { // timp: strm_vt_map0(1794)
                let jsxtnm450 = arg1
                // I1CMP:start
                let jsxtnm466 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3775(line=210,offs=1)--3978(line=224,offs=2)))
                  // I1FUNDCL
                  function auxmain_3778(arg1)
                  { // fun
                    let jsxtnm451 = arg1
                    // I1CMP:start
                    let jsxtnm464 = function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm452 = XATS000_dl1az(jsxtnm451)
                      let jsxtnm463 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(453);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm452, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                          let jsxtnm453 = jsxtnm452
                          let jsxtnm454 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm463 = jsxtnm454
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(455);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(3650)),I0Pvar(xs(3651)))));$list(@(x1(3650),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(455));0)),@(xs(3651),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(455));1)))))
                        if (XATS000_ctgeq(jsxtnm452, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                          let jsxtnm455 = jsxtnm452
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3941(line=223,offs=2)--3950(line=223,offs=11))
                          // I0Etapq(I0Ecst(map$fopr0(1217));$list(T2JAG($list(T2Pvar(x0[7246]))),T2JAG($list(T2Pvar(y0[7247])))))
                          // T1IMPallx(map$fopr0(1217);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14718(line=1013,offs=1)--14763(line=1014,offs=37)))
                          // T1IMPallx(map$fopr0(1217)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5261],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5262],T2Pcst(expr)),@(y0[5263],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1217);$list(@(x0[3191],T2Pcst(expr)),@(y0[3192],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm459
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14747(line=1014,offs=21)--14755(line=1014,offs=29))
                          // I0Etapq(I0Ecst(map$fopr(62));$list(T2JAG($list(T2Pvar(x0[5262]))),T2JAG($list(T2Pvar(y0[5263])))))
                          // T1IMPallx(map$fopr(62);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14485(line=998,offs=1)--14529(line=999,offs=36)))
                          // T1IMPallx(map$fopr(62)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5258],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5259],T2Pcst(expr)),@(y0[5260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(62);$list(@(x0[413],T2Pcst(expr)),@(y0[414],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm458 = function (arg1) { // timp: map$fopr(62)
                            let jsxtnm456 = arg1
                            // I1CMP:start
                            let jsxtnm457 = XATSDAPP(jsxtnm408(jsxtnm456))
                            // I1CMP:return:jsxtnm457
                            return jsxtnm457
                          } // endtimp(map$fopr(62))
                          jsxtnm459 = jsxtnm458
                          let jsxtnm460 = XATSDAPP(jsxtnm459(XATSP1CN("strmcon_vt_cons", jsxtnm455[0+1])))
                          let jsxtnm461 = XATSDAPP(auxmain_3778(XATSP1CN("strmcon_vt_cons", jsxtnm455[1+1])))
                          let jsxtnm462 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm460, jsxtnm461])
                          jsxtnm463 = jsxtnm462
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm463
                      return jsxtnm463
                    } // endfun(l1azy)
                    // I1CMP:return:jsxtnm464
                    return jsxtnm464
                  } // endfun(auxmain_3778)
                  let jsxtnm465 = XATSDAPP(auxmain_3778(jsxtnm450))
                  jsxtnm466 = jsxtnm465
                } // endlet
                // I1CMP:return:jsxtnm466
                return jsxtnm466
              } // endtimp(strm_vt_map0(1794))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14684(line=1011,offs=2)--14696(line=1011,offs=14))
              // I0Etapq(I0Ecst(gseq_strmize(355));$list(T2JAG($list(T2Pvar(xs[5261]))),T2JAG($list(T2Pvar(x0[5262])))))
              // T1IMPallx(gseq_strmize(355);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4975(line=314,offs=1)--5039(line=316,offs=46)))
              // T1IMPallx(gseq_strmize(355)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6381],T2Pcst(expr)),@(x0[6381],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_strmize(355);$list(@(xs[1045],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6381])))),@(x0[1046],T2Pvar(x0[6381])))))))
              let jsxtnm480
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5023(line=316,offs=30)--5035(line=316,offs=42))
              // I0Etapq(I0Ecst(list_strmize(1092));$list(T2JAG($list(T2Pvar(x0[6381])))))
              // T1IMPallx(list_strmize(1092);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4716(line=289,offs=1)--4935(line=312,offs=2)))
              // T1IMPallx(list_strmize(1092)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6380],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_strmize(1092);$list(@(a[2991],T2Pvar(x0[6380])))))))
              let jsxtnm479 = function (arg1) { // timp: list_strmize(1092)
                let jsxtnm468 = arg1
                // I1CMP:start
                let jsxtnm478 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4790(line=298,offs=1)--4930(line=310,offs=2)))
                  // I1FUNDCL
                  function auxmain_4793(arg1)
                  { // fun
                    let jsxtnm469 = arg1
                    // I1CMP:start
                    let jsxtnm476 = function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm475 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(470);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm469, XATSCTAG("list_nil",0))) { // gpt
                          let jsxtnm470 = jsxtnm469
                          let jsxtnm471 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm475 = jsxtnm471
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(472);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2300)),I0Pvar(xs(2301))));$list(@(x0(2300),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(472));0)),@(xs(2301),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(472));1)))))
                        if (XATS000_ctgeq(jsxtnm469, XATSCTAG("list_cons",1))) { // gpt
                          let jsxtnm472 = jsxtnm469
                          let jsxtnm473 = XATSDAPP(auxmain_4793(XATSP1CN("list_cons", jsxtnm472[1+1])))
                          let jsxtnm474 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("list_cons", jsxtnm472[0+1]), jsxtnm473])
                          jsxtnm475 = jsxtnm474
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm475
                      return jsxtnm475
                    } // endfun(l1azy)
                    // I1CMP:return:jsxtnm476
                    return jsxtnm476
                  } // endfun(auxmain_4793)
                  let jsxtnm477 = XATSDAPP(auxmain_4793(jsxtnm468))
                  jsxtnm478 = jsxtnm477
                } // endlet
                // I1CMP:return:jsxtnm478
                return jsxtnm478
              } // endtimp(list_strmize(1092))
              jsxtnm480 = jsxtnm479
              let jsxtnm481 = XATSDAPP(jsxtnm480(jsxtnm449))
              let jsxtnm482 = XATSDAPP(jsxtnm467(jsxtnm481))
              jsxtnm483 = jsxtnm482
            } // endlet
            // I1CMP:return:jsxtnm483
            return jsxtnm483
          } // endtimp(gseq_map_lstrm(409))
          let jsxtnm485 = XATSDAPP(jsxtnm484(jsxtnm411))
          let jsxtnm486 = XATSDAPP(jsxtnm448(jsxtnm485))
          // I1CMP:return:jsxtnm486
          return jsxtnm486
        } // endtimp(gseq_map_llist(408))
        let jsxtnm488 = XATSDAPP(jsxtnm487(jsxtnm407))
        jsxtnm489 = jsxtnm488
      } // endlet
      // I1CMP:return:jsxtnm489
      return jsxtnm489
    } // endtimp(gseq_map$f1un_llist(412))
    let jsxtnm491 = XATSDAPP(jsxtnm490(jsxtnm405, jsxtnm406))
    let jsxtnm492 = XATSCAST("list_vt2t_17651", [jsxtnm491])
    // I1CMP:return:jsxtnm492
    return jsxtnm492
  } // endtimp(gseq_map$f1un_list(411))
  jsxtnm494 = jsxtnm493
  let jsxtnm497 = function (arg1) { // lam0(T_LAM(0))
    let jsxtnm495 = arg1
    // I1CMP:start
    let jsxtnm496 = XATSDAPP(expr_aops$expr_3899(jsxtnm495, jsxtnm355))
    // I1CMP:return:jsxtnm496
    return jsxtnm496
  } // endfun(lam0)
  let jsxtnm498 = XATSDAPP(jsxtnm494(jsxtnm354, jsxtnm497))
  let jsxtnm499 = XATSDAPP(jsxtnm404(jsxtnm498))
  // I1CMP:return:jsxtnm499
  return jsxtnm499
} // endfun(exprlst_aops$expr_5353)
// LCSRCsome1(Game-of-24.dats)@(5482(line=311,offs=1)--5526(line=311,offs=45))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();aops;D2PTMsome(1000;D2ITMvar(exprlst_aops$expr(4300)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(5530(line=313,offs=1)--5664(line=318,offs=43)))
// I1FUNDCL
function exprlst_aops$exprlst_5533(arg1, arg2)
{ // fun
  let jsxtnm500 = arg1
  let jsxtnm501 = arg2
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(5604(line=317,offs=1)--5620(line=317,offs=17))
  // I0Etapq(I0Ecst(list_list$concat(2173));$list(T2JAG($list(T2Pcst(expr)))))
  // T1IMPallx(list_list$concat(2173);LCSRCsome1(Game-of-24.dats)@(4690(line=261,offs=1)--4780(line=266,offs=29)))
  // T1IMPallx(list_list$concat(2173)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7501],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat(2173);$list(@(a[7499],T2Pvar(a[7501])))))))
  let jsxtnm550 = function (arg1) { // timp: list_list$concat(2173)
    let jsxtnm502 = arg1
    // I1CMP:start
    // LCSRCsome1(Game-of-24.dats)@(4752(line=266,offs=1)--4771(line=266,offs=20))
    // I0Etapq(I0Ecst(list_list$concat_vt(2174));$list(T2JAG($list(T2Pvar(a[7501])))))
    // T1IMPallx(list_list$concat_vt(2174);LCSRCsome1(Game-of-24.dats)@(4784(line=268,offs=1)--5085(line=292,offs=2)))
    // T1IMPallx(list_list$concat_vt(2174)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7502],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_list$concat_vt(2174);$list(@(a[7500],T2Pvar(a[7502])))))))
    let jsxtnm547 = function (arg1) { // timp: list_list$concat_vt(2174)
      let jsxtnm503 = arg1
      // I1CMP:start
      let jsxtnm546 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(4869(line=276,offs=1)--4890(line=276,offs=22)))
        // I1VALDCL
        let jsxtnm505
        let jsxtnm504 = XATSCAPP("list_vt_nil", [0])
        jsxtnm505 = jsxtnm504
        XATS000_patck(true)
        // I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(4899(line=278,offs=1)--5080(line=290,offs=40)))
        // I1FUNDCL
        function loop_4902(arg1, arg2)
        { // fun
          let jsxtnm506 = arg1
          let jsxtnm507 = arg2
          // I1CMP:start
          let jsxtnm544 // cas
          do {
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(508);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
            if (XATS000_ctgeq(jsxtnm506, XATSCTAG("list_nil",0))) { // gpt
              let jsxtnm508 = jsxtnm506
              // LCSRCsome1(Game-of-24.dats)@(4994(line=287,offs=1)--5010(line=287,offs=17))
              // I0Etapq(I0Ecst(list_vt_reverse0(1684));$list(T2JAG($list(T2Pvar(a[7502])))))
              // T1IMPallx(list_vt_reverse0(1684);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5949(line=396,offs=1)--6036(line=399,offs=46)))
              // T1IMPallx(list_vt_reverse0(1684)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7134],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(1684);$list(@(x0[4433],T2Pvar(a[7134])))))))
              let jsxtnm527 = function (arg1) { // timp: list_vt_reverse0(1684)
                let jsxtnm509 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5991(line=399,offs=1)--6008(line=399,offs=18))
                // I0Etapq(I0Ecst(list_vt_rappend00(1687));$list(T2JAG($list(T2Pvar(a[7134])))))
                // T1IMPallx(list_vt_rappend00(1687);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5476(line=360,offs=1)--5880(line=392,offs=2)))
                // T1IMPallx(list_vt_rappend00(1687)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7131],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(1687);$list(@(x0[4440],T2Pvar(a[7131])))))))
                let jsxtnm524 = function (arg1, arg2) { // timp: list_vt_rappend00(1687)
                  let jsxtnm510 = arg1
                  let jsxtnm511 = arg2
                  // I1CMP:start
                  let jsxtnm523 // let
                  { // let
                    // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5555(line=368,offs=1)--5841(line=390,offs=2)))
                    // I1FUNDCL
                    function loop_5558(arg1, arg2)
                    { // fun
                      let jsxtnm512 = arg1
                      let jsxtnm513 = arg2
                      // I1CMP:start
                      let jsxtnm521 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(514);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm512, XATSCTAG("list_vt_nil",0))) { // gpt
                          let jsxtnm514 = jsxtnm512
                          jsxtnm521 = jsxtnm513
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(515);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                        if (XATS000_ctgeq(jsxtnm512, XATSCTAG("list_vt_cons",1))) { // gpt
                          let jsxtnm515 = jsxtnm512
                          let jsxtnm520 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5729(line=384,offs=3)--5744(line=384,offs=18)))
                            // I1VALDCL
                            let jsxtnm517
                            let jsxtnm516 = XATSPCON(jsxtnm512,1)
                            jsxtnm517 = jsxtnm516
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5747(line=385,offs=3)--5769(line=385,offs=25)))
                            // I1VALDCL
                            let jsxtnm518
                            XATS000_assgn(XATSLPCN(1, jsxtnm512), jsxtnm513)
                            jsxtnm518 = []
                            XATS000_patck(true)
                            XATS000_fold(jsxtnm512)
                            let jsxtnm519 = XATSDAPP(loop_5558(jsxtnm517, jsxtnm512))
                            jsxtnm520 = jsxtnm519
                          } // endlet
                          jsxtnm521 = jsxtnm520
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm521
                      return jsxtnm521
                    } // endfun(loop_5558)
                    let jsxtnm522 = XATSDAPP(loop_5558(jsxtnm510, jsxtnm511))
                    jsxtnm523 = jsxtnm522
                  } // endlet
                  // I1CMP:return:jsxtnm523
                  return jsxtnm523
                } // endtimp(list_vt_rappend00(1687))
                let jsxtnm525 = XATSCAPP("list_vt_nil", [0])
                let jsxtnm526 = XATSDAPP(jsxtnm524(jsxtnm509, jsxtnm525))
                // I1CMP:return:jsxtnm526
                return jsxtnm526
              } // endtimp(list_vt_reverse0(1684))
              let jsxtnm528 = XATSDAPP(jsxtnm527(jsxtnm507))
              jsxtnm544 = jsxtnm528
              break // cls
            } // gpt
            // } // cls
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(529);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(xs1(4294)),I0Pvar(xss(4295))));$list(@(xs1(4294),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(529));0)),@(xss(4295),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(529));1)))))
            if (XATS000_ctgeq(jsxtnm506, XATSCTAG("list_cons",1))) { // gpt
              let jsxtnm529 = jsxtnm506
              // LCSRCsome1(Game-of-24.dats)@(5051(line=290,offs=11)--5068(line=290,offs=28))
              // I0Etapq(I0Ecst(list_rappendx0_vt(1080));$list(T2JAG($list(T2Pvar(a[7502])))))
              // T1IMPallx(list_rappendx0_vt(1080);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5834(line=385,offs=1)--6099(line=407,offs=2)))
              // T1IMPallx(list_rappendx0_vt(1080)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6333],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_rappendx0_vt(1080);$list(@(a[2972],T2Pvar(x0[6333])))))))
              let jsxtnm541 = function (arg1, arg2) { // timp: list_rappendx0_vt(1080)
                let jsxtnm530 = arg1
                let jsxtnm531 = arg2
                // I1CMP:start
                let jsxtnm540 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5913(line=393,offs=1)--6089(line=405,offs=34)))
                  // I1FUNDCL
                  function loop_5916(arg1, arg2)
                  { // fun
                    let jsxtnm532 = arg1
                    let jsxtnm533 = arg2
                    // I1CMP:start
                    let jsxtnm538 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(534);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                      if (XATS000_ctgeq(jsxtnm532, XATSCTAG("list_nil",0))) { // gpt
                        let jsxtnm534 = jsxtnm532
                        jsxtnm538 = jsxtnm533
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(535);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2232)),I0Pvar(xs(2233))));$list(@(x0(2232),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(535));0)),@(xs(2233),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(535));1)))))
                      if (XATS000_ctgeq(jsxtnm532, XATSCTAG("list_cons",1))) { // gpt
                        let jsxtnm535 = jsxtnm532
                        let jsxtnm536 = XATSCAPP("list_vt_cons", [1, XATSP1CN("list_cons", jsxtnm535[0+1]), jsxtnm533])
                        let jsxtnm537 = XATSDAPP(loop_5916(XATSP1CN("list_cons", jsxtnm535[1+1]), jsxtnm536))
                        jsxtnm538 = jsxtnm537
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm538
                    return jsxtnm538
                  } // endfun(loop_5916)
                  let jsxtnm539 = XATSDAPP(loop_5916(jsxtnm530, jsxtnm531))
                  jsxtnm540 = jsxtnm539
                } // endlet
                // I1CMP:return:jsxtnm540
                return jsxtnm540
              } // endtimp(list_rappendx0_vt(1080))
              let jsxtnm542 = XATSDAPP(jsxtnm541(XATSP1CN("list_cons", jsxtnm529[0+1]), jsxtnm507))
              let jsxtnm543 = XATSDAPP(loop_4902(XATSP1CN("list_cons", jsxtnm529[1+1]), jsxtnm542))
              jsxtnm544 = jsxtnm543
              break // cls
            } // gpt
            // } // cls
            XATS000_cfail()
          } while (false) // end-of(do)
          // I1CMP:return:jsxtnm544
          return jsxtnm544
        } // endfun(loop_4902)
        let jsxtnm545 = XATSDAPP(loop_4902(jsxtnm503, jsxtnm505))
        jsxtnm546 = jsxtnm545
      } // endlet
      // I1CMP:return:jsxtnm546
      return jsxtnm546
    } // endtimp(list_list$concat_vt(2174))
    let jsxtnm548 = XATSDAPP(jsxtnm547(jsxtnm502))
    let jsxtnm549 = XATSCAST("list_vt2t_17651", [jsxtnm548])
    // I1CMP:return:jsxtnm549
    return jsxtnm549
  } // endtimp(list_list$concat(2173))
  // LCSRCsome1(Game-of-24.dats)@(5622(line=318,offs=1)--5635(line=318,offs=14))
  // I0Etapq(I0Ecst(list_map$f1un(1117));$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(list_map$f1un(1117);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(8182(line=535,offs=1)--8263(line=539,offs=37)))
  // T1IMPallx(list_map$f1un(1117)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6396],T2Pcst(expr)),@(y0[6397],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_map$f1un(1117);$list(@(x0[3020],T2Pvar(x0[6396])),@(y0[3021],T2Pvar(y0[6397])))))))
  let jsxtnm640
  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(8227(line=539,offs=1)--8245(line=539,offs=19))
  // I0Etapq(I0Ecst(gseq_map$f1un_list(411));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6396]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[6396]))),T2JAG($list(T2Pvar(y0[6397])))))
  // T1IMPallx(gseq_map$f1un_list(411);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14088(line=966,offs=1)--14219(line=974,offs=43)))
  // T1IMPallx(gseq_map$f1un_list(411)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5252],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5253],T2Pcst(expr)),@(y0[5254],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_list(411);$list(@(xs[1221],T2Pvar(xs[5252])),@(x0[1222],T2Pvar(x0[5253])),@(y0[1223],T2Pvar(y0[5254])))))))
  let jsxtnm639 = function (arg1, arg2) { // timp: gseq_map$f1un_list(411)
    let jsxtnm551 = arg1
    let jsxtnm552 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14177(line=974,offs=1)--14196(line=974,offs=20))
    // I0Etapq(I0Ecst(gseq_map$f1un_llist(412));$list(T2JAG($list(T2Pvar(xs[5252]))),T2JAG($list(T2Pvar(x0[5253]))),T2JAG($list(T2Pvar(y0[5254])))))
    // T1IMPallx(gseq_map$f1un_llist(412);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14369(line=988,offs=1)--14531(line=1000,offs=2)))
    // T1IMPallx(gseq_map$f1un_llist(412)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5258],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5259],T2Pcst(expr)),@(y0[5260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map$f1un_llist(412);$list(@(xs[1224],T2Pvar(xs[5258])),@(x0[1225],T2Pvar(x0[5259])),@(y0[1226],T2Pvar(y0[5260])))))))
    let jsxtnm636 = function (arg1, arg2) { // timp: gseq_map$f1un_llist(412)
      let jsxtnm553 = arg1
      let jsxtnm554 = arg2
      // I1CMP:start
      let jsxtnm635 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14485(line=998,offs=1)--14529(line=999,offs=36)))
        // I1Dimplmnt0(DIMPLone2(map$fopr(62);$list(@(x0[413],T2Pvar(x0[5259])),@(y0[414],T2Pvar(y0[5260]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14445(line=995,offs=1)--14459(line=995,offs=15))
        // I0Etapq(I0Ecst(gseq_map_llist(408));$list(T2JAG($list(T2Pvar(xs[5258]))),T2JAG($list(T2Pvar(x0[5259]))),T2JAG($list(T2Pvar(y0[5260])))))
        // T1IMPallx(gseq_map_llist(408);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14246(line=978,offs=1)--14365(line=986,offs=32)))
        // T1IMPallx(gseq_map_llist(408)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5255],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5256],T2Pcst(expr)),@(y0[5257],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_llist(408);$list(@(xs[1212],T2Pvar(xs[5255])),@(x0[1213],T2Pvar(x0[5256])),@(y0[1214],T2Pvar(y0[5257])))))))
        let jsxtnm633 = function (arg1) { // timp: gseq_map_llist(408)
          let jsxtnm557 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14311(line=984,offs=1)--14327(line=984,offs=17))
          // I0Etapq(I0Ecst(strm_vt_listize0(1810));$list(T2JAG($list(T2Pvar(y0[5257])))))
          // T1IMPallx(strm_vt_listize0(1810);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6447(line=405,offs=1)--6542(line=410,offs=28)))
          // T1IMPallx(strm_vt_listize0(1810)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7259],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(1810);$list(@(x0[4665],T2Pvar(x0[7259])))))))
          let jsxtnm594 = function (arg1) { // timp: strm_vt_listize0(1810)
            let jsxtnm558 = arg1
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6494(line=409,offs=1)--6510(line=409,offs=17))
            // I0Etapq(I0Ecst(list_vt_reverse0(1684));$list(T2JAG($list(T2Pvar(x0[7259])))))
            // T1IMPallx(list_vt_reverse0(1684);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5949(line=396,offs=1)--6036(line=399,offs=46)))
            // T1IMPallx(list_vt_reverse0(1684)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[7134],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(1684);$list(@(x0[4433],T2Pvar(a[7134])))))))
            let jsxtnm577 = function (arg1) { // timp: list_vt_reverse0(1684)
              let jsxtnm559 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5991(line=399,offs=1)--6008(line=399,offs=18))
              // I0Etapq(I0Ecst(list_vt_rappend00(1687));$list(T2JAG($list(T2Pvar(a[7134])))))
              // T1IMPallx(list_vt_rappend00(1687);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5476(line=360,offs=1)--5880(line=392,offs=2)))
              // T1IMPallx(list_vt_rappend00(1687)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(a[7131],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(1687);$list(@(x0[4440],T2Pvar(a[7131])))))))
              let jsxtnm574 = function (arg1, arg2) { // timp: list_vt_rappend00(1687)
                let jsxtnm560 = arg1
                let jsxtnm561 = arg2
                // I1CMP:start
                let jsxtnm573 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5555(line=368,offs=1)--5841(line=390,offs=2)))
                  // I1FUNDCL
                  function loop_5558(arg1, arg2)
                  { // fun
                    let jsxtnm562 = arg1
                    let jsxtnm563 = arg2
                    // I1CMP:start
                    let jsxtnm571 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(564);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm562, XATSCTAG("list_vt_nil",0))) { // gpt
                        let jsxtnm564 = jsxtnm562
                        jsxtnm571 = jsxtnm563
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(565);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                      if (XATS000_ctgeq(jsxtnm562, XATSCTAG("list_vt_cons",1))) { // gpt
                        let jsxtnm565 = jsxtnm562
                        let jsxtnm570 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5729(line=384,offs=3)--5744(line=384,offs=18)))
                          // I1VALDCL
                          let jsxtnm567
                          let jsxtnm566 = XATSPCON(jsxtnm562,1)
                          jsxtnm567 = jsxtnm566
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5747(line=385,offs=3)--5769(line=385,offs=25)))
                          // I1VALDCL
                          let jsxtnm568
                          XATS000_assgn(XATSLPCN(1, jsxtnm562), jsxtnm563)
                          jsxtnm568 = []
                          XATS000_patck(true)
                          XATS000_fold(jsxtnm562)
                          let jsxtnm569 = XATSDAPP(loop_5558(jsxtnm567, jsxtnm562))
                          jsxtnm570 = jsxtnm569
                        } // endlet
                        jsxtnm571 = jsxtnm570
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm571
                    return jsxtnm571
                  } // endfun(loop_5558)
                  let jsxtnm572 = XATSDAPP(loop_5558(jsxtnm560, jsxtnm561))
                  jsxtnm573 = jsxtnm572
                } // endlet
                // I1CMP:return:jsxtnm573
                return jsxtnm573
              } // endtimp(list_vt_rappend00(1687))
              let jsxtnm575 = XATSCAPP("list_vt_nil", [0])
              let jsxtnm576 = XATSDAPP(jsxtnm574(jsxtnm559, jsxtnm575))
              // I1CMP:return:jsxtnm576
              return jsxtnm576
            } // endtimp(list_vt_reverse0(1684))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6516(line=410,offs=2)--6533(line=410,offs=19))
            // I0Etapq(I0Ecst(strm_vt_rlistize0(1812));$list(T2JAG($list(T2Pvar(x0[7259])))))
            // T1IMPallx(strm_vt_rlistize0(1812);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6546(line=412,offs=1)--6825(line=433,offs=2)))
            // T1IMPallx(strm_vt_rlistize0(1812)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(1812);$list(@(x0[4668],T2Pvar(x0[7260])))))))
            let jsxtnm591 = function (arg1) { // timp: strm_vt_rlistize0(1812)
              let jsxtnm578 = arg1
              // I1CMP:start
              let jsxtnm590 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6623(line=420,offs=1)--6645(line=420,offs=23)))
                // I1VALDCL
                let jsxtnm580
                let jsxtnm579 = XATSCAPP("list_vt_nil", [0])
                jsxtnm580 = jsxtnm579
                XATS000_patck(true)
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6649(line=422,offs=1)--6823(line=432,offs=42)))
                // I1FUNDCL
                function loop_6652(arg1, arg2)
                { // fun
                  let jsxtnm581 = arg1
                  let jsxtnm582 = arg2
                  // I1CMP:start
                  let jsxtnm583 = XATS000_dl1az(jsxtnm581)
                  let jsxtnm588 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(584);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                    if (XATS000_ctgeq(jsxtnm583, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                      let jsxtnm584 = jsxtnm583
                      jsxtnm588 = jsxtnm582
                      break // cls
                    } // gpt
                    // } // cls
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(585);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(3685)),I0Pvar(xs(3686)))));$list(@(x1(3685),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(585));0)),@(xs(3686),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(585));1)))))
                    if (XATS000_ctgeq(jsxtnm583, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                      let jsxtnm585 = jsxtnm583
                      let jsxtnm586 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm585[0+1]), jsxtnm582])
                      let jsxtnm587 = XATSDAPP(loop_6652(XATSP1CN("strmcon_vt_cons", jsxtnm585[1+1]), jsxtnm586))
                      jsxtnm588 = jsxtnm587
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm588
                  return jsxtnm588
                } // endfun(loop_6652)
                let jsxtnm589 = XATSDAPP(loop_6652(jsxtnm578, jsxtnm580))
                jsxtnm590 = jsxtnm589
              } // endlet
              // I1CMP:return:jsxtnm590
              return jsxtnm590
            } // endtimp(strm_vt_rlistize0(1812))
            let jsxtnm592 = XATSDAPP(jsxtnm591(jsxtnm558))
            let jsxtnm593 = XATSDAPP(jsxtnm577(jsxtnm592))
            // I1CMP:return:jsxtnm593
            return jsxtnm593
          } // endtimp(strm_vt_listize0(1810))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14334(line=986,offs=1)--14348(line=986,offs=15))
          // I0Etapq(I0Ecst(gseq_map_lstrm(409));$list(T2JAG($list(T2Pvar(xs[5255]))),T2JAG($list(T2Pvar(x0[5256]))),T2JAG($list(T2Pvar(y0[5257])))))
          // T1IMPallx(gseq_map_lstrm(409);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14597(line=1004,offs=1)--14765(line=1015,offs=2)))
          // T1IMPallx(gseq_map_lstrm(409)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5261],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5262],T2Pcst(expr)),@(y0[5263],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_map_lstrm(409);$list(@(xs[1215],T2Pvar(xs[5261])),@(x0[1216],T2Pvar(x0[5262])),@(y0[1217],T2Pvar(y0[5263])))))))
          let jsxtnm630 = function (arg1) { // timp: gseq_map_lstrm(409)
            let jsxtnm595 = arg1
            // I1CMP:start
            let jsxtnm629 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14718(line=1013,offs=1)--14763(line=1014,offs=37)))
              // I1Dimplmnt0(DIMPLone2(map$fopr0(1217);$list(@(x0[3191],T2Pvar(x0[5262])),@(y0[3192],T2Pvar(y0[5263]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14662(line=1010,offs=1)--14674(line=1010,offs=13))
              // I0Etapq(I0Ecst(strm_vt_map0(1794));$list(T2JAG($list(T2Pvar(x0[5262]))),T2JAG($list(T2Pvar(y0[5263])))))
              // T1IMPallx(strm_vt_map0(1794);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3697(line=202,offs=1)--3980(line=225,offs=2)))
              // T1IMPallx(strm_vt_map0(1794)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7246],T2Pcst(expr)),@(y0[7247],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(strm_vt_map0(1794);$list(@(x0[4634],T2Pvar(x0[7246])),@(y0[4635],T2Pvar(y0[7247])))))))
              let jsxtnm613 = function (arg1) { // timp: strm_vt_map0(1794)
                let jsxtnm596 = arg1
                // I1CMP:start
                let jsxtnm612 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3775(line=210,offs=1)--3978(line=224,offs=2)))
                  // I1FUNDCL
                  function auxmain_3778(arg1)
                  { // fun
                    let jsxtnm597 = arg1
                    // I1CMP:start
                    let jsxtnm610 = function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm598 = XATS000_dl1az(jsxtnm597)
                      let jsxtnm609 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(599);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                        if (XATS000_ctgeq(jsxtnm598, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                          let jsxtnm599 = jsxtnm598
                          let jsxtnm600 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm609 = jsxtnm600
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(601);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(3650)),I0Pvar(xs(3651)))));$list(@(x1(3650),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(601));0)),@(xs(3651),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(601));1)))))
                        if (XATS000_ctgeq(jsxtnm598, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                          let jsxtnm601 = jsxtnm598
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(3941(line=223,offs=2)--3950(line=223,offs=11))
                          // I0Etapq(I0Ecst(map$fopr0(1217));$list(T2JAG($list(T2Pvar(x0[7246]))),T2JAG($list(T2Pvar(y0[7247])))))
                          // T1IMPallx(map$fopr0(1217);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14718(line=1013,offs=1)--14763(line=1014,offs=37)))
                          // T1IMPallx(map$fopr0(1217)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5261],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5262],T2Pcst(expr)),@(y0[5263],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr0(1217);$list(@(x0[3191],T2Pcst(expr)),@(y0[3192],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm605
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14747(line=1014,offs=21)--14755(line=1014,offs=29))
                          // I0Etapq(I0Ecst(map$fopr(62));$list(T2JAG($list(T2Pvar(x0[5262]))),T2JAG($list(T2Pvar(y0[5263])))))
                          // T1IMPallx(map$fopr(62);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14485(line=998,offs=1)--14529(line=999,offs=36)))
                          // T1IMPallx(map$fopr(62)<$list(T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[5258],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5259],T2Pcst(expr)),@(y0[5260],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(map$fopr(62);$list(@(x0[413],T2Pcst(expr)),@(y0[414],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))))
                          let jsxtnm604 = function (arg1) { // timp: map$fopr(62)
                            let jsxtnm602 = arg1
                            // I1CMP:start
                            let jsxtnm603 = XATSDAPP(jsxtnm554(jsxtnm602))
                            // I1CMP:return:jsxtnm603
                            return jsxtnm603
                          } // endtimp(map$fopr(62))
                          jsxtnm605 = jsxtnm604
                          let jsxtnm606 = XATSDAPP(jsxtnm605(XATSP1CN("strmcon_vt_cons", jsxtnm601[0+1])))
                          let jsxtnm607 = XATSDAPP(auxmain_3778(XATSP1CN("strmcon_vt_cons", jsxtnm601[1+1])))
                          let jsxtnm608 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm606, jsxtnm607])
                          jsxtnm609 = jsxtnm608
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm609
                      return jsxtnm609
                    } // endfun(l1azy)
                    // I1CMP:return:jsxtnm610
                    return jsxtnm610
                  } // endfun(auxmain_3778)
                  let jsxtnm611 = XATSDAPP(auxmain_3778(jsxtnm596))
                  jsxtnm612 = jsxtnm611
                } // endlet
                // I1CMP:return:jsxtnm612
                return jsxtnm612
              } // endtimp(strm_vt_map0(1794))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(14684(line=1011,offs=2)--14696(line=1011,offs=14))
              // I0Etapq(I0Ecst(gseq_strmize(355));$list(T2JAG($list(T2Pvar(xs[5261]))),T2JAG($list(T2Pvar(x0[5262])))))
              // T1IMPallx(gseq_strmize(355);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4975(line=314,offs=1)--5039(line=316,offs=46)))
              // T1IMPallx(gseq_strmize(355)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6381],T2Pcst(expr)),@(x0[6381],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_strmize(355);$list(@(xs[1045],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6381])))),@(x0[1046],T2Pvar(x0[6381])))))))
              let jsxtnm626
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5023(line=316,offs=30)--5035(line=316,offs=42))
              // I0Etapq(I0Ecst(list_strmize(1092));$list(T2JAG($list(T2Pvar(x0[6381])))))
              // T1IMPallx(list_strmize(1092);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4716(line=289,offs=1)--4935(line=312,offs=2)))
              // T1IMPallx(list_strmize(1092)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6380],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_strmize(1092);$list(@(a[2991],T2Pvar(x0[6380])))))))
              let jsxtnm625 = function (arg1) { // timp: list_strmize(1092)
                let jsxtnm614 = arg1
                // I1CMP:start
                let jsxtnm624 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4790(line=298,offs=1)--4930(line=310,offs=2)))
                  // I1FUNDCL
                  function auxmain_4793(arg1)
                  { // fun
                    let jsxtnm615 = arg1
                    // I1CMP:start
                    let jsxtnm622 = function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm621 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(616);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm615, XATSCTAG("list_nil",0))) { // gpt
                          let jsxtnm616 = jsxtnm615
                          let jsxtnm617 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm621 = jsxtnm617
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(618);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2300)),I0Pvar(xs(2301))));$list(@(x0(2300),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(618));0)),@(xs(2301),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(618));1)))))
                        if (XATS000_ctgeq(jsxtnm615, XATSCTAG("list_cons",1))) { // gpt
                          let jsxtnm618 = jsxtnm615
                          let jsxtnm619 = XATSDAPP(auxmain_4793(XATSP1CN("list_cons", jsxtnm618[1+1])))
                          let jsxtnm620 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("list_cons", jsxtnm618[0+1]), jsxtnm619])
                          jsxtnm621 = jsxtnm620
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm621
                      return jsxtnm621
                    } // endfun(l1azy)
                    // I1CMP:return:jsxtnm622
                    return jsxtnm622
                  } // endfun(auxmain_4793)
                  let jsxtnm623 = XATSDAPP(auxmain_4793(jsxtnm614))
                  jsxtnm624 = jsxtnm623
                } // endlet
                // I1CMP:return:jsxtnm624
                return jsxtnm624
              } // endtimp(list_strmize(1092))
              jsxtnm626 = jsxtnm625
              let jsxtnm627 = XATSDAPP(jsxtnm626(jsxtnm595))
              let jsxtnm628 = XATSDAPP(jsxtnm613(jsxtnm627))
              jsxtnm629 = jsxtnm628
            } // endlet
            // I1CMP:return:jsxtnm629
            return jsxtnm629
          } // endtimp(gseq_map_lstrm(409))
          let jsxtnm631 = XATSDAPP(jsxtnm630(jsxtnm557))
          let jsxtnm632 = XATSDAPP(jsxtnm594(jsxtnm631))
          // I1CMP:return:jsxtnm632
          return jsxtnm632
        } // endtimp(gseq_map_llist(408))
        let jsxtnm634 = XATSDAPP(jsxtnm633(jsxtnm553))
        jsxtnm635 = jsxtnm634
      } // endlet
      // I1CMP:return:jsxtnm635
      return jsxtnm635
    } // endtimp(gseq_map$f1un_llist(412))
    let jsxtnm637 = XATSDAPP(jsxtnm636(jsxtnm551, jsxtnm552))
    let jsxtnm638 = XATSCAST("list_vt2t_17651", [jsxtnm637])
    // I1CMP:return:jsxtnm638
    return jsxtnm638
  } // endtimp(gseq_map$f1un_list(411))
  jsxtnm640 = jsxtnm639
  let jsxtnm643 = function (arg1) { // lam0(T_LAM(0))
    let jsxtnm641 = arg1
    // I1CMP:start
    let jsxtnm642 = XATSDAPP(expr_aops$exprlst_5179(jsxtnm641, jsxtnm501))
    // I1CMP:return:jsxtnm642
    return jsxtnm642
  } // endfun(lam0)
  let jsxtnm644 = XATSDAPP(jsxtnm640(jsxtnm500, jsxtnm643))
  let jsxtnm645 = XATSDAPP(jsxtnm550(jsxtnm644))
  // I1CMP:return:jsxtnm645
  return jsxtnm645
} // endfun(exprlst_aops$exprlst_5533)
// LCSRCsome1(Game-of-24.dats)@(5665(line=319,offs=1)--5712(line=319,offs=48))
// I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csymload(T_SRP_SYMLOAD();aops;D2PTMsome(1000;D2ITMvar(exprlst_aops$exprlst(4304)))))))
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(5933(line=332,offs=1)--6007(line=335,offs=22)))
// I1FUNDCL
function sint2_combine_5936(arg1, arg2)
{ // fun
  let jsxtnm646 = arg1
  let jsxtnm647 = arg2
  // I1CMP:start
  let jsxtnm648 = XATSCAPP("Int", [0, jsxtnm646])
  let jsxtnm649 = XATSCAPP("Int", [0, jsxtnm647])
  let jsxtnm650 = XATSDAPP(expr_aops$expr_3899(jsxtnm648, jsxtnm649))
  // I1CMP:return:jsxtnm650
  return jsxtnm650
} // endfun(sint2_combine_5936)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(6008(line=336,offs=1)--6190(line=343,offs=37)))
// I1FUNDCL
function sint3_combine_6011(arg1, arg2, arg3)
{ // fun
  let jsxtnm651 = arg1
  let jsxtnm652 = arg2
  let jsxtnm653 = arg3
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(6071(line=340,offs=1)--6078(line=340,offs=8))
  // I0Etapq(I0Ecst(gs_append_a3(757));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(gs_append_a3(757);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(28276(line=1734,offs=1)--28393(line=1744,offs=4)))
  // T1IMPallx(gs_append_a3(757)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6075],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_append_a3(757);$list(@(x0[2419],T2Pvar(xs[6075])))))))
  let jsxtnm684 = function (arg1, arg2, arg3) { // timp: gs_append_a3(757)
    let jsxtnm654 = arg1
    let jsxtnm655 = arg2
    let jsxtnm656 = arg3
    // I1CMP:start
    let jsxtnm683 // let
    { // let
      // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(28327(line=1739,offs=1)--28360(line=1741,offs=19)))
      // I1FUNDCL
      function f0_28330(arg1, arg2)
      { // fun
        let jsxtnm657 = arg1
        let jsxtnm658 = arg2
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(28342(line=1741,offs=1)--28350(line=1741,offs=9))
        // I0Etapq(I0Ecst(g_append(339));$list(T2JAG($list(T2Pvar(xs[6075])))))
        // T1IMPallx(g_append(339);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4457(line=280,offs=1)--4529(line=284,offs=26)))
        // T1IMPallx(g_append(339)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6322],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(g_append(339);$list(@(xs[1012],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6322])))))))))
        let jsxtnm679
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4504(line=284,offs=1)--4515(line=284,offs=12))
        // I0Etapq(I0Ecst(gseq_append(341));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6322]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[6322]))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6322]),T2Pnone0()))))))
        // T1IMPallx(gseq_append(341);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4541(line=286,offs=1)--4604(line=289,offs=33)))
        // T1IMPallx(gseq_append(341)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6323],T2Pcst(expr)),@(x0[6323],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_append(341);$list(@(xs[1014],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6323])))),@(x0[1015],T2Pvar(x0[6323])),@(ys[1016],T2Pxtv([T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6323]),T2Pnone0()))])))))))
        let jsxtnm678
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4589(line=289,offs=18)--4600(line=289,offs=29))
        // I0Etapq(I0Ecst(list_append(1073));$list(T2JAG($list(T2Pvar(x0[6323])))))
        // T1IMPallx(list_append(1073);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4773(line=304,offs=1)--5153(line=334,offs=4)))
        // T1IMPallx(list_append(1073)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[6325],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_append(1073);$list(@(a[2953],T2Pvar(a[6325])))))))
        let jsxtnm677 = function (arg1, arg2) { // timp: list_append(1073)
          let jsxtnm659 = arg1
          let jsxtnm660 = arg2
          // I1CMP:start
          let jsxtnm676 // let
          { // let
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4826(line=309,offs=1)--5095(line=329,offs=2)))
            // I1FUNDCL
            function loop_4829(arg1, arg2)
            { // fun
              let jsxtnm661 = arg1
              let jsxtnm662 = arg2
              // I1CMP:start
              let jsxtnm671 // cas
              do {
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(663);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                if (XATS000_ctgeq(jsxtnm661, XATSCTAG("list_nil",0))) { // gpt
                  let jsxtnm663 = jsxtnm661
                  XATS000_assgn(XATSADDR(jsxtnm662), jsxtnm660)
                  jsxtnm671 = []
                  break // cls
                } // gpt
                // } // cls
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(664);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2219)),I0Pvar(xs(2220))));$list(@(x0(2219),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(664));0)),@(xs(2220),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(664));1)))))
                if (XATS000_ctgeq(jsxtnm661, XATSCTAG("list_cons",1))) { // gpt
                  let jsxtnm664 = jsxtnm661
                  let jsxtnm670 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4986(line=323,offs=5)--5021(line=324,offs=27)))
                    // I1VALDCL
                    let jsxtnm666
                    let jsxtnm665 = XATSCAPP("list_cons", [1, XATSP1CN("list_cons", jsxtnm664[0+1]), XATSTOP0])
                    XATS000_assgn(XATSADDR(jsxtnm662), jsxtnm665)
                    jsxtnm666 = []
                    XATS000_patck(true)
                    let jsxtnm667 = XATSFLAT(jsxtnm662)
                    let jsxtnm668 = XATSDAPP(loop_4829(XATSP1CN("list_cons", jsxtnm664[1+1]), XATSLPCN(1, jsxtnm667)))
                    let jsxtnm669 = XATSFLAT(jsxtnm662)
                    XATS000_fold(jsxtnm669)
                    jsxtnm670 = []
                  } // endlet
                  jsxtnm671 = jsxtnm670
                  break // cls
                } // gpt
                // } // cls
                XATS000_cfail()
              } while (false) // end-of(do)
              // I1CMP:return:jsxtnm671
              return jsxtnm671
            } // endfun(loop_4829)
            let jsxtnm675 // let
            { // let
              // I1Dvardclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5103(line=332,offs=1)--5118(line=332,offs=16)))
              // I1VARDCL
              let jsxtnm672 = XATSVAR0()
              let jsxtnm673 = XATSDAPP(loop_4829(jsxtnm659, XATSADDR(jsxtnm672)))
              let jsxtnm674 = XATSFLAT(jsxtnm672)
              jsxtnm675 = jsxtnm674
            } // endlet
            jsxtnm676 = jsxtnm675
          } // endlet
          // I1CMP:return:jsxtnm676
          return jsxtnm676
        } // endtimp(list_append(1073))
        jsxtnm678 = jsxtnm677
        jsxtnm679 = jsxtnm678
        let jsxtnm680 = XATSDAPP(jsxtnm679(jsxtnm657, jsxtnm658))
        // I1CMP:return:jsxtnm680
        return jsxtnm680
      } // endfun(f0_28330)
      let jsxtnm681 = XATSDAPP(f0_28330(jsxtnm654, jsxtnm655))
      let jsxtnm682 = XATSDAPP(f0_28330(jsxtnm681, jsxtnm656))
      jsxtnm683 = jsxtnm682
    } // endlet
    // I1CMP:return:jsxtnm683
    return jsxtnm683
  } // endtimp(gs_append_a3(757))
  let jsxtnm685 = XATSCAPP("Int", [0, jsxtnm651])
  let jsxtnm686 = XATSDAPP(sint2_combine_5936(jsxtnm652, jsxtnm653))
  let jsxtnm687 = XATSDAPP(expr_aops$exprlst_5179(jsxtnm685, jsxtnm686))
  let jsxtnm688 = XATSCAPP("Int", [0, jsxtnm652])
  let jsxtnm689 = XATSDAPP(sint2_combine_5936(jsxtnm651, jsxtnm653))
  let jsxtnm690 = XATSDAPP(expr_aops$exprlst_5179(jsxtnm688, jsxtnm689))
  let jsxtnm691 = XATSCAPP("Int", [0, jsxtnm653])
  let jsxtnm692 = XATSDAPP(sint2_combine_5936(jsxtnm651, jsxtnm652))
  let jsxtnm693 = XATSDAPP(expr_aops$exprlst_5179(jsxtnm691, jsxtnm692))
  let jsxtnm694 = XATSDAPP(jsxtnm684(jsxtnm687, jsxtnm690, jsxtnm693))
  // I1CMP:return:jsxtnm694
  return jsxtnm694
} // endfun(sint3_combine_6011)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(6191(line=344,offs=1)--6591(line=355,offs=51)))
// I1FUNDCL
function sint4_combine_6194(arg1, arg2, arg3, arg4)
{ // fun
  let jsxtnm695 = arg1
  let jsxtnm696 = arg2
  let jsxtnm697 = arg3
  let jsxtnm698 = arg4
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(6266(line=348,offs=1)--6273(line=348,offs=8))
  // I0Etapq(I0Ecst(gs_append_a7(761));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))))))
  // T1IMPallx(gs_append_a7(761);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(28936(line=1778,offs=1)--29093(line=1788,offs=4)))
  // T1IMPallx(gs_append_a7(761)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[6079],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_append_a7(761);$list(@(x0[2423],T2Pvar(xs[6079])))))))
  let jsxtnm737 = function (arg1, arg2, arg3, arg4, arg5, arg6, arg7) { // timp: gs_append_a7(761)
    let jsxtnm699 = arg1
    let jsxtnm700 = arg2
    let jsxtnm701 = arg3
    let jsxtnm702 = arg4
    let jsxtnm703 = arg5
    let jsxtnm704 = arg6
    let jsxtnm705 = arg7
    // I1CMP:start
    let jsxtnm736 // let
    { // let
      // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(29003(line=1783,offs=1)--29036(line=1785,offs=19)))
      // I1FUNDCL
      function f0_29006(arg1, arg2)
      { // fun
        let jsxtnm706 = arg1
        let jsxtnm707 = arg2
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(29018(line=1785,offs=1)--29026(line=1785,offs=9))
        // I0Etapq(I0Ecst(g_append(339));$list(T2JAG($list(T2Pvar(xs[6079])))))
        // T1IMPallx(g_append(339);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4457(line=280,offs=1)--4529(line=284,offs=26)))
        // T1IMPallx(g_append(339)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6322],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(g_append(339);$list(@(xs[1012],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6322])))))))))
        let jsxtnm728
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4504(line=284,offs=1)--4515(line=284,offs=12))
        // I0Etapq(I0Ecst(gseq_append(341));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6322]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[6322]))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6322]),T2Pnone0()))))))
        // T1IMPallx(gseq_append(341);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4541(line=286,offs=1)--4604(line=289,offs=33)))
        // T1IMPallx(gseq_append(341)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6323],T2Pcst(expr)),@(x0[6323],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_append(341);$list(@(xs[1014],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6323])))),@(x0[1015],T2Pvar(x0[6323])),@(ys[1016],T2Pxtv([T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6323]),T2Pnone0()))])))))))
        let jsxtnm727
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4589(line=289,offs=18)--4600(line=289,offs=29))
        // I0Etapq(I0Ecst(list_append(1073));$list(T2JAG($list(T2Pvar(x0[6323])))))
        // T1IMPallx(list_append(1073);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4773(line=304,offs=1)--5153(line=334,offs=4)))
        // T1IMPallx(list_append(1073)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[6325],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_append(1073);$list(@(a[2953],T2Pvar(a[6325])))))))
        let jsxtnm726 = function (arg1, arg2) { // timp: list_append(1073)
          let jsxtnm708 = arg1
          let jsxtnm709 = arg2
          // I1CMP:start
          let jsxtnm725 // let
          { // let
            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4826(line=309,offs=1)--5095(line=329,offs=2)))
            // I1FUNDCL
            function loop_4829(arg1, arg2)
            { // fun
              let jsxtnm710 = arg1
              let jsxtnm711 = arg2
              // I1CMP:start
              let jsxtnm720 // cas
              do {
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(712);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                if (XATS000_ctgeq(jsxtnm710, XATSCTAG("list_nil",0))) { // gpt
                  let jsxtnm712 = jsxtnm710
                  XATS000_assgn(XATSADDR(jsxtnm711), jsxtnm709)
                  jsxtnm720 = []
                  break // cls
                } // gpt
                // } // cls
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(713);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2219)),I0Pvar(xs(2220))));$list(@(x0(2219),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(713));0)),@(xs(2220),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(713));1)))))
                if (XATS000_ctgeq(jsxtnm710, XATSCTAG("list_cons",1))) { // gpt
                  let jsxtnm713 = jsxtnm710
                  let jsxtnm719 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(4986(line=323,offs=5)--5021(line=324,offs=27)))
                    // I1VALDCL
                    let jsxtnm715
                    let jsxtnm714 = XATSCAPP("list_cons", [1, XATSP1CN("list_cons", jsxtnm713[0+1]), XATSTOP0])
                    XATS000_assgn(XATSADDR(jsxtnm711), jsxtnm714)
                    jsxtnm715 = []
                    XATS000_patck(true)
                    let jsxtnm716 = XATSFLAT(jsxtnm711)
                    let jsxtnm717 = XATSDAPP(loop_4829(XATSP1CN("list_cons", jsxtnm713[1+1]), XATSLPCN(1, jsxtnm716)))
                    let jsxtnm718 = XATSFLAT(jsxtnm711)
                    XATS000_fold(jsxtnm718)
                    jsxtnm719 = []
                  } // endlet
                  jsxtnm720 = jsxtnm719
                  break // cls
                } // gpt
                // } // cls
                XATS000_cfail()
              } while (false) // end-of(do)
              // I1CMP:return:jsxtnm720
              return jsxtnm720
            } // endfun(loop_4829)
            let jsxtnm724 // let
            { // let
              // I1Dvardclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(5103(line=332,offs=1)--5118(line=332,offs=16)))
              // I1VARDCL
              let jsxtnm721 = XATSVAR0()
              let jsxtnm722 = XATSDAPP(loop_4829(jsxtnm708, XATSADDR(jsxtnm721)))
              let jsxtnm723 = XATSFLAT(jsxtnm721)
              jsxtnm724 = jsxtnm723
            } // endlet
            jsxtnm725 = jsxtnm724
          } // endlet
          // I1CMP:return:jsxtnm725
          return jsxtnm725
        } // endtimp(list_append(1073))
        jsxtnm727 = jsxtnm726
        jsxtnm728 = jsxtnm727
        let jsxtnm729 = XATSDAPP(jsxtnm728(jsxtnm706, jsxtnm707))
        // I1CMP:return:jsxtnm729
        return jsxtnm729
      } // endfun(f0_29006)
      let jsxtnm730 = XATSDAPP(f0_29006(jsxtnm699, jsxtnm700))
      let jsxtnm731 = XATSDAPP(f0_29006(jsxtnm730, jsxtnm701))
      let jsxtnm732 = XATSDAPP(f0_29006(jsxtnm731, jsxtnm702))
      let jsxtnm733 = XATSDAPP(f0_29006(jsxtnm732, jsxtnm703))
      let jsxtnm734 = XATSDAPP(f0_29006(jsxtnm733, jsxtnm704))
      let jsxtnm735 = XATSDAPP(f0_29006(jsxtnm734, jsxtnm705))
      jsxtnm736 = jsxtnm735
    } // endlet
    // I1CMP:return:jsxtnm736
    return jsxtnm736
  } // endtimp(gs_append_a7(761))
  let jsxtnm738 = XATSCAPP("Int", [0, jsxtnm695])
  let jsxtnm739 = XATSDAPP(sint3_combine_6011(jsxtnm696, jsxtnm697, jsxtnm698))
  let jsxtnm740 = XATSDAPP(expr_aops$exprlst_5179(jsxtnm738, jsxtnm739))
  let jsxtnm741 = XATSCAPP("Int", [0, jsxtnm696])
  let jsxtnm742 = XATSDAPP(sint3_combine_6011(jsxtnm695, jsxtnm697, jsxtnm698))
  let jsxtnm743 = XATSDAPP(expr_aops$exprlst_5179(jsxtnm741, jsxtnm742))
  let jsxtnm744 = XATSCAPP("Int", [0, jsxtnm697])
  let jsxtnm745 = XATSDAPP(sint3_combine_6011(jsxtnm695, jsxtnm696, jsxtnm698))
  let jsxtnm746 = XATSDAPP(expr_aops$exprlst_5179(jsxtnm744, jsxtnm745))
  let jsxtnm747 = XATSCAPP("Int", [0, jsxtnm698])
  let jsxtnm748 = XATSDAPP(sint3_combine_6011(jsxtnm695, jsxtnm696, jsxtnm697))
  let jsxtnm749 = XATSDAPP(expr_aops$exprlst_5179(jsxtnm747, jsxtnm748))
  let jsxtnm750 = XATSDAPP(sint2_combine_5936(jsxtnm695, jsxtnm696))
  let jsxtnm751 = XATSDAPP(sint2_combine_5936(jsxtnm697, jsxtnm698))
  let jsxtnm752 = XATSDAPP(exprlst_aops$exprlst_5533(jsxtnm750, jsxtnm751))
  let jsxtnm753 = XATSDAPP(sint2_combine_5936(jsxtnm695, jsxtnm697))
  let jsxtnm754 = XATSDAPP(sint2_combine_5936(jsxtnm696, jsxtnm698))
  let jsxtnm755 = XATSDAPP(exprlst_aops$exprlst_5533(jsxtnm753, jsxtnm754))
  let jsxtnm756 = XATSDAPP(sint2_combine_5936(jsxtnm695, jsxtnm698))
  let jsxtnm757 = XATSDAPP(sint2_combine_5936(jsxtnm696, jsxtnm697))
  let jsxtnm758 = XATSDAPP(exprlst_aops$exprlst_5533(jsxtnm756, jsxtnm757))
  let jsxtnm759 = XATSDAPP(jsxtnm737(jsxtnm740, jsxtnm743, jsxtnm746, jsxtnm749, jsxtnm752, jsxtnm755, jsxtnm758))
  // I1CMP:return:jsxtnm759
  return jsxtnm759
} // endfun(sint4_combine_6194)
// I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(6761(line=367,offs=1)--6903(line=372,offs=45)))
// I1FUNDCL
function GameOf24_solve_6764(arg1, arg2, arg3, arg4)
{ // fun
  let jsxtnm760 = arg1
  let jsxtnm761 = arg2
  let jsxtnm762 = arg3
  let jsxtnm763 = arg4
  // I1CMP:start
  // LCSRCsome1(Game-of-24.dats)@(6837(line=371,offs=1)--6858(line=371,offs=22))
  // I0Etapq(I0Ecst(gseq_filter$f1un_list(464));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr)))))
  // T1IMPallx(gseq_filter$f1un_list(464);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22174(line=1572,offs=1)--22298(line=1579,offs=42)))
  // T1IMPallx(gseq_filter$f1un_list(464)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[5394],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5395],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_filter$f1un_list(464);$list(@(xs[1393],T2Pvar(xs[5394])),@(x0[1394],T2Pvar(x0[5395])))))))
  let jsxtnm866 = function (arg1, arg2) { // timp: gseq_filter$f1un_list(464)
    let jsxtnm764 = arg1
    let jsxtnm765 = arg2
    // I1CMP:start
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22257(line=1579,offs=1)--22279(line=1579,offs=23))
    // I0Etapq(I0Ecst(gseq_filter$f1un_llist(465));$list(T2JAG($list(T2Pvar(xs[5394]))),T2JAG($list(T2Pvar(x0[5395])))))
    // T1IMPallx(gseq_filter$f1un_llist(465);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22440(line=1592,offs=1)--22594(line=1603,offs=2)))
    // T1IMPallx(gseq_filter$f1un_llist(465)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[5398],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5399],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_filter$f1un_llist(465);$list(@(xs[1395],T2Pvar(xs[5398])),@(x0[1396],T2Pvar(x0[5399])))))))
    let jsxtnm863 = function (arg1, arg2) { // timp: gseq_filter$f1un_llist(465)
      let jsxtnm766 = arg1
      let jsxtnm767 = arg2
      // I1CMP:start
      let jsxtnm862 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22549(line=1601,offs=1)--22592(line=1602,offs=35)))
        // I1Dimplmnt0(DIMPLone2(filter$test(66);$list(@(x0[421],T2Pvar(x0[5399]))))):timp
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22509(line=1598,offs=1)--22526(line=1598,offs=18))
        // I0Etapq(I0Ecst(gseq_filter_llist(461));$list(T2JAG($list(T2Pvar(xs[5398]))),T2JAG($list(T2Pvar(x0[5399])))))
        // T1IMPallx(gseq_filter_llist(461);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22325(line=1583,offs=1)--22436(line=1590,offs=31)))
        // T1IMPallx(gseq_filter_llist(461)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[5396],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5397],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_filter_llist(461);$list(@(xs[1387],T2Pvar(xs[5396])),@(x0[1388],T2Pvar(x0[5397])))))))
        let jsxtnm860 = function (arg1) { // timp: gseq_filter_llist(461)
          let jsxtnm770 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22383(line=1588,offs=1)--22399(line=1588,offs=17))
          // I0Etapq(I0Ecst(strm_vt_listize0(1810));$list(T2JAG($list(T2Pvar(x0[5397])))))
          // T1IMPallx(strm_vt_listize0(1810);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6447(line=405,offs=1)--6542(line=410,offs=28)))
          // T1IMPallx(strm_vt_listize0(1810)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7259],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(strm_vt_listize0(1810);$list(@(x0[4665],T2Pvar(x0[7259])))))))
          let jsxtnm807 = function (arg1) { // timp: strm_vt_listize0(1810)
            let jsxtnm771 = arg1
            // I1CMP:start
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6494(line=409,offs=1)--6510(line=409,offs=17))
            // I0Etapq(I0Ecst(list_vt_reverse0(1684));$list(T2JAG($list(T2Pvar(x0[7259])))))
            // T1IMPallx(list_vt_reverse0(1684);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5949(line=396,offs=1)--6036(line=399,offs=46)))
            // T1IMPallx(list_vt_reverse0(1684)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7134],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(1684);$list(@(x0[4433],T2Pvar(a[7134])))))))
            let jsxtnm790 = function (arg1) { // timp: list_vt_reverse0(1684)
              let jsxtnm772 = arg1
              // I1CMP:start
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5991(line=399,offs=1)--6008(line=399,offs=18))
              // I0Etapq(I0Ecst(list_vt_rappend00(1687));$list(T2JAG($list(T2Pvar(a[7134])))))
              // T1IMPallx(list_vt_rappend00(1687);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5476(line=360,offs=1)--5880(line=392,offs=2)))
              // T1IMPallx(list_vt_rappend00(1687)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(a[7131],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(1687);$list(@(x0[4440],T2Pvar(a[7131])))))))
              let jsxtnm787 = function (arg1, arg2) { // timp: list_vt_rappend00(1687)
                let jsxtnm773 = arg1
                let jsxtnm774 = arg2
                // I1CMP:start
                let jsxtnm786 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5555(line=368,offs=1)--5841(line=390,offs=2)))
                  // I1FUNDCL
                  function loop_5558(arg1, arg2)
                  { // fun
                    let jsxtnm775 = arg1
                    let jsxtnm776 = arg2
                    // I1CMP:start
                    let jsxtnm784 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(777);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm775, XATSCTAG("list_vt_nil",0))) { // gpt
                        let jsxtnm777 = jsxtnm775
                        jsxtnm784 = jsxtnm776
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(778);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
                      if (XATS000_ctgeq(jsxtnm775, XATSCTAG("list_vt_cons",1))) { // gpt
                        let jsxtnm778 = jsxtnm775
                        let jsxtnm783 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5729(line=384,offs=3)--5744(line=384,offs=18)))
                          // I1VALDCL
                          let jsxtnm780
                          let jsxtnm779 = XATSPCON(jsxtnm775,1)
                          jsxtnm780 = jsxtnm779
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats)@(5747(line=385,offs=3)--5769(line=385,offs=25)))
                          // I1VALDCL
                          let jsxtnm781
                          XATS000_assgn(XATSLPCN(1, jsxtnm775), jsxtnm776)
                          jsxtnm781 = []
                          XATS000_patck(true)
                          XATS000_fold(jsxtnm775)
                          let jsxtnm782 = XATSDAPP(loop_5558(jsxtnm780, jsxtnm775))
                          jsxtnm783 = jsxtnm782
                        } // endlet
                        jsxtnm784 = jsxtnm783
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm784
                    return jsxtnm784
                  } // endfun(loop_5558)
                  let jsxtnm785 = XATSDAPP(loop_5558(jsxtnm773, jsxtnm774))
                  jsxtnm786 = jsxtnm785
                } // endlet
                // I1CMP:return:jsxtnm786
                return jsxtnm786
              } // endtimp(list_vt_rappend00(1687))
              let jsxtnm788 = XATSCAPP("list_vt_nil", [0])
              let jsxtnm789 = XATSDAPP(jsxtnm787(jsxtnm772, jsxtnm788))
              // I1CMP:return:jsxtnm789
              return jsxtnm789
            } // endtimp(list_vt_reverse0(1684))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6516(line=410,offs=2)--6533(line=410,offs=19))
            // I0Etapq(I0Ecst(strm_vt_rlistize0(1812));$list(T2JAG($list(T2Pvar(x0[7259])))))
            // T1IMPallx(strm_vt_rlistize0(1812);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6546(line=412,offs=1)--6825(line=433,offs=2)))
            // T1IMPallx(strm_vt_rlistize0(1812)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7260],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(strm_vt_rlistize0(1812);$list(@(x0[4668],T2Pvar(x0[7260])))))))
            let jsxtnm804 = function (arg1) { // timp: strm_vt_rlistize0(1812)
              let jsxtnm791 = arg1
              // I1CMP:start
              let jsxtnm803 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6623(line=420,offs=1)--6645(line=420,offs=23)))
                // I1VALDCL
                let jsxtnm793
                let jsxtnm792 = XATSCAPP("list_vt_nil", [0])
                jsxtnm793 = jsxtnm792
                XATS000_patck(true)
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(6649(line=422,offs=1)--6823(line=432,offs=42)))
                // I1FUNDCL
                function loop_6652(arg1, arg2)
                { // fun
                  let jsxtnm794 = arg1
                  let jsxtnm795 = arg2
                  // I1CMP:start
                  let jsxtnm796 = XATS000_dl1az(jsxtnm794)
                  let jsxtnm801 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(797);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                    if (XATS000_ctgeq(jsxtnm796, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                      let jsxtnm797 = jsxtnm796
                      jsxtnm801 = jsxtnm795
                      break // cls
                    } // gpt
                    // } // cls
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(798);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(3685)),I0Pvar(xs(3686)))));$list(@(x1(3685),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(798));0)),@(xs(3686),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(798));1)))))
                    if (XATS000_ctgeq(jsxtnm796, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                      let jsxtnm798 = jsxtnm796
                      let jsxtnm799 = XATSCAPP("list_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm798[0+1]), jsxtnm795])
                      let jsxtnm800 = XATSDAPP(loop_6652(XATSP1CN("strmcon_vt_cons", jsxtnm798[1+1]), jsxtnm799))
                      jsxtnm801 = jsxtnm800
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm801
                  return jsxtnm801
                } // endfun(loop_6652)
                let jsxtnm802 = XATSDAPP(loop_6652(jsxtnm791, jsxtnm793))
                jsxtnm803 = jsxtnm802
              } // endlet
              // I1CMP:return:jsxtnm803
              return jsxtnm803
            } // endtimp(strm_vt_rlistize0(1812))
            let jsxtnm805 = XATSDAPP(jsxtnm804(jsxtnm771))
            let jsxtnm806 = XATSDAPP(jsxtnm790(jsxtnm805))
            // I1CMP:return:jsxtnm806
            return jsxtnm806
          } // endtimp(strm_vt_listize0(1810))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22406(line=1590,offs=1)--22423(line=1590,offs=18))
          // I0Etapq(I0Ecst(gseq_filter_lstrm(462));$list(T2JAG($list(T2Pvar(xs[5396]))),T2JAG($list(T2Pvar(x0[5397])))))
          // T1IMPallx(gseq_filter_lstrm(462);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22659(line=1607,offs=1)--22820(line=1619,offs=2)))
          // T1IMPallx(gseq_filter_lstrm(462)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[5400],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5401],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_filter_lstrm(462);$list(@(xs[1389],T2Pvar(xs[5400])),@(x0[1390],T2Pvar(x0[5401])))))))
          let jsxtnm857 = function (arg1) { // timp: gseq_filter_lstrm(462)
            let jsxtnm808 = arg1
            // I1CMP:start
            let jsxtnm856 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22775(line=1617,offs=1)--22818(line=1618,offs=35)))
              // I1Dimplmnt0(DIMPLone2(filter$test1(1225);$list(@(x0[3207],T2Pvar(x0[5401]))))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22717(line=1612,offs=1)--22732(line=1612,offs=16))
              // I0Etapq(I0Ecst(strm_vt_filter0(1798));$list(T2JAG($list(T2Pvar(x0[5401])))))
              // T1IMPallx(strm_vt_filter0(1798);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4829(line=281,offs=1)--5269(line=320,offs=2)))
              // T1IMPallx(strm_vt_filter0(1798)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7254],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(strm_vt_filter0(1798);$list(@(x0[4644],T2Pvar(x0[7254])))))))
              let jsxtnm840 = function (arg1) { // timp: strm_vt_filter0(1798)
                let jsxtnm809 = arg1
                // I1CMP:start
                let jsxtnm839 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4979(line=295,offs=1)--5267(line=319,offs=2)))
                  // I1FUNDCL
                  function auxloop_4982(arg1)
                  { // fun
                    let jsxtnm810 = arg1
                    // I1CMP:start
                    let jsxtnm832 // cas
                    do {
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(811);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                      if (XATS000_ctgeq(jsxtnm810, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                        let jsxtnm811 = jsxtnm810
                        let jsxtnm812 = XATSCAPP("strmcon_vt_nil", [0])
                        jsxtnm832 = jsxtnm812
                        break // cls
                      } // gpt
                      // } // cls
                      // { // cls
                      // I1GPTpat(I1BNDcons(I1TNM(813);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(3662)),I0Pvar(xs(3663)))));$list(@(x1(3662),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(813));0)),@(xs(3663),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(813));1)))))
                      if (XATS000_ctgeq(jsxtnm810, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                        let jsxtnm813 = jsxtnm810
                        let jsxtnm831 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(5130(line=308,offs=1)--5161(line=310,offs=21)))
                          // I1VALDCL
                          let jsxtnm819
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(5141(line=310,offs=1)--5153(line=310,offs=13))
                          // I0Etapq(I0Ecst(filter$test1(1225));$list(T2JAG($list(T2Pvar(x0[7254])))))
                          // T1IMPallx(filter$test1(1225);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22775(line=1617,offs=1)--22818(line=1618,offs=35)))
                          // T1IMPallx(filter$test1(1225)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[5400],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5401],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(filter$test1(1225);$list(@(x0[3207],T2Pcst(expr)))))))
                          let jsxtnm817
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22803(line=1618,offs=20)--22814(line=1618,offs=31))
                          // I0Etapq(I0Ecst(filter$test(66));$list(T2JAG($list(T2Pvar(x0[5401])))))
                          // T1IMPallx(filter$test(66);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22549(line=1601,offs=1)--22592(line=1602,offs=35)))
                          // T1IMPallx(filter$test(66)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[5398],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5399],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(filter$test(66);$list(@(x0[421],T2Pcst(expr)))))))
                          let jsxtnm816 = function (arg1) { // timp: filter$test(66)
                            let jsxtnm814 = arg1
                            // I1CMP:start
                            let jsxtnm815 = XATSDAPP(jsxtnm767(jsxtnm814))
                            // I1CMP:return:jsxtnm815
                            return jsxtnm815
                          } // endtimp(filter$test(66))
                          jsxtnm817 = jsxtnm816
                          let jsxtnm818 = XATSDAPP(jsxtnm817(XATSP1CN("strmcon_vt_cons", jsxtnm813[0+1])))
                          jsxtnm819 = jsxtnm818
                          XATS000_patck(true)
                          let jsxtnm830 // ift
                          if (jsxtnm819) // ift
                          {
                            let jsxtnm822 = function (tlaz) { // l1azy
                              // I1CMP:start
                              let jsxtnm820 = XATS000_dl1az(XATSP1CN("strmcon_vt_cons", jsxtnm813[1+1]))
                              let jsxtnm821 = XATSDAPP(auxloop_4982(jsxtnm820))
                              // I1CMP:return:jsxtnm821
                              return jsxtnm821
                            } // endfun(l1azy)
                            let jsxtnm823 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("strmcon_vt_cons", jsxtnm813[0+1]), jsxtnm822])
                            jsxtnm830 = jsxtnm823
                          } else {
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(5232(line=318,offs=2)--5238(line=318,offs=8))
                            // I0Etapq(I0Ecst(g_free(23));$list(T2JAG($list(T2Pvar(x0[7254])))))
                            // T1IMPallx(g_free(23);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                            // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[4754],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[361],T2Pvar(x0[4754])))))))
                            let jsxtnm826 = function (arg1) { // timp: g_free(23)
                              let jsxtnm824 = arg1
                              // I1CMP:start
                              let jsxtnm825 = XATSTUP0([])
                              // I1CMP:return:jsxtnm825
                              return jsxtnm825
                            } // endtimp(g_free(23))
                            let jsxtnm827 = XATSDAPP(jsxtnm826(XATSP1CN("strmcon_vt_cons", jsxtnm813[0+1])))
                            let jsxtnm828 = XATS000_dl1az(XATSP1CN("strmcon_vt_cons", jsxtnm813[1+1]))
                            let jsxtnm829 = XATSDAPP(auxloop_4982(jsxtnm828))
                            jsxtnm830 = jsxtnm829
                          } // end(if)
                          jsxtnm831 = jsxtnm830
                        } // endlet
                        jsxtnm832 = jsxtnm831
                        break // cls
                      } // gpt
                      // } // cls
                      XATS000_cfail()
                    } while (false) // end-of(do)
                    // I1CMP:return:jsxtnm832
                    return jsxtnm832
                  } // endfun(auxloop_4982)
                  let jsxtnm838 = function (tlaz) { // l1azy
                    // I1CMP:start
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats)@(4893(line=288,offs=1)--4905(line=288,offs=13))
                    // I0Etapq(I0Ecst(strm_vt_eval(1758));$list(T2JAG($list(T2Pvar(x0[7254])))))
                    // T1IMPallx(strm_vt_eval(1758);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats)@(2468(line=123,offs=1)--2515(line=125,offs=29)))
                    // T1IMPallx(strm_vt_eval(1758)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[7223],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(strm_vt_eval(1758);$list(@(x0[4580],T2Pvar(x0[7223])))))))
                    let jsxtnm835 = function (arg1) { // timp: strm_vt_eval(1758)
                      let jsxtnm833 = arg1
                      // I1CMP:start
                      let jsxtnm834 = XATS000_dl1az(jsxtnm833)
                      // I1CMP:return:jsxtnm834
                      return jsxtnm834
                    } // endtimp(strm_vt_eval(1758))
                    let jsxtnm836 = XATSDAPP(jsxtnm835(jsxtnm809))
                    let jsxtnm837 = XATSDAPP(auxloop_4982(jsxtnm836))
                    // I1CMP:return:jsxtnm837
                    return jsxtnm837
                  } // endfun(l1azy)
                  jsxtnm839 = jsxtnm838
                } // endlet
                // I1CMP:return:jsxtnm839
                return jsxtnm839
              } // endtimp(strm_vt_filter0(1798))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(22741(line=1614,offs=3)--22753(line=1614,offs=15))
              // I0Etapq(I0Ecst(gseq_strmize(355));$list(T2JAG($list(T2Pvar(xs[5400]))),T2JAG($list(T2Pvar(x0[5401])))))
              // T1IMPallx(gseq_strmize(355);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4975(line=314,offs=1)--5039(line=316,offs=46)))
              // T1IMPallx(gseq_strmize(355)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6381],T2Pcst(expr)),@(x0[6381],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_strmize(355);$list(@(xs[1045],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6381])))),@(x0[1046],T2Pvar(x0[6381])))))))
              let jsxtnm853
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(5023(line=316,offs=30)--5035(line=316,offs=42))
              // I0Etapq(I0Ecst(list_strmize(1092));$list(T2JAG($list(T2Pvar(x0[6381])))))
              // T1IMPallx(list_strmize(1092);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4716(line=289,offs=1)--4935(line=312,offs=2)))
              // T1IMPallx(list_strmize(1092)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6380],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_strmize(1092);$list(@(a[2991],T2Pvar(x0[6380])))))))
              let jsxtnm852 = function (arg1) { // timp: list_strmize(1092)
                let jsxtnm841 = arg1
                // I1CMP:start
                let jsxtnm851 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4790(line=298,offs=1)--4930(line=310,offs=2)))
                  // I1FUNDCL
                  function auxmain_4793(arg1)
                  { // fun
                    let jsxtnm842 = arg1
                    // I1CMP:start
                    let jsxtnm849 = function (tlaz) { // l1azy
                      // I1CMP:start
                      let jsxtnm848 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(843);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
                        if (XATS000_ctgeq(jsxtnm842, XATSCTAG("list_nil",0))) { // gpt
                          let jsxtnm843 = jsxtnm842
                          let jsxtnm844 = XATSCAPP("strmcon_vt_nil", [0])
                          jsxtnm848 = jsxtnm844
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(845);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x0(2300)),I0Pvar(xs(2301))));$list(@(x0(2300),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(845));0)),@(xs(2301),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(845));1)))))
                        if (XATS000_ctgeq(jsxtnm842, XATSCTAG("list_cons",1))) { // gpt
                          let jsxtnm845 = jsxtnm842
                          let jsxtnm846 = XATSDAPP(auxmain_4793(XATSP1CN("list_cons", jsxtnm845[1+1])))
                          let jsxtnm847 = XATSCAPP("strmcon_vt_cons", [1, XATSP1CN("list_cons", jsxtnm845[0+1]), jsxtnm846])
                          jsxtnm848 = jsxtnm847
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      // I1CMP:return:jsxtnm848
                      return jsxtnm848
                    } // endfun(l1azy)
                    // I1CMP:return:jsxtnm849
                    return jsxtnm849
                  } // endfun(auxmain_4793)
                  let jsxtnm850 = XATSDAPP(auxmain_4793(jsxtnm841))
                  jsxtnm851 = jsxtnm850
                } // endlet
                // I1CMP:return:jsxtnm851
                return jsxtnm851
              } // endtimp(list_strmize(1092))
              jsxtnm853 = jsxtnm852
              let jsxtnm854 = XATSDAPP(jsxtnm853(jsxtnm808))
              let jsxtnm855 = XATSDAPP(jsxtnm840(jsxtnm854))
              jsxtnm856 = jsxtnm855
            } // endlet
            // I1CMP:return:jsxtnm856
            return jsxtnm856
          } // endtimp(gseq_filter_lstrm(462))
          let jsxtnm858 = XATSDAPP(jsxtnm857(jsxtnm770))
          let jsxtnm859 = XATSDAPP(jsxtnm807(jsxtnm858))
          // I1CMP:return:jsxtnm859
          return jsxtnm859
        } // endtimp(gseq_filter_llist(461))
        let jsxtnm861 = XATSDAPP(jsxtnm860(jsxtnm766))
        jsxtnm862 = jsxtnm861
      } // endlet
      // I1CMP:return:jsxtnm862
      return jsxtnm862
    } // endtimp(gseq_filter$f1un_llist(465))
    let jsxtnm864 = XATSDAPP(jsxtnm863(jsxtnm764, jsxtnm765))
    let jsxtnm865 = XATSCAST("list_vt2t_17651", [jsxtnm864])
    // I1CMP:return:jsxtnm865
    return jsxtnm865
  } // endtimp(gseq_filter$f1un_list(464))
  let jsxtnm867 = XATSDAPP(sint4_combine_6194(jsxtnm760, jsxtnm761, jsxtnm762, jsxtnm763))
  let jsxtnm868 = XATSDAPP(jsxtnm866(jsxtnm867, expr_iseq24_3566))
  // I1CMP:return:jsxtnm868
  return jsxtnm868
} // endfun(GameOf24_solve_6764)
// I1Dextern(LCSRCsome1(Game-of-24.dats)@(7283(line=384,offs=1)--7376(line=388,offs=40)))
// LCSRCsome1(Game-of-24.dats)@(7291(line=385,offs=1)--7376(line=388,offs=40))
// I1FUNDCL
// GameOf24_solve$print_7294
  // FJARGdarg($list(I1BNDcons(I1TNM(869);I0Pvar(n1(4326));$list(@(n1(4326),I1Vtnm(I1TNM(869))))),I1BNDcons(I1TNM(870);I0Pvar(n2(4327));$list(@(n2(4327),I1Vtnm(I1TNM(870))))),I1BNDcons(I1TNM(871);I0Pvar(n3(4328));$list(@(n3(4328),I1Vtnm(I1TNM(871))))),I1BNDcons(I1TNM(872);I0Pvar(n4(4329));$list(@(n4(4329),I1Vtnm(I1TNM(872)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(GameOf24_solve$print);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(7380(line=390,offs=1)--7647(line=404,offs=4)))
let GameOf24_solve$print = function (arg1, arg2, arg3, arg4) { // impl
  let jsxtnm873 = arg1
  let jsxtnm874 = arg2
  let jsxtnm875 = arg3
  let jsxtnm876 = arg4
  // I1CMP:start
  let jsxtnm1219 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(7438(line=394,offs=1)--7479(line=394,offs=42)))
    // I1VALDCL
    let jsxtnm878
    let jsxtnm877 = XATSDAPP(GameOf24_solve_6764(jsxtnm873, jsxtnm874, jsxtnm875, jsxtnm876))
    jsxtnm878 = jsxtnm877
    XATS000_patck(true)
    // LCSRCsome1(Game-of-24.dats)@(7500(line=398,offs=1)--7509(line=398,offs=10))
    // I0Etapq(I0Ecst(list_nilq(1060));$list(T2JAG($list())))
    // T1IMPallx(list_nilq(1060);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list000.dats)@(1915(line=80,offs=1)--2019(line=87,offs=28)))
    // T1IMPallx(list_nilq(1060)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(list_nilq(1060);$list()))))
    let jsxtnm883 = function (arg1) { // timp: list_nilq(1060)
      let jsxtnm879 = arg1
      // I1CMP:start
      let jsxtnm882 // cas
      do {
        // { // cls
        // I1GPTpat(I1BNDcons(I1TNM(880);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
        if (XATS000_ctgeq(jsxtnm879, XATSCTAG("list_nil",0))) { // gpt
          let jsxtnm880 = jsxtnm879
          jsxtnm882 = XATSBOOL(true)
          break // cls
        } // gpt
        // } // cls
        // { // cls
        // I1GPTpat(I1BNDcons(I1TNM(881);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pany(),I0Pany()));$list()))
        if (XATS000_ctgeq(jsxtnm879, XATSCTAG("list_cons",1))) { // gpt
          let jsxtnm881 = jsxtnm879
          jsxtnm882 = XATSBOOL(false)
          break // cls
        } // gpt
        // } // cls
        XATS000_cfail()
      } while (false) // end-of(do)
      // I1CMP:return:jsxtnm882
      return jsxtnm882
    } // endtimp(list_nilq(1060))
    let jsxtnm884 = XATSDAPP(jsxtnm883(jsxtnm878))
    let jsxtnm1218 // ift
    if (jsxtnm884) // ift
    {
      // LCSRCsome1(Game-of-24.dats)@(7521(line=399,offs=1)--7528(line=399,offs=8))
      // I0Etapq(I0Ecst(gs_println_a1(746));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
      // T1IMPallx(gs_println_a1(746);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
      // T1IMPallx(gs_println_a1(746)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6019],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(746);$list(@(x0[2363],T2Pvar(x0[6019])))))))
      let jsxtnm911 = function (arg1) { // timp: gs_println_a1(746)
        let jsxtnm885 = arg1
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
        // I0Etapq(I0Ecst(gs_print_a1(733));$list(T2JAG($list(T2Pvar(x0[6019])))))
        // T1IMPallx(gs_print_a1(733);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
        // T1IMPallx(gs_print_a1(733)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5941],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(733);$list(@(x0[2285],T2Pvar(x0[5941])))))))
        let jsxtnm902 = function (arg1) { // timp: gs_print_a1(733)
          let jsxtnm886 = arg1
          // I1CMP:start
          let jsxtnm901 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
            // I1VALDCL
            let jsxtnm890
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
            // I0Etapq(I0Ecst(gs_print$beg(729));$list(T2JAG($list())))
            // T1IMPallx(gs_print$beg(729);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
            // T1IMPallx(gs_print$beg(729)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(729);$list()))))
            let jsxtnm888 = function () { // timp: gs_print$beg(729)
              // I1CMP:start
              let jsxtnm887 = XATSTUP0([])
              // I1CMP:return:jsxtnm887
              return jsxtnm887
            } // endtimp(gs_print$beg(729))
            let jsxtnm889 = XATSDAPP(jsxtnm888())
            jsxtnm890 = jsxtnm889
            XATS000_patck(true)
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
            // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x0[5941])))))
            // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
            // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
            let jsxtnm896
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
            // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
            // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
            // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
            let jsxtnm895 = function (arg1) { // timp: strn_print(948)
              let jsxtnm891 = arg1
              // I1CMP:start
              let jsxtnm894 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                // I1FUNDCL
                // XATS2JS_strn_print_2022
                  // FJARGdarg($list(I1BNDcons(I1TNM(892);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(892)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                let jsxtnm893 = XATSDAPP(XATS2JS_strn_print(jsxtnm891))
                jsxtnm894 = jsxtnm893
              } // endlet
              // I1CMP:return:jsxtnm894
              return jsxtnm894
            } // endtimp(strn_print(948))
            jsxtnm896 = jsxtnm895
            let jsxtnm897 = XATSDAPP(jsxtnm896(jsxtnm886))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
            // I0Etapq(I0Ecst(gs_print$end(731));$list(T2JAG($list())))
            // T1IMPallx(gs_print$end(731);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
            // T1IMPallx(gs_print$end(731)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(731);$list()))))
            let jsxtnm899 = function () { // timp: gs_print$end(731)
              // I1CMP:start
              let jsxtnm898 = XATSTUP0([])
              // I1CMP:return:jsxtnm898
              return jsxtnm898
            } // endtimp(gs_print$end(731))
            let jsxtnm900 = XATSDAPP(jsxtnm899())
            jsxtnm901 = jsxtnm900
          } // endlet
          // I1CMP:return:jsxtnm901
          return jsxtnm901
        } // endtimp(gs_print_a1(733))
        let jsxtnm903 = XATSDAPP(jsxtnm902(jsxtnm885))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
        // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
        // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
        // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
        let jsxtnm909
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
        // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
        // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
        // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
        let jsxtnm908 = function (arg1) { // timp: strn_print(948)
          let jsxtnm904 = arg1
          // I1CMP:start
          let jsxtnm907 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
            // I1FUNDCL
            // XATS2JS_strn_print_2022
              // FJARGdarg($list(I1BNDcons(I1TNM(905);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(905)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
            let jsxtnm906 = XATSDAPP(XATS2JS_strn_print(jsxtnm904))
            jsxtnm907 = jsxtnm906
          } // endlet
          // I1CMP:return:jsxtnm907
          return jsxtnm907
        } // endtimp(strn_print(948))
        jsxtnm909 = jsxtnm908
        let jsxtnm910 = XATSDAPP(jsxtnm909(XATSSTRN("\n")))
        // I1CMP:return:jsxtnm910
        return jsxtnm910
      } // endtimp(gs_println_a1(746))
      let jsxtnm912 = XATSDAPP(jsxtnm911(XATSSTRN("No solution found!")))
      jsxtnm1218 = jsxtnm912
    } else {
      // LCSRCsome1(Game-of-24.dats)@(7558(line=401,offs=1)--7565(line=401,offs=8))
      // I0Etapq(I0Ecst(gs_println_a1(746));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
      // T1IMPallx(gs_println_a1(746);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
      // T1IMPallx(gs_println_a1(746)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[6019],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_println_a1(746);$list(@(x0[2363],T2Pvar(x0[6019])))))))
      let jsxtnm939 = function (arg1) { // timp: gs_println_a1(746)
        let jsxtnm913 = arg1
        // I1CMP:start
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
        // I0Etapq(I0Ecst(gs_print_a1(733));$list(T2JAG($list(T2Pvar(x0[6019])))))
        // T1IMPallx(gs_print_a1(733);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
        // T1IMPallx(gs_print_a1(733)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5941],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a1(733);$list(@(x0[2285],T2Pvar(x0[5941])))))))
        let jsxtnm930 = function (arg1) { // timp: gs_print_a1(733)
          let jsxtnm914 = arg1
          // I1CMP:start
          let jsxtnm929 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
            // I1VALDCL
            let jsxtnm918
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
            // I0Etapq(I0Ecst(gs_print$beg(729));$list(T2JAG($list())))
            // T1IMPallx(gs_print$beg(729);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
            // T1IMPallx(gs_print$beg(729)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(729);$list()))))
            let jsxtnm916 = function () { // timp: gs_print$beg(729)
              // I1CMP:start
              let jsxtnm915 = XATSTUP0([])
              // I1CMP:return:jsxtnm915
              return jsxtnm915
            } // endtimp(gs_print$beg(729))
            let jsxtnm917 = XATSDAPP(jsxtnm916())
            jsxtnm918 = jsxtnm917
            XATS000_patck(true)
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
            // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x0[5941])))))
            // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
            // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
            let jsxtnm924
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
            // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
            // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
            // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
            let jsxtnm923 = function (arg1) { // timp: strn_print(948)
              let jsxtnm919 = arg1
              // I1CMP:start
              let jsxtnm922 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                // I1FUNDCL
                // XATS2JS_strn_print_2022
                  // FJARGdarg($list(I1BNDcons(I1TNM(920);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(920)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                let jsxtnm921 = XATSDAPP(XATS2JS_strn_print(jsxtnm919))
                jsxtnm922 = jsxtnm921
              } // endlet
              // I1CMP:return:jsxtnm922
              return jsxtnm922
            } // endtimp(strn_print(948))
            jsxtnm924 = jsxtnm923
            let jsxtnm925 = XATSDAPP(jsxtnm924(jsxtnm914))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
            // I0Etapq(I0Ecst(gs_print$end(731));$list(T2JAG($list())))
            // T1IMPallx(gs_print$end(731);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
            // T1IMPallx(gs_print$end(731)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(731);$list()))))
            let jsxtnm927 = function () { // timp: gs_print$end(731)
              // I1CMP:start
              let jsxtnm926 = XATSTUP0([])
              // I1CMP:return:jsxtnm926
              return jsxtnm926
            } // endtimp(gs_print$end(731))
            let jsxtnm928 = XATSDAPP(jsxtnm927())
            jsxtnm929 = jsxtnm928
          } // endlet
          // I1CMP:return:jsxtnm929
          return jsxtnm929
        } // endtimp(gs_print_a1(733))
        let jsxtnm931 = XATSDAPP(jsxtnm930(jsxtnm913))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
        // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
        // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
        // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
        let jsxtnm937
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
        // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
        // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
        // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
        let jsxtnm936 = function (arg1) { // timp: strn_print(948)
          let jsxtnm932 = arg1
          // I1CMP:start
          let jsxtnm935 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
            // I1FUNDCL
            // XATS2JS_strn_print_2022
              // FJARGdarg($list(I1BNDcons(I1TNM(933);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(933)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
            let jsxtnm934 = XATSDAPP(XATS2JS_strn_print(jsxtnm932))
            jsxtnm935 = jsxtnm934
          } // endlet
          // I1CMP:return:jsxtnm935
          return jsxtnm935
        } // endtimp(strn_print(948))
        jsxtnm937 = jsxtnm936
        let jsxtnm938 = XATSDAPP(jsxtnm937(XATSSTRN("\n")))
        // I1CMP:return:jsxtnm938
        return jsxtnm938
      } // endtimp(gs_println_a1(746))
      let jsxtnm940 = XATSDAPP(jsxtnm939(XATSSTRN("The solutions found:")))
      // LCSRCsome1(Game-of-24.dats)@(7591(line=402,offs=1)--7607(line=402,offs=17))
      // I0Etapq(I0Ecst(list_foritm$f1un(1106));$list(T2JAG($list(T2Pcst(expr)))))
      // T1IMPallx(list_foritm$f1un(1106);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4453(line=272,offs=1)--4521(line=275,offs=31)))
      // T1IMPallx(list_foritm$f1un(1106)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6378],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_foritm$f1un(1106);$list(@(x0[3007],T2Pvar(x0[6378])))))))
      let jsxtnm965
      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(4491(line=275,offs=1)--4507(line=275,offs=17))
      // I0Etapq(I0Ecst(gseq_foritm$f1un(383));$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pvar(x0[6378]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[6378])))))
      // T1IMPallx(gseq_foritm$f1un(383);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6249(line=396,offs=1)--6387(line=405,offs=2)))
      // T1IMPallx(gseq_foritm$f1un(383)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[5175],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5176],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_foritm$f1un(383);$list(@(xs[1135],T2Pvar(xs[5175])),@(x0[1136],T2Pvar(x0[5176])))))))
      let jsxtnm964 = function (arg1, arg2) { // timp: gseq_foritm$f1un(383)
        let jsxtnm941 = arg1
        let jsxtnm942 = arg2
        // I1CMP:start
        let jsxtnm963 // let
        { // let
          // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6346(line=404,offs=1)--6385(line=404,offs=40)))
          // I1Dimplmnt0(DIMPLone2(foritm$work(50);$list(@(x0[393],T2Pvar(x0[5176]))))):timp
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6312(line=402,offs=1)--6323(line=402,offs=12))
          // I0Etapq(I0Ecst(gseq_foritm(379));$list(T2JAG($list(T2Pvar(xs[5175]))),T2JAG($list(T2Pvar(x0[5176])))))
          // T1IMPallx(gseq_foritm(379);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3428(line=196,offs=1)--3491(line=199,offs=33)))
          // T1IMPallx(gseq_foritm(379)<$list(T2JAG($list(T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0())))),T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6369],T2Pcst(expr)),@(x0[6369],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gseq_foritm(379);$list(@(xs[1127],T2Papps(T2Pcst(list);$list(T2Pvar(x0[6369])))),@(x0[1128],T2Pvar(x0[6369])))))))
          let jsxtnm961
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3476(line=199,offs=18)--3487(line=199,offs=29))
          // I0Etapq(I0Ecst(list_foritm(1102));$list(T2JAG($list(T2Pvar(x0[6369])))))
          // T1IMPallx(list_foritm(1102);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3205(line=175,offs=1)--3424(line=194,offs=2)))
          // T1IMPallx(list_foritm(1102)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6368],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(list_foritm(1102);$list(@(x0[3003],T2Pvar(x0[6368])))))))
          let jsxtnm960 = function (arg1) { // timp: list_foritm(1102)
            let jsxtnm945 = arg1
            // I1CMP:start
            let jsxtnm959 // let
            { // let
              // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3271(line=182,offs=1)--3422(line=193,offs=37)))
              // I1FUNDCL
              function loop_3274(arg1)
              { // fun
                let jsxtnm946 = arg1
                // I1CMP:start
                let jsxtnm957 // cas
                do {
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(947);I0Pfree(I0Pdapp(I0Pcon(list_nil(8));$list()));$list()))
                  if (XATS000_ctgeq(jsxtnm946, XATSCTAG("list_nil",0))) { // gpt
                    let jsxtnm947 = jsxtnm946
                    let jsxtnm948 = XATSTUP0([])
                    jsxtnm957 = jsxtnm948
                    break // cls
                  } // gpt
                  // } // cls
                  // { // cls
                  // I1GPTpat(I1BNDcons(I1TNM(949);I0Pfree(I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x1(2290)),I0Pvar(xs(2291)))));$list(@(x1(2290),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(949));0)),@(xs(2291),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(949));1)))))
                  if (XATS000_ctgeq(jsxtnm946, XATSCTAG("list_cons",1))) { // gpt
                    let jsxtnm949 = jsxtnm946
                    let jsxtnm956 // let
                    { // let
                      // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3377(line=192,offs=1)--3405(line=193,offs=20)))
                      // I1VALDCL
                      let jsxtnm954
                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/list001.dats)@(3386(line=193,offs=1)--3397(line=193,offs=12))
                      // I0Etapq(I0Ecst(foritm$work(50));$list(T2JAG($list(T2Pvar(x0[6368])))))
                      // T1IMPallx(foritm$work(50);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6346(line=404,offs=1)--6385(line=404,offs=40)))
                      // T1IMPallx(foritm$work(50)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(xs[5175],T2Papps(T2Pcst(list_t0_i0_tx);$list(T2Pcst(expr),T2Pnone0()))),@(x0[5176],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(foritm$work(50);$list(@(x0[393],T2Pcst(expr)))))))
                      let jsxtnm952 = function (arg1) { // timp: foritm$work(50)
                        let jsxtnm950 = arg1
                        // I1CMP:start
                        let jsxtnm951 = XATSDAPP(jsxtnm942(jsxtnm950))
                        // I1CMP:return:jsxtnm951
                        return jsxtnm951
                      } // endtimp(foritm$work(50))
                      let jsxtnm953 = XATSDAPP(jsxtnm952(XATSP1CN("list_cons", jsxtnm949[0+1])))
                      jsxtnm954 = jsxtnm953
                      XATS000_patck(true)
                      let jsxtnm955 = XATSDAPP(loop_3274(XATSP1CN("list_cons", jsxtnm949[1+1])))
                      jsxtnm956 = jsxtnm955
                    } // endlet
                    jsxtnm957 = jsxtnm956
                    break // cls
                  } // gpt
                  // } // cls
                  XATS000_cfail()
                } while (false) // end-of(do)
                // I1CMP:return:jsxtnm957
                return jsxtnm957
              } // endfun(loop_3274)
              let jsxtnm958 = XATSDAPP(loop_3274(jsxtnm945))
              jsxtnm959 = jsxtnm958
            } // endlet
            // I1CMP:return:jsxtnm959
            return jsxtnm959
          } // endtimp(list_foritm(1102))
          jsxtnm961 = jsxtnm960
          let jsxtnm962 = XATSDAPP(jsxtnm961(jsxtnm941))
          jsxtnm963 = jsxtnm962
        } // endlet
        // I1CMP:return:jsxtnm963
        return jsxtnm963
      } // endtimp(gseq_foritm$f1un(383))
      jsxtnm965 = jsxtnm964
      let jsxtnm1216 = function (arg1) { // lam0(T_LAM(0))
        let jsxtnm966 = arg1
        // I1CMP:start
        // LCSRCsome1(Game-of-24.dats)@(7626(line=402,offs=36)--7633(line=402,offs=43))
        // I0Etapq(I0Ecst(gs_println_a1(746));$list(T2JAG($list(T2Pcst(expr)))))
        // T1IMPallx(gs_println_a1(746);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26148(line=1579,offs=1)--26234(line=1584,offs=40)))
        // T1IMPallx(gs_println_a1(746)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[6019],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gs_println_a1(746);$list(@(x0[2363],T2Pvar(x0[6019])))))))
        let jsxtnm1214 = function (arg1) { // timp: gs_println_a1(746)
          let jsxtnm967 = arg1
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26197(line=1584,offs=3)--26208(line=1584,offs=14))
          // I0Etapq(I0Ecst(gs_print_a1(733));$list(T2JAG($list(T2Pvar(x0[6019])))))
          // T1IMPallx(gs_print_a1(733);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21002(line=1292,offs=1)--21119(line=1301,offs=4)))
          // T1IMPallx(gs_print_a1(733)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list(@(x0[5941],T2Pcst(expr)));I1Dimplmnt0(DIMPLone2(gs_print_a1(733);$list(@(x0[2285],T2Pvar(x0[5941])))))))
          let jsxtnm1205 = function (arg1) { // timp: gs_print_a1(733)
            let jsxtnm968 = arg1
            // I1CMP:start
            let jsxtnm1204 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21049(line=1297,offs=1)--21072(line=1298,offs=15)))
              // I1VALDCL
              let jsxtnm972
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21058(line=1298,offs=1)--21070(line=1298,offs=13))
              // I0Etapq(I0Ecst(gs_print$beg(729));$list(T2JAG($list())))
              // T1IMPallx(gs_print$beg(729);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
              // T1IMPallx(gs_print$beg(729)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(729);$list()))))
              let jsxtnm970 = function () { // timp: gs_print$beg(729)
                // I1CMP:start
                let jsxtnm969 = XATSTUP0([])
                // I1CMP:return:jsxtnm969
                return jsxtnm969
              } // endtimp(gs_print$beg(729))
              let jsxtnm971 = XATSDAPP(jsxtnm970())
              jsxtnm972 = jsxtnm971
              XATS000_patck(true)
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21083(line=1300,offs=1)--21090(line=1300,offs=8))
              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x0[5941])))))
              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2338(line=106,offs=1)--2729(line=135,offs=2)))
              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
              let jsxtnm1199 = function (arg1) { // timp: g_print(38)
                let jsxtnm973 = arg1
                // I1CMP:start
                let jsxtnm1198 // let
                { // let
                  // I1Dfundclist(LCSRCsome1(Game-of-24.dats)@(2406(line=113,offs=1)--2724(line=133,offs=2)))
                  // I1FUNDCL
                  function auxpr_2409(arg1)
                  { // fun
                    let jsxtnm974 = arg1
                    // I1CMP:start
                    let jsxtnm1196 // let
                    { // let
                      // I1Dimplmnt0(LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                      // I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr))))):timp
                      let jsxtnm1195 // cas
                      do {
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(975);I0Pdapp(I0Pcon(Int(31));$list(I0Pvar(i0(4249))));$list(@(i0(4249),I1Vp1cn(I0Pcon(Int(31));I1Vtnm(I1TNM(975));0)))))
                        if (XATS000_ctgeq(jsxtnm974, XATSCTAG("Int",0))) { // gpt
                          let jsxtnm975 = jsxtnm974
                          // LCSRCsome1(Game-of-24.dats)@(2460(line=117,offs=13)--2465(line=117,offs=18))
                          // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                          // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint000.dats)@(2263(line=94,offs=1)--2298(line=95,offs=27)))
                          // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(si)))))))
                          let jsxtnm981
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint000.dats)@(2286(line=95,offs=15)--2296(line=95,offs=25))
                          // I0Etapq(I0Ecst(sint_print(845));$list(T2JAG($list())))
                          // T1IMPallx(sint_print(845);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3616(line=223,offs=1)--3756(line=234,offs=2)))
                          // T1IMPallx(sint_print(845)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(845);$list()))))
                          let jsxtnm980 = function (arg1) { // timp: sint_print(845)
                            let jsxtnm976 = arg1
                            // I1CMP:start
                            let jsxtnm979 // let
                            { // let
                              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3696(line=231,offs=1)--3754(line=233,offs=47)))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3704(line=232,offs=1)--3754(line=233,offs=47))
                              // I1FUNDCL
                              // XATS2JS_sint_print_3707
                                // FJARGdarg($list(I1BNDcons(I1TNM(977);I0Pvar(i0(4070));$list(@(i0(4070),I1Vtnm(I1TNM(977)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_print);G1Nlist($list())) // I1CMP:return
                              let jsxtnm978 = XATSDAPP(XATS2JS_sint_print(jsxtnm976))
                              jsxtnm979 = jsxtnm978
                            } // endlet
                            // I1CMP:return:jsxtnm979
                            return jsxtnm979
                          } // endtimp(sint_print(845))
                          jsxtnm981 = jsxtnm980
                          let jsxtnm982 = XATSDAPP(jsxtnm981(XATSP1CN("Int", jsxtnm975[0+1])))
                          jsxtnm1195 = jsxtnm982
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(983);I0Pdapp(I0Pcon(Add(32));$list(I0Pvar(x1(4250)),I0Pvar(x2(4251))));$list(@(x1(4250),I1Vp1cn(I0Pcon(Add(32));I1Vtnm(I1TNM(983));0)),@(x2(4251),I1Vp1cn(I0Pcon(Add(32));I1Vtnm(I1TNM(983));1)))))
                        if (XATS000_ctgeq(jsxtnm974, XATSCTAG("Add",1))) { // gpt
                          let jsxtnm983 = jsxtnm974
                          // LCSRCsome1(Game-of-24.dats)@(2490(line=120,offs=3)--2496(line=120,offs=9))
                          // I0Etapq(I0Ecst(gs_print_a5(737));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                          // T1IMPallx(gs_print_a5(737);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
                          // T1IMPallx(gs_print_a5(737)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5951],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[5952],T2Pcst(expr)),@(x2[5953],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[5954],T2Pcst(expr)),@(x4[5955],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(737);$list(@(x0[2295],T2Pvar(x0[5951])),@(x1[2296],T2Pvar(x1[5952])),@(x2[2297],T2Pvar(x2[5953])),@(x3[2298],T2Pvar(x3[5954])),@(x4[2299],T2Pvar(x4[5955])))))))
                          let jsxtnm1034 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(737)
                            let jsxtnm984 = arg1
                            let jsxtnm985 = arg2
                            let jsxtnm986 = arg3
                            let jsxtnm987 = arg4
                            let jsxtnm988 = arg5
                            // I1CMP:start
                            let jsxtnm1033 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                              // I1VALDCL
                              let jsxtnm992
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                              // I0Etapq(I0Ecst(gs_print$beg(729));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$beg(729);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                              // T1IMPallx(gs_print$beg(729)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(729);$list()))))
                              let jsxtnm990 = function () { // timp: gs_print$beg(729)
                                // I1CMP:start
                                let jsxtnm989 = XATSTUP0([])
                                // I1CMP:return:jsxtnm989
                                return jsxtnm989
                              } // endtimp(gs_print$beg(729))
                              let jsxtnm991 = XATSDAPP(jsxtnm990())
                              jsxtnm992 = jsxtnm991
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x0[5951])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm998
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm997 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm993 = arg1
                                // I1CMP:start
                                let jsxtnm996 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(994);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(994)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm995 = XATSDAPP(XATS2JS_strn_print(jsxtnm993))
                                  jsxtnm996 = jsxtnm995
                                } // endlet
                                // I1CMP:return:jsxtnm996
                                return jsxtnm996
                              } // endtimp(strn_print(948))
                              jsxtnm998 = jsxtnm997
                              let jsxtnm999 = XATSDAPP(jsxtnm998(jsxtnm984))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1001 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1000 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1000
                                return jsxtnm1000
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1002 = XATSDAPP(jsxtnm1001())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x1[5952])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
                              let jsxtnm1003
                              jsxtnm1003 = auxpr_2409
                              let jsxtnm1004 = XATSDAPP(jsxtnm1003(jsxtnm985))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1006 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1005 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1005
                                return jsxtnm1005
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1007 = XATSDAPP(jsxtnm1006())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x2[5953])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1013
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1012 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1008 = arg1
                                // I1CMP:start
                                let jsxtnm1011 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1009);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1009)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1010 = XATSDAPP(XATS2JS_strn_print(jsxtnm1008))
                                  jsxtnm1011 = jsxtnm1010
                                } // endlet
                                // I1CMP:return:jsxtnm1011
                                return jsxtnm1011
                              } // endtimp(strn_print(948))
                              jsxtnm1013 = jsxtnm1012
                              let jsxtnm1014 = XATSDAPP(jsxtnm1013(jsxtnm986))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1016 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1015 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1015
                                return jsxtnm1015
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1017 = XATSDAPP(jsxtnm1016())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x3[5954])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
                              let jsxtnm1018
                              jsxtnm1018 = auxpr_2409
                              let jsxtnm1019 = XATSDAPP(jsxtnm1018(jsxtnm987))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1021 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1020 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1020
                                return jsxtnm1020
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1022 = XATSDAPP(jsxtnm1021())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x4[5955])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1028
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1027 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1023 = arg1
                                // I1CMP:start
                                let jsxtnm1026 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1024);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1024)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1025 = XATSDAPP(XATS2JS_strn_print(jsxtnm1023))
                                  jsxtnm1026 = jsxtnm1025
                                } // endlet
                                // I1CMP:return:jsxtnm1026
                                return jsxtnm1026
                              } // endtimp(strn_print(948))
                              jsxtnm1028 = jsxtnm1027
                              let jsxtnm1029 = XATSDAPP(jsxtnm1028(jsxtnm988))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                              // I0Etapq(I0Ecst(gs_print$end(731));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$end(731);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                              // T1IMPallx(gs_print$end(731)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(731);$list()))))
                              let jsxtnm1031 = function () { // timp: gs_print$end(731)
                                // I1CMP:start
                                let jsxtnm1030 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1030
                                return jsxtnm1030
                              } // endtimp(gs_print$end(731))
                              let jsxtnm1032 = XATSDAPP(jsxtnm1031())
                              jsxtnm1033 = jsxtnm1032
                            } // endlet
                            // I1CMP:return:jsxtnm1033
                            return jsxtnm1033
                          } // endtimp(gs_print_a5(737))
                          let jsxtnm1035 = XATSDAPP(jsxtnm1034(XATSSTRN("("), XATSP1CN("Add", jsxtnm983[0+1]), XATSSTRN("+"), XATSP1CN("Add", jsxtnm983[1+1]), XATSSTRN(")")))
                          jsxtnm1195 = jsxtnm1035
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(1036);I0Pdapp(I0Pcon(Sub(33));$list(I0Pvar(x1(4252)),I0Pvar(x2(4253))));$list(@(x1(4252),I1Vp1cn(I0Pcon(Sub(33));I1Vtnm(I1TNM(1036));0)),@(x2(4253),I1Vp1cn(I0Pcon(Sub(33));I1Vtnm(I1TNM(1036));1)))))
                        if (XATS000_ctgeq(jsxtnm974, XATSCTAG("Sub",2))) { // gpt
                          let jsxtnm1036 = jsxtnm974
                          // LCSRCsome1(Game-of-24.dats)@(2541(line=123,offs=3)--2547(line=123,offs=9))
                          // I0Etapq(I0Ecst(gs_print_a5(737));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                          // T1IMPallx(gs_print_a5(737);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
                          // T1IMPallx(gs_print_a5(737)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5951],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[5952],T2Pcst(expr)),@(x2[5953],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[5954],T2Pcst(expr)),@(x4[5955],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(737);$list(@(x0[2295],T2Pvar(x0[5951])),@(x1[2296],T2Pvar(x1[5952])),@(x2[2297],T2Pvar(x2[5953])),@(x3[2298],T2Pvar(x3[5954])),@(x4[2299],T2Pvar(x4[5955])))))))
                          let jsxtnm1087 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(737)
                            let jsxtnm1037 = arg1
                            let jsxtnm1038 = arg2
                            let jsxtnm1039 = arg3
                            let jsxtnm1040 = arg4
                            let jsxtnm1041 = arg5
                            // I1CMP:start
                            let jsxtnm1086 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                              // I1VALDCL
                              let jsxtnm1045
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                              // I0Etapq(I0Ecst(gs_print$beg(729));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$beg(729);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                              // T1IMPallx(gs_print$beg(729)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(729);$list()))))
                              let jsxtnm1043 = function () { // timp: gs_print$beg(729)
                                // I1CMP:start
                                let jsxtnm1042 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1042
                                return jsxtnm1042
                              } // endtimp(gs_print$beg(729))
                              let jsxtnm1044 = XATSDAPP(jsxtnm1043())
                              jsxtnm1045 = jsxtnm1044
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x0[5951])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1051
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1050 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1046 = arg1
                                // I1CMP:start
                                let jsxtnm1049 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1047);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1047)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1048 = XATSDAPP(XATS2JS_strn_print(jsxtnm1046))
                                  jsxtnm1049 = jsxtnm1048
                                } // endlet
                                // I1CMP:return:jsxtnm1049
                                return jsxtnm1049
                              } // endtimp(strn_print(948))
                              jsxtnm1051 = jsxtnm1050
                              let jsxtnm1052 = XATSDAPP(jsxtnm1051(jsxtnm1037))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1054 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1053 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1053
                                return jsxtnm1053
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1055 = XATSDAPP(jsxtnm1054())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x1[5952])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
                              let jsxtnm1056
                              jsxtnm1056 = auxpr_2409
                              let jsxtnm1057 = XATSDAPP(jsxtnm1056(jsxtnm1038))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1059 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1058 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1058
                                return jsxtnm1058
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1060 = XATSDAPP(jsxtnm1059())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x2[5953])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1066
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1065 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1061 = arg1
                                // I1CMP:start
                                let jsxtnm1064 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1062);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1062)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1063 = XATSDAPP(XATS2JS_strn_print(jsxtnm1061))
                                  jsxtnm1064 = jsxtnm1063
                                } // endlet
                                // I1CMP:return:jsxtnm1064
                                return jsxtnm1064
                              } // endtimp(strn_print(948))
                              jsxtnm1066 = jsxtnm1065
                              let jsxtnm1067 = XATSDAPP(jsxtnm1066(jsxtnm1039))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1069 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1068 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1068
                                return jsxtnm1068
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1070 = XATSDAPP(jsxtnm1069())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x3[5954])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
                              let jsxtnm1071
                              jsxtnm1071 = auxpr_2409
                              let jsxtnm1072 = XATSDAPP(jsxtnm1071(jsxtnm1040))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1074 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1073 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1073
                                return jsxtnm1073
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1075 = XATSDAPP(jsxtnm1074())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x4[5955])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1081
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1080 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1076 = arg1
                                // I1CMP:start
                                let jsxtnm1079 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1077);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1077)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1078 = XATSDAPP(XATS2JS_strn_print(jsxtnm1076))
                                  jsxtnm1079 = jsxtnm1078
                                } // endlet
                                // I1CMP:return:jsxtnm1079
                                return jsxtnm1079
                              } // endtimp(strn_print(948))
                              jsxtnm1081 = jsxtnm1080
                              let jsxtnm1082 = XATSDAPP(jsxtnm1081(jsxtnm1041))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                              // I0Etapq(I0Ecst(gs_print$end(731));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$end(731);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                              // T1IMPallx(gs_print$end(731)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(731);$list()))))
                              let jsxtnm1084 = function () { // timp: gs_print$end(731)
                                // I1CMP:start
                                let jsxtnm1083 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1083
                                return jsxtnm1083
                              } // endtimp(gs_print$end(731))
                              let jsxtnm1085 = XATSDAPP(jsxtnm1084())
                              jsxtnm1086 = jsxtnm1085
                            } // endlet
                            // I1CMP:return:jsxtnm1086
                            return jsxtnm1086
                          } // endtimp(gs_print_a5(737))
                          let jsxtnm1088 = XATSDAPP(jsxtnm1087(XATSSTRN("("), XATSP1CN("Sub", jsxtnm1036[0+1]), XATSSTRN("-"), XATSP1CN("Sub", jsxtnm1036[1+1]), XATSSTRN(")")))
                          jsxtnm1195 = jsxtnm1088
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(1089);I0Pdapp(I0Pcon(Mul(34));$list(I0Pvar(x1(4254)),I0Pvar(x2(4255))));$list(@(x1(4254),I1Vp1cn(I0Pcon(Mul(34));I1Vtnm(I1TNM(1089));0)),@(x2(4255),I1Vp1cn(I0Pcon(Mul(34));I1Vtnm(I1TNM(1089));1)))))
                        if (XATS000_ctgeq(jsxtnm974, XATSCTAG("Mul",3))) { // gpt
                          let jsxtnm1089 = jsxtnm974
                          // LCSRCsome1(Game-of-24.dats)@(2592(line=126,offs=3)--2598(line=126,offs=9))
                          // I0Etapq(I0Ecst(gs_print_a5(737));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                          // T1IMPallx(gs_print_a5(737);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
                          // T1IMPallx(gs_print_a5(737)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5951],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[5952],T2Pcst(expr)),@(x2[5953],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[5954],T2Pcst(expr)),@(x4[5955],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(737);$list(@(x0[2295],T2Pvar(x0[5951])),@(x1[2296],T2Pvar(x1[5952])),@(x2[2297],T2Pvar(x2[5953])),@(x3[2298],T2Pvar(x3[5954])),@(x4[2299],T2Pvar(x4[5955])))))))
                          let jsxtnm1140 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(737)
                            let jsxtnm1090 = arg1
                            let jsxtnm1091 = arg2
                            let jsxtnm1092 = arg3
                            let jsxtnm1093 = arg4
                            let jsxtnm1094 = arg5
                            // I1CMP:start
                            let jsxtnm1139 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                              // I1VALDCL
                              let jsxtnm1098
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                              // I0Etapq(I0Ecst(gs_print$beg(729));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$beg(729);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                              // T1IMPallx(gs_print$beg(729)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(729);$list()))))
                              let jsxtnm1096 = function () { // timp: gs_print$beg(729)
                                // I1CMP:start
                                let jsxtnm1095 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1095
                                return jsxtnm1095
                              } // endtimp(gs_print$beg(729))
                              let jsxtnm1097 = XATSDAPP(jsxtnm1096())
                              jsxtnm1098 = jsxtnm1097
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x0[5951])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1104
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1103 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1099 = arg1
                                // I1CMP:start
                                let jsxtnm1102 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1100);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1100)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1101 = XATSDAPP(XATS2JS_strn_print(jsxtnm1099))
                                  jsxtnm1102 = jsxtnm1101
                                } // endlet
                                // I1CMP:return:jsxtnm1102
                                return jsxtnm1102
                              } // endtimp(strn_print(948))
                              jsxtnm1104 = jsxtnm1103
                              let jsxtnm1105 = XATSDAPP(jsxtnm1104(jsxtnm1090))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1107 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1106 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1106
                                return jsxtnm1106
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1108 = XATSDAPP(jsxtnm1107())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x1[5952])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
                              let jsxtnm1109
                              jsxtnm1109 = auxpr_2409
                              let jsxtnm1110 = XATSDAPP(jsxtnm1109(jsxtnm1091))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1112 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1111 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1111
                                return jsxtnm1111
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1113 = XATSDAPP(jsxtnm1112())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x2[5953])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1119
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1118 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1114 = arg1
                                // I1CMP:start
                                let jsxtnm1117 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1115);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1115)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1116 = XATSDAPP(XATS2JS_strn_print(jsxtnm1114))
                                  jsxtnm1117 = jsxtnm1116
                                } // endlet
                                // I1CMP:return:jsxtnm1117
                                return jsxtnm1117
                              } // endtimp(strn_print(948))
                              jsxtnm1119 = jsxtnm1118
                              let jsxtnm1120 = XATSDAPP(jsxtnm1119(jsxtnm1092))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1122 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1121 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1121
                                return jsxtnm1121
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1123 = XATSDAPP(jsxtnm1122())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x3[5954])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
                              let jsxtnm1124
                              jsxtnm1124 = auxpr_2409
                              let jsxtnm1125 = XATSDAPP(jsxtnm1124(jsxtnm1093))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1127 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1126 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1126
                                return jsxtnm1126
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1128 = XATSDAPP(jsxtnm1127())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x4[5955])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1134
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1133 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1129 = arg1
                                // I1CMP:start
                                let jsxtnm1132 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1130);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1130)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1131 = XATSDAPP(XATS2JS_strn_print(jsxtnm1129))
                                  jsxtnm1132 = jsxtnm1131
                                } // endlet
                                // I1CMP:return:jsxtnm1132
                                return jsxtnm1132
                              } // endtimp(strn_print(948))
                              jsxtnm1134 = jsxtnm1133
                              let jsxtnm1135 = XATSDAPP(jsxtnm1134(jsxtnm1094))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                              // I0Etapq(I0Ecst(gs_print$end(731));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$end(731);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                              // T1IMPallx(gs_print$end(731)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(731);$list()))))
                              let jsxtnm1137 = function () { // timp: gs_print$end(731)
                                // I1CMP:start
                                let jsxtnm1136 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1136
                                return jsxtnm1136
                              } // endtimp(gs_print$end(731))
                              let jsxtnm1138 = XATSDAPP(jsxtnm1137())
                              jsxtnm1139 = jsxtnm1138
                            } // endlet
                            // I1CMP:return:jsxtnm1139
                            return jsxtnm1139
                          } // endtimp(gs_print_a5(737))
                          let jsxtnm1141 = XATSDAPP(jsxtnm1140(XATSSTRN("("), XATSP1CN("Mul", jsxtnm1089[0+1]), XATSSTRN("*"), XATSP1CN("Mul", jsxtnm1089[1+1]), XATSSTRN(")")))
                          jsxtnm1195 = jsxtnm1141
                          break // cls
                        } // gpt
                        // } // cls
                        // { // cls
                        // I1GPTpat(I1BNDcons(I1TNM(1142);I0Pdapp(I0Pcon(Div(35));$list(I0Pvar(x1(4256)),I0Pvar(x2(4257))));$list(@(x1(4256),I1Vp1cn(I0Pcon(Div(35));I1Vtnm(I1TNM(1142));0)),@(x2(4257),I1Vp1cn(I0Pcon(Div(35));I1Vtnm(I1TNM(1142));1)))))
                        if (XATS000_ctgeq(jsxtnm974, XATSCTAG("Div",4))) { // gpt
                          let jsxtnm1142 = jsxtnm974
                          // LCSRCsome1(Game-of-24.dats)@(2643(line=129,offs=3)--2649(line=129,offs=9))
                          // I0Etapq(I0Ecst(gs_print_a5(737));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
                          // T1IMPallx(gs_print_a5(737);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21898(line=1350,offs=1)--22206(line=1368,offs=4)))
                          // T1IMPallx(gs_print_a5(737)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Pcst(expr))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5951],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[5952],T2Pcst(expr)),@(x2[5953],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[5954],T2Pcst(expr)),@(x4[5955],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(737);$list(@(x0[2295],T2Pvar(x0[5951])),@(x1[2296],T2Pvar(x1[5952])),@(x2[2297],T2Pvar(x2[5953])),@(x3[2298],T2Pvar(x3[5954])),@(x4[2299],T2Pvar(x4[5955])))))))
                          let jsxtnm1193 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(737)
                            let jsxtnm1143 = arg1
                            let jsxtnm1144 = arg2
                            let jsxtnm1145 = arg3
                            let jsxtnm1146 = arg4
                            let jsxtnm1147 = arg5
                            // I1CMP:start
                            let jsxtnm1192 // let
                            { // let
                              // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21998(line=1360,offs=1)--22021(line=1361,offs=15)))
                              // I1VALDCL
                              let jsxtnm1151
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22007(line=1361,offs=1)--22019(line=1361,offs=13))
                              // I0Etapq(I0Ecst(gs_print$beg(729));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$beg(729);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20721(line=1268,offs=1)--20759(line=1270,offs=20)))
                              // T1IMPallx(gs_print$beg(729)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(729);$list()))))
                              let jsxtnm1149 = function () { // timp: gs_print$beg(729)
                                // I1CMP:start
                                let jsxtnm1148 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1148
                                return jsxtnm1148
                              } // endtimp(gs_print$beg(729))
                              let jsxtnm1150 = XATSDAPP(jsxtnm1149())
                              jsxtnm1151 = jsxtnm1150
                              XATS000_patck(true)
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22034(line=1363,offs=3)--22041(line=1363,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x0[5951])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1157
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1156 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1152 = arg1
                                // I1CMP:start
                                let jsxtnm1155 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1153);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1153)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1154 = XATSDAPP(XATS2JS_strn_print(jsxtnm1152))
                                  jsxtnm1155 = jsxtnm1154
                                } // endlet
                                // I1CMP:return:jsxtnm1155
                                return jsxtnm1155
                              } // endtimp(strn_print(948))
                              jsxtnm1157 = jsxtnm1156
                              let jsxtnm1158 = XATSDAPP(jsxtnm1157(jsxtnm1143))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22051(line=1363,offs=20)--22063(line=1363,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1160 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1159 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1159
                                return jsxtnm1159
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1161 = XATSDAPP(jsxtnm1160())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22068(line=1364,offs=3)--22075(line=1364,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x1[5952])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
                              let jsxtnm1162
                              jsxtnm1162 = auxpr_2409
                              let jsxtnm1163 = XATSDAPP(jsxtnm1162(jsxtnm1144))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22085(line=1364,offs=20)--22097(line=1364,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1165 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1164 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1164
                                return jsxtnm1164
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1166 = XATSDAPP(jsxtnm1165())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22102(line=1365,offs=3)--22109(line=1365,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x2[5953])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1172
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1171 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1167 = arg1
                                // I1CMP:start
                                let jsxtnm1170 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1168);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1168)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1169 = XATSDAPP(XATS2JS_strn_print(jsxtnm1167))
                                  jsxtnm1170 = jsxtnm1169
                                } // endlet
                                // I1CMP:return:jsxtnm1170
                                return jsxtnm1170
                              } // endtimp(strn_print(948))
                              jsxtnm1172 = jsxtnm1171
                              let jsxtnm1173 = XATSDAPP(jsxtnm1172(jsxtnm1145))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22119(line=1365,offs=20)--22131(line=1365,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1175 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1174 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1174
                                return jsxtnm1174
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1176 = XATSDAPP(jsxtnm1175())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22136(line=1366,offs=3)--22143(line=1366,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x3[5954])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(Game-of-24.dats)@(2684(line=132,offs=1)--2714(line=132,offs=31)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Pcst(expr))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(expr)))))))
                              let jsxtnm1177
                              jsxtnm1177 = auxpr_2409
                              let jsxtnm1178 = XATSDAPP(jsxtnm1177(jsxtnm1146))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22153(line=1366,offs=20)--22165(line=1366,offs=32))
                              // I0Etapq(I0Ecst(gs_print$sep(730));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$sep(730);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20760(line=1271,offs=1)--20798(line=1273,offs=20)))
                              // T1IMPallx(gs_print$sep(730)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(730);$list()))))
                              let jsxtnm1180 = function () { // timp: gs_print$sep(730)
                                // I1CMP:start
                                let jsxtnm1179 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1179
                                return jsxtnm1179
                              } // endtimp(gs_print$sep(730))
                              let jsxtnm1181 = XATSDAPP(jsxtnm1180())
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22170(line=1367,offs=3)--22177(line=1367,offs=10))
                              // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Pvar(x4[5955])))))
                              // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
                              // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
                              let jsxtnm1187
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
                              // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
                              // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
                              // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
                              let jsxtnm1186 = function (arg1) { // timp: strn_print(948)
                                let jsxtnm1182 = arg1
                                // I1CMP:start
                                let jsxtnm1185 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
                                  // I1FUNDCL
                                  // XATS2JS_strn_print_2022
                                    // FJARGdarg($list(I1BNDcons(I1TNM(1183);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1183)))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm1184 = XATSDAPP(XATS2JS_strn_print(jsxtnm1182))
                                  jsxtnm1185 = jsxtnm1184
                                } // endlet
                                // I1CMP:return:jsxtnm1185
                                return jsxtnm1185
                              } // endtimp(strn_print(948))
                              jsxtnm1187 = jsxtnm1186
                              let jsxtnm1188 = XATSDAPP(jsxtnm1187(jsxtnm1147))
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(22187(line=1367,offs=20)--22199(line=1367,offs=32))
                              // I0Etapq(I0Ecst(gs_print$end(731));$list(T2JAG($list())))
                              // T1IMPallx(gs_print$end(731);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
                              // T1IMPallx(gs_print$end(731)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(731);$list()))))
                              let jsxtnm1190 = function () { // timp: gs_print$end(731)
                                // I1CMP:start
                                let jsxtnm1189 = XATSTUP0([])
                                // I1CMP:return:jsxtnm1189
                                return jsxtnm1189
                              } // endtimp(gs_print$end(731))
                              let jsxtnm1191 = XATSDAPP(jsxtnm1190())
                              jsxtnm1192 = jsxtnm1191
                            } // endlet
                            // I1CMP:return:jsxtnm1192
                            return jsxtnm1192
                          } // endtimp(gs_print_a5(737))
                          let jsxtnm1194 = XATSDAPP(jsxtnm1193(XATSSTRN("("), XATSP1CN("Div", jsxtnm1142[0+1]), XATSSTRN("/"), XATSP1CN("Div", jsxtnm1142[1+1]), XATSSTRN(")")))
                          jsxtnm1195 = jsxtnm1194
                          break // cls
                        } // gpt
                        // } // cls
                        XATS000_cfail()
                      } while (false) // end-of(do)
                      jsxtnm1196 = jsxtnm1195
                    } // endlet
                    // I1CMP:return:jsxtnm1196
                    return jsxtnm1196
                  } // endfun(auxpr_2409)
                  let jsxtnm1197 = XATSDAPP(auxpr_2409(jsxtnm973))
                  jsxtnm1198 = jsxtnm1197
                } // endlet
                // I1CMP:return:jsxtnm1198
                return jsxtnm1198
              } // endtimp(g_print(38))
              let jsxtnm1200 = XATSDAPP(jsxtnm1199(jsxtnm968))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(21100(line=1300,offs=18)--21112(line=1300,offs=30))
              // I0Etapq(I0Ecst(gs_print$end(731));$list(T2JAG($list())))
              // T1IMPallx(gs_print$end(731);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(20799(line=1274,offs=1)--20837(line=1276,offs=20)))
              // T1IMPallx(gs_print$end(731)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(731);$list()))))
              let jsxtnm1202 = function () { // timp: gs_print$end(731)
                // I1CMP:start
                let jsxtnm1201 = XATSTUP0([])
                // I1CMP:return:jsxtnm1201
                return jsxtnm1201
              } // endtimp(gs_print$end(731))
              let jsxtnm1203 = XATSDAPP(jsxtnm1202())
              jsxtnm1204 = jsxtnm1203
            } // endlet
            // I1CMP:return:jsxtnm1204
            return jsxtnm1204
          } // endtimp(gs_print_a1(733))
          let jsxtnm1206 = XATSDAPP(jsxtnm1205(jsxtnm967))
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(26220(line=1584,offs=26)--26227(line=1584,offs=33))
          // I0Etapq(I0Ecst(g_print(38));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
          // T1IMPallx(g_print(38);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2046(line=87,offs=1)--2083(line=88,offs=29)))
          // T1IMPallx(g_print(38)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(38);$list(@(x0[376],T2Pcst(strn)))))))
          let jsxtnm1212
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn000.dats)@(2071(line=88,offs=17)--2081(line=88,offs=27))
          // I0Etapq(I0Ecst(strn_print(948));$list(T2JAG($list())))
          // T1IMPallx(strn_print(948);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1931(line=84,offs=1)--2071(line=95,offs=2)))
          // T1IMPallx(strn_print(948)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(948);$list()))))
          let jsxtnm1211 = function (arg1) { // timp: strn_print(948)
            let jsxtnm1207 = arg1
            // I1CMP:start
            let jsxtnm1210 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2011(line=92,offs=1)--2069(line=94,offs=47)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(2019(line=93,offs=1)--2069(line=94,offs=47))
              // I1FUNDCL
              // XATS2JS_strn_print_2022
                // FJARGdarg($list(I1BNDcons(I1TNM(1208);I0Pvar(cs(4171));$list(@(cs(4171),I1Vtnm(I1TNM(1208)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_print);G1Nlist($list())) // I1CMP:return
              let jsxtnm1209 = XATSDAPP(XATS2JS_strn_print(jsxtnm1207))
              jsxtnm1210 = jsxtnm1209
            } // endlet
            // I1CMP:return:jsxtnm1210
            return jsxtnm1210
          } // endtimp(strn_print(948))
          jsxtnm1212 = jsxtnm1211
          let jsxtnm1213 = XATSDAPP(jsxtnm1212(XATSSTRN("\n")))
          // I1CMP:return:jsxtnm1213
          return jsxtnm1213
        } // endtimp(gs_println_a1(746))
        let jsxtnm1215 = XATSDAPP(jsxtnm1214(jsxtnm966))
        // I1CMP:return:jsxtnm1215
        return jsxtnm1215
      } // endfun(lam0)
      let jsxtnm1217 = XATSDAPP(jsxtnm965(jsxtnm878, jsxtnm1216))
      jsxtnm1218 = jsxtnm1217
    } // end(if)
    jsxtnm1219 = jsxtnm1218
  } // endlet
  // I1CMP:return:jsxtnm1219
  return jsxtnm1219
} // endfun(impl)
// I1Dvaldclist(LCSRCsome1(Game-of-24.dats)@(7840(line=414,offs=1)--7893(line=415,offs=45)))
// I1VALDCL
let jsxtnm1230
// LCSRCsome1(Game-of-24.dats)@(7849(line=415,offs=1)--7860(line=415,offs=12))
// I0Etapq(I0Ecst(console_log(2087));$list(T2JAG($list())))
// T1IMPallx(console_log(2087);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1581(line=53,offs=1)--1730(line=65,offs=2)))
// T1IMPallx(console_log(2087)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(console_log(2087);$list()))))
let jsxtnm1224 = function (arg1) { // timp: console_log(2087)
  let jsxtnm1220 = arg1
  // I1CMP:start
  let jsxtnm1223 // let
  { // let
    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1663(line=61,offs=1)--1728(line=64,offs=34)))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1671(line=62,offs=1)--1728(line=64,offs=34))
    // I1FUNDCL
    // XATS2JS_console_log_1674
      // FJARGdarg($list(I1BNDcons(I1TNM(1221);I0Pvar(x0(3901));$list(@(x0(3901),I1Vtnm(I1TNM(1221)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_console_log);G1Nlist($list())) // I1CMP:return
    let jsxtnm1222 = XATSDAPP(XATS2JS_console_log(jsxtnm1220))
    jsxtnm1223 = jsxtnm1222
  } // endlet
  // I1CMP:return:jsxtnm1223
  return jsxtnm1223
} // endtimp(console_log(2087))
// LCSRCsome1(Game-of-24.dats)@(7861(line=415,offs=13)--7882(line=415,offs=34))
// I0Etapq(I0Ecst(the_print_store_flush(2090));$list(T2JAG($list())))
// T1IMPallx(the_print_store_flush(2090);LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(1998(line=87,offs=1)--2171(line=98,offs=2)))
// T1IMPallx(the_print_store_flush(2090)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(the_print_store_flush(2090);$list()))))
let jsxtnm1227 = function () { // timp: the_print_store_flush(2090)
  // I1CMP:start
  let jsxtnm1226 // let
  { // let
    // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(2108(line=95,offs=1)--2169(line=97,offs=50)))
    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats)@(2116(line=96,offs=1)--2169(line=97,offs=50))
    // I1FUNDCL
    // XATS2JS_the_print_store_flush_2119
      // FJARGdarg($list())
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_the_print_store_flush);G1Nlist($list())) // I1CMP:return
    let jsxtnm1225 = XATSDAPP(XATS2JS_the_print_store_flush())
    jsxtnm1226 = jsxtnm1225
  } // endlet
  // I1CMP:return:jsxtnm1226
  return jsxtnm1226
} // endtimp(the_print_store_flush(2090))
let jsxtnm1228 = XATSDAPP(jsxtnm1227())
let jsxtnm1229 = XATSDAPP(jsxtnm1224(jsxtnm1228))
jsxtnm1230 = jsxtnm1229
XATS000_patck(true)
// LCSRCsome1(Game-of-24.dats)@(8179(line=426,offs=1)--8179(line=426,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(Game-of-24.dats)@(8179(line=426,offs=1)--8179(line=426,offs=1));D3Cnone0()))
