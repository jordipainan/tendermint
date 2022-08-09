(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{680:function(e,t,r){"use strict";r.r(t);var o=r(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"adr-50-improved-trusted-peering"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adr-50-improved-trusted-peering"}},[e._v("#")]),e._v(" ADR 50: Improved Trusted Peering")]),e._v(" "),r("h2",{attrs:{id:"changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),r("ul",[r("li",[e._v("22-10-2019: Initial draft")]),e._v(" "),r("li",[e._v("05-11-2019: Modify "),r("code",[e._v("maximum-dial-period")]),e._v(" to "),r("code",[e._v("persistent-peers-max-dial-period")])])]),e._v(" "),r("h2",{attrs:{id:"context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),r("p",[e._v("When "),r("code",[e._v("max-num-inbound-peers")]),e._v(" or "),r("code",[e._v("max-num-outbound-peers")]),e._v(" of a node is reached, the node cannot spare more slots to any peer\nby inbound or outbound. Therefore, after a certain period of disconnection, any important peering can be lost indefinitely\nbecause all slots are consumed by other peers, and the node stops trying to dial the peer anymore.")]),e._v(" "),r("p",[e._v("This is happening because of two reasons, exponential backoff and absence of unconditional peering feature for trusted peers.")]),e._v(" "),r("h2",{attrs:{id:"decision"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),r("p",[e._v("We would like to suggest solving this problem by introducing two parameters in "),r("code",[e._v("config.toml")]),e._v(", "),r("code",[e._v("unconditional-peer-ids")]),e._v(" and\n"),r("code",[e._v("persistent-peers-max-dial-period")]),e._v(".")]),e._v(" "),r("ol",[r("li",[r("code",[e._v("unconditional-peer-ids")])])]),e._v(" "),r("p",[e._v("A node operator inputs list of ids of peers which are allowed to be connected by both inbound or outbound regardless of\n"),r("code",[e._v("max-num-inbound-peers")]),e._v(" or "),r("code",[e._v("max-num-outbound-peers")]),e._v(" of user's node reached or not.")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("code",[e._v("persistent-peers-max-dial-period")])])]),e._v(" "),r("p",[e._v("Terms between each dial to each persistent peer will not exceed "),r("code",[e._v("persistent-peers-max-dial-period")]),e._v(" during exponential backoff.\nTherefore, "),r("code",[e._v("dial-period")]),e._v(" = min("),r("code",[e._v("persistent-peers-max-dial-period")]),e._v(", "),r("code",[e._v("exponential-backoff-dial-period")]),e._v(")")]),e._v(" "),r("p",[e._v("Alternative approach")]),e._v(" "),r("p",[e._v("Persistent-peers is only for outbound, therefore it is not enough to cover the full utility of "),r("code",[e._v("unconditional-peer-ids")]),e._v(".\n@creamers158(https://github.com/Creamers158) suggested putting id-only items into persistent-peers to be handled as\n"),r("code",[e._v("unconditional-peer-ids")]),e._v(", but it needs very complicated struct exception for different structure of items in persistent-peers.\nTherefore we decided to have "),r("code",[e._v("unconditional-peer-ids")]),e._v(" to independently cover this use-case.")]),e._v(" "),r("h2",{attrs:{id:"status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),r("p",[e._v("Proposed")]),e._v(" "),r("h2",{attrs:{id:"consequences"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),r("h3",{attrs:{id:"positive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),r("p",[e._v("A node operator can configure two new parameters in "),r("code",[e._v("config.toml")]),e._v(" so that he/she can assure that tendermint will allow connections\nfrom/to peers in "),r("code",[e._v("unconditional-peer-ids")]),e._v(". Also he/she can assure that every persistent peer will be dialed at least once in every\n"),r("code",[e._v("persistent-peers-max-dial-period")]),e._v(" term. It achieves more stable and persistent peering for trusted peers.")]),e._v(" "),r("h3",{attrs:{id:"negative"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),r("p",[e._v("The new feature introduces two new parameters in "),r("code",[e._v("config.toml")]),e._v(" which needs explanation for node operators.")]),e._v(" "),r("h3",{attrs:{id:"neutral"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),r("ul",[r("li",[e._v("two p2p feature enhancement proposal(https://github.com/tendermint/tendermint/issues/4053)")])])])}),[],!1,null,null,null);t.default=n.exports}}]);