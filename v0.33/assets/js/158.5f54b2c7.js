(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{731:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rfc-007-deterministic-proto-byte-serialization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rfc-007-deterministic-proto-byte-serialization"}},[e._v("#")]),e._v(" RFC 007 : Deterministic Proto Byte Serialization")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("09-Dec-2021: Initial draft (@williambanfield).")])]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This document discusses the issue of stable byte-representation of serialized messages\nwithin Tendermint and describes a few possible routes that could be taken to address it.")]),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("We use the byte representations of wire-format proto messages to produce\nand verify hashes of data within the Tendermint codebase as well as for\nproducing and verifying cryptographic signatures over these signed bytes.")]),e._v(" "),a("p",[e._v("The protocol buffer "),a("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/encoding",target:"_blank",rel:"noopener noreferrer"}},[e._v("encoding spec"),a("OutboundLink")],1),e._v(" does not guarantee that the byte representation\nof a protocol buffer message will be the same between two calls to an encoder.\nWhile there is a mode to force the encoder to produce the same byte representation\nof messages within a single binary, these guarantees are not good enough for our\nuse case in Tendermint. We require multiple different versions of a binary running\nTendermint to be able to inter-operate. Additionally, we require that multiple different\nsystems written in "),a("em",[e._v("different languages")]),e._v(" be able to participate in different aspects\nof the protocols of Tendermint and be able to verify the integrity of the messages\nthey each produce.")]),e._v(" "),a("p",[e._v("While this has not yet created a problem that we know of in a running network, we should\nmake sure to provide stronger guarantees around the serialized representation of the messages\nused within the Tendermint consensus algorithm to prevent any issue from occurring.")]),e._v(" "),a("h2",{attrs:{id:"discussion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[e._v("#")]),e._v(" Discussion")]),e._v(" "),a("p",[e._v("Proto has the following points of variability that can produce non-deterministic byte representation:")]),e._v(" "),a("ol",[a("li",[e._v("Encoding order of fields within a message.")])]),e._v(" "),a("p",[e._v("Proto allows fields to be encoded in any order and even be repeated.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Encoding order of elements of a repeated field.")])]),e._v(" "),a("p",[a("code",[e._v("repeated")]),e._v(" fields in a proto message can be serialized in any order.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Presence or absence of default values.")])]),e._v(" "),a("p",[e._v("Types in proto have defined default values similar to Go's zero values.\nWriting or omitting a default value are both legal ways of encoding a wire message.")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Serialization of 'unknown' fields.")])]),e._v(" "),a("p",[e._v("Unknown fields can be present when a message is created by a binary with a newer\nversion of the proto that contains fields that the deserializer in a different\nbinary does not yet know about. Deserializers in binaries that do not know about the field\nwill maintain the bytes of the unknown field but not place them into the deserialized structure.")]),e._v(" "),a("p",[e._v("We have a few options to consider when producing this stable representation.")]),e._v(" "),a("h3",{attrs:{id:"options-for-deterministic-byte-representation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options-for-deterministic-byte-representation"}},[e._v("#")]),e._v(" Options for deterministic byte representation")]),e._v(" "),a("h4",{attrs:{id:"use-only-compliant-serializers-and-constrain-field-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-only-compliant-serializers-and-constrain-field-usage"}},[e._v("#")]),e._v(" Use only compliant serializers and constrain field usage")]),e._v(" "),a("p",[e._v("According to "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/architecture/adr-027-deterministic-protobuf-serialization.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos-SDK ADR-27"),a("OutboundLink")],1),e._v(", when message types obey a simple\nset of rules, gogoproto produces a consistent byte representation of serialized messages.\nThis seems promising, although more research is needed to guarantee gogoproto always\nproduces a consistent set of bytes on serialized messages. This would solve the problem\nwithin Tendermint as written in Go, but would require ensuring that there are similar\nserializers written in other languages that produce the same output as gogoproto.")]),e._v(" "),a("h4",{attrs:{id:"reorder-serialized-bytes-to-ensure-determinism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reorder-serialized-bytes-to-ensure-determinism"}},[e._v("#")]),e._v(" Reorder serialized bytes to ensure determinism.")]),e._v(" "),a("p",[e._v("The serialized form of a proto message can be transformed into a canonical representation\nby applying simple rules to the serialized bytes. Re-ordering the serialized bytes\nwould allow Tendermint to produce a canonical byte representation without having to\nsimultaneously maintain a custom proto marshaller.")]),e._v(" "),a("p",[e._v("This could be implemented as a function in many languages that performed the following\nproducing bytes to sign or hashing:")]),e._v(" "),a("ol",[a("li",[e._v("Does not add any of the data from unknown fields into the type to hash.")])]),e._v(" "),a("p",[e._v("Tendermint should not run into a case where it needs to verify the integrity of\ndata with unknown fields for the following reasons:")]),e._v(" "),a("p",[e._v("The purpose of checking hash equality within Tendermint is to ensure that\nits local copy of data matches the data that the network agreed on. There should\ntherefore not be a case where a process is checking hash equality using data that it did not expect\nto receive. What the data represent may be opaque to the process, such as when checking the\ntransactions in a block, "),a("em",[e._v("but the process will still have expected to receive this data")]),e._v(",\ndespite not understanding what their internal structure is. It's not clear what it would\nmean to verify that a block contains data that a process does not know about.")]),e._v(" "),a("p",[e._v("The same reasoning applies for signature verification within Tendermint. Processes\nverify that a digital signature signed over a set of bytes by locally reconstructing the\ndata structure that the digital signature signed using the process's local data.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Reordered all message fields to be in tag-sorted order.")])]),e._v(" "),a("p",[e._v("Tag-sorting top-level fields will place all fields of the same tag in a adjacent\nto eachother within the serialized representation.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Reordered the contents of all "),a("code",[e._v("repeated")]),e._v(" fields to be in lexicographically sorted order.")])]),e._v(" "),a("p",[a("code",[e._v("repeated")]),e._v(" fields will appear in a message as having the same tag but will contain different\ncontents. Therefore, lexicographical sorting will produce a stable ordering of\nfields with the same tag.")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Deleted all default values from the byte representation.")])]),e._v(" "),a("p",[e._v("Encoders can include default values or omit them. Most encoders appear to omit them\nbut we may wish to delete them just to be safe.")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Recursively performed these operations on any length-delimited subfields.")])]),e._v(" "),a("p",[e._v("Length delimited fields may contain messages, strings, or just bytes. However,\nit's not possible to know what data is being represented by such a field.\nA 'string' may happen to have the same structure as an embedded message and we cannot\ndisambiguate. For this reason, we must apply these same rules to all subfields that\nmay contain messages. Because we cannot know if we have totally mangled the interior 'string'\nor not, this data should never be deserialized or used for anything beyond hashing.")]),e._v(" "),a("p",[e._v("A "),a("strong",[e._v("prototype")]),e._v(" implementation by @creachadair of this can be found in "),a("a",{attrs:{href:"https://github.com/creachadair/wirepb",target:"_blank",rel:"noopener noreferrer"}},[e._v("the wirepb repo"),a("OutboundLink")],1),e._v(".\nThis could be implemented in multiple languages more simply than ensuring that there are\ncanonical proto serializers that match in each language.")]),e._v(" "),a("h3",{attrs:{id:"future-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#future-work"}},[e._v("#")]),e._v(" Future work")]),e._v(" "),a("p",[e._v("We should add clear documentation to the Tendermint codebase every time we\ncompare hashes of proto messages or use proto serialized bytes to produces a\ndigital signatures that we have been careful to ensure that the hashes are performed\nproperly.")]),e._v(" "),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])])}),[],!1,null,null,null);t.default=r.exports}}]);